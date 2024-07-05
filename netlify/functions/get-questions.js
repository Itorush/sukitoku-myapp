const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

// CSVファイルを読み込む関数
async function readCSV(filePath) {
    return new Promise((resolve, reject) => {
        const results = [];
        fs.createReadStream(filePath)
            .pipe(csv())
            .on('data', (data) => results.push(data))
            .on('end', () => resolve(results))
            .on('error', (error) => reject(error));
    });
}

exports.handler = async (event, context) => {
    try {
        // CSVファイルのパスを設定
        const dataDir = path.resolve(__dirname, '..', 'data');
        const hobbyOptionsPath = path.join(dataDir, 'hobby_options.csv');
        const importantFactorsOptionsPath = path.join(dataDir, 'important_factors_options.csv');
        const likeFactorsOptionsPath = path.join(dataDir, 'like_factors_options.csv');
        const skillsDiagnosisQuestionsPath = path.join(dataDir, 'skills_diagnosis_questions.csv');

        console.log('Reading CSV files from:', {
            hobbyOptionsPath,
            importantFactorsOptionsPath,
            likeFactorsOptionsPath,
            skillsDiagnosisQuestionsPath
        });

        // CSVファイルを読み込む
        const hobbyOptions = await readCSV(hobbyOptionsPath);
        const importantFactorsOptions = await readCSV(importantFactorsOptionsPath);
        const likeFactorsOptions = await readCSV(likeFactorsOptionsPath);
        const skillsQuestions = await readCSV(skillsDiagnosisQuestionsPath);

        console.log('Data fetched successfully:', {
            hobby_options: hobbyOptions,
            important_factors_options: importantFactorsOptions,
            like_factors_options: likeFactorsOptions,
            skills_questions: skillsQuestions
        });

        // データを整形
        const formattedHobbyOptions = hobbyOptions.map(row => row['趣味']);
        const formattedImportantFactorsOptions = importantFactorsOptions.map(row => {
            const match = row['職種選択で大事にしたいこと選択肢'].match(/\(([^)]+)\)/);
            return match ? match[1] : '';
        });
        const formattedLikeFactorsOptions = likeFactorsOptions.map(row => {
            const match = row['好きなこと選択肢'].match(/\(([^)]+)\)/);
            return match ? match[1] : '';
        });
        const formattedSkillsQuestions = skillsQuestions.map(row => ({
            question: row['前提質問'],
            options: [row['選択肢１'], row['選択肢２']]
        }));

        return {
            statusCode: 200,
            body: JSON.stringify({
                hobby_options: formattedHobbyOptions,
                important_factors_options: formattedImportantFactorsOptions,
                like_factors_options: formattedLikeFactorsOptions,
                skills_questions: formattedSkillsQuestions
            })
        };
    } catch (error) {
        console.error('Error fetching questions:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Error fetching questions', details: error.message })
        };
    }
};

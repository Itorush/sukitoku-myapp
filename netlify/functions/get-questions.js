const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

function readCSVFile(filePath) {
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
        const hobbyOptionsPath = path.resolve(__dirname, '..', 'data', 'hobby_options.csv');
        const importantFactorsOptionsPath = path.resolve(__dirname, '..', 'data', 'important_factors_options.csv');
        const likeFactorsOptionsPath = path.resolve(__dirname, '..', 'data', 'like_factors_options.csv');
        const skillsDiagnosisQuestionsPath = path.resolve(__dirname, '..', 'data', 'skills_diagnosis_questions.csv');

        const hobbyOptions = await readCSVFile(hobbyOptionsPath);
        const importantFactorsOptions = await readCSVFile(importantFactorsOptionsPath);
        const likeFactorsOptions = await readCSVFile(likeFactorsOptionsPath);
        const skillsQuestions = await readCSVFile(skillsDiagnosisQuestionsPath);

        console.log('Data fetched successfully:', {
            hobby_options: hobbyOptions,
            important_factors_options: importantFactorsOptions,
            like_factors_options: likeFactorsOptions,
            skills_questions: skillsQuestions
        });

        return {
            statusCode: 200,
            body: JSON.stringify({
                hobby_options: hobbyOptions.map(row => row['趣味']),
                important_factors_options: importantFactorsOptions.map(row => {
                    const match = row['職種選択で大事にしたいこと選択肢'].match(/\(([^)]+)\)/);
                    return match ? match[1] : '';
                }),
                like_factors_options: likeFactorsOptions.map(row => {
                    const match = row['好きなこと選択肢'].match(/\(([^)]+)\)/);
                    return match ? match[1] : '';
                }),
                skills_questions: skillsQuestions.map(row => ({
                    question: row['前提質問'],
                    options: [row['選択肢１'], row['選択肢２']]
                }))
            })
        };
    } catch (error) {
        console.error('Error fetching questions:', error.message);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Error fetching questions', details: error.message })
        };
    }
};

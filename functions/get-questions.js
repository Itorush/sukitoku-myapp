const XLSX = require('xlsx');
const path = require('path');

exports.handler = async (event, context) => {
    try {
        // Excelファイルのパスを設定します
        const hobbyOptionsPath = path.resolve(__dirname, '..', 'data', 'hobby_options.xlsx');
        const importantFactorsOptionsPath = path.resolve(__dirname, '..', 'data', 'important_factors_options.xlsx');
        const likeFactorsOptionsPath = path.resolve(__dirname, '..', 'data', 'like_factors_options.xlsx');
        const skillsDiagnosisQuestionsPath = path.resolve(__dirname, '..', 'data', 'skills_diagnosis_questions.xlsx');

        // Excelファイルを読み込みます
        const hobbyOptionsWorkbook = XLSX.readFile(hobbyOptionsPath);
        const importantFactorsOptionsWorkbook = XLSX.readFile(importantFactorsOptionsPath);
        const likeFactorsOptionsWorkbook = XLSX.readFile(likeFactorsOptionsPath);
        const skillsDiagnosisQuestionsWorkbook = XLSX.readFile(skillsDiagnosisQuestionsPath);

        // シートからデータを取得します
        const hobbyOptionsSheet = hobbyOptionsWorkbook.Sheets[hobbyOptionsWorkbook.SheetNames[0]];
        const importantFactorsOptionsSheet = importantFactorsOptionsWorkbook.Sheets[importantFactorsOptionsWorkbook.SheetNames[0]];
        const likeFactorsOptionsSheet = likeFactorsOptionsWorkbook.Sheets[likeFactorsOptionsWorkbook.SheetNames[0]];
        const skillsDiagnosisQuestionsSheet = skillsDiagnosisQuestionsWorkbook.Sheets[skillsDiagnosisQuestionsWorkbook.SheetNames[0]];

        // データをJSON形式に変換します
        const hobbyOptions = XLSX.utils.sheet_to_json(hobbyOptionsSheet).map(row => row['趣味']);
        const importantFactorsOptions = XLSX.utils.sheet_to_json(importantFactorsOptionsSheet).map(row => {
            const match = row['職種選択で大事にしたいこと選択肢'].match(/\(([^)]+)\)/);
            return match ? match[1] : '';
        });
        const likeFactorsOptions = XLSX.utils.sheet_to_json(likeFactorsOptionsSheet).map(row => {
            const match = row['好きなこと選択肢'].match(/\(([^)]+)\)/);
            return match ? match[1] : '';
        });
        const skillsQuestions = XLSX.utils.sheet_to_json(skillsDiagnosisQuestionsSheet).map(row => ({
            question: row['前提質問'],
            options: [row['選択肢１'], row['選択肢２']]
        }));

        return {
            statusCode: 200,
            body: JSON.stringify({
                skills_questions: skillsQuestions,
                hobby_options: hobbyOptions,
                like_factors_options: likeFactorsOptions,
                important_factors_options: importantFactorsOptions
            })
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Error fetching questions', details: error.message })
        };
    }
};

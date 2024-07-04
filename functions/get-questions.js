// 必要なモジュールをインポートします。
const AWS = require('aws-sdk'); // AWS SDKを使用してS3からデータを取得します。
const s3 = new AWS.S3(); // S3クライアントを作成します。
const XLSX = require('xlsx'); // XLSXライブラリを使用してExcelファイルを解析します。
const BUCKET_NAME = 'your-s3-bucket-name'; // 使用するS3バケットの名前を設定します。

// AWS Lambda関数のエントリポイントです。
exports.handler = async (event, context) => {
    try {
        // S3バケットからExcelファイルを取得します。
        const skillsData = await s3.getObject({ Bucket: BUCKET_NAME, Key: 'skills_diagnosis_questions.xlsx' }).promise();
        const hobbyData = await s3.getObject({ Bucket: BUCKET_NAME, Key: 'hobby_options.xlsx' }).promise();
        const likeFactorsData = await s3.getObject({ Bucket: BUCKET_NAME, Key: 'like_factors_options.xlsx' }).promise();
        const importantFactorsData = await s3.getObject({ Bucket: BUCKET_NAME, Key: 'important_factors_options.xlsx' }).promise();

        // 取得したExcelデータを解析します。
        const skillsQuestions = parseExcel(skillsData.Body);
        const hobbyOptions = parseExcel(hobbyData.Body);
        const likeFactorsOptions = parseExcel(likeFactorsData.Body);
        const importantFactorsOptions = parseExcel(importantFactorsData.Body);

        // 解析結果をJSON形式で返します。
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
        // エラーハンドリング：エラーが発生した場合、500ステータスコードとエラーメッセージを返します。
        return { statusCode: 500, body: error.toString() };
    }
};

// Excelデータを解析してJSON形式に変換するヘルパー関数です。
function parseExcel(buffer) {
    const workbook = XLSX.read(buffer, { type: 'buffer' }); // バッファからExcelワークブックを読み込みます。
    const sheetName = workbook.SheetNames[0]; // 最初のシートの名前を取得します。
    const worksheet = workbook.Sheets[sheetName]; // 最初のシートを取得します。
    return XLSX.utils.sheet_to_json(worksheet); // シートをJSON形式に変換して返します。
}

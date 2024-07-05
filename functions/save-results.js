const AWS = require('aws-sdk');

// S3クライアントを作成
const s3 = new AWS.S3();

exports.handler = async (event, context) => {
    const body = JSON.parse(event.body);
    const bucketName = process.env.S3_BUCKET_NAME; // 環境変数からS3バケット名を取得

    if (!bucketName) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'S3バケット名が設定されていません' })
        };
    }

    const params = {
        Bucket: bucketName,
        Key: `results/${Date.now()}.json`,
        Body: JSON.stringify(body),
        ContentType: 'application/json'
    };

    try {
        await s3.putObject(params).promise();
        return {
            statusCode: 200,
            body: JSON.stringify({ message: '結果が保存されました' })
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: '結果の保存中にエラーが発生しました', details: error.message })
        };
    }
};

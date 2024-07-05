const AWS = require('aws-sdk');
const s3 = new AWS.S3();

exports.handler = async (event) => {
    try {
        const data = JSON.parse(event.body);

        // データをS3バケットに保存するロジックを追加
        const params = {
            Bucket: process.env.S3_BUCKET_NAME,
            Key: `results/${Date.now()}.json`,
            Body: JSON.stringify(data),
            ContentType: 'application/json'
        };

        await s3.putObject(params).promise();

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Results saved successfully' })
        };
    } catch (error) {
        console.error('Error saving results:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Error saving results', details: error.message })
        };
    }
};

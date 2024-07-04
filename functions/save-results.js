// 必要なモジュールをインポートします。
const AWS = require('aws-sdk'); // AWS SDKを使用してDynamoDBにアクセスします。
const dynamoDB = new AWS.DynamoDB.DocumentClient(); // DynamoDBクライアントを作成します。
const TABLE_NAME = 'your-dynamodb-table-name'; // 使用するDynamoDBテーブルの名前を設定します。

// AWS Lambda関数のエントリポイントです。
exports.handler = async (event) => {
    // リクエストボディからデータをパースします。
    const body = JSON.parse(event.body);
    const { userId, skills, hobbies, likeFactors, importantFactors } = body;

    // DynamoDBに保存するためのパラメータを設定します。
    const params = {
        TableName: TABLE_NAME,
        Item: {
            userId,
            skills,
            hobbies,
            likeFactors,
            importantFactors,
            timestamp: new Date().toISOString() // データの保存日時を記録します。
        }
    };

    try {
        // データをDynamoDBに保存します。
        await dynamoDB.put(params).promise();
        return {
            statusCode: 200,
            body: JSON.stringify({ message: '診断結果が保存されました。' }) // 成功メッセージを返します。
        };
    } catch (error) {
        // エラーハンドリング：エラーが発生した場合、500ステータスコードとエラーメッセージを返します。
        return { statusCode: 500, body: error.toString() };
    }
};

// verify-captcha.js
// このファイルは、Google reCAPTCHAの検証を行います。

const axios = require('axios');

exports.handler = async (event, context) => {
    const { token } = JSON.parse(event.body);

    const secretKey = process.env.RECAPTCHA_SECRET_KEY; // 環境変数に設定した秘密鍵を取得
    const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;

    try {
        const response = await axios.post(url);
        if (!response.data.success) {
            return {
                statusCode: 400,
                body: 'Captcha verification failed'
            };
        }
        return {
            statusCode: 200,
            body: 'Captcha verification succeeded'
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: 'Internal server error'
        };
    }
};

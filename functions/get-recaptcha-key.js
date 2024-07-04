// netlify/functions/get-recaptcha-key.js
// この関数は、reCAPTCHAのサイトキーをクライアントに返します。

exports.handler = async function(event, context) {
    return {
        statusCode: 200,
        body: JSON.stringify({ siteKey: process.env.RECAPTCHA_SITE_KEY })
    };
};

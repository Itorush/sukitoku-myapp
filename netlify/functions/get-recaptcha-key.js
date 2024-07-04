exports.handler = async function(event, context) {
    return {
        statusCode: 200,
        body: JSON.stringify({ siteKey: process.env.RECAPTCHA_SITE_KEY })
    };
};

// rate-limit.js
// このファイルは、リクエストを制限するためのレートリミットを実装します。

let rateLimit = {};

const RATE_LIMIT_WINDOW_MS = 60000; // 1分間のウィンドウ
const MAX_REQUESTS_PER_WINDOW = 10; // ウィンドウあたりの最大リクエスト数

exports.handler = async (event, context) => {
    const ip = event.headers['client-ip'] || event.headers['x-forwarded-for'];

    if (!rateLimit[ip]) {
        rateLimit[ip] = {
            requests: 1,
            startTime: Date.now()
        };
    } else {
        rateLimit[ip].requests += 1;
    }

    const currentTime = Date.now();
    if (currentTime - rateLimit[ip].startTime > RATE_LIMIT_WINDOW_MS) {
        rateLimit[ip] = {
            requests: 1,
            startTime: currentTime
        };
    }

    if (rateLimit[ip].requests > MAX_REQUESTS_PER_WINDOW) {
        return {
            statusCode: 429,
            body: 'Too Many Requests'
        };
    }

    return {
        statusCode: 200,
        body: 'Request allowed'
    };
};

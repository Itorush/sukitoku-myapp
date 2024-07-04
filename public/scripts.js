document.addEventListener("DOMContentLoaded", function() {
    // サイトキーを取得して設定
    fetch('/.netlify/functions/get-recaptcha-key')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const recaptchaElement = document.querySelector('.g-recaptcha');
            if (recaptchaElement) {
                recaptchaElement.setAttribute('data-sitekey', data.siteKey);
            } else {
                console.error("reCAPTCHA element not found.");
            }
        })
        .catch(error => {
            console.error("Error fetching site key:", error);
        });

    // フェーズを表示する関数を定義
    function showPhase(phase) {
        document.querySelectorAll('.phase').forEach(function(phaseDiv) {
            phaseDiv.classList.remove('active');
        });
        document.getElementById('phase' + phase).classList.add('active');
    }

    // フェーズを表示する関数を呼び出します
    showPhase(1);

    // サーバーから質問データを取得します
    fetch('/.netlify/functions/get-questions')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            generateQuestions(data);
        })
        .catch(error => {
            console.error("Error fetching questions:", error);
        });

    function generateQuestions(data) {
        const skillsQuestionsContainer = document.getElementById('skillsQuestions');
        const hobbyOptionsContainer = document.getElementById('hobbyOptions');
        const likeFactorsOptionsContainer = document.getElementById('likeFactorsOptions');
        const importantFactorsOptionsContainer = document.getElementById('importantFactorsOptions');

        // 趣味の選択肢を生成
        data.hobby_options.forEach((option, index) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option';
            optionDiv.innerHTML = `
                <label for="hobby${index + 1}">
                    <input type="checkbox" id="hobby${index + 1}" name="hobbies" value="${option}">
                    ${option}
                </label>
            `;
            hobbyOptionsContainer.appendChild(optionDiv);
        });

        // 好きなことの要素を生成
        data.like_factors_options.forEach((option, index) => {
            const factor = option.match(/\(([^)]+)\)/)[1];
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option';
            optionDiv.innerHTML = `
                <label for="likeFactor${index + 1}">
                    <input type="checkbox" id="likeFactor${index + 1}" name="likeFactors" value="${factor}">
                    ${factor}
                </label>
            `;
            likeFactorsOptionsContainer.appendChild(optionDiv);
        });

        // 大事にしたいことの要素を生成
        data.important_factors_options.forEach((option, index) => {
            const factor = option.match(/\(([^)]+)\

document.addEventListener("DOMContentLoaded", function() {
    // サイトキーを取得して設定
    fetch('/.netlify/functions/get-recaptcha-key')
        .then(response => response.json())
        .then(data => {
            const recaptchaElement = document.querySelector('.g-recaptcha');
            if (recaptchaElement) {
                recaptchaElement.setAttribute('data-sitekey', data.siteKey);
            }
        });

    // フェーズを表示する関数を呼び出します
    showPhase(1);

    // サーバーから質問データを取得します
    fetch('/.netlify/functions/get-questions')
        .then(response => response.json())
        .then(data => {
            generateQuestions(data);
        });

    function generateQuestions(data) {
        const skillsQuestionsContainer = document.getElementById('skillsQuestions');
        const hobbyOptionsContainer = document.getElementById('hobbyOptions');
        const likeFactorsOptionsContainer = document.getElementById('likeFactorsOptions');
        const importantFactorsOptionsContainer = document.getElementById('importantFactorsOptions');

        // 得意なことの質問を生成
        data.skills_questions.forEach((question, index) => {
            const questionDiv = document.createElement('div');
            questionDiv.className = 'question';
            questionDiv.innerHTML = `
                <label for="skill${index + 1}">${question.question}</label>
                <input type="range" id="skill${index + 1}" name="skills" min="1" max="6">
            `;
            skillsQuestionsContainer.appendChild(questionDiv);
        });

        // 趣味の選択肢を生成
        data.hobby_options.forEach((option, index) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'question';
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
            const optionDiv = document.createElement('div');
            optionDiv.className = 'question';
            optionDiv.innerHTML = `
                <label for="likeFactor${index + 1}">
                    <input type="checkbox" id="likeFactor${index + 1}" name="likeFactors" value="${option}">
                    ${option}
                </label>
            `;
            likeFactorsOptionsContainer.appendChild(optionDiv);
        });

        // 大事にしたいことの要素を生成
        data.important_factors_options.forEach((option, index) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'question';
            questionDiv.innerHTML = `
                <label for="importantFactor${index + 1}">
                    <input type="checkbox" id="importantFactor${index + 1}" name="importantFactors" value="${option}">
                    ${option}
                </label>
            `;
            importantFactorsOptionsContainer.appendChild(optionDiv);
        });
    }

    // フェーズを表示する関数
    window.showPhase = function(phase) {
        document.querySelectorAll('.phase').forEach(function(phaseDiv) {
            phaseDiv.classList.remove('active');
        });
        document.getElementById('phase' + phase).classList.add('active');
    };

    // フォーム送信時の処理
    document.getElementById('diagnosisForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(this);
        const skills = formData.getAll('skills');
        const hobbies = formData.getAll('hobbies');
        const likeFactors = formData.getAll('likeFactors');
        const importantFactors = formData.getAll('importantFactors');

        const data = { skills, hobbies, likeFactors, importantFactors };

        // CAPTCHAトークンを取得
        const captchaToken = grecaptcha.getResponse();

        // CAPTCHAトークンをサーバーに送信して検証
        fetch('/.netlify/functions/verify-captcha', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ token: captchaToken })
        })
        .then(response => response.json())
        .then(result => {
            if (result.statusCode === 200) {
                // CAPTCHAが成功した場合、診断結果を保存
                fetch('/.netlify/functions/save-results', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                .then(response => response.json())
                .then(result => {
                    console.log(result.message);
                    window.location.href = 'diagnosis-results.html';
                });
            } else {
                alert('CAPTCHA verification failed');
            }
        });
    });
});

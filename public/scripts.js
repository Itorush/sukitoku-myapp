document.addEventListener("DOMContentLoaded", function() {
    // サイトキーを取得して設定
    fetch('/.netlify/functions/get-recaptcha-key')
        .then(response => response.json())
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
        .then(response => response.json())
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
            const factor = option.match(/\(([^)]+)\)/)[1];
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option';
            optionDiv.innerHTML = `
                <label for="importantFactor${index + 1}">
                    <input type="checkbox" id="importantFactor${index + 1}" name="importantFactors" value="${factor}">
                    ${factor}
                </label>
            `;
            importantFactorsOptionsContainer.appendChild(optionDiv);
        });

        // 得意なことの質問を生成
        data.skills_questions.forEach((question, index) => {
            const questionDiv = document.createElement('div');
            questionDiv.className = 'question';
            questionDiv.innerHTML = `
                <label>${question.question}</label>
                <div class="options">
                    <span>${question.options[0]}</span>
                    <input type="range" id="skill${index + 1}" name="skills" min="1" max="6">
                    <span>${question.options[1]}</span>
                </div>
            `;
            skillsQuestionsContainer.appendChild(questionDiv);
        });
    }

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

        // データをローカルストレージに保存
        localStorage.setItem('diagnosisData', JSON.stringify(data));
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const hobbyOptions = [
        { sy1: 'a', sy2: 'a', sy3: 1, id: 'aa1', elementname: 'スポーツ' },
        { sy1: 'a', sy2: 'a', sy3: 2, id: 'aa2', elementname: 'スポーツ観戦' },
        // 他の趣味オプションも同様に追加
    ];

    const likeFactorsOptions1 = [
        { sy1: 'i', sy2: 'b', sy3: 1, id: 'ib1', elementname: '都会的環境' },
        { sy1: 'i', sy2: 'b', sy3: 2, id: 'ib2', elementname: '自然的環境' }
    ];

    const likeFactorsOptions2 = [
        { sy1: 'i', sy2: 'c', sy3: 1, id: 'ic1', elementname: '大勢の環境' },
        { sy1: 'i', sy2: 'c', sy3: 2, id: 'ic2', elementname: '少数の環境' }
    ];

    const likeFactorsOptions3 = [
        { sy1: 'i', sy2: 'd', sy3: 1, id: 'id1', elementname: '人と関われる要素やチームワーク' },
        { sy1: 'i', sy2: 'd', sy3: 2, id: 'id2', elementname: '単独の活動や個人作業' }
    ];

    const likeFactorsOptions4 = [
        { sy1: 'i', sy2: 'e', sy3: 1, id: 'ie1', elementname: 'アクティブな要素やエネルギッシュな活動' },
        // 他の要素も同様に追加
    ];

    const importantFactorsOptions = [
        { sy1: 'u', sy2: 'f', sy3: 1, id: 'uf1', elementname: '個人の成長と学び' },
        { sy1: 'u', sy2: 'f', sy3: 2, id: 'uf2', elementname: '社会貢献' },
        // 他の要素も同様に追加
    ];

    const skillsQuestions = [
        { elementname: "仕事上の課題に直面したとき、どのように対処しますか？", option1: "事実やデータに基づき対処", option2: "感情や感覚を頼りに対処", axis1: "論理", axis2: "感情", el_sy1: "o", el_sy2: "l", el_sy3: 1, el_ID: "ol1", ax1_sy1: "e", ax1_sy2: "g", ax1_sy3: 1, ax1_id: "eg1", ax2_sy1: "e", ax2_sy2: "g", ax2_sy3: 2, ax2_id: "eg2" },
        { elementname: "議論の際、どのように進めますか？", option1: "論理的根拠をもとに進行", option2: "相手の気持ちに配慮して進行", axis1: "論理", axis2: "感情", el_sy1: "o", el_sy2: "l", el_sy3: 2, el_ID: "ol2", ax1_sy1: "e", ax1_sy2: "g", ax1_sy3: 1, ax1_id: "eg1", ax2_sy1: "e", ax2_sy2: "g", ax2_sy3: 2, ax2_id: "eg2" },
        // 他の質問も同様に追加
    ];

    function showPhase(phase) {
        document.querySelectorAll('.phase').forEach(function(phaseDiv) {
            phaseDiv.classList.remove('active');
        });
        document.getElementById('phase' + phase).classList.add('active');
    }

    function generateQuestions() {
        const hobbyOptionsContainer = document.getElementById('hobbyOptions');
        const likeFactorsOptionsContainer1 = document.getElementById('likeFactorsOptions1');
        const likeFactorsOptionsContainer2 = document.getElementById('likeFactorsOptions2');
        const likeFactorsOptionsContainer3 = document.getElementById('likeFactorsOptions3');
        const likeFactorsOptionsContainer4 = document.getElementById('likeFactorsOptions4');
        const importantFactorsOptionsContainer = document.getElementById('importantFactorsOptions');
        const skillsQuestionsContainer = document.getElementById('skillsQuestions');

        // 趣味の選択肢を生成
        hobbyOptions.forEach((option, index) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option';
            optionDiv.innerHTML = `
                <label for="hobby${index + 1}">
                    <input type="checkbox" id="hobby${index + 1}" name="hobbies" value="${option.elementname}">
                    ${option.elementname}
                </label>
            `;
            hobbyOptionsContainer.appendChild(optionDiv);
        });

        // 好きなことの要素を生成（1つ目のセット）
        likeFactorsOptions1.forEach((option, index) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option';
            optionDiv.innerHTML = `
                <label for="likeFactor1-${index + 1}">
                    <input type="radio" id="likeFactor1-${index + 1}" name="likeFactors1" value="${option.elementname}">
                    ${option.elementname}
                </label>
            `;
            likeFactorsOptionsContainer1.appendChild(optionDiv);
        });

        // 好きなことの要素を生成（2つ目のセット）
        likeFactorsOptions2.forEach((option, index) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option';
            optionDiv.innerHTML = `
                <label for="likeFactor2-${index + 1}">
                    <input type="radio" id="likeFactor2-${index + 1}" name="likeFactors2" value="${option.elementname}">
                    ${option.elementname}
                </label>
            `;
            likeFactorsOptionsContainer2.appendChild(optionDiv);
        });

        // 好きなことの要素を生成（3つ目のセット）
        likeFactorsOptions3.forEach((option, index) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option';
            optionDiv.innerHTML = `
                <label for="likeFactor3-${index + 1}">
                    <input type="radio" id="likeFactor3-${index + 1}" name="likeFactors3" value="${option.elementname}">
                    ${option.elementname}
                </label>
            `;
            likeFactorsOptionsContainer3.appendChild(optionDiv);
        });

        // 好きなことの要素を生成（4つ目のセット）
        likeFactorsOptions4.forEach((option, index) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option';
            optionDiv.innerHTML = `
                <label for="likeFactor4-${index + 1}">
                    <input type="checkbox" id="likeFactor4-${index + 1}" name="likeFactors4" value="${option.elementname}">
                    ${option.elementname}
                </label>
            `;
            likeFactorsOptionsContainer4.appendChild(optionDiv);
        });

        // 大事にしたいことの要素を生成
        importantFactorsOptions.forEach((option, index) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option';
            optionDiv.innerHTML = `
                <label for="importantFactor${index + 1}">
                    <input type="checkbox" id="importantFactor${index + 1}" name="importantFactors" value="${option.elementname}">
                    ${option.elementname}
                </label>
            `;
            importantFactorsOptionsContainer.appendChild(optionDiv);
        });

        // 得意なことの質問を生成
        const groupedQuestions = [
            skillsQuestions.slice(0, 5),
            skillsQuestions.slice(5, 10),
            skillsQuestions.slice(10, 15),
            skillsQuestions.slice(15, 20),
            skillsQuestions.slice(20, 25)
        ];

        let selectedQuestions = [];
        groupedQuestions.forEach(group => {
            selectedQuestions = selectedQuestions.concat(shuffleArray(group).slice(0, 3));
        });

        selectedQuestions = shuffleArray(selectedQuestions);

        selectedQuestions.forEach((question, index) => {
            const questionDiv = document.createElement('div');
            questionDiv.className = 'question';
            questionDiv.innerHTML = `
                <div class="question-label-container">
                    <label class="question-label">${question.elementname}</label>
                </div>
                <div class="label-row">
                    <div class="empty"></div>
                    <div class="strong-agree">強く同意する</div>
                    <div class="empty"></div>
                    <div class="empty"></div>
                    <div class="empty"></div>
                    <div class="empty"></div>
                    <div class="neutral">どちらともいえない</div>
                    <div class="empty"></div>
                    <div class="empty"></div>
                    <div class="empty"></div>
                    <div class="empty"></div>
                    <div class="strong-agree">強く同意する</div>
                    <div class="empty"></div>
                </div>
                <div class="buttons-container">
                    <input type="radio" id="skill${index + 1}-1" name="skills${index + 1}" value="1" data-axis1="${question.axis1}" data-axis2="${question.axis2}" data-firstname="${question.el_ID}" data-secondname="${question.ax1_id}" data-thirdname="three">
                    <label for="skill${index + 1}-1"><span></span></label>
                    <input type="radio" id="skill${index + 1}-2" name="skills${index + 1}" value="2" data-axis1="${question.axis1}" data-axis2="${question.axis2}" data-firstname="${question.el_ID}" data-secondname="${question.ax1_id}" data-thirdname="two">
                    <label for="skill${index + 1}-2"><span></span></label>
                    <input type="radio" id="skill${index + 1}-3" name="skills${index + 1}" value="3" data-axis1="${question.axis1}" data-axis2="${question.axis2}" data-firstname="${question.el_ID}" data-secondname="${question.ax1_id}" data-thirdname="one">
                    <label for="skill${index + 1}-3"><span></span></label>
                    <input type="radio" id="skill${index + 1}-4" name="skills${index + 1}" value="4" data-axis1="${question.axis1}" data-axis2="${question.axis2}" data-firstname="${question.el_ID}" data-secondname="${question.ax2_id}" data-thirdname="one">
                    <label for="skill${index + 1}-4"><span></span></label>
                    <input type="radio" id="skill${index + 1}-5" name="skills${index + 1}" value="5" data-axis1="${question.axis1}" data-axis2="${question.axis2}" data-firstname="${question.el_ID}" data-secondname="${question.ax2_id}" data-thirdname="two">
                    <label for="skill${index + 1}-5"><span></span></label>
                    <input type="radio" id="skill${index + 1}-6" name="skills${index + 1}" value="6" data-axis1="${question.axis1}" data-axis2="${question.axis2}" data-firstname="${question.el_ID}" data-secondname="${question.ax2_id}" data-thirdname="three">
                    <label for="skill${index + 1}-6"><span></span></label>
                </div>
                <div class="options-row">
                    <div class="empty"></div>
                    <div class="option">${question.option1}</div>
                    <div class="empty"></div>
                    <div class="empty"></div>
                    <div class="empty"></div>
                    <div class="empty"></div>
                    <div class="empty"></div>
                    <div class="empty"></div>
                    <div class="empty"></div>
                    <div class="empty"></div>
                    <div class="option">${question.option2}</div>
                    <div class="empty"></div>
                </div>
            `;
            skillsQuestionsContainer.appendChild(questionDiv);
        });
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    window.validateHobbies = function() {
        const selectedHobbies = document.querySelectorAll('input[name="hobbies"]:checked');
        const warning = document.getElementById('hobbyWarning');
        
        if (selectedHobbies.length < 1 || selectedHobbies.length > 3) {
            warning.textContent = '趣味は1つ以上3つ以内で選択してください。';
            return false;
        } else {
            warning.textContent = '';
            return true;
        }
    }

    window.validateLikeFactors = function() {
        const selectedLikeFactors1 = document.querySelectorAll('input[name="likeFactors1"]:checked');
        const selectedLikeFactors2 = document.querySelectorAll('input[name="likeFactors2"]:checked');
        const selectedLikeFactors3 = document.querySelectorAll('input[name="likeFactors3"]:checked');
        const selectedLikeFactors4 = document.querySelectorAll('input[name="likeFactors4"]:checked');
        const warnings = [
            document.getElementById('likeFactorsWarning1'),
            document.getElementById('likeFactorsWarning2'),
            document.getElementById('likeFactorsWarning3'),
            document.getElementById('likeFactorsWarning4')
        ];

        let valid = true;

        if (selectedLikeFactors1.length < 1) {
            warnings[0].textContent = 'どちらか1つ選択してください。';
            valid = false;
        } else {
            warnings[0].textContent = '';
        }

        if (selectedLikeFactors2.length < 1) {
            warnings[1].textContent = 'どちらか1つ選択してください。';
            valid = false;
        } else {
            warnings[1].textContent = '';
        }

        if (selectedLikeFactors3.length < 1) {
            warnings[2].textContent = 'どちらか1つ選択してください。';
            valid = false;
        } else {
            warnings[2].textContent = '';
        }

        if (selectedLikeFactors4.length < 1 || selectedLikeFactors4.length > 3) {
            warnings[3].textContent = '1つ以上3つ以内で選択してください。';
            valid = false;
        } else {
            warnings[3].textContent = '';
        }

        return valid;
    }

    window.validateImportantFactors = function() {
        const selectedImportantFactors = document.querySelectorAll('input[name="importantFactors"]:checked');
        const warning = document.getElementById('importantFactorsWarning');
        
        if (selectedImportantFactors.length < 1 || selectedImportantFactors.length > 3) {
            warning.textContent = '仕事を選ぶうえで大事にしたいことは1つ以上3つ以内で選択してください。';
            return false;
        } else {
            warning.textContent = '';
            return true;
        }
    }

    function validateSkills() {
        const skillQuestions = document.querySelectorAll('[name^="skills"]');
        const warning = document.getElementById('skillsWarning');
        
        let valid = true;
        const questionsMap = new Map();

        skillQuestions.forEach(input => {
            const questionName = input.getAttribute('name');
            if (!questionsMap.has(questionName)) {
                questionsMap.set(questionName, false);
            }
            if (input.checked) {
                questionsMap.set(questionName, true);
            }
        });

        questionsMap.forEach((answered, questionName) => {
            if (!answered) {
                valid = false;
            }
        });

        if (!valid) {
            warning.textContent = '全ての質問に対して6つの中から１つを選択してください。';
        } else {
            warning.textContent = '';
        }

        return valid;
    }

    function saveSelectionsToLocalStorage(formData) {
        const hobbies = formData.getAll('hobbies');
        const likeFactors1 = formData.getAll('likeFactors1');
        const likeFactors2 = formData.getAll('likeFactors2');
        const likeFactors3 = formData.getAll('likeFactors3');
        const likeFactors4 = formData.getAll('likeFactors4');
        const importantFactors = formData.getAll('importantFactors');
        const skills = formData.getAll('skills');

        const data = { hobbies, likeFactors1, likeFactors2, likeFactors3, likeFactors4, importantFactors, skills };

        localStorage.setItem('diagnosisData', JSON.stringify(data));
    }

    function generatePreprocessingTable() {
        const data = JSON.parse(localStorage.getItem('diagnosisData'));
        if (!data) {
            console.error('診断データが見つかりませんでした。');
            return [];
        }

        const preprocessingTable = skillsQuestions.map(question => {
            const chosenButton = Array.from(document.querySelectorAll(`[name^="skills"]`)).find(input => {
                const skillQuestion = skillsQuestions.find(q => q.elementname === question.elementname);
                return skillQuestion && input.checked && input.getAttribute('data-firstname') === question.el_ID;
            });

            const isChosen = !!chosenButton;
            const axis1Score = isChosen && chosenButton.getAttribute('data-secondname') === question.ax1_id ? getScoreByThirdname(chosenButton.getAttribute('data-thirdname')) : 0;
            const axis2Score = isChosen && chosenButton.getAttribute('data-secondname') === question.ax2_id ? getScoreByThirdname(chosenButton.getAttribute('data-thirdname')) : 0;

            return {
                chosen: isChosen ? 1 : 0,
                axis1score: axis1Score,
                axis2score: axis2Score,
                sy1: question.el_sy1,
                sy2: question.el_sy2,
                sy3: question.el_sy3,
                id: question.el_ID,
                elementname: question.elementname
            };
        });

        localStorage.setItem('preprocessingTable', JSON.stringify(preprocessingTable));
        return preprocessingTable;
    }

    function getScoreByThirdname(thirdname) {
        switch (thirdname) {
            case 'one':
                return 1;
            case 'two':
                return 2;
            case 'three':
                return 3;
            default:
                return 0;
        }
    }

    function generateScoreTable() {
        const data = JSON.parse(localStorage.getItem('diagnosisData'));
        const preprocessingTable = JSON.parse(localStorage.getItem('preprocessingTable'));
        if (!data || !preprocessingTable) {
            console.error('診断データまたは前処理データが見つかりませんでした。');
            return;
        }

        const scoreTable = [
            // 趣味
            ...hobbyOptions.map(option => ({
                score: data.hobbies.includes(option.elementname) ? '1' : '0',
                sy1: option.sy1,
                sy2: option.sy2,
                sy3: option.sy3,
                id: option.id,
                elementname: option.elementname
            })),
            // 好きなこと（likeFactorsOptions1）
            ...likeFactorsOptions1.map(option => ({
                score: data.likeFactors1.includes(option.elementname) ? '1' : '0',
                sy1: option.sy1,
                sy2: option.sy2,
                sy3: option.sy3,
                id: option.id,
                elementname: option.elementname
            })),
            // 好きなこと（likeFactorsOptions2）
            ...likeFactorsOptions2.map(option => ({
                score: data.likeFactors2.includes(option.elementname) ? '1' : '0',
                sy1: option.sy1,
                sy2: option.sy2,
                sy3: option.sy3,
                id: option.id,
                elementname: option.elementname
            })),
            // 好きなこと（likeFactorsOptions3）
            ...likeFactorsOptions3.map(option => ({
                score: data.likeFactors3.includes(option.elementname) ? '1' : '0',
                sy1: option.sy1,
                sy2: option.sy2,
                sy3: option.sy3,
                id: option.id,
                elementname: option.elementname
            })),
            // 好きなこと（likeFactorsOptions4）
            ...likeFactorsOptions4.map(option => ({
                score: data.likeFactors4.includes(option.elementname) ? '1' : '0',
                sy1: option.sy1,
                sy2: option.sy2,
                sy3: option.sy3,
                id: option.id,
                elementname: option.elementname
            })),
            // 大事にしたいこと
            ...importantFactorsOptions.map(option => ({
                score: data.importantFactors.includes(option.elementname) ? '1' : '0',
                sy1: option.sy1,
                sy2: option.sy2,
                sy3: option.sy3,
                id: option.id,
                elementname: option.elementname
            })),
            // 得意なこと
            ...preprocessingTable.map(preprocess => ({
                score: preprocess.chosen ? `${preprocess.axis1score}/${preprocess.axis2score}` : '0/0',
                sy1: preprocess.sy1,
                sy2: preprocess.sy2,
                sy3: preprocess.sy3,
                id: preprocess.id,
                elementname: preprocess.elementname
            }))
        ];

        // 「得意な要素の合計スコア」の計算
        const sumScores = {
            eg1: 0,
            eg2: 0,
            eh1: 0,
            eh2: 0,
            ei1: 0,
            ei2: 0,
            ej1: 0,
            ej2: 0,
            ek1: 0,
            ek2: 0
        };

        preprocessingTable.forEach(preprocess => {
            if (preprocess.sy2 === 'l') {
                sumScores.eg1 += preprocess.axis1score;
                sumScores.eg2 += preprocess.axis2score;
            } else if (preprocess.sy2 === 'm') {
                sumScores.eh1 += preprocess.axis1score;
                sumScores.eh2 += preprocess.axis2score;
            } else if (preprocess.sy2 === 'n') {
                sumScores.ei1 += preprocess.axis1score;
                sumScores.ei2 += preprocess.axis2score;
            } else if (preprocess.sy2 === 'o') {
                sumScores.ej1 += preprocess.axis1score;
                sumScores.ej2 += preprocess.axis2score;
            } else if (preprocess.sy2 === 'p') {
                sumScores.ek1 += preprocess.axis1score;
                sumScores.ek2 += preprocess.axis2score;
            }
        });

        const elementSumScores = [
            { score: sumScores.eg1, sy1: 'e', sy2: 'g', sy3: 1, id: 'eg1', elementname: '論理' },
            { score: sumScores.eg2, sy1: 'e', sy2: 'g', sy3: 2, id: 'eg2', elementname: '感情' },
            { score: sumScores.eh1, sy1: 'e', sy2: 'h', sy3: 1, id: 'eh1', elementname: '精密性' },
            { score: sumScores.eh2, sy1: 'e', sy2: 'h', sy3: 2, id: 'eh2', elementname: '全体像' },
            { score: sumScores.ei1, sy1: 'e', sy2: 'i', sy3: 1, id: 'ei1', elementname: '伝統性' },
            { score: sumScores.ei2, sy1: 'e', sy2: 'i', sy3: 2, id: 'ei2', elementname: '創造性' },
            { score: sumScores.ej1, sy1: 'e', sy2: 'j', sy3: 1, id: 'ej1', elementname: '熟考' },
            { score: sumScores.ej2, sy1: 'e', sy2: 'j', sy3: 2, id: 'ej2', elementname: '即座' },
            { score: sumScores.ek1, sy1: 'e', sy2: 'k', sy3: 1, id: 'ek1', elementname: '身体能力' },
            { score: sumScores.ek2, sy1: 'e', sy2: 'k', sy3: 2, id: 'ek2', elementname: '学力' }
        ];

        scoreTable.push(...elementSumScores);

        localStorage.setItem('scoreTable', JSON.stringify(scoreTable));
    }

    function showResults() {
        generatePreprocessingTable();
        generateScoreTable();
        window.location.href = 'diagnosis-results.html';
    }

    function showDeveloperResults() {
        generatePreprocessingTable();
        generateScoreTable();
        window.location.href = 'diagnosis-results.html';
    }

    document.getElementById('diagnosisForm').addEventListener('submit', function(event) {
        event.preventDefault();
    
        const formData = new FormData(this);
        
        if (validateHobbies() && validateLikeFactors() && validateImportantFactors() && validateSkills()) {
            saveSelectionsToLocalStorage(formData);
            showResults();
        }
    });

    document.getElementById('developerButton').addEventListener('click', function(event) {
        event.preventDefault();
        showDeveloperResults();
    });
    
    generateQuestions();
});

document.addEventListener("DOMContentLoaded", function() {
    const hobbyOptions = [
        "スポーツ", "スポーツ観戦", "音楽鑑賞", "楽器演奏", "映画鑑賞", "テレビ鑑賞", "読書", "写真撮影", "絵画やイラスト",
        "手芸・クラフト", "料理・お菓子作り", "ガーデニング", "旅行", "ハイキング・登山", "フィットネス・エクササイズ",
        "ヨガ・ピラティス", "ダンス", "カラオケ", "ビデオゲーム", "ボードゲーム・カードゲーム", "コレクション（切手、古銭、模型など）",
        "釣り", "キャンプ・アウトドア活動", "天体観測", "昆虫採集・バードウォッチング", "DIY・日曜大工", "茶道・華道",
        "書道", "コスプレ・アニメ・漫画", "ワイン・コーヒー・グルメ"
    ];

    const likeFactorsOptions1 = ["都会的環境", "自然的環境"];
    const likeFactorsOptions2 = ["大勢の環境", "少数の環境"];
    const likeFactorsOptions3 = ["人と関われる要素やチームワーク", "単独の活動や個人作業"];
    const likeFactorsOptions4 = [
        "アクティブな要素やエネルギッシュな活動", "リラックスできる要素や安全で安心な活動", "新しい経験や学びの要素や変化がはやく飽きない活動",
        "慣れた経験やマイペースでできる活動", "実生活に役立つ要素", "論理的な要素", "技術的な要素", "芸術的な要素や自己表現できる活動",
        "楽な活動", "競争的な要素や挑戦的な活動", "社会から評価される要素や達成感がある活動", "プロセスが面白い要素や自由に楽しめる活動",
        "手先の作業", "頭脳の作業", "学び続ける要素", "不思議な要素や神秘的な要素", "奥が深い要素や熱中できる活動", "ファンタジーの要素",
        "人に喜んでもらえる要素", "稼げる要素やお金に関わる活動", "かっこいい要素や目立つ要素", "異性にモテやすい要素", "機械に関係している要素",
        "いきものに関係している要素"
    ];

    const importantFactorsOptions = [
        "個人の成長と学び", "社会貢献", "仕事の質と成果", "創造性とイノベーション", "協力とチームワーク",
        "自由と柔軟性", "安定と安全", "リーダーシップと影響力", "冒険と挑戦", "ワークライフバランス",
        "報酬と評価", "倫理と道徳性"
    ];

    const skillsQuestions = [
        { question: "仕事上の課題に直面したとき、どのように対処しますか？", options: ["事実やデータに基づき対処", "感情や感覚を頼りに対処"], axis1: "論理", axis2: "感情" },
        { question: "議論の際、どのように進めますか？", options: ["論理的根拠をもとに進行", "相手の気持ちに配慮して進行"], axis1: "論理", axis2: "感情" },
        { question: "新しいプロジェクトに取り組むとき、どのように進めますか？", options: ["明確な手順をもとにする", "直観やフィーリングを頼りにする"], axis1: "論理", axis2: "感情" },
        { question: "スキルを学ぶとき、どのように学びますか？", options: ["論理や概念", "経験やエピソード"], axis1: "論理", axis2: "感情" },
        { question: "他人の意見と異なる場合、どのように説得しますか？", options: ["事実やデータから説得", "感情や気持ちから説得"], axis1: "論理", axis2: "感情" },
        { question: "プロジェクトを進める際、どのように取り組みますか？", options: ["細部にこだわる", "全体の流れや方向性を定める"], axis1: "精密性", axis2: "全体像" },
        { question: "作業を進行する際、どちらから決めますか？", options: ["細かいタスク", "大まかなゴール"], axis1: "精密性", axis2: "全体像" },
        { question: "報告書を作成するとき、どちらをより重視しますか？", options: ["誤字脱字や1文ごとの構成", "全体のメッセージや章立て"], axis1: "精密性", axis2: "全体像" },
        { question: "計画を立てるとき、どのように行動しますか？", options: ["チェックリストをつくる", "アイデアや戦略を考える"], axis1: "精密性", axis2: "全体像" },
        { question: "旅行の計画を行う際、どのように取り組みますか？", options: ["詳細なスケジュールを決める", "大まかな目的地を決める"], axis1: "精密性", axis2: "全体像" },
        { question: "仕事の進め方を考えるとき、どちらの方法を選択しますか？", options: ["既存の方法", "新しい方法"], axis1: "伝統性", axis2: "創造性" },
        { question: "新しいアイデアやプロセスを試す際、どのように取り組みますか？", options: ["安全で確立した方法", "挑戦的で独創的な方法"], axis1: "伝統性", axis2: "創造性" },
        { question: "作業手順を決める際、どのように行動しますか？", options: ["既存のフレームワークを採用", "独自のやり方を加える"], axis1: "伝統性", axis2: "創造性" },
        { question: "アイデアを提案する際、どのように進めますか？", options: ["過去の成功事例を参考にする", "独自の発想を重視する"], axis1: "伝統性", axis2: "創造性" },
        { question: "問題解決の際、どのように取り組みますか？", options: ["伝統的アプローチ", "創造的アプローチ"], axis1: "伝統性", axis2: "創造性" },
        { question: "重要な決断をする際、どのように行動しますか？", options: ["慎重に考える", "直観や瞬時の判断"], axis1: "熟考", axis2: "即座" },
        { question: "プロジェクトを開始するときどのように進めますか？", options: ["リサーチや分析", "行動して調整"], axis1: "熟考", axis2: "即座" },
        { question: "問題に直面したとき、どのように対処しますか？", options: ["深く考える", "素早く行動"], axis1: "熟考", axis2: "即座" },
        { question: "新しいことを始めるとき、どのように行動しますか？", options: ["慎重に計画", "試して改善"], axis1: "熟考", axis2: "即座" },
        { question: "予期しない問題が発生したとき、どのように対応しますか？", options: ["じっくり考える", "すぐに行動"], axis1: "熟考", axis2: "即座" },
        { question: "どのような作業が得意ですか？", options: ["体を動かす作業", "頭を使う作業"], axis1: "身体能力", axis2: "学力" },
        { question: "あなたの普段の活動では、どのようなことをよく行いますか？", options: ["スポーツ", "知的活動"], axis1: "身体能力", axis2: "学力" },
        { question: "仕事で一番活躍できると感じるのはどちらの作業ですか？", options: ["身体作業", "分析や思考"], axis1: "身体能力", axis2: "学力" },
        { question: "新しいスキルを習得するとき、どのように学びますか？", options: ["実践的に学ぶ", "理論を学ぶ"], axis1: "身体能力", axis2: "学力" },
        { question: "趣味や余暇の時間に、どのような活動を行いますか？", options: ["身体活動", "勉強"], axis1: "身体能力", axis2: "学力" }
    ];

    function showPhase(phase) {
        document.querySelectorAll('.phase').forEach(function(phaseDiv) {
            phaseDiv.classList.remove('active');
        });
        document.getElementById('phase' + phase).classList.add('active');
    }

    function generateQuestions() {
        const hobbyOptionsContainer = document.getElementById('hobbyOptions');
        const likeFactorsOptions1Container = document.getElementById('likeFactorsOptions1');
        const likeFactorsOptions2Container = document.getElementById('likeFactorsOptions2');
        const likeFactorsOptions3Container = document.getElementById('likeFactorsOptions3');
        const likeFactorsOptions4Container = document.getElementById('likeFactorsOptions4');
        const importantFactorsOptionsContainer = document.getElementById('importantFactorsOptions');
        const skillsQuestionsContainer = document.getElementById('skillsQuestions');

        // 趣味の選択肢を生成
        hobbyOptions.forEach((option, index) => {
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

        // 好きなことの要素を生成（4段階）
        likeFactorsOptions1.forEach((option, index) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option';
            optionDiv.innerHTML = `
                <label for="likeFactor1_${index + 1}">
                    <input type="radio" id="likeFactor1_${index + 1}" name="likeFactors1" value="${option}">
                    ${option}
                </label>
            `;
            likeFactorsOptions1Container.appendChild(optionDiv);
        });

        likeFactorsOptions2.forEach((option, index) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option';
            optionDiv.innerHTML = `
                <label for="likeFactor2_${index + 1}">
                    <input type="radio" id="likeFactor2_${index + 1}" name="likeFactors2" value="${option}">
                    ${option}
                </label>
            `;
            likeFactorsOptions2Container.appendChild(optionDiv);
        });

        likeFactorsOptions3.forEach((option, index) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option';
            optionDiv.innerHTML = `
                <label for="likeFactor3_${index + 1}">
                    <input type="radio" id="likeFactor3_${index + 1}" name="likeFactors3" value="${option}">
                    ${option}
                </label>
            `;
            likeFactorsOptions3Container.appendChild(optionDiv);
        });

        likeFactorsOptions4.forEach((option, index) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option';
            optionDiv.innerHTML = `
                <label for="likeFactor4_${index + 1}">
                    <input type="checkbox" id="likeFactor4_${index + 1}" name="likeFactors4" value="${option}">
                    ${option}
                </label>
            `;
            likeFactorsOptions4Container.appendChild(optionDiv);
        });

        // 大事にしたいことの要素を生成
        importantFactorsOptions.forEach((option, index) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option';
            optionDiv.innerHTML = `
                <label for="importantFactor${index + 1}">
                    <input type="checkbox" id="importantFactor${index + 1}" name="importantFactors" value="${option}">
                    ${option}
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
                <label class="question-label">${question.question}</label>
                <div class="options">
                    <span>${question.options[0]}</span>
                    <div class="buttons">
                        <label for="skill${index + 1}-1"><span class="scale-item"></span></label>
                        <input type="radio" id="skill${index + 1}-1" name="skills${index + 1}" value="1" data-axis1="${question.axis1}" data-axis2="${question.axis2}">
                        <label for="skill${index + 1}-2"><span class="scale-item"></span></label>
                        <input type="radio" id="skill${index + 1}-2" name="skills${index + 1}" value="2" data-axis1="${question.axis1}" data-axis2="${question.axis2}">
                        <label for="skill${index + 1}-3"><span class="scale-item"></span></label>
                        <input type="radio" id="skill${index + 1}-3" name="skills${index + 1}" value="3" data-axis1="${question.axis1}" data-axis2="${question.axis2}">
                        <label for="skill${index + 1}-4"><span class="scale-item"></span></label>
                        <input type="radio" id="skill${index + 1}-4" name="skills${index + 1}" value="4" data-axis1="${question.axis1}" data-axis2="${question.axis2}">
                        <label for="skill${index + 1}-5"><span class="scale-item"></span></label>
                        <input type="radio" id="skill${index + 1}-5" name="skills${index + 1}" value="5" data-axis1="${question.axis1}" data-axis2="${question.axis2}">
                        <label for="skill${index + 1}-6"><span class="scale-item"></span></label>
                        <input type="radio" id="skill${index + 1}-6" name="skills${index + 1}" value="6" data-axis1="${question.axis1}" data-axis2="${question.axis2}">
                    </div>
                    <span>${question.options[1]}</span>
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
        const selectedLikeFactors1 = document.querySelector('input[name="likeFactors1"]:checked');
        const selectedLikeFactors2 = document.querySelector('input[name="likeFactors2"]:checked');
        const selectedLikeFactors3 = document.querySelector('input[name="likeFactors3"]:checked');
        const selectedLikeFactors4 = document.querySelectorAll('input[name="likeFactors4"]:checked');
        const warning1 = document.getElementById('likeFactorsWarning1');
        const warning2 = document.getElementById('likeFactorsWarning2');
        const warning3 = document.getElementById('likeFactorsWarning3');
        const warning4 = document.getElementById('likeFactorsWarning4');
        
        let valid = true;

        if (!selectedLikeFactors1) {
            warning1.textContent = '選択肢1は1つ選択してください。';
            valid = false;
        } else {
            warning1.textContent = '';
        }

        if (!selectedLikeFactors2) {
            warning2.textContent = '選択肢2は1つ選択してください。';
            valid = false;
        } else {
            warning2.textContent = '';
        }

        if (!selectedLikeFactors3) {
            warning3.textContent = '選択肢3は1つ選択してください。';
            valid = false;
        } else {
            warning3.textContent = '';
        }

        if (selectedLikeFactors4.length < 1 || selectedLikeFactors4.length > 3) {
            warning4.textContent = '好きなことの要素4は1つ以上3つ以内で選択してください。';
            valid = false;
        } else {
            warning4.textContent = '';
        }

        return valid;
    }

    window.validateImportantFactors = function() {
        const selectedImportantFactors = document.querySelectorAll('input[name="importantFactors"]:checked');
        const warning = document.getElementById('importantFactorsWarning');
        
        if (selectedImportantFactors.length < 1 || selectedImportantFactors.length > 3) {
            warning.textContent = '大事にしたいことは1つ以上3つ以内で選択してください。';
            return false;
        } else {
            warning.textContent = '';
            return true;
        }
    }

    function validateSkills() {
        const skillInputs = document.querySelectorAll('input[type="radio"]:checked');
        let valid = skillInputs.length === 15;  // 15問すべてに回答されているか確認

        const warning = document.getElementById('skillsWarning');
        if (!valid) {
            warning.textContent = '全ての質問に対して6段階評価を選択してください。';
        } else {
            warning.textContent = '';
        }

        return valid;
    }

    function saveSelectionsToLocalStorage(formData) {
        const hobbies = formData.getAll('hobbies');
        const likeFactors1 = formData.get('likeFactors1');
        const likeFactors2 = formData.get('likeFactors2');
        const likeFactors3 = formData.get('likeFactors3');
        const likeFactors4 = formData.getAll('likeFactors4');
        const importantFactors = formData.getAll('importantFactors');
        const skills = formData.getAll('skills');

        const data = { hobbies, likeFactors1, likeFactors2, likeFactors3, likeFactors4, importantFactors, skills };

        localStorage.setItem('diagnosisData', JSON.stringify(data));
    }

    document.getElementById('diagnosisForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(this);
        
        if (validateHobbies() && validateLikeFactors() && validateImportantFactors() && validateSkills()) {
            saveSelectionsToLocalStorage(formData);

            const skills = formData.getAll('skills');
            const points = {};

            skills.forEach(skill => {
                const value = parseInt(skill.value);
                const axis1 = skill.dataset.axis1;
                const axis2 = skill.dataset.axis2;

                if (!points[axis1]) points[axis1] = 0;
                if (!points[axis2]) points[axis2] = 0;

                if (value <= 3) {
                    points[axis1] += (4 - value);
                } else {
                    points[axis2] += (value - 3);
                }
            });

            localStorage.setItem('points', JSON.stringify(points));

            fetch('/.netlify/functions/save-results', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ hobbies: formData.getAll('hobbies'), likeFactors1: formData.get('likeFactors1'), likeFactors2: formData.get('likeFactors2'), likeFactors3: formData.get('likeFactors3'), likeFactors4: formData.getAll('likeFactors4'), importantFactors: formData.getAll('importantFactors'), skills })
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(result => {
                console.log(result.message);
                window.location.href = 'diagnosis-results.html';
            })
            .catch(error => {
                console.error("Error saving results:", error);
            });
        }
    });

    generateQuestions();
});



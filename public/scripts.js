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
                    <input type="checkbox" id="hobby${index + 1}" name="hobbies" value="${option}">
                    ${option}
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
                    <input type="radio" id="likeFactor1-${index + 1}" name="likeFactors1" value="${option}">
                    ${option}
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
                    <input type="radio" id="likeFactor2-${index + 1}" name="likeFactors2" value="${option}">
                    ${option}
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
                    <input type="radio" id="likeFactor3-${index + 1}" name="likeFactors3" value="${option}">
                    ${option}
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
                    <input type="checkbox" id="likeFactor4-${index + 1}" name="likeFactors4" value="${option}">
                    ${option}
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
                <div class="question-label-container">
                    <label class="question-label">${question.question}</label>
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
                    <input type="radio" id="skill${index + 1}-1" name="skills${index + 1}" value="1" data-axis1="${question.axis1}" data-axis2="${question.axis2}">
                    <label for="skill${index + 1}-1"><span></span></label>
                    <input type="radio" id="skill${index + 1}-2" name="skills${index + 1}" value="2" data-axis1="${question.axis1}" data-axis2="${question.axis2}">
                    <label for="skill${index + 1}-2"><span></span></label>
                    <input type="radio" id="skill${index + 1}-3" name="skills${index + 1}" value="3" data-axis1="${question.axis1}" data-axis2="${question.axis2}">
                    <label for="skill${index + 1}-3"><span></span></label>
                    <input type="radio" id="skill${index + 1}-4" name="skills${index + 1}" value="4" data-axis1="${question.axis1}" data-axis2="${question.axis2}">
                    <label for="skill${index + 1}-4"><span></span></label>
                    <input type="radio" id="skill${index + 1}-5" name="skills${index + 1}" value="5" data-axis1="${question.axis1}" data-axis2="${question.axis2}">
                    <label for="skill${index + 1}-5"><span></span></label>
                    <input type="radio" id="skill${index + 1}-6" name="skills${index + 1}" value="6" data-axis1="${question.axis1}" data-axis2="${question.axis2}">
                    <label for="skill${index + 1}-6"><span></span></label>
                </div>
                    <div class="options-row">
                    <div class="empty"></div>
                    <div class="option">${question.options[0]}</div>
                    <div class="empty"></div>
                    <div class="empty"></div>
                    <div class="empty"></div>
                    <div class="empty"></div>
                    <div class="empty"></div>
                    <div class="empty"></div>
                    <div class="empty"></div>
                    <div class="empty"></div>
                    <div class="option">${question.options[1]}</div>
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
            warnings[0].textContent = '1つ以上選択してください。';
            valid = false;
        } else {
            warnings[0].textContent = '';
        }

        if (selectedLikeFactors2.length < 1) {
            warnings[1].textContent = '1つ以上選択してください。';
            valid = false;
        } else {
            warnings[1].textContent = '';
        }

        if (selectedLikeFactors3.length < 1) {
            warnings[2].textContent = '1つ以上選択してください。';
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
            warning.textContent = '大事にしたいことは1つ以上3つ以内で選択してください。';
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
            warning.textContent = '全ての質問に対して6段階評価を選択してください。';
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

    function generatePreprocessingTable(data, groupedQuestions) {
        const preprocessingTable = [
            { chosen: '', axis1score: '', axis2score: '', sy2: 'l', sy3: 1, id: 'El1', question: '仕事上の課題に直面したとき、どのように対処しますか？', axis1: '論理', axis2: '感情' },
            { chosen: '', axis1score: '', axis2score: '', sy2: 'l', sy3: 2, id: 'El2', question: '議論の際、どのように進めますか？', axis1: '論理', axis2: '感情' },
            { chosen: '', axis1score: '', axis2score: '', sy2: 'l', sy3: 3, id: 'El3', question: '新しいプロジェクトに取り組むとき、どのように進めますか？', axis1: '論理', axis2: '感情' },
            { chosen: '', axis1score: '', axis2score: '', sy2: 'l', sy3: 4, id: 'El4', question: 'スキルを学ぶとき、どのように学びますか？', axis1: '論理', axis2: '感情' },
            { chosen: '', axis1score: '', axis2score: '', sy2: 'l', sy3: 5, id: 'El5', question: '他人の意見と異なる場合、どのように説得しますか？', axis1: '論理', axis2: '感情' },
            { chosen: '', axis1score: '', axis2score: '', sy2: 'm', sy3: 1, id: 'Em1', question: 'プロジェクトを進める際、どのように取り組みますか？', axis1: '精密性', axis2: '全体像' },
            { chosen: '', axis1score: '', axis2score: '', sy2: 'm', sy3: 2, id: 'Em2', question: '作業を進行する際、どちらから決めますか？', axis1: '精密性', axis2: '全体像' },
            { chosen: '', axis1score: '', axis2score: '', sy2: 'm', sy3: 3, id: 'Em3', question: '報告書を作成するとき、どちらをより重視しますか？', axis1: '精密性', axis2: '全体像' },
            { chosen: '', axis1score: '', axis2score: '', sy2: 'm', sy3: 4, id: 'Em4', question: '計画を立てるとき、どのように行動しますか？', axis1: '精密性', axis2: '全体像' },
            { chosen: '', axis1score: '', axis2score: '', sy2: 'm', sy3: 5, id: 'Em5', question: '旅行の計画を行う際、どのように取り組みますか？', axis1: '精密性', axis2: '全体像' },
            { chosen: '', axis1score: '', axis2score: '', sy2: 'n', sy3: 1, id: 'En1', question: '仕事の進め方を考えるとき、どちらの方法を選択しますか？', axis1: '伝統性', axis2: '創造性' },
            { chosen: '', axis1score: '', axis2score: '', sy2: 'n', sy3: 2, id: 'En2', question: '新しいアイデアやプロセスを試す際、どのように取り組みますか？', axis1: '伝統性', axis2: '創造性' },
            { chosen: '', axis1score: '', axis2score: '', sy2: 'n', sy3: 3, id: 'En3', question: '作業手順を決める際、どのように行動しますか？', axis1: '伝統性', axis2: '創造性' },
            { chosen: '', axis1score: '', axis2score: '', sy2: 'n', sy3: 4, id: 'En4', question: 'アイデアを提案する際、どのように進めますか？', axis1: '伝統性', axis2: '創造性' },
            { chosen: '', axis1score: '', axis2score: '', sy2: 'n', sy3: 5, id: 'En5', question: '問題解決の際、どのように取り組みますか？', axis1: '伝統性', axis2: '創造性' },
            { chosen: '', axis1score: '', axis2score: '', sy2: 'o', sy3: 1, id: 'Eo1', question: '重要な決断をする際、どのように行動しますか？', axis1: '熟考', axis2: '即座' },
            { chosen: '', axis1score: '', axis2score: '', sy2: 'o', sy3: 2, id: 'Eo2', question: 'プロジェクトを開始するときどのように進めますか？', axis1: '熟考', axis2: '即座' },
            { chosen: '', axis1score: '', axis2score: '', sy2: 'o', sy3: 3, id: 'Eo3', question: '問題に直面したとき、どのように対処しますか？', axis1: '熟考', axis2: '即座' },
            { chosen: '', axis1score: '', axis2score: '', sy2: 'o', sy3: 4, id: 'Eo4', question: '新しいことを始めるとき、どのように行動しますか？', axis1: '熟考', axis2: '即座' },
            { chosen: '', axis1score: '', axis2score: '', sy2: 'o', sy3: 5, id: 'Eo5', question: '予期しない問題が発生したとき、どのように対応しますか？', axis1: '熟考', axis2: '即座' },
            { chosen: '', axis1score: '', axis2score: '', sy2: 'p', sy3: 1, id: 'Ep1', question: 'どのような作業が得意ですか？', axis1: '身体能力', axis2: '学力' },
            { chosen: '', axis1score: '', axis2score: '', sy2: 'p', sy3: 2, id: 'Ep2', question: 'あなたの普段の活動では、どのようなことをよく行いますか？', axis1: '身体能力', axis2: '学力' },
            { chosen: '', axis1score: '', axis2score: '', sy2: 'p', sy3: 3, id: 'Ep3', question: '仕事で一番活躍できると感じるのはどちらの作業ですか？', axis1: '身体能力', axis2: '学力' },
            { chosen: '', axis1score: '', axis2score: '', sy2: 'p', sy3: 4, id: 'Ep4', question: '新しいスキルを習得するとき、どのように学びますか？', axis1: '身体能力', axis2: '学力' },
            { chosen: '', axis1score: '', axis2score: '', sy2: 'p', sy3: 5, id: 'Ep5', question: '趣味や余暇の時間に、どのような活動を行いますか？', axis1: '身体能力', axis2: '学力' }
        ];

        preprocessingTable.forEach(row => {
            row.chosen = groupedQuestions.some(group => group.some(q => q.question === row.question)) ? '1' : '0';
            if (row.chosen === '1') {
                row.axis1score = '0';
                row.axis2score = '0';
            } else {
                const selectedSkill = data.skills.find(skill => {
                    const question = skillsQuestions.find(q => q.question === row.question);
                    return question && question.options.includes(skill);
                });
                const value = parseInt(selectedSkill);
                if (selectedSkill) {
                    if (value === 1) row.axis1score = '3';
                    if (value === 2) row.axis1score = '2';
                    if (value === 3) row.axis1score = '1';
                    if (value === 4) row.axis2score = '1';
                    if (value === 5) row.axis2score = '2';
                    if (value === 6) row.axis2score = '3';
                } else {
                    row.axis1score = '0';
                    row.axis2score = '0';
                }
            }
        });

        return preprocessingTable;
    }

    function updateScoreTable(preprocessingTable) {
        const scoreTable = [
            { score: '', sy1: 'a', sy2: 1, sy3: 'Aa1', id: 'スポーツ' },
            { score: '', sy1: 'a', sy2: 2, sy3: 'Aa2', id: 'スポーツ観戦' },
            { score: '', sy1: 'a', sy2: 3, sy3: 'Aa3', id: '音楽鑑賞' },
            { score: '', sy1: 'a', sy2: 4, sy3: 'Aa4', id: '楽器演奏' },
            { score: '', sy1: 'a', sy2: 5, sy3: 'Aa5', id: '映画鑑賞' },
            { score: '', sy1: 'a', sy2: 6, sy3: 'Aa6', id: 'テレビ鑑賞' },
            { score: '', sy1: 'a', sy2: 7, sy3: 'Aa7', id: '読書' },
            { score: '', sy1: 'a', sy2: 8, sy3: 'Aa8', id: '写真撮影' },
            { score: '', sy1: 'a', sy2: 9, sy3: 'Aa9', id: '絵画やイラスト' },
            { score: '', sy1: 'a', sy2: 10, sy3: 'Aa10', id: '手芸・クラフト' },
            { score: '', sy1: 'a', sy2: 11, sy3: 'Aa11', id: '料理・お菓子作り' },
            { score: '', sy1: 'a', sy2: 12, sy3: 'Aa12', id: 'ガーデニング' },
            { score: '', sy1: 'a', sy2: 13, sy3: 'Aa13', id: '旅行' },
            { score: '', sy1: 'a', sy2: 14, sy3: 'Aa14', id: 'ハイキング・登山' },
            { score: '', sy1: 'a', sy2: 15, sy3: 'Aa15', id: 'フィットネス・エクササイズ' },
            { score: '', sy1: 'a', sy2: 16, sy3: 'Aa16', id: 'ヨガ・ピラティス' },
            { score: '', sy1: 'a', sy2: 17, sy3: 'Aa17', id: 'ダンス' },
            { score: '', sy1: 'a', sy2: 18, sy3: 'Aa18', id: 'カラオケ' },
            { score: '', sy1: 'a', sy2: 19, sy3: 'Aa19', id: 'ビデオゲーム' },
            { score: '', sy1: 'a', sy2: 20, sy3: 'Aa20', id: 'ボードゲーム・カードゲーム' },
            { score: '', sy1: 'a', sy2: 21, sy3: 'Aa21', id: 'コレクション（切手、古銭、模型など）' },
            { score: '', sy1: 'a', sy2: 22, sy3: 'Aa22', id: '釣り' },
            { score: '', sy1: 'a', sy2: 23, sy3: 'Aa23', id: 'キャンプ・アウトドア活動' },
            { score: '', sy1: 'a', sy2: 24, sy3: 'Aa24', id: '天体観測' },
            { score: '', sy1: 'a', sy2: 25, sy3: 'Aa25', id: '昆虫採集・バードウォッチング' },
            { score: '', sy1: 'a', sy2: 26, sy3: 'Aa26', id: 'DIY・日曜大工' },
            { score: '', sy1: 'a', sy2: 27, sy3: 'Aa27', id: '茶道・華道' },
            { score: '', sy1: 'a', sy2: 28, sy3: 'Aa28', id: '書道' },
            { score: '', sy1: 'a', sy2: 29, sy3: 'Aa29', id: 'コスプレ・アニメ・漫画' },
            { score: '', sy1: 'a', sy2: 30, sy3: 'Aa30', id: 'ワイン・コーヒー・グルメ' },
            { score: '', sy1: 'b', sy2: 1, sy3: 'Bb1', id: '都会的環境' },
            { score: '', sy1: 'b', sy2: 2, sy3: 'Bb2', id: '自然的環境' },
            { score: '', sy1: 'c', sy2: 1, sy3: 'Bc1', id: '大勢の環境' },
            { score: '', sy1: 'c', sy2: 2, sy3: 'Bc2', id: '少数の環境' },
            { score: '', sy1: 'd', sy2: 1, sy3: 'Bd1', id: '人と関われる要素やチームワーク' },
            { score: '', sy1: 'd', sy2: 2, sy3: 'Bd2', id: '単独の活動や個人作業' },
            { score: '', sy1: 'e', sy2: 1, sy3: 'Be1', id: 'アクティブな要素やエネルギッシュな活動' },
            { score: '', sy1: 'e', sy2: 2, sy3: 'Be2', id: 'リラックスできる要素や安全で安心な活動' },
            { score: '', sy1: 'e', sy2: 3, sy3: 'Be3', id: '新しい経験や学びの要素や変化がはやく飽きない活動' },
            { score: '', sy1: 'e', sy2: 4, sy3: 'Be4', id: '慣れた経験やマイペースでできる活動' },
            { score: '', sy1: 'e', sy2: 5, sy3: 'Be5', id: '実生活に役立つ要素' },
            { score: '', sy1: 'e', sy2: 6, sy3: 'Be6', id: '論理的な要素' },
            { score: '', sy1: 'e', sy2: 7, sy3: 'Be7', id: '技術的な要素' },
            { score: '', sy1: 'e', sy2: 8, sy3: 'Be8', id: '芸術的な要素や自己表現できる活動' },
            { score: '', sy1: 'e', sy2: 9, sy3: 'Be9', id: '楽な活動' },
            { score: '', sy1: 'e', sy2: 10, sy3: 'Be10', id: '競争的な要素や挑戦的な活動' },
            { score: '', sy1: 'e', sy2: 11, sy3: 'Be11', id: '社会から評価される要素や達成感がある活動' },
            { score: '', sy1: 'e', sy2: 12, sy3: 'Be12', id: 'プロセスが面白い要素や自由に楽しめる活動' },
            { score: '', sy1: 'e', sy2: 13, sy3: 'Be13', id: '手先の作業' },
            { score: '', sy1: 'e', sy2: 14, sy3: 'Be14', id: '頭脳の作業' },
            { score: '', sy1: 'e', sy2: 15, sy3: 'Be15', id: '学び続ける要素' },
            { score: '', sy1: 'e', sy2: 16, sy3: 'Be16', id: '不思議な要素や神秘的な要素' },
            { score: '', sy1: 'e', sy2: 17, sy3: 'Be17', id: '奥が深い要素や熱中できる活動' },
            { score: '', sy1: 'e', sy2: 18, sy3: 'Be18', id: 'ファンタジーの要素' },
            { score: '', sy1: 'e', sy2: 19, sy3: 'Be19', id: '人に喜んでもらえる要素' },
            { score: '', sy1: 'e', sy2: 20, sy3: 'Be20', id: '稼げる要素やお金に関わる活動' },
            { score: '', sy1: 'e', sy2: 21, sy3: 'Be21', id: 'かっこいい要素や目立つ要素' },
            { score: '', sy1: 'e', sy2: 22, sy3: 'Be22', id: '異性にモテやすい要素' },
            { score: '', sy1: 'e', sy2: 23, sy3: 'Be23', id: '機械に関係している要素' },
            { score: '', sy1: 'e', sy2: 24, sy3: 'Be24', id: 'いきものに関係している要素' },
            { score: '', sy1: 'f', sy2: 1, sy3: 'Cf1', id: '個人の成長と学び' },
            { score: '', sy1: 'f', sy2: 2, sy3: 'Cf2', id: '社会貢献' },
            { score: '', sy1: 'f', sy2: 3, sy3: 'Cf3', id: '仕事の質と成果' },
            { score: '', sy1: 'f', sy2: 4, sy3: 'Cf4', id: '創造性とイノベーション' },
            { score: '', sy1: 'f', sy2: 5, sy3: 'Cf5', id: '協力とチームワーク' },
            { score: '', sy1: 'f', sy2: 6, sy3: 'Cf6', id: '自由と柔軟性' },
            { score: '', sy1: 'f', sy2: 7, sy3: 'Cf7', id: '安定と安全' },
            { score: '', sy1: 'f', sy2: 8, sy3: 'Cf8', id: 'リーダーシップと影響力' },
            { score: '', sy1: 'f', sy2: 9, sy3: 'Cf9', id: '冒険と挑戦' },
            { score: '', sy1: 'f', sy2: 10, sy3: 'Cf10', id: 'ワークライフバランス' },
            { score: '', sy1: 'f', sy2: 11, sy3: 'Cf11', id: '報酬と評価' },
            { score: '', sy1: 'f', sy2: 12, sy3: 'Cf12', id: '倫理と道徳性' },
            { score: '', sy1: 'g', sy2: 1, sy3: 'Dg1', id: '論理' },
            { score: '', sy1: 'g', sy2: 2, sy3: 'Dg2', id: '感情' },
            { score: '', sy1: 'h', sy2: 1, sy3: 'Dh1', id: '精密性' },
            { score: '', sy1: 'h', sy2: 2, sy3: 'Dh2', id: '全体像' },
            { score: '', sy1: 'i', sy2: 1, sy3: 'Di1', id: '伝統性' },
            { score: '', sy1: 'i', sy2: 2, sy3: 'Di2', id: '創造性' },
            { score: '', sy1: 'j', sy2: 1, sy3: 'Dj1', id: '熟考' },
            { score: '', sy1: 'j', sy2: 2, sy3: 'Dj2', id: '即座' },
            { score: '', sy1: 'k', sy2: 1, sy3: 'Dk1', id: '身体能力' },
            { score: '', sy1: 'k', sy2: 2, sy3: 'Dk2', id: '学力' },
            { score: '', sy1: 'l', sy2: 1, sy3: 'El1', id: '仕事上の課題に直面したとき、どのように対処しますか？' },
            { score: '', sy1: 'l', sy2: 2, sy3: 'El2', id: '議論の際、どのように進めますか？' },
            { score: '', sy1: 'l', sy2: 3, sy3: 'El3', id: '新しいプロジェクトに取り組むとき、どのように進めますか？' },
            { score: '', sy1: 'l', sy2: 4, sy3: 'El4', id: 'スキルを学ぶとき、どのように学びますか？' },
            { score: '', sy1: 'l', sy2: 5, sy3: 'El5', id: '他人の意見と異なる場合、どのように説得しますか？' },
            { score: '', sy1: 'm', sy2: 1, sy3: 'Em1', id: 'プロジェクトを進める際、どのように取り組みますか？' },
            { score: '', sy1: 'm', sy2: 2, sy3: 'Em2', id: '作業を進行する際、どちらから決めますか？' },
            { score: '', sy1: 'm', sy2: 3, sy3: 'Em3', id: '報告書を作成するとき、どちらをより重視しますか？' },
            { score: '', sy1: 'm', sy2: 4, sy3: 'Em4', id: '計画を立てるとき、どのように行動しますか？' },
            { score: '', sy1: 'm', sy2: 5, sy3: 'Em5', id: '旅行の計画を行う際、どのように取り組みますか？' },
            { score: '', sy1: 'n', sy2: 1, sy3: 'En1', id: '仕事の進め方を考えるとき、どちらの方法を選択しますか？' },
            { score: '', sy1: 'n', sy2: 2, sy3: 'En2', id: '新しいアイデアやプロセスを試す際、どのように取り組みますか？' },
            { score: '', sy1: 'n', sy2: 3, sy3: 'En3', id: '作業手順を決める際、どのように行動しますか？' },
            { score: '', sy1: 'n', sy2: 4, sy3: 'En4', id: 'アイデアを提案する際、どのように進めますか？' },
            { score: '', sy1: 'n', sy2: 5, sy3: 'En5', id: '問題解決の際、どのように取り組みますか？' },
            { score: '', sy1: 'o', sy2: 1, sy3: 'Eo1', id: '重要な決断をする際、どのように行動しますか？' },
            { score: '', sy1: 'o', sy2: 2, sy3: 'Eo2', id: 'プロジェクトを開始するときどのように進めますか？' },
            { score: '', sy1: 'o', sy2: 3, sy3: 'Eo3', id: '問題に直面したとき、どのように対処しますか？' },
            { score: '', sy1: 'o', sy2: 4, sy3: 'Eo4', id: '新しいことを始めるとき、どのように行動しますか？' },
            { score: '', sy1: 'o', sy2: 5, sy3: 'Eo5', id: '予期しない問題が発生したとき、どのように対応しますか？' },
            { score: '', sy1: 'p', sy2: 1, sy3: 'Ep1', id: 'どのような作業が得意ですか？' },
            { score: '', sy1: 'p', sy2: 2, sy3: 'Ep2', id: 'あなたの普段の活動では、どのようなことをよく行いますか？' },
            { score: '', sy1: 'p', sy2: 3, sy3: 'Ep3', id: '仕事で一番活躍できると感じるのはどちらの作業ですか？' },
            { score: '', sy1: 'p', sy2: 4, sy3: 'Ep4', id: '新しいスキルを習得するとき、どのように学びますか？' },
            { score: '', sy1: 'p', sy2: 5, sy3: 'Ep5', id: '趣味や余暇の時間に、どのような活動を行いますか？' }
        ];

        // ① ルールの適用
        ['論理', '感情', '精密性', '全体像', '伝統性', '創造性', '熟考', '即座', '身体能力', '学力'].forEach(id => {
            const totalAxis1 = preprocessingTable.filter(row => row.axis1 === id).reduce((sum, row) => sum + parseInt(row.axis1score), 0);
            const totalAxis2 = preprocessingTable.filter(row => row.axis2 === id).reduce((sum, row) => sum + parseInt(row.axis2score), 0);
            const totalScore = totalAxis1 + totalAxis2;
            const scoreRow = scoreTable.find(row => row.id === id);
            if (scoreRow) scoreRow.score = totalScore.toString();
        });

        // ② ルールの適用
        preprocessingTable.forEach(row => {
            const scoreRow = scoreTable.find(scoreRow => scoreRow.question === row.question);
            if (scoreRow) scoreRow.score = row.chosen;
        });

        // ローカルストレージに保存
        localStorage.setItem('scoreTable', JSON.stringify(scoreTable));
    }

    function generateScoreTable() {
        const data = JSON.parse(localStorage.getItem('diagnosisData'));
        if (!data) {
            console.error('診断データが見つかりませんでした。');
            return;
        }

        const groupedQuestions = [
            skillsQuestions.slice(0, 5),
            skillsQuestions.slice(5, 10),
            skillsQuestions.slice(10, 15),
            skillsQuestions.slice(15, 20),
            skillsQuestions.slice(20, 25)
        ];

        const preprocessingTable = generatePreprocessingTable(data, groupedQuestions);
        updateScoreTable(preprocessingTable);
    }

    function showResults() {
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

    generateQuestions();
});

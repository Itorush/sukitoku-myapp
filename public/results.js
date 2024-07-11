document.addEventListener("DOMContentLoaded", function() {
    function displayPreprocessingResults() {
        const preprocessingResultsBody = document.getElementById('preprocessingResultsBody');
        const preprocessingTable = JSON.parse(localStorage.getItem('preprocessingTable'));
        
        if (!preprocessingTable) {
            console.error('前処理結果が見つかりませんでした。');
            return;
        }

        preprocessingTable.forEach(row => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${row.chosen}</td>
                <td>${row.axis1score}</td>
                <td>${row.axis2score}</td>
                <td>${row.sy1}</td>
                <td>${row.sy2}</td>
                <td>${row.sy3}</td>
                <td>${row.id}</td>
                <td>${row.elementname}</td>
            `;
            preprocessingResultsBody.appendChild(tr);
        });
    }

    function displayScoreResults() {
        const scoreResultsBody = document.getElementById('scoreResultsBody');
        const scoreTable = JSON.parse(localStorage.getItem('scoreTable'));
        
        if (!scoreTable) {
            console.error('スコア結果が見つかりませんでした。');
            return;
        }

        scoreTable.forEach(row => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${row.score}</td>
                <td>${row.sy1}</td>
                <td>${row.sy2}</td>
                <td>${row.sy3}</td>
                <td>${row.id}</td>
                <td>${row.elementname}</td>
            `;
            scoreResultsBody.appendChild(tr);
        });
    }

    function displaySkillScoreResults() {
        const skillScoreResultsBody = document.getElementById('skillScoreResultsBody');
        const skillScoreTable = JSON.parse(localStorage.getItem('skillScoreTable'));
        
        if (!skillScoreTable) {
            console.error('得意な要素の合計スコアが見つかりませんでした。');
            return;
        }

        skillScoreTable.forEach(row => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${row.score}</td>
                <td>${row.sy1}</td>
                <td>${row.sy2}</td>
                <td>${row.sy3}</td>
                <td>${row.id}</td>
                <td>${row.elementname}</td>
            `;
            skillScoreResultsBody.appendChild(tr);
        });
    }

    function generateSkillScoreTable() {
        const data = JSON.parse(localStorage.getItem('diagnosisData'));
        const preprocessingTable = JSON.parse(localStorage.getItem('preprocessingTable'));
        if (!data || !preprocessingTable) {
            console.error('診断データまたは前処理データが見つかりませんでした。');
            return;
        }

        const skillScoreTable = [
            { score: preprocessingTable.reduce((acc, row) => acc + (row.axis1score || 0), 0), sy1: 'e', sy2: 'g', sy3: 1, id: 'eg1', elementname: '論理' },
            { score: preprocessingTable.reduce((acc, row) => acc + (row.axis2score || 0), 0), sy1: 'e', sy2: 'g', sy3: 2, id: 'eg2', elementname: '感情' },
            { score: preprocessingTable.reduce((acc, row) => acc + (row.axis1score || 0), 0), sy1: 'e', sy2: 'h', sy3: 1, id: 'eh1', elementname: '精密性' },
            { score: preprocessingTable.reduce((acc, row) => acc + (row.axis2score || 0), 0), sy1: 'e', sy2: 'h', sy3: 2, id: 'eh2', elementname: '全体像' },
            { score: preprocessingTable.reduce((acc, row) => acc + (row.axis1score || 0), 0), sy1: 'e', sy2: 'i', sy3: 1, id: 'ei1', elementname: '伝統性' },
            { score: preprocessingTable.reduce((acc, row) => acc + (row.axis2score || 0), 0), sy1: 'e', sy2: 'i', sy3: 2, id: 'ei2', elementname: '創造性' },
            { score: preprocessingTable.reduce((acc, row) => acc + (row.axis1score || 0), 0), sy1: 'e', sy2: 'j', sy3: 1, id: 'ej1', elementname: '熟考' },
            { score: preprocessingTable.reduce((acc, row) => acc + (row.axis2score || 0), 0), sy1: 'e', sy2: 'j', sy3: 2, id: 'ej2', elementname: '即座' },
            { score: preprocessingTable.reduce((acc, row) => acc + (row.axis1score || 0), 0), sy1: 'e', sy2: 'k', sy3: 1, id: 'ek1', elementname: '身体能力' },
            { score: preprocessingTable.reduce((acc, row) => acc + (row.axis2score || 0), 0), sy1: 'e', sy2: 'k', sy3: 2, id: 'ek2', elementname: '学力' }
        ];

        localStorage.setItem('skillScoreTable', JSON.stringify(skillScoreTable));
    }

    function displayDiagnosisResults() {
        const data = JSON.parse(localStorage.getItem('diagnosisData'));
        const scoreTable = JSON.parse(localStorage.getItem('scoreTable'));
        const sumScores = JSON.parse(localStorage.getItem('sumScores'));
        if (!data || !scoreTable || !sumScores) {
            console.error('診断データまたはスコアデータが見つかりませんでした。');
            return;
        }

        // ①あなたの趣味に近いもの
        const hobbies = data.hobbies;
        const hobbiesContainer = document.getElementById('hobbies');
        hobbiesContainer.innerHTML = hobbies.join(', ');

        // ②あなたの趣味に近い好きなことの要素
        const likeFactors = [...data.likeFactors1, ...data.likeFactors2, ...data.likeFactors3, ...data.likeFactors4];
        const likeFactorsContainer = document.getElementById('likeFactors');
        likeFactorsContainer.innerHTML = likeFactors.join(', ');

        // ③あなたが仕事を選ぶうえで大事にしたいこと
        const importantFactors = data.importantFactors;
        const importantFactorsContainer = document.getElementById('importantFactors');
        importantFactorsContainer.innerHTML = importantFactors.join(', ');

        // ④特に得意なこと
        const topScores = Object.entries(sumScores).sort(([, a], [, b]) => b - a);
        const topScore = topScores[0][1];
        const secondScore = topScores[1][1];
        const topElements = topScores.filter(([, score]) => score === topScore).map(([id]) => id);
        const secondElements = topScores.filter(([, score]) => score === secondScore).map(([id]) => id);

        let explanatoryText = '';
        if (topElements.length > 1) {
            explanatoryText = getExplanatoryText(topElements);
        } else {
            explanatoryText = getExplanatoryText([...topElements, ...secondElements]);
        }

        const strengthsContainer = document.getElementById('strengths');
        strengthsContainer.innerHTML = explanatoryText;
    }

    function getExplanatoryText(elements) {
        const explanations = {
            eg1: 'あなたは論理的に考える特徴があるようです。この特徴は、事実やデータに基づいて物事を分析し、客観的かつ合理的に結論を導き出す能力を指します。これにより、問題解決や意思決定の際に正確で効果的な判断が可能となります。',
            eg2: 'あなたは感情に敏感な特徴があるようです。この特徴は、他人の気持ちを察し、共感し、感情を理解する能力を指します。これにより、対人関係が円滑になり、他者との協力やコミュニケーションが向上します。',
            eh1: 'あなたは精密性を持つ特徴があるようです。この特徴は、細部にまで注意を払い、正確さを重視する能力を指します。この能力は、高品質な成果物を生み出すのに役立ち、誤りやミスを減らすことができます。',
            eh2: 'あなたは全体像を把握する特徴があるようです。この特徴は、物事を俯瞰的に捉え、長期的な視点で計画や戦略を立てる能力を指します。これにより、バランスの取れた判断ができ、プロジェクトやビジネスの成功に寄与します。',
            ei1: 'あなたは伝統性を重んじる特徴があるようです。この特徴は、歴史や文化、慣習を大切にし、過去の知恵や経験を活かす能力を指します。これにより、安定した価値観を持ち続け、信頼性のある行動を取ることができます。',
            ei2: 'あなたは創造性に富む特徴があるようです。この特徴は、新しいアイデアや解決策を生み出す能力を指します。これにより、革新的なアプローチが可能となり、問題解決やプロジェクトの進行において新たな視点を提供します。',
            ej1: 'あなたは熟考する特徴があるようです。この特徴は、物事を深く考え、じっくりと検討する能力を指します。これにより、慎重で緻密な判断ができ、重要な決定をする際の信頼性が高まります。',
            ej2: 'あなたは即座に判断する特徴があるようです。この特徴は、瞬時に状況を把握し、素早く決断を下す能力を指します。これにより、迅速な対応が求められる状況で優れたパフォーマンスを発揮できます。',
            ek1: 'あなたは身体能力に優れる特徴があるようです。この特徴は、体力や運動神経、バランス感覚など、身体的な技能を指します。これにより、スポーツや体力を要する活動に適しており、健康的なライフスタイルを維持することができます。',
            ek2: 'あなたは学力に優れる特徴があるようです。この特徴は、知識を習得し、理解し、応用する能力を指します。これにより、学術的な成果を上げ、専門分野での成功に寄与します。'
        };
        return elements.map(id => explanations[id]).join(' ');
    }

    function generateSumScores() {
        const preprocessingTable = JSON.parse(localStorage.getItem('preprocessingTable'));
        if (!preprocessingTable) {
            console.error('前処理データが見つかりませんでした。');
            return;
        }

        const sumScores = preprocessingTable.reduce((acc, row) => {
            if (!acc[row.id]) {
                acc[row.id] = 0;
            }
            acc[row.id] += row.axis1score + row.axis2score;
            return acc;
        }, {});

        localStorage.setItem('sumScores', JSON.stringify(sumScores));
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
        generateSumScores();
        displayDiagnosisResults();
        window.location.href = 'diagnosis-results.html';
    }

    function showDeveloperResults() {
        generatePreprocessingTable();
        generateScoreTable();
        generateSumScores();
        displayDiagnosisResults();
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
    displayPreprocessingResults();
    displayScoreResults();
    displaySkillScoreResults();
});

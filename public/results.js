document.addEventListener("DOMContentLoaded", function() {
    function displayPreprocessingResults() {
        const diagnosisData = JSON.parse(localStorage.getItem('diagnosisData'));
        if (!diagnosisData) {
            console.error('診断データが見つかりませんでした。');
            return;
        }

        const hobbiesList = document.getElementById('hobby-list');
        const likeFactorsList = document.getElementById('like-factors-list');
        const importantFactorsList = document.getElementById('important-factors-list');

        if (!hobbiesList || !likeFactorsList || !importantFactorsList) {
            console.error('必須エレメントが見つかりませんでした。');
            return;
        }

        diagnosisData.hobbies.forEach(hobby => {
            const listItem = document.createElement('li');
            listItem.textContent = hobby;
            hobbiesList.appendChild(listItem);
        });

        const likeFactors = [...diagnosisData.likeFactors1, ...diagnosisData.likeFactors2, ...diagnosisData.likeFactors3, ...diagnosisData.likeFactors4];
        likeFactors.forEach(likeFactor => {
            const listItem = document.createElement('li');
            listItem.textContent = likeFactor;
            likeFactorsList.appendChild(listItem);
        });

        diagnosisData.importantFactors.forEach(importantFactor => {
            const listItem = document.createElement('li');
            listItem.textContent = importantFactor;
            importantFactorsList.appendChild(listItem);
        });
    }

    function displayScoreResults() {
        const preprocessingTable = JSON.parse(localStorage.getItem('preprocessingTable'));
        if (!preprocessingTable) {
            console.error('前処理データが見つかりませんでした。');
            return;
        }

        const skillsList = document.getElementById('skills-list');
        if (!skillsList) {
            console.error('skills-list エレメントが見つかりませんでした。');
            return;
        }

        preprocessingTable.forEach(preprocess => {
            const listItem = document.createElement('li');
            listItem.textContent = `${preprocess.elementname}: ${preprocess.chosen ? '選択' : '未選択'}`;
            skillsList.appendChild(listItem);
        });
    }

    function generateSkillScoreTable() {
        const sumScores = JSON.parse(localStorage.getItem('sumScores'));
        if (!sumScores) {
            console.error('得意な要素の合計スコアが見つかりませんでした。');
            return;
        }

        const scoreList = document.getElementById('score-list');
        if (!scoreList) {
            console.error('score-list エレメントが見つかりませんでした。');
            return;
        }

        const scoreDescriptions = {
            eg1: '論理',
            eg2: '感情',
            eh1: '精密性',
            eh2: '全体像',
            ei1: '伝統性',
            ei2: '創造性',
            ej1: '熟考',
            ej2: '即座',
            ek1: '身体能力',
            ek2: '学力'
        };

        Object.keys(sumScores).forEach(key => {
            const listItem = document.createElement('li');
            listItem.textContent = `${scoreDescriptions[key]}: ${sumScores[key]}`;
            scoreList.appendChild(listItem);
        });
    }

    function displayChosenResults() {
        const sumScores = JSON.parse(localStorage.getItem('sumScores'));
        const skillsList = document.getElementById('skills-list');
        if (!skillsList) {
            console.error('skills-list エレメントが見つかりませんでした。');
            return;
        }

        const topSkills = ['eg1', 'eh1', 'ei1', 'ej1', 'ek1'];
        const secondSkills = ['eg2', 'eh2', 'ei2', 'ej2', 'ek2'];

        const skillDescriptions = {
            eg1: 'あなたは論理的な特徴があるようです。この特徴は、物事を論理的に分析し、体系的に考える能力を指します。これにより、問題解決や意思決定において明確で効果的な方法を見つけることができます。',
            eg2: 'あなたは感情的な特徴があるようです。この特徴は、他者の感情に敏感であり、共感する能力を指します。これにより、人間関係を築く際に優れたコミュニケーションスキルを発揮し、チームワークを強化できます。',
            eh1: 'あなたは精密性に優れる特徴があるようです。この特徴は、細部に注意を払い、正確で丁寧な作業を行う能力を指します。これにより、高品質な成果物を提供し、信頼性のあるパフォーマンスを発揮できます。',
            eh2: 'あなたは全体像を見る特徴があるようです。この特徴は、物事を広い視点から捉え、全体的な計画を立てる能力を指します。これにより、プロジェクトの進行を効果的に管理し、長期的な目標達成に寄与します。',
            ei1: 'あなたは伝統性を重視する特徴があるようです。この特徴は、過去の知恵や経験を活かす能力を指します。これにより、安定した価値観を持ち続け、信頼性のある行動を取ることができます。',
            ei2: 'あなたは創造性に富む特徴があるようです。この特徴は、新しいアイデアや解決策を生み出す能力を指します。これにより、革新的なアプローチが可能となり、問題解決やプロジェクトの進行において新たな視点を提供します。',
            ej1: 'あなたは熟考する特徴があるようです。この特徴は、物事を深く考え、じっくりと検討する能力を指します。これにより、慎重で緻密な判断ができ、重要な決定をする際の信頼性が高まります。',
            ej2: 'あなたは即座に判断する特徴があるようです。この特徴は、瞬時に状況を把握し、素早く決断を下す能力を指します。これにより、迅速な対応が求められる状況で優れたパフォーマンスを発揮できます。',
            ek1: 'あなたは身体能力に優れる特徴があるようです。この特徴は、体力や運動神経、バランス感覚など、身体的な技能を指します。これにより、スポーツや体力を要する活動に適しており、健康的なライフスタイルを維持することができます。',
            ek2: 'あなたは学力に優れる特徴があるようです。この特徴は、知識を習得し、理解し、応用する能力を指します。これにより、学術的な成果を上げ、専門分野での成功に寄与します。'
        };

        if (topSkills.length > 1) {
            // ①のパターン
            topSkills.forEach(id => {
                const listItem = document.createElement('li');
                listItem.textContent = skillDescriptions[id];
                skillsList.appendChild(listItem);
            });
        } else {
            // ②のパターン
            topSkills.concat(secondSkills).forEach(id => {
                const listItem = document.createElement('li');
                listItem.textContent = skillDescriptions[id];
                skillsList.appendChild(listItem);
            });
        }
    }

    function calculateJobScores() {
        const diagnosisData = JSON.parse(localStorage.getItem('diagnosisData'));
        if (!diagnosisData) {
            console.error('診断データが見つかりませんでした。');
            return [];
        }

        console.log('診断データ:', diagnosisData); // デバッグ用

        const jobTable = [
            { No: 1, z1: 'スーパーマーケットスタッフ', z2: '飲食店', aa1: 0, aa2: 0, aa3: 0, aa4: 0, aa5: 0, aa6: 0, aa7: 0, aa8: 0, aa9: 0, aa10: 0, aa11: 1, aa12: 0, aa13: 0, aa14: 0, aa15: 0, aa16: 0, aa17: 0, aa18: 0, aa19: 0, aa20: 0, aa21: 0, aa22: 0, aa23: 0, aa24: 0, aa25: 0, aa26: 0, aa27: 0, aa28: 0, aa29: 0, aa30: 0, ib1: 0, ib2: 0, ic1: 0, ic2: 0, id1: 1, id2: 0, ie1: 0, ie2: 0, ie3: 0, ie4: 1, ie5: 0, ie6: 0, ie7: 0, ie8: 0, ie9: 0, ie10: 0, ie11: 0, ie12: 0, ie13: 0, ie14: 0, ie15: 0, ie16: 0, ie17: 0, ie18: 0, ie19: 0, ie20: 0, ie21: 0, ie22: 0, ie23: 0, ie24: 0, uf1: 0, uf2: 0, uf3: 0, uf4: 0, uf5: 1, uf6: 0, uf7: 1, uf8: 0, uf9: 0, uf10: 0, uf11: 0, uf12: 0, eg1: 0, eg2: 0, eh1: 0, eh2: 0, ei1: 0, ei2: 0, ej1: 0, ej2: 0, ek1: 0, ek2: 0 },
            { No: 2, z1: '技術サポートエンジニア', z2: '技術・エンジニアリング', aa1: 0, aa2: 0, aa3: 0, aa4: 0, aa5: 0, aa6: 0, aa7: 0, aa8: 0, aa9: 0, aa10: 0, aa11: 0, aa12: 0, aa13: 0, aa14: 0, aa15: 0, aa16: 0, aa17: 0, aa18: 0, aa19: 0, aa20: 0, aa21: 0, aa22: 0, aa23: 0, aa24: 0, aa25: 0, aa26: 0, aa27: 0, aa28: 0, aa29: 0, aa30: 0, ib1: 0, ib2: 1, ic1: 1, ic2: 0, id1: 0, id2: 1, ie1: 0, ie2: 1, ie3: 1, ie4: 0, ie5: 1, ie6: 0, ie7: 0, ie8: 1, ie9: 0, ie10: 1, ie11: 0, ie12: 0, ie13: 0, ie14: 0, ie15: 0, ie16: 0, ie17: 0, ie18: 0, ie19: 0, ie20: 0, ie21: 0, ie22: 0, ie23: 0, ie24: 0, uf1: 1, uf2: 1, uf3: 0, uf4: 1, uf5: 0, uf6: 0, uf7: 0, uf8: 0, uf9: 0, uf10: 0, uf11: 1, uf12: 1, eg1: 0, eg2: 0, eh1: 0, eh2: 0, ei1: 0, ei2: 0, ej1: 0, ej2: 0, ek1: 0, ek2: 0 },
            { No: 3, z1: 'マーケティングスペシャリスト', z2: 'マーケティング・広告', aa1: 0, aa2: 0, aa3: 0, aa4: 0, aa5: 0, aa6: 0, aa7: 0, aa8: 0, aa9: 0, aa10: 0, aa11: 0, aa12: 0, aa13: 0, aa14: 0, aa15: 0, aa16: 0, aa17: 0, aa18: 0, aa19: 0, aa20: 0, aa21: 0, aa22: 0, aa23: 0, aa24: 0, aa25: 0, aa26: 0, aa27: 0, aa28: 0, aa29: 0, aa30: 0, ib1: 0, ib2: 0, ic1: 0, ic2: 1, id1: 1, id2: 0, ie1: 0, ie2: 1, ie3: 1, ie4: 0, ie5: 1, ie6: 0, ie7: 0, ie8: 1, ie9: 0, ie10: 1, ie11: 0, ie12: 0, ie13: 0, ie14: 0, ie15: 0, ie16: 0, ie17: 0, ie18: 0, ie19: 0, ie20: 0, ie21: 0, ie22: 0, ie23: 0, ie24: 0, uf1: 1, uf2: 1, uf3: 0, uf4: 1, uf5: 0, uf6: 0, uf7: 0, uf8: 0, uf9: 0, uf10: 0, uf11: 1, uf12: 1, eg1: 0, eg2: 0, eh1: 0, eh2: 0, ei1: 0, ei2: 0, ej1: 0, ej2: 0, ek1: 0, ek2: 0 }
        ];

        const sumScores = {
            eg1: 10,
            eg2: 5,
            eh1: 8,
            eh2: 4,
            ei1: 7,
            ei2: 6,
            ej1: 9,
            ej2: 3,
            ek1: 7,
            ek2: 5
        };

        // Step 1: Select ids based on max score
        const selectedIds = [];
        const skillPairs = [
            ['eg1', 'eg2'],
            ['eh1', 'eh2'],
            ['ei1', 'ei2'],
            ['ej1', 'ej2'],
            ['ek1', 'ek2']
        ];

        skillPairs.forEach(pair => {
            selectedIds.push(sumScores[pair[0]] > sumScores[pair[1]] ? pair[0] : pair[1]);
        });

        console.log('selectedIds:', selectedIds); // デバッグ用

        // Step 2: Calculate job scores
        const jobScores = jobTable.map(job => {
            const totalScore = selectedIds.reduce((acc, id) => acc + (job[id] || 0), 0);
            return {
                jobName: job.z1,
                totalScore: totalScore
            };
        });

        // Step 3: Sort jobs by score in descending order and get top 10
        jobScores.sort((a, b) => b.totalScore - a.totalScore);

        console.log('jobScores:', jobScores); // デバッグ用

        return jobScores.slice(0, 10);
    }

    function displayJobRecommendations() {
        const jobScores = calculateJobScores();
        const jobList = document.getElementById('job-list');
        if (!jobList) {
            console.error('job-list エレメントが見つかりませんでした。');
            return;
        }

        jobScores.forEach((job, index) => {
            const listItem = document.createElement('tr');
            const jobNameCell = document.createElement('td');
            const jobScoreCell = document.createElement('td');

            jobNameCell.textContent = job.jobName;
            jobScoreCell.textContent = job.totalScore;

            listItem.appendChild(jobNameCell);
            listItem.appendChild(jobScoreCell);
            jobList.appendChild(listItem);
        });
    }

    displayPreprocessingResults();
    displayScoreResults();
    generateSkillScoreTable();
    displayChosenResults();
    displayJobRecommendations();
});

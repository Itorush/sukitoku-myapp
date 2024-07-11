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

    function displayChosenResults() {
        const diagnosisData = JSON.parse(localStorage.getItem('diagnosisData'));
        const chosenHobbies = diagnosisData.hobbies;
        const chosenLikeFactors = [
            ...diagnosisData.likeFactors1,
            ...diagnosisData.likeFactors2,
            ...diagnosisData.likeFactors3,
            ...diagnosisData.likeFactors4
        ];
        const chosenImportantFactors = diagnosisData.importantFactors;

        const hobbyList = document.getElementById('hobby-list');
        const likeFactorsList = document.getElementById('like-factors-list');
        const importantFactorsList = document.getElementById('important-factors-list');

        chosenHobbies.forEach(hobby => {
            const listItem = document.createElement('li');
            listItem.textContent = hobby;
            hobbyList.appendChild(listItem);
        });

        chosenLikeFactors.forEach(factor => {
            const listItem = document.createElement('li');
            listItem.textContent = factor;
            likeFactorsList.appendChild(listItem);
        });

        chosenImportantFactors.forEach(factor => {
            const listItem = document.createElement('li');
            listItem.textContent = factor;
            importantFactorsList.appendChild(listItem);
        });
    }

    function displayJobRecommendations() {
        const jobList = document.getElementById('job-list');
        const jobRecommendations = [
            { title: 'ソフトウェアエンジニア', description: 'ソフトウェアの設計、開発、保守を担当します。', averageIncome: '800万円', companies: 'Google, Microsoft', qualifications: '基本情報技術者試験', jobSites: [{ name: 'Indeed', url: 'https://www.indeed.com' }] },
            { title: 'データサイエンティスト', description: 'データの分析、モデルの構築、インサイトの提供を行います。', averageIncome: '900万円', companies: 'Facebook, Amazon', qualifications: 'データサイエンス資格', jobSites: [{ name: 'LinkedIn', url: 'https://www.linkedin.com' }] }
        ];

        jobRecommendations.forEach((job, index) => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <h3>${index + 1}. ${job.title}</h3>
                <p>${job.description}</p>
                <p><strong>平均年収:</strong> ${job.averageIncome}</p>
                <p><strong>代表的な企業例:</strong> ${job.companies}</p>
                <p><strong>関係のある資格:</strong> ${job.qualifications}</p>
                <p><strong>専門求人サイト:</strong> <a href="${job.jobSites[0].url}">${job.jobSites[0].name}</a></p>
            `;
            jobList.appendChild(listItem);
        });
    }

    displayPreprocessingResults();
    displayScoreResults();
    generateSkillScoreTable();
    displaySkillScoreResults();
    displayChosenResults();
    displayJobRecommendations();
});

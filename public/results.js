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
            // 得意なこと option1
            ...skillsQuestions.map(question => ({
                score: data.skills.includes(question.option1) ? '1' : '0',
                sy1: question.ax1_sy1,
                sy2: question.ax1_sy2,
                sy3: question.ax1_sy3,
                id: question.ax1_id,
                elementname: question.option1
            })),
            // 得意なこと option2
            ...skillsQuestions.map(question => ({
                score: data.skills.includes(question.option2) ? '1' : '0',
                sy1: question.ax2_sy1,
                sy2: question.ax2_sy2,
                sy3: question.ax2_sy3,
                id: question.ax2_id,
                elementname: question.option2
            }))
        ];

        localStorage.setItem('scoreTable', JSON.stringify(scoreTable));
    }

    displayPreprocessingResults();
    displayScoreResults();
});

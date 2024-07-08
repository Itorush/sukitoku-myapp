document.addEventListener("DOMContentLoaded", function() {
    function displayResults() {
        const scoreTable = JSON.parse(localStorage.getItem('scoreTable'));
        if (!scoreTable) {
            console.error('スコアデータが見つかりませんでした。');
            return;
        }

        const resultsContainer = document.getElementById('resultsContainer');
        
        // タイトル行を追加
        const headerDiv = document.createElement('div');
        headerDiv.className = 'result-header';
        headerDiv.innerHTML = `
            <div class="elementname">項目</div>
            <div class="score">スコア</div>
        `;
        resultsContainer.appendChild(headerDiv);

        scoreTable.forEach(entry => {
            const resultDiv = document.createElement('div');
            resultDiv.className = 'result-entry';
            resultDiv.innerHTML = `
                <div class="elementname">${entry.elementname}</div>
                <div class="score">${entry.score}</div>
            `;
            resultsContainer.appendChild(resultDiv);
        });
    }

    displayResults();
});

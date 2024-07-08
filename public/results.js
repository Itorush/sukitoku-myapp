document.addEventListener("DOMContentLoaded", function() {
    function displayResults() {
        const scoreTable = JSON.parse(localStorage.getItem('scoreTable'));
        if (!scoreTable) {
            console.error('スコアデータが見つかりませんでした。');
            return;
        }

        const resultsContainer = document.getElementById('resultsContainer');
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

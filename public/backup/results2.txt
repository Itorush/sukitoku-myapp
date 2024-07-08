document.addEventListener("DOMContentLoaded", function() {
    const resultsTableBody = document.querySelector('#resultsTable tbody');
    const scoreTable = JSON.parse(localStorage.getItem('scoreTable'));

    if (scoreTable) {
        scoreTable.forEach(row => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${row.score}</td>
                <td>${row.sy1}</td>
                <td>${row.sy2}</td>
                <td>${row.sy3}</td>
                <td>${row.id}</td>
                <td>${row['日本語要素名']}</td>
            `;
            resultsTableBody.appendChild(tr);
        });
    } else {
        console.error('診断結果が見つかりませんでした。');
    }
});

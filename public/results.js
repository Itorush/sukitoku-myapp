document.addEventListener("DOMContentLoaded", function() {
    const scoreTable = JSON.parse(localStorage.getItem('scoreTable')) || [];
    const preprocessingTable = JSON.parse(localStorage.getItem('preprocessingTable')) || [];

    function createTable(data, tableTitle) {
        let tableHTML = `<h2>${tableTitle}</h2><table><thead><tr>`;

        // Table headers
        Object.keys(data[0]).forEach(key => {
            tableHTML += `<th>${key}</th>`;
        });
        tableHTML += `</tr></thead><tbody>`;

        // Table rows
        data.forEach(row => {
            tableHTML += `<tr>`;
            Object.values(row).forEach(value => {
                tableHTML += `<td>${value}</td>`;
            });
            tableHTML += `</tr>`;
        });

        tableHTML += `</tbody></table>`;
        return tableHTML;
    }

    const resultsContainer = document.getElementById('resultsContainer');
    let resultHTML = "";

    if (scoreTable.length > 0) {
        resultHTML += createTable(scoreTable, "Score Table");
    }

    if (preprocessingTable.length > 0) {
        resultHTML += createTable(preprocessingTable, "Preprocessing Table");
    }

    resultsContainer.innerHTML = resultHTML;
});

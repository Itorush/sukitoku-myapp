document.addEventListener("DOMContentLoaded", function() {
    const diagnosisData = JSON.parse(localStorage.getItem('diagnosisData'));
    const scoreTable = JSON.parse(localStorage.getItem('scoreTable'));

    if (!diagnosisData || !scoreTable) {
        console.error('診断データまたはスコアデータが見つかりませんでした。');
        return;
    }

    const hobbyList = document.getElementById('hobby-list');
    const likeFactorsList = document.getElementById('like-factors-list');
    const importantFactorsList = document.getElementById('important-factors-list');
    const skillsList = document.getElementById('skills-list');
    const jobList = document.getElementById('job-list');

    // 診断者が選んだ趣味を表示
    diagnosisData.hobbies.forEach(hobby => {
        const listItem = document.createElement('li');
        listItem.textContent = hobby;
        hobbyList.appendChild(listItem);
    });

    // 診断者が選んだ好きなことの要素を表示
    const allLikeFactors = [
        ...diagnosisData.likeFactors1,
        ...diagnosisData.likeFactors2,
        ...diagnosisData.likeFactors3,
        ...diagnosisData.likeFactors4
    ];

    allLikeFactors.forEach(likeFactor => {
        const listItem = document.createElement('li');
        listItem.textContent = likeFactor;
        likeFactorsList.appendChild(listItem);
    });

    // 診断者が選んだ大事にしたいことを表示
    diagnosisData.importantFactors.forEach(importantFactor => {
        const listItem = document.createElement('li');
        listItem.textContent = importantFactor;
        importantFactorsList.appendChild(listItem);
    });

    // 得意なことトップ3を表示
    const topSkills = scoreTable
        .filter(item => item.sy1 === 'e')
        .sort((a, b) => b.score - a.score)
        .slice(0, 3);

    topSkills.forEach(skill => {
        const listItem = document.createElement('li');
        listItem.textContent = `${skill.elementname} - スコア: ${skill.score}`;
        skillsList.appendChild(listItem);
    });

    // 向いている仕事ランキングトップ10を表示（仮にデータを作成）
    const jobRecommendations = [
        { title: 'ソフトウェアエンジニア', description: 'ソフトウェアの設計、開発、保守を担当します。', averageIncome: '800万円', companies: 'Google, Microsoft', qualifications: '基本情報技術者試験', jobSites: [{ name: 'Indeed', url: 'https://www.indeed.com' }] },
        { title: 'データサイエンティスト', description: 'データの分析、モデルの構築、ビジネスへの応用を行います。', averageIncome: '900万円', companies: 'Amazon, Facebook', qualifications: '統計検定', jobSites: [{ name: 'LinkedIn', url: 'https://www.linkedin.com' }] },
        // 8つの仮の職種データを追加
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
});

document.addEventListener("DOMContentLoaded", function() {
    const diagnosisData = JSON.parse(localStorage.getItem('diagnosisData'));
    const preprocessingTable = JSON.parse(localStorage.getItem('preprocessingTable'));

    if (!diagnosisData || !preprocessingTable) {
        console.error('診断データまたは前処理データが見つかりませんでした。');
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

    // 特に得意な要素を表示
    const explanatoryText = {
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

    // スコア結果表示
    const scoreResultsBody = document.getElementById('scoreResultsBody');

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
        scoreResultsBody.appendChild(tr);
    });

    // 特に得意な要素を表示
    const sortedSkillScores = skillScoreTable.sort((a, b) => b.score - a.score);

    const topExplanatory = [];
    let currentRank = 1;
    let previousScore = sortedSkillScores[0].score;

    for (const item of sortedSkillScores) {
        if (item.score === previousScore && currentRank === 1) {
            topExplanatory.push(explanatoryText[item.id]);
        } else if (currentRank > 1) {
            break;
        }
        previousScore = item.score;
        currentRank++;
    }

    if (topExplanatory.length === 1) {
        const secondRankScore = sortedSkillScores[1].score;
        for (const item of sortedSkillScores) {
            if (item.score === secondRankScore) {
                topExplanatory.push(explanatoryText[item.id]);
            } else if (item.score < secondRankScore) {
                break;
            }
        }
    }

    topExplanatory.forEach(explanatory => {
        const listItem = document.createElement('li');
        listItem.textContent = explanatory;
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

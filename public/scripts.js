document.addEventListener("DOMContentLoaded", function() {
    const hobbyOptions = [
        { sy1: 'a', sy2: 'a', sy3: 1, id: 'aa1', elementname: 'スポーツ' },
        { sy1: 'a', sy2: 'a', sy3: 2, id: 'aa2', elementname: 'スポーツ観戦' },
        { sy1: 'a', sy2: 'a', sy3: 3, id: 'aa3', elementname: '音楽鑑賞' },
        { sy1: 'a', sy2: 'a', sy3: 4, id: 'aa4', elementname: '楽器演奏' },
        { sy1: 'a', sy2: 'a', sy3: 5, id: 'aa5', elementname: '映画鑑賞' },
        { sy1: 'a', sy2: 'a', sy3: 6, id: 'aa6', elementname: 'テレビ鑑賞' },
        { sy1: 'a', sy2: 'a', sy3: 7, id: 'aa7', elementname: '読書' },
        { sy1: 'a', sy2: 'a', sy3: 8, id: 'aa8', elementname: '写真撮影' },
        { sy1: 'a', sy2: 'a', sy3: 9, id: 'aa9', elementname: '絵画やイラスト' },
        { sy1: 'a', sy2: 'a', sy3: 10, id: 'aa10', elementname: '手芸・クラフト' },
        { sy1: 'a', sy2: 'a', sy3: 11, id: 'aa11', elementname: '料理・お菓子作り' },
        { sy1: 'a', sy2: 'a', sy3: 12, id: 'aa12', elementname: 'ガーデニング' },
        { sy1: 'a', sy2: 'a', sy3: 13, id: 'aa13', elementname: '旅行' },
        { sy1: 'a', sy2: 'a', sy3: 14, id: 'aa14', elementname: 'ハイキング・登山' },
        { sy1: 'a', sy2: 'a', sy3: 15, id: 'aa15', elementname: 'フィットネス・エクササイズ' },
        { sy1: 'a', sy2: 'a', sy3: 16, id: 'aa16', elementname: 'ヨガ・ピラティス' },
        { sy1: 'a', sy2: 'a', sy3: 17, id: 'aa17', elementname: 'ダンス' },
        { sy1: 'a', sy2: 'a', sy3: 18, id: 'aa18', elementname: 'カラオケ' },
        { sy1: 'a', sy2: 'a', sy3: 19, id: 'aa19', elementname: 'ビデオゲーム' },
        { sy1: 'a', sy2: 'a', sy3: 20, id: 'aa20', elementname: 'ボードゲーム・カードゲーム' },
        { sy1: 'a', sy2: 'a', sy3: 21, id: 'aa21', elementname: 'コレクション（切手、古銭、模型など）' },
        { sy1: 'a', sy2: 'a', sy3: 22, id: 'aa22', elementname: '釣り' },
        { sy1: 'a', sy2: 'a', sy3: 23, id: 'aa23', elementname: 'キャンプ・アウトドア活動' },
        { sy1: 'a', sy2: 'a', sy3: 24, id: 'aa24', elementname: '天体観測' },
        { sy1: 'a', sy2: 'a', sy3: 25, id: 'aa25', elementname: '昆虫採集・バードウォッチング' },
        { sy1: 'a', sy2: 'a', sy3: 26, id: 'aa26', elementname: 'DIY・日曜大工' },
        { sy1: 'a', sy2: 'a', sy3: 27, id: 'aa27', elementname: '茶道・華道' },
        { sy1: 'a', sy2: 'a', sy3: 28, id: 'aa28', elementname: '書道' },
        { sy1: 'a', sy2: 'a', sy3: 29, id: 'aa29', elementname: 'コスプレ・アニメ・漫画' },
        { sy1: 'a', sy2: 'a', sy3: 30, id: 'aa30', elementname: 'ワイン・コーヒー・グルメ' }
    ];

    const likeFactorsOptions1 = [
        { sy1: 'i', sy2: 'b', sy3: 1, id: 'ib1', elementname: '都会的環境' },
        { sy1: 'i', sy2: 'b', sy3: 2, id: 'ib2', elementname: '自然的環境' }
    ];

    const likeFactorsOptions2 = [
        { sy1: 'i', sy2: 'c', sy3: 1, id: 'ic1', elementname: '大勢の環境' },
        { sy1: 'i', sy2: 'c', sy3: 2, id: 'ic2', elementname: '少数の環境' }
    ];

    const likeFactorsOptions3 = [
        { sy1: 'i', sy2: 'd', sy3: 1, id: 'id1', elementname: '人と関われる要素やチームワーク' },
        { sy1: 'i', sy2: 'd', sy3: 2, id: 'id2', elementname: '単独の活動や個人作業' }
    ];

    const likeFactorsOptions4 = [
        { sy1: 'i', sy2: 'e', sy3: 1, id: 'ie1', elementname: 'アクティブな要素やエネルギッシュな活動' },
        { sy1: 'i', sy2: 'e', sy3: 2, id: 'ie2', elementname: 'リラックスできる要素や安全で安心な活動' },
        { sy1: 'i', sy2: 'e', sy3: 3, id: 'ie3', elementname: '新しい経験や学びの要素や変化がはやく飽きない活動' },
        { sy1: 'i', sy2: 'e', sy3: 4, id: 'ie4', elementname: '慣れた経験やマイペースでできる活動' },
        { sy1: 'i', sy2: 'e', sy3: 5, id: 'ie5', elementname: '実生活に役立つ要素' },
        { sy1: 'i', sy2: 'e', sy3: 6, id: 'ie6', elementname: '論理的な要素' },
        { sy1: 'i', sy2: 'e', sy3: 7, id: 'ie7', elementname: '技術的な要素' },
        { sy1: 'i', sy2: 'e', sy3: 8, id: 'ie8', elementname: '芸術的な要素や自己表現できる活動' },
        { sy1: 'i', sy2: 'e', sy3: 9, id: 'ie9', elementname: '楽な活動' },
        { sy1: 'i', sy2: 'e', sy3: 10, id: 'ie10', elementname: '競争的な要素や挑戦的な活動' },
        { sy1: 'i', sy2: 'e', sy3: 11, id: 'ie11', elementname: '社会から評価される要素や達成感がある活動' },
        { sy1: 'i', sy2: 'e', sy3: 12, id: 'ie12', elementname: 'プロセスが面白い要素や自由に楽しめる活動' },
        { sy1: 'i', sy2: 'e', sy3: 13, id: 'ie13', elementname: '手先の作業' },
        { sy1: 'i', sy2: 'e', sy3: 14, id: 'ie14', elementname: '頭脳の作業' },
        { sy1: 'i', sy2: 'e', sy3: 15, id: 'ie15', elementname: '学び続ける要素' },
        { sy1: 'i', sy2: 'e', sy3: 16, id: 'ie16', elementname: '不思議な要素や神秘的な要素' },
        { sy1: 'i', sy2: 'e', sy3: 17, id: 'ie17', elementname: '奥が深い要素や熱中できる活動' },
        { sy1: 'i', sy2: 'e', sy3: 18, id: 'ie18', elementname: 'ファンタジーの要素' },
        { sy1: 'i', sy2: 'e', sy3: 19, id: 'ie19', elementname: '人に喜んでもらえる要素' },
        { sy1: 'i', sy2: 'e', sy3: 20, id: 'ie20', elementname: '稼げる要素やお金に関わる活動' },
        { sy1: 'i', sy2: 'e', sy3: 21, id: 'ie21', elementname: 'かっこいい要素や目立つ要素' },
        { sy1: 'i', sy2: 'e', sy3: 22, id: 'ie22', elementname: '異性にモテやすい要素' },
        { sy1: 'i', sy2: 'e', sy3: 23, id: 'ie23', elementname: '機械に関係している要素' },
        { sy1: 'i', sy2: 'e', sy3: 24, id: 'ie24', elementname: 'いきものに関係している要素' }
    ];

    const importantFactorsOptions = [
        { sy1: 'u', sy2: 'f', sy3: 1, id: 'uf1', elementname: '個人の成長と学び' },
        { sy1: 'u', sy2: 'f', sy3: 2, id: 'uf2', elementname: '社会貢献' },
        { sy1: 'u', sy2: 'f', sy3: 3, id: 'uf3', elementname: '仕事の質と成果' },
        { sy1: 'u', sy2: 'f', sy3: 4, id: 'uf4', elementname: '創造性とイノベーション' },
        { sy1: 'u', sy2: 'f', sy3: 5, id: 'uf5', elementname: '協力とチームワーク' },
        { sy1: 'u', sy2: 'f', sy3: 6, id: 'uf6', elementname: '自由と柔軟性' },
        { sy1: 'u', sy2: 'f', sy3: 7, id: 'uf7', elementname: '安定と安全' },
        { sy1: 'u', sy2: 'f', sy3: 8, id: 'uf8', elementname: 'リーダーシップと影響力' },
        { sy1: 'u', sy2: 'f', sy3: 9, id: 'uf9', elementname: '冒険と挑戦' },
        { sy1: 'u', sy2: 'f', sy3: 10, id: 'uf10', elementname: 'ワークライフバランス' },
        { sy1: 'u', sy2: 'f', sy3: 11, id: 'uf11', elementname: '報酬と評価' },
        { sy1: 'u', sy2: 'f', sy3: 12, id: 'uf12', elementname: '倫理と道徳性' }
    ];

    const skillsQuestions = [
        { elementname: "仕事上の課題に直面したとき、どのように対処しますか？", option1: "事実やデータに基づき対処", option2: "感情や感覚を頼りに対処", axis1: "論理", axis2: "感情", el_sy1: "o", el_sy2: "l", el_sy3: 1, el_ID: "ol1", ax1_sy1: "e", ax1_sy2: "g", ax1_sy3: 1, ax1_id: "eg1", ax2_sy1: "e", ax2_sy2: "g", ax2_sy3: 2, ax2_id: "eg2" },
        { elementname: "議論の際、どのように進めますか？", option1: "論理的根拠をもとに進行", option2: "相手の気持ちに配慮して進行", axis1: "論理", axis2: "感情", el_sy1: "o", el_sy2: "l", el_sy3: 2, el_ID: "ol2", ax1_sy1: "e", ax1_sy2: "g", ax1_sy3: 1, ax1_id: "eg1", ax2_sy1: "e", ax2_sy2: "g", ax2_sy3: 2, ax2_id: "eg2" },
        { elementname: "新しいプロジェクトに取り組むとき、どのように進めますか？", option1: "明確な手順をもとにする", option2: "直観やフィーリングを頼りにする", axis1: "論理", axis2: "感情", el_sy1: "o", el_sy2: "l", el_sy3: 3, el_ID: "ol3", ax1_sy1: "e", ax1_sy2: "g", ax1_sy3: 1, ax1_id: "eg1", ax2_sy1: "e", ax2_sy2: "g", ax2_sy3: 2, ax2_id: "eg2" },
        { elementname: "スキルを学ぶとき、どのように学びますか？", option1: "論理や概念", option2: "経験やエピソード", axis1: "論理", axis2: "感情", el_sy1: "o", el_sy2: "l", el_sy3: 4, el_ID: "ol4", ax1_sy1: "e", ax1_sy2: "g", ax1_sy3: 1, ax1_id: "eg1", ax2_sy1: "e", ax2_sy2: "g", ax2_sy3: 2, ax2_id: "eg2" },
        { elementname: "他人の意見と異なる場合、どのように説得しますか？", option1: "事実やデータから説得", option2: "感情や気持ちから説得", axis1: "論理", axis2: "感情", el_sy1: "o", el_sy2: "l", el_sy3: 5, el_ID: "ol5", ax1_sy1: "e", ax1_sy2: "g", ax1_sy3: 1, ax1_id: "eg1", ax2_sy1: "e", ax2_sy2: "g", ax2_sy3: 2, ax2_id: "eg2" },
        { elementname: "プロジェクトを進める際、どのように取り組みますか？", option1: "細部にこだわる", option2: "全体の流れや方向性を定める", axis1: "精密性", axis2: "全体像", el_sy1: "o", el_sy2: "m", el_sy3: 1, el_ID: "om1", ax1_sy1: "e", ax1_sy2: "h", ax1_sy3: 1, ax1_id: "eh1", ax2_sy1: "e", ax2_sy2: "h", ax2_sy3: 2, ax2_id: "eh2" },
        { elementname: "作業を進行する際、どちらから決めますか？", option1: "細かいタスク", option2: "大まかなゴール", axis1: "精密性", axis2: "全体像", el_sy1: "o", el_sy2: "m", el_sy3: 2, el_ID: "om2", ax1_sy1: "e", ax1_sy2: "h", ax1_sy3: 1, ax1_id: "eh1", ax2_sy1: "e", ax2_sy2: "h", ax2_sy3: 2, ax2_id: "eh2" },
        { elementname: "報告書を作成するとき、どちらをより重視しますか？", option1: "誤字脱字や1文ごとの構成", option2: "全体のメッセージや章立て", axis1: "精密性", axis2: "全体像", el_sy1: "o", el_sy2: "m", el_sy3: 3, el_ID: "om3", ax1_sy1: "e", ax1_sy2: "h", ax1_sy3: 1, ax1_id: "eh1", ax2_sy1: "e", ax2_sy2: "h", ax2_sy3: 2, ax2_id: "eh2" },
        { elementname: "計画を立てるとき、どのように行動しますか？", option1: "チェックリストをつくる", option2: "アイデアや戦略を考える", axis1: "精密性", axis2: "全体像", el_sy1: "o", el_sy2: "m", el_sy3: 4, el_ID: "om4", ax1_sy1: "e", ax1_sy2: "h", ax1_sy3: 1, ax1_id: "eh1", ax2_sy1: "e", ax2_sy2: "h", ax2_sy3: 2, ax2_id: "eh2" },
        { elementname: "旅行の計画を行う際、どのように取り組みますか？", option1: "詳細なスケジュールを決める", option2: "大まかな目的地を決める", axis1: "精密性", axis2: "全体像", el_sy1: "o", el_sy2: "m", el_sy3: 5, el_ID: "om5", ax1_sy1: "e", ax1_sy2: "h", ax1_sy3: 1, ax1_id: "eh1", ax2_sy1: "e", ax2_sy2: "h", ax2_sy3: 2, ax2_id: "eh2" },
        { elementname: "仕事の進め方を考えるとき、どちらの方法を選択しますか？", option1: "既存の方法", option2: "新しい方法", axis1: "伝統性", axis2: "創造性", el_sy1: "o", el_sy2: "n", el_sy3: 1, el_ID: "on1", ax1_sy1: "e", ax1_sy2: "i", ax1_sy3: 1, ax1_id: "ei1", ax2_sy1: "e", ax2_sy2: "i", ax2_sy3: 2, ax2_id: "ei2" },
        { elementname: "新しいアイデアやプロセスを試す際、どのように取り組みますか？", option1: "安全で確立した方法", option2: "挑戦的で独創的な方法", axis1: "伝統性", axis2: "創造性", el_sy1: "o", el_sy2: "n", el_sy3: 2, el_ID: "on2", ax1_sy1: "e", ax1_sy2: "i", ax1_sy3: 1, ax1_id: "ei1", ax2_sy1: "e", ax2_sy2: "i", ax2_sy3: 2, ax2_id: "ei2" },
        { elementname: "作業手順を決める際、どのように行動しますか？", option1: "既存のフレームワークを採用", option2: "独自のやり方を加える", axis1: "伝統性", axis2: "創造性", el_sy1: "o", el_sy2: "n", el_sy3: 3, el_ID: "on3", ax1_sy1: "e", ax1_sy2: "i", ax1_sy3: 1, ax1_id: "ei1", ax2_sy1: "e", ax2_sy2: "i", ax2_sy3: 2, ax2_id: "ei2" },
        { elementname: "アイデアを提案する際、どのように進めますか？", option1: "過去の成功事例を参考にする", option2: "独自の発想を重視する", axis1: "伝統性", axis2: "創造性", el_sy1: "o", el_sy2: "n", el_sy3: 4, el_ID: "on4", ax1_sy1: "e", ax1_sy2: "i", ax1_sy3: 1, ax1_id: "ei1", ax2_sy1: "e", ax2_sy2: "i", ax2_sy3: 2, ax2_id: "ei2" },
        { elementname: "問題解決の際、どのように取り組みますか？", option1: "伝統的アプローチ", option2: "創造的アプローチ", axis1: "伝統性", axis2: "創造性", el_sy1: "o", el_sy2: "n", el_sy3: 5, el_ID: "on5", ax1_sy1: "e", ax1_sy2: "i", ax1_sy3: 1, ax1_id: "ei1", ax2_sy1: "e", ax2_sy2: "i", ax2_sy3: 2, ax2_id: "ei2" },
        { elementname: "重要な決断をする際、どのように行動しますか？", option1: "慎重に考える", option2: "直観や瞬時の判断", axis1: "熟考", axis2: "即座", el_sy1: "o", el_sy2: "o", el_sy3: 1, el_ID: "oo1", ax1_sy1: "e", ax1_sy2: "j", ax1_sy3: 1, ax1_id: "ej1", ax2_sy1: "e", ax2_sy2: "j", ax2_sy3: 2, ax2_id: "ej2" },
        { elementname: "プロジェクトを開始するときどのように進めますか？", option1: "リサーチや分析", option2: "行動して調整", axis1: "熟考", axis2: "即座", el_sy1: "o", el_sy2: "o", el_sy3: 2, el_ID: "oo2", ax1_sy1: "e", ax1_sy2: "j", ax1_sy3: 1, ax1_id: "ej1", ax2_sy1: "e", ax2_sy2: "j", ax2_sy3: 2, ax2_id: "ej2" },
        { elementname: "問題に直面したとき、どのように対処しますか？", option1: "深く考える", option2: "素早く行動", axis1: "熟考", axis2: "即座", el_sy1: "o", el_sy2: "o", el_sy3: 3, el_ID: "oo3", ax1_sy1: "e", ax1_sy2: "j", ax1_sy3: 1, ax1_id: "ej1", ax2_sy1: "e", ax2_sy2: "j", ax2_sy3: 2, ax2_id: "ej2" },
        { elementname: "新しいことを始めるとき、どのように行動しますか？", option1: "慎重に計画", option2: "試して改善", axis1: "熟考", axis2: "即座", el_sy1: "o", el_sy2: "o", el_sy3: 4, el_ID: "oo4", ax1_sy1: "e", ax1_sy2: "j", ax1_sy3: 1, ax1_id: "ej1", ax2_sy1: "e", ax2_sy2: "j", ax2_sy3: 2, ax2_id: "ej2" },
        { elementname: "予期しない問題が発生したとき、どのように対応しますか？", option1: "じっくり考える", option2: "すぐに行動", axis1: "熟考", axis2: "即座", el_sy1: "o", el_sy2: "o", el_sy3: 5, el_ID: "oo5", ax1_sy1: "e", ax1_sy2: "j", ax1_sy3: 1, ax1_id: "ej1", ax2_sy1: "e", ax2_sy2: "j", ax2_sy3: 2, ax2_id: "ej2" },
        { elementname: "どのような作業が得意ですか？", option1: "体を動かす作業", option2: "頭を使う作業", axis1: "身体能力", axis2: "学力", el_sy1: "o", el_sy2: "p", el_sy3: 1, el_ID: "op1", ax1_sy1: "e", ax1_sy2: "k", ax1_sy3: 1, ax1_id: "ek1", ax2_sy1: "e", ax2_sy2: "k", ax2_sy3: 2, ax2_id: "ek2" },
        { elementname: "あなたの普段の活動では、どのようなことをよく行いますか？", option1: "スポーツ", option2: "知的活動", axis1: "身体能力", axis2: "学力", el_sy1: "o", el_sy2: "p", el_sy3: 2, el_ID: "op2", ax1_sy1: "e", ax1_sy2: "k", ax1_sy3: 1, ax1_id: "ek1", ax2_sy1: "e", ax2_sy2: "k", ax2_sy3: 2, ax2_id: "ek2" },
        { elementname: "仕事で一番活躍できると感じるのはどちらの作業ですか？", option1: "身体作業", option2: "分析や思考", axis1: "身体能力", axis2: "学力", el_sy1: "o", el_sy2: "p", el_sy3: 3, el_ID: "op3", ax1_sy1: "e", ax1_sy2: "k", ax1_sy3: 1, ax1_id: "ek1", ax2_sy1: "e", ax2_sy2: "k", ax2_sy3: 2, ax2_id: "ek2" },
        { elementname: "新しいスキルを習得するとき、どのように学びますか？", option1: "実践的に学ぶ", option2: "理論を学ぶ", axis1: "身体能力", axis2: "学力", el_sy1: "o", el_sy2: "p", el_sy3: 4, el_ID: "op4", ax1_sy1: "e", ax1_sy2: "k", ax1_sy3: 1, ax1_id: "ek1", ax2_sy1: "e", ax2_sy2: "k", ax2_sy3: 2, ax2_id: "ek2" },
        { elementname: "趣味や余暇の時間に、どのような活動を行いますか？", option1: "身体活動", option2: "勉強", axis1: "身体能力", axis2: "学力", el_sy1: "o", el_sy2: "p", el_sy3: 5, el_ID: "op5", ax1_sy1: "e", ax1_sy2: "k", ax1_sy3: 1, ax1_id: "ek1", ax2_sy1: "e", ax2_sy2: "k", ax2_sy3: 2, ax2_id: "ek2" }
    ];

    function showPhase(phase) {
        document.querySelectorAll('.phase').forEach(function(phaseDiv) {
            phaseDiv.classList.remove('active');
        });
        document.getElementById('phase' + phase).classList.add('active');
    }

    function generateQuestions() {
        const hobbyOptionsContainer = document.getElementById('hobbyOptions');
        const likeFactorsOptionsContainer1 = document.getElementById('likeFactorsOptions1');
        const likeFactorsOptionsContainer2 = document.getElementById('likeFactorsOptions2');
        const likeFactorsOptionsContainer3 = document.getElementById('likeFactorsOptions3');
        const likeFactorsOptionsContainer4 = document.getElementById('likeFactorsOptions4');
        const importantFactorsOptionsContainer = document.getElementById('importantFactorsOptions');
        const skillsQuestionsContainer = document.getElementById('skillsQuestions');

        // 趣味の選択肢を生成
        hobbyOptions.forEach((option, index) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option';
            optionDiv.innerHTML = `
                <label for="hobby${index + 1}">
                    <input type="checkbox" id="hobby${index + 1}" name="hobbies" value="${option.elementname}">
                    ${option.elementname}
                </label>
            `;
            hobbyOptionsContainer.appendChild(optionDiv);
        });

        // 好きなことの要素を生成（1つ目のセット）
        likeFactorsOptions1.forEach((option, index) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option';
            optionDiv.innerHTML = `
                <label for="likeFactor1-${index + 1}">
                    <input type="radio" id="likeFactor1-${index + 1}" name="likeFactors1" value="${option.elementname}">
                    ${option.elementname}
                </label>
            `;
            likeFactorsOptionsContainer1.appendChild(optionDiv);
        });

        // 好きなことの要素を生成（2つ目のセット）
        likeFactorsOptions2.forEach((option, index) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option';
            optionDiv.innerHTML = `
                <label for="likeFactor2-${index + 1}">
                    <input type="radio" id="likeFactor2-${index + 1}" name="likeFactors2" value="${option.elementname}">
                    ${option.elementname}
                </label>
            `;
            likeFactorsOptionsContainer2.appendChild(optionDiv);
        });

        // 好きなことの要素を生成（3つ目のセット）
        likeFactorsOptions3.forEach((option, index) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option';
            optionDiv.innerHTML = `
                <label for="likeFactor3-${index + 1}">
                    <input type="radio" id="likeFactor3-${index + 1}" name="likeFactors3" value="${option.elementname}">
                    ${option.elementname}
                </label>
            `;
            likeFactorsOptionsContainer3.appendChild(optionDiv);
        });

        // 好きなことの要素を生成（4つ目のセット）
        likeFactorsOptions4.forEach((option, index) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option';
            optionDiv.innerHTML = `
                <label for="likeFactor4-${index + 1}">
                    <input type="checkbox" id="likeFactor4-${index + 1}" name="likeFactors4" value="${option.elementname}">
                    ${option.elementname}
                </label>
            `;
            likeFactorsOptionsContainer4.appendChild(optionDiv);
        });

        // 大事にしたいことの要素を生成
        importantFactorsOptions.forEach((option, index) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option';
            optionDiv.innerHTML = `
                <label for="importantFactor${index + 1}">
                    <input type="checkbox" id="importantFactor${index + 1}" name="importantFactors" value="${option.elementname}">
                    ${option.elementname}
                </label>
            `;
            importantFactorsOptionsContainer.appendChild(optionDiv);
        });

        // 得意なことの質問を生成
        const groupedQuestions = [
            skillsQuestions.slice(0, 5),
            skillsQuestions.slice(5, 10),
            skillsQuestions.slice(10, 15),
            skillsQuestions.slice(15, 20),
            skillsQuestions.slice(20, 25)
        ];

        let selectedQuestions = [];
        groupedQuestions.forEach(group => {
            selectedQuestions = selectedQuestions.concat(shuffleArray(group).slice(0, 3));
        });

        selectedQuestions = shuffleArray(selectedQuestions);

        selectedQuestions.forEach((question, index) => {
            const questionDiv = document.createElement('div');
            questionDiv.className = 'question';
            questionDiv.innerHTML = `
                <div class="question-label-container">
                    <label class="question-label">${question.elementname}</label>
                </div>
                <div class="label-row">
                    <div class="empty"></div>
                    <div class="strong-agree">強く同意する</div>
                    <div class="empty"></div>
                    <div class="empty"></div>
                    <div class="empty"></div>
                    <div class="empty"></div>
                    <div class="neutral">どちらともいえない</div>
                    <div class="empty"></div>
                    <div class="empty"></div>
                    <div class="empty"></div>
                    <div class="empty"></div>
                    <div class="strong-agree">強く同意する</div>
                    <div class="empty"></div>
                </div>
                <div class="buttons-container">
                    <input type="radio" id="skill${index + 1}-1" name="skills${index + 1}" value="1" data-axis1="${question.axis1}" data-axis2="${question.axis2}" data-firstname="${question.el_ID}" data-secondname="${question.ax1_id}" data-thirdname="three">
                    <label for="skill${index + 1}-1"><span></span></label>
                    <input type="radio" id="skill${index + 1}-2" name="skills${index + 1}" value="2" data-axis1="${question.axis1}" data-axis2="${question.axis2}" data-firstname="${question.el_ID}" data-secondname="${question.ax1_id}" data-thirdname="two">
                    <label for="skill${index + 1}-2"><span></span></label>
                    <input type="radio" id="skill${index + 1}-3" name="skills${index + 1}" value="3" data-axis1="${question.axis1}" data-axis2="${question.axis2}" data-firstname="${question.el_ID}" data-secondname="${question.ax1_id}" data-thirdname="one">
                    <label for="skill${index + 1}-3"><span></span></label>
                    <input type="radio" id="skill${index + 1}-4" name="skills${index + 1}" value="4" data-axis1="${question.axis1}" data-axis2="${question.axis2}" data-firstname="${question.el_ID}" data-secondname="${question.ax2_id}" data-thirdname="one">
                    <label for="skill${index + 1}-4"><span></span></label>
                    <input type="radio" id="skill${index + 1}-5" name="skills${index + 1}" value="5" data-axis1="${question.axis1}" data-axis2="${question.axis2}" data-firstname="${question.el_ID}" data-secondname="${question.ax2_id}" data-thirdname="two">
                    <label for="skill${index + 1}-5"><span></span></label>
                    <input type="radio" id="skill${index + 1}-6" name="skills${index + 1}" value="6" data-axis1="${question.axis1}" data-axis2="${question.axis2}" data-firstname="${question.el_ID}" data-secondname="${question.ax2_id}" data-thirdname="three">
                    <label for="skill${index + 1}-6"><span></span></label>
                </div>
                <div class="options-row">
                    <div class="empty"></div>
                    <div class="option">${question.option1}</div>
                    <div class="empty"></div>
                    <div class="empty"></div>
                    <div class="empty"></div>
                    <div class="empty"></div>
                    <div class="empty"></div>
                    <div class="empty"></div>
                    <div class="empty"></div>
                    <div class="empty"></div>
                    <div class="option">${question.option2}</div>
                    <div class="empty"></div>
                </div>
            `;
            skillsQuestionsContainer.appendChild(questionDiv);
        });
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    window.validateHobbies = function() {
        const selectedHobbies = document.querySelectorAll('input[name="hobbies"]:checked');
        const warning = document.getElementById('hobbyWarning');
        
        if (selectedHobbies.length < 1 || selectedHobbies.length > 3) {
            warning.textContent = '趣味は1つ以上3つ以内で選択してください。';
            return false;
        } else {
            warning.textContent = '';
            return true;
        }
    }

    window.validateLikeFactors = function() {
        const selectedLikeFactors1 = document.querySelectorAll('input[name="likeFactors1"]:checked');
        const selectedLikeFactors2 = document.querySelectorAll('input[name="likeFactors2"]:checked');
        const selectedLikeFactors3 = document.querySelectorAll('input[name="likeFactors3"]:checked');
        const selectedLikeFactors4 = document.querySelectorAll('input[name="likeFactors4"]:checked');
        const warnings = [
            document.getElementById('likeFactorsWarning1'),
            document.getElementById('likeFactorsWarning2'),
            document.getElementById('likeFactorsWarning3'),
            document.getElementById('likeFactorsWarning4')
        ];

        let valid = true;

        if (selectedLikeFactors1.length < 1) {
            warnings[0].textContent = 'どちらか1つ選択してください。';
            valid = false;
        } else {
            warnings[0].textContent = '';
        }

        if (selectedLikeFactors2.length < 1) {
            warnings[1].textContent = 'どちらか1つ選択してください。';
            valid = false;
        } else {
            warnings[1].textContent = '';
        }

        if (selectedLikeFactors3.length < 1) {
            warnings[2].textContent = 'どちらか1つ選択してください。';
            valid = false;
        } else {
            warnings[2].textContent = '';
        }

        if (selectedLikeFactors4.length < 1 || selectedLikeFactors4.length > 3) {
            warnings[3].textContent = '1つ以上3つ以内で選択してください。';
            valid = false;
        } else {
            warnings[3].textContent = '';
        }

        return valid;
    }

    window.validateImportantFactors = function() {
        const selectedImportantFactors = document.querySelectorAll('input[name="importantFactors"]:checked');
        const warning = document.getElementById('importantFactorsWarning');
        
        if (selectedImportantFactors.length < 1 || selectedImportantFactors.length > 3) {
            warning.textContent = '仕事を選ぶうえで大事にしたいことは1つ以上3つ以内で選択してください。';
            return false;
        } else {
            warning.textContent = '';
            return true;
        }
    }

    function validateSkills() {
        const skillQuestions = document.querySelectorAll('[name^="skills"]');
        const warning = document.getElementById('skillsWarning');
        
        let valid = true;
        const questionsMap = new Map();

        skillQuestions.forEach(input => {
            const questionName = input.getAttribute('name');
            if (!questionsMap.has(questionName)) {
                questionsMap.set(questionName, false);
            }
            if (input.checked) {
                questionsMap.set(questionName, true);
            }
        });

        questionsMap.forEach((answered, questionName) => {
            if (!answered) {
                valid = false;
            }
        });

        if (!valid) {
            warning.textContent = '全ての質問に対して6つの中から１つを選択してください。';
        } else {
            warning.textContent = '';
        }

        return valid;
    }

    function saveSelectionsToLocalStorage(formData) {
        const hobbies = formData.getAll('hobbies');
        const likeFactors1 = formData.getAll('likeFactors1');
        const likeFactors2 = formData.getAll('likeFactors2');
        const likeFactors3 = formData.getAll('likeFactors3');
        const likeFactors4 = formData.getAll('likeFactors4');
        const importantFactors = formData.getAll('importantFactors');
        const skills = formData.getAll('skills');

        const data = { hobbies, likeFactors1, likeFactors2, likeFactors3, likeFactors4, importantFactors, skills };

        localStorage.setItem('diagnosisData', JSON.stringify(data));
    }

    function generatePreprocessingTable() {
        const data = JSON.parse(localStorage.getItem('diagnosisData'));
        if (!data) {
            console.error('診断データが見つかりませんでした。');
            return [];
        }

        const preprocessingTable = skillsQuestions.map(question => {
            const chosenButton = Array.from(document.querySelectorAll('[name^="skills"]')).find(input => {
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
        window.location.href = 'diagnosis-results.html';
    }

    function showDeveloperResults() {
        generatePreprocessingTable();
        generateScoreTable();
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
});

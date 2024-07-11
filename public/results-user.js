document.addEventListener("DOMContentLoaded", function() {
    const hobbies = ["趣味1", "趣味2", "趣味3"];
    const skills = ["得意なこと1", "得意なこと2", "得意なこと3"];
    const jobs = [
        {
            title: "職種1",
            description: "この職種の説明",
            details: "仕事内容と得られる満足感、直面する課題",
            salary: "平均年収",
            companies: "代表的な企業例",
            qualifications: "関係のある資格",
            jobSites: "求人サイトリンク"
        },
        // 他の職種も同様に記載
    ];

    const hobbyList = document.getElementById("hobby-list");
    hobbies.forEach(hobby => {
        const li = document.createElement("li");
        li.textContent = hobby;
        hobbyList.appendChild(li);
    });

    const skillsList = document.getElementById("skills-list");
    skills.forEach(skill => {
        const li = document.createElement("li");
        li.textContent = skill;
        skillsList.appendChild(li);
    });

    const jobList = document.getElementById("job-list");
    jobs.forEach(job => {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${job.title}</strong><br>
                        <p>${job.description}</p>
                        <p>${job.details}</p>
                        <p>平均年収: ${job.salary}</p>
                        <p>代表的な企業: ${job.companies}</p>
                        <p>関係のある資格: ${job.qualifications}</p>
                        <p>求人サイト: <a href="${job.jobSites}" target="_blank">${job.jobSites}</a></p>`;
        jobList.appendChild(li);
    });
});

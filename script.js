document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        fetchDataAndPopulate();
    }, 2500);

    const actionBtn = document.getElementById("action-btn");
    actionBtn.addEventListener("click", function () {
        this.style.background = "linear-gradient(135deg, #00ff88 0%, #00ffaa 100%)";
        this.innerHTML = "NAWIĄZYWANIE POŁĄCZENIA...";
        this.style.boxShadow = "0 0 40px rgba(0, 255, 136, 0.6)";
        this.style.transform = "translateY(-2px)";
        this.style.color = "#000";

        setTimeout(() => {
             this.style.background = "linear-gradient(135deg, #0088ff 0%, #00d9ff 100%)";
             this.innerHTML = "ZAINICJUJ WSPÓŁPRACĘ";
             this.style.boxShadow = "0 0 20px rgba(0, 217, 255, 0.4)";
             this.style.color = "#fff";
        }, 2000);
    });
});

async function fetchDataAndPopulate() {
    try {
        const response = await fetch('https://api.github.com/users/octocat');
        const data = await response.json();

        document.getElementById('app-name').innerText = "Basecode";
        document.getElementById('dev-name').innerText = data.name || data.login;
        document.getElementById('app-rating').innerText = "5.0";
        document.getElementById('app-reviews').innerText = data.followers + " opinii";
        document.getElementById('app-downloads').innerText = data.public_repos + "+ projektów";
        
        document.getElementById('bio-text').innerText = data.bio || "Brak opisu.";

        const skillsContainer = document.getElementById('skills-tags');
        skillsContainer.innerHTML = '';
        ["C++", "HTML5", "CSS3", "JavaScript", "UI/UX"].forEach(skill => {
            const span = document.createElement('span');
            span.className = 'tech-tag';
            span.innerText = skill;
            skillsContainer.appendChild(span);
        });

        const projectsContainer = document.getElementById('projects-list');
        projectsContainer.innerHTML = ''; 
        
        const card = document.createElement('a'); 
        card.className = 'project-card';
        card.href = data.html_url + '?tab=repositories';
        card.innerHTML = `
            <div class="project-title">Repozytoria</div>
            <div class="project-status">ZOBACZ PROJEKTY</div>
        `;
        projectsContainer.appendChild(card);

        const socialsContainer = document.getElementById('social-links');
        socialsContainer.innerHTML = ''; 
        
        const link = document.createElement('a');
        link.className = 'social-item';
        link.href = data.html_url;
        link.innerHTML = `
            <span class="social-name">GITHUB</span>
            <span class="social-icon">💻</span>
        `;
        socialsContainer.appendChild(link);

    } catch (error) {
        document.getElementById('bio-text').innerText = "Błąd pobierania strumienia danych.";
    }
}
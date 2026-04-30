const mockUserData = {
    appName: "Basecode",
    devName: "Hobbyist Developer",
    rating: "4.9",
    reviews: "128",
    downloads: "10K+",
    bio: "Jestem początkującym programistą, który tworzy strony internetowe i programy hobbystycznie. Zawsze szukam nowych wyzwań. Chętnie podejmę się stworzenia nowoczesnej strony na zamówienie dla zainteresowanych osób!",
    skills: ["C++", "HTML5", "CSS3", "JavaScript", "UI/UX"],
    projects: [
        { name: "Portfolio", status: "ZOBACZ PROJEKT", url: "/projekty/" },
        { name: "Certyfikaty", status: "UMIEJĘTNOŚCI", url: "/legitki/" },
        { name: "Aplikacja Web", status: "WKRÓTCE", url: "#" },
        { name: "System IT", status: "WKRÓTCE", url: "#" },
    ],
    socials: [
        { name: "DISCORD", url: "#", icon: "💬" },
        { name: "GITHUB", url: "#", icon: "💻" },
        { name: "X / TWITTER", url: "#", icon: "🐦" }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        populateStoreData();
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

function populateStoreData() {
    document.getElementById('app-name').innerText = mockUserData.appName;
    document.getElementById('dev-name').innerText = mockUserData.devName;
    document.getElementById('app-rating').innerText = mockUserData.rating;
    document.getElementById('app-reviews').innerText = mockUserData.reviews + " opinii";
    document.getElementById('app-downloads').innerText = mockUserData.downloads;
    
    document.getElementById('bio-text').innerText = mockUserData.bio;

    const skillsContainer = document.getElementById('skills-tags');
    skillsContainer.innerHTML = '';
    mockUserData.skills.forEach(skill => {
        const span = document.createElement('span');
        span.className = 'tech-tag';
        span.innerText = skill;
        skillsContainer.appendChild(span);
    });

    const projectsContainer = document.getElementById('projects-list');
    projectsContainer.innerHTML = ''; 
    mockUserData.projects.forEach(proj => {
        const card = document.createElement('a'); 
        card.className = 'project-card';
        card.href = proj.url;
        
        card.innerHTML = `
            <div class="project-title">${proj.name}</div>
            <div class="project-status">${proj.status}</div>
        `;
        projectsContainer.appendChild(card);
    });

    const socialsContainer = document.getElementById('social-links');
    socialsContainer.innerHTML = ''; 
    mockUserData.socials.forEach(soc => {
        const link = document.createElement('a');
        link.className = 'social-item';
        link.href = soc.url;
        
        link.innerHTML = `
            <span class="social-name">${soc.name}</span>
            <span class="social-icon">${soc.icon}</span>
        `;
        socialsContainer.appendChild(link);
    });
}
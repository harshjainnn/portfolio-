import { PERSONAL_INFO, EXPERIENCES, PROJECTS, SKILLS, EDUCATION, CERTIFICATIONS } from './constants.tsx';

// Initialize UI
document.addEventListener('DOMContentLoaded', () => {
    renderNavbar();
    renderHero();
    renderAbout();
    renderExperience();
    renderProjects();
    renderSkills();
    renderEducation();
    renderContact();
    renderFooter();
    initScrollLogic();
    initMobileMenu();
    initRevealObserver();
});

function renderNavbar() {
    const links = [
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Education', href: '#education' },
        { name: 'Contact', href: '#contact' },
    ];
    
    const container = document.getElementById('nav-links');
    const mobileContainer = document.getElementById('mobile-menu');
    
    const linkHtml = links.map(link => `
        <a href="${link.href}" class="px-4 py-2 text-sm font-medium text-slate-400 hover:text-white transition-all rounded-lg">${link.name}</a>
    `).join('');
    
    if (container) {
        container.innerHTML = linkHtml + `
            <a href="${PERSONAL_INFO.resumeLink}" target="_blank" rel="noopener noreferrer" class="ml-4 px-5 py-2 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-all shadow-lg shadow-blue-600/20">
                Resume
            </a>
        `;
    }
    
    if (mobileContainer) {
        mobileContainer.innerHTML = linkHtml + `
            <a href="${PERSONAL_INFO.resumeLink}" target="_blank" rel="noopener noreferrer" class="w-full py-4 text-center text-white bg-blue-600 rounded-xl font-bold mt-4">
                View Resume
            </a>
        `;
    }
}

function renderHero() {
    const container = document.getElementById('hero-content');
    if (!container) return;
    container.innerHTML = `
        <div class="inline-block px-4 py-1.5 mb-6 rounded-full glass-effect text-sm font-medium text-blue-400 border border-blue-500/20">
            Available for Internships & Full-time Roles
        </div>
        <h1 class="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
            Hi, I'm <span class="gradient-text">${PERSONAL_INFO.name}</span>
        </h1>
        <p class="text-xl md:text-2xl text-slate-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            ${PERSONAL_INFO.role} specializing in building 
            <span class="text-white font-medium">intelligent, scalable web solutions</span>.
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#projects" class="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all">View Projects</a>
            <a href="#contact" class="w-full sm:w-auto px-8 py-4 glass-effect text-white rounded-xl font-semibold border border-slate-700 transition-all">Contact Me</a>
        </div>
    `;
}

function renderAbout() {
    const container = document.getElementById('about-content');
    if (!container) return;
    container.innerHTML = `
        <div class="max-w-3xl mx-auto text-center">
            <h2 class="text-3xl font-bold mb-10 flex items-center justify-center gap-4">
                <span class="text-blue-500">01.</span> About Me
            </h2>
            <div class="space-y-6 text-lg text-slate-400 font-light leading-relaxed">
                <p>${PERSONAL_INFO.about}</p>
            </div>
        </div>
    `;
}

function renderExperience() {
    const container = document.getElementById('experience-list');
    if (!container) return;
    container.innerHTML = EXPERIENCES.map((exp, index) => `
        <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            <div class="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-slate-900 text-blue-500 z-10 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <svg class="fill-current w-5 h-5" viewBox="0 0 16 16"><path d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" /></svg>
            </div>
            <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 glass-effect rounded-2xl border border-slate-800">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <h3 class="text-xl font-bold text-white">${exp.role}</h3>
                    <span class="text-sm font-medium text-blue-500 bg-blue-500/10 px-3 py-1 rounded-full">${exp.period}</span>
                </div>
                <div class="text-slate-200 mb-4">${exp.company} • <span class="text-slate-400 text-sm">${exp.location}</span></div>
                <ul class="space-y-2 text-sm text-slate-400">
                    ${exp.points.map(p => `<li class="flex gap-3"><span class="text-blue-500 shrink-0">▹</span><span>${p}</span></li>`).join('')}
                </ul>
            </div>
        </div>
    `).join('');
}

function renderProjects() {
    const container = document.getElementById('projects-grid');
    if (!container) return;
    container.innerHTML = PROJECTS.map(project => `
        <div class="flex flex-col h-full bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all">
            <div class="aspect-video bg-slate-800 relative">
                <img src="https://picsum.photos/seed/${project.title}/600/400" class="w-full h-full object-cover opacity-60">
                <div class="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
            </div>
            <div class="p-6 flex flex-col flex-grow">
                <h3 class="text-xl font-bold mb-3">${project.title}</h3>
                <p class="text-slate-400 text-sm mb-6 flex-grow line-clamp-3">${project.description[0]}</p>
                <div class="flex flex-wrap gap-2">
                    ${project.tags.map(tag => `<span class="text-[10px] uppercase font-bold px-2 py-1 bg-slate-800 text-slate-400 rounded-md">${tag}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

function renderSkills() {
    const container = document.getElementById('skills-grid');
    if (!container) return;
    container.innerHTML = SKILLS.map((cat, i) => `
        <div class="p-8 glass-effect rounded-2xl border border-slate-800">
            <h3 class="text-xl font-bold mb-6 flex items-center gap-2">
                <span class="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 text-sm">${i+1}</span>
                ${cat.category}
            </h3>
            <div class="flex flex-wrap gap-3">
                ${cat.skills.map(skill => `<span class="px-3 py-1.5 bg-slate-800/50 text-slate-300 rounded-lg text-xs border border-slate-700/50">${skill}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

function renderEducation() {
    const container = document.getElementById('education-content');
    if (!container) return;
    container.innerHTML = `
        <h2 class="text-3xl font-bold mb-16 flex items-center gap-4"><span class="text-blue-500">05.</span> Education</h2>
        <div class="space-y-6">
            ${EDUCATION.map(edu => `
                <div class="p-8 glass-effect rounded-2xl border border-slate-800">
                    <div class="flex flex-col md:flex-row justify-between items-start gap-4">
                        <div>
                            <h3 class="text-xl font-bold text-white">${edu.institution}</h3>
                            <p class="text-blue-500">${edu.degree}</p>
                            <p class="text-slate-400 text-sm">${edu.location || ''}</p>
                        </div>
                        <div class="text-right">
                            <span class="text-xs font-bold text-slate-300 bg-slate-800 px-2 py-1 rounded mb-2 inline-block">${edu.period}</span>
                            <p class="text-lg font-bold text-blue-400">${edu.grade}</p>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

function renderContact() {
    const container = document.getElementById('contact-content');
    if (!container) return;
    container.innerHTML = `
        <h2 class="text-3xl font-bold mb-4 flex items-center justify-center gap-4"><span class="text-blue-500">06.</span> Get In Touch</h2>
        <h3 class="text-4xl font-extrabold mb-8">What's Next?</h3>
        <p class="text-slate-400 text-lg mb-12 max-w-xl mx-auto font-light">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is open!
        </p>
        <a href="mailto:${PERSONAL_INFO.email}" class="inline-block px-10 py-5 border-2 border-blue-500 text-blue-500 hover:bg-blue-500/10 rounded-xl text-lg font-bold transition-all">Say Hello</a>
    `;
}

function renderFooter() {
    const footer = document.getElementById('footer');
    if (!footer) return;
    footer.innerHTML = `
        <div class="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <p class="text-slate-500 text-sm">© ${new Date().getFullYear()} ${PERSONAL_INFO.name}. Built with HTML/CSS/JS.</p>
            <div class="flex gap-6">
                <a href="${PERSONAL_INFO.github}" class="text-slate-500 hover:text-white transition-colors">GitHub</a>
                <a href="${PERSONAL_INFO.linkedin}" class="text-slate-500 hover:text-white transition-colors">LinkedIn</a>
            </div>
        </div>
    `;
}

function initScrollLogic() {
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('glass-effect', 'py-3', 'shadow-xl');
            navbar.classList.remove('py-6');
        } else {
            navbar.classList.remove('glass-effect', 'py-3', 'shadow-xl');
            navbar.classList.add('py-6');
        }
    });
}

function initMobileMenu() {
    const toggle = document.getElementById('mobile-menu-toggle');
    const menu = document.getElementById('mobile-menu');
    toggle.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });
}

function initRevealObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}
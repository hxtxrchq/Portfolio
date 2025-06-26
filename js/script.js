// Objeto con traducciones para cada idioma
const translations = {
    en: {
        aboutLink: "About me",
        portfolioLink: "Portfolio",
        resumeLink: "Resume",
        contactLink: "Contact",
        welcomeText: "WELCOME",
        nameText: "I'M ALONSO PAREDES",
        aboutTextContent: "I'm a passionate developer with experience in web development, desktop applications, and artificial intelligence models. I specialize in creating innovative solutions using technologies such as Java, Python, HTML, CSS, JavaScript, and MySQL. My goal is to combine creativity and technology to develop projects that generate positive impact.",
        portfolioTitle: "Things I have designed",
        categoryWeb: "WEB",
        categoryDesktop: "DESKTOP",
        categoryAIModels: "AI MODELS",
        
        contactTitle: "Let's talk"
    },
    es: {
        aboutLink: "Sobre mí",
        portfolioLink: "Portafolio",
        resumeLink: "Currículum",
        contactLink: "Contacto",
        welcomeText: "BIENVENIDO",
        nameText: "SOY ALONSO PAREDES",
        aboutTextContent: "Soy un desarrollador apasionado con experiencia en desarrollo web, aplicaciones de escritorio y modelos de inteligencia artificial. Me especializo en crear soluciones innovadoras utilizando tecnologías como Java, Python, HTML, CSS, JavaScript y MySQL. Mi objetivo es combinar creatividad y tecnología para desarrollar proyectos que generen impacto positivo.",
        portfolioTitle: "Cosas que he diseñado",
        categoryWeb: "WEB",
        categoryDesktop: "ESCRITORIO",
        categoryAIModels: "MODELOS DE IA",
        
        contactTitle: "Hablemos"
    }
};

// Detectar el idioma del navegador
const userLang = navigator.language || navigator.userLanguage;
const lang = userLang.substring(0, 2);  // Obtener solo los primeros 2 caracteres del idioma (por ejemplo, 'es', 'en')

// Función para cambiar el contenido
function changeLanguage(language) {
    const elements = document.querySelectorAll('[id]');
    
    elements.forEach(element => {
        const textKey = element.id;  // El id del elemento es la clave para la traducción
        
        if (translations[language] && translations[language][textKey]) {
            element.textContent = translations[language][textKey];
        }
    });
}

// Cambiar el idioma de la página según el idioma del navegador
changeLanguage(lang);

// Smooth scrolling for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// About me button functionality
const aboutBtn = document.getElementById('aboutBtn');
const aboutContent = document.getElementById('aboutContent');
const aboutText = document.getElementById('aboutTextContent');

aboutBtn.addEventListener('click', function() {
    if (aboutContent.classList.contains('active')) {
        aboutContent.classList.remove('active');
        aboutBtn.textContent = 'Sobre mí';  // Cambia el texto del botón cuando se colapsa
        aboutText.classList.remove('hidden');  // Muestra el texto pequeño
    } else {
        aboutContent.classList.add('active');
        aboutBtn.hidden = true;  // Oculta el botón cuando se expande
        aboutBtn.textContent = 'hide';  // Cambia el texto del botón cuando se expande
        aboutText.classList.add('hidden');  // Oculta el texto pequeño
    }
});





// Portfolio category functionality
const categoryCards = document.querySelectorAll('.category-card');
const projectsGrids = document.querySelectorAll('.projects-grid');

categoryCards.forEach(card => {
    card.addEventListener('click', function() {
        const category = this.getAttribute('data-category');
        
        // Remove active class from all cards
        categoryCards.forEach(c => c.classList.remove('active'));
        // Add active class to clicked card
        this.classList.add('active');
        
        // Hide all project grids
        projectsGrids.forEach(grid => grid.classList.remove('active'));
        // Show selected category grid
        const targetGrid = document.querySelector(`.projects-grid[data-category="${category}"]`);
        if (targetGrid) {
            targetGrid.classList.add('active');
        }
    });
});

// Timeline interactivity
const timelineDots = document.querySelectorAll('.timeline-dot');

timelineDots.forEach(dot => {
    dot.addEventListener('click', function() {
        const timelineItem = this.parentElement;
        const content = timelineItem.querySelector('.timeline-content');
        
        // Add pulse animation
        this.style.animation = 'pulse 0.6s ease';
        
        // Reset animation
        setTimeout(() => {
            this.style.animation = '';
        }, 600);
        
        // Highlight content temporarily
        content.style.background = 'rgba(255, 255, 255, 0.1)';
        content.style.padding = '1rem';
        content.style.borderRadius = '10px';
        content.style.transition = 'all 0.3s ease';
        
        setTimeout(() => {
            content.style.background = '';
            content.style.padding = '';
        }, 2000);
    });
});

// Contact form functionality
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const message = formData.get('message');
    
    // Create email content
    const emailSubject = `Contacto desde Portfolio - ${name}`;
    const emailBody = `
Nombre: ${name}
Email: ${email}
Teléfono: ${phone}

Mensaje:
${message}
    `;
    
    // Create mailto link
    const mailtoLink = `mailto:calonsoparedes1@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    const submitBtn = this.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Message Sent!';
    submitBtn.style.background = '#28a745';
    
    // Reset form
    this.reset();
    
    // Reset button after 3 seconds
    setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.style.background = '#007bff';
    }, 3000);
});

// Add scroll effect to header
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// Add intersection observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.project-card, .timeline-item, .category-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Add CSS animation for pulse effect
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.3); }
        100% { transform: scale(1); }
    }
`;
document.head.appendChild(style);

// Initialize portfolio with first category active
document.addEventListener('DOMContentLoaded', function() {
    const firstCategory = document.querySelector('.category-card[data-category="web"]');
    if (firstCategory) {
        firstCategory.click();
    }
});

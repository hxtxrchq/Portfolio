import React, { useState, useEffect } from 'react';
import {
  Code,
  Briefcase,
  Mail,
  ExternalLink,
  Cpu,
  FileText,
  Globe,
  Phone,
  MessageSquare,
  ChevronRight,
  Layers,
  Award,
  Menu,
  X
} from 'lucide-react';

const GithubIcon: React.FC<{ size?: number }> = ({ size = 20 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon: React.FC<{ size?: number }> = ({ size = 20 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

interface Project {
  title: string;
  desc: string;
  category: 'web' | 'desktop' | 'android' | 'ai';
  tech: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
}

const projectsData: Project[] = [
  {
    title: 'ContentLab',
    desc: 'Aplicación web diseñada para controlar el flujo de trabajo de una agencia de marketing con sus clientes. Permite supervisar flujos de aprobación en tiempo real, lanzar propuestas de producción de marcas, gestionar alertas de diseño/audiovisual y generar contenido automatizado optimizado con inteligencia artificial.',
    category: 'web',
    tech: ['React', 'Node.js', 'Express', 'TailwindCSS'],
    image: '/assets/images/contentlab.png',
    githubUrl: 'https://github.com/hxtxrchq/Content_Lab'
  },
  {
    title: 'ECEL Ingeniería & Construcción',
    desc: 'En ECEL Ingeniería y Construcción contamos con 9 años de experiencia desarrollando soluciones en construcción, supervisión y saneamiento físico-legal inmobiliario, con enfoque en calidad, cumplimiento, seguridad y respaldo técnico en cada proyecto. Trabajamos con criterio técnico, orden operativo y compromiso profesional para responder a las necesidades de cada cliente con soluciones eficientes y confiables.',
    category: 'web',
    tech: ['React', 'TypeScript', 'TailwindCSS'],
    image: '/assets/images/ecel-peru.png',
    demoUrl: 'https://www.ecelperu.org/',
    githubUrl: 'https://github.com/hxtxrchq/ECEL'
  },
  {
    title: 'CyM Centurión & Mendoza',
    desc: 'Supervisión de obras de viviendas, edificios residenciales, locales comerciales e industriales, velando por el cumplimiento del diseño, la calidad constructiva, los plazos establecidos y la seguridad en obra.',
    category: 'web',
    tech: ['React', 'TypeScript', 'TailwindCSS'],
    image: '/assets/images/cym.png',
    demoUrl: 'https://www.ceymeperu.org/',
    githubUrl: 'https://github.com/hxtxrchq/CyM'
  },
  {
    title: 'Portafolio Erika Bardales',
    desc: 'Un portafolio profesional para Erika Bardales donde explica detalladamente su proceso estratégico de marketing y ventas, la creación de sistemas base comerciales, su portafolio de proyectos y los servicios especializados que ofrece para optimizar la atracción y conversión de clientes.',
    category: 'web',
    tech: ['React', 'TypeScript', 'TailwindCSS'],
    image: '/assets/images/erika-bardales.png',
    demoUrl: 'https://www.erikabardales.com/',
    githubUrl: 'https://github.com/hxtxrchq/portafolioErika1'
  },
  {
    title: 'PixelBros Web Agency + Intranet',
    desc: 'Sitio corporativo y sistema intranet para la agencia digital PixelBros. Permite centralizar la gestión de clientes, proyectos y flujos de trabajo internos.',
    category: 'web',
    tech: ['React', 'Node.js', 'Express', 'PostgreSQL', 'TailwindCSS'],
    image: '/assets/images/pixelbros.png',
    demoUrl: 'https://www.pixelbros.pe/',
    githubUrl: 'https://github.com/hxtxrchq/PixelBros'
  },
  {
    title: 'TrendSpace',
    desc: 'Plataforma de comercio electrónico colaborativo donde los usuarios no solo compran, sino también votan, proponen y apoyan diseños de moda únicos. La producción se activa solo cuando una prenda alcanza una meta mínima de interés, reduciendo desperdicios y fomentando decisiones colectivas.',
    category: 'web',
    tech: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
    image: '/assets/images/trendSpace-Web.png',
    demoUrl: 'https://trendspace.hubstem.org/',
    githubUrl: 'https://github.com/hxtxrchq/TrendSpacev1'
  },
  {
    title: 'MiniMarketGG',
    desc: 'Sistema de ventas y control de inventario de escritorio para un minimarket, permitiendo login de usuarios y configuración de permisos, venta de productos, control de inventario de productos, pedidos, categorías. Además, historial de ventas e impresión de boletas.',
    category: 'desktop',
    tech: ['Java', 'MySQL'],
    image: '/assets/images/MiniMarketGG.png',
    githubUrl: 'https://github.com/hxtxrchq/MiniMarketGG'
  },
  {
    title: 'PayReminder App',
    desc: 'Aplicación móvil para la gestión de deudas personales, permite crear deudas únicas o recurrentes, programar recordatorios, visualizar un calendario con estados de pago, registrar pagos completos o parciales, organizar por categorías y métodos de pago, calcular intereses opcionales y generar un resumen mensual automático con montos y conteos.',
    category: 'android',
    tech: ['Dart 3', 'Flutter 3', 'Drift (SQLite)'],
    image: '/assets/images/LOGO_SIN_FONDO.png',
    demoUrl: 'https://github.com/hxtxrchq/payreminder/releases/tag/App',
    githubUrl: 'https://github.com/hxtxrchq/payreminder/tree/App'
  },
  {
    title: 'Modelo de detección temprana de enfermedades en frutas',
    desc: 'El proyecto busca desarrollar un sistema automatizado e inteligente que, a través de modelos de aprendizaje profundo (CNN), permita identificar con mayor precisión y rapidez la presencia de enfermedades en frutas. De esta manera, se contribuye a mejorar los procesos de control de calidad en la agroindustria, reduciendo pérdidas económicas.',
    category: 'ai',
    tech: ['Python', 'TensorFlow', 'CNN'],
    image: '/assets/images/Detección_De_Frutas - IA.png',
    demoUrl: 'https://fruitdetective.vercel.app/',
    githubUrl: 'https://github.com/hxtxrchq/backend-fast-api-DeteccionFrutas'
  },
  {
    title: 'Tienda virtual - Máxima Peruana',
    desc: 'Tienda online especializada en soluciones de seguridad electrónica y redes. Cuenta con catálogo de productos de CCTV, alarmas contra incendios y robos, control de accesos y asistencia, radios móviles, cableado estructurado, UPS y mini UPS, almacenamiento, fibra óptica y más.',
    category: 'web',
    tech: ['WordPress', 'Elementor'],
    image: '/assets/images/maxima-peruana.png',
    demoUrl: 'https://tienda.maximaperuana.pe/'
  },
  {
    title: 'Plataforma Web - XPRESS',
    desc: 'Página web de XPRESS que brinda soluciones rápidas y seguras en transporte privado, envíos express y delivery en Trujillo, ofreciendo confianza, atención personalizada y la comodidad de gestionar todo desde tu celular.',
    category: 'web',
    tech: ['WordPress', 'Elementor'],
    image: '/assets/images/express.png',
    demoUrl: 'https://serviciosxpress.chiqo.site/'
  },
  {
    title: 'Plataforma Web - HG Ingepro',
    desc: 'Sitio corporativo para empresa de soluciones en energía y climatización. Se priorizó claridad de servicios, CTAs de cotización y performance en dispositivos móviles.',
    category: 'web',
    tech: ['WordPress', 'Elementor'],
    image: '/assets/images/HG IngePro.png',
    demoUrl: 'https://hgingeproperu.com/'
  },
  {
    title: 'Versyo Store - E-commerce',
    desc: 'Plataforma web donde los usuarios podrán comprar productos y hacer seguimiento de sus pedidos. A la vez, los usuarios que son parte de la propia empresa podrán tener la posibilidad de editar productos del catálogo, editar pedidos, entre otras funciones.',
    category: 'web',
    tech: ['React', 'TypeScript', 'PostgreSQL'],
    image: '/assets/images/Versyo logo .png',
    demoUrl: 'https://versyo.chiqo.site/',
    githubUrl: 'https://github.com/hxtxrchq/backend-versyo'
  },
  {
    title: 'Wiki de personajes - Final Space',
    desc: 'Aplicación tipo wiki para consultar información de los personajes de la serie Final Space. Consume una API externa para listar los personajes, mostrar sus imágenes y detalles como nombre, especie y estado.',
    category: 'web',
    tech: ['TypeScript', 'JavaScript', 'API REST'],
    image: '/assets/images/logo.jpg',
    demoUrl: 'https://finalspace-characters.chiqo.site/',
    githubUrl: 'https://github.com/hxtxrchq/-FinalSpace-characters'
  },
  {
    title: 'Web corporativa - Xperto Automotriz',
    desc: 'Sitio web corporativo de Xperto Automotriz, taller mecánico en Trujillo orientado al mantenimiento preventivo y correctivo de vehículos. La web presenta los principales servicios, tienda para venta de repuestos y lubricantes, etc.',
    category: 'web',
    tech: ['WordPress', 'Elementor'],
    image: '/assets/images/xperto-automotriz.png',
    demoUrl: 'https://xpertoautomotriz.com/'
  },
  {
    title: 'Visor 3D web - Proyecto Dormitorio Principal',
    desc: 'Visor 3D en línea para presentar un modelo arquitectónico desarrollado en SketchUp. Carga archivos con extensión .glb/.gltf y permite visualizar el render directamente en el navegador de forma práctica en cualquier dispositivo.',
    category: 'web',
    tech: ['React', 'JavaScript', 'WebGL'],
    image: '/assets/images/visor-kath3d.png',
    demoUrl: 'https://kath-3d.chiqo.site/',
    githubUrl: 'https://github.com/hxtxrchq/3d-render-kath'
  },
  {
    title: 'Panel de riego automático - Flowerpot IoT',
    desc: 'Página web sencilla que se conecta a un dispositivo ESP32 preconfigurado para el riego automático de una maceta. Monitorea la humedad del suelo y determina cuándo la planta necesita agua.',
    category: 'web',
    tech: ['HTML', 'ESP32 / IoT'],
    image: '/assets/images/repo-iot.png',
    demoUrl: 'https://hxtxrchq.github.io/repo-flowerpot-iot/',
    githubUrl: 'https://github.com/hxtxrchq/repo-flowerpot-iot'
  }
];

const ProjectDescription: React.FC<{ desc: string }> = ({ desc }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 130;
  const isLong = desc.length > maxLength;

  return (
    <div>
      <p style={{ 
        color: 'var(--text-secondary)', 
        fontSize: '0.88rem', 
        lineHeight: '1.5',
        margin: 0
      }}>
        {isExpanded || !isLong ? desc : `${desc.substring(0, maxLength)}...`}
      </p>
      {isLong && (
        <button
          onClick={(e) => {
            e.preventDefault();
            setIsExpanded(!isExpanded);
          }}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--accent-color)',
            cursor: 'pointer',
            padding: '4px 0 0 0',
            fontSize: '0.85rem',
            fontWeight: 600,
            fontFamily: 'var(--font-main)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px'
          }}
        >
          {isExpanded ? 'Leer menos' : 'Leer más'}
        </button>
      )}
    </div>
  );
};

export const VisualMode: React.FC = () => {
  const [projectFilter, setProjectFilter] = useState<'all' | 'web' | 'desktop' | 'android' | 'ai'>('all');
  const [stats, setStats] = useState({ exp: 0, projects: 0, clients: 0 });
  const [selectedSkillCategory, setSelectedSkillCategory] = useState<'languages' | 'frontend' | 'backend' | 'databases' | 'tools' | 'methodologies' | 'soft'>('languages');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    setVisibleCount(6);
  }, [projectFilter]);

  // Typewriter effect states
  const [typewriterText, setTypewriterText] = useState('');
  const words = ['Ingeniero de Computación y Sistemas', 'Desarrollador Full Stack', 'Creador de Soluciones Digitales'];
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const duration = 1200;
    const steps = 40;
    const stepTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      setStats({
        exp: Math.min(2, Math.floor((2 / steps) * step)),
        projects: Math.min(20, Math.floor((20 / steps) * step)),
        clients: Math.min(15, Math.floor((15 / steps) * step))
      });
      if (step >= steps) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  // Typewriter loop effect
  useEffect(() => {
    let timer: any;
    const currentFullWord = words[wordIndex];
    
    const handleType = () => {
      if (!isDeleting) {
        setTypewriterText(currentFullWord.substring(0, typewriterText.length + 1));
        if (typewriterText === currentFullWord) {
          timer = setTimeout(() => setIsDeleting(true), 1500);
          return;
        }
      } else {
        setTypewriterText(currentFullWord.substring(0, typewriterText.length - 1));
        if (typewriterText === '') {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
          setTypingSpeed(100);
          return;
        }
      }
      setTypingSpeed(isDeleting ? 40 : 80);
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [typewriterText, isDeleting, wordIndex, typingSpeed]);

  const filteredProjects = projectsData.filter(
    (p) => projectFilter === 'all' || p.category === projectFilter
  );

  return (
    <div style={{ padding: '0 20px 80px 20px', maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
      
      {/* 1. Header / Navbar */}
      <header className="header-container">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src="/assets/images/logo_signature.png"
            alt="Alonso Paredes Logo"
            style={{ height: '55px', width: 'auto', objectFit: 'contain' }}
          />
        </div>

        <button className="hamburger-btn" onClick={() => setIsMobileMenuOpen(true)}>
          <Menu size={24} />
        </button>

        <nav className="nav-links">
          <a href="#home" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 600, transition: 'var(--transition-smooth)' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-color)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}>Inicio</a>
          <a href="#skills" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 600, transition: 'var(--transition-smooth)' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-color)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}>Habilidades</a>
          <a href="#projects" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 600, transition: 'var(--transition-smooth)' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-color)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}>Proyectos</a>
          <a href="#experience" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 600, transition: 'var(--transition-smooth)' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-color)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}>Trayectoria</a>
          <a href="#certifications" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 600, transition: 'var(--transition-smooth)' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-color)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}>Certificaciones</a>
          <a href="#contact" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 600, transition: 'var(--transition-smooth)' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-color)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}>Contacto</a>
        </nav>
      </header>

      {/* Mobile Nav Overlay */}
      {isMobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'var(--bg-main)',
          zIndex: 99999,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '24px'
        }}>
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            style={{
              position: 'absolute',
              top: '24px',
              right: '20px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--text-primary)'
            }}
          >
            <X size={32} />
          </button>
          
          <a href="#home" onClick={() => setIsMobileMenuOpen(false)} style={{ color: 'var(--primary-color)', textDecoration: 'none', fontSize: '1.5rem', fontWeight: 700 }}>Inicio</a>
          <a href="#skills" onClick={() => setIsMobileMenuOpen(false)} style={{ color: 'var(--primary-color)', textDecoration: 'none', fontSize: '1.5rem', fontWeight: 700 }}>Habilidades</a>
          <a href="#projects" onClick={() => setIsMobileMenuOpen(false)} style={{ color: 'var(--primary-color)', textDecoration: 'none', fontSize: '1.5rem', fontWeight: 700 }}>Proyectos</a>
          <a href="#experience" onClick={() => setIsMobileMenuOpen(false)} style={{ color: 'var(--primary-color)', textDecoration: 'none', fontSize: '1.5rem', fontWeight: 700 }}>Trayectoria</a>
          <a href="#certifications" onClick={() => setIsMobileMenuOpen(false)} style={{ color: 'var(--primary-color)', textDecoration: 'none', fontSize: '1.5rem', fontWeight: 700 }}>Certificaciones</a>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} style={{ color: 'var(--primary-color)', textDecoration: 'none', fontSize: '1.5rem', fontWeight: 700 }}>Contacto</a>
        </div>
      )}

      {/* 2. United Hero & About Me Section */}
      <section id="home" className="hero-section" style={{ display: 'flex', flexDirection: 'column', gap: '30px', alignItems: 'center', textAlign: 'center', minHeight: 'auto', padding: '40px 0', marginBottom: '60px' }}>
        
        {/* Profile Card Header (Avatar + Name + Title at the top) */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
          <div
            style={{
              width: '180px',
              height: '180px',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '4px solid var(--accent-color)',
              boxShadow: '0 8px 24px rgba(61, 133, 198, 0.15)',
              position: 'relative'
            }}
          >
            <img
              src="/assets/images/foto.png"
              alt="Alonso Paredes"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          
          <div>
            <h1 style={{ fontSize: 'clamp(2.2rem, 6vw, 3.6rem)', fontFamily: 'var(--font-title)', color: 'var(--primary-color)', margin: '0 0 8px 0', lineHeight: '1.1' }}>
              Alonso Paredes
            </h1>
            
            {/* Typewriter subtitle */}
            <h2
              style={{
                fontSize: '1.35rem',
                color: 'var(--text-secondary)',
                fontWeight: 500,
                marginBottom: '16px',
                minHeight: '30px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px'
              }}
            >
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--accent-color)', display: 'inline-block' }} />
              <span className="typewriter-cursor" style={{ paddingRight: '4px' }}>
                {typewriterText}
              </span>
            </h2>

            {/* Social media icons below the subtitle */}
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginBottom: '16px' }}>
              <a href="https://github.com/hxtxrchq" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'var(--transition-smooth)' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-color)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
                <GithubIcon size={20} />
              </a>
              <a href="https://www.linkedin.com/in/carlos-alonso-paredes-quiroz-84b94038b/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'var(--transition-smooth)' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-color)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
                <LinkedinIcon size={20} />
              </a>
              <a href="/assets/images/CV_ALONSO_PAREDES.pdf" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'var(--transition-smooth)' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-color)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
                <FileText size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Content (passions and descriptions) */}
        <div style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '800px', lineHeight: '1.8', margin: '0 auto' }}>
          <p style={{ marginBottom: '16px' }}>
            Soy egresado en <strong>Ingeniería de Computación y Sistemas</strong>, apasionado por diseñar soluciones tecnológicas que optimicen procesos y aporten valor real.
          </p>
          <p>
            Me apasiona el desarrollo de software integral y de vanguardia. Cuento con un enfoque analítico estructurado, orientado al detalle y con alta proactividad para integrarme a equipos de trabajo enfocados en la innovación tecnológica.
          </p>
        </div>

        {/* Buttons / Calls to Action */}
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '16px' }}>
          <a href="#projects" className="btn-cyber">
            <Code size={18} /> Ver Proyectos
          </a>
          <a href="#contact" className="btn-cyber-secondary">
            <Mail size={18} /> Contactar
          </a>
        </div>

        {/* Stats Dashboard */}
        <div className="hero-stats" style={{ margin: '0 auto' }}>
          <div>
            <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: 'var(--accent-color)', fontFamily: 'var(--font-code)' }}>+{stats.exp} Años</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Experiencia</div>
          </div>
          <div style={{ width: '1px', background: 'var(--border-subtle)' }} />
          <div>
            <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: 'var(--accent-color)', fontFamily: 'var(--font-code)' }}>+{stats.projects}</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Proyectos</div>
          </div>
          <div style={{ width: '1px', background: 'var(--border-subtle)' }} />
          <div>
            <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: 'var(--accent-color)', fontFamily: 'var(--font-code)' }}>+{stats.clients}</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Clientes Satisfechos</div>
          </div>
        </div>
      </section>

      {/* 4. Skills Section */}
      <section id="skills" style={{ marginBottom: '60px', scrollMarginTop: '80px' }}>
        <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-title)', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--primary-color)' }}>
          <Cpu size={26} style={{ color: 'var(--accent-color)' }} /> Habilidades & Competencias
        </h2>

        <div className="skills-layout">
          {/* Skill Categories Selector */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[
              { id: 'languages', label: 'Lenguajes de Programación' },
              { id: 'frontend', label: 'Desarrollo Frontend' },
              { id: 'backend', label: 'Backend & Arquitectura' },
              { id: 'databases', label: 'Bases de Datos' },
              { id: 'tools', label: 'Herramientas, Diseño & Datos' },
              { id: 'methodologies', label: 'Metodologías & TI' },
              { id: 'soft', label: 'Habilidades Blandas' }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedSkillCategory(cat.id as any)}
                style={{
                  background: selectedSkillCategory === cat.id ? 'var(--accent-light)' : 'var(--bg-card)',
                  border: `1px solid ${selectedSkillCategory === cat.id ? 'var(--accent-color)' : 'var(--border-subtle)'}`,
                  color: selectedSkillCategory === cat.id ? 'var(--accent-color)' : 'var(--text-secondary)',
                  padding: '14px 16px',
                  borderRadius: '12px',
                  textAlign: 'left',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-main)',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  transition: 'var(--transition-smooth)',
                  boxShadow: 'var(--shadow-subtle)'
                }}
              >
                <span>{cat.label}</span>
                <ChevronRight size={16} />
              </button>
            ))}
          </div>

          {/* Skill Cards Grid (Innovative Knowledge Display) */}
          <div className="glass" style={{ padding: '30px', minHeight: '300px' }}>
            {(() => {
              const skillsData = {
                languages: [
                  { name: 'Python', desc: 'Desarrollo de scripts, automatizaciones, APIs y análisis de datos.' },
                  { name: 'Java', desc: 'Programación orientada a objetos (POO) y desarrollo backend robusto.' },
                  { name: 'C#', desc: 'Desarrollo de aplicaciones y lógica estructurada en ecosistema Microsoft.' },
                  { name: 'JavaScript & TypeScript', desc: 'Desarrollo web interactivo tanto en el frontend como backend (Node.js, Express.js).' }
                ],
                frontend: [
                  { name: 'HTML & CSS', desc: 'Estructuración semántica y diseño de layouts adaptables con estilos modernos.' },
                  { name: 'React', desc: 'Creación de interfaces dinámicas de usuario utilizando componentes y hooks reactivos.' },
                  { name: 'Angular', desc: 'Desarrollo de aplicaciones web estructuradas de gran escala bajo TypeScript.' },
                  { name: 'WordPress', desc: 'Implementación ágil de sitios corporativos, blogs y gestores de contenido.' }
                ],
                backend: [
                  { name: 'APIs RESTful', desc: 'Desarrollo e integración de endpoints para comunicación de arquitectura Cliente-Servidor.' },
                  { name: 'Arquitectura Cliente-Servidor', desc: 'Estructuración de servicios web robustos de comunicación cliente-servidor optimizada.' }
                ],
                databases: [
                  { name: 'MySQL & PostgreSQL', desc: 'Modelado relacional de datos, optimización de queries y mantenimiento.' },
                  { name: 'MongoDB', desc: 'Almacenamiento no relacional flexible para estructuras de datos dinámicas.' }
                ],
                tools: [
                  { name: 'Git & GitHub', desc: 'Gestión colaborativa del código fuente, control de versiones y repositorios.' },
                  { name: 'JIRA & Notion', desc: 'Gestión y organización ágil de tareas, flujos de trabajo y documentación.' },
                  { name: 'Figma & Photoshop', desc: 'Diseño de interfaces de usuario (UI/UX), prototipos interactivos y edición de imágenes.' },
                  { name: 'Power BI', desc: 'Análisis de datos empresariales, modelado e informes interactivos de negocio.' },
                  { name: 'Microsoft Office', desc: 'Automatización de hojas de cálculo, presentaciones corporativas y documentación.' }
                ],
                methodologies: [
                  { name: 'DevOps & Scrum', desc: 'Gestión de despliegues y automatización ágil en ciclos de desarrollo.' },
                  { name: 'CRISP-DM & RUP', desc: 'Modelos estructurados para procesos de minería de datos y ciclo de vida de desarrollo de software.' },
                  { name: 'ITIL 4, PMBOK 6 & Gestión de Proyectos', desc: 'Dirección de proyectos de TI bajo metodologías y mejores prácticas globales.' }
                ],
                soft: [
                  { name: 'Liderazgo & Gestión de Equipos', desc: 'Capacidad para guiar, motivar y organizar equipos de trabajo multidisciplinarios hacia metas comunes.' },
                  { name: 'Trabajo en Equipo & Comunicación Efectiva', desc: 'Colaboración activa y comunicación interpersonal asertiva y fluida.' },
                  { name: 'Pensamiento Crítico & Analítico', desc: 'Resolución metódica de problemas complejos con enfoque estructurado.' },
                  { name: 'Gestión del Tiempo & Adaptabilidad', desc: 'Priorización inteligente de tareas, cumplimiento de plazos y alta flexibilidad frente a cambios.' }
                ]
              };

              const currentCategory = selectedSkillCategory as keyof typeof skillsData;
              const titleMap = {
                languages: 'Lenguajes de Programación',
                frontend: 'Desarrollo Frontend',
                backend: 'Backend & Arquitectura',
                databases: 'Bases de Datos',
                tools: 'Herramientas, Diseño & Análisis de Datos',
                methodologies: 'Metodologías, Marcos de Trabajo & TI',
                soft: 'Habilidades Blandas'
              };

              return (
                <div>
                  <h3 style={{ color: 'var(--accent-color)', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.2rem' }}>
                    <Layers size={20} /> {titleMap[currentCategory]}
                  </h3>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '16px' }}>
                    {skillsData[currentCategory].map((s) => (
                      <div key={s.name} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', background: '#f8fafc', padding: '16px', borderRadius: '12px', border: '1px solid var(--border-subtle)' }}>
                        <div style={{ background: 'var(--accent-light)', color: 'var(--accent-color)', padding: '8px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <Code size={16} />
                        </div>
                        <div>
                          <h4 style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--primary-color)', marginBottom: '4px' }}>{s.name}</h4>
                          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>{s.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      </section>

      {/* 5. Projects Section (Direct-Link Grid) */}
      <section id="projects" style={{ marginBottom: '60px', scrollMarginTop: '80px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px', marginBottom: '30px' }}>
          <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-title)', display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--primary-color)' }}>
            <Code size={26} style={{ color: 'var(--accent-color)' }} /> Proyectos Destacados
          </h2>

          {/* Filters */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {(['all', 'web', 'desktop', 'android', 'ai'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setProjectFilter(cat)}
                style={{
                  background: projectFilter === cat ? 'var(--accent-color)' : 'var(--bg-card)',
                  color: projectFilter === cat ? '#ffffff' : 'var(--text-secondary)',
                  border: `1px solid ${projectFilter === cat ? 'var(--accent-color)' : 'var(--border-subtle)'}`,
                  padding: '8px 16px',
                  borderRadius: '20px',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-main)',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  textTransform: 'uppercase',
                  transition: 'var(--transition-smooth)',
                  boxShadow: 'var(--shadow-subtle)'
                }}
              >
                {cat === 'all' ? 'Todos' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Clean, Simple UX Grid */}
        <div className="projects-grid">
          {filteredProjects.slice(0, visibleCount).map((p, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                overflow: 'hidden',
                transition: 'var(--transition-smooth)'
              }}
            >
              {/* Image Banner */}
              <div style={{ width: '100%', height: '210px', overflow: 'hidden', position: 'relative', background: '#f8fafc' }}>
                <img
                  src={p.image}
                  alt={p.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'var(--transition-smooth)' }}
                  className="project-image-hover"
                />
                <span style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(4px)',
                  color: 'var(--accent-color)',
                  fontSize: '0.7rem',
                  fontWeight: 'bold',
                  padding: '4px 10px',
                  borderRadius: '12px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  {p.category}
                </span>
              </div>

              {/* Text details & links */}
              <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                <div style={{ marginBottom: '20px' }}>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '8px', color: 'var(--primary-color)' }}>
                    {p.title}
                  </h3>
                  <ProjectDescription desc={p.desc} />
                </div>

                <div style={{ display: 'flex', gap: '10px' }}>
                  {p.demoUrl && (
                    <a href={p.demoUrl} target="_blank" rel="noopener noreferrer" className="btn-cyber" style={{ flex: 1, padding: '10px 14px', fontSize: '0.8rem', justifyContent: 'center' }}>
                      <ExternalLink size={14} /> Ver Demo
                    </a>
                  )}
                  {p.githubUrl && (
                    <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-cyber-secondary" style={{ flex: 1, padding: '10px 14px', fontSize: '0.8rem', justifyContent: 'center' }}>
                      <GithubIcon size={14} /> Código
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length > 6 && (
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '36px' }}>
            <button
              onClick={() => setVisibleCount(prev => prev === 6 ? filteredProjects.length : 6)}
              className="btn-cyber-secondary"
              style={{ padding: '12px 28px', fontSize: '0.95rem' }}
            >
              {visibleCount === 6 ? 'Ver más proyectos' : 'Ver menos'}
            </button>
          </div>
        )}
      </section>

      {/* 6. Experience Timeline */}
      <section id="experience" style={{ marginBottom: '60px', scrollMarginTop: '80px' }}>
        <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-title)', marginBottom: '36px', display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--primary-color)' }}>
          <Briefcase size={26} style={{ color: 'var(--accent-color)' }} /> Trayectoria Profesional
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', position: 'relative', paddingLeft: '30px', borderLeft: '2px solid var(--accent-light)' }}>
          {[
            {
              date: 'Febrero 2026 - Julio 2026',
              role: 'Desarrollador Web',
              company: 'PixelBros - Trujillo, Perú',
              details: 'Desarrollo y mantenimiento de sitios y aplicaciones web responsivas, asegurando una experiencia de usuario óptima en distintos dispositivos. Implementación de interfaces dinámicas utilizando React, TypeScript, ExpressJS y frameworks modernos. Desarrollo backend enfocado en la lógica de negocio, manejo de bases de datos e integración de APIs y servicios externos.'
            },
            {
              date: 'Mayo 2025 - Septiembre 2025',
              role: 'Desarrollador de Diseño Web',
              company: 'Agencia DN - Software & Marketing',
              details: 'Desarrollo y diseño de páginas web responsivas y totalmente funcionales, optimizadas para brindar una experiencia de usuario fluida y adaptada a las necesidades de cada cliente.'
            },
            {
              date: '2021 - 2025',
              role: 'Egresado en Ingeniería de Computación y Sistemas',
              company: 'Universidad Privada Antenor Orrego (UPAO)',
              details: 'Décimo superior de la carrera. Formación completa con sólidas bases en algoritmos, bases de datos complejas, desarrollo full stack, arquitectura de software y gestión ágil.'
            }
          ].map((exp, idx) => (
            <div key={idx} style={{ position: 'relative' }}>
              {/* Dot */}
              <div
                style={{
                  position: 'absolute',
                  left: '-41px',
                  top: '6px',
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  background: '#ffffff',
                  border: '3px solid var(--accent-color)',
                  boxShadow: '0 0 0 4px var(--accent-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 2
                }}
              />

              {/* Card */}
              <div className="glass" style={{ padding: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px', marginBottom: '8px' }}>
                  <span style={{ fontSize: '0.85rem', color: 'var(--accent-color)', fontFamily: 'var(--font-code)', fontWeight: 600 }}>{exp.date}</span>
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--primary-color)' }}>{exp.role}</h3>
                <h4 style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '12px', fontWeight: 500 }}>{exp.company}</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>{exp.details}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6.5 Certifications Section */}
      <section id="certifications" style={{ marginBottom: '60px', scrollMarginTop: '80px' }}>
        <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-title)', marginBottom: '30px', display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--primary-color)' }}>
          <Award size={26} style={{ color: 'var(--accent-color)' }} /> Certificaciones
        </h2>

        <div style={{ maxWidth: '650px' }}>
          <div className="glass" style={{ padding: '24px', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
            <div style={{ background: 'var(--accent-light)', color: 'var(--accent-color)', padding: '12px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Award size={24} style={{ color: 'var(--accent-color)' }} />
            </div>
            <div>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-code)', fontWeight: 600, display: 'block', marginBottom: '4px' }}>TECSUP | INNOVALAB</span>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--primary-color)', marginBottom: '8px' }}>
                Programa Integral de INNOVALAB en Tecsup (51 horas)
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                Formación intensiva en innovación, emprendimiento y transformación digital. Trabajo colaborativo en equipos multidisciplinarios para validar ideas de negocio con enfoque en impacto social y tecnológico.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Contact Section */}
      <section id="contact" style={{ scrollMarginTop: '80px' }}>
        <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-title)', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--primary-color)' }}>
          <Mail size={26} style={{ color: 'var(--accent-color)' }} /> Contacto & Enlaces
        </h2>

        <div className="contact-layout">
          {/* Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h3 style={{ fontSize: '1.3rem', fontFamily: 'var(--font-title)', color: 'var(--primary-color)' }}>¡Trabajemos juntos!</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '1rem' }}>
              Estoy disponible para nuevas oportunidades laborales y desarrollo de proyectos innovadores. Cuéntame sobre tus necesidades tecnológicas y busquemos la mejor solución.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '10px' }}>
              <a href="tel:+51914754513" style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-secondary)', textDecoration: 'none', transition: 'var(--transition-smooth)', fontWeight: 500 }} onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-color)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
                <Phone size={18} style={{ color: 'var(--accent-color)' }} />
                <span>+51 914 754 513</span>
              </a>
              <a href="mailto:calonsoparedes1@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-secondary)', textDecoration: 'none', transition: 'var(--transition-smooth)', fontWeight: 500 }} onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-color)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
                <Mail size={18} style={{ color: 'var(--accent-color)' }} />
                <span>calonsoparedes1@gmail.com</span>
              </a>
              <a href="https://wa.me/51914754513" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-secondary)', textDecoration: 'none', transition: 'var(--transition-smooth)', fontWeight: 500 }} onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-color)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
                <MessageSquare size={18} style={{ color: 'var(--accent-color)' }} />
                <span>Enviar WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Form */}
          <form action="https://formspree.io/f/mrbkowev" method="POST" className="glass" style={{ padding: '30px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '6px', fontFamily: 'var(--font-code)', fontWeight: 600 }}>NOMBRE</label>
              <input
                type="text"
                name="name"
                required
                style={{ width: '100%', padding: '12px', background: '#f8fafc', border: '1px solid var(--border-subtle)', borderRadius: '8px', color: 'var(--text-primary)', outline: 'none', transition: 'var(--transition-smooth)' }}
                onFocus={e => e.currentTarget.style.borderColor = 'var(--accent-color)'}
                onBlur={e => e.currentTarget.style.borderColor = 'var(--border-subtle)'}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '6px', fontFamily: 'var(--font-code)', fontWeight: 600 }}>EMAIL</label>
              <input
                type="email"
                name="email"
                required
                style={{ width: '100%', padding: '12px', background: '#f8fafc', border: '1px solid var(--border-subtle)', borderRadius: '8px', color: 'var(--text-primary)', outline: 'none', transition: 'var(--transition-smooth)' }}
                onFocus={e => e.currentTarget.style.borderColor = 'var(--accent-color)'}
                onBlur={e => e.currentTarget.style.borderColor = 'var(--border-subtle)'}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '6px', fontFamily: 'var(--font-code)', fontWeight: 600 }}>TELÉFONO</label>
              <input
                type="tel"
                name="phone"
                style={{ width: '100%', padding: '12px', background: '#f8fafc', border: '1px solid var(--border-subtle)', borderRadius: '8px', color: 'var(--text-primary)', outline: 'none', transition: 'var(--transition-smooth)' }}
                onFocus={e => e.currentTarget.style.borderColor = 'var(--accent-color)'}
                onBlur={e => e.currentTarget.style.borderColor = 'var(--border-subtle)'}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '6px', fontFamily: 'var(--font-code)', fontWeight: 600 }}>MENSAJE</label>
              <textarea
                name="message"
                required
                rows={4}
                style={{ width: '100%', padding: '12px', background: '#f8fafc', border: '1px solid var(--border-subtle)', borderRadius: '8px', color: 'var(--text-primary)', outline: 'none', resize: 'vertical', transition: 'var(--transition-smooth)' }}
                onFocus={e => e.currentTarget.style.borderColor = 'var(--accent-color)'}
                onBlur={e => e.currentTarget.style.borderColor = 'var(--border-subtle)'}
              />
            </div>
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://hxtxrchq.github.io/Portfolio/gracias.html" />

            <button type="submit" className="btn-cyber" style={{ justifyContent: 'center' }}>
              Enviar Mensaje
            </button>
          </form>
        </div>
      </section>

      {/* 8. Footer */}
      <footer style={{ marginTop: '60px', borderTop: '1px solid var(--border-subtle)', paddingTop: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>&copy; 2026 Chiqocorp. Todos los derechos reservados.</p>
        <div style={{ display: 'flex', gap: '16px' }}>
          <a href="https://github.com/hxtxrchq" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', transition: 'var(--transition-smooth)' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-color)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}>
            <GithubIcon size={18} />
          </a>
          <a href="https://www.linkedin.com/in/carlos-alonso-paredes-quiroz-84b94038b/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', transition: 'var(--transition-smooth)' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-color)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}>
            <Globe size={18} />
          </a>
        </div>
      </footer>

    </div>
  );
};

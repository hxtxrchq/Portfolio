import React, { useState, useEffect } from 'react';
import {
  Code,
  Mail,
  ExternalLink,
  Cpu,
  FileText,
  Phone,
  MessageSquare,
  Award,
  Menu,
  X,
  GitBranch,
  Play
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
  videoUrl?: string;
  version: string;
}

const projectsData: Project[] = [
  {
    title: 'Desarrollo de un modelo híbrido Autoencoder con Random Forest para la detección de anomalías en transacciones financieras',
    desc: 'Plataforma integral de detección y monitoreo de fraude financiero que integra un modelo híbrido de Autoencoder y Random Forest como motor analítico, alcanzando un AUC-ROC de 0.8979. El sistema está compuesto por un frontend en Angular alojado en Vercel, un backend en FastAPI con servicios auxiliares en DigitalOcean mediante Docker. La solución prioriza seguridad con autenticación, control de acceso basado en roles, trazabilidad de acciones y restricciones de visualización de datos sensibles. Trasciende el modelo predictivo consolidándose como una plataforma funcional de monitoreo capaz de articular procesamiento, visualización, despliegue y control operativo en un entorno web.',
    category: 'ai',
    tech: ['Angular', 'FastAPI', 'Python', 'Autoencoder', 'Random Forest', 'Docker', 'DigitalOcean', 'Vercel'],
    image: '/assets/images/deteccion_de_fraudes.png',
    demoUrl: 'https://frontend-ae-rf.vercel.app/auth/login',
    videoUrl: 'https://youtu.be/YpcY1QEhUMM',
    version: '1.0.0'
  },
  {
    title: 'Modelo de detección temprana de enfermedades en frutas',
    desc: 'El proyecto busca desarrollar un sistema automatizado e inteligente que, a través de modelos de aprendizaje profundo (CNN), permita identificar con mayor precisión y rapidez la presencia de enfermedades en frutas. De esta manera, se contribuye a mejorar los procesos de control de calidad en la agroindustria.',
    category: 'ai',
    tech: ['Python', 'TensorFlow', 'CNN'],
    image: '/assets/images/Detección_De_Frutas - IA.png',
    demoUrl: 'https://fruitdetective.vercel.app/',
    githubUrl: 'https://github.com/hxtxrchq/backend-fast-api-DeteccionFrutas',
    version: '1.0.2'
  },
  {
    title: 'ContentLab',
    desc: 'Aplicación web diseñada para controlar el flujo de trabajo de una agencia de marketing con sus clientes. Permite supervisar flujos de aprobación en tiempo real, lanzar propuestas de producción de marcas, gestionar alertas de diseño/audiovisual y generar contenido automatizado optimizado con inteligencia artificial.',
    category: 'web',
    tech: ['React', 'Node.js', 'Express', 'TailwindCSS'],
    image: '/assets/images/contentlab.png',
    githubUrl: 'https://github.com/hxtxrchq/Content_Lab',
    version: '2.1.0'
  },
  {
    title: 'PixelBros Web Agency + Intranet',
    desc: 'Sitio corporativo y sistema intranet para la agencia digital PixelBros. Permite centralizar la gestión de clientes, proyectos y flujos de trabajo internos con panel administrativo avanzado.',
    category: 'web',
    tech: ['React', 'Node.js', 'Express', 'PostgreSQL', 'TailwindCSS'],
    image: '/assets/images/pixelbros.png',
    demoUrl: 'https://www.pixelbros.pe/',
    githubUrl: 'https://github.com/hxtxrchq/PixelBros',
    version: '2.0.4'
  },
  {
    title: 'Versyo Store - E-commerce',
    desc: 'Plataforma web donde los usuarios podrán comprar productos y hacer seguimiento de sus pedidos. A la vez, los usuarios que son parte de la propia empresa podrán tener la posibilidad de editar productos del catálogo, editar pedidos, entre otras funciones.',
    category: 'web',
    tech: ['React', 'TypeScript', 'PostgreSQL'],
    image: '/assets/images/Versyo logo .png',
    demoUrl: 'https://versyo.chiqo.site/',
    githubUrl: 'https://github.com/hxtxrchq/backend-versyo',
    version: '1.0.5'
  },
  {
    title: 'TrendSpace',
    desc: 'Plataforma de comercio electrónico colaborativo donde los usuarios no solo compran, sino también votan, proponen y apoyan diseños de moda únicos. La producción se activa solo cuando una prenda alcanza una meta mínima de interés.',
    category: 'web',
    tech: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
    image: '/assets/images/trendSpace-Web.png',
    demoUrl: 'https://trendspace.hubstem.org/',
    githubUrl: 'https://github.com/hxtxrchq/TrendSpacev1',
    version: '1.0.0'
  },
  {
    title: 'Visor 3D web - Proyecto Dormitorio Principal',
    desc: 'Visor 3D en línea para presentar un modelo arquitectónico desarrollado en SketchUp. Carga archivos con extensión .glb/.gltf y permite visualizar el render directamente en el navegador de forma práctica en cualquier dispositivo.',
    category: 'web',
    tech: ['React', 'JavaScript', 'WebGL'],
    image: '/assets/images/visor-kath3d.png',
    demoUrl: 'https://kath-3d.chiqo.site/',
    githubUrl: 'https://github.com/hxtxrchq/3d-render-kath',
    version: '1.0.0'
  },
  {
    title: 'ECEL Ingeniería & Construcción',
    desc: 'En ECEL Ingeniería y Construcción contamos con 9 años de experiencia desarrollando soluciones en construcción, supervisión y saneamiento físico-legal inmobiliario, con enfoque en calidad, cumplimiento, seguridad y respaldo técnico en cada proyecto.',
    category: 'web',
    tech: ['React', 'TypeScript', 'TailwindCSS'],
    image: '/assets/images/ecel-peru.png',
    demoUrl: 'https://www.ecelperu.org/',
    githubUrl: 'https://github.com/hxtxrchq/ECEL',
    version: '1.5.0'
  },
  {
    title: 'CyM Centurión & Mendoza',
    desc: 'Supervisión de obras de viviendas, edificios residenciales, locales comerciales e industriales, velando por el cumplimiento del diseño, la calidad constructiva, los plazos establecidos y la seguridad en obra.',
    category: 'web',
    tech: ['React', 'TypeScript', 'TailwindCSS'],
    image: '/assets/images/cym.png',
    demoUrl: 'https://www.ceymeperu.org/',
    githubUrl: 'https://github.com/hxtxrchq/CyM',
    version: '1.2.0'
  },
  {
    title: 'Portafolio Erika Bardales',
    desc: 'Un portafolio profesional para Erika Bardales donde explica detalladamente su proceso estratégico de marketing y ventas, la creación de sistemas base comerciales, su portafolio de proyectos y los servicios especializados que ofrece.',
    category: 'web',
    tech: ['React', 'TypeScript', 'TailwindCSS'],
    image: '/assets/images/erika-bardales.png',
    demoUrl: 'https://www.erikabardales.com/',
    githubUrl: 'https://github.com/hxtxrchq/portafolioErika1',
    version: '1.1.0'
  },
  {
    title: 'PayReminder App',
    desc: 'Aplicación móvil para la gestión de deudas personales, permite crear deudas únicas o recurrentes, programar recordatorios, visualizar un calendario con estados de pago, registrar pagos completos o parciales, organizar por categorías y métodos de pago, calcular intereses opcionales y generar un resumen mensual automático.',
    category: 'android',
    tech: ['Dart 3', 'Flutter 3', 'Drift (SQLite)'],
    image: '/assets/images/LOGO_SIN_FONDO.png',
    demoUrl: 'https://github.com/hxtxrchq/payreminder/releases/tag/App',
    githubUrl: 'https://github.com/hxtxrchq/payreminder/tree/App',
    version: '1.8.0'
  },
  {
    title: 'Panel de riego automático - Flowerpot IoT',
    desc: 'Página web sencilla que se conecta a un dispositivo ESP32 preconfigurado para el riego automático de una maceta. Monitorea la humedad del suelo y determina cuándo la planta necesita agua.',
    category: 'web',
    tech: ['HTML', 'ESP32 / IoT'],
    image: '/assets/images/repo-iot.png',
    demoUrl: 'https://hxtxrchq.github.io/repo-flowerpot-iot/',
    githubUrl: 'https://github.com/hxtxrchq/repo-flowerpot-iot',
    version: '0.9.0'
  },
  {
    title: 'MiniMarketGG',
    desc: 'Sistema de ventas y control de inventario de escritorio para un minimarket, permitiendo login de usuarios y configuración de permisos, venta de productos, control de inventario de productos, pedidos, categorías. Además, historial de ventas e impresión de boletas.',
    category: 'desktop',
    tech: ['Java', 'MySQL'],
    image: '/assets/images/MiniMarketGG.png',
    githubUrl: 'https://github.com/hxtxrchq/MiniMarketGG',
    version: '2.1.2'
  },
  {
    title: 'Tienda virtual - Máxima Peruana',
    desc: 'Tienda online especializada en soluciones de seguridad electrónica y redes. Cuenta con catálogo de productos de CCTV, alarmas contra incendios y robos, control de accesos y asistencia, fibra óptica y más.',
    category: 'web',
    tech: ['WordPress', 'Elementor'],
    image: '/assets/images/maxima-peruana.png',
    demoUrl: 'https://tienda.maximaperuana.pe/',
    version: '1.0.0'
  },
  {
    title: 'Plataforma Web - HG Ingepro',
    desc: 'Sitio corporativo para empresa de soluciones en energía y climatización. Se priorizó claridad de servicios, CTAs de cotización y performance en dispositivos móviles.',
    category: 'web',
    tech: ['WordPress', 'Elementor'],
    image: '/assets/images/HG IngePro.png',
    demoUrl: 'https://hgingeproperu.com/',
    version: '1.0.0'
  },
  {
    title: 'Web corporativa - Xperto Automotriz',
    desc: 'Sitio web corporativo de Xperto Automotriz, taller mecánico en Trujillo orientado al mantenimiento preventivo y correctivo de vehículos. La web presenta los principales servicios y tienda.',
    category: 'web',
    tech: ['WordPress', 'Elementor'],
    image: '/assets/images/xperto-automotriz.png',
    demoUrl: 'https://xpertoautomotriz.com/',
    version: '1.0.0'
  },
  {
    title: 'Wiki de personajes - Final Space',
    desc: 'Aplicación tipo wiki para consultar información de los personajes de la serie Final Space. Consume una API externa para listar los personajes, mostrar sus imágenes y detalles.',
    category: 'web',
    tech: ['TypeScript', 'JavaScript', 'API REST'],
    image: '/assets/images/logo.jpg',
    demoUrl: 'https://finalspace-characters.chiqo.site/',
    githubUrl: 'https://github.com/hxtxrchq/-FinalSpace-characters',
    version: '1.0.0'
  }
];

const ProjectDescription: React.FC<{ desc: string }> = ({ desc }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 120;
  const isLong = desc.length > maxLength;

  return (
    <div>
      <p style={{ 
        color: 'var(--text-secondary)', 
        fontSize: '0.85rem', 
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
            fontSize: '0.8rem',
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

/* Isolated typewriter effect for maximum performance */
const TypewriterPrompt: React.FC = () => {
  const [typewriterText, setTypewriterText] = useState('');
  const words = ['Ingeniero de Computación y Sistemas', 'Desarrollador Full Stack', 'Creador de Soluciones Digitales'];
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

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

  return (
    <span className="typewriter-cursor" style={{ color: '#fff', paddingRight: '4px' }}>
      {typewriterText}
    </span>
  );
};

/* Isolated statistics loading animation component to prevent page-wide re-renders */
const BentoStats: React.FC = () => {
  const [stats, setStats] = useState({ exp: 0, techs: 0, certs: 0 });

  useEffect(() => {
    const duration = 1000;
    const steps = 30;
    const stepTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      setStats({
        exp: Math.min(2, Math.floor((2 / steps) * step)),
        techs: Math.min(18, Math.floor((18 / steps) * step)),
        certs: Math.min(6, Math.floor((6 / steps) * step))
      });
      if (step >= steps) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="stats-container">
      <div className="stat-item">
        <span className="stat-num">+{stats.exp}</span>
        <span className="stat-lbl">Años de Trayectoria</span>
      </div>
      <div className="stat-item">
        <span className="stat-num">+{stats.techs}</span>
        <span className="stat-lbl">Tecnologías Dominadas</span>
      </div>
      <div className="stat-item">
        <span className="stat-num">+{stats.certs}</span>
        <span className="stat-lbl">Certificaciones</span>
      </div>
    </div>
  );
};

const CertificationCard: React.FC<{ provider: string; title: string; description: string }> = ({ provider, title, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 150;
  const isLong = description.length > maxLength;

  return (
    <div className="glass" style={{ padding: '16px', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
      <Award size={18} style={{ color: 'var(--accent-color)', flexShrink: 0, marginTop: '2px' }} />
      <div style={{ width: '100%' }}>
        <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontFamily: 'var(--font-code)', fontWeight: 600 }}>{provider}</span>
        <h4 style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--primary-color)', marginBottom: '6px' }}>{title}</h4>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.75rem', lineHeight: '1.5', margin: 0 }}>
          {isExpanded || !isLong ? description : `${description.substring(0, maxLength)}...`}
        </p>
        {isLong && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--accent-color)',
              cursor: 'pointer',
              padding: '6px 0 0 0',
              fontSize: '0.7rem',
              fontWeight: 600,
              fontFamily: 'var(--font-main)',
              display: 'inline-flex',
              alignItems: 'center'
            }}
          >
            {isExpanded ? '← Ver menos' : 'Ver más →'}
          </button>
        )}
      </div>
    </div>
  );
};

type ColorTheme = 'cyan' | 'purple' | 'emerald' | 'amber';

export const VisualMode: React.FC = () => {
  const [projectFilter, setProjectFilter] = useState<'all' | 'web' | 'desktop' | 'android' | 'ai'>('all');
  const [selectedSkillCategory, setSelectedSkillCategory] = useState<'languages' | 'frontend' | 'backend' | 'databases' | 'tools' | 'methodologies' | 'soft'>('languages');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(6);
  const [accentColor, setAccentColor] = useState<ColorTheme>('cyan');

  useEffect(() => {
    setVisibleCount(6);
  }, [projectFilter]);

  // Inject CSS variables dynamically when accentColor changes
  useEffect(() => {
    const root = document.documentElement;
    if (accentColor === 'cyan') {
      root.style.setProperty('--accent-color', '#00f2fe');
      root.style.setProperty('--accent-blue', '#0ea5e9');
      root.style.setProperty('--accent-gradient', 'linear-gradient(135deg, #00f2fe 0%, #0ea5e9 100%)');
      root.style.setProperty('--accent-light', 'rgba(0, 242, 254, 0.08)');
      root.style.setProperty('--border-active', 'rgba(0, 242, 254, 0.25)');
    } else if (accentColor === 'purple') {
      root.style.setProperty('--accent-color', '#c084fc');
      root.style.setProperty('--accent-blue', '#a855f7');
      root.style.setProperty('--accent-gradient', 'linear-gradient(135deg, #c084fc 0%, #a855f7 100%)');
      root.style.setProperty('--accent-light', 'rgba(168, 85, 247, 0.08)');
      root.style.setProperty('--border-active', 'rgba(168, 85, 247, 0.25)');
    } else if (accentColor === 'emerald') {
      root.style.setProperty('--accent-color', '#34d399');
      root.style.setProperty('--accent-blue', '#10b981');
      root.style.setProperty('--accent-gradient', 'linear-gradient(135deg, #34d399 0%, #10b981 100%)');
      root.style.setProperty('--accent-light', 'rgba(16, 185, 129, 0.08)');
      root.style.setProperty('--border-active', 'rgba(16, 185, 129, 0.25)');
    } else if (accentColor === 'amber') {
      root.style.setProperty('--accent-color', '#fbbf24');
      root.style.setProperty('--accent-blue', '#f59e0b');
      root.style.setProperty('--accent-gradient', 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)');
      root.style.setProperty('--accent-light', 'rgba(245, 158, 11, 0.08)');
      root.style.setProperty('--border-active', 'rgba(245, 158, 11, 0.25)');
    }
  }, [accentColor]);

  const filteredProjects = projectsData.filter(
    (p) => projectFilter === 'all' || p.category === projectFilter
  );

  const AccentSelector: React.FC = () => {
    const bgMap = { cyan: '#00f2fe', purple: '#a855f7', emerald: '#10b981', amber: '#f59e0b' };
    return (
      <div style={{ display: 'flex', gap: '6px', alignItems: 'center', background: 'rgba(255,255,255,0.03)', padding: '5px 10px', borderRadius: '20px', border: '1px solid var(--border-subtle)' }}>
        <span style={{ fontSize: '0.62rem', color: 'var(--text-muted)', fontFamily: 'var(--font-code)', marginRight: '4px' }}>TEMA</span>
        {(['cyan', 'purple', 'emerald', 'amber'] as const).map((color) => (
          <button
            key={color}
            onClick={() => setAccentColor(color)}
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              background: bgMap[color],
              border: accentColor === color ? '2px solid #fff' : 'none',
              cursor: 'pointer',
              boxShadow: accentColor === color ? `0 0 8px ${bgMap[color]}` : 'none',
              padding: 0,
              transition: 'transform 0.2s'
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.2)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            title={`Acento ${color}`}
          />
        ))}
      </div>
    );
  };

  return (
    <div style={{ width: '100%' }}>
      
      {/* 1. Navbar */}
      <header className="header-container">
        <a href="#home" className="logo-link">
          <img
            src="/assets/images/logo_signature.png"
            alt="Alonso Paredes Logo"
            className="logo-sig-img"
          />
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-code)', fontWeight: 600 }}>&lt;ALONSO_PAREDES /&gt;</span>
        </a>

        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <AccentSelector />

          <button className="hamburger-btn" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu size={24} />
          </button>

          <nav className="nav-links">
            <a href="#home">Inicio</a>
            <a href="#skills">Habilidades</a>
            <a href="#projects">Proyectos</a>
            <a href="#experience">Trayectoria</a>
            <a href="#certifications">Certificaciones</a>
            <a href="#contact">Contacto</a>
          </nav>
        </div>
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

      {/* Main Container */}
      <main id="home">
        
        {/* Bento Grid Header / Hero */}
        <div className="bento-grid">
          
          {/* Card 1: Profile & Professional Links (Col span 2) */}
          <div className="bento-card col-span-2" style={{ flexDirection: 'row', gap: '24px', flexWrap: 'wrap', alignItems: 'center' }}>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap', flex: 1 }}>
              <div style={{ width: '90px', height: '90px', borderRadius: '16px', overflow: 'hidden', border: '2px solid var(--border-active)', boxShadow: '0 0 20px rgba(0, 242, 254, 0.1)', flexShrink: 0, transition: 'border-color 0.3s ease' }}>
                <img src="/assets/images/foto.png" alt="Alonso" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div>
                <h1 style={{ fontSize: '2.1rem', fontWeight: 800, color: 'var(--primary-color)', letterSpacing: '-0.5px' }}>Alonso Paredes</h1>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-code)', marginTop: '4px' }}>Fullstack Developer &amp; Architect</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '10px', fontFamily: 'var(--font-code)', fontSize: '0.8rem', color: 'var(--accent-color)' }}>
                  <span className="status-pulse" />
                  <TypewriterPrompt />
                </div>
              </div>
            </div>

            {/* Prominent Recruitment and Social Buttons Card */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', minWidth: '160px', flexShrink: 0 }}>
              <a href="/assets/images/CV_ALONSO_PAREDES.pdf" target="_blank" rel="noopener noreferrer" className="btn-cyber" style={{ justifyContent: 'center' }}>
                <FileText size={14} /> CV Actualizado
              </a>
              <a href="https://www.linkedin.com/in/carlos-alonso-paredes-quiroz-84b94038b/" target="_blank" rel="noopener noreferrer" className="btn-cyber-secondary" style={{ justifyContent: 'center' }}>
                <LinkedinIcon size={14} /> LinkedIn
              </a>
              <a href="https://github.com/hxtxrchq" target="_blank" rel="noopener noreferrer" className="btn-cyber-secondary" style={{ justifyContent: 'center' }}>
                <GithubIcon size={14} /> GitHub
              </a>
              <a href="https://wa.me/51914754513" target="_blank" rel="noopener noreferrer" className="btn-cyber-secondary" style={{ justifyContent: 'center', color: 'var(--accent-color)', borderColor: 'var(--border-active)' }}>
                <MessageSquare size={14} /> WhatsApp
              </a>
            </div>
          </div>

          {/* Card 2: Interactive Console Code Mockup (Col span 1) */}
          <div className="bento-card">
            <div className="code-console" style={{ width: '100%' }}>
              <div className="console-header">
                <div className="console-dot" style={{ background: '#ef4444' }} />
                <div className="console-dot" style={{ background: '#f59e0b' }} />
                <div className="console-dot" style={{ background: '#10b981' }} />
                <span style={{ marginLeft: '8px', fontSize: '0.65rem', color: 'var(--text-muted)' }}>developer.json</span>
              </div>
              <pre style={{ margin: 0, overflowX: 'auto', fontFamily: 'var(--font-code)', fontSize: '0.72rem', color: '#94a3b8' }}>
                <code>
                  &#123;<br />
                  &nbsp;&nbsp;name: <span style={{ color: '#10b981' }}>"Alonso"</span>,<br />
                  &nbsp;&nbsp;role: <span style={{ color: '#10b981' }}>"Fullstack"</span>,<br />
                  &nbsp;&nbsp;engine: <span style={{ color: 'var(--accent-color)' }}>"V8/React"</span>,<br />
                  &nbsp;&nbsp;status: <span style={{ color: '#10b981' }}>"active"</span><br />
                  &#125;
                </code>
              </pre>
            </div>
          </div>

          {/* Card 3: Metrics & Stats (Col span 3) - NOW ISOLATED */}
          <div className="bento-card col-span-3">
            <BentoStats />
          </div>

        </div>

        {/* 3. Skills Section */}
        <section id="skills">
          <h2 className="section-title">
            <Cpu size={24} style={{ color: 'var(--accent-color)' }} /> Habilidades &amp; Competencias
          </h2>

          <div className="glass" style={{ padding: '24px' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
              {[
                { id: 'languages', label: 'Lenguajes de Programación' },
                { id: 'frontend', label: 'Desarrollo Frontend' },
                { id: 'backend', label: 'Backend & Arquitectura' },
                { id: 'databases', label: 'Bases de Datos' },
                { id: 'tools', label: 'Herramientas & Diseño' },
                { id: 'methodologies', label: 'Metodologías & TI' },
                { id: 'soft', label: 'Habilidades Blandas' }
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedSkillCategory(cat.id as any)}
                  style={{
                    background: selectedSkillCategory === cat.id ? 'var(--accent-light)' : 'rgba(255, 255, 255, 0.01)',
                    border: `1px solid ${selectedSkillCategory === cat.id ? 'var(--accent-color)' : 'var(--border-subtle)'}`,
                    color: selectedSkillCategory === cat.id ? 'var(--accent-color)' : 'var(--text-secondary)',
                    padding: '8px 14px',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-main)',
                    fontWeight: 600,
                    fontSize: '0.8rem',
                    transition: 'var(--transition-smooth)'
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>

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
                  { name: 'Power BI', desc: 'Análisis de datos empresariales, modelado e informes interactivos de negocio.' }
                ],
                methodologies: [
                  { name: 'DevOps & Scrum', desc: 'Gestión de despliegues y automatización ágil en ciclos de desarrollo.' },
                  { name: 'CRISP-DM & RUP', desc: 'Modelos estructurados para procesos de minería de datos y ciclo de vida de desarrollo de software.' }
                ],
                soft: [
                  { name: 'Liderazgo & Gestión de Equipos', desc: 'Capacidad para guiar, motivar y organizar equipos de trabajo multidisciplinarios.' },
                  { name: 'Trabajo en Equipo & Comunicación', desc: 'Colaboración activa y comunicación interpersonal asertiva y fluida.' },
                  { name: 'Pensamiento Crítico & Analítico', desc: 'Resolución metódica de problemas complejos con enfoque estructurado.' }
                ]
              };

              const currentCategory = selectedSkillCategory as keyof typeof skillsData;

              return (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '12px', marginTop: '15px' }}>
                  {skillsData[currentCategory].map((s) => (
                    <div key={s.name} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', background: 'rgba(255, 255, 255, 0.01)', padding: '14px', borderRadius: '10px', border: '1px solid var(--border-subtle)' }}>
                      <div style={{ background: 'var(--accent-light)', color: 'var(--accent-color)', padding: '5px', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Code size={14} />
                      </div>
                      <div>
                        <h4 style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--primary-color)', marginBottom: '2px' }}>{s.name}</h4>
                        <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              );
            })()}
          </div>
        </section>

        {/* 4. Projects Section */}
        <section id="projects">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', marginBottom: '30px' }}>
            <h2 className="section-title" style={{ margin: 0 }}>
              <Code size={24} style={{ color: 'var(--accent-color)' }} /> Despliegues de Módulos (Proyectos)
            </h2>

            {/* Filters */}
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
              {(['all', 'web', 'desktop', 'android', 'ai'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setProjectFilter(cat)}
                  style={{
                    background: projectFilter === cat ? 'var(--accent-color)' : 'rgba(255, 255, 255, 0.01)',
                    color: projectFilter === cat ? '#050507' : 'var(--text-secondary)',
                    border: `1px solid ${projectFilter === cat ? 'var(--accent-color)' : 'var(--border-subtle)'}`,
                    padding: '6px 12px',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-main)',
                    fontWeight: 600,
                    fontSize: '0.72rem',
                    textTransform: 'uppercase',
                    transition: 'var(--transition-smooth)'
                  }}
                >
                  {cat === 'all' ? 'Todos' : cat}
                </button>
              ))}
            </div>
          </div>

          <div className="projects-grid">
            {filteredProjects.slice(0, visibleCount).map((p, idx) => (
              <div key={idx} className="glass-card" style={{ borderTop: '2px solid var(--accent-blue)' }}>
                
                {/* Deployment Card Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 14px', background: 'rgba(0,0,0,0.15)', borderBottom: '1px solid var(--border-subtle)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span className="status-pulse" />
                    <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-code)', fontWeight: 600 }}>SYS_ACTIVE [v{p.version}]</span>
                  </div>
                  <span style={{ fontSize: '0.65rem', color: 'var(--accent-color)', fontFamily: 'var(--font-code)', textTransform: 'uppercase' }}>{p.category}</span>
                </div>

                {/* Image Banner */}
                <div style={{ width: '100%', height: '150px', overflow: 'hidden', position: 'relative', background: '#0a0a0f' }}>
                  <img
                    src={p.image}
                    alt={p.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>

                {/* Text details & links */}
                <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                  <div style={{ marginBottom: '14px' }}>
                    <h3 style={{ fontSize: '0.98rem', fontWeight: 700, marginBottom: '6px', color: '#fff' }}>
                      {p.title}
                    </h3>
                    <ProjectDescription desc={p.desc} />
                    
                    {/* Tech stack badges */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginTop: '10px' }}>
                      {p.tech.map((t, tIdx) => (
                        <span key={tIdx} className="tech-badge">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '8px', borderTop: '1px solid var(--border-subtle)', paddingTop: '10px', flexWrap: 'wrap' }}>
                    {p.demoUrl && (
                      <a href={p.demoUrl} target="_blank" rel="noopener noreferrer" className="btn-cyber" style={{ flex: 1, padding: '7px 8px', fontSize: '0.72rem', justifyContent: 'center', minWidth: '100px' }}>
                        <ExternalLink size={10} /> Live Demo
                      </a>
                    )}
                    {p.videoUrl && (
                      <a href={p.videoUrl} target="_blank" rel="noopener noreferrer" className="btn-cyber" style={{ flex: 1, padding: '7px 8px', fontSize: '0.72rem', justifyContent: 'center', minWidth: '100px' }}>
                        <Play size={10} /> Ver Video
                      </a>
                    )}
                    {p.githubUrl && (
                      <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-cyber-secondary" style={{ flex: 1, padding: '7px 8px', fontSize: '0.72rem', justifyContent: 'center', minWidth: '100px' }}>
                        <GithubIcon size={10} /> Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length > 6 && (
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '28px' }}>
              <button
                onClick={() => setVisibleCount(prev => prev === 6 ? filteredProjects.length : 6)}
                className="btn-cyber-secondary"
                style={{ padding: '10px 20px', fontSize: '0.8rem' }}
              >
                {visibleCount === 6 ? 'Ver más despliegues' : 'Ver menos'}
              </button>
            </div>
          )}
        </section>

        {/* 5. Experience Timeline (Git Commit Log style) */}
        <section id="experience">
          <h2 className="section-title">
            <GitBranch size={22} style={{ color: 'var(--accent-color)' }} /> Historial de Cambios (Git Log)
          </h2>

          <div className="git-log-container">
            {[
              {
                hash: 'a7c29e1',
                date: 'Febrero 2026 - Julio 2026',
                role: 'Desarrollador Web',
                company: 'PixelBros - Trujillo, Perú',
                details: 'Desarrollo y mantenimiento de sitios y aplicaciones web responsivas utilizando React, TypeScript, ExpressJS y frameworks modernos. Enfoque en lógica de negocio robusta, APIs y bases de datos.',
                category: 'feat'
              },
              {
                hash: 'b39d102',
                date: 'Mayo 2025 - Septiembre 2025',
                role: 'Desarrollador de Diseño Web',
                company: 'Agencia DN - Software & Marketing',
                details: 'Desarrollo y diseño de páginas web responsivas y totalmente funcionales, optimizadas para brindar una experiencia de usuario fluida.',
                category: 'feat'
              },
              {
                hash: 'e81f5ac',
                date: '2021 - 2025',
                role: 'Ingeniería de Computación y Sistemas',
                company: 'Universidad Privada Antenor Orrego (UPAO)',
                details: 'Décimo superior. Formación completa con sólidas bases en algoritmos, bases de datos complejas, arquitectura y gestión ágil.',
                category: 'docs'
              }
            ].map((exp, idx) => (
              <div key={idx} className="git-commit-node">
                <div className="git-commit-dot" />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                    <span className="git-commit-hash">{exp.hash}</span>
                    <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'var(--font-code)' }}>{exp.date}</span>
                  </div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--primary-color)' }}>
                    <span style={{ color: 'var(--accent-color)', fontFamily: 'var(--font-code)', marginRight: '6px' }}>{exp.category}:</span>
                    {exp.role}
                  </h3>
                  <h4 style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 500 }}>{exp.company}</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', lineHeight: '1.5', background: 'rgba(0,0,0,0.1)', padding: '12px', borderRadius: '8px', border: '1px solid var(--border-subtle)', marginTop: '4px' }}>
                    {exp.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. Certifications Section */}
        <section id="certifications">
          <h2 className="section-title">
            <Award size={22} style={{ color: 'var(--accent-color)' }} /> Certificaciones & Reconocimientos
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '16px' }}>
            <CertificationCard 
              provider="FREECODECAMP" 
              title="Scientific Computing with Python"
              description="Certificación práctica basada en proyectos: estructuras de datos, algoritmos y cómputo numérico en Python (por ejemplo, construir calculadoras, convertidores de unidades, o resolver problemas algorítmicos), reforzando lógica de programación y buenas prácticas."
            />
            <CertificationCard 
              provider="DATACAMP" 
              title="Intermediate Java"
              description="Profundiza en programación orientada a objetos: herencia, interfaces, manejo de excepciones, colecciones (listas, sets, maps) y buenas prácticas de diseño en Java. Es el paso natural después de lo básico, enfocado en escribir código más robusto y mantenible."
            />
            <CertificationCard 
              provider="TECSUP | INNOVALAB" 
              title="Programa Integral de INNOVALAB"
              description="Formación en innovación y emprendimiento: trabajo colaborativo en equipos multidisciplinarios para idear y validar soluciones de negocio con impacto social y tecnológico, aplicando metodologías de design thinking y validación de ideas."
            />
            <CertificationCard 
              provider="DATACAMP" 
              title="Intermediate SQL"
              description="Cubre consultas más avanzadas: subconsultas, funciones de ventana, joins complejos y funciones agregadas, orientado a extraer y transformar datos de bases relacionales para análisis."
            />
            <CertificationCard 
              provider="UPAO 2025" 
              title="Ponencia — Semana Tecnológica de Ingeniería de Sistemas e IA"
              description="Presentación de tu propio trabajo: un modelo híbrido que combina un Autoencoder (red neuronal que aprende a reconstruir transacciones normales; cuando no puede reconstruir bien una transacción, es señal de anomalía) con Random Forest (modelo de clasificación basado en múltiples árboles de decisión que refina esa señal para decidir si es fraude o no). La sinergia: el autoencoder detecta anomalías sin necesitar ejemplos etiquetados de fraude, y el Random Forest mejora la precisión final clasificando esas anomalías con mayor certeza."
            />
            <CertificationCard 
              provider="DATACAMP" 
              title="Optimizing Code in Java"
              description="Curso avanzado sobre rendimiento en Java: análisis de complejidad de tiempo y espacio, comparación de estructuras de datos (listas, sets, maps) según el caso de uso, programación concurrente con multi-threading y operaciones asíncronas, y patrones de caching e inicialización para mejorar el desempeño de aplicaciones empresariales."
            />
            <CertificationCard 
              provider="DATACAMP" 
              title="Software Development with GitHub Copilot"
              description="Enseña a usar Copilot como asistente de desarrollo dentro de VS Code: autocompletado, ediciones en línea, modos de chat, uso de comandos slash y smart actions, cómo dar contexto (chat variables, participantes) para mejorar las sugerencias, personalizar su comportamiento con instrucciones propias, y aplicarlo para generar tests, detectar vulnerabilidades y optimizar código."
            />
          </div>
        </section>

        {/* 7. Contact Section */}
        <section id="contact">
          <h2 className="section-title">
            <Mail size={22} style={{ color: 'var(--accent-color)' }} /> Enlace de Terminal &amp; Contacto
          </h2>

          <div className="contact-layout">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <h3 style={{ fontSize: '1.1rem', color: 'var(--primary-color)' }}>¡Trabajemos juntos!</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '0.88rem' }}>
                Estoy disponible para nuevas oportunidades laborales y desarrollo de proyectos innovadores. Cuéntame sobre tus necesidades tecnológicas y busquemos la mejor solución.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '6px' }}>
                <a href="tel:+51914754513" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.85rem' }}>
                  <Phone size={16} style={{ color: 'var(--accent-color)' }} />
                  <span>+51 914 754 513</span>
                </a>
                <a href="mailto:calonsoparedes1@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.85rem' }}>
                  <Mail size={16} style={{ color: 'var(--accent-color)' }} />
                  <span>calonsoparedes1@gmail.com</span>
                </a>
                <a href="https://wa.me/51914754513" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.85rem' }}>
                  <MessageSquare size={16} style={{ color: 'var(--accent-color)' }} />
                  <span>Enviar WhatsApp</span>
                </a>
              </div>
            </div>

            <form action="https://formspree.io/f/mrbkowev" method="POST" className="glass" style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '4px', fontFamily: 'var(--font-code)', fontWeight: 600 }}>NOMBRE</label>
                <input type="text" name="name" required style={{ width: '100%', padding: '10px', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--border-subtle)', borderRadius: '6px', color: 'var(--text-primary)', outline: 'none' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '4px', fontFamily: 'var(--font-code)', fontWeight: 600 }}>EMAIL</label>
                <input type="email" name="email" required style={{ width: '100%', padding: '10px', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--border-subtle)', borderRadius: '6px', color: 'var(--text-primary)', outline: 'none' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '4px', fontFamily: 'var(--font-code)', fontWeight: 600 }}>MENSAJE</label>
                <textarea name="message" required rows={3} style={{ width: '100%', padding: '10px', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--border-subtle)', borderRadius: '6px', color: 'var(--text-primary)', outline: 'none', resize: 'vertical' }} />
              </div>
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://hxtxrchq.github.io/Portfolio/gracias.html" />

              <button type="submit" className="btn-cyber" style={{ justifyContent: 'center' }}>
                Enviar Mensaje
              </button>
            </form>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid var(--border-subtle)', padding: '30px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px', maxWidth: '1140px', margin: '0 auto' }}>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem' }}>&copy; 2026 Chiqocorp. Todos los derechos reservados.</p>
        <div style={{ display: 'flex', gap: '16px' }}>
          <a href="https://github.com/hxtxrchq" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)' }}><GithubIcon size={18} /></a>
          <a href="https://www.linkedin.com/in/carlos-alonso-paredes-quiroz-84b94038b/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)' }}><LinkedinIcon size={18} /></a>
        </div>
      </footer>

    </div>
  );
};

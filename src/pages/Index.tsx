
import React, { useState, useEffect } from 'react';

const Index = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeSkillCategory, setActiveSkillCategory] = useState('frontend');
  const [menuOpen, setMenuOpen] = useState(false);

  // Glitch effect for text elements
  useEffect(() => {
    const glitchElements = document.querySelectorAll('.glitch');
    
    glitchElements.forEach(element => {
      const text = element.textContent;
      if (text) {
        element.setAttribute('data-text', text);
      }
    });
  }, []);

  // Initialize portfolio filtering
  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
  };

  const handleCategoryClick = (category: string) => {
    setActiveSkillCategory(category);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Sample project data
  const projects = [
    { 
      id: 1, 
      title: 'E-Commerce Platform', 
      category: 'fullstack', 
      image: 'https://i.imgur.com/JzaVGfB.jpg',
      description: 'Full-stack e-commerce solution with React, Node.js and MongoDB'
    },
    { 
      id: 2, 
      title: 'Weather Dashboard', 
      category: 'frontend', 
      image: 'https://i.imgur.com/8Cb9NvF.jpg',
      description: 'Interactive weather app using React and OpenWeather API'
    },
    { 
      id: 3, 
      title: 'Task Management API', 
      category: 'backend', 
      image: 'https://i.imgur.com/K0bG1bZ.jpg',
      description: 'RESTful API for task management built with Express and MongoDB'
    },
    { 
      id: 4, 
      title: 'Portfolio Template', 
      category: 'frontend', 
      image: 'https://i.imgur.com/UWUaAHr.jpg',
      description: 'Customizable portfolio template with HTML, CSS and JavaScript'
    },
    { 
      id: 5, 
      title: 'Chat Application', 
      category: 'fullstack', 
      image: 'https://i.imgur.com/xN0nz6H.jpg',
      description: 'Real-time chat application with Socket.io and React'
    },
    { 
      id: 6, 
      title: 'Inventory System', 
      category: 'backend', 
      image: 'https://i.imgur.com/jy8g8AC.jpg',
      description: 'Inventory management system with Node.js and PostgreSQL'
    }
  ];

  // Filter projects based on active filter
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  // Skills data
  const skills = {
    frontend: [
      { name: 'HTML5', level: 90 },
      { name: 'CSS3', level: 85 },
      { name: 'JavaScript', level: 90 },
      { name: 'React', level: 85 },
      { name: 'Vue.js', level: 75 },
      { name: 'Responsive Design', level: 90 }
    ],
    backend: [
      { name: 'Node.js', level: 80 },
      { name: 'Express', level: 85 },
      { name: 'MongoDB', level: 75 },
      { name: 'SQL', level: 70 },
      { name: 'RESTful APIs', level: 85 },
      { name: 'GraphQL', level: 65 }
    ],
    tools: [
      { name: 'Git & GitHub', level: 85 },
      { name: 'Webpack', level: 75 },
      { name: 'Docker', level: 70 },
      { name: 'Jest', level: 80 },
      { name: 'VS Code', level: 90 },
      { name: 'Figma', level: 70 }
    ]
  };

  return (
    <div className="cyberpunk-page">
      {/* Scan line effect */}
      <div className="scanline"></div>
      
      {/* Header section */}
      <header className="header">
        <nav className="header__nav container">
          <a href="#hero" className="logo">DEV_NAME</a>
          
          <button className="menu-toggle" onClick={toggleMenu}>
            ≡
          </button>
          
          <ul className={`nav__list ${menuOpen ? 'active' : ''}`}>
            <li className="nav__item">
              <a href="#about" className="nav__link" onClick={() => setMenuOpen(false)}>About</a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link" onClick={() => setMenuOpen(false)}>Skills</a>
            </li>
            <li className="nav__item">
              <a href="#portfolio" className="nav__link" onClick={() => setMenuOpen(false)}>Portfolio</a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link" onClick={() => setMenuOpen(false)}>Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      
      {/* Hero section */}
      <section className="hero" id="hero">
        <div className="container">
          <div className="hero__content">
            <h1 className="hero__title glitch" data-text="John Doe">John Doe</h1>
            <h2 className="hero__subtitle mono-text">{'<'} Full Stack Developer {'>'}</h2>
            <p className="hero__description">
              Building digital experiences with code. Specializing in modern web technologies
              to create fast, responsive, and user-friendly applications.
            </p>
            <div className="hero__cta">
              <a href="#portfolio" className="btn btn-primary">View Work</a>
              <a href="#contact" className="btn">Contact Me</a>
            </div>
          </div>
        </div>
        <div className="hero__decoration"></div>
      </section>
      
      {/* About section */}
      <section className="section about" id="about">
        <div className="container">
          <h2 className="section-title glitch" data-text="About Me">About Me</h2>
          
          <div className="about__grid">
            <div className="about__image-container">
              <img src="https://i.imgur.com/JY5LVKP.jpg" alt="Developer" className="about__image" />
            </div>
            
            <div className="about__content">
              <h3 className="mono-text">{'// Personal Info'}</h3>
              <p>
                I'm a passionate web developer with over 5 years of experience in creating dynamic, 
                interactive web applications. My journey in web development started with a fascination 
                for building things that live on the internet and has evolved into a professional career 
                focused on crafting clean, efficient code.
              </p>
              <p>
                With expertise in both front-end and back-end technologies, I enjoy the process of 
                bringing ideas to life through code. I'm constantly learning and adapting to new 
                technologies to stay at the forefront of web development.
              </p>
              <div className="about__stats">
                <div className="stat">
                  <div className="stat__value">5+</div>
                  <div className="stat__label">Years Experience</div>
                </div>
                <div className="stat">
                  <div className="stat__value">50+</div>
                  <div className="stat__label">Projects Completed</div>
                </div>
                <div className="stat">
                  <div className="stat__value">20+</div>
                  <div className="stat__label">Happy Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Skills section */}
      <section className="section skills" id="skills">
        <div className="container">
          <h2 className="section-title glitch" data-text="Tech Stack">Tech Stack</h2>
          
          <div className="skills__container">
            <div className="skills__categories">
              <div 
                className={`skills__category ${activeSkillCategory === 'frontend' ? 'active' : ''}`}
                onClick={() => handleCategoryClick('frontend')}
              >
                Frontend
              </div>
              <div 
                className={`skills__category ${activeSkillCategory === 'backend' ? 'active' : ''}`}
                onClick={() => handleCategoryClick('backend')}
              >
                Backend
              </div>
              <div 
                className={`skills__category ${activeSkillCategory === 'tools' ? 'active' : ''}`}
                onClick={() => handleCategoryClick('tools')}
              >
                Tools & Others
              </div>
            </div>
            
            <div className="skills__grid">
              {skills[activeSkillCategory as keyof typeof skills].map((skill, index) => (
                <div className="skill-card" key={index}>
                  <h3 className="skill-card__title">{skill.name}</h3>
                  <div className="skill-card__level">
                    <div 
                      className="skill-card__level-fill" 
                      style={{ width: `${skill.level}%` }}
                    >
                      <span className="skill-card__level-percentage">{skill.level}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Portfolio section */}
      <section className="section portfolio" id="portfolio">
        <div className="container">
          <h2 className="section-title glitch" data-text="Portfolio">Portfolio</h2>
          
          <div className="portfolio__filters">
            <div 
              className={`portfolio__filter ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => handleFilterClick('all')}
            >
              All
            </div>
            <div 
              className={`portfolio__filter ${activeFilter === 'frontend' ? 'active' : ''}`}
              onClick={() => handleFilterClick('frontend')}
            >
              Frontend
            </div>
            <div 
              className={`portfolio__filter ${activeFilter === 'backend' ? 'active' : ''}`}
              onClick={() => handleFilterClick('backend')}
            >
              Backend
            </div>
            <div 
              className={`portfolio__filter ${activeFilter === 'fullstack' ? 'active' : ''}`}
              onClick={() => handleFilterClick('fullstack')}
            >
              Full Stack
            </div>
          </div>
          
          <div className="portfolio__grid">
            {filteredProjects.map(project => (
              <div className="portfolio-card" key={project.id}>
                <img src={project.image} alt={project.title} className="portfolio-card__image" />
                <div className="portfolio-card__overlay">
                  <h3 className="portfolio-card__title">{project.title}</h3>
                  <div className="portfolio-card__category">{project.category}</div>
                  <p className="portfolio-card__description">{project.description}</p>
                  <a href="#" className="btn">View Project</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Footer & Contact */}
      <footer className="footer" id="contact">
        <div className="container">
          <div className="footer__grid">
            <div className="footer__info">
              <h3 className="footer__title glitch" data-text="Contact">Contact</h3>
              <div className="footer__contact-item">
                <span className="footer__contact-icon">✉</span>
                <span>john.doe@example.com</span>
              </div>
              <div className="footer__contact-item">
                <span className="footer__contact-icon">☎</span>
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="footer__contact-item">
                <span className="footer__contact-icon">⌂</span>
                <span>San Francisco, CA</span>
              </div>
              
              <div className="footer__social">
                <a href="#" className="footer__social-link">FB</a>
                <a href="#" className="footer__social-link">TW</a>
                <a href="#" className="footer__social-link">IG</a>
                <a href="#" className="footer__social-link">GH</a>
                <a href="#" className="footer__social-link">LI</a>
              </div>
            </div>
            
            <div className="footer__links-container">
              <h3 className="footer__title">Quick Links</h3>
              <ul className="footer__links">
                <li className="footer__link-item">
                  <a href="#about" className="footer__link">About</a>
                </li>
                <li className="footer__link-item">
                  <a href="#skills" className="footer__link">Skills</a>
                </li>
                <li className="footer__link-item">
                  <a href="#portfolio" className="footer__link">Portfolio</a>
                </li>
                <li className="footer__link-item">
                  <a href="#contact" className="footer__link">Contact</a>
                </li>
              </ul>
            </div>
            
            <div className="footer__form-container">
              <h3 className="footer__title">Send a Message</h3>
              <form className="footer__form">
                <input type="text" placeholder="Name" className="btn" style={{width: '100%', marginBottom: '10px'}} />
                <input type="email" placeholder="Email" className="btn" style={{width: '100%', marginBottom: '10px'}} />
                <textarea placeholder="Message" className="btn" style={{width: '100%', height: '100px', marginBottom: '10px', resize: 'none'}}></textarea>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>
          </div>
          
          <div className="footer__bottom">
            <p className="footer__copyright">
              © 2025 <span className="highlight">John Doe</span>. All Rights Reserved | Designed with <span className="highlight">❤</span>
            </p>
          </div>
        </div>
      </footer>
      
      {/* Inject JavaScript for Cyberpunk effects */}
      <script>
        {`
          document.addEventListener('DOMContentLoaded', function() {
            // Random glitch effect on hover
            const glitchElements = document.querySelectorAll('.glitch');
            
            glitchElements.forEach(element => {
              element.addEventListener('mouseover', function() {
                this.style.animationDuration = '0.1s';
                setTimeout(() => {
                  this.style.animationDuration = 'var(--glitch-duration)';
                }, 500);
              });
            });
            
            // Create multiple scanlines with different speeds
            const createScanlines = () => {
              const container = document.body;
              const scanlineCount = 3;
              
              for (let i = 0; i < scanlineCount; i++) {
                const scanline = document.createElement('div');
                scanline.className = 'scanline';
                scanline.style.animationDuration = \`\${8 + i * 4}s\`;
                scanline.style.top = \`\${20 * i}%\`;
                container.appendChild(scanline);
              }
            };
            
            createScanlines();
          });
        `}
      </script>
    </div>
  );
};

export default Index;

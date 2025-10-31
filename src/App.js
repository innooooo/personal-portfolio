import './styles/App.css'
import ProjectCard from "./components/ProjectCard"
import {useState, useEffect, useRef} from 'react'
import emailjs from '@emailjs/browser'
import { TypeAnimation } from 'react-type-animation'


function App() {
  const [projects, setProjects] = useState([
  {
    img: '/images/hccm1.png',
    title: 'Continuity Healthcare Management, LLC',
    descr: 'A US-based medical consultation platform connecting 5,000+ patients with licensed doctors—anytime, anywhere',
    metrics: [
      "10,000+ Consultations Completed",
      "98% Patient Satisfaction Rate",
      "<15min Average Response Time"
    ],
    role: 'Lead Developer',
    stack: ["React", "CSS", "HTML"],
    logo: '/icons/CONTINUITYLOGO.webp',
    link: 'https://www.continuityhccm.com/',
    type: "Client",
    isLive: true
  },
  {
    img: '/images/innsystech.png',
    title: 'InnSysTech',
    descr: 'A forward-thinking technology firm based in Kenya, dedicated to delivering cutting-edge solutions that transform businesses',
    metrics: [
      "1.2s Average Page Load Time",
      "3 Client Projects Secured via Website",
      "35% Conversion Rate (Contact/Inquiry)"
    ],
    role: 'Developer',
    stack: ["JavaScript", "Tailwind CSS", "HTML"],
    logo: '/icons/INNSYSTECHLOGO-WHITEBG.png',
    link: 'https://inn-sys-tech.vercel.app/',
    type: "Client",
    isLive: true
  },
  {
    img: '/images/nena-chatbot.jpg',
    title: 'Nena Mental Health Chatbot API',
    descr: 'Speak to your mental health companion',
    metrics: [
      "3.5 Minutes Average Session Duration",
      "<2 Second Response Time",
      "Available in English & Swahili"
    ],
    role: 'Developer',
    stack: ["Python", "HTML"],
    logo: '/icons/INNSYSTECHLOGO-WHITEBG.png',
    link: 'https://github.com/innooooo/nena-mental-health-chatbot-api',
    type: "Personal",
    isLive: false
  },
  {
    img: '/images/phones.jpg',
    title: 'Aspect-Based Sentiment Analysis AI',
    descr: 'An AI-powered web application for analyzing customer sentiments on mobile phone reviews',
    metrics: [
      "90% Manual Review Analysis Reduction",
      "5+ Major Retailers Data Sources",
      "10 Key Feature Categories"
    ],
    role: 'Lead Developer',
    stack: ["Python", "JavaScript", "CSS", "HTML"],
    logo: '/icons/INNSYSTECHLOGO-WHITEBG.png',
    link: 'https://github.com/innooooo/absanalysis',
    type: "Personal",
    isLive: false
  },
  {
    img: '/images/dictionary.jpg',
    title: 'My Dictionary',
    descr: 'Simple Java-based dictionary Android application',
    metrics: [
      "10,000+ Words & Definitions",
      "<1 Second Word Lookup Speed",
      "SQLite Database"
    ],
    role: 'Lead Developer',
    stack: ["Java"],
    logo: '/icons/INNSYSTECHLOGO-WHITEBG.png',
    link: 'https://github.com/innooooo/dictionarymobileapp',
    type: "Personal",
    isLive: false
  }
  ]);

  const [tools, setTools] = useState([
    "/icons/icons8-html-5.svg",
    "/icons/icons8-css3.svg",
    "/icons/icons8-javascript.svg",
    "/icons/icons8-git.svg",
    "/icons/icons8-figma.svg",
    "/icons/icons8-java.svg",
    "/icons/icons8-tailwind-css.svg",
    "/icons/icons8-python.svg",
    "/icons/icons8-react-native.svg",
    "/icons/icons8-vercel-50.png"
  ])

  const [services, setServices] = useState([
    "Frontend Development",
    "Full Stack Development",
    "Professional portfolio design",
    "Performance Optimization",
    "Animation & Motion Design",
    "Consultation & Suppport"
  ])

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [company, setCompany] = useState("")
  const [companyWebsite, setCompanyWebsite] = useState("")
  const [message, setMessage] = useState("")

  const formRef = useRef()

  const handleSubmit = (event) => {
    event.preventDefault()

    emailjs.sendForm(
      'service_0vsm4xm',        // service ID
      'template_oge4jaz',       // template ID
      formRef.current,          // form reference
      'K14qUFCZr59uaesid'       // public key
    )
    .then((result) => {
      console.log(result.text)
      alert("Thanks for reaching out! Your message has been sent.")
      setName("")
      setEmail("")
      setCompany("")
      setCompanyWebsite("")
      setMessage("")
    }, (error) => {
      console.error(error.text)
      alert("Oops! Something went wrong. Please try again later.")
    })
  }

  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Adjust based on your navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      setActiveSection(sectionId);
      setIsOpen(false); // Close mobile menu after clicking
    }
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contacts'];
      const scrollPosition = window.scrollY + 150;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Set initial active section on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  

  return (
    <div className="app">
      <div className='navbar-container'>
        <div className='hamburger' onClick={() => setIsOpen(!isOpen)}>
          ☰
        </div>

        <div className={`links ${isOpen ? 'open' : ''}`}>
          <button
            onClick={() => scrollToSection('home')}
            className={activeSection === 'home' ? 'btn primary-btn' : 'btn secondary-btn'}
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className={activeSection === 'services' ? 'btn primary-btn' : 'btn secondary-btn'}
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection('skills')}
            className={activeSection === 'skills' ? 'btn primary-btn' : 'btn secondary-btn'}
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className={activeSection === 'projects' ? 'btn primary-btn' : 'btn secondary-btn'}
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection('contacts')}
            className={activeSection === 'contacts' ? 'btn primary-btn' : 'btn secondary-btn'}
          >
            Reach out
          </button>
        </div>
      </div>

      <div id="home" className="hero-content">
        <div className="slide-in-left">
          <img className='responsive-photo' src='/images/me.JPG'/>
          <h1>Innocent Koge</h1>
        </div>

        <h2
          className="slide-in-right typing-3d"
          style={{
            color: '#00ff88',
            perspective: '1000px',
            transformStyle: 'preserve-3d',
          }}
        >
          <TypeAnimation
            sequence={[
              'Creative Frontend Developer', 2000,
              'Full Stack Developer', 2000,
              'Creative Animator', 2000,
            ]}
            speed={50}
            repeat={Infinity}
            wrapper="span"
            cursor={true}
            style={{ display: 'inline-block' }}
          />
        </h2>

        <text className="slide-in-left">
            I Build Websites That Boost the Online Presence of my Clients
        </text>

        <div className="highlights">
          <h3>Brands I've worked with</h3>
          <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"15px"}}>
            <div className="highlight1">
              <img
                style={{height:"100px",width:"100px",borderRadius:"50%"}}
                src="/icons/CONTINUITYLOGO.webp"
                alt="Continuity Healthcare Management company logo"
              />
            </div>

            <div className="highlight2">
              <img
                style={{width:"90px",height:"auto",borderRadius:"45px"}}
                src="/icons/INNSYSTECHLOGO-BLACKBG.png"
                alt="InnSysTech company logo"
              />
            </div>
          </div>
        </div>

        <div className="slide-in-up">
          <button className="btn primary-btn" >
            <a href="https://www.linkedin.com/in/innocent-koge-80599b303/" target="_blank" rel="noopener noreferrer">
              <img
                style={{
                  cursor: 'pointer'
                }}
                src="/icons/linkedin.svg"
                alt="My LinkedIn"
              />
            </a> 
          </button>
        </div>
      </div>

      <div id="projects" style={{color: "white",background: "linear-gradient(180deg, rgba(26, 26, 46, 0.95) 0%, #1A1A2E 100%)",padding:"10px 0px"}}>
        <h1 style={{paddingLeft: "20px"}}>Projects</h1>
        <div className="projects">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>

      <div id="skills" className="skills">
        <div className="skills-track">
          {tools.map((tool)=>(
            <img src={tool} alt="Skill" className="skills-container" />
          ))}

          {tools.map((tool)=>(
            <img src={tool} alt="Skill dup" className="skills-container" />
          ))}
        </div>
      </div>

      <div id='services' style={{display:"flex",flexDirection:"column",alignItems:"center",background:"linear-gradient(180deg, rgba(26, 26, 46, 0.95) 0%, #1A1A2E 100%)"}}>
        <div className="services">
          <h1>Services</h1>
          {services.map((service)=>(
            <div className="service">
              <text>{service}</text>
            </div>
          ))}
        </div>
        <div>
          <a href="https://github.com/innooooo" target="_blank" rel="noopener noreferrer">
            <img
              className="animated-icon"
              style={{
                margin: '9px',
                cursor: 'pointer',
                filter: 'brightness(0) saturate(100%) invert(100%)',
              }}
              src="/icons/github.svg"
              alt="My GitHub"
            />
          </a>
  
          <a href="https://www.linkedin.com/theinnocent001" target="_blank" rel="noopener noreferrer">
            <img
              className="animated-icon"
              style={{
                margin: '9px',
                cursor: 'pointer',
                filter: 'brightness(0) saturate(100%) invert(100%)',
              }}
              src="/icons/linkedin.svg"
              alt="My LinkedIn"
            />
          </a>
  
          <a href="https://x.com/theinnocent001" target="_blank" rel="noopener noreferrer">
            <img
              
              style={{
                margin: '9px',
                width:'20px',
                cursor: 'pointer',
                filter: 'brightness(0) saturate(100%) invert(100%)',
              }}
              src="/icons/twitter.svg"
              alt="My Twitter"
            />
          </a>
  
          <a href="https://instagram.com/i.nn.oo" target="_blank" rel="noopener noreferrer">
            <img
              className="animated-icon"
              style={{
                margin: '9px',
                cursor: 'pointer',
                filter: 'brightness(0) saturate(100%) invert(100%)',
              }}
              src="/icons/instagram.svg"
              alt="My Instagram"
            />
          </a>
        </div>
      </div>
      
      <div id="contacts">
        <form className="contacts" ref={formRef} onSubmit={handleSubmit} >
          <label>
            Name:
            <input
              style={{ fontFamily: 'Gotham-Light', margin: '18px' }}
              type='text'
              name='name'
              placeholder='John Doe'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label>
            Email:
            <input
              style={{ fontFamily: 'Gotham-Light', margin: '18px' }}
              type='email'
              name='email'
              placeholder='johndoe@gmail.com'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            Company:
            <input
              style={{ fontFamily: 'Gotham-Light', margin: '18px' }}
              type='text'
              name='company'
              placeholder='iRob Technologies'
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </label>
          <label>
            Company website:
            <input
              style={{ fontFamily: 'Gotham-Light', margin: '18px' }}
              type='text'
              name='companyWebsite'
              placeholder='https://yoursite.co.ke'
              value={companyWebsite}
              onChange={(e) => setCompanyWebsite(e.target.value)}
            />
          </label>
          <label>
            Leave a Message:
            <textarea
              style={{ fontFamily: 'Gotham-Light', margin: '18px' }}
              name='message'
              placeholder="I'd like to collaborate on a project with you"
              value={message}
              rows={9}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </label>
          <input className='btn secondary-btn' type='submit' value='Send email' />
        </form>
      </div>
    </div>
  );
}

export default App;

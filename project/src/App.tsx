import React, { useEffect, useState } from 'react';
import { ChevronDown, Code, Globe, TrendingUp, Server, Building, Rocket, Mail, Phone, MapPin, Github, Linkedin, Twitter, Menu, X } from 'lucide-react';

function App() {
  const [currentRole, setCurrentRole] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const roles = [
    'Web Developer',
    'Digital Marketer', 
    'Backend Developer',
    'Freelancer',
    'CEO of Golden Brand',
    'Founder of CleanCodeHub'
  ];

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Web Development',
      description: 'Creating responsive, modern websites with cutting-edge technologies',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Digital Marketing',
      description: 'Driving growth through strategic digital marketing campaigns',
      gradient: 'from-green-500 to-teal-600'
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: 'Backend Development',
      description: 'Building scalable server-side solutions and APIs',
      gradient: 'from-orange-500 to-red-600'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Freelance Solutions',
      description: 'Delivering custom solutions for businesses worldwide',
      gradient: 'from-purple-500 to-pink-600'
    }
  ];

  const companies = [
    {
      name: 'Golden Brand',
      role: 'CEO & Founder',
      description: 'Leading innovative brand solutions and digital transformation strategies',
      logo: '🏆'
    },
    {
      name: 'CleanCodeHub',
      role: 'Founder',
      description: 'Building a community of developers focused on clean, maintainable code',
      logo: '/cleancodehub.jpg'
    }
  ];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Rajkumar
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('hero')} className="nav-link">Home</button>
              <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
              <button onClick={() => scrollToSection('services')} className="nav-link">Services</button>
              <button onClick={() => scrollToSection('companies')} className="nav-link">Companies</button>
              <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-white/10">
              <div className="flex flex-col space-y-4 pt-4">
                <button onClick={() => scrollToSection('hero')} className="nav-link text-left">Home</button>
                <button onClick={() => scrollToSection('about')} className="nav-link text-left">About</button>
                <button onClick={() => scrollToSection('services')} className="nav-link text-left">Services</button>
                <button onClick={() => scrollToSection('companies')} className="nav-link text-left">Companies</button>
                <button onClick={() => scrollToSection('contact')} className="nav-link text-left">Contact</button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="hero-card">
            <div className="profile-container">
              <img 
                src="/rajkumar.jpg" 
                alt="Rajkumar" 
                className="profile-image"
              />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Rajkumar
            </h1>
            
            <div className="text-xl md:text-2xl mb-8 h-16 flex items-center justify-center">
              <span className="role-text bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {roles[currentRole]}
              </span>
            </div>
            
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Transforming ideas into digital reality through innovative web solutions, 
              strategic marketing, and cutting-edge technology.
            </p>
            
            <button 
              onClick={() => scrollToSection('about')}
              className="cta-button group"
            >
              <span>Discover My Work</span>
              <ChevronDown className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        <div className="floating-elements">
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="floating-shape shape-3"></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="about-card">
              <h3 className="text-2xl font-bold mb-6 text-yellow-400">My Journey</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                With years of experience in web development and digital marketing, I've helped 
                businesses transform their digital presence and achieve remarkable growth. As the 
                CEO of Golden Brand and Founder of CleanCodeHub, I'm passionate about creating 
                exceptional digital experiences.
              </p>
              <p className="text-gray-300 leading-relaxed">
                My expertise spans across full-stack development, digital strategy, and business 
                leadership. I believe in the power of clean code, innovative solutions, and 
                strategic thinking to drive success in the digital age.
              </p>
            </div>
            
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-number">50+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">5+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">2</div>
                <div className="stat-label">Companies Founded</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">100%</div>
                <div className="stat-label">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Services</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="service-card group">
                <div className={`service-icon bg-gradient-to-br ${service.gradient}`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-yellow-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section id="companies" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">My Companies</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {companies.map((company, index) => (
              <div key={index} className="company-card group">
                <div className="company-logo">
                  {company.logo.startsWith('/') ? (
                    <img src={company.logo} alt={company.name} className="w-16 h-16 object-cover rounded-lg" />
                  ) : (
                    <span className="text-4xl">{company.logo}</span>
                  )}
                </div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-yellow-400 transition-colors">
                  {company.name}
                </h3>
                <div className="text-yellow-400 font-semibold mb-4">{company.role}</div>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  {company.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Connect</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to bring your vision to life? Let's discuss your next project.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="contact-info">
              <h3 className="text-2xl font-bold mb-8 text-yellow-400">Get in Touch</h3>
              <div className="space-y-6">
                <div className="contact-item">
                  <Mail className="w-6 h-6 text-yellow-400" />
                  <span>rajkumar@example.com</span>
                </div>
                <div className="contact-item">
                  <Phone className="w-6 h-6 text-yellow-400" />
                  <span>+91 12345 67890</span>
                </div>
                <div className="contact-item">
                  <MapPin className="w-6 h-6 text-yellow-400" />
                  <span>India</span>
                </div>
              </div>
              
              <div className="social-links mt-8">
                <a href="#" className="social-link">
                  <Github className="w-6 h-6" />
                </a>
                <a href="#" className="social-link">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="social-link">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
            
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={5} required></textarea>
              </div>
              <button type="submit" className="submit-button">
                Send Message
                <Rocket className="w-5 h-5 ml-2" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10 bg-black/20">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2024 Rajkumar. All rights reserved. Built with passion and clean code.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
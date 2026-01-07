import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../constants.tsx';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    // Use a small delay to ensure all section components are fully mounted
    const timer = setTimeout(() => {
      const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0,
      };

      const observerCallback = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      };

      const observer = new IntersectionObserver(observerCallback, observerOptions);
      
      // Observe hero (home) plus all other sections
      const homeSection = document.getElementById('home');
      if (homeSection) observer.observe(homeSection);

      navLinks.forEach((link) => {
        const id = link.href.substring(1);
        const section = document.getElementById(id);
        if (section) observer.observe(section);
      });

      return () => observer.disconnect();
    }, 100);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const id = href.substring(1);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-effect py-3 shadow-2xl border-b border-slate-700/50' : 'bg-transparent py-6'}`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <a 
          href="#" 
          onClick={(e) => handleLinkClick(e, '#')}
          className="text-xl font-bold tracking-tight text-white group flex items-center gap-2"
        >
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white text-sm">HJ</div>
          <span className="hidden sm:block">
            <span className="text-blue-500 group-hover:text-blue-400 transition-colors">H</span>arsh<span className="text-blue-500 group-hover:text-blue-400 transition-colors">J</span>ain
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`px-4 py-2 text-sm font-medium transition-all rounded-lg relative group ${
                  isActive ? 'text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-blue-500 rounded-full"></span>
                )}
              </a>
            );
          })}
          
          <a 
            href={PERSONAL_INFO.resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 px-5 py-2 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-blue-600/20"
          >
            Resume
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-slate-300 hover:text-white transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden absolute top-full left-0 right-0 glass-effect border-b border-slate-700 p-6 flex flex-col space-y-4 shadow-xl transition-all duration-300 origin-top transform ${mobileMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'}`}>
        {navLinks.map((link) => {
          const isActive = activeSection === link.href.substring(1);
          return (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`text-lg font-medium transition-colors ${
                isActive ? 'text-blue-500 font-bold' : 'text-slate-300 hover:text-white'
              }`}
            >
              {link.name}
            </a>
          );
        })}
        <a 
          href={PERSONAL_INFO.resumeLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMobileMenuOpen(false)}
          className="w-full py-4 text-center text-white bg-blue-600 rounded-xl font-bold"
        >
          View Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
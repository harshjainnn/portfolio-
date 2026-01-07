
import React from 'react';
import { PERSONAL_INFO } from '../constants.tsx';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
      {/* Background blobs for aesthetics */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-600/20 rounded-full blur-[100px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-indigo-600/20 rounded-full blur-[100px] -z-10 animate-pulse delay-700"></div>

      <div className="max-w-4xl text-center">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full glass-effect text-sm font-medium text-blue-400 border border-blue-500/20 animate-fade-in">
          Available for Internships & Full-time Roles
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight animate-slide-up">
          Hi, I'm <span className="gradient-text">{PERSONAL_INFO.name}</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed animate-slide-up delay-200">
          {PERSONAL_INFO.role} specializing in building 
          <span className="text-white font-medium"> intelligent, scalable web solutions</span> and NLP applications.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up delay-400">
          <a 
            href="#projects" 
            className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-blue-600/20 text-center"
          >
            View Projects
          </a>
          <a 
            href="#contact" 
            className="w-full sm:w-auto px-8 py-4 glass-effect text-white rounded-xl font-semibold hover:bg-slate-800 transition-all border border-slate-700 text-center"
          >
            Contact Me
          </a>
        </div>

        <div className="mt-16 flex justify-center space-x-6 animate-fade-in delay-700">
          {[
            { name: 'GitHub', url: PERSONAL_INFO.github, icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.627-5.373-12-12-12' },
            { name: 'LinkedIn', url: PERSONAL_INFO.linkedin, icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' },
          ].map((item) => (
            <a 
              key={item.name}
              href={item.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d={item.icon} />
              </svg>
            </a>
          ))}
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;

import React from 'react';
import { PROJECTS } from '../constants.tsx';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6 reveal">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-4">
              <span className="text-blue-500">03.</span> Featured Projects
            </h2>
            <p className="text-slate-400 max-w-lg font-light">
              Some of the things I've built recently. These projects showcase my ability 
              to work with modern frameworks, LLMs, and data analysis.
            </p>
          </div>
          <a href="#" className="hidden md:block text-blue-500 hover:text-blue-400 font-medium transition-colors">
            View All Projects →
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => {
            const displayImage = project.imageUrl || `https://picsum.photos/seed/${project.title}/600/400`;
            return (
              <div key={index} className="group relative flex flex-col h-full bg-slate-900 border border-slate-800 hover:border-blue-500/50 rounded-2xl transition-all duration-300 overflow-hidden shadow-xl hover:-translate-y-2">
                <div className="aspect-video relative overflow-hidden bg-slate-800">
                  <img 
                    src={displayImage} 
                    alt={project.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex gap-3">
                      {project.github && (
                        <a href={project.github} className="text-slate-400 hover:text-white transition-colors">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.627-5.373-12-12-12" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-slate-400 text-sm mb-6 flex-grow line-clamp-4">
                    {project.description[0]}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 bg-slate-800 text-slate-400 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
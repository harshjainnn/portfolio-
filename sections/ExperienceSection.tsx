
import React from 'react';
import { EXPERIENCES } from '../constants.tsx';

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-slate-900/50 reveal">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-16 flex items-center gap-4">
          <span className="text-blue-500">02.</span> Professional Experience
        </h2>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-blue-600 before:via-slate-800 before:to-transparent">
          {EXPERIENCES.map((exp, index) => (
            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              {/* Dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-slate-900 text-blue-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <svg className="fill-current w-5 h-5" viewBox="0 0 16 16">
                  <path d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
                </svg>
              </div>

              {/* Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 glass-effect rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <span className="text-sm font-medium text-blue-500 bg-blue-500/10 px-3 py-1 rounded-full whitespace-nowrap">{exp.period}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400 font-medium mb-4">
                  <span className="text-slate-200">{exp.company}</span>
                  <span className="w-1 h-1 rounded-full bg-slate-700"></span>
                  <span className="text-sm">{exp.location}</span>
                </div>
                <ul className="space-y-3">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex gap-3 text-slate-400 text-sm leading-relaxed">
                      <span className="text-blue-500 shrink-0 mt-1">▹</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

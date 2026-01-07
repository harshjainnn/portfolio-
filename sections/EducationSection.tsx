
import React from 'react';
import { EDUCATION } from '../constants.tsx';

const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-24 px-6 reveal">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-16 flex items-center gap-4">
          <span className="text-blue-500">05.</span> Education
        </h2>

        <div className="space-y-8">
          {EDUCATION.map((edu, index) => (
            <div key={index} className="group p-8 glass-effect rounded-2xl border border-slate-800 hover:border-blue-500/30 transition-all relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3L1 9L12 15L21 10.09V17H23V9M5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18Z" />
                </svg>
              </div>

              <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                    {edu.institution}
                  </h3>
                  <p className="text-blue-500 font-medium mb-2">{edu.degree}</p>
                  <p className="text-slate-400 text-sm flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {edu.location}
                  </p>
                </div>
                <div className="text-right flex flex-col items-end shrink-0">
                  <span className="text-sm font-bold text-slate-300 bg-slate-800 px-3 py-1 rounded-md mb-2">{edu.period}</span>
                  <p className="text-lg font-bold text-blue-400">{edu.grade}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

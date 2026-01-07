
import React from 'react';
import { SKILLS } from '../constants.tsx';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-slate-900/50 reveal">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-16 flex items-center gap-4">
          <span className="text-blue-500">04.</span> Technical Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {SKILLS.map((cat, index) => (
            <div key={index} className="p-8 glass-effect rounded-2xl border border-slate-800 hover:border-blue-500/30 transition-all duration-300">
              <h3 className="text-xl font-bold mb-6 text-white flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500">
                  {index + 1}
                </span>
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-4 py-2 bg-slate-800/50 text-slate-300 rounded-lg text-sm border border-slate-700/50 hover:bg-blue-600/10 hover:text-blue-400 hover:border-blue-500/30 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 glass-effect rounded-2xl border border-dashed border-slate-700 text-center">
          <p className="text-slate-400 italic">
            "Always learning and expanding my toolkit with emerging technologies."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;

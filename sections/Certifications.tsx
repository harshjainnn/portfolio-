
import React from 'react';
import { CERTIFICATIONS } from '../constants.tsx';

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 px-6 bg-slate-900/30 reveal">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-16 flex items-center gap-4">
          <span className="text-blue-500">06.</span> Certifications
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, index) => (
            <div key={index} className="p-6 glass-effect rounded-2xl border border-slate-800 flex gap-4 items-center hover:scale-[1.02] transition-transform">
              <div className="w-12 h-12 rounded-xl bg-blue-600/10 flex items-center justify-center text-blue-500 shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-white group-hover:text-blue-400 leading-tight mb-1">{cert.name}</h3>
                <div className="flex flex-col text-xs text-slate-500 uppercase tracking-wider font-semibold">
                  <span>{cert.issuer}</span>
                  <span className="text-blue-500/70 mt-0.5">{cert.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

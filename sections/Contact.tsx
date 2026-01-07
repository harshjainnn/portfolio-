
import React from 'react';
import { PERSONAL_INFO } from '../constants.tsx';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6 reveal">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-4">
          <span className="text-blue-500">07.</span> Get In Touch
        </h2>
        
        <h3 className="text-4xl md:text-5xl font-extrabold mb-8 text-white">What's Next?</h3>
        
        <p className="text-slate-400 text-lg mb-12 max-w-xl mx-auto leading-relaxed font-light">
          I'm currently looking for new opportunities, my inbox is always open. 
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        <div className="flex flex-col items-center gap-6">
          <a 
            href={`mailto:${PERSONAL_INFO.email}`}
            className="px-10 py-5 bg-transparent border-2 border-blue-500 text-blue-500 hover:bg-blue-500/10 rounded-xl text-lg font-bold transition-all transform hover:scale-105"
          >
            Say Hello
          </a>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-lg mt-12">
            <div className="p-6 glass-effect rounded-2xl border border-slate-800 text-left">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Email</p>
              <p className="text-slate-200">{PERSONAL_INFO.email}</p>
            </div>
            <div className="p-6 glass-effect rounded-2xl border border-slate-800 text-left">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Location</p>
              <p className="text-slate-200">Vellore / Noida, India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

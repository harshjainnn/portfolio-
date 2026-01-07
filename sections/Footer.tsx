
import React from 'react';
import { PERSONAL_INFO } from '../constants.tsx';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-slate-800 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <p className="text-slate-500 text-sm">
            © {currentYear} Harsh Jain. Designed & Built with ❤️ using React & Tailwind.
          </p>
        </div>

        <div className="flex gap-6">
          <a 
            href={PERSONAL_INFO.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a 
            href={PERSONAL_INFO.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a 
            href={PERSONAL_INFO.leetcode} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-white transition-colors"
          >
            LeetCode
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

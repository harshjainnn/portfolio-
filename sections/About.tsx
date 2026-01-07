import React from 'react';
import { PERSONAL_INFO } from '../constants.tsx';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 reveal">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10 flex items-center justify-center gap-4">
          <span className="text-blue-500">01.</span> About Me
        </h2>

        <div className="space-y-6 text-lg text-slate-400 leading-relaxed font-light">
          <p>
            I am a <strong className="text-white font-semibold">
            B.Tech Computer Science student at Vellore Institute of Technology (VIT), Vellore
            </strong>, with a strong academic background
            (<strong className="text-white font-semibold"> CGPA: 8.57/10</strong>) and practical
            experience in <strong className="text-white font-semibold">
            software development and full-stack applications
            </strong>.
          </p>

          <p>
            I have worked as a <strong className="text-white font-semibold">
            Software Development Intern at Protologic Solutions
            </strong>, where I developed an NLP-based sentiment analysis system achieving
            <strong className="text-blue-400 font-semibold"> 85% accuracy</strong> and automated
            reporting workflows.
          </p>

          <p>
            My project experience includes
            <strong className="text-blue-400 font-semibold">
            {" "}LLM-powered planning tools, video question answering systems, and recommendation systems
            </strong>. I am proficient in
            <strong className="text-white font-semibold">
            {" "}Java, Python, C/C++, JavaScript, and React
            </strong>, with solid foundations in
            <strong className="text-white font-semibold">
            {" "}DSA, Operating Systems, Computer Networks, and OOP
            </strong>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
import React from 'react';
import { Project, Experience, Education, Certification, SkillCategory } from './types';

export const PERSONAL_INFO = {
  name: "Harsh Jain",
  role: "B.Tech Computer Science Student | Software Developer",
  email: "hjain4815@gmail.com",
  phone: "8851284691",
  linkedin: "https://www.linkedin.com/in/harsh-jain-887077267/",
  github: "https://github.com/harshjainnn",
  leetcode: "https://leetcode.com/harshjain",
  resumeLink: "https://drive.google.com/file/d/13GKSnTVNo9uaBdS_2B4ownWynMz5VLhS/view?usp=drivesdk",
  // Path to the professional photo provided
  profileImage: "./profile.jpg", 
  about: "I am a B.Tech Computer Science student at Vellore Institute of Technology (VIT), Vellore, with a strong academic background (CGPA: 8.57/10) and practical experience in software development and full-stack applications. I have worked as a Software Development Intern at Protologic Solutions, where I developed an NLP-based sentiment analysis system achieving 85% accuracy and automated reporting workflows. My project experience includes LLM-powered planning tools, video question answering systems, and recommendation systems. I am proficient in Java, Python, C/C++, JavaScript, and React, with solid foundations in DSA, Operating Systems, Computer Networks, and OOP, and I enjoy building scalable, real-world software solutions."
};

export const EXPERIENCES: Experience[] = [
  {
    role: "Software Development Intern",
    company: "Protologic Solutions",
    period: "May 2025 – July 2025",
    location: "Noida, India",
    points: [
      "Developed a Client Feedback Sentiment Analyzer using Python, NLP (TF-IDF, Logistic Regression), and Streamlit with 85% accuracy",
      "Built interactive dashboards with sentiment charts, word clouds, and trend analysis",
      "Automated reporting and exports (CSV/Excel), reducing manual effort by 60%"
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Smart Task Planner",
    date: "March 2025",
    description: [
      "Full-stack website using React and FastAPI that converts high-level user goals into structured project plans using Groq LLM.",
      "Scalable backend using FastAPI & SQLAlchemy with a React + TypeScript frontend utilizing MUI components."
    ],
    tags: ["React", "FastAPI", "Groq LLM", "SQLAlchemy", "TypeScript"],
    github: "#",
    imageUrl: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "SwiftVQA: Lightweight Video QA System",
    date: "June 2025",
    description: [
      "Video Question Answering system with NLP-based contextual queries.",
      "Video frame extraction + audio transcription using Whisper; multimodal embeddings combining visual, audio & text.",
      "Answer generation using BART (Hugging Face)."
    ],
    tags: ["Python", "Whisper", "Hugging Face", "NLP", "Computer Vision"],
    github: "#",
    imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "Movie Recommender System",
    date: "September 2024",
    description: [
      "Python-based similarity model using Pandas to recommend 5 closest movies based on genre, director & keywords.",
      "Dynamic website integration for a seamless user experience."
    ],
    tags: ["Python", "Pandas", "Scikit-Learn", "Flask"],
    github: "#",
    imageUrl: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80&w=1000"
  }
];

export const EDUCATION: Education[] = [
  {
    institution: "Vellore Institute of Technology (VIT)",
    location: "Vellore, India",
    degree: "Bachelor of Technology in Computer Science",
    period: "Sept 2022 – Present",
    grade: "CGPA: 8.57 / 10"
  },
  {
    institution: "The Khaitan School",
    location: "Noida, India",
    degree: "Senior Secondary (12th Grade)",
    period: "May 2022",
    grade: "Percentage: 93.8%"
  },
  {
    institution: "The Khaitan School",
    location: "Noida, India",
    degree: "Secondary School (10th Grade)",
    period: "May 2020",
    grade: "Percentage: 94.1%"
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["Java", "Python", "C/C++", "SQL", "JavaScript", "HTML/CSS", "R"]
  },
  {
    category: "Frameworks & Tools",
    skills: ["React", "Flask", "Node.js", "Express.js", "MySQL", "Git", "GitHub", "NumPy", "Pandas", "Jupyter"]
  },
  {
    category: "Core Concepts",
    skills: ["Operating Systems", "Computer Networks", "DSA", "OOP"]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "August 2024"
  },
  {
    name: "Getting Started with Deep Learning",
    issuer: "NVIDIA",
    date: "September 2025"
  }
];
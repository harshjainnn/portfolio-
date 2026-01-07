
export interface Project {
  title: string;
  date: string;
  description: string[];
  tags: string[];
  link?: string;
  github?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  points: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  grade: string;
  location?: string;
}

export interface Certification {
  name: string;
  date: string;
  issuer: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Project {
  title: string;
  description: string;
  impact?: string;
  technologies: string[];
  image?: string;
  category: 'ICT' | 'Education' | 'Research';
}

export interface Publication {
  title: string;
  description: string;
  year: number;
  link?: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
}

export interface Resource {
  title: string;
  description: string;
  category: 'Research' | 'Professional' | 'Training';
  fileType: string;
  link: string;
}
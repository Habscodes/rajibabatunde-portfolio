import { Project, Publication, Experience, Resource } from '../types';

export const experiences: Experience[] = [
  {
    title: "ICT Project Manager / Lecturer",
    company: "Lagos State College of Health Technology",
    period: "2016 – Present",
    description: [
      "Lead ICT infrastructure development and maintenance",
      "Develop and implement e-learning platforms",
      "Conduct lectures in computer science and IT-related courses",
      "Manage campus-wide network infrastructure"
    ]
  },
  {
    title: "Senior Network Technologist / Program Analyst",
    company: "Lagos State Ministry of Science and Technology",
    period: "2011 – 2016",
    description: [
      "Managed network infrastructure and security",
      "Developed and maintained ministry software applications",
      "Led IT training programs for staff"
    ]
  },
  {
    title: "Programme Analyst and System Technologist",
    company: "Edunet ICT Solutions",
    period: "2008 – 2011",
    description: [
      "Developed educational software solutions",
      "Provided technical support for clients",
      "Conducted ICT training sessions"
    ]
  }
];

export const projects: Project[] = [
  {
    title: "Campus-wide E-learning Platform Integration",
    description: "Led the implementation of a comprehensive e-learning system serving over 5,000 students",
    impact: "Increased student engagement by 35% and reduced operational costs by 20%",
    technologies: ["Moodle", "AWS", "PHP", "MySQL"],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "Education"
  },
  {
    title: "Network Infrastructure Optimization",
    description: "Redesigned and implemented campus-wide network infrastructure",
    impact: "Improved network performance by 40% and reduced downtime by 60%",
    technologies: ["Cisco", "Network Security", "VLAN"],
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "ICT"
  }
];

export const publications: Publication[] = [
  {
    title: "Geofencing Based Attendance Monitoring System",
    description: "Research on implementing automated attendance tracking using geofencing technology",
    year: 2022,
    link: "#"
  },
  {
    title: "Understanding Noise Reduction in Multidimensional Documents",
    description: "Study on improving document processing efficiency through noise reduction techniques",
    year: 2021,
    link: "#"
  }
];

export const resources: Resource[] = [
  {
    title: "Academic Research Interests",
    description: "Overview of academic research interests and goals in ICT education and technology",
    category: "Research",
    fileType: "PDF",
    link: "/src/assests/documents/academic-research-interests.docx"
  },
  {
    title: "MSC PROJECT REPORT",
    description: "Master's research on network fault detection and diagnosis",
    category: "Research",
    fileType: "PDF",
    link: "/src/assests/documents/msc-project-report.pdf"
  },
  {
    title: "PDE PROJECT REPORT",
    description: "Research on ICT transformation in Kosofe Educational Districts",
    category: "Research",
    fileType: "PDF",
    link: "/src/assests/documents/pde-project-report.pdf"
  },
  {
    title: "The Preliminary Pages (MSc Project)",
    description: "Introductory and preliminary pages of MSc research project",
    category: "Research",
    fileType: "PDF",
    link: "/src/assests/documents/msc-preliminary-pages.docx"
  },
  {
    title: "Data Management Training",
    description: "Comprehensive guide to effective data management strategies",
    category: "Training",
    fileType: "PDF",
    link: "/src/assests/documents/data-management-training.pdf"
  },
  {
    title: "NETWORK FAULT DETECTION",
    description: "NETWORK FAULT DETECTION AND DIAGNOSIS OVER A NETWORK AND NETWORK INFRASTRUCTURES",
    category: "Training",
    fileType: "PPTX",
    link: "/src/assests/documents/network-detection.pptx"
  },
  {
    title: "Professional CV",
    description: "Detailed professional curriculum vitae",
    category: "Professional",
    fileType: "PDF",
    link: "/src/assests/documents/raji-shittu-cv.pdf"
  }
];
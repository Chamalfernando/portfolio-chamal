export interface Education {
  title: string;
  institution: string;
  duration: string;
  description: string;
  icon: string;
}

export const educations: Education[] = [
  {
    title: "BSc in Computer Science",
    institution: "University of Colombo School of Computing",
    // duration: "2022 - August 2025",
    duration: "2025",
    description:
      "Successfully completed academic Studies with a Second Class Upper Division",
    icon: "🎓",
  },
  {
    title: "GCE Advanced Level - Physical Science",
    institution: "Royal College Colombo 07",
    // duration: "2018 - 2020",
    duration: "2020",
    description: "Combined Mathematics, Physics, Chemistry",
    icon: "📚",
  },
  {
    title: "GCE Ordinary Level - Local Syllabus",
    institution: "Carey College Colombo 08",
    // duration: "2011 - 2017",
    duration: "2017",
    description: "Successfully completed O/Ls with 9 A's",
    icon: "🏫",
  },
];

export interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  image: string;
  images?: string[]; // Optional: Multiple images for detailed project showcase
  technologies: string[];
  details: string;
  longDescription?: string; // Optional: More detailed description with sections
  demoLink: string;
  githubLink1: string;
  githubLink2?: string;
  githubLink3?: string;
  /** "true" to show this project on the site, "false" to hide it */
  isVisible: "true" | "false";
}

export interface WorkExperience {
  title: string;
  company: string;
  duration: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export const workExperiences: WorkExperience[] = [
  {
    title: "Associate Software Engineer",
    company: "Scienter Technologies (Pte) Ltd",
    duration: "2025 June - Present",
    description: "Developing a robust, enterprise-level financial fixed deposit management system and contributing to full-stack development using modern technologies and best practices.",
    responsibilities: [
      "Actively contributed to both frontend and backend development using modern technologies and frameworks like Angular and .NET Core in order to align with project requirements",
      "Successfully performed data migration between database environments, ensuring data integrity, consistency, and successful integration",
      "Set up the QA environment for comprehensive system testing and fixed bugs raised by the QA Team",
      "Proactively identified and resolved development issues, collaborating with team members to enhance overall code quality and project efficiency",
      "Added new features for enhancements and performed modifications to the development codebase based on changing project requirements",
      "Assisted junior developers and interns with bug fixing, troubleshooting, and knowledge sharing to support team productivity and growth"
    ],
    technologies: ["Angular", "ASP.NET Core", "TypeScript", "MS SQL Server", "PrimeNG", "Bootstrap", "Git", "Swagger", "Native Federation"]
  },
  {
    title: "Intern Software Engineer",
    company: "Scienter Technologies (Pte) Ltd",
    duration: "2024 Nov - 2025 May",
    description: "Developing enterprise-level financial management systems and contributing to full-stack development projects using modern technologies and best practices.",
    responsibilities: [
      "Designing and implementing scalable web applications using Angular and ASP.NET Core",
      "Developing RESTful APIs and integrating third-party services",
      "Collaborating with cross-functional teams in an agile development environment",
      "Writing clean, maintainable, and well-documented code following industry standards",
      "Participating in code reviews and providing constructive feedback to team members",
      "Optimizing application performance and implementing security best practices"
    ],
    technologies: ["Angular", "ASP.NET Core", "TypeScript", "MS SQL Server", "PrimeNG", "Bootstrap"]
  }
];

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Mobile' | 'Database' | 'Tools';
  icon: string;
}

export const skills: Skill[] = [
  // Frontend
  { name: "Angular", category: "Frontend", icon: "🔺" },
  { name: "React", category: "Frontend", icon: "⚛️" },
  { name: "TypeScript", category: "Frontend", icon: "🔷" },
  { name: "JavaScript", category: "Frontend", icon: "🟨" },
  { name: "HTML5", category: "Frontend", icon: "🌐" },
  { name: "CSS3", category: "Frontend", icon: "🎨" },
  { name: "Bootstrap", category: "Frontend", icon: "🅱️" },
  { name: "Tailwind CSS", category: "Frontend", icon: "💨" },
  
  // Backend
  { name: "ASP.NET Core", category: "Backend", icon: "🔵" },
  { name: "Node.js", category: "Backend", icon: "🟩" },
  { name: "Express.js", category: "Backend", icon: "⚡" },
  
  // Database
  { name: "MS SQL Server", category: "Database", icon: "💾" },
  // { name: "PostgreSQL", category: "Database", icon: "🐘" },
  { name: "MySQL", category: "Database", icon: "🐬" },
  // { name: "Firebase", category: "Database", icon: "🔥" },
  { name: "MongoDB", category: "Database", icon: "🍃" },
  
  // Tools
  { name: "Git", category: "Tools", icon: "🔀" },
  { name: "GitHub", category: "Tools", icon: "🐙" },
  { name: "Swagger Docs", category: "Tools", icon: "📋" },
  { name: "Scalar Docs", category: "Tools", icon: "📄" },
  { name: "Postman", category: "Tools", icon: "📮" },
  { name: "Docker", category: "Tools", icon: "🐳" },
  
  // Mobile
  { name: "React Native", category: "Mobile", icon: "📱" },
  { name: "Flutter", category: "Mobile", icon: "🦋" },
];

export interface Certification {
  name: string;
  institution: string;
  issueDate: string;
  credentialUrl: string;
  description: string;
  /** "true" to show on the Certifications page, "false" to hide it */
  isVisible: "true" | "false";
}

export interface CertificationCategory {
  institution: string;
  logo: string;
  certifications: Certification[];
}

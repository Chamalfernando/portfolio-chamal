import skillsparqImage from '@/assets/project-skillsparq.jpg';
import kindcoinImage from '@/assets/project-kindcoin.jpg';
import biomarkImage from '@/assets/project-biomark.jpg';
import ecommerceImage from '@/assets/project-ecommerce.jpg';
import efinancialsImage from '@/assets/project-efinancials.jpg';

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
    duration: "2022 - August 2025",
    description:
      "Successfully completed academic Studies with a Second Class Upper Division",
    icon: "🎓",
  },
  {
    title: "GCE Advanced Level - Physical Science",
    institution: "Royal College Colombo 07",
    duration: "2018 - 2020",
    description: "Combined Mathematics, Physics, Chemistry",
    icon: "📚",
  },
  {
    title: "GCE Ordinary Level - Local Syllabus",
    institution: "Carey College Colombo 08",
    duration: "2011 - 2017",
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
  technologies: string[];
  details: string;
  demoLink: string;
  githubLink1: string;
  githubLink2?: string;
  githubLink3?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "skillsparq",
    title: "SKILLsparQ Freelancing Platform",
    description:
      "Full-stack freelancing platform with real-time chat and payment integration.",
    image: skillsparqImage,
    technologies: ["HTML", "CSS", "JavaScript", "MySQL"],
    details: "A comprehensive freelancing platform featuring user authentication, real-time messaging system, secure payment processing, and advanced search functionality. Built with responsive design principles and optimized for performance across all devices.",
    demoLink: "",
    githubLink1: "https://github.com/sahan462/Skillsparq",
  },
  {
    id: 2,
    slug: "kindcoin",
    title: "KindCoin Donation Platform",
    description: "Donation Web Application with crypto awarding system.",
    image: kindcoinImage,
    technologies: ["MongoDB", "Express.js", "React", "Node.js"],
    details: "Modern donation platform implementing blockchain technology for transparent transactions. Features include donor tracking, campaign management, automated crypto rewards, and comprehensive analytics dashboard.",
    demoLink: "",
    githubLink1: "https://github.com/ruwangakonara/kindcoinfront",
    githubLink2: "https://github.com/ruwangakonara/kindcoinserver",
  },
  {
    id: 3,
    slug: "biomark",
    title: "BioMark Mobile Application",
    description: "Biometric attendance tracking mobile application.",
    image: biomarkImage,
    technologies: ["Flutter", "Firebase", "FireStore", "Express.js"],
    details: "Cross-platform mobile application implementing biometric authentication for attendance tracking. Features real-time synchronization, offline capabilities, advanced analytics, and secure data encryption.",
    demoLink: "https://youtu.be/M_IHaXyjdrg",
    githubLink1: "https://github.com/Chamalfernando/Biomark_Frontend",
    githubLink2: "https://github.com/Chamalfernando/Biomark_Backend",
  },
  {
    id: 4,
    slug: "ecommerce",
    title: "Simple Ecommerce Mobile Application",
    description: "Modern Looking Ecommerce Mobile Application",
    image: ecommerceImage,
    technologies: ["React Native"],
    details: "Modern e-commerce mobile application with intuitive user interface, state management using Redux, product catalog browsing, shopping cart functionality, and seamless checkout process.",
    demoLink: "",
    githubLink1: "https://github.com/Chamalfernando/ReactNative_Assessment",
  },
  {
    id: 5,
    slug: "efinancials",
    title: "eFinancials Fixed Deposit System",
    description: "Enterprise financial management system for fixed deposits.",
    image: efinancialsImage,
    technologies: [
      "Angular 19",
      "ASP .NET Core",
      "MS SQL Server",
      "PrimeNG",
      "Bootstrap",
    ],
    details: "Enterprise-grade financial management system for handling fixed deposit operations. Features include customer management, interest calculations, automated reporting, and comprehensive audit trails.",
    demoLink: "",
    githubLink1: "",
  },
];

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
    duration: "2024 - Present",
    description: "Developing enterprise-level financial management systems and contributing to full-stack development projects using modern technologies and best practices.",
    responsibilities: [
      "Designing and implementing scalable web applications using Angular and ASP.NET Core",
      "Developing RESTful APIs and integrating third-party services",
      "Collaborating with cross-functional teams in an agile development environment",
      "Writing clean, maintainable, and well-documented code following industry standards",
      "Participating in code reviews and providing constructive feedback to team members",
      "Optimizing application performance and implementing security best practices"
    ],
    technologies: ["Angular 19", "ASP.NET Core", "TypeScript", "MS SQL Server", "PrimeNG", "Bootstrap", "Entity Framework"]
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
  { name: "PostgreSQL", category: "Database", icon: "🐘" },
  { name: "MySQL", category: "Database", icon: "🐬" },
  { name: "Firebase", category: "Database", icon: "🔥" },
  { name: "MongoDB", category: "Database", icon: "🍃" },
  
  // Tools
  { name: "Git", category: "Tools", icon: "🔀" },
  { name: "GitHub", category: "Tools", icon: "🐙" },
  { name: "Swagger", category: "Tools", icon: "📋" },
  { name: "Postman", category: "Tools", icon: "📮" },
  { name: "Docker", category: "Tools", icon: "🐳" },
  
  // Mobile
  { name: "React Native", category: "Mobile", icon: "📱" },
  { name: "Flutter", category: "Mobile", icon: "🦋" },
];
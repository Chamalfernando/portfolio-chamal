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
}

export const projects: Project[] = [
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
  {
    id: 2,
    slug: "kindcoin",
    title: "KindCoin Donation Platform",
    description: "Donation Web Application with crypto awarding system.",
    image: kindcoinImage,
    images: [efinancialsImage,ecommerceImage,biomarkImage,kindcoinImage,skillsparqImage],
    technologies: ["MongoDB", "Express.js", "React", "Node.js"],
    details: "Modern donation platform implementing blockchain technology for transparent transactions. Features include donor tracking, campaign management, automated crypto rewards, and comprehensive analytics dashboard.",
    demoLink: "",
    githubLink1: "https://github.com/ruwangakonara/kindcoinfront",
    githubLink2: "https://github.com/ruwangakonara/kindcoinserver",
  },
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
  { name: "Swagger", category: "Tools", icon: "📋" },
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
}

export interface CertificationCategory {
  institution: string;
  logo: string;
  certifications: Certification[];
}

export const certificationCategories: CertificationCategory[] = [
  {
    institution: "LinkedIn Learning",
    logo: "💼",
    certifications: [
      {
        name: "Back-End Web Development with .NET",
        institution: "LinkedIn Learning",
        issueDate: "January 18, 2025",
        credentialUrl: "https://www.linkedin.com/learning/certificates/648c0fd998cd40492b38379ee272a4eb1c938dca5d57d9dfa9eba896ea8f623e?trk=share_certificate",
        description: "Comprehensive course on back-end web development using .NET, covering ASP.NET Core, RESTful APIs, and database integration."
      },
      {
        name: "Building RESTful APIs with Node.js and Express",
        institution: "LinkedIn Learning",
        issueDate: "June 5, 2024",
        credentialUrl: "https://www.linkedin.com/learning/certificates/271c3b116b462297ad6b0b0a2821c56df849d177dbdf058a1fbb73f0b5e0c593?trk=share_certificate",
        description: "In-depth course on building RESTful APIs using Node.js and Express, focusing on routing, middleware, and database connectivity."
      },
      {
        name: "Node.js: Securing RESTful APIs",
        institution: "LinkedIn Learning",
        issueDate: "June 5, 2024",
        credentialUrl: "https://www.linkedin.com/learning/certificates/5a353f34e1c5ec858fe7d3ff95f3a200ae4543500c1cc31494e08500f7facca0?trk=share_certificate",
        description: "Specialized course on securing RESTful APIs built with Node.js, covering authentication, authorization, and best security practices."
      },
      {
        name: "Docker for Developers",
        institution: "LinkedIn Learning",
        issueDate: "May 11, 2024",
        credentialUrl: "https://www.linkedin.com/learning/certificates/893f10bed90dbda5110d3e68e10651b2bfa080ea1b8426b47257e31a07ccf286?trk=share_certificate",
        description: "Comprehensive course on Docker for developers, covering containerization, image creation, and deployment strategies."
      },
      {
        name: "Building APIs with Swagger and the OpenAPI Specification",
        institution: "LinkedIn Learning",
        issueDate: "May 27, 2024",
        credentialUrl: "https://www.linkedin.com/learning/certificates/c72df1c3f456dd675f6c859665c817137b9f094b61f6b3212f8bdede7883fb4f?trk=share_certificate",
        description: "Detailed course on building APIs using Swagger and the OpenAPI Specification, focusing on API design, documentation, and testing."
      },
      {
        name: "Agile Development Practices",
        institution: "LinkedIn Learning",
        issueDate: "May 15, 2024",
        credentialUrl: "https://www.linkedin.com/learning/certificates/780aa276a7a4225c82a7d096e5eee54c46aed3fe3d620aee8d63c649beff56c9?trk=share_certificate",
        description: "Comprehensive course on Agile development practices, covering Scrum, Kanban, and effective team collaboration techniques."
      },
      {
        name: "React.js Essential Training",
        institution: "LinkedIn Learning",
        issueDate: "May 11, 2024",
        credentialUrl: "https://www.linkedin.com/learning/certificates/0c9e782ce8f996e25064acdb570d666de8dcf36731fc19c82fd83dd1a35aee5f?trk=share_certificate",
        description: "Course on React.js, covering component-based architecture, state management, and building dynamic user interfaces."
      },
      {
        name: "Agile Software Development",
        institution: "LinkedIn Learning",
        issueDate: "December 5, 2023",
        credentialUrl: "https://www.linkedin.com/learning/certificates/33ef51df80cb22b73a341a84cdbfac67a1fcc98bfa637856e7d649a12ab5eb6a?trk=share_certificate",
        description: "Comprehensive overview of Agile software development methodologies, including Scrum and Kanban frameworks, to enhance project management and team collaboration."
      },
      {
        name: "Introduction to Prompt Engineering for Generative AI",
        institution: "LinkedIn Learning",
        issueDate: "May 27, 2024",
        credentialUrl: "https://www.linkedin.com/learning/certificates/0f0f92eeacbb255362355ce9be81eb92f0007c7af2c95e04eed361170da7c017?trk=share_certificate",
        description: "Introductory course on prompt engineering techniques for generative AI models, focusing on effective prompt design and optimization strategies."
      },
      {
        name: "Introduction to Dart",
        institution: "LinkedIn Learning",
        issueDate: "December 15, 2023",
        credentialUrl: "https://www.linkedin.com/learning/certificates/533f97bf9ef85fe0c1530fc12fb1754a4a1eae94009530cdf9171d7d231423b6?trk=share_certificate",
        description: "Comprehensive introduction to the Dart programming language, covering syntax, data structures, and object-oriented programming concepts."
      }
    ]
  },
  // {
  //   institution: "Udemy",
  //   logo: "📚",
  //   certifications: [
  //     {
  //       name: "Docker for Java Developers",
  //       institution: "Udemy",
  //       issueDate: "Aug 29, 2024",
  //       credentialUrl: "https://www.udemy.com/certificate/UC-1332e027-f3b9-4ad9-a38c-9dd72470a253/",
  //       description: "Comprehensive Docker course tailored for Java developers, covering containerization, image creation, and deployment strategies."
  //     },
  //     {
  //       name: "Flutter & Dart - The Complete Guide",
  //       institution: "Maximilian Schwarzmüller",
  //       issueDate: "March 2024",
  //       credentialUrl: "",
  //       description: "Comprehensive Flutter course including widgets, state management, Firebase integration, and deployment."
  //     }
  //   ]
  // },
  {
    institution: "Coursera",
    logo: "🎓",
    certifications: [
      {
        name: "Introduction to Front-End Development",
        institution: "Meta",
        issueDate: "June 29, 2023",
        credentialUrl: "https://www.coursera.org/account/accomplishments/verify/P9J74UZVWFBK",
        description: "Comprehensive course covering Front-End fundamentals including HTML, CSS, JavaScript responsive design principles."
      }
      ,
      {
        name: "Programming with JavaScript",
        institution: "Meta",
        issueDate: "Sept 20, 2023",
        credentialUrl: "https://www.coursera.org/account/accomplishments/verify/J5X89E3D3MAN",
        description: "Exploration of JavaScript programming concepts including variables, functions, objects, DOM manipulation, and event handling."
      }
      ,
      {
        name: "Introduction to Git and GitHub",
        institution: "Google",
        issueDate: "June 14, 2023",
        credentialUrl: "https://www.coursera.org/account/accomplishments/verify/LYSTSP28SMG4",
        description: "Overview of version control using Git and GitHub, covering branches, commits, merges, and collaboration workflows etc."
      }
      // ,
      // {
      //   name: "Google Cloud Fundamentals: Core Infrastructure",
      //   institution: "Google Cloud",
      //   issueDate: "June 29, 2023",
      //   credentialUrl: "https://www.coursera.org/account/accomplishments/verify/5C5VTANK7RFK",
      //   description: "Introduction to Google Cloud Platform services, infrastructure, and solutions including compute, storage and networking."
      // }
    ]
  },
  {
    institution: "Microsoft Learn",
    logo: "🪟",
    certifications: [
      {
        name: "Describe cloud service types",
        institution: "Microsoft Learn",
        issueDate: "Jan 19, 2024",
        credentialUrl: "https://learn.microsoft.com/api/achievements/share/en-us/chamalferdy/8RTVNFSW?sharingId=934856C92DA4A321",
        description: "Comprehensive course covering cloud service types."
      }
      ,
      {
        name: "Describe the benefits of using cloud services",
        institution: "Microsoft Learn",
        issueDate: "Jan 19, 2024",
        credentialUrl: "https://learn.microsoft.com/api/achievements/share/en-us/chamalferdy/24HJABTV?sharingId=934856C92DA4A321",
        description: "Comprehensive course describing the benefits of using cloud services."
      }
      ,
      {
        name: "Describe cloud computing",
        institution: "Microsoft Learn",
        issueDate: "Jan 18, 2024",
        credentialUrl: "https://learn.microsoft.com/api/achievements/share/en-us/chamalferdy/AQ9248H7?sharingId=934856C92DA4A321",
        description: "Comprehensive course covering about cloud computing."
      }
      ,
    ]
  }
];
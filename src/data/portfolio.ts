export interface Education {
  title: string;
  institution: string;
  duration: string;
  description: string;
  icon: string;
  /** "true" to show this entry on the site, "false" to hide it */
  isVisible: "true" | "false";
}

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
  /** "true" to show this role on the site, "false" to hide it */
  isVisible: "true" | "false";
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Mobile' | 'Database' | 'Tools';
  icon: string;
  /** "true" to show this skill on the site, "false" to hide it */
  isVisible: "true" | "false";
}

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
  /** Display position on the Certifications page (ascending: 1 shows first) */
  orderNo: number;
  institution: string;
  logo: string;
  certifications: Certification[];
}

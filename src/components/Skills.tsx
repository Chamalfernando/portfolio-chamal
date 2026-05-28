import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skills } from '@/data/portfolio';

// Description map representing technologies with professional descriptions
const skillMenuDescriptions: Record<string, { menuName: string; desc: string; level: string }> = {
  // Frontend
  "Angular": { menuName: "Angular", desc: "A component-based frontend framework for building robust, scalable single-page enterprise applications.", level: "Advanced" },
  "React": { menuName: "React", desc: "A popular client-side library for building dynamic, high-performance declarative user interfaces.", level: "Proficient" },
  "TypeScript": { menuName: "TypeScript", desc: "A strongly typed superset of JavaScript that adds static compile-time validation, preventing runtime errors.", level: "Advanced" },
  "JavaScript": { menuName: "JavaScript", desc: "The core foundational scripting language of the web, enabling modern interactive clients.", level: "Proficient" },
  "HTML5": { menuName: "HTML5", desc: "Standard semantic markup for clean document structure and accessibility guidelines.", level: "Advanced" },
  "CSS3": { menuName: "CSS3", desc: "Style sheets for responsive layouts, interactive styling, animations, and typography control.", level: "Advanced" },
  "Bootstrap": { menuName: "Bootstrap", desc: "A classic grid-based utility library for fast mobile-first responsive wireframing.", level: "Proficient" },
  "Tailwind CSS": { menuName: "Tailwind CSS", desc: "A utility-first CSS framework for rapid and maintainable stylesheet styling.", level: "Advanced" },
  
  // Backend
  "ASP.NET Core": { menuName: "ASP.NET Core", desc: "A cross-platform, high-performance framework for building secure, enterprise-level APIs and services.", level: "Advanced" },
  "Node.js": { menuName: "Node.js", desc: "An asynchronous event-driven JavaScript runtime built for scalable network applications.", level: "Proficient" },
  "Express.js": { menuName: "Express.js", desc: "A minimalist, unopinionated routing framework for building lightweight REST APIs.", level: "Proficient" },
  
  // Database
  "MS SQL Server": { menuName: "MS SQL Server", desc: "A relational database management system for secure, structured enterprise storage.", level: "Advanced" },
  "MySQL": { menuName: "MySQL", desc: "An open-source relational database management system, reliable and highly concurrent.", level: "Proficient" },
  "MongoDB": { menuName: "MongoDB", desc: "A scalable, document-oriented NoSQL database for handling flexible JSON-like schemas.", level: "Familiar" },
  
  // Tools
  "Git": { menuName: "Git", desc: "A distributed version control system for tracking source code changes and branching workflows.", level: "Advanced" },
  "GitHub": { menuName: "GitHub", desc: "A collaborative repository platform supporting secure reviews, pipelines, and automated integrations.", level: "Advanced" },
  "GitLab": { menuName: "GitLab", desc: "CI/CD pipeline orchestrator, automating testing, builds, and live servers deployments.", level: "Proficient" },
  "Swagger Docs": { menuName: "Swagger Docs", desc: "Interactive API specification and documentation tool built on the OpenAPI standard.", level: "Advanced" },
  "Scalar Docs": { menuName: "Scalar Docs", desc: "Modern, beautiful API documentation generator supporting interactive testing clients.", level: "Proficient" },
  "Postman": { menuName: "Postman", desc: "API platform for building and using APIs, facilitating automated testing and mock servers.", level: "Advanced" },
  "Docker": { menuName: "Docker", desc: "Containerization platform to build, package, ship, and run distributed applications consistently.", level: "Proficient" }
};

const Skills = () => {
  const categories = ['Frontend', 'Backend', 'Database', 'Tools'] as const;
  const [activeCategory, setActiveCategory] = useState<typeof categories[number]>('Frontend');

  // Categories helper styling
  const categoryThemes: Record<typeof categories[number], { bg: string; iconBg: string; text: string }> = {
    Frontend: { bg: 'bg-sb-green/10', iconBg: 'bg-sb-green/10', text: 'text-sb-green' },
    Backend: { bg: 'bg-sb-house/10', iconBg: 'bg-sb-house/15', text: 'text-sb-house' },
    Database: { bg: 'bg-sb-gold/10', iconBg: 'bg-sb-gold/20', text: 'text-sb-gold' },
    Tools: { bg: 'bg-sb-accent/10', iconBg: 'bg-sb-accent/15', text: 'text-sb-accent' }
  };

  return (
    <section className="py-20 bg-sb-ceramic/40 border-t border-sb-border/40">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <span className="font-cursive text-sb-accent text-2xl rotate-[-1deg] inline-block mb-2">Core Capabilities 📋</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-sb-house font-serif mb-4">
            Technical Expertise
          </h2>
          <p className="text-base md:text-lg text-sb-text-black-soft">
            Explore my technical stack across different domains of software development.
          </p>
        </motion.div>

        {/* Categories grid */}
        <div className="grid lg:grid-cols-12 gap-8 max-w-5xl mx-auto items-start">
          
          {/* Left Sidebar Category Nav - Desktop */}
          <div className="lg:col-span-3 hidden lg:block sticky top-28 bg-white/50 backdrop-blur-sm p-4 rounded-2xl border border-sb-border/30">
            <h3 className="text-xs font-bold uppercase tracking-widest text-sb-text-black-soft mb-4 px-3">Categories</h3>
            <nav className="flex flex-col space-y-1">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`w-full text-left px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-200 active:scale-98 ${
                    activeCategory === category
                      ? 'bg-sb-accent text-white shadow-sm'
                      : 'text-sb-text-black-soft hover:text-sb-house hover:bg-sb-ceramic/40'
                  }`}
                >
                  {category}
                </button>
              ))}
            </nav>
          </div>

          {/* Top Category Nav - Mobile / Tablet */}
          <div className="lg:hidden col-span-12 overflow-x-auto flex pb-2 mb-6 scrollbar-none gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-200 active:scale-95 ${
                  activeCategory === category
                    ? 'bg-sb-accent text-white shadow-sm'
                    : 'bg-white border border-sb-border text-sb-text-black-soft hover:bg-sb-ceramic/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Right Content Section: Menu Items List */}
          <div className="lg:col-span-9">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-2 gap-6"
              >
                {skills
                  .filter((skill) => skill.category === activeCategory)
                  .map((skill) => {
                    const formulation = skillMenuDescriptions[skill.name] || {
                      menuName: skill.name,
                      desc: `A reliable custom technology layer. Scaled and built to fulfill custom project specifications.`,
                      level: "Proficient"
                    };

                    const theme = categoryThemes[activeCategory];

                    return (
                      <motion.div
                        key={skill.name}
                        whileHover={{ y: -3 }}
                        transition={{ duration: 0.2 }}
                        className="bg-white rounded-2xl p-6 border border-sb-border/40 shadow-sb-card hover:shadow-md flex gap-4 items-start"
                      >
                        {/* Styled drink thumbnail badge */}
                        <div className={`w-14 h-14 rounded-full flex-shrink-0 flex items-center justify-center text-3xl shadow-sm ${theme.iconBg}`}>
                          {skill.icon}
                        </div>

                        {/* Details */}
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-start gap-2 mb-1">
                            <h4 className="font-serif font-bold text-lg text-sb-house truncate">
                              {formulation.menuName}
                            </h4>
                            <span className="text-[10px] font-bold text-sb-accent flex-shrink-0 bg-sb-light border border-sb-accent/20 px-2.5 py-0.5 rounded-full">
                              {formulation.level}
                            </span>
                          </div>
                          <p className="text-xs text-sb-text-black-soft leading-relaxed">
                            {formulation.desc}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Skills;
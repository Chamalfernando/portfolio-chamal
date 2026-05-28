import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects } from '@/data/portfolio';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const Projects = () => {
  // Helper to map project IDs to professional categories
  const getProjectMetadata = (id: number) => {
    switch (id) {
      case 5: // eFinancials
        return { scale: 'Enterprise', tier: 'FinTech Solution', focus: 'Backend & DB' };
      case 2: // KindCoin
        return { scale: 'Full-Scale', tier: 'Web3 Donation', focus: 'MERN Stack' };
      case 1: // Skillsparq
        return { scale: 'Full-Stack', tier: 'Freelancing Hub', focus: 'MySQL Backend' };
      case 3: // BioMark
        return { scale: 'Mobile App', tier: 'Biometric System', focus: 'Flutter & Firebase' };
      case 4: // Simple Ecommerce
        return { scale: 'Mobile App', tier: 'E-commerce App', focus: 'React Native' };
      default:
        return { scale: 'Full-Stack', tier: 'Utility System', focus: 'General Stack' };
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <span className="font-cursive text-sb-accent text-2xl rotate-[1.5deg] inline-block mb-2">Featured Work 🌟</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-sb-house font-serif mb-4">
            Key Projects
          </h2>
          <p className="text-base md:text-lg text-sb-text-black-soft">
            Explore my featured software developments, engineered for robust performance and scaling.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => {
            const meta = getProjectMetadata(project.id);
            return (
              <motion.div
                key={project.id}
                id={`project-${project.slug}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-sb-cream/40 rounded-3xl overflow-hidden hover:bg-sb-cream/65 transition-all duration-300 border border-sb-border/40 shadow-sb-card hover:shadow-md scroll-mt-28"
              >
                {/* Project Image */}
                <div className="relative h-56 overflow-hidden bg-sb-ceramic">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sb-house/70 via-transparent to-transparent" />
                  
                  {/* Floating badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm border border-sb-border/30 px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                    <span className="text-xs font-bold text-sb-accent">{meta.tier}</span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  {/* Category tags */}
                  <div className="flex gap-2 items-center mb-3 text-xs font-bold uppercase tracking-widest text-sb-accent">
                    <span>{meta.scale}</span>
                    <span className="text-sb-border">•</span>
                    <span>{meta.focus}</span>
                  </div>

                  <h3 className="text-2xl font-bold font-serif text-sb-house mb-3 group-hover:text-sb-green transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm text-sb-text-black-soft mb-6 leading-relaxed min-h-[4.5em]">
                    {project.details}
                  </p>

                  {/* Technologies list */}
                  <div className="mb-6">
                    <p className="text-xs font-bold uppercase tracking-wider text-sb-text-black-soft mb-2">Technologies Used:</p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2.5 py-1 bg-white text-sb-house text-xs font-semibold rounded-full border border-sb-border/50 shadow-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 flex-wrap items-center pt-2 border-t border-sb-border/30">
                    <Button variant="sbFilled" size="sm" asChild>
                      <Link to={`/project/${project.slug}`}>
                        Project Details
                        <ArrowRight className="h-4 w-4 ml-1.5" />
                      </Link>
                    </Button>
                    
                    {project.demoLink && (
                      <Button variant="sbOutline" size="sm" asChild>
                        <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-1.5" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    
                    {project.githubLink1 && (
                      <Button variant="sbDarkOutline" size="sm" asChild>
                        <a href={project.githubLink1} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-1.5" />
                          Source Code
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
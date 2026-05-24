import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects } from '@/data/portfolio';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const Projects = () => {
  return (
    <section className="py-24 bg-[#000000] text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-[#ffffff] tracking-apple-tight">
            Featured Projects
          </h2>
          <p className="text-lg md:text-xl text-[#a1a1a6] max-w-2xl mx-auto font-normal">
            Showcasing innovative solutions built with modern technologies
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-[#161617] border border-[#2c2c2e] rounded-[18px] hover:scale-[1.01] transition-transform duration-300 overflow-hidden shadow-none flex flex-col justify-between"
            >
              {/* Project Image */}
              <div className="relative h-56 overflow-hidden bg-[#1d1d1f] border-b border-[#2c2c2e]">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>

              {/* Project Content */}
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-white transition-colors group-hover:text-primary">
                    {project.title}
                  </h3>
                  
                  <p className="text-[#a1a1a6] text-sm leading-relaxed mb-6">
                    {project.details}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-[#2a2a2c] text-[#f5f5f7] text-xs rounded-full border border-[#3a3a3c]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 flex-wrap pt-2">
                  <Button variant="hero" size="sm" className="px-4 py-2 text-xs h-auto" asChild>
                    <Link to={`/project/${project.slug}`}>
                      View Details
                      <ArrowRight className="h-3 w-3 ml-1" />
                    </Link>
                  </Button>
                  
                  {project.demoLink && (
                    <Button variant="outline" size="sm" className="px-4 py-2 text-xs h-auto border-[#424245] bg-transparent text-[#f5f5f7] hover:bg-[#222223] hover:text-white" asChild>
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3.5 w-3.5 mr-1" />
                        Demo
                      </a>
                    </Button>
                  )}
                  
                  {project.githubLink1 && (
                    <Button variant="outline" size="sm" className="px-4 py-2 text-xs h-auto border-[#424245] bg-transparent text-[#f5f5f7] hover:bg-[#222223] hover:text-white" asChild>
                      <a href={project.githubLink1} target="_blank" rel="noopener noreferrer">
                        <Github className="h-3.5 w-3.5 mr-1" />
                        Code
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
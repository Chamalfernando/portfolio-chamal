import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';
import { Project } from '@/data/portfolio';

interface SkillsparqDetailsProps {
  project: Project;
}

const SkillsparqDetails: React.FC<SkillsparqDetailsProps> = ({ project }) => {
  return (
    <>
      {/* Single Hero Image */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative rounded-2xl overflow-hidden shadow-2xl mb-16"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-auto"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
      </motion.div>

      {/* Project Overview with Points */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mb-16"
      >
        <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Project Overview</h2>
          <div className="text-muted-foreground leading-relaxed space-y-6">
            <p>
              A comprehensive freelancing platform featuring user authentication, real-time messaging system, 
              secure payment processing, and advanced search functionality.
            </p>
            
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Key Features</h3>
              <ul className="space-y-2 list-none">
                <li className="flex items-start">
                  <span className="text-primary mr-2">▸</span>
                  <span>User authentication and profile management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">▸</span>
                  <span>Real-time messaging system for client-freelancer communication</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">▸</span>
                  <span>Secure payment processing and escrow system</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">▸</span>
                  <span>Advanced search and filtering for finding freelancers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">▸</span>
                  <span>Project milestone tracking and management</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Technical Highlights</h3>
              <ul className="space-y-2 list-none">
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Responsive design optimized for all devices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>MySQL database with optimized queries</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>RESTful API architecture</span>
                </li>
              </ul>
            </div>
          </div>

          {/* GitHub Links */}
          {(project.githubLink2 || project.githubLink3) && (
            <div className="mt-8 pt-8 border-t border-border">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Additional Repositories</h3>
              <div className="flex flex-col gap-3">
                {project.githubLink2 && (
                  <Button variant="outline" asChild className="justify-start">
                    <a href={project.githubLink2} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Repository 2
                    </a>
                  </Button>
                )}
                {project.githubLink3 && (
                  <Button variant="outline" asChild className="justify-start">
                    <a href={project.githubLink3} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Repository 3
                    </a>
                  </Button>
                )}
              </div>
            </div>
          )}
        </div>
      </motion.div>

      {/* Additional Images Grid (if you add images later) */}
      {project.images && project.images.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-6 text-foreground">Project Screenshots</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.images.map((img, index) => (
              <div 
                key={index}
                className="relative rounded-xl overflow-hidden shadow-lg group"
              >
                <img
                  src={img}
                  alt={`${project.title} - Screenshot ${index + 1}`}
                  className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
};

export default SkillsparqDetails;

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';
import { Project } from '@/data/portfolio';

interface DefaultProjectDetailsProps {
  project: Project;
}

const DefaultProjectDetails: React.FC<DefaultProjectDetailsProps> = ({ project }) => {
  return (
    <>
      {/* Project Image(s) */}
      {project.images && project.images.length > 0 ? (
        // Multiple Images Grid
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.images.map((img, index) => (
              <div 
                key={index}
                className="relative rounded-2xl overflow-hidden shadow-2xl group"
              >
                <img
                  src={img}
                  alt={`${project.title} - Image ${index + 1}`}
                  className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
            ))}
          </div>
        </motion.div>
      ) : (
        // Single Image
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
      )}

      {/* Project Details */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="prose prose-lg max-w-none"
      >
        <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Project Overview</h2>
          <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
            {project.longDescription || project.details}
          </div>

          {/* Additional GitHub Links */}
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
    </>
  );
};

export default DefaultProjectDetails;

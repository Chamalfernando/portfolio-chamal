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
                className="relative rounded-[18px] border border-[#e0e0e0] overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.04)] bg-white group"
              >
                <img
                  src={img}
                  alt={`${project.title} - Image ${index + 1}`}
                  className="w-full h-auto transition-transform duration-300 group-hover:scale-[1.01]"
                />
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
          className="relative rounded-[18px] border border-[#e0e0e0] overflow-hidden shadow-[0_20px_45px_rgba(0,0,0,0.06)] bg-white mb-16"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto"
          />
        </motion.div>
      )}

      {/* Project Details */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="prose prose-lg max-w-none"
      >
        <div className="bg-white border border-[#e0e0e0] rounded-[18px] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
          <h2 className="text-2xl font-bold mb-6 text-[#1d1d1f]">Project Overview</h2>
          <div className="text-[#86868b] leading-relaxed whitespace-pre-line text-sm md:text-base font-normal">
            {project.longDescription || project.details}
          </div>

          {/* Additional GitHub Links */}
          {(project.githubLink2 || project.githubLink3) && (
            <div className="mt-8 pt-8 border-t border-[#e0e0e0]">
              <h3 className="text-lg font-bold mb-4 text-[#1d1d1f]">Additional Repositories</h3>
              <div className="flex flex-col gap-3">
                {project.githubLink2 && (
                  <Button variant="outline" className="justify-start rounded-full px-5 py-2 text-xs w-fit flex gap-1.5 border-[#d2d2d7] bg-white text-[#1d1d1f] hover:bg-[#f5f5f7]" asChild>
                    <a href={project.githubLink2} target="_blank" rel="noopener noreferrer">
                      <Github className="h-3.5 w-3.5" />
                      Repository 2
                    </a>
                  </Button>
                )}
                {project.githubLink3 && (
                  <Button variant="outline" className="justify-start rounded-full px-5 py-2 text-xs w-fit flex gap-1.5 border-[#d2d2d7] bg-white text-[#1d1d1f] hover:bg-[#f5f5f7]" asChild>
                    <a href={project.githubLink3} target="_blank" rel="noopener noreferrer">
                      <Github className="h-3.5 w-3.5" />
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

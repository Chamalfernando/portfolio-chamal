import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ExternalLink, Github, Home } from 'lucide-react';
import { projects } from '@/data/portfolio';
import ProjectDetailContent from '@/components/projects/ProjectDetailContent';

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Button onClick={() => navigate('/')}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f]">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-[#e0e0e0] z-50">
        <div className="container mx-auto px-6 py-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="group text-[#1d1d1f] hover:bg-[#f5f5f7] gap-2"
          >
            <Home className="h-4 w-4" />
            Home
          </Button>
        </div>
      </nav>

      {/* Project Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 text-[#1d1d1f] tracking-apple-tight">
              {project.title}
            </h1>
            <p className="text-lg md:text-xl text-[#86868b] mb-8 max-w-3xl leading-relaxed">
              {project.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              {project.demoLink && (
                <Button variant="hero" size="lg" className="px-6 py-2.5 text-sm h-auto" asChild>
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-1.5 h-4 w-4" />
                    View Demo
                  </a>
                </Button>
              )}
              {project.githubLink1 && (
                <Button variant="outline" size="lg" className="px-6 py-2.5 text-sm h-auto border-[#d2d2d7] bg-white text-[#1d1d1f] hover:bg-[#f5f5f7]" asChild>
                  <a href={project.githubLink1} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-1.5 h-4 w-4" />
                    View Code
                  </a>
                </Button>
              )}
            </div>

            {/* Technologies */}
            <div className="mb-12">
              <h3 className="text-lg font-bold mb-4 text-[#1d1d1f]">Technologies Used</h3>
              <div className="flex flex-wrap gap-2.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-white text-[#1d1d1f] rounded-full text-xs font-semibold border border-[#e0e0e0] shadow-[0_2px_8px_rgba(0,0,0,0.01)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Dynamic Project Content - Renders custom component per slug */}
          <ProjectDetailContent project={project} />

          {/* Bottom Navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <Button 
              variant="outline" 
              className="px-6 py-2.5 text-sm h-auto gap-2 border-[#d2d2d7] bg-white text-[#1d1d1f] hover:bg-[#f5f5f7]"
              onClick={() => navigate('/')}
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-[#e0e0e0] py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-xs text-[#86868b]">
            © {new Date().getFullYear()} Chamal Fernando. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ProjectDetail;

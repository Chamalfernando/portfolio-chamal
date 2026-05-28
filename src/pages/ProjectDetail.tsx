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
      <div className="min-h-screen bg-sb-cream flex items-center justify-center font-sans">
        <div className="text-center bg-white p-8 rounded-3xl border border-sb-border/40 shadow-sb-card">
          <h1 className="text-3xl font-serif font-bold text-sb-house mb-4">Recipe Not Found</h1>
          <Button variant="sbFilled" onClick={() => navigate('/')}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-sb-cream text-sb-house font-sans pb-20">
      {/* Navigation Bar - Starbucks style */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-sb-border/40 shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => navigate(`/#project-${project.slug}`)}
            className="gap-2 text-sb-accent hover:text-sb-house hover:bg-sb-ceramic/30 font-semibold"
          >
            <Home className="h-4 w-4" />
            Home
          </Button>
          <div className="w-20" />
        </div>
      </nav>

      {/* Project Hero Section */}
      <section className="pt-28 pb-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 md:p-12 border border-sb-border/40 shadow-sb-card mb-8"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-sb-accent mb-2 block">Case Study</span>
            <h1 className="text-4xl md:text-5xl font-bold font-serif text-sb-house mb-4">
              {project.title}
            </h1>
            <p className="text-base md:text-lg text-sb-text-black-soft mb-8 leading-relaxed">
              {project.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 mb-10 pb-6 border-b border-sb-border/30">
              {project.demoLink && (
                <Button variant="sbFilled" size="lg" asChild>
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              )}
              {project.githubLink1 && (
                <Button variant="sbOutline" size="lg" asChild>
                  <a href={project.githubLink1} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Source Code
                  </a>
                </Button>
              )}
            </div>

            {/* Technologies */}
            <div className="mb-6">
              <h3 className="text-xs font-bold uppercase tracking-widest text-sb-text-black-soft mb-3">Technologies:</h3>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-sb-cream text-sb-house rounded-full text-xs font-semibold border border-sb-border/50 shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Dynamic Project Content */}
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-sb-border/40 shadow-sb-card">
            <ProjectDetailContent project={project} />
          </div>

          {/* Bottom Navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <Button 
              variant="sbOutline" 
              size="lg"
              onClick={() => navigate(`/#project-${project.slug}`)}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Mini Footer */}
      <footer className="bg-sb-house border-t border-sb-house/20 py-8 text-center text-xs text-sb-text-white-soft">
        <div className="container mx-auto px-6">
          <p>© {new Date().getFullYear()} Chamal Fernando. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
};

export default ProjectDetail;

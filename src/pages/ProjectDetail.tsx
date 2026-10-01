import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
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
      {/* Navigation Header */}
      <nav className="w-full bg-white/70 backdrop-blur-md border-b border-sb-border/20 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link 
            to={`/#project-${project.slug}`} 
            className="flex items-center gap-2 group text-sb-house font-bold font-sans"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          <div className="font-cursive text-sb-accent text-xl font-bold rotate-[-1deg]">
            Project Details
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-12 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <span className="font-cursive text-sb-accent text-2xl rotate-[-1deg] inline-block mb-2">
              Case Study ☕
            </span>
            <h1 className="text-4xl md:text-5xl font-bold font-serif tracking-tight text-sb-house mb-6 leading-tight">
              {project.title}
            </h1>
            <p className="text-base md:text-lg text-sb-text-black-soft leading-relaxed">
              {project.description}
            </p>
          </motion.div>

          {/* Project Meta Card (Technologies & Actions) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-white rounded-3xl p-6 md:p-8 border border-sb-border/40 shadow-sb-card mb-8"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              {/* Technologies */}
              <div className="flex-1">
                <h3 className="text-xs font-bold uppercase tracking-widest text-sb-accent mb-3">
                  Technologies
                </h3>
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

              {/* Action Buttons */}
              {(project.demoLink || project.githubLink1) && (
                <div className="flex flex-wrap items-center gap-3 shrink-0 pt-4 md:pt-0 border-t md:border-t-0 md:border-l border-sb-border/30 md:pl-6">
                  {project.demoLink && (
                    <Button variant="sbFilled" size="default" asChild>
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  {project.githubLink1 && (
                    <Button variant="sbOutline" size="default" asChild>
                      <a href={project.githubLink1} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Source Code
                      </a>
                    </Button>
                  )}
                </div>
              )}
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
            className="mt-16 text-center"
          >
            <Link to={`/#project-${project.slug}`}>
              <Button 
                variant="sbOutline" 
                size="lg"
                className="gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

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

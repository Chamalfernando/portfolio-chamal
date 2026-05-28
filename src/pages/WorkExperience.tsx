import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, Briefcase, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { workExperiences } from '@/data/portfolio';
import workspace1 from '@/assets/workspace-1.jpg';
import workspace2 from '@/assets/workspace-2.jpg';

const WorkExperience = () => {
  // Helper to map experiences to professional tags
  const getExperienceLevel = (title: string) => {
    if (title.toLowerCase().includes('associate')) {
      return 'Full-Time Role';
    }
    return 'Internship Role';
  };

  return (
    <main className="min-h-screen bg-sb-cream text-sb-house font-sans">
      
      {/* Navigation - Professional Top-bar Style */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-sb-border/40 shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/">
            <Button variant="ghost" size="sm" className="gap-2 text-sb-accent hover:text-sb-house hover:bg-sb-ceramic/30 font-semibold">
              <Home className="w-4 h-4" />
              Home
            </Button>
          </Link>
          <div className="w-20" />
        </div>
      </nav>

      {/* Content */}
      <div className="pt-28 pb-20">
        <div className="container mx-auto px-6">
          
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 max-w-2xl mx-auto"
          >
            <span className="font-cursive text-sb-accent text-2xl rotate-[-1deg] inline-block mb-2">Professional Journey 🌟</span>
            <h2 className="text-4xl md:text-5xl font-bold font-serif tracking-tight text-sb-house mb-6 leading-tight">
              Work Experience
            </h2>
            <p className="text-base md:text-lg text-sb-text-black-soft">
              A detailed timeline of my software engineering career and professional growth milestones.
            </p>
          </motion.div>

          {/* Workspace Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-lg font-bold font-serif mb-6 text-center text-sb-green">Workplace Environments</h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-white rounded-3xl p-4 border border-sb-border/40 shadow-sb-card overflow-hidden hover:rotate-[0.5deg] transition-transform">
                <img 
                  src={workspace1} 
                  alt="Professional workspace setup 1" 
                  className="aspect-video rounded-2xl object-cover w-full"
                />
              </div>
              <div className="bg-white rounded-3xl p-4 border border-sb-border/40 shadow-sb-card overflow-hidden hover:rotate-[-0.5deg] transition-transform">
                <img 
                  src={workspace2} 
                  alt="Professional workspace setup 2" 
                  className="aspect-video rounded-2xl object-cover w-full"
                />
              </div>
            </div>
          </motion.div>

          {/* Work Experience Timeline */}
          <div className="max-w-3xl mx-auto">
            {workExperiences.map((experience, index) => {
              const roleTag = getExperienceLevel(experience.title);
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative pl-8 pb-12 border-l-2 border-sb-green/20 last:pb-0"
                >
                  {/* Timeline Node - Accent Green */}
                  <div className="absolute left-[-11px] top-0 w-6 h-6 rounded-full bg-sb-accent border-4 border-white flex items-center justify-center text-[10px] text-white font-bold" />
                  
                  <div className="bg-white rounded-3xl p-8 border border-sb-border/40 shadow-sb-card hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
                      <div>
                        {/* Role Level Tag */}
                        <div className="mb-2 inline-flex items-center gap-1 bg-sb-light text-sb-accent text-xs font-bold px-3 py-1 rounded-full border border-sb-accent/15 shadow-sm">
                          {roleTag}
                        </div>
                        
                        <h3 className="text-2xl md:text-3xl font-bold font-serif text-sb-house flex items-center gap-2.5">
                          <Briefcase className="w-6 h-6 text-sb-green" />
                          {experience.title}
                        </h3>
                        <p className="text-lg text-sb-accent font-semibold">{experience.company}</p>
                        <p className="text-xs text-sb-text-black-soft font-bold uppercase tracking-widest mt-1.5">{experience.duration}</p>
                      </div>
                    </div>
                    
                    <p className="text-sm text-sb-house mb-6 leading-relaxed border-l-2 border-sb-light pl-4 italic">
                      {experience.description}
                    </p>
                    
                    {/* Responsibilities */}
                    <div className="mb-6">
                      <h4 className="font-bold font-serif text-base mb-3 text-sb-green">Key Responsibilities:</h4>
                      <ul className="space-y-3">
                        {experience.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs text-sb-text-black-soft leading-relaxed">
                            <span className="text-sb-accent font-bold mt-0.5">•</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Technologies Used */}
                    <div>
                      <h4 className="font-bold font-serif text-base mb-3 text-sb-green">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {experience.technologies.map((tech, idx) => (
                          <span 
                            key={idx}
                            className="px-2.5 py-1 bg-sb-cream text-sb-house rounded-full text-xs font-semibold border border-sb-border/50 shadow-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-16"
          >
            <Link to="/">
              <Button variant="sbOutline" size="lg" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Simple Footer */}
      <footer className="bg-sb-house border-t border-sb-house/20 py-8 text-center text-xs text-sb-text-white-soft">
        <div className="container mx-auto px-6">
          <p>© {new Date().getFullYear()} Chamal Fernando. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
};

export default WorkExperience;

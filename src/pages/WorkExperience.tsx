import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, Briefcase, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { workExperiences } from '@/data/portfolio';
import workspace1 from '@/assets/workspace-1.jpg';
import workspace2 from '@/assets/workspace-2.jpg';

const WorkExperience = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <Home className="w-4 h-4" />
              Home
            </Button>
          </Link>
          {/* <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Work Experience
          </h1> */}
          <div className="w-20" /> {/* Spacer for alignment */}
        </div>
      </nav>

      {/* Content */}
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-tight pb-2">
              Professional Experience
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Documenting my industrial experience and professional growth in software development
            </p>
          </motion.div>

          {/* Workspace Images Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            {/* <h3 className="text-3xl font-bold mb-8 text-center text-accent">Current Workspace</h3> */}
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-4 border border-border/50 hover:border-accent/50 transition-all overflow-hidden">
                <img 
                  src={workspace1} 
                  alt="Professional workspace setup 1" 
                  className="aspect-video rounded-lg object-cover w-full"
                />
              </div>
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-4 border border-border/50 hover:border-accent/50 transition-all overflow-hidden">
                <img 
                  src={workspace2} 
                  alt="Professional workspace setup 2" 
                  className="aspect-video rounded-lg object-cover w-full"
                />
              </div>
            </div>
          </motion.div>

          {/* Work Experience Timeline */}
          <div className="max-w-4xl mx-auto">
            {workExperiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative pl-8 pb-12 border-l-2 border-accent/30 last:pb-0"
              >
                <div className="absolute left-[-13px] top-0 w-6 h-6 rounded-full bg-accent border-4 border-background" />
                
                <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 hover:bg-card/70 transition-all duration-300 border border-border/50 hover:border-accent/50 hover:shadow-glow-accent">
                  <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
                    <div>
                      <h3 className="text-3xl font-bold text-accent mb-2 flex items-center gap-2">
                        <Briefcase className="w-7 h-7" />
                        {experience.title}
                      </h3>
                      <p className="text-xl text-foreground font-semibold">{experience.company}</p>
                      <p className="text-muted-foreground mt-1">{experience.duration}</p>
                    </div>
                  </div>
                  
                  <p className="text-foreground text-lg mb-6 leading-relaxed">{experience.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-bold text-lg mb-3 text-accent">Key Responsibilities:</h4>
                    <ul className="space-y-2">
                      {experience.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-accent mt-1.5">▸</span>
                          <span className="text-foreground">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-lg mb-3 text-accent">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-3">
                      {experience.technologies.map((tech, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm border border-accent/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-16"
          >
            <Link to="/">
              <Button variant="outline" size="lg" className="gap-2">
                <ArrowLeft className="w-5 h-5" />
                Back to Home
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-card/30 backdrop-blur-sm border-t border-border/50 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Chamal Fernando. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default WorkExperience;

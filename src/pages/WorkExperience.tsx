import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, Briefcase, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { workExperiences } from '@/data/portfolio';
import workspace1 from '@/assets/workspace-1.jpg';
import workspace2 from '@/assets/workspace-2.jpg';

const WorkExperience = () => {
  return (
    <main className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#e0e0e0]">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/">
            <Button variant="ghost" size="sm" className="gap-2 text-[#1d1d1f] hover:bg-[#f5f5f7]">
              <Home className="w-4 h-4" />
              Home
            </Button>
          </Link>
          <div className="w-20" /> {/* Spacer for alignment */}
        </div>
      </nav>

      {/* Content */}
      <div className="pt-28 pb-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 text-[#1d1d1f] tracking-apple-tight leading-tight pb-2">
              Professional Experience
            </h2>
            <p className="text-lg md:text-xl text-[#86868b] max-w-3xl mx-auto font-normal">
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
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <div className="bg-white border border-[#e0e0e0] rounded-[18px] p-4 shadow-[0_4px_20px_rgba(0,0,0,0.02)] overflow-hidden">
                <img 
                  src={workspace1} 
                  alt="Professional workspace setup 1" 
                  className="aspect-video rounded-lg object-cover w-full"
                />
              </div>
              <div className="bg-white border border-[#e0e0e0] rounded-[18px] p-4 shadow-[0_4px_20px_rgba(0,0,0,0.02)] overflow-hidden">
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
                className="relative pl-8 pb-12 border-l border-[#d2d2d7] last:pb-0"
              >
                <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-[#0066cc]" />
                
                <div className="bg-white border border-[#e0e0e0] rounded-[18px] p-8 hover:scale-[1.005] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
                  <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-[#1d1d1f] mb-1.5 flex items-center gap-2">
                        <Briefcase className="w-6 h-6 text-[#86868b]" />
                        {experience.title}
                      </h3>
                      <p className="text-base text-[#1d1d1f] font-semibold">{experience.company}</p>
                      <p className="text-xs text-[#86868b] mt-0.5">{experience.duration}</p>
                    </div>
                  </div>
                  
                  <p className="text-[#1d1d1f] text-base mb-6 leading-relaxed font-normal">{experience.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-bold text-sm mb-3 text-[#1d1d1f]">Key Responsibilities:</h4>
                    <ul className="space-y-2.5">
                      {experience.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm">
                          <span className="text-[#0066cc] mt-1.5 text-xs">▸</span>
                          <span className="text-[#303033] leading-relaxed">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-sm mb-3 text-[#1d1d1f]">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2.5">
                      {experience.technologies.map((tech, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-[#f5f5f7] text-[#1d1d1f] border border-[#e0e0e0] rounded-full text-xs font-semibold"
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
              <Button variant="outline" className="px-6 py-2.5 text-sm h-auto gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-[#e0e0e0] py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-xs text-[#86868b]">
            © {new Date().getFullYear()} Chamal Fernando. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default WorkExperience;

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-image.jpg';
import profileImage from '@/assets/profile-image.jpg';
import { useTypewriter } from '@/hooks/use-typewriter';

const Hero = () => {
  const titles = [
    'Full-Stack Developer',
    'Frontend Developer',
    'Backend Developer',
    'Mobile App Developer',
    'Software Engineer'
  ];
  const currentTitle = useTypewriter(titles, 100, 80, 2000);
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden bg-[#ffffff] text-[#1d1d1f]">
      {/* Background Subtle Canvas */}
      <div className="absolute inset-0 bg-[#f5f5f7] opacity-60" />
      
      {/* Main content */}
      <div className="container mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="w-48 h-48 md:w-56 md:h-56 mx-auto rounded-full overflow-hidden border border-[#d2d2d7] shadow-[0_15px_30px_rgba(0,0,0,0.05)] bg-[#ffffff]">
              <img 
                src={profileImage} 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.h1
            className="font-display text-5xl md:text-7xl font-bold mb-6 text-[#1d1d1f] tracking-apple-hero min-h-[1.2em]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {currentTitle}
            <span className="animate-pulse">|</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-[#86868b] mb-10 leading-relaxed font-normal max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Computer Science Graduate from University of Colombo School of Computing, passionate about creating 
            innovative software solutions with modern technologies
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link to="/work-experience">
              <Button variant="hero" size="lg" className="px-6 py-2.5 text-sm h-auto">
                Professional Experience
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/certifications">
              <Button variant="outline" size="lg" className="px-6 py-2.5 text-sm h-auto">
                My Certifications
              </Button>
            </Link>
            <a href="/cv.txt" download className="text-[#0066cc] hover:underline flex items-center gap-1 text-sm font-normal py-2 px-4">
              <Download className="h-4 w-4" />
              Download CV
            </a>
          </motion.div>

          <motion.div 
            className="flex justify-center space-x-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a
              target="_blank"
              rel="noopener noreferrer" 
              href="https://github.com/Chamalfernando" className="p-2.5 rounded-full bg-white border border-[#e0e0e0] hover:bg-[#f5f5f7] hover:border-[#d2d2d7] text-[#1d1d1f] transition-all duration-200 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:scale-105">
              <Github className="h-5 w-5" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer" 
              href="https://linkedin.com/in/chamal-fernando" className="p-2.5 rounded-full bg-white border border-[#e0e0e0] hover:bg-[#f5f5f7] hover:border-[#d2d2d7] text-[#1d1d1f] transition-all duration-200 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:scale-105">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:chamaldeshitha2001@gmail.com" className="p-2.5 rounded-full bg-white border border-[#e0e0e0] hover:bg-[#f5f5f7] hover:border-[#d2d2d7] text-[#1d1d1f] transition-all duration-200 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:scale-105">
              <Mail className="h-5 w-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <div className="w-6 h-10 border-2 border-[#86868b]/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#86868b]/60 rounded-full mt-2 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
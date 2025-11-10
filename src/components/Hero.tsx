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
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-hero-gradient opacity-20" />
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-1s' }} />
      </div>

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
            <div className="w-60 h-60 md:w-50 md:h-50 mx-auto rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
              <img 
                src={profileImage} 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent min-h-[1.2em]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {currentTitle}
            <span className="animate-pulse">|</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Computer Science Graduate from University of Colombo School of Computing, passionate about creating 
            innovative software {/*web and mobile*/} solutions with modern technologies
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link to="/work-experience">
              <Button variant="hero" size="lg" className="group">
                Professional Experience
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <a href="/cv.txt" download>
              <Button variant="hero" size="lg" className="group">
                <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Download CV
              </Button>
            </a>
            <Link to="/certifications">
              <Button variant="hero" size="lg" className="group">
                My Certifications
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>

          <motion.div 
            className="flex justify-center space-x-6 pb-20 sm:pb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a
              target="_blank"
              rel="noopener noreferrer" 
              href="https://github.com/Chamalfernando" className="p-3 rounded-full bg-card/50 backdrop-blur-sm hover:bg-accent/20 transition-all duration-300 hover:scale-110">
              <Github className="h-6 w-6" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer" 
              href="https://linkedin.com/in/chamal-fernando" className="p-3 rounded-full bg-card/50 backdrop-blur-sm hover:bg-accent/20 transition-all duration-300 hover:scale-110">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="mailto:chamaldeshitha2001@gmail.com" className="p-3 rounded-full bg-card/50 backdrop-blur-sm hover:bg-accent/20 transition-all duration-300 hover:scale-110">
              <Mail className="h-6 w-6" />
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
        <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
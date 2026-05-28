import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import profileImage from '@/assets/profile-image.png';
import { useTypewriter } from '@/hooks/use-typewriter';

const Hero = () => {
  const titles = [
    'Software Engineer',
    'Full-Stack Developer',
    'Frontend Developer',
    'Backend Developer',
    'UCSC CS Graduate'
  ];
  const currentTitle = useTypewriter(titles, 100, 80, 2000);

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden bg-sb-cream pt-20">
      {/* Background blocks matching clean café/office design */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-sb-house hidden lg:block z-0" />
      
      {/* Decorative details */}
      <div className="absolute top-10 left-10 w-48 h-48 bg-sb-light/10 rounded-full blur-3xl animate-float pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-sb-accent/5 rounded-full blur-3xl animate-float pointer-events-none" style={{ animationDelay: '-1.5s' }} />

      <div className="container mx-auto px-6 z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
          
          {/* Left Column: Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col justify-center text-left"
          >
            {/* Cursive handwritten name accent */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-cursive text-sb-accent text-3xl mb-3 rotate-[-2deg] origin-left font-bold"
            >
              Chamal Fernando
            </motion.div>

            {/* Serif chalkboard headline */}
            <motion.h1
              className="text-4xl md:text-6xl font-bold tracking-tight text-sb-house font-serif mb-4 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Great code is just the beginning
            </motion.h1>

            {/* Typewriter subtitle */}
            <motion.div
              className="text-lg md:text-xl font-bold tracking-widest text-sb-green uppercase font-sans mb-6 min-h-[1.5em]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {currentTitle}
              <span className="animate-pulse">|</span>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-base md:text-lg text-sb-text-black-soft mb-8 leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Computer Science Graduate from the University of Colombo School of Computing with 1+ years of hands-on experience in software engineering in the FinTech domain. Dedicated to building robust, scalable enterprise solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 items-center mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link to="/work-experience">
                <Button variant="sbFilled" size="lg" className="shadow-sb-card">
                  Explore Experience
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <a href="/cv.txt" download>
                <Button variant="sbOutline" size="lg">
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
              </a>
              <Link to="/certifications">
                <Button variant="sbDarkOutline" size="lg">
                  Certifications Card
                </Button>
              </Link>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              className="flex items-center space-x-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <span className="text-xs font-bold uppercase tracking-widest text-sb-text-black-soft mr-2">Connect:</span>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/Chamalfernando"
                className="w-10 h-10 rounded-full border border-sb-border hover:bg-sb-ceramic flex items-center justify-center transition-all hover:scale-105 active:scale-95 text-sb-house bg-white shadow-sm"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://linkedin.com/in/chamal-fernando"
                className="w-10 h-10 rounded-full border border-sb-border hover:bg-sb-ceramic flex items-center justify-center transition-all hover:scale-105 active:scale-95 text-sb-house bg-white shadow-sm"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:chamaldeshitha2001@gmail.com"
                className="w-10 h-10 rounded-full border border-sb-border hover:bg-sb-ceramic flex items-center justify-center transition-all hover:scale-105 active:scale-95 text-sb-house bg-white shadow-sm"
              >
                <Mail className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Imagery */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center lg:justify-end z-10"
          >
            <div className="relative group max-w-sm lg:max-w-none">
              {/* Stylized background circle */}
              <div className="absolute inset-0 bg-sb-light rounded-full scale-95 blur-2xl opacity-40 group-hover:scale-100 transition-transform duration-500" />
              
              {/* Product Visual wrapper */}
              <div className="relative bg-white p-6 rounded-3xl shadow-sb-card border border-sb-border/40 overflow-hidden transform hover:-rotate-1 transition-transform duration-500">
                <div className="w-72 h-72 sm:w-80 sm:h-80 md:w-88 md:h-88 overflow-hidden rounded-2xl bg-sb-cream border border-sb-border/20">
                  <img
                    src={profileImage}
                    alt="Chamal Fernando"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                
                {/* Physical-feeling label tag */}
                <div className="mt-4 flex justify-between items-center bg-sb-cream/80 backdrop-blur-sm px-4 py-3 rounded-xl border border-sb-border/30">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-sb-text-black-soft font-bold">Featured Role</p>
                    <p className="font-serif font-bold text-sb-house">Software Engineer</p>
                  </div>
                  <span className="px-3 py-1 bg-sb-accent text-white font-bold text-xs rounded-full shadow-sm">
                    Open to Work
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Down arrow indicator styled like a tag scroll */}
      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 cursor-pointer z-10 hidden sm:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <div className="flex flex-col items-center gap-1">
          <span className="text-[10px] font-bold uppercase tracking-widest text-sb-text-black-soft">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-sb-accent rounded-full flex justify-center">
            <div className="w-1 h-3 bg-sb-accent rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
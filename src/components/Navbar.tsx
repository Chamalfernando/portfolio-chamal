import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2, Sparkles, FileText, Briefcase, Award, BookOpen, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', href: '/#hero' },
    { name: 'Skills', href: '/#skills' },
    { name: 'Education', href: '/#education' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Work Experience', href: '/work-experience' },
    { name: 'Certifications', href: '/certifications' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      const targetId = href.replace('/#', '');
      if (location.pathname === '/') {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-sb-border/30 py-3'
          : 'bg-white/70 backdrop-blur-sm border-b border-sb-border/20 py-4'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full bg-sb-green text-white flex items-center justify-center font-bold font-serif text-xl shadow-md group-hover:bg-sb-accent transition-colors">
            CF
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sb-house font-sans text-base tracking-tight leading-none">
              Chamal Fernando
            </span>
            <span className="text-xs font-medium text-sb-accent font-sans mt-0.5">
              Software Engineer
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const isExternalPage = !link.href.startsWith('/#');
            const isActive = isExternalPage && location.pathname === link.href;

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-3 py-2 rounded-full text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-sb-green text-white shadow-xs'
                    : 'text-sb-house/80 hover:text-sb-house hover:bg-sb-ceramic/50'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* CTA Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <a href="/cv.txt" download className="hidden sm:inline-block">
            <Button
              variant="sbFilled"
              size="sm"
              className="rounded-full text-xs font-bold gap-1.5 px-4"
            >
              <FileText className="w-3.5 h-3.5" />
              Resume
            </Button>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-sb-house hover:bg-sb-ceramic/50 transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/95 backdrop-blur-md border-b border-sb-border/30 overflow-hidden"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col gap-2">
              {navLinks.map((link) => {
                const isExternalPage = !link.href.startsWith('/#');
                const isActive = isExternalPage && location.pathname === link.href;

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      handleNavClick(e, link.href);
                      setMobileMenuOpen(false);
                    }}
                    className={`px-4 py-3 rounded-xl text-base font-semibold transition-all flex items-center justify-between ${
                      isActive
                        ? 'bg-sb-green text-white'
                        : 'text-sb-house hover:bg-sb-ceramic/40'
                    }`}
                  >
                    <span>{link.name}</span>
                  </a>
                );
              })}
              <div className="pt-2 border-t border-sb-border/20 mt-2 flex justify-between items-center">
                <a href="/cv.txt" download className="w-full">
                  <Button variant="sbFilled" className="w-full justify-center gap-2">
                    <FileText className="w-4 h-4" />
                    Download Resume
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, ShieldAlert, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import transcriptImage from '@/assets/academic-transcript.jpg';

const AcademicTranscript = () => {
  useEffect(() => {
    // Disable right-click
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    // Disable keyboard shortcuts (Ctrl+P for print, Ctrl+S for save)
    const handleKeyDown = (e: KeyboardEvent) => {
      // Disable Ctrl+P (Print)
      if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
        e.preventDefault();
        return false;
      }
      
      // Disable Ctrl+S (Save)
      if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
        return false;
      }

      // Disable F11,F12 (Dev Tools / Fullscreen)
      if (e.key === 'F12' || e.key === 'F11') {
        e.preventDefault();
        return false;
      }

      // Disable Print Screen
      if (e.key.toLowerCase() === 'printscreen') {
        e.preventDefault();
        return false;
      }
    };

    // Add CSS to prevent selection
    document.body.style.userSelect = 'none';
    document.body.style.webkitUserSelect = 'none';
    
    // Disable print media
    const style = document.createElement('style');
    style.innerHTML = `
      @media print {
        body { display: none !important; }
      }
    `;
    document.head.appendChild(style);

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.userSelect = '';
      document.body.style.webkitUserSelect = '';
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Multiple Security Watermarks - These will appear in any screenshot */}
      <div className="fixed inset-0 pointer-events-none z-40 opacity-10">
        <div className="absolute inset-0 flex items-center justify-center transform rotate-[-45deg]">
          <p className="text-9xl font-bold text-destructive">CONFIDENTIAL</p>
        </div>
      </div>
      
      {/* Additional watermark layer */}
      <div className="fixed inset-0 pointer-events-none z-40 opacity-5">
        <div className="absolute top-1/4 left-1/4 transform rotate-[-30deg]">
          <p className="text-6xl font-bold text-destructive">PROTECTED DOCUMENT</p>
        </div>
        <div className="absolute bottom-1/4 right-1/4 transform rotate-[30deg]">
          <p className="text-6xl font-bold text-destructive">DO NOT COPY</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <Home className="w-4 h-4" />
              Home
            </Button>
          </Link>
          <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Academic Transcript
          </h1>
          <div className="w-20" />
        </div>
      </nav>

      {/* Content */}
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-3 bg-destructive/10 text-destructive px-6 py-3 rounded-full mb-6 border border-destructive/30">
              <ShieldAlert className="w-5 h-5" />
              <span className="font-semibold">Protected Document - No Downloads</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Academic Transcript
            </h2>
            <p className="text-lg text-muted-foreground">
              University of Colombo School of Computing
            </p>
          </motion.div>

          {/* Transcript Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 relative"
          >
            {/* Watermark overlay on content */}
            <div className="absolute inset-0 pointer-events-none opacity-5 flex items-center justify-center">
              <p className="text-6xl font-bold transform rotate-[-30deg]">CONFIDENTIAL</p>
            </div>

            {/* Transcript image */}
            <div className="relative">
              <img 
                src={transcriptImage} 
                alt="Academic Transcript" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>

            {/* Security Notice */}
            <div className="mt-6 p-4 bg-destructive/5 rounded-lg border border-destructive/20">
              <p className="text-sm text-muted-foreground text-center">
                <ShieldAlert className="inline-block w-4 h-4 mr-2" />
                This document is view-only and protected from unauthorized copying, downloading, or printing.
              </p>
            </div>
          </motion.div>

          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
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

export default AcademicTranscript;

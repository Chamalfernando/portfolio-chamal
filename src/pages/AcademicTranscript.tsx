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
    <main className="min-h-screen bg-sb-cream text-sb-house font-sans relative overflow-hidden">
      {/* Multiple Security Watermarks - These will appear in any screenshot */}
      <div className="fixed inset-0 pointer-events-none z-40 opacity-[0.07]">
        <div className="absolute inset-0 flex items-center justify-center transform rotate-[-45deg]">
          <p className="text-9xl font-bold text-destructive">CONFIDENTIAL</p>
        </div>
      </div>
      
      {/* Additional watermark layer */}
      <div className="fixed inset-0 pointer-events-none z-40 opacity-[0.03]">
        <div className="absolute top-1/4 left-1/4 transform rotate-[-30deg]">
          <p className="text-6xl font-bold text-destructive">PROTECTED DOCUMENT</p>
        </div>
        <div className="absolute bottom-1/4 right-1/4 transform rotate-[30deg]">
          <p className="text-6xl font-bold text-destructive">DO NOT COPY</p>
        </div>
      </div>

      {/* Navigation */}
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
        <div className="container mx-auto px-6 max-w-4xl">
          
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-destructive/10 text-destructive px-5 py-2 rounded-full mb-6 border border-destructive/20 text-xs font-bold uppercase tracking-wider">
              <ShieldAlert className="w-4 h-4" />
              <span>Protected Document</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold font-serif tracking-tight text-sb-house mb-3">
              Academic Transcript
            </h2>
            <p className="text-base md:text-lg text-sb-text-black-soft font-semibold">
              University of Colombo School of Computing
            </p>
          </motion.div>

          {/* Transcript Content Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-6 md:p-8 border border-sb-border/40 shadow-sb-card relative"
          >
            {/* Watermark overlay on content */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] flex items-center justify-center">
              <p className="text-7xl font-bold transform rotate-[-30deg]">CONFIDENTIAL</p>
            </div>

            {/* Transcript image */}
            <div className="relative overflow-hidden rounded-2xl border border-sb-border/30">
              <img 
                src={transcriptImage} 
                alt="Academic Transcript" 
                className="w-full h-auto shadow-sm"
              />
            </div>

            {/* Security Notice */}
            <div className="mt-6 p-4 bg-destructive/5 rounded-2xl border border-destructive/10">
              <p className="text-xs text-sb-text-black-soft text-center flex items-center justify-center gap-2">
                <ShieldAlert className="w-4 h-4 text-destructive" />
                <span>This document is view-only and protected from unauthorized copying, or printing.</span>
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

export default AcademicTranscript;

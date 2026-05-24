import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, ExternalLink, Calendar, Award, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { certificationCategories } from '@/data/portfolio';

const Certifications = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const toggleCategory = (institution: string) => {
    setExpandedCategory(expandedCategory === institution ? null : institution);
  };

  return (
    <div className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f]">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#e0e0e0]">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/">
              <Button variant="ghost" size="sm" className="gap-2 text-[#1d1d1f] hover:bg-[#f5f5f7]">
                <Home className="h-4 w-4" />
                Home
              </Button>
            </Link>
            <div className="w-20" /> {/* Spacer for centering */}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 text-[#1d1d1f] tracking-apple-tight leading-tight pb-2">
            Professional Certifications
          </h2>
          <p className="text-lg md:text-xl text-[#86868b] max-w-3xl mx-auto font-normal">
            A showcase of my continuous learning journey and professional development through various courses and certifications
          </p>
        </motion.div>

        {/* Certifications by Institution */}
        <div className="max-w-4xl mx-auto space-y-6">
          {certificationCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.institution}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-white border border-[#e0e0e0] rounded-[18px] overflow-hidden hover:border-[#d2d2d7] transition-all shadow-[0_4px_20px_rgba(0,0,0,0.02)]"
            >
              {/* Category Header */}
              <button
                onClick={() => toggleCategory(category.institution)}
                className="w-full p-6 flex items-center justify-between hover:bg-[#fafafc] transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="text-3xl p-2 bg-[#f5f5f7] rounded-full">{category.logo}</div>
                  <div className="text-left">
                    <h3 className="text-lg font-bold text-[#1d1d1f]">{category.institution}</h3>
                    <p className="text-xs text-[#86868b] mt-0.5">
                      {category.certifications.length} {category.certifications.length === 1 ? 'Certification' : 'Certifications'}
                    </p>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: expandedCategory === category.institution ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="h-5 w-5 text-[#0066cc]" />
                </motion.div>
              </button>

              {/* Certifications List */}
              <AnimatePresence>
                {expandedCategory === category.institution && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden bg-white border-t border-[#e0e0e0]"
                  >
                    <div className="p-6 space-y-4">
                      {category.certifications.map((cert, certIndex) => (
                        <motion.div
                          key={certIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: certIndex * 0.1 }}
                          className="bg-[#f5f5f7] rounded-[11px] p-6 border border-[#e0e0e0] hover:border-[#d2d2d7] transition-all group"
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <Award className="h-4.5 w-4.5 text-[#0066cc]" />
                                <h4 className="text-base font-bold text-[#1d1d1f] group-hover:text-[#0066cc] transition-colors">
                                  {cert.name}
                                </h4>
                              </div>
                              
                              <p className="text-xs text-[#86868b] mb-2.5">
                                Issued by: <span className="font-semibold text-[#1d1d1f]">{cert.institution}</span>
                              </p>
                              
                              <div className="flex items-center gap-1.5 text-xs text-[#86868b] mb-3">
                                <Calendar className="h-3.5 w-3.5" />
                                {cert.issueDate}
                              </div>
                              
                              <p className="text-xs md:text-sm text-[#86868b] leading-relaxed mb-4">
                                {cert.description}
                              </p>
                              
                              <a
                                href={cert.credentialUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-[#0066cc] hover:underline font-semibold text-xs"
                              >
                                View Credential
                                <ExternalLink className="h-3 w-3" />
                              </a>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-[18px] p-6 border border-[#e0e0e0] text-center hover:scale-[1.01] transition-all shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
            <div className="text-4xl font-bold text-[#0066cc] mb-1.5">
              {certificationCategories.reduce((acc, cat) => acc + cat.certifications.length, 0)}
            </div>
            <p className="text-xs text-[#86868b] font-medium">Total Certifications</p>
          </div>
          <div className="bg-white rounded-[18px] p-6 border border-[#e0e0e0] text-center hover:scale-[1.01] transition-all shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
            <div className="text-4xl font-bold text-[#0066cc] mb-1.5">
              {certificationCategories.length}
            </div>
            <p className="text-xs text-[#86868b] font-medium">Institutions</p>
          </div>
          <div className="bg-white rounded-[18px] p-6 border border-[#e0e0e0] text-center hover:scale-[1.01] transition-all shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
            <div className="text-4xl font-bold text-[#0066cc] mb-1.5">
              2024
            </div>
            <p className="text-xs text-[#86868b] font-medium">Latest Year</p>
          </div>
        </motion.div>
        
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

      {/* Footer */}
      <footer className="bg-white border-t border-[#e0e0e0] mt-20">
        <div className="container mx-auto px-6 py-8">
          <p className="text-center text-xs text-[#86868b]">
            © {new Date().getFullYear()} Chamal Fernando. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Certifications;

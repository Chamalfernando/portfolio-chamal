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
    <div className="min-h-screen bg-background">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/">
              <Button variant="ghost" size="sm" className="gap-2">
                <Home className="h-4 w-4" />
                Home
              </Button>
            </Link>
            {/* <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              My Certifications
            </h1> */}
            <div className="w-20" /> {/* Spacer for centering */}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-tight pb-2">
            Professional Certifications
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my continuous learning journey and professional development through various courses and certifications
          </p>
        </motion.div>

        {/* Certifications by Institution */}
        <div className="max-w-5xl mx-auto space-y-6">
          {certificationCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.institution}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 overflow-hidden hover:border-accent/30 transition-all"
            >
              {/* Category Header */}
              <button
                onClick={() => toggleCategory(category.institution)}
                className="w-full p-6 flex items-center justify-between hover:bg-accent/5 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="text-4xl">{category.logo}</div>
                  <div className="text-left">
                    <h3 className="text-2xl font-bold text-accent">{category.institution}</h3>
                    <p className="text-sm text-muted-foreground">
                      {category.certifications.length} {category.certifications.length === 1 ? 'Certification' : 'Certifications'}
                    </p>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: expandedCategory === category.institution ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="h-6 w-6 text-accent" />
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
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 space-y-4">
                      {category.certifications.map((cert, certIndex) => (
                        <motion.div
                          key={certIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: certIndex * 0.1 }}
                          className="bg-background/50 rounded-xl p-6 border border-border/30 hover:border-accent/50 hover:shadow-glow-accent/10 hover:shadow-lg transition-all group"
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <Award className="h-5 w-5 text-accent" />
                                <h4 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors">
                                  {cert.name}
                                </h4>
                              </div>
                              
                              <p className="text-sm text-muted-foreground mb-3">
                                Issued by: <span className="font-medium text-foreground">{cert.institution}</span>
                              </p>
                              
                              <div className="flex items-center gap-2 text-sm text-accent mb-3">
                                <Calendar className="h-4 w-4" />
                                {cert.issueDate}
                              </div>
                              
                              <p className="text-muted-foreground leading-relaxed mb-4">
                                {cert.description}
                              </p>
                              
                              <a
                                href={cert.credentialUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-medium text-sm group/link"
                              >
                                <ExternalLink className="h-4 w-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                                View Credential
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
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50 text-center hover:border-accent/50 hover:shadow-glow-accent/10 hover:shadow-lg transition-all">
            <div className="text-4xl font-bold text-accent mb-2">
              {certificationCategories.reduce((acc, cat) => acc + cat.certifications.length, 0)}
            </div>
            <p className="text-muted-foreground">Total Certifications</p>
          </div>
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50 text-center hover:border-accent/50 hover:shadow-glow-accent/10 hover:shadow-lg transition-all">
            <div className="text-4xl font-bold text-accent mb-2">
              {certificationCategories.length}
            </div>
            <p className="text-muted-foreground">Institutions</p>
          </div>
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50 text-center hover:border-accent/50 hover:shadow-glow-accent/10 hover:shadow-lg transition-all">
            <div className="text-4xl font-bold text-accent mb-2">
              2024
            </div>
            <p className="text-muted-foreground">Latest Year</p>
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
                <Button variant="outline" size="lg" className="gap-2">
                <ArrowLeft className="w-5 h-5" />
                Back to Home
                </Button>
            </Link>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="bg-card/30 backdrop-blur-sm border-t border-border/50 mt-20">
        <div className="container mx-auto px-6 py-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Chamal Fernando. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Certifications;

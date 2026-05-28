import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, ExternalLink, Calendar, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { certificationCategories } from '@/data/portfolio';

const Certifications = () => {
  // Total counts
  const totalCerts = certificationCategories.reduce((acc, cat) => acc + cat.certifications.length, 0);
  const totalInstitutions = certificationCategories.length;

  // Visual themes for the physical card overlays
  const cardGradients: Record<string, string> = {
    "LinkedIn Learning": "from-sb-green to-sb-accent",
    "Coursera": "from-sb-house to-sb-uplift",
    "Microsoft Learn": "from-sb-gold to-sb-gold-light"
  };

  return (
    <main className="min-h-screen bg-sb-cream text-sb-house font-sans pb-20">
      
      {/* Navigation Bar - Professional style */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-sb-border/40 shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/">
            <Button variant="ghost" size="sm" className="gap-2 text-sb-accent hover:text-sb-house hover:bg-sb-ceramic/30 font-semibold">
              <Home className="h-4 w-4" />
              Home
            </Button>
          </Link>
          <div className="w-20" />
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-6 pt-28">
        
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <span className="font-cursive text-sb-accent text-2xl rotate-[1deg] inline-block mb-2">Credentials Portfolio 🎓</span>
          <h2 className="text-4xl md:text-5xl font-bold font-serif tracking-tight text-sb-house mb-6 leading-tight">
            Professional Certifications
          </h2>
          <p className="text-base md:text-lg text-sb-text-black-soft">
            Explore my continuous learning credentials and professional development course archives.
          </p>
        </motion.div>

        {/* Certificate Categories Stack */}
        <div className="max-w-5xl mx-auto space-y-16">
          {certificationCategories.map((category, categoryIndex) => {
            const cardTheme = cardGradients[category.institution] || "from-sb-green to-sb-accent";
            
            return (
              <div key={category.institution} className="space-y-6">
                
                {/* Category Header */}
                <div className="border-b border-sb-border/30 pb-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{category.logo}</span>
                    <h3 className="text-2xl font-serif font-bold text-sb-house">{category.institution}</h3>
                  </div>
                  <span className="text-xs font-bold bg-sb-light text-sb-accent px-3 py-1 rounded-full border border-sb-accent/15">
                    {category.certifications.length} Course{category.certifications.length > 1 ? 's' : ''}
                  </span>
                </div>

                {/* Certificates Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.certifications.map((cert, certIndex) => (
                    <motion.div
                      key={certIndex}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: certIndex * 0.05 }}
                      whileHover={{ y: -6, scale: 1.02 }}
                      className="group bg-white rounded-3xl border border-sb-border/40 shadow-sb-card hover:shadow-md transition-all flex flex-col justify-between min-h-[340px]"
                    >
                      {/* Illustrated Card Top Portion */}
                      <div className={`h-36 bg-gradient-to-br ${cardTheme} p-5 relative overflow-hidden flex flex-col justify-between text-white`}>
                        {/* Decorative vectors */}
                        <div className="absolute right-0 bottom-0 top-0 w-2/3 bg-white/5 rounded-full scale-150 blur-xl pointer-events-none" />
                        <div className="absolute left-[-20px] top-[-20px] w-24 h-24 bg-black/5 rounded-full blur-md pointer-events-none" />

                        {/* Top bar */}
                        <div className="flex justify-between items-start z-10">
                          <Award className="h-6 w-6 text-sb-gold" />
                          <span className="text-[10px] uppercase font-bold tracking-widest text-white/80 bg-black/15 px-2.5 py-0.5 rounded-md">
                            Verified
                          </span>
                        </div>

                        {/* Certificate Name on Card */}
                        <h4 className="text-base font-serif font-bold tracking-tight leading-tight line-clamp-2 drop-shadow-sm z-10">
                          {cert.name}
                        </h4>
                      </div>

                      {/* Details Area */}
                      <div className="p-6 flex-1 flex flex-col justify-between">
                        <div>
                          {/* Issue Date */}
                          <div className="flex items-center gap-1.5 text-xs text-sb-accent font-bold mb-3">
                            <Calendar className="h-3.5 w-3.5" />
                            <span>Issued: {cert.issueDate}</span>
                          </div>

                          {/* Description */}
                          <p className="text-xs text-sb-text-black-soft leading-relaxed line-clamp-3 mb-6">
                            {cert.description}
                          </p>
                        </div>

                        {/* Action Link */}
                        <div className="pt-3 border-t border-sb-border/30">
                          <Button variant="sbOutline" size="sm" className="w-full flex items-center justify-center gap-2" asChild>
                            <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4" />
                              View Credential
                            </a>
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

        {/* Stats dashboard footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 bg-sb-house text-white rounded-3xl p-8 max-w-4xl mx-auto border border-sb-house/35 shadow-sb-card grid grid-cols-1 md:grid-cols-3 gap-6 text-center"
        >
          <div className="flex flex-col justify-center">
            <p className="text-4xl font-bold text-sb-gold mb-1">
              {totalCerts}
            </p>
            <p className="text-xs text-sb-text-white-soft uppercase tracking-widest font-bold">Total Certifications</p>
          </div>
          <div className="flex flex-col justify-center border-y md:border-y-0 md:border-x border-white/10 py-6 md:py-0">
            <p className="text-4xl font-bold text-sb-gold mb-1">
              {totalInstitutions}
            </p>
            <p className="text-xs text-sb-text-white-soft uppercase tracking-widest font-bold">Institutions</p>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-4xl font-bold text-sb-gold mb-1">
              2025
            </p>
            <p className="text-xs text-sb-text-white-soft uppercase tracking-widest font-bold">Active Learning Streak</p>
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
            <Button variant="sbOutline" size="lg" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>
        </motion.div>

      </div>

      {/* Mini Footer */}
      <footer className="bg-sb-house border-t border-sb-house/20 py-8 text-center text-xs text-sb-text-white-soft mt-20">
        <div className="container mx-auto px-6">
          <p>© {new Date().getFullYear()} Chamal Fernando. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
};

export default Certifications;

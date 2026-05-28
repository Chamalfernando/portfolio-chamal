import { Link } from 'react-router-dom';
import { Mail, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-sb-house text-white border-t border-sb-house/20">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand/About Section */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold tracking-tight text-white mb-4 font-sans">
              Chamal Fernando
            </h3>
            <p className="text-sb-text-white-soft text-sm leading-relaxed max-w-sm mb-6">
              Computer Science Graduate from the University of Colombo School of Computing with 1+ years of hands-on experience in software engineering in the FinTech domain.
            </p>
            <div className="flex gap-4">
              <a
                href="mailto:chamaldeshitha2001@gmail.com"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all active:scale-95"
                aria-label="Email"
              >
                <Mail className="w-4 h-4 text-white" />
              </a>
              <a
                href="https://linkedin.com/in/chamal-fernando"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all active:scale-95"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-white" />
              </a>
              <a
                href="https://github.com/Chamalfernando"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all active:scale-95"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold tracking-widest uppercase text-white mb-4">
              Developer Menu
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-sb-text-white-soft hover:text-white transition-colors text-sm font-semibold">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/work-experience" className="text-sb-text-white-soft hover:text-white transition-colors text-sm font-semibold">
                  Experience Levels
                </Link>
              </li>
              <li>
                <Link to="/certifications" className="text-sb-text-white-soft hover:text-white transition-colors text-sm font-semibold">
                  Certifications Card
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sb-text-white-soft hover:text-white transition-colors text-sm font-semibold">
                  Tech Blog & Docs
                </Link>
              </li>
            </ul>
          </div>

          {/* About/Community */}
          <div>
            <h4 className="text-sm font-bold tracking-widest uppercase text-white mb-4">
              Contact & Resume
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="/cv.txt" download className="text-sb-text-white-soft hover:text-white transition-colors text-sm font-semibold">
                  Download CV (PDF)
                </a>
              </li>
              <li>
                <a href="mailto:chamaldeshitha2001@gmail.com" className="text-sb-text-white-soft hover:text-white transition-colors text-sm font-semibold">
                  Contact Support (Direct Email)
                </a>
              </li>
              <li>
                <a href="https://github.com/Chamalfernando/portfolio-chamal" target="_blank" rel="noreferrer" className="text-sb-text-white-soft hover:text-white transition-colors text-sm font-semibold">
                  View Source Code
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-sb-text-white-soft">
            <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center md:justify-start">
              <span>© {new Date().getFullYear()} Chamal Fernando. All rights reserved.</span>
              <a href="#" className="hover:underline hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:underline hover:text-white">Terms of Service</a>
              <a href="#" className="hover:underline hover:text-white">Cookie Preferences</a>
            </div>
            <div>
              <span>Designed with passion & modern green-cream visual system</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

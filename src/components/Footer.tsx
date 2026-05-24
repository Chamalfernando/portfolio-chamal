import { Link } from 'react-router-dom';
import { Mail, Linkedin, Github, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#f5f5f7] border-t border-[#e0e0e0] text-[#86868b]">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* About Section */}
          <div>
            <h3 className="text-sm font-bold text-[#1d1d1f] mb-4">
              Chamal Fernando
            </h3>
            <p className="text-[#86868b] text-xs leading-relaxed max-w-sm">
              Computer Science Graduate passionate about creating innovative solutions with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-[#1d1d1f] mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              <li>
                <Link to="/" className="text-[#86868b] hover:text-[#0066cc] transition-colors text-xs">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/work-experience" className="text-[#86868b] hover:text-[#0066cc] transition-colors text-xs">
                  Professional Experience
                </Link>
              </li>
              <li>
                <Link to="/certifications" className="text-[#86868b] hover:text-[#0066cc] transition-colors text-xs">
                  Certifications
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-sm font-bold text-[#1d1d1f] mb-4">Connect</h3>
            <div className="flex gap-3">
              <a
                href="mailto:chamaldeshitha2001@gmail.com"
                className="w-9 h-9 rounded-full bg-white border border-[#e0e0e0] hover:bg-[#fafafc] flex items-center justify-center transition-all text-[#86868b] hover:text-[#0066cc]"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/chamal-fernando"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-[#e0e0e0] hover:bg-[#fafafc] flex items-center justify-center transition-all text-[#86868b] hover:text-[#0066cc]"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/Chamalfernando"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-[#e0e0e0] hover:bg-[#fafafc] flex items-center justify-center transition-all text-[#86868b] hover:text-[#0066cc]"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#e0e0e0] text-xs">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#86868b]">
              © {new Date().getFullYear()} Chamal Fernando. All rights reserved.
            </p>
            <p className="text-[#86868b] flex items-center gap-1">
              Made with passion & care.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

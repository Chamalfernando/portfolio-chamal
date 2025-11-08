import { Link } from 'react-router-dom';
import { Mail, Linkedin, Github, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card/30 backdrop-blur-sm border-t border-border/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Chamal Fernando
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Computer Science Graduate passionate about creating innovative solutions with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/work-experience" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Professional Experience
                </Link>
              </li>
              {/* <li>
                <Link to="/academic-transcript" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Academic Transcript
                </Link>
              </li> */}{/* COMMENT */}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-foreground">Connect</h3>
            <div className="flex gap-4">
              <a
                href="mailto:your.email@example.com"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors border border-primary/20"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-primary" />
              </a>
              <a
                href="https://linkedin.com/in/chamal-fernando"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors border border-primary/20"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-primary" />
              </a>
              <a
                href="https://github.com/Chamalfernando"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors border border-primary/20"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Chamal Fernando. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-accent fill-accent" /> and passion
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, useScroll } from 'framer-motion';
import { blogPosts } from '@/data/blog';
import { ArrowLeft, Calendar, Clock, Share2, Check, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';
import profileImage from '@/assets/profile-image.png';

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  const post = blogPosts.find((p) => p.slug === slug);

  // Scroll Progress Bar
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    // Scroll to top on load
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen bg-sb-cream text-sb-foreground flex flex-col justify-between">
        <nav className="w-full bg-white border-b border-sb-border/20 px-6 py-4 flex items-center">
          <Link to="/blog" className="flex items-center gap-2 text-sb-house font-bold text-sm">
            <ArrowLeft className="w-4 h-4" />
            Back to Journal
          </Link>
        </nav>
        <div className="container mx-auto px-6 py-20 text-center flex-grow flex flex-col items-center justify-center">
          <h1 className="text-3xl font-serif font-bold text-sb-house mb-4">Article Not Found</h1>
          <p className="text-sb-text-black-soft mb-8">The engineering journal entry you are looking for does not exist or has been moved.</p>
          <Link to="/blog">
            <Button variant="sbFilled">Return to Journal</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-sb-cream text-sb-foreground flex flex-col">
      {/* Scroll indicator bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-sb-accent z-[60] origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Navigation Header */}
      <nav className="w-full bg-white/70 backdrop-blur-md border-b border-sb-border/20 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/blog" className="flex items-center gap-2 group text-sb-house font-bold font-sans">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Journal
          </Link>
          <button
            onClick={handleCopyLink}
            className="flex items-center gap-1.5 text-xs font-bold text-sb-text-black-soft hover:text-sb-accent transition-colors bg-white hover:bg-sb-ceramic border border-sb-border/40 px-3 py-1.5 rounded-full"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-sb-accent" />
                Copied Link!
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5" />
                Share
              </>
            )}
          </button>
        </div>
      </nav>

      {/* Article Page Wrapper */}
      <main className="flex-grow container mx-auto px-6 py-12 max-w-4xl">
        <article className="bg-white rounded-3xl border border-sb-border/30 shadow-sb-card overflow-hidden p-6 md:p-12 mb-10">
          
          {/* Header Block */}
          <header className="mb-8 pb-8 border-b border-sb-border/20">
            {/* Category Tag */}
            <span className="px-3 py-1 rounded-full bg-sb-gold-lightest text-sb-accent font-bold text-xs border border-sb-gold-light/20 inline-block mb-4">
              {post.category}
            </span>
            
            {/* Heading */}
            <h1 className="text-3xl md:text-4.5xl font-bold font-serif text-sb-house mb-6 leading-tight">
              {post.title}
            </h1>
            
            {/* Metadata (Author & Date) */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border border-sb-border/40 overflow-hidden bg-sb-ceramic flex items-center justify-center">
                  {profileImage ? (
                    <img src={profileImage} alt="Chamal Fernando" className="w-full h-full object-cover" />
                  ) : (
                    <User className="w-5 h-5 text-sb-house" />
                  )}
                </div>
                <div>
                  <span className="block text-sm font-bold text-sb-house leading-none">Chamal Fernando</span>
                  <span className="text-[10px] text-sb-text-black-soft/60">Software Engineer, FinTech Domain</span>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-xs text-sb-text-black-soft/60">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </header>

          {post.mediumLink && (
            <div className="mb-8 p-5 bg-sb-gold-lightest rounded-2xl border border-sb-gold-light/20 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-left">
                <span className="block text-sm font-bold text-sb-house font-serif mb-1">Published on Medium</span>
                <span className="text-xs text-sb-text-black-soft/80">This article is officially published on Medium. Read the original post for community engagement.</span>
              </div>
              <a href={post.mediumLink} target="_blank" rel="noopener noreferrer" className="shrink-0 w-full sm:w-auto">
                <Button variant="sbFilled" className="w-full text-xs font-bold gap-1.5 py-2 px-5 h-9">
                  Read on Medium
                  <Share2 className="w-3.5 h-3.5" />
                </Button>
              </a>
            </div>
          )}

          {/* Render HTML content */}
          <div 
            className="prose prose-sb max-w-none text-sb-text-black-soft text-sm leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags Footer */}
          <div className="mt-8 pt-8 border-t border-sb-border/20 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="text-xs bg-sb-ceramic/40 text-sb-house font-semibold px-3 py-1 rounded-full">
                #{tag}
              </span>
            ))}
          </div>
        </article>

        {/* Footer Navigation */}
        <div className="flex justify-between items-center mb-8">
          <Link to="/blog">
            <Button variant="sbOutline" className="gap-2 font-bold text-xs h-10">
              <ArrowLeft className="w-4 h-4" />
              Return to Journal Index
            </Button>
          </Link>
          
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-xs font-bold text-sb-accent hover:underline"
          >
            Back to Top ↑
          </button>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default BlogDetail;

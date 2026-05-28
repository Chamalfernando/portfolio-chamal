import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogPosts, BlogPost } from '@/data/blog';
import { Search, Calendar, Clock, ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Backend', 'Frontend', 'Database'];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-sb-cream text-sb-foreground flex flex-col">
      {/* Navigation Header */}
      <nav className="w-full bg-white/70 backdrop-blur-md border-b border-sb-border/20 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group text-sb-house font-bold font-sans">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          <div className="font-cursive text-sb-accent text-xl font-bold rotate-[-1deg]">
            Engineering Journal
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-6 py-12 max-w-5xl">
        {/* Header Block */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-sb-accent mb-2 block">
            Knowledge Share & Systems Design
          </span>
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-sb-house mb-4">
            Technical Documentation & Notes
          </h1>
          <p className="text-base md:text-lg text-sb-text-black-soft max-w-2xl mx-auto leading-relaxed">
            A compilation of design patterns, performance optimizations, and backend architecture guidelines based on real-world engineering projects.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8 pb-6 border-b border-sb-border/30">
          {/* Category Pills */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200 active:scale-95 border ${
                  selectedCategory === category
                    ? 'bg-sb-green text-white border-sb-green shadow-sm'
                    : 'bg-white text-sb-text-black-soft border-sb-border/40 hover:bg-sb-ceramic/40'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-sb-text-black-soft/60" />
            <input
              type="text"
              placeholder="Search articles or tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-sb-border/40 rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-sb-green focus:border-sb-green transition-all"
            />
          </div>
        </div>

        {/* Blog Post List */}
        {filteredPosts.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl border border-sb-border/30 shadow-sb-card overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
              >
                {/* Accent line based on category */}
                <div className="h-1.5 bg-sb-green/70 w-full" />
                
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    {/* Meta Section */}
                    <div className="flex items-center gap-3 text-xs mb-3 flex-wrap">
                      <span className="px-2.5 py-0.5 rounded-full bg-sb-gold-lightest text-sb-accent font-bold border border-sb-gold-light/20">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-1 text-sb-text-black-soft/60">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1 text-sb-text-black-soft/60">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-bold font-serif text-sb-house hover:text-sb-green transition-colors mb-3 leading-tight">
                      {post.mediumLink ? (
                        <a href={post.mediumLink} target="_blank" rel="noopener noreferrer">
                          {post.title}
                        </a>
                      ) : (
                        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                      )}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-xs text-sb-text-black-soft leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                  </div>

                  <div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {post.tags.map((tag) => (
                        <span key={tag} className="text-[10px] bg-sb-ceramic/50 text-sb-house font-semibold px-2 py-0.5 rounded">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Read More button */}
                    {post.mediumLink ? (
                      <a href={post.mediumLink} target="_blank" rel="noopener noreferrer" className="block w-full">
                        <Button variant="sbOutline" className="w-full text-xs font-bold gap-1 justify-center py-2 h-9">
                          Read on Medium
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Button>
                      </a>
                    ) : (
                      <Link to={`/blog/${post.slug}`} className="block w-full">
                        <Button variant="sbOutline" className="w-full text-xs font-bold gap-1 justify-center py-2 h-9">
                          Read Full Article
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-sb-border/20 shadow-sm">
            <p className="text-sb-text-black-soft text-lg font-medium mb-2">No articles match your criteria.</p>
            <p className="text-sm text-sb-text-black-soft/60">Try searching for different terms or reset your filters.</p>
            <Button
              variant="sbOutline"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="mt-4"
            >
              Reset Filters
            </Button>
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Blog;

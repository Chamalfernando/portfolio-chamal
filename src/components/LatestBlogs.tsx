import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { blogPosts } from '@/data/blog';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LatestBlogs = () => {
  // Show all 3 articles as they represent key areas of expertise (Backend, Frontend, Database)
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-20 bg-sb-cream border-t border-sb-border/40" id="articles">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="font-cursive text-sb-accent text-2xl rotate-[-1deg] inline-block mb-2">
              From the Desk ✍️
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-sb-house font-serif mb-4">
              Latest Technical Articles
            </h2>
            <p className="text-base md:text-lg text-sb-text-black-soft leading-relaxed">
              Insights, case studies, and engineering guidelines on systems architecture, Angular, C# .NET, and database scaling.
            </p>
          </motion.div>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {latestPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 border border-sb-border/40 shadow-sb-card hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Meta details */}
                <div className="flex items-center gap-3 text-[10px] text-sb-text-black-soft/60 font-semibold mb-3">
                  <span className="px-2 py-0.5 rounded bg-sb-gold-lightest text-sb-accent border border-sb-gold-light/15 font-bold">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </div>
                </div>

                {/* Article Title */}
                <h3 className="text-lg font-bold font-serif text-sb-house mb-2 leading-snug hover:text-sb-green transition-colors">
                  {post.mediumLink ? (
                    <a href={post.mediumLink} target="_blank" rel="noopener noreferrer">
                      {post.title}
                    </a>
                  ) : (
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  )}
                </h3>

                {/* Excerpt */}
                <p className="text-xs text-sb-text-black-soft leading-relaxed mb-4">
                  {post.excerpt}
                </p>
              </div>

              <div>
                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="text-[9px] bg-sb-ceramic/40 text-sb-house font-semibold px-2 py-0.5 rounded">
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* CTA Link */}
                {post.mediumLink ? (
                  <a
                    href={post.mediumLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-bold text-sb-accent hover:text-sb-green transition-colors group"
                  >
                    Read on Medium
                    <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                  </a>
                ) : (
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center text-xs font-bold text-sb-accent hover:text-sb-green transition-colors group"
                  >
                    Read Article
                    <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link to="/blog">
              <Button variant="sbFilled" className="shadow-sb-card font-bold gap-2">
                Visit Engineering Journal
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default LatestBlogs;

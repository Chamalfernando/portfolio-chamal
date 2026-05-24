import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-24 bg-white text-[#1d1d1f]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-[#1d1d1f] tracking-apple-tight">
            Get In Touch
          </h2>
          <p className="text-lg md:text-xl text-[#86868b] max-w-2xl mx-auto font-normal">
            Ready to collaborate on your next project? Let's discuss how I can help bring your ideas to life
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-[#1d1d1f] mb-4">Let's Connect</h3>
              <p className="text-[#86868b] text-sm md:text-base leading-relaxed mb-8">
                I'm always interested in new opportunities and exciting projects. 
                Whether you're a startup looking for a dedicated developer or an 
                established company needing fresh perspectives, I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#f5f5f7] border border-[#e0e0e0] rounded-lg text-[#1d1d1f]">
                  <Mail className="h-5 w-5 text-[#1d1d1f]" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-[#1d1d1f]">Email</h4>
                  <p className="text-sm text-[#86868b]">chamaldeshitha2001@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#f5f5f7] border border-[#e0e0e0] rounded-lg text-[#1d1d1f]">
                  <Phone className="h-5 w-5 text-[#1d1d1f]" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-[#1d1d1f]">Phone</h4>
                  <p className="text-sm text-[#86868b]">0741519337 / 0711944422</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#f5f5f7] border border-[#e0e0e0] rounded-lg text-[#1d1d1f]">
                  <MapPin className="h-5 w-5 text-[#1d1d1f]" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-[#1d1d1f]">Location</h4>
                  <p className="text-sm text-[#86868b]">Colombo, Sri Lanka</p>
                </div>
              </div>
            </div>

            {/* Availability Status */}
            <div className="p-6 bg-[#f5f5f7] rounded-[18px] border border-[#e0e0e0]">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2.5 h-2.5 bg-[#30d158] rounded-full animate-pulse" />
                <h4 className="font-semibold text-sm text-[#1d1d1f]">Available for Work</h4>
              </div>
              <p className="text-xs text-[#86868b] leading-relaxed">
                Currently open to full-time opportunities and freelance projects
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-[#fafafc] border border-[#e0e0e0] rounded-[18px] p-8 shadow-none"
          >
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-[#1d1d1f] mb-2">
                    Name
                  </label>
                  <Input 
                    id="name" 
                    placeholder="Your name" 
                    className="bg-white border-[#d2d2d7] focus-visible:ring-[#0066cc] text-[#1d1d1f] rounded-lg text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-[#1d1d1f] mb-2">
                    Email
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your@email.com" 
                    className="bg-white border-[#d2d2d7] focus-visible:ring-[#0066cc] text-[#1d1d1f] rounded-lg text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-semibold text-[#1d1d1f] mb-2">
                  Subject
                </label>
                <Input 
                  id="subject" 
                  placeholder="Project discussion" 
                  className="bg-white border-[#d2d2d7] focus-visible:ring-[#0066cc] text-[#1d1d1f] rounded-lg text-sm"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-[#1d1d1f] mb-2">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Tell me about your project..." 
                  rows={6}
                  className="bg-white border-[#d2d2d7] focus-visible:ring-[#0066cc] text-[#1d1d1f] rounded-lg text-sm resize-none"
                />
              </div>

              <Button type="submit" variant="hero" className="w-full py-2.5 text-sm h-auto">
                <Send className="mr-1.5 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
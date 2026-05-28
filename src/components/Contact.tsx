import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    toast.success("Order received! I will get in touch with you shortly.");
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section className="py-20 bg-sb-cream/40 border-t border-sb-border/40">
      <div className="container mx-auto px-6">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <span className="font-cursive text-sb-accent text-2xl rotate-[-1.5deg] inline-block mb-2">Get in Touch 📬</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-sb-house font-serif mb-4">
            Get In Touch
          </h2>
          <p className="text-base md:text-lg text-sb-text-black-soft">
            Ready to collaborate on your next project? Let's discuss how I can help bring your ideas to life.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Info (Store Hours style) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold font-serif text-sb-house mb-4">Working Hours & Location</h3>
              <p className="text-sm text-sb-text-black-soft leading-relaxed mb-6">
                I'm active during core GMT+5:30 working hours. Drop by with your specifications, or schedule an online sync to customize your software requirements.
              </p>
            </div>

            <div className="space-y-5">
              <div className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-sb-border/40 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-sb-light flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-sb-accent" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-sb-text-black-soft">Primary Email</h4>
                  <p className="text-sm font-semibold text-sb-house truncate">chamaldeshitha2001@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-sb-border/40 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-sb-light flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-sb-accent" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-sb-text-black-soft">Contact Phone</h4>
                  <p className="text-sm font-semibold text-sb-house">0741519337 / 0711944422</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-sb-border/40 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-sb-light flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-sb-accent" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-sb-text-black-soft">Location</h4>
                  <p className="text-sm font-semibold text-sb-house">Colombo, Sri Lanka</p>
                </div>
              </div>
            </div>

            {/* Availability Status - Green Accent Wash */}
            <div className="p-6 bg-sb-light/35 rounded-3xl border border-sb-accent/25">
              <div className="flex items-center gap-3 mb-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sb-green opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-sb-green"></span>
                </span>
                <h4 className="font-bold text-sb-house text-sm">Status: Available for Work</h4>
              </div>
              <p className="text-xs text-sb-text-black-soft leading-relaxed">
                Currently open to full-time engineering contracts, enterprise solutions, and custom integrations.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-white rounded-3xl p-8 border border-sb-border/40 shadow-sb-card"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest text-sb-text-black-soft mb-2">
                    Name *
                  </label>
                  <input 
                    id="name" 
                    type="text"
                    required
                    placeholder="Your name" 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white border border-sb-border focus:border-sb-accent focus:ring-1 focus:ring-sb-accent outline-none px-4 py-3 rounded-xl text-sm transition-all text-sb-house placeholder-sb-text-black-soft/40"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-sb-text-black-soft mb-2">
                    Email *
                  </label>
                  <input 
                    id="email" 
                    type="email" 
                    required
                    placeholder="your@email.com" 
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white border border-sb-border focus:border-sb-accent focus:ring-1 focus:ring-sb-accent outline-none px-4 py-3 rounded-xl text-sm transition-all text-sb-house placeholder-sb-text-black-soft/40"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-widest text-sb-text-black-soft mb-2">
                  Subject
                </label>
                <input 
                  id="subject" 
                  type="text"
                  placeholder="Project discussion" 
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-white border border-sb-border focus:border-sb-accent focus:ring-1 focus:ring-sb-accent outline-none px-4 py-3 rounded-xl text-sm transition-all text-sb-house placeholder-sb-text-black-soft/40"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest text-sb-text-black-soft mb-2">
                  Message *
                </label>
                <textarea 
                  id="message" 
                  required
                  placeholder="Tell me about your project..." 
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white border border-sb-border focus:border-sb-accent focus:ring-1 focus:ring-sb-accent outline-none px-4 py-3 rounded-xl text-sm transition-all resize-none text-sb-house placeholder-sb-text-black-soft/40"
                />
              </div>

              <Button type="submit" variant="sbFilled" className="w-full py-6 text-sm font-semibold tracking-tight shadow-md">
                <Send className="mr-2 h-4 w-4" />
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
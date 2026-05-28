import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { educations } from '@/data/portfolio';
import { Calendar, MapPin, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Education = () => {
  return (
    <section className="py-20 bg-sb-gold-lightest border-t border-sb-border/40">
      <div className="container mx-auto px-6">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <span className="font-cursive text-sb-accent text-2xl rotate-[-1deg] inline-block mb-2">Qualifications & Degrees 🎓</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-sb-house font-serif mb-4">
            Academic Qualifications
          </h2>
          <p className="text-base md:text-lg text-sb-text-black-soft mb-6">
            The educational credentials and milestones that shaped my software engineering foundations.
          </p>
          {/* Commented out as requested */}
          {/* <Link to="/academic-transcript">
            <Button variant="sbOutline" className="gap-2">
              <FileText className="w-4 h-4" />
              View Academic Transcript
            </Button>
          </Link> */}
        </motion.div>

        {/* Timeline container */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line - Accent Green */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-sb-green/30" />
            
            {educations.map((education, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 last:mb-0 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot - Icon circle */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-9 h-9 bg-sb-gold rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md border-2 border-white z-10 hover:scale-105 transition-transform">
                  {education.icon}
                </div>
                
                {/* Content card */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <div className="bg-white rounded-2xl p-6 border border-sb-border/40 shadow-sb-card hover:shadow-md transition-shadow">
                    
                    {/* Duration badge */}
                    <div className="flex items-center gap-1.5 text-xs font-bold text-sb-accent mb-2">
                      <Calendar className="h-3.5 w-3.5" />
                      {education.duration}
                    </div>
                    
                    {/* Degree Title */}
                    <h3 className="text-xl font-bold font-serif text-sb-house mb-2">
                      {education.title}
                    </h3>
                    
                    {/* Institution */}
                    <div className="flex items-center gap-1.5 text-sm text-sb-text-black-soft mb-3 font-semibold">
                      <MapPin className="h-3.5 w-3.5 text-sb-green" />
                      {education.institution}
                    </div>
                    
                    {/* Description */}
                    <p className="text-xs text-sb-text-black-soft leading-relaxed">
                      {education.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
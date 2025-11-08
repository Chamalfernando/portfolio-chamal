import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { educations } from '@/data/portfolio';
import { Calendar, MapPin, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Education = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Qualifications
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
            Academic journey and qualifications that shaped my technical foundation
          </p>
          {/* COMMENT */}
          {/* <Link to="/academic-transcript">
            <Button variant="outline" className="gap-2">
              <FileText className="w-4 h-4" />
              View Academic Transcript
            </Button>
          </Link> */}
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary to-accent" />
            
            {educations.map((education, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-xl z-10">
                  {education.icon}
                </div>
                
                {/* Content card */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 hover:bg-card/70 transition-all duration-300 border border-border/50 hover:shadow-glow-accent/20 hover:shadow-lg">
                    <div className="flex items-center gap-2 text-sm text-accent mb-2">
                      <Calendar className="h-4 w-4" />
                      {education.duration}
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2">{education.title}</h3>
                    
                    <div className="flex items-center gap-2 text-muted-foreground mb-3">
                      <MapPin className="h-4 w-4" />
                      {education.institution}
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
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
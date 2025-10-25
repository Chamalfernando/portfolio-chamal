import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import { workExperiences } from '@/data/portfolio';

const WorkExperience = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Work Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional journey and industrial experience
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {workExperiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative pl-8 pb-12 border-l-2 border-accent/30 last:pb-0"
            >
              <div className="absolute left-[-13px] top-0 w-6 h-6 rounded-full bg-accent border-4 border-background" />
              
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 hover:bg-card/70 transition-all duration-300 border border-border/50 hover:border-accent/50 hover:shadow-glow-accent">
                <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
                  <div>
                    <h3 className="text-2xl font-bold text-accent mb-1">{experience.title}</h3>
                    <p className="text-lg text-muted-foreground flex items-center gap-2">
                      <Briefcase className="w-4 h-4" />
                      {experience.company}
                    </p>
                  </div>
                  <span className="text-sm text-muted-foreground flex items-center gap-2 bg-muted/30 px-3 py-1 rounded-full">
                    <Calendar className="w-4 h-4" />
                    {experience.duration}
                  </span>
                </div>
                
                <p className="text-foreground mb-4">{experience.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold mb-2 text-accent">Key Responsibilities:</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {experience.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2 text-accent">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm border border-accent/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;

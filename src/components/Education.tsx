import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { educations } from '@/data/portfolio';
import { Calendar, MapPin, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Education = () => {
  return (
    <section className="py-24 bg-[#f5f5f7] text-[#1d1d1f] border-y border-[#e0e0e0]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-[#1d1d1f] tracking-apple-tight">
            Qualifications
          </h2>
          <p className="text-lg md:text-xl text-[#86868b] max-w-2xl mx-auto mb-6 font-normal">
            Academic journey and qualifications that shaped my technical foundation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {educations.map((education, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-[#e0e0e0] rounded-[18px] p-8 hover:scale-[1.01] transition-transform duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl p-2 bg-[#f5f5f7] rounded-full">{education.icon}</span>
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-[#86868b] font-semibold uppercase tracking-wider">
                      <Calendar className="h-3 w-3" />
                      {education.duration}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-[#86868b] mt-0.5">
                      <MapPin className="h-3 w-3" />
                      {education.institution}
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#1d1d1f] mb-3">{education.title}</h3>
                <p className="text-sm text-[#86868b] leading-relaxed">{education.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
import { motion } from 'framer-motion';
import { skills } from '@/data/portfolio';

const Skills = () => {
  const categories = ['Frontend', 'Backend', 'Database', 'Tools', 'Mobile'] as const;

  return (
    <section className="py-24 bg-[#161617] text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-[#ffffff] tracking-apple-tight">
            Technical Skills
          </h2>
          <p className="text-lg md:text-xl text-[#a1a1a6] max-w-2xl mx-auto font-normal">
            Comprehensive expertise across modern web and mobile development technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#222223] border border-[#2d2d30] rounded-[18px] p-8 transition-transform hover:scale-[1.01] duration-300 shadow-none"
            >
              <h3 className="text-xl font-bold mb-6 text-[#f5f5f7]">{category}</h3>
              
                <div className="space-y-3">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill, index) => (
                    <motion.div 
                      key={skill.name} 
                      className="px-4 py-3 bg-[#2a2a2c] rounded-[11px] hover:bg-[#333333] transition-colors duration-200 border border-[#3a3a3c] flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.3, 
                        delay: (categoryIndex * 0.1) + (index * 0.05) 
                      }}
                      viewport={{ once: true }}
                    >
                      <span className="text-xl">{skill.icon}</span>
                      <span className="font-medium text-[#f5f5f7] text-sm">{skill.name}</span>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
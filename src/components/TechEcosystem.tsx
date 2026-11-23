import React from 'react';
import { motion } from 'framer-motion';

const techGroups = [
  {
    name: 'Programming',
    items: ['Python', 'Java', 'SQL', 'JavaScript', 'TypeScript'],
  },
  {
    name: 'AI & deep learning',
    items: ['TensorFlow', 'Keras', 'PyTorch', 'Scikit-Learn', 'OpenCV', 'Pandas', 'NumPy'],
  },
  {
    name: 'Analytics & business intelligence',
    items: ['Power BI', 'Advanced Excel', 'Tableau', 'Matplotlib', 'DAX Measures'],
  },
  {
    name: 'Web & systems engineering',
    items: ['React 19', 'Node.js', 'Tailwind CSS', 'REST APIs', 'Linux', 'TCP/IP', 'DNS', 'HTTP/HTTPS'],
  },
  {
    name: 'IoT & embedded hardware',
    items: ['ESP32', 'NodeMCU', 'Rain Sensors', 'UV Sensors', 'Optical Flame Sensors', 'Servo Actuation', 'Blynk'],
  },
];

export const TechEcosystem: React.FC = () => {
  return (
    <section
      id="tech-ecosystem"
      className="relative py-20 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 scroll-mt-20 w-full max-w-full overflow-hidden min-w-0"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="w-full"
      >
        {/* Section Heading in Sentence Case */}
        <h2
          className="headline-section text-[#F5F5F5] mb-4 text-left"
          style={{ fontSize: 'clamp(2rem, 4.5vw, 3.6rem)' }}
        >
          Built with <span className="text-[#FF172F]">intelligence.</span>
        </h2>

        <p className="font-sans text-[1.05rem] leading-[1.65] text-[#D8D8DC]/90 max-w-[62ch] mb-16 text-left">
          Core languages, frameworks, and hardware platforms I use across application development, research papers, and production systems.
        </p>

        {/* Groups with small mono headers and plain wrapped outlined tags */}
        <div className="space-y-10 border-t border-[rgba(255,255,255,0.10)] pt-10 w-full">
          {techGroups.map((group) => (
            <div
              key={group.name}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start border-b border-[rgba(255,255,255,0.06)] pb-8"
            >
              {/* Group Name in small mono */}
              <div className="md:col-span-4">
                <span className="font-mono text-xs text-[#92929B] uppercase tracking-[0.08em]">
                  {group.name}
                </span>
              </div>

              {/* Plain wrapped list of small outlined tags */}
              <div className="md:col-span-8 flex flex-wrap gap-2">
                {group.items.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs text-[#D8D8DC] px-3 py-1.5 rounded-[4px] border border-[rgba(255,255,255,0.10)] bg-transparent hover:border-[#FF172F] transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

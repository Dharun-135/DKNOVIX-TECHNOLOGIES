import React from 'react';
import { motion } from 'framer-motion';

interface ServicesProps {
  onSelectService?: (serviceName: string) => void;
}

const services = [
  {
    title: 'Web development',
    presetName: 'WEB DEVELOPMENT',
    description: 'A fast, responsive website with a contact form and hosting set up.',
  },
  {
    title: 'AI & machine learning',
    presetName: 'AI & MACHINE LEARNING',
    description: 'Custom machine learning models and computer vision pipelines trained on your data.',
  },
  {
    title: 'Software development',
    presetName: 'SOFTWARE DEVELOPMENT',
    description: 'Backends, REST APIs, and relational databases built in Python, Java, or Node.js.',
  },
  {
    title: 'Data analytics',
    presetName: 'DATA ANALYTICS',
    description: 'Interactive Power BI dashboards, automated Excel reports, and clean data models.',
  },
  {
    title: 'UI/UX design',
    presetName: 'UI/UX DESIGN',
    description: 'Clean interface wireframes, component design systems, and clickable Figma prototypes.',
  },
  {
    title: 'IT solutions',
    presetName: 'IT SOLUTIONS',
    description: 'Linux server configuration, network troubleshooting, and reliable hands-on tech support.',
  },
];

export const ServicesSection: React.FC<ServicesProps> = ({ onSelectService }) => {
  const handleServiceClick = (servicePreset: string) => {
    if (onSelectService) {
      onSelectService(servicePreset);
    }
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="services"
      className="relative py-20 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 scroll-mt-20 w-full max-w-full overflow-hidden min-w-0"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="w-full"
      >
        {/* Section Heading */}
        <h2
          className="headline-section text-[#F5F5F5] mb-4 text-left"
          style={{ fontSize: 'clamp(2rem, 4.5vw, 3.6rem)' }}
        >
          What we <span className="text-[#FF172F]">engineer.</span>
        </h2>

        <p className="font-sans text-[1.05rem] leading-[1.65] text-[#D8D8DC]/90 max-w-[62ch] mb-12 text-left">
          We work with businesses and founders to build reliable software solutions from prototype to release.
        </p>

        {/* Full-width Rows (No Boxes) */}
        <div className="border-t border-[rgba(255,255,255,0.10)] w-full">
          {services.map((item) => (
            <div
              key={item.title}
              onClick={() => handleServiceClick(item.presetName)}
              className="group py-7 sm:py-8 border-b border-[rgba(255,255,255,0.10)] flex flex-col md:flex-row md:items-baseline justify-between gap-3 sm:gap-6 cursor-pointer transition-transform duration-200 hover:translate-x-2"
            >
              <div className="md:w-2/5 shrink-0">
                <h3 className="font-display font-semibold text-xl sm:text-2xl text-[#F5F5F5] group-hover:text-[#FF172F] transition-colors tracking-[-0.01em]">
                  {item.title}
                </h3>
              </div>
              <p className="font-sans text-base text-[#D8D8DC]/90 md:w-3/5 leading-[1.65]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

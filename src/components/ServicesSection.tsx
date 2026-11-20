import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Cpu, Code2, BarChart3, Palette, Server, ArrowUpRight } from 'lucide-react';
import { sound } from '../utils/sound';

interface ServicesProps {
  onSelectService?: (serviceName: string) => void;
}

const services = [
  {
    number: '01',
    title: 'WEB DEVELOPMENT',
    description: 'Modern websites, web applications, and responsive digital experiences built with state-of-the-art frameworks and hyper-optimized 3D visuals.',
    icon: Globe,
    techStack: ['React', 'TypeScript', 'Next.js', 'WebGL / Three.js', 'Tailwind CSS'],
  },
  {
    number: '02',
    title: 'AI & MACHINE LEARNING',
    description: 'AI-powered applications, predictive systems, machine learning, and automation pipelines trained for real-world inference and intelligence.',
    icon: Cpu,
    techStack: ['TensorFlow', 'Deep Learning', 'PyTorch', 'Computer Vision', 'NLP'],
  },
  {
    number: '03',
    title: 'SOFTWARE DEVELOPMENT',
    description: 'Custom applications, software engineering, and scalable enterprise business solutions designed with architectural robustness.',
    icon: Code2,
    techStack: ['Python', 'Java', 'REST APIs', 'Cloud Microservices', 'SQL'],
  },
  {
    number: '04',
    title: 'DATA ANALYTICS',
    description: 'Business intelligence, reporting, interactive dashboards, and data-driven insights turning complex datasets into strategic decisions.',
    icon: BarChart3,
    techStack: ['Power BI', 'Tableau', 'Pandas', 'NumPy', 'Data Modeling'],
  },
  {
    number: '05',
    title: 'UI/UX DESIGN',
    description: 'Premium interfaces, digital experiences, and creative product design balancing surgical aesthetics with seamless human interaction.',
    icon: Palette,
    techStack: ['Figma', 'Prototyping', 'Design Systems', 'Micro-Interactions'],
  },
  {
    number: '06',
    title: 'IT SOLUTIONS',
    description: 'Technical support, IT documentation, and technology infrastructure solutions ensuring security, stability, and round-the-clock uptime.',
    icon: Server,
    techStack: ['IoT Infrastructure', 'Systems Architecture', 'DevOps', 'Security'],
  },
];

export const ServicesSection: React.FC<ServicesProps> = ({ onSelectService }) => {
  const handleServiceClick = (serviceTitle: string) => {
    sound.playClick();
    if (onSelectService) {
      onSelectService(serviceTitle);
    }
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 scroll-mt-20 w-full max-w-full overflow-hidden min-w-0">
      {/* Section Header */}
      <div className="flex flex-col items-start mb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 font-mono text-xs text-[#FF172F] tracking-[0.3em] uppercase mb-3"
        >
          <span className="w-2 h-2 bg-[#FF172F]" />
          <span>02 // CAPABILITIES & DISCIPLINES</span>
        </motion.div>

        <div className="flex flex-col md:flex-row md:items-end justify-between w-full gap-6">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#F5F5F5] tracking-tight leading-tight"
            >
              WHAT WE ENGINEER.
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-24 h-[2px] bg-gradient-to-r from-[#FF172F] via-[#FF612E] to-transparent mt-4 origin-left"
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-mono text-xs sm:text-sm text-[#92929B] max-w-md"
          >
            Deploying precision engineering and intelligent software architectures to solve modern enterprise challenges.
          </motion.p>
        </div>
      </div>

      {/* 6 Premium Service Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full max-w-full min-w-0">
        {services.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              onMouseEnter={() => sound.playHover()}
              onClick={() => handleServiceClick(item.title)}
              className="glass-panel glass-panel-hover p-6 sm:p-8 rounded-sm flex flex-col justify-between group cursor-pointer relative overflow-hidden w-full max-w-full min-w-0"
            >
              {/* Laser line shine moving across top on hover */}
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#FF172F] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_12px_#FF172F]" />

              <div className="w-full min-w-0">
                {/* Header: Number and Icon */}
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono text-3xl font-black text-[#FF172F]/30 group-hover:text-[#FF172F] transition-colors duration-300">
                    {item.number}
                  </span>

                  <div className="w-12 h-12 rounded-sm bg-[#050505] border border-white/10 group-hover:border-[#FF172F]/60 flex items-center justify-center text-[#92929B] group-hover:text-[#FF172F] group-hover:shadow-[0_0_20px_rgba(255,23,47,0.35)] transition-all duration-300 shrink-0">
                    <Icon size={22} />
                  </div>
                </div>

                {/* Service Title */}
                <h3 className="font-display text-xl sm:text-2xl font-bold tracking-wide text-[#F5F5F5] group-hover:text-white mb-3 transition-colors break-words">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-sm text-[#92929B] group-hover:text-[#F5F5F5]/85 leading-relaxed mb-6 transition-colors break-words">
                  {item.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-8">
                  {item.techStack.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-sm bg-[#050505] border border-white/5 text-[10px] font-mono text-[#92929B] group-hover:border-[#FF172F]/20 group-hover:text-[#F5F5F5] transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer: Trigger Action */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                <span className="text-[#92929B] group-hover:text-[#FF172F] transition-colors">
                  REQUEST ARCHITECTURE
                </span>
                <div className="w-7 h-7 rounded-full bg-[#050505] border border-white/10 group-hover:border-[#FF172F] group-hover:bg-[#FF172F] text-white flex items-center justify-center transition-all duration-300">
                  <ArrowUpRight size={14} className="text-[#92929B] group-hover:text-white transition-colors" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};


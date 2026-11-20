import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Cpu, BarChart2, Globe, Wifi } from 'lucide-react';
import { sound } from '../utils/sound';

interface TechItem {
  name: string;
  category: 'PROGRAMMING' | 'AI & ML' | 'ANALYTICS' | 'WEB' | 'IoT';
  level: number; // percentage
  desc: string;
  badge: string;
}

const technologies: TechItem[] = [
  // PROGRAMMING
  { name: 'Python', category: 'PROGRAMMING', level: 95, desc: 'Primary engine for AI, ML, Data Science & Backend Microservices', badge: 'CORE ARCHITECTURE' },
  { name: 'Java', category: 'PROGRAMMING', level: 88, desc: 'Object-Oriented Enterprise Systems & Scalable Architectures', badge: 'ENTERPRISE' },
  { name: 'SQL', category: 'PROGRAMMING', level: 90, desc: 'Relational Database Modeling, Query Optimization & ETL', badge: 'DATA ENGINE' },
  { name: 'JavaScript', category: 'PROGRAMMING', level: 92, desc: 'Modern ECMAScript, Asynchronous Systems & Client Interactivity', badge: 'DYNAMIC CLIENT' },

  // AI & ML
  { name: 'TensorFlow', category: 'AI & ML', level: 92, desc: 'Deep Neural Networks, CNNs for MRI classification & vision', badge: 'DEEP LEARNING' },
  { name: 'Keras', category: 'AI & ML', level: 90, desc: 'High-level neural network prototyping & multi-layer perceptrons', badge: 'NEURAL NETS' },
  { name: 'Scikit-learn', category: 'AI & ML', level: 94, desc: 'Statistical modeling, regression, clustering & classification', badge: 'ALGORITHMS' },
  { name: 'Pandas', category: 'AI & ML', level: 95, desc: 'High-performance structured data wrangling & time-series analysis', badge: 'DATA SCIENCE' },
  { name: 'NumPy', category: 'AI & ML', level: 95, desc: 'Multi-dimensional matrix operations & vectorized linear algebra', badge: 'COMPUTATION' },

  // ANALYTICS
  { name: 'Power BI', category: 'ANALYTICS', level: 90, desc: 'Enterprise Business Intelligence dashboards & DAX measures', badge: 'BI SUITE' },
  { name: 'Excel', category: 'ANALYTICS', level: 92, desc: 'Advanced financial modeling, Pivot pipelines & analytical audits', badge: 'ANALYTICS' },
  { name: 'Tableau', category: 'ANALYTICS', level: 86, desc: 'Visual analytics, geospatial mapping & multi-source storytelling', badge: 'VISUALIZATION' },
  { name: 'Matplotlib', category: 'ANALYTICS', level: 90, desc: 'Scientific visualization, parametric plots & statistical figures', badge: 'GRAPHING' },

  // WEB
  { name: 'HTML5', category: 'WEB', level: 98, desc: 'Semantic, accessible, high-performance DOM structure', badge: 'STANDARDS' },
  { name: 'CSS3', category: 'WEB', level: 95, desc: 'Hardware-accelerated layouts, 3D transforms & animations', badge: 'STYLING' },
  { name: 'React', category: 'WEB', level: 95, desc: 'Component architecture, concurrent rendering & reactive state', badge: 'UI RUNTIME' },
  { name: 'Tailwind CSS', category: 'WEB', level: 96, desc: 'Utility-first modular styling and futuristic design tokens', badge: 'MODERN CSS' },

  // IoT
  { name: 'ESP32', category: 'IoT', level: 94, desc: 'Dual-core microcontroller with Wi-Fi/Bluetooth for Smart Hardware', badge: 'HARDWARE' },
  { name: 'NodeMCU', category: 'IoT', level: 90, desc: 'Open-source Lua/C++ IoT firmware for rapid sensory telemetry', badge: 'PROTOTYPING' },
  { name: 'Sensors Array', category: 'IoT', level: 92, desc: 'Rain, UV, Flame, Smoke MQ-2 & Ultrasonic sensor integration', badge: 'TELEMETRY' },
  { name: 'Blynk', category: 'IoT', level: 88, desc: 'Low-latency cloud dashboard for real-time mobile hardware control', badge: 'CLOUD IoT' },
];

const categoryIcons = {
  ALL: Terminal,
  PROGRAMMING: Terminal,
  'AI & ML': Cpu,
  ANALYTICS: BarChart2,
  WEB: Globe,
  IoT: Wifi,
};

export const TechEcosystem: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const categories = ['ALL', 'PROGRAMMING', 'AI & ML', 'ANALYTICS', 'WEB', 'IoT'];

  const filteredTechnologies = activeCategory === 'ALL'
    ? technologies
    : technologies.filter((tech) => tech.category === activeCategory);

  return (
    <section id="tech-ecosystem" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 scroll-mt-20 w-full max-w-full overflow-hidden min-w-0">
      {/* Section Header */}
      <div className="flex flex-col items-start mb-14">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 font-mono text-xs text-[#FF172F] tracking-[0.3em] uppercase mb-3"
        >
          <span className="w-2 h-2 bg-[#FF172F]" />
          <span>04 // ARCHITECTURAL ARSENAL</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#F5F5F5] tracking-tight leading-tight"
        >
          BUILT WITH INTELLIGENCE.
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-24 h-[2px] bg-gradient-to-r from-[#FF172F] via-[#FF612E] to-transparent mt-4 origin-left"
        />
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-12">
        {categories.map((cat) => {
          const Icon = categoryIcons[cat as keyof typeof categoryIcons] || Terminal;
          const isSelected = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => {
                sound.playClick();
                setActiveCategory(cat);
              }}
              onMouseEnter={() => sound.playHover()}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-sm font-mono text-xs tracking-wider transition-all duration-300 cursor-pointer ${
                isSelected
                  ? 'bg-gradient-to-r from-[#FF172F] to-[#E52B35] text-white font-bold shadow-[0_0_20px_rgba(255,23,47,0.4)]'
                  : 'bg-[#0B0B0E]/80 border border-white/10 text-[#92929B] hover:text-[#F5F5F5] hover:border-[#FF172F]/40'
              }`}
            >
              <Icon size={14} className={isSelected ? 'text-white' : 'text-[#FF172F]'} />
              <span>{cat}</span>
              <span className="text-[10px] opacity-60">
                ({cat === 'ALL' ? technologies.length : technologies.filter(t => t.category === cat).length})
              </span>
            </button>
          );
        })}
      </div>

      {/* Technologies Cards Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full max-w-full min-w-0"
      >
        <AnimatePresence>
          {filteredTechnologies.map((tech) => (
            <motion.div
              layout
              key={tech.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              onMouseEnter={() => sound.playHover()}
              className="glass-panel glass-panel-hover p-5 rounded-sm group relative overflow-hidden flex flex-col justify-between w-full max-w-full min-w-0"
            >
              {/* Top Accent Strip */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF172F]/40 to-transparent group-hover:via-[#FF172F] transition-all" />

              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-display text-lg font-bold text-[#F5F5F5] group-hover:text-white transition-colors">
                    {tech.name}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[9px] font-mono bg-[#050505] text-[#FF172F] border border-[#FF172F]/30 uppercase">
                    {tech.badge}
                  </span>
                </div>

                <p className="font-sans text-xs text-[#92929B] group-hover:text-[#F5F5F5]/80 leading-relaxed mb-6 transition-colors">
                  {tech.desc}
                </p>
              </div>

              {/* Skill Proficiency Meter */}
              <div>
                <div className="flex items-center justify-between text-[11px] font-mono text-[#92929B] mb-1.5">
                  <span className="uppercase text-[10px] tracking-wider text-[#FF612E]">PROFICIENCY</span>
                  <span>{tech.level}%</span>
                </div>
                <div className="w-full h-1.5 bg-[#050505] rounded-full overflow-hidden border border-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${tech.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="h-full bg-gradient-to-r from-[#FF172F] to-[#FF612E] shadow-[0_0_8px_#FF172F]"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};


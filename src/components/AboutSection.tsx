import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Brain, Sparkles, Award, Target, Eye } from 'lucide-react';
import { sound } from '../utils/sound';

const featureCards = [
  {
    title: 'INNOVATION',
    subtitle: 'BOUNDARY-PUSHING R&D',
    description: 'Pioneering novel algorithmic paradigms, IoT systems, and forward-looking digital architectures that redefine conventional limitations.',
    icon: Lightbulb,
    code: 'INIT_01 // INVENT',
  },
  {
    title: 'INTELLIGENCE',
    subtitle: 'COGNITIVE COMPUTING',
    description: 'Embedding machine learning models, predictive intelligence, and computer vision systems into resilient real-world software workflows.',
    icon: Brain,
    code: 'INIT_02 // COGNITION',
  },
  {
    title: 'CREATIVITY',
    subtitle: 'AESTHETIC SUPREMACY',
    description: 'Merging cinematic design language, interactive 3D WebGL, and frictionless user experiences with high-contrast futuristic aesthetics.',
    icon: Sparkles,
    code: 'INIT_03 // SYNTHESIS',
  },
  {
    title: 'EXCELLENCE',
    subtitle: 'RIGOROUS ENGINEERING',
    description: 'Delivering precision-built codebases, fault-tolerant architectures, and peer-reviewed technical solutions that perform flawlessly at scale.',
    icon: Award,
    code: 'INIT_04 // STANDARDS',
  },
];

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 scroll-mt-20 min-w-0">
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
          <span>01 // ABOUT DKNOVIX</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#F5F5F5] tracking-tight leading-tight"
        >
          TECHNOLOGY WITHOUT LIMITS.
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-24 h-[2px] bg-gradient-to-r from-[#FF172F] via-[#FF612E] to-transparent mt-4 origin-left"
        />
      </div>

      {/* Brand Narrative & Mission / Vision Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20 items-stretch">
        {/* Left Column: Brand Story */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7 flex flex-col justify-between glass-panel p-8 sm:p-10 rounded-sm relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF172F]/5 blur-3xl pointer-events-none group-hover:bg-[#FF172F]/10 transition-colors" />
          
          <div>
            <span className="font-mono text-[10px] text-[#92929B] tracking-[0.25em] uppercase block mb-4">
              // BRAND PHILOSOPHY
            </span>
            <p className="font-sans text-lg sm:text-xl text-[#F5F5F5] font-light leading-relaxed mb-6">
              <strong className="font-semibold text-white">DKNOVIX Technologies</strong> is an emerging technology brand focused on developing intelligent digital solutions, modern software applications, and creative technology experiences.
            </p>
            <p className="font-sans text-sm sm:text-base text-[#92929B] leading-relaxed">
              Founded at the intersection of Artificial Intelligence, IoT hardware systems, and avant-garde software engineering, DKNOVIX creates digital realities that empower modern industry and elevate human capability.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono text-[#92929B]">
            <span className="text-[#FF172F]">DKNOVIX RESEARCH LAB</span>
            <span>EST. 2024</span>
          </div>
        </motion.div>

        {/* Right Column: Mission & Vision */}
        <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="glass-panel p-6 sm:p-8 rounded-sm relative overflow-hidden group border-l-2 border-l-[#FF172F]"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded bg-[#26070D] text-[#FF172F] border border-[#FF172F]/30">
                <Target size={18} />
              </div>
              <h3 className="font-mono text-sm tracking-[0.2em] text-[#F5F5F5] uppercase font-bold">
                OUR MISSION
              </h3>
            </div>
            <p className="font-sans text-sm sm:text-base text-[#92929B] leading-relaxed">
              To transform ambitious ideas into practical digital solutions through innovation, engineering, and intelligent technologies.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="glass-panel p-6 sm:p-8 rounded-sm relative overflow-hidden group border-l-2 border-l-[#FF612E]"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded bg-[#26070D] text-[#FF612E] border border-[#FF612E]/30">
                <Eye size={18} />
              </div>
              <h3 className="font-mono text-sm tracking-[0.2em] text-[#F5F5F5] uppercase font-bold">
                OUR VISION
              </h3>
            </div>
            <p className="font-sans text-sm sm:text-base text-[#92929B] leading-relaxed">
              To become a trusted technology partner for businesses, startups, and individuals across the globe.
            </p>
          </motion.div>
        </div>
      </div>

      {/* 4 Interactive Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featureCards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              onMouseEnter={() => sound.playHover()}
              className="glass-panel glass-panel-hover p-6 sm:p-7 rounded-sm flex flex-col justify-between group cursor-default relative overflow-hidden"
            >
              {/* Corner decorative bracket */}
              <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-[#FF172F]/30 group-hover:border-[#FF172F] transition-colors" />

              <div>
                {/* Code Tag */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-[10px] text-[#92929B] tracking-[0.2em]">
                    {card.code}
                  </span>
                  <div className="p-2.5 rounded-sm bg-[#0B0B0E] border border-[#FF172F]/20 text-[#FF172F] group-hover:scale-110 group-hover:border-[#FF172F] group-hover:shadow-[0_0_15px_rgba(255,23,47,0.3)] transition-all duration-300">
                    <Icon size={20} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-display text-xl font-bold tracking-wider text-[#F5F5F5] group-hover:text-white mb-1">
                  {card.title}
                </h3>
                <p className="font-mono text-[11px] text-[#FF172F] tracking-[0.15em] mb-4 uppercase">
                  {card.subtitle}
                </p>

                {/* Description */}
                <p className="font-sans text-xs sm:text-sm text-[#92929B] group-hover:text-[#F5F5F5]/90 leading-relaxed transition-colors">
                  {card.description}
                </p>
              </div>

              {/* Bottom Glowing Accent Line */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-[10px] font-mono text-[#92929B]/60 uppercase">
                  DKNOVIX CORE
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF172F] opacity-40 group-hover:opacity-100 group-hover:shadow-[0_0_8px_#FF172F] transition-all" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};


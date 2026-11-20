import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, GraduationCap, CheckCircle2 } from 'lucide-react';
import { sound } from '../utils/sound';

const achievements = [
  {
    year: '2024',
    title: 'MSME HACKATHON 2024 SELECTION & VALUATION',
    category: 'GOVERNMENT OF INDIA RECOGNITION',
    description:
      'Selected at MSME Hackathon 2024 for developing the automated IoT Smart Umbrella system for bikes and cycles, with the project formally valued at INR 15 Lakh (about AED 62,000).',
    metric: 'INR 15 LAKH (~AED 62,000)',
    icon: Award,
    highlight: 'MSME HACKATHON 2024',
  },
  {
    year: '2025',
    title: 'PUBLISHED INTERNATIONAL RESEARCH AUTHOR',
    category: 'PEER-REVIEWED SCIENTIFIC PUBLICATION',
    description:
      'Published author: "Smart Umbrella for Bike and Cycle Using IoT", International Journal of Engineering Development and Research (IJEDR), Vol. 14, Issue 2, Paper ID IJEDR2602179.',
    metric: 'PAPER ID: IJEDR2602179',
    icon: BookOpen,
    highlight: 'IJEDR VOL. 14 ISSUE 2',
  },
  {
    year: '2026',
    title: 'B.Tech Artificial Intelligence & Data Science, 2026',
    category: 'ACADEMIC GRADUATION (2022–2026)',
    description:
      'Graduating with First Class honors (CGPA 7.83/10) from P.A. College of Engineering and Technology (Autonomous, Anna University affiliated), Pollachi, India.',
    metric: 'B.TECH AI & DS (2026)',
    icon: GraduationCap,
    highlight: 'CGPA 7.83 FIRST CLASS',
  },
];

export const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 scroll-mt-20 w-full max-w-full overflow-hidden min-w-0">
      {/* Section Header */}
      <div className="flex flex-col items-start mb-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 font-mono text-xs text-[#FF172F] tracking-[0.3em] uppercase mb-3"
        >
          <span className="w-2 h-2 bg-[#FF172F]" />
          <span>06 // VERIFIED TRAJECTORY</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#F5F5F5] tracking-tight leading-tight"
        >
          BUILT THROUGH INNOVATION.
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-24 h-[2px] bg-gradient-to-r from-[#FF172F] via-[#FF612E] to-transparent mt-4 origin-left"
        />
      </div>

      {/* Elegant Connected Timeline */}
      <div className="relative">
        {/* Mobile Left Guide Line */}
        <div className="md:hidden absolute left-5 top-4 bottom-4 w-[2px] bg-gradient-to-b from-transparent via-[#FF172F]/50 to-transparent pointer-events-none" />

        {/* Central Vertical Crimson Guide Line (Desktop) */}
        <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-[2px] -translate-x-1/2 bg-gradient-to-b from-transparent via-[#FF172F]/50 to-transparent pointer-events-none" />

        <div className="space-y-12 md:space-y-16">
          {achievements.map((item, idx) => {
            const Icon = item.icon;
            const isEven = idx % 2 === 0;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.15 }}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${
                  isEven ? 'md:flex-row-reverse' : ''
                } pl-12 md:pl-0`}
              >
                {/* Mobile Timeline Node Icon */}
                <div className="md:hidden absolute left-2 top-6 -translate-x-1/2 w-8 h-8 rounded-full bg-[#0B0B0E] border-2 border-[#FF172F] flex items-center justify-center text-[#FF172F] shadow-[0_0_15px_#FF172F] z-20">
                  <Icon size={14} />
                </div>

                {/* Timeline Card */}
                <div className="w-full md:w-[45%] min-w-0">
                  <div
                    onMouseEnter={() => sound.playHover()}
                    className="glass-panel glass-panel-hover p-6 sm:p-7 rounded-sm border border-[#FF172F]/20 relative overflow-hidden group min-w-0"
                  >
                    {/* Glowing highlight strip */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#FF172F] to-[#FF612E] opacity-70 group-hover:opacity-100 transition-opacity" />

                    <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                      <span className="font-mono text-xs text-[#FF612E] tracking-widest font-bold">
                        {item.year} // {item.category}
                      </span>
                      <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-[#26070D] text-[#FF172F] border border-[#FF172F]/40 font-semibold shrink-0">
                        {item.metric}
                      </span>
                    </div>

                    <h3 className="font-display text-xl sm:text-2xl font-bold text-[#F5F5F5] group-hover:text-white mb-3 break-words">
                      {item.title}
                    </h3>

                    <p className="font-sans text-sm text-[#92929B] group-hover:text-[#F5F5F5]/90 leading-relaxed mb-4">
                      {item.description}
                    </p>

                    <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#92929B]">
                      <span className="flex items-center gap-1.5 text-white/80">
                        <CheckCircle2 size={13} className="text-[#FF172F] shrink-0" />
                        <span>{item.highlight}</span>
                      </span>
                      <span className="text-[#FF172F]/60">VERIFIED ARCHIVE</span>
                    </div>
                  </div>
                </div>

                {/* Central Timeline Node (Desktop) */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-[#0B0B0E] border-2 border-[#FF172F] flex items-center justify-center text-[#FF172F] shadow-[0_0_20px_#FF172F] z-20">
                    <Icon size={18} />
                  </div>
                </div>

                {/* Counterbalance Spacer */}
                <div className="hidden md:block w-full md:w-[45%]" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

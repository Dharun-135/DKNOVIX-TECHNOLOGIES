import React from 'react';
import { motion } from 'framer-motion';

interface Achievement {
  year: string;
  title: string;
  subtitle?: string;
  description: string;
  detail?: string;
}

const achievements: Achievement[] = [
  {
    year: '2024',
    title: 'MSME Hackathon 2024 selection and valuation',
    subtitle: 'Ministry of MSME, Government of India',
    description:
      'Selected for the automated IoT Smart Umbrella system for bikes and cycles. The prototype was formally evaluated and valued at ₹15 Lakh (about AED 62,000).',
    detail: 'Project Valued at ₹15 Lakh (~AED 62,000)',
  },
  {
    year: '2025',
    title: 'Published research author in IJEDR',
    subtitle: 'International Journal of Engineering Development and Research',
    description:
      'Authored the research paper “Smart Umbrella for Bike and Cycle Using IoT”, published in IJEDR, Volume 14, Issue 2, Paper ID IJEDR2602179.',
    detail: 'Paper ID: IJEDR2602179',
  },
  {
    year: '2026',
    title: 'B.Tech in Artificial Intelligence & Data Science',
    subtitle: 'P.A. College of Engineering and Technology (Autonomous, Anna University affiliated)',
    description:
      'Completed 4-year degree (2022–2026) with First Class honors, CGPA 7.83 / 10. Pollachi, Tamil Nadu, India.',
    detail: 'CGPA 7.83 / 10 · First Class',
  },
];

export const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 scroll-mt-20 w-full overflow-hidden">
      {/* Section Header with One Crimson Word */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mb-14 md:mb-16"
      >
        <h2 className="headline-section text-[#F5F5F5]">
          Built through <span className="text-[#FF172F]">innovation.</span>
        </h2>
        <p className="mt-4 text-[#D8D8DC] text-base max-w-[62ch]">
          Milestones, government recognitions, published research, and academic qualifications.
        </p>
      </motion.div>

      {/* Vertical List: Year on left, text on right */}
      <div className="border-t border-[rgba(255,255,255,0.10)]">
        {achievements.map((item, idx) => (
          <motion.div
            key={item.year + idx}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className="py-8 md:py-10 border-b border-[rgba(255,255,255,0.10)] flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12"
          >
            {/* Year column */}
            <div className="w-24 shrink-0 font-mono text-sm tabular-nums text-[#FF172F] tracking-[0.02em]">
              {item.year}
            </div>

            {/* Content column */}
            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
                <h3 className="title-subheading text-lg sm:text-xl text-[#F5F5F5]">
                  {item.title}
                </h3>
                {item.detail && (
                  <span className="font-mono text-xs tabular-nums text-[#B4B4BC] shrink-0 tracking-[0.02em]">
                    {item.detail}
                  </span>
                )}
              </div>

              {item.subtitle && (
                <p className="font-mono text-xs text-[#B4B4BC] mb-2 tracking-[0.02em]">
                  {item.subtitle}
                </p>
              )}

              <p className="text-[#D8D8DC] text-sm leading-relaxed max-w-[62ch]">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

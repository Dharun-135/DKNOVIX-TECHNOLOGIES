import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const scrollTo = (target: string) => {
    const el = document.querySelector(target);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex flex-col justify-between pt-32 sm:pt-36 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 w-full max-w-full overflow-hidden min-w-0"
    >
      <div className="w-full" />

      {/* Hero Content Grid: Left Content with negative space allowing 3D robot to shine */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-w-0 w-full my-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="lg:col-span-7 xl:col-span-7 flex flex-col items-start text-left min-w-0 relative w-full"
        >
          {/* Main Headline in Archivo Variable 800 with width 125% */}
          <h1
            className="headline-hero text-[#F5F5F5] mb-6"
            style={{ fontSize: 'clamp(2.3rem, 7.5vw, 6.5rem)', letterSpacing: '-0.03em', lineHeight: 1.0 }}
          >
            WE BUILD<br />
            WHAT'S <span className="text-gradient-fire">NEXT.</span>
          </h1>

          {/* Hero Paragraph */}
          <p className="font-sans text-[1.05rem] leading-[1.65] text-[#D8D8DC] max-w-[62ch] mb-8 font-normal">
            DKNOVIX is a small technology studio in Abu Dhabi. We build websites, data dashboards, AI models and IoT systems for businesses and startups.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
            <button
              onClick={() => scrollTo('#about')}
              className="btn-primary w-full sm:w-auto"
            >
              <span>Explore our world</span>
              <ArrowRight size={16} />
            </button>

            <button
              onClick={() => scrollTo('#contact')}
              className="btn-secondary w-full sm:w-auto"
            >
              <span>Start a project</span>
            </button>
          </div>
        </motion.div>

        {/* Right side negative space frames the 3D Robot Centerpiece */}
        <div className="lg:col-span-5 hidden lg:flex justify-end pointer-events-none" />
      </div>

      {/* Bottom Minimal Indicator */}
      <div className="pt-8 flex items-center gap-2 text-xs font-mono text-[#B4B4BC] tracking-[0.02em]">
        <span>Abu Dhabi, UAE</span>
        <span>·</span>
        <span className="tabular-nums">2026</span>
      </div>
    </section>
  );
};

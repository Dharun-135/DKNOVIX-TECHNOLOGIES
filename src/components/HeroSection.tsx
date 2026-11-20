import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Cpu } from 'lucide-react';
import { sound } from '../utils/sound';

export const HeroSection: React.FC = () => {
  const scrollTo = (target: string) => {
    sound.playClick();
    const el = document.querySelector(target);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex flex-col justify-between pt-32 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 min-w-0"
    >
      {/* Top Space Filler */}
      <div className="w-full" />

      {/* Hero Content Grid: Left Content with negative space allowing 3D robot to shine */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-w-0">
        <div className="lg:col-span-7 xl:col-span-7 flex flex-col items-start text-left min-w-0 relative">
          {/* Mobile Legibility Dark Backdrop Glow */}
          <div className="lg:hidden absolute -inset-6 bg-[#050505]/75 backdrop-blur-md rounded-2xl -z-10 pointer-events-none" />

          {/* Small Upper Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#26070D]/70 border border-[#FF172F]/30 backdrop-blur-md mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#FF172F] shadow-[0_0_8px_#FF172F] animate-pulse" />
            <span className="font-mono text-[11px] sm:text-xs font-semibold tracking-[0.22em] text-[#F5F5F5] uppercase">
              THE NEXT GENERATION OF TECHNOLOGY
            </span>
          </motion.div>

          {/* Main Headline with Responsive Fluid Clamp */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display font-black tracking-tight leading-[1.02] mb-6 text-[#F5F5F5]"
            style={{ fontSize: 'clamp(2.2rem, 9vw, 6.4rem)' }}
          >
            WE BUILD <br />
            WHAT'S{' '}
            <span className="text-gradient-fire drop-shadow-[0_0_40px_rgba(255,23,47,0.45)]">
              NEXT.
            </span>
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-sans text-base sm:text-lg lg:text-xl text-[#92929B] max-w-2xl leading-relaxed mb-10 font-normal"
          >
            Engineering intelligent digital experiences through artificial intelligence, software development, advanced web technologies, and creative innovation.
          </motion.p>

          {/* Call to Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
          >
            {/* Primary Button: EXPLORE OUR WORLD */}
            <button
              onClick={() => scrollTo('#about')}
              onMouseEnter={() => sound.playHover()}
              className="relative group overflow-hidden px-7 py-4 rounded-sm bg-gradient-to-r from-[#FF172F] via-[#E52B35] to-[#FF612E] text-white font-mono text-xs sm:text-sm font-bold tracking-[0.2em] shadow-[0_0_30px_rgba(255,23,47,0.45)] hover:shadow-[0_0_45px_rgba(255,23,47,0.75)] transition-all duration-300 cursor-pointer active:scale-95 flex items-center justify-center gap-3 w-full sm:w-auto text-center"
            >
              <span className="relative z-10">EXPLORE OUR WORLD</span>
              <ArrowRight size={16} className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            </button>

            {/* Secondary Button: START A PROJECT */}
            <button
              onClick={() => scrollTo('#contact')}
              onMouseEnter={() => sound.playHover()}
              className="group px-7 py-4 rounded-sm bg-[#0B0B0E]/80 hover:bg-[#26070D]/50 border border-white/15 hover:border-[#FF172F]/50 text-[#F5F5F5] hover:text-white font-mono text-xs sm:text-sm font-semibold tracking-[0.2em] backdrop-blur-md transition-all duration-300 cursor-pointer active:scale-95 flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(255,23,47,0.2)] w-full sm:w-auto text-center"
            >
              <span>START A PROJECT</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF172F] opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </motion.div>

          {/* Quick HUD Metrics */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 1.0 }}
            className="mt-12 pt-6 border-t border-white/5 flex flex-wrap items-center gap-4 sm:gap-6 text-[11px] font-mono text-[#92929B]"
          >
            <div className="flex items-center gap-2">
              <Cpu size={14} className="text-[#FF172F] shrink-0" />
              <span>AI &amp; ROBOTICS ARCHITECTURE</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-white/20 hidden sm:block" />
            <div className="flex items-center gap-2">
              <ShieldCheck size={14} className="text-[#FF612E] shrink-0" />
              <span>MSME RECOGNIZED INNOVATION</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-white/20 hidden sm:block" />
            <div className="text-[#FF172F]/80">
              ABU DHABI // UAE
            </div>
          </motion.div>
        </div>

        {/* Right side has balanced negative space allowing the 3D Robot Centerpiece to shine */}
        <div className="lg:col-span-5 hidden lg:flex justify-end pointer-events-none" />
      </div>

      {/* Bottom Indicator: SCROLL TO DISCOVER */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="flex flex-col items-center justify-center pt-8 cursor-pointer select-none group"
        onClick={() => scrollTo('#about')}
      >
        <div className="flex items-center gap-2 text-[11px] font-mono font-medium tracking-[0.3em] text-[#92929B] group-hover:text-[#FF172F] transition-colors mb-2 uppercase">
          <span>SCROLL TO DISCOVER</span>
        </div>
        <div className="w-5 h-9 rounded-full border border-white/20 group-hover:border-[#FF172F]/60 flex items-start justify-center p-1.5 transition-colors">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1.5 h-1.5 rounded-full bg-[#FF172F] shadow-[0_0_8px_#FF172F]"
          />
        </div>
      </motion.div>
    </section>
  );
};

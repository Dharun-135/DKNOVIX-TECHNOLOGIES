import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Sparkles, ArrowRight } from 'lucide-react';
import { sound } from '../utils/sound';

interface NavbarProps {
  activeSection: string;
}

// Exact navigation order:
// HOME | ABOUT | SERVICES | OUR WORK | FOUNDER | CONTACT
const navItems = [
  { label: 'HOME', href: '#home', id: 'home' },
  { label: 'ABOUT', href: '#about', id: 'about' },
  { label: 'SERVICES', href: '#services', id: 'services' },
  { label: 'OUR WORK', href: '#our-work', id: 'our-work' },
  { label: 'FOUNDER', href: '#founder', id: 'founder' },
  { label: 'CONTACT', href: '#contact', id: 'contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const nextState = !soundEnabled;
    sound.enabled = nextState;
    setSoundEnabled(nextState);
    if (nextState) {
      sound.playLaserSweep();
    }
  };

  const scrollToSection = (href: string) => {
    sound.playClick();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full max-w-full overflow-x-hidden transition-all duration-500 select-none ${
        isScrolled
          ? 'py-3.5 bg-[#050505]/85 backdrop-blur-2xl border-b border-[#FF172F]/20 shadow-[0_12px_40px_rgba(0,0,0,0.85)]'
          : 'py-5 sm:py-6 bg-[#050505]/40 backdrop-blur-md border-b border-white/5'
      }`}
    >
      {/* Subtle Red Ambient Glow behind Navigation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-5xl h-full bg-gradient-to-r from-transparent via-[#FF172F]/12 to-transparent blur-2xl pointer-events-none" />
      </div>

      {/* Subtle Bottom Crimson Flare Line on Scroll */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#FF172F]/30 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* ==========================================================
            LEFT: DKNOVIX TECHNOLOGIES LOGO
           ========================================================== */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('#home');
          }}
          className="group flex items-center gap-3 sm:gap-3.5 relative z-10 shrink-0 select-none whitespace-nowrap"
        >
          {/* Futuristic Core Symbol with Rotating Outer Orbit */}
          <div className="relative w-9 h-9 flex items-center justify-center">
            {/* Outer Rotating Diamond Ring */}
            <div className="absolute inset-0 border border-[#FF172F]/40 rotate-45 transition-transform duration-700 ease-out group-hover:rotate-90 group-hover:border-[#FF172F]" />
            {/* Inner Glowing Core */}
            <div className="w-3 h-3 bg-[#FF172F] shadow-[0_0_14px_#FF172F] transition-transform duration-300 group-hover:scale-125" />
            {/* Ambient Core Aura */}
            <div className="absolute inset-0 bg-[#FF172F]/15 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          <div className="flex flex-col">
            <span className="font-display text-lg sm:text-xl font-black tracking-[0.22em] text-[#F5F5F5] group-hover:text-white transition-colors flex items-center gap-2">
              DKNOVIX
              <span className="text-[10px] font-mono font-bold text-[#FF172F] tracking-widest hidden sm:inline-block px-1.5 py-0.5 rounded-xs bg-[#26070D] border border-[#FF172F]/30">
                TECH
              </span>
            </span>
            <span className="font-mono text-[9px] tracking-[0.34em] text-[#92929B] group-hover:text-[#FF172F] transition-colors uppercase font-medium">
              TECHNOLOGIES
            </span>
          </div>
        </a>

        {/* ==========================================================
            RIGHT: EXACT NAVIGATION ITEMS + CTA
           ========================================================== */}
        <div className="flex items-center gap-4 xl:gap-6">
          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 relative">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  onMouseEnter={() => {
                    sound.playHover();
                    setHoveredIndex(index);
                  }}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`relative px-3.5 py-2 text-[11px] xl:text-xs font-mono tracking-[0.24em] uppercase transition-all duration-300 rounded-sm ${
                    isActive
                      ? 'text-white font-bold drop-shadow-[0_0_10px_rgba(255,23,47,0.5)]'
                      : 'text-[#92929B] hover:text-[#FFFFFF] font-medium'
                  }`}
                >
                  {/* Link Label */}
                  <span className="relative z-10">{item.label}</span>

                  {/* Hover Subtle Ambient Pill */}
                  {hoveredIndex === index && !isActive && (
                    <motion.div
                      layoutId="hoverNavPill"
                      className="absolute inset-0 bg-white/[0.04] rounded-sm -z-0"
                      transition={{ duration: 0.2 }}
                    />
                  )}

                  {/* Active Navigation: Thin Crimson-Red Underline with Smooth Animated Transition */}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavUnderline"
                      className="absolute bottom-0 left-2 right-2 h-[2px] bg-gradient-to-r from-[#FF172F] via-[#FF612E] to-[#FF172F] rounded-full shadow-[0_0_12px_#FF172F,0_0_20px_rgba(255,23,47,0.6)]"
                      transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Audio FX Synthesizer Toggle */}
          <button
            onClick={toggleSound}
            aria-label="Toggle sci-fi audio effects"
            title={soundEnabled ? 'Mute Interface Audio' : 'Enable Sci-Fi Audio FX'}
            className={`p-2 rounded-sm border transition-all duration-300 cursor-pointer hidden md:flex items-center justify-center ${
              soundEnabled
                ? 'border-[#FF172F]/60 text-[#FF172F] bg-[#26070D]/60 shadow-[0_0_12px_rgba(255,23,47,0.35)]'
                : 'border-white/10 text-[#92929B] hover:text-white hover:border-white/20 bg-[#0B0B0E]/60'
            }`}
          >
            {soundEnabled ? <Volume2 size={15} /> : <VolumeX size={15} />}
          </button>

          {/* Premium Red-Highlighted "LET'S TALK" CTA (visible if sufficient space available) */}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#contact');
            }}
            onMouseEnter={() => sound.playHover()}
            className="hidden sm:inline-flex relative group overflow-hidden px-4 sm:px-5 py-2.5 rounded-sm bg-gradient-to-r from-[#FF172F] to-[#E52B35] text-white font-mono text-[11px] sm:text-xs font-bold tracking-[0.2em] shadow-[0_0_20px_rgba(255,23,47,0.4)] hover:shadow-[0_0_32px_rgba(255,23,47,0.75)] transition-all duration-300 cursor-pointer active:scale-95 border border-[#FF172F]/50"
          >
            <span className="relative z-10 flex items-center gap-1.5">
              <span>LET'S TALK</span>
              <Sparkles size={13} className="text-[#FF612E] animate-pulse" />
            </span>
            <div className="absolute inset-0 bg-white/25 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
          </a>

          {/* Responsive Animated Hamburger Menu on Mobile */}
          <button
            onClick={() => {
              sound.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            aria-label="Toggle Navigation Menu"
            className="lg:hidden p-2 rounded-sm border border-white/15 bg-[#0B0B0E]/80 text-[#F5F5F5] hover:border-[#FF172F]/60 cursor-pointer transition-all duration-300 flex flex-col justify-center items-center w-10 h-10 gap-1.5"
          >
            <motion.span
              animate={mobileMenuOpen ? { rotate: 45, y: 7.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
              className="w-5 h-[2px] bg-[#F5F5F5] block rounded-full origin-center"
            />
            <motion.span
              animate={mobileMenuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.2 }}
              className="w-5 h-[2px] bg-[#FF172F] block rounded-full"
            />
            <motion.span
              animate={mobileMenuOpen ? { rotate: -45, y: -7.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
              className="w-5 h-[2px] bg-[#F5F5F5] block rounded-full origin-center"
            />
          </button>
        </div>
      </div>

      {/* ==========================================================
          MOBILE MENU DRAWER
         ========================================================== */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden bg-[#07070A]/95 border-b border-[#FF172F]/25 backdrop-blur-2xl px-6 py-7 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.9)]"
          >
            <div className="flex flex-col gap-1 max-w-md mx-auto">
              {navItems.map((item, idx) => {
                const isActive = activeSection === item.id;
                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                    className={`flex items-center justify-between py-3 border-b border-white/5 font-mono text-xs tracking-[0.25em] uppercase transition-colors ${
                      isActive
                        ? 'text-white font-bold'
                        : 'text-[#92929B] hover:text-[#FF172F]'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive ? (
                      <span className="w-2 h-2 rounded-full bg-[#FF172F] shadow-[0_0_8px_#FF172F]" />
                    ) : (
                      <ArrowRight size={12} className="text-white/20" />
                    )}
                  </motion.a>
                );
              })}

              {/* Mobile CTA & Audio Controls */}
              <div className="pt-6 flex flex-col gap-4">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('#contact');
                  }}
                  className="w-full py-3 bg-gradient-to-r from-[#FF172F] to-[#E52B35] text-white font-mono text-xs font-bold tracking-[0.2em] uppercase rounded-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,23,47,0.4)]"
                >
                  <span>LET'S TALK</span>
                  <Sparkles size={14} className="text-[#FF612E]" />
                </a>

                <div className="flex items-center justify-between text-xs font-mono text-[#92929B] pt-2">
                  <button
                    onClick={toggleSound}
                    className="flex items-center gap-2 text-[11px] font-mono text-[#92929B] hover:text-white"
                  >
                    {soundEnabled ? <Volume2 size={15} className="text-[#FF172F]" /> : <VolumeX size={15} />}
                    <span>SFX: {soundEnabled ? 'ONLINE' : 'MUTED'}</span>
                  </button>
                  <span className="text-[10px] text-white/30">DKNOVIX // V2.8</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

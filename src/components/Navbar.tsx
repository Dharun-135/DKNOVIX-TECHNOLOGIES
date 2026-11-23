import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

// Navigation items in normal case
const navItems = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Services', href: '#services', id: 'services' },
  { label: 'Our work', href: '#our-work', id: 'our-work' },
  { label: 'Founder', href: '#founder', id: 'founder' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full max-w-full overflow-x-hidden transition-colors duration-300 select-none ${
        isScrolled
          ? 'py-3.5 bg-[#050505]/85 backdrop-blur-md border-b border-[rgba(255,255,255,0.10)]'
          : 'py-5 sm:py-6 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand wordmark: DKNOVIX TECHNOLOGIES */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('#home');
          }}
          className="group flex items-center gap-3 relative z-10 shrink-0 select-none whitespace-nowrap text-decoration-none"
        >
          {/* Minimal diamond core symbol */}
          <div className="relative w-7 h-7 flex items-center justify-center shrink-0">
            <div className="absolute inset-0 border border-[rgba(255,255,255,0.20)] group-hover:border-[#FF172F] rotate-45 transition-colors" />
            <div className="w-2.5 h-2.5 bg-[#FF172F]" />
          </div>

          <div className="flex items-baseline gap-2">
            <span className="font-display font-extrabold text-base sm:text-lg tracking-[0.08em] text-[#F5F5F5] group-hover:text-white transition-colors">
              DKNOVIX
            </span>
            <span className="font-mono text-[11px] tracking-[0.1em] text-[#B4B4BC] uppercase font-normal">
              TECHNOLOGIES
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links + CTA */}
        <div className="flex items-center gap-6 xl:gap-8">
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 relative">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className={`relative px-3.5 py-1.5 text-sm font-sans transition-colors rounded-[4px] ${
                    isActive
                      ? 'text-white font-medium'
                      : 'text-[#D8D8DC]/70 hover:text-white font-normal'
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>

                  {/* Active 1.5px crimson underline */}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavUnderline"
                      className="absolute bottom-0 left-2 right-2 h-[1.5px] bg-[#FF172F]"
                      transition={{ duration: 0.25 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Primary CTA button: Let's talk */}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#contact');
            }}
            className="hidden sm:inline-flex items-center justify-center bg-[#FF172F] hover:bg-[#E52B35] text-white font-sans text-sm font-medium px-5 py-2.5 rounded-[4px] transition-colors"
          >
            Let's talk
          </a>

          {/* Hamburger Menu on Mobile */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="lg:hidden p-2 rounded-[4px] border border-[rgba(255,255,255,0.15)] bg-[#0B0B0E] text-[#F5F5F5] hover:border-[#FF172F] cursor-pointer transition-colors flex flex-col justify-center items-center w-10 h-10 gap-1.5"
          >
            <motion.span
              animate={mobileMenuOpen ? { rotate: 45, y: 7.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
              className="w-5 h-[1.5px] bg-[#F5F5F5] block origin-center"
            />
            <motion.span
              animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.15 }}
              className="w-5 h-[1.5px] bg-[#FF172F] block"
            />
            <motion.span
              animate={mobileMenuOpen ? { rotate: -45, y: -7.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
              className="w-5 h-[1.5px] bg-[#F5F5F5] block origin-center"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden bg-[#07070A] border-b border-[rgba(255,255,255,0.10)] px-6 py-6 overflow-hidden"
          >
            <div className="flex flex-col gap-1 max-w-md mx-auto">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                    className={`flex items-center justify-between py-3 border-b border-[rgba(255,255,255,0.06)] font-sans text-base transition-colors ${
                      isActive
                        ? 'text-white font-medium'
                        : 'text-[#D8D8DC]/70 hover:text-[#FF172F]'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive ? (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF172F]" />
                    ) : (
                      <ArrowRight size={14} className="text-white/20" />
                    )}
                  </a>
                );
              })}

              <div className="pt-5">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('#contact');
                  }}
                  className="w-full py-3 bg-[#FF172F] hover:bg-[#E52B35] text-white font-sans text-sm font-medium rounded-[4px] flex items-center justify-center transition-colors text-center"
                >
                  Let's talk
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

import React from 'react';
import { ArrowUp, Mail, Globe, Phone, FileText } from 'lucide-react';
import { sound } from '../utils/sound';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    sound.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#050505] border-t border-[#FF172F]/20 pt-20 pb-12 overflow-hidden z-10 w-full max-w-full min-w-0">
      {/* Subtle Bottom Crimson Ambient Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#FF172F]/10 blur-[140px] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8 flex items-center justify-center shrink-0">
                <div className="absolute inset-0 border border-[#FF172F]/50 rotate-45" />
                <div className="w-2.5 h-2.5 bg-[#FF172F] shadow-[0_0_10px_#FF172F]" />
              </div>
              <span className="font-display text-2xl font-black tracking-widest text-[#F5F5F5]">
                DKNOVIX
              </span>
            </div>

            <p className="font-mono text-xs text-[#FF172F] tracking-[0.25em] uppercase font-semibold">
              INNOVATING TODAY. BUILDING TOMORROW.
            </p>

            <p className="font-sans text-sm text-[#92929B] max-w-sm leading-relaxed">
              Engineering intelligent digital solutions, modern software architectures, machine learning systems, and next-generation robotics interactions.
            </p>

            {/* Social and Profile Links */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="https://www.linkedin.com/in/dharun-karthik2332"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => sound.playHover()}
                className="w-9 h-9 rounded-sm bg-[#0B0B0E] border border-white/10 hover:border-[#FF172F] flex items-center justify-center text-[#92929B] hover:text-white transition-colors"
                title="LinkedIn Profile"
              >
                <LinkedinIcon size={16} />
              </a>
              <a
                href="https://github.com/Dharun-135"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => sound.playHover()}
                className="w-9 h-9 rounded-sm bg-[#0B0B0E] border border-white/10 hover:border-[#FF172F] flex items-center justify-center text-[#92929B] hover:text-white transition-colors"
                title="GitHub Profile"
              >
                <GithubIcon size={16} />
              </a>
              <a
                href="https://dharunkarthikportfolio.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => sound.playHover()}
                className="w-9 h-9 rounded-sm bg-[#0B0B0E] border border-white/10 hover:border-[#FF172F] flex items-center justify-center text-[#92929B] hover:text-white transition-colors"
                title="Personal Portfolio"
              >
                <Globe size={16} />
              </a>
              <a
                href="mailto:dharun111004@gmail.com"
                onMouseEnter={() => sound.playHover()}
                className="w-9 h-9 rounded-sm bg-[#0B0B0E] border border-white/10 hover:border-[#FF172F] flex items-center justify-center text-[#92929B] hover:text-white transition-colors"
                title="Email Dharun Karthik"
              >
                <Mail size={16} />
              </a>
              <a
                href="/Dharun_Karthik_CV.pdf"
                download="Dharun_Karthik_CV.pdf"
                onMouseEnter={() => sound.playHover()}
                className="w-9 h-9 rounded-sm bg-[#0B0B0E] border border-white/10 hover:border-[#FF172F] flex items-center justify-center text-[#92929B] hover:text-white transition-colors"
                title="Download CV (.PDF)"
              >
                <FileText size={16} />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 className="font-mono text-xs text-[#F5F5F5] font-bold tracking-[0.2em] uppercase mb-4">
              NAVIGATION
            </h4>
            <ul className="space-y-2.5 font-mono text-xs text-[#92929B]">
              {[
                { label: 'HOME', href: '#home' },
                { label: 'ABOUT', href: '#about' },
                { label: 'SERVICES', href: '#services' },
                { label: 'OUR WORK', href: '#our-work' },
                { label: 'FOUNDER', href: '#founder' },
                { label: 'CONTACT', href: '#contact' },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onMouseEnter={() => sound.playHover()}
                    className="hover:text-[#FF172F] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-mono text-xs text-[#F5F5F5] font-bold tracking-[0.2em] uppercase mb-4">
              SERVICES
            </h4>
            <ul className="space-y-2.5 font-mono text-xs text-[#92929B]">
              {[
                'WEB DEVELOPMENT',
                'AI & MACHINE LEARNING',
                'SOFTWARE DEVELOPMENT',
                'DATA ANALYTICS',
                'UI/UX DESIGN',
                'IT SOLUTIONS',
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    onMouseEnter={() => sound.playHover()}
                    className="hover:text-[#FF172F] transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Command Center & Contact Info */}
          <div>
            <h4 className="font-mono text-xs text-[#F5F5F5] font-bold tracking-[0.2em] uppercase mb-4">
              COMMAND CENTER
            </h4>
            <div className="space-y-2.5 font-mono text-xs text-[#92929B] min-w-0">
              <p className="text-white">Abu Dhabi, UAE</p>
              <p className="text-[#F5F5F5]">Founder: Dharun Karthik S L</p>
              <p className="min-w-0">
                <a
                  href="mailto:dharun111004@gmail.com"
                  className="hover:text-[#FF172F] transition-colors break-all text-white/90"
                >
                  dharun111004@gmail.com
                </a>
              </p>
              <p className="min-w-0">
                <a
                  href="tel:+971502332870"
                  className="hover:text-[#FF172F] transition-colors text-white/90"
                >
                  +971 50 233 2870
                </a>
              </p>
              <p className="pt-1">
                <a
                  href="https://wa.me/971502332870?text=Hello%20DKNOVIX%20Technologies%2C%20I%20would%20like%20to%20discuss%20a%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors text-[11px]"
                >
                  <Phone size={12} />
                  <span>WhatsApp: +971 50 233 2870</span>
                </a>
              </p>
              <div className="pt-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#26070D] border border-[#FF172F]/30 text-[10px] text-[#FF172F]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF172F] animate-ping" />
                  CORE ENGINE ONLINE
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#92929B]">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-center sm:text-left min-w-0">
            <span className="break-words">© {currentYear} DKNOVIX TECHNOLOGIES. ALL RIGHTS RESERVED.</span>
            <span className="text-[#FF172F] hidden sm:inline-block">//</span>
            <span className="text-gradient-fire font-bold tracking-widest uppercase break-words">
              ENGINEER THE FUTURE.
            </span>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            onMouseEnter={() => sound.playHover()}
            className="flex items-center gap-2 px-4 py-2 rounded-sm bg-[#0B0B0E] border border-white/10 hover:border-[#FF172F] text-[#F5F5F5] hover:text-white transition-all cursor-pointer group hover:shadow-[0_0_15px_rgba(255,23,47,0.3)] shrink-0"
          >
            <span>BACK TO TOP</span>
            <ArrowUp size={14} className="text-[#FF172F] group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

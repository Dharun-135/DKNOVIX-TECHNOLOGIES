import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#050505] border-t border-[rgba(255,255,255,0.10)] py-12 md:py-16 z-10 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center space-y-6">
        {/* Navigation & Document Links */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-xs text-[#B4B4BC] tracking-[0.02em]">
          <a
            href="https://www.linkedin.com/in/dharun-karthik2332"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline hover:text-[#F5F5F5] transition-colors"
          >
            LinkedIn
          </a>
          <span className="text-[rgba(255,255,255,0.20)]">·</span>
          <a
            href="https://github.com/Dharun-135"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline hover:text-[#F5F5F5] transition-colors"
          >
            GitHub
          </a>
          <span className="text-[rgba(255,255,255,0.20)]">·</span>
          <a
            href="https://dharunkarthikportfolio.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline hover:text-[#F5F5F5] transition-colors"
          >
            Portfolio
          </a>
          <span className="text-[rgba(255,255,255,0.20)]">·</span>
          <a
            href="/Dharun_Karthik_CV.pdf"
            download="Dharun_Karthik_CV.pdf"
            className="link-underline hover:text-[#F5F5F5] transition-colors"
          >
            Download resume
          </a>
        </div>

        {/* Single Centered Line with Location, Email, Phone, Copyright */}
        <div className="font-mono text-xs text-[#B4B4BC] tabular-nums leading-relaxed max-w-3xl tracking-[0.02em]">
          Abu Dhabi, UAE ·{' '}
          <a
            href="mailto:dharun111004@gmail.com"
            className="link-underline text-[#D8D8DC] hover:text-[#FF172F] transition-colors"
          >
            dharun111004@gmail.com
          </a>{' '}
          ·{' '}
          <a
            href="tel:+971502332870"
            className="link-underline text-[#D8D8DC] hover:text-[#FF172F] transition-colors"
          >
            +971 50 233 2870
          </a>{' '}
          · © 2026 DKNOVIX TECHNOLOGIES
        </div>
      </div>
    </footer>
  );
};

import React from 'react';
import { motion } from 'framer-motion';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="relative py-20 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 scroll-mt-20 w-full max-w-full overflow-hidden min-w-0"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="w-full"
      >
        {/* Section Heading in Sentence Case */}
        <h2
          className="headline-section text-[#F5F5F5] mb-6 text-left"
          style={{ fontSize: 'clamp(2rem, 4.5vw, 3.6rem)' }}
        >
          Technology without <span className="text-[#FF172F]">limits.</span>
        </h2>

        {/* Studio Copy */}
        <p className="font-sans text-[1.05rem] leading-[1.65] text-[#D8D8DC]/90 max-w-[62ch] mb-16 text-left">
          I started DKNOVIX to turn ideas into working software. I studied AI and Data Science, built an IoT project that was selected at the MSME Hackathon 2024, and I keep building.
        </p>

        {/* 2x2 Grid Separated by 1px Lines (No Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 border border-[rgba(255,255,255,0.10)] rounded-[4px] overflow-hidden bg-transparent">
          {/* Innovation */}
          <div className="p-8 sm:p-10 border-b md:border-r border-[rgba(255,255,255,0.10)] flex flex-col justify-start">
            <h3 className="font-display font-semibold text-xl text-[#F5F5F5] mb-3 tracking-[-0.01em]">
              Innovation
            </h3>
            <p className="font-sans text-base text-[#D8D8DC]/90 leading-[1.65]">
              Building custom hardware and software prototypes that solve direct physical constraints.
            </p>
          </div>

          {/* Intelligence */}
          <div className="p-8 sm:p-10 border-b border-[rgba(255,255,255,0.10)] flex flex-col justify-start">
            <h3 className="font-display font-semibold text-xl text-[#F5F5F5] mb-3 tracking-[-0.01em]">
              Intelligence
            </h3>
            <p className="font-sans text-base text-[#D8D8DC]/90 leading-[1.65]">
              Training computer vision and deep learning models to process scans and automate decisions.
            </p>
          </div>

          {/* Creativity */}
          <div className="p-8 sm:p-10 border-b md:border-b-0 md:border-r border-[rgba(255,255,255,0.10)] flex flex-col justify-start">
            <h3 className="font-display font-semibold text-xl text-[#F5F5F5] mb-3 tracking-[-0.01em]">
              Creativity
            </h3>
            <p className="font-sans text-base text-[#D8D8DC]/90 leading-[1.65]">
              Designing responsive interfaces with modern 3D graphics that communicate ideas clearly.
            </p>
          </div>

          {/* Excellence */}
          <div className="p-8 sm:p-10 flex flex-col justify-start">
            <h3 className="font-display font-semibold text-xl text-[#F5F5F5] mb-3 tracking-[-0.01em]">
              Excellence
            </h3>
            <p className="font-sans text-base text-[#D8D8DC]/90 leading-[1.65]">
              Writing tested, maintainable codebases that perform predictably in production.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

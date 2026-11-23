import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface IntroProps {
  onComplete: () => void;
}

export const CinematicIntro: React.FC<IntroProps> = ({ onComplete }) => {
  const [stage, setStage] = useState<number>(0);

  useEffect(() => {
    // Stage sequence
    // 0: Initial black screen
    // 1: Thin crimson laser cuts across
    // 2: DKNOVIX TECHNOLOGIES reveals
    // 3: "INNOVATING TODAY. BUILDING TOMORROW." reveals + light travels
    // 4: Fade out curtain to reveal 3D scene

    const t1 = setTimeout(() => {
      setStage(1);
    }, 400);

    const t2 = setTimeout(() => {
      setStage(2);
    }, 1400);

    const t3 = setTimeout(() => {
      setStage(3);
    }, 2800);

    const t4 = setTimeout(() => {
      setStage(4);
    }, 4500);

    const t5 = setTimeout(() => {
      onComplete();
    }, 5400);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {stage < 5 && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: stage === 4 ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050505] text-white select-none overflow-hidden"
        >
          {/* Subtle Ambient Red Glow center */}
          <div className="absolute w-[500px] h-[500px] rounded-full bg-[#FF172F]/10 blur-[120px] pointer-events-none" />

          {/* Thin Horizontal Crimson Laser Beam */}
          {stage >= 1 && stage < 4 && (
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: [0, 1, 0.7, 1] }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="absolute w-full h-[1.5px] bg-gradient-to-r from-transparent via-[#FF172F] to-transparent"
            />
          )}

          {/* Central Logo & Tagline Container */}
          <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl">
            {/* Logo Mark */}
            {stage >= 2 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.85, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="mb-6 flex items-center justify-center gap-3"
              >
                <div className="relative w-10 h-10 flex items-center justify-center">
                  <div className="absolute inset-0 border border-[#FF172F]/40 rotate-45" />
                  <div className="w-4 h-4 bg-[#FF172F]" />
                </div>
              </motion.div>
            )}

            {/* DKNOVIX Brand Name */}
            {stage >= 2 && (
              <motion.div
                initial={{ opacity: 0, filter: 'blur(8px)', y: 20 }}
                animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="relative overflow-hidden py-2"
              >
                <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-[0.25em] text-[#F5F5F5] uppercase">
                  DKNOVIX
                </h1>
                
                {/* Laser light sweep across logo */}
                {stage >= 3 && (
                  <motion.div
                    initial={{ left: '-100%' }}
                    animate={{ left: '200%' }}
                    transition={{ duration: 1.2, ease: 'easeInOut' }}
                    className="absolute top-0 bottom-0 w-32 bg-gradient-to-r from-transparent via-white/80 to-transparent skew-x-[-25deg] pointer-events-none"
                  />
                )}
              </motion.div>
            )}

            {/* TECHNOLOGIES Sub-title */}
            {stage >= 2 && (
              <motion.p
                initial={{ opacity: 0, letterSpacing: '0.1em' }}
                animate={{ opacity: 0.8, letterSpacing: '0.55em' }}
                transition={{ duration: 1.0, delay: 0.2 }}
                className="font-mono text-xs sm:text-sm text-[#FF172F] uppercase font-semibold mt-1 mb-8"
              >
                TECHNOLOGIES
              </motion.p>
            )}

            {/* Tagline */}
            {stage >= 3 && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-col items-center gap-1.5"
              >
                <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-[#FF172F]/50 to-transparent mb-3" />
                <p className="font-sans text-xs sm:text-sm font-medium tracking-[0.3em] text-[#92929B] uppercase">
                  INNOVATING TODAY.
                </p>
                <p className="font-sans text-xs sm:text-sm font-semibold tracking-[0.3em] text-gradient-fire uppercase">
                  BUILDING TOMORROW.
                </p>
              </motion.div>
            )}
          </div>

          {/* System Status line */}
          <div className="absolute bottom-10 left-8 right-8 flex items-center justify-between text-xs font-mono text-[#92929B] border-t border-[rgba(255,255,255,0.10)] pt-4">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF172F]" />
              Loading 3D scene
            </span>
            <button
              onClick={() => onComplete()}
              className="text-[#92929B] hover:text-[#F5F5F5] transition-colors cursor-pointer border border-[rgba(255,255,255,0.15)] px-3 py-1 rounded-[4px] hover:border-[#FF172F]"
            >
              Skip intro
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};


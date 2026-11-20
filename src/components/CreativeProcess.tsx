import React from 'react';
import { motion } from 'framer-motion';
import { Search, Compass, Terminal, Rocket, ArrowRight } from 'lucide-react';
import { sound } from '../utils/sound';

const processSteps = [
  {
    step: '01',
    title: 'DISCOVER',
    motto: 'UNDERSTAND THE VISION & REQUIREMENTS',
    description: 'Deconstruct objectives, audit technical prerequisites, map problem spaces, and architect foundational feasibility benchmarks.',
    icon: Search,
    deliverables: ['Stakeholder Blueprint', 'Feasibility Matrix', 'System Architecture Plan'],
  },
  {
    step: '02',
    title: 'DESIGN',
    motto: 'DEVELOP INNOVATIVE CONCEPTS & USER EXPERIENCES',
    description: 'Synthesize interactive prototypes, sensory design languages, ergonomic user flows, and high-fidelity 3D aesthetic environments.',
    icon: Compass,
    deliverables: ['Interactive UX Prototype', 'Design Tokens', 'Design System Spec'],
  },
  {
    step: '03',
    title: 'DEVELOP',
    motto: 'BUILD EFFICIENT, INTELLIGENT, SCALABLE SOLUTIONS',
    description: 'Execute resilient codebases, train and fine-tune machine learning models, calibrate IoT hardware arrays, and stress-test pipelines.',
    icon: Terminal,
    deliverables: ['Clean Production Code', 'Trained Neural Models', 'Automated CI/CD'],
  },
  {
    step: '04',
    title: 'DELIVER',
    motto: 'LAUNCH, OPTIMIZE, AND IMPROVE',
    description: 'Seamless cloud deployment, zero-downtime integration, continuous telemetry monitoring, and iterative algorithmic optimization.',
    icon: Rocket,
    deliverables: ['Global Deployment', 'Telemetry Analytics', 'Ongoing Iterations'],
  },
];

export const CreativeProcess: React.FC = () => {
  return (
    <section id="process" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 scroll-mt-20 min-w-0">
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
          <span>07 // METHODOLOGY</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#F5F5F5] tracking-tight leading-tight"
        >
          IDEAS. ENGINEERING. IMPACT.
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-24 h-[2px] bg-gradient-to-r from-[#FF172F] via-[#FF612E] to-transparent mt-4 origin-left"
        />
      </div>

      {/* Process Steps Connected Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
        {processSteps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              onMouseEnter={() => sound.playHover()}
              className="glass-panel glass-panel-hover p-7 rounded-sm flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Corner Step Indicator */}
              <div className="absolute top-0 right-0 p-3 bg-[#050505] border-b border-l border-white/10 font-mono text-xs font-black text-[#FF172F]">
                {step.step}
              </div>

              <div>
                <div className="w-12 h-12 rounded-sm bg-[#050505] border border-white/10 group-hover:border-[#FF172F] flex items-center justify-center text-[#92929B] group-hover:text-[#FF172F] transition-all duration-300 mb-6 group-hover:shadow-[0_0_15px_rgba(255,23,47,0.3)]">
                  <Icon size={22} />
                </div>

                <h3 className="font-display text-2xl font-black text-[#F5F5F5] group-hover:text-white mb-1 tracking-wide">
                  {step.title}
                </h3>

                <p className="font-mono text-[11px] text-[#FF612E] tracking-wider mb-4 uppercase font-semibold leading-tight">
                  {step.motto}
                </p>

                <p className="font-sans text-xs sm:text-sm text-[#92929B] group-hover:text-[#F5F5F5]/85 leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              {/* Deliverables List */}
              <div className="pt-4 border-t border-white/5">
                <span className="font-mono text-[10px] text-[#92929B] tracking-[0.2em] uppercase block mb-2">
                  KEY DELIVERABLES:
                </span>
                <ul className="space-y-1">
                  {step.deliverables.map((item) => (
                    <li key={item} className="flex items-center gap-1.5 text-xs font-mono text-[#F5F5F5]">
                      <ArrowRight size={10} className="text-[#FF172F]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};


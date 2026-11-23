import React from 'react';
import { motion } from 'framer-motion';

const processSteps = [
  {
    step: '01',
    title: 'Discover',
    subtitle: 'Clarify objectives and feasibility',
    description:
      'We discuss your problem, technical requirements, target users, and constraints. I map out architecture options and establish what is practical before writing code.',
    deliverables: ['Requirements outline', 'Architecture plan', 'Timeline & scope'],
  },
  {
    step: '02',
    title: 'Design',
    subtitle: 'Prototype interface and data flow',
    description:
      'Wireframing key screens, establishing clean typography and layouts, and designing database schemas and API contracts so all components fit together smoothly.',
    deliverables: ['UI mockups & flow', 'Data models', 'API specifications'],
  },
  {
    step: '03',
    title: 'Develop',
    subtitle: 'Write tested, production code',
    description:
      'Building the frontend, backend APIs, IoT firmware or machine learning models. I test locally, optimize queries and bundle sizes, and keep code organized.',
    deliverables: ['Clean codebase', 'Model or sensor calibration', 'Testing & validation'],
  },
  {
    step: '04',
    title: 'Deliver',
    subtitle: 'Deploy, verify, and hand over',
    description:
      'Deploying to production hosting (Netlify, Vercel, cloud VMs), setting up domain DNS, verifying SSL, and handing over complete documentation and source access.',
    deliverables: ['Live deployment', 'DNS & SSL configuration', 'Handover documentation'],
  },
];

export const CreativeProcess: React.FC = () => {
  return (
    <section id="process" className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 scroll-mt-20 w-full overflow-hidden">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mb-14 md:mb-16"
      >
        <h2 className="headline-section text-[#F5F5F5]">
          How we work.
        </h2>
        <p className="mt-4 text-[#D8D8DC]/90 text-base max-w-[62ch]">
          A clear four-step process from requirements to working deployment.
        </p>
      </motion.div>

      {/* 4 Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {processSteps.map((item, idx) => (
          <motion.div
            key={item.step}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className="p-6 md:p-7 rounded-[4px] border border-[rgba(255,255,255,0.10)] bg-[#0B0B0E] flex flex-col justify-between hover:border-[#FF172F]/50 transition-colors"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs tabular-nums text-[#FF172F] tracking-wider">
                  {item.step}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[rgba(255,255,255,0.20)]" />
              </div>

              <h3 className="font-display font-semibold text-xl text-[#F5F5F5] mb-1">
                {item.title}
              </h3>

              <p className="font-mono text-xs text-[#92929B] mb-4">
                {item.subtitle}
              </p>

              <p className="text-sm text-[#D8D8DC]/90 leading-relaxed mb-6">
                {item.description}
              </p>
            </div>

            <div className="pt-4 border-t border-[rgba(255,255,255,0.08)]">
              <span className="font-mono text-[11px] text-[#92929B] block mb-2">
                Deliverables
              </span>
              <ul className="space-y-1.5">
                {item.deliverables.map((deliv) => (
                  <li key={deliv} className="font-mono text-xs text-[#F5F5F5] flex items-center gap-2">
                    <span className="text-[#FF172F] text-[10px]">—</span>
                    <span>{deliv}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

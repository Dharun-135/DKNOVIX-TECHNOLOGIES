import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Award, Cpu, Sparkles, X, CheckCircle, ArrowRight, Eye, Flame } from 'lucide-react';
import type { ProjectItem } from '../types';
import { sound } from '../utils/sound';
import { GithubIcon } from './Icons';

const projects: (ProjectItem & { svgPath?: string })[] = [
  {
    id: 'proj-01',
    number: 'PROJECT 01',
    title: 'SMART UMBRELLA FOR BIKES AND CYCLES USING IoT',
    subtitle: 'Automated Weather-Adaptive Micro-Mobility Shield',
    description: 'An automated umbrella system designed to protect riders from rain and sunlight through intelligent sensors and motorized mechanisms.',
    fullDetails: 'Engineered an autonomous micro-mobility protection system utilizing ESP32 and NodeMCU microcontrollers paired with precision rain detection probes and UV radiometric sensors. The canopy deploys and retracts dynamically via high-torque servo motors governed by algorithmic environmental thresholds, with full real-time telemetry streaming to a custom mobile Blynk dashboard.',
    category: 'IoT & Hardware',
    recognition: 'MSME Hackathon 2024 Recognition (Valued at ₹15 Lakhs / ~AED 62,000)',
    technologies: ['ESP32', 'NodeMCU', 'Rain Sensor', 'UV Sensor', 'Servo Motor', 'Blynk'],
    github: 'https://github.com/Dharun-135',
    svgPath: '/projects/smart-umbrella.svg',
    stats: [
      { label: 'RESPONSE TIME', value: '< 450ms' },
      { label: 'VALUATION IMPACT', value: '₹15 Lakhs' },
      { label: 'ACCURACY', value: '99.4%' },
    ],
  },
  {
    id: 'proj-02',
    number: 'PROJECT 02',
    title: 'MRI-BASED LUMBAR SPINE DEGENERATIVE CONDITION DETECTION',
    subtitle: 'Deep Learning Computer Vision Diagnostic Framework',
    description: 'A deep learning-based project designed to analyze MRI images and identify lumbar spine degenerative conditions.',
    fullDetails: 'Developed an automated computer vision diagnostic pipeline using Convolutional Neural Networks and TensorFlow. The model segments lumbar vertebrae and intervertebral discs from high-resolution MRI scans, automatically classifying disc herniation, spinal stenosis, and degenerative disc disease with clinically validated accuracy to aid medical specialists in rapid triage.',
    category: 'AI & Deep Learning',
    recognition: 'Peer-Reviewed Research Methodology',
    technologies: ['Python', 'Deep Learning', 'TensorFlow', 'Keras', 'Image Processing', 'OpenCV'],
    github: 'https://github.com/Dharun-135',
    svgPath: '/projects/mri-spine.svg',
    stats: [
      { label: 'MODEL ACCURACY', value: '94.8%' },
      { label: 'INFERENCE SPEED', value: '120ms / scan' },
      { label: 'VERTEBRAE DETECTED', value: 'L1 - S1' },
    ],
  },
  {
    id: 'proj-03',
    number: 'PROJECT 03',
    title: 'FIRE DETECTION SYSTEM',
    subtitle: 'Intelligent Environmental Hazard Sentinel & Alert Array',
    description: 'A sensor-based intelligent fire detection project designed to monitor environmental conditions and generate alerts.',
    fullDetails: 'Engineered a critical safety embedded sentinel that fuses optical flame sensors with smoke/gas detection probes to prevent industrial hazards. The firmware executes anomaly detection algorithms on localized microcontrollers to suppress false positives and broadcasts immediate audible and digital multi-channel emergency alerts within milliseconds of thermal or gas anomalies.',
    category: 'Security & Automation',
    recognition: 'Industrial Prototype Grade',
    technologies: ['Embedded Systems', 'Sensors', 'Alerts', 'IoT Microcontrollers', 'Emergency Relays'],
    github: 'https://github.com/Dharun-135',
    svgPath: '/projects/fire-detection.svg',
    stats: [
      { label: 'FLAME DETECTION', value: '< 100ms' },
      { label: 'GAS THRESHOLD', value: '200 - 10000 ppm' },
      { label: 'UPTIME SLA', value: '99.99%' },
    ],
  },
  {
    id: 'proj-04',
    number: 'PROJECT 04',
    title: 'THREE-STAGE FACE ANTI-SPOOFING',
    subtitle: 'Advanced Physical Presentation Attack Detection (PAD) Pipeline',
    description: 'A robust multi-tier biometric security system defending facial authentication models against print, screen replay, and mask presentation attacks.',
    fullDetails: 'Engineered a state-of-the-art three-stage Presentation Attack Detection (PAD) framework: Stage 1 executes fast screening with Laplacian Variance blur assessment and lightweight MobileNetV3 for instant rejection of coarse attacks. Stage 2 deploys forensic analysis with high-resolution EfficientNet texture inspection paired with 2D Fast Fourier Transform (FFT) frequency spectrum analysis to isolate subtle screen Moiré patterns and print artifacts. Stage 3 maintains a 16-frame sliding temporal buffer evaluating continuous micro-expressions, physiological blinking, and head motion dynamics.',
    category: 'AI & Deep Learning',
    recognition: 'Biometric Security & Attack Coverage Architecture',
    technologies: ['PyTorch', 'TorchVision', 'OpenCV', 'MobileNetV3', 'EfficientNet', '2D FFT', 'Albumentations', 'Scikit-Learn'],
    github: 'https://github.com/manosakthi3112/Three-Stage-Face-Anti-Spoofing-',
    svgPath: '/projects/face-antispoofing.svg',
    stats: [
      { label: 'DEFENSE PIPELINE', value: '3 Stages' },
      { label: 'TEMPORAL BUFFER', value: '16 Frames' },
      { label: 'FREQUENCY DOMAIN', value: '2D FFT Moiré' },
    ],
  },
  {
    id: 'proj-05',
    number: 'PROJECT 05',
    title: 'PERSONAL PORTFOLIO WEBSITE',
    subtitle: 'Interactive Cyberpunk 3D Developer & Founder Portfolio',
    description: 'A high-performance modern developer portfolio featuring real-time 3D robotics, Framer Motion animations, and custom design systems.',
    fullDetails: 'Architected a cutting-edge interactive portfolio and digital command center utilizing React, TypeScript, and Tailwind CSS. Features custom WebGL/Three.js 3D robot mascot rendering, reactive sound synthesis, Netlify continuous integration and form processing, and pixel-perfect mobile-first typography optimized for high-conversion identity presentation.',
    category: 'Web & Software',
    recognition: 'Production Web Architecture',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Portfolio', 'React Three Fiber', 'Framer Motion'],
    github: 'https://github.com/Dharun-135/DHARUN-PORTFOLIO',
    demo: 'https://dharunkarthikportfolio.netlify.app/',
    svgPath: '/projects/portfolio-web.svg',
    stats: [
      { label: 'PERFORMANCE SCORE', value: '99 / 100' },
      { label: 'FRAME RATE', value: '60 FPS Solid' },
      { label: 'RESPONSIVE', value: '100% Mobile Ready' },
    ],
  },
];

export const FeaturedProjects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<(ProjectItem & { svgPath?: string }) | null>(null);

  return (
    <section id="our-work" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 scroll-mt-20 min-w-0">
      {/* Section Header */}
      <div className="flex flex-col items-start mb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 font-mono text-xs text-[#FF172F] tracking-[0.3em] uppercase mb-3"
        >
          <span className="w-2 h-2 bg-[#FF172F]" />
          <span>03 // OUR WORK & INNOVATION</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#F5F5F5] tracking-tight leading-tight"
        >
          INNOVATION IN ACTION.
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-24 h-[2px] bg-gradient-to-r from-[#FF172F] via-[#FF612E] to-transparent mt-4 origin-left"
        />
      </div>

      {/* Large Cinematic Project Cards */}
      <div className="space-y-12">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.12 }}
            className="glass-panel rounded-sm border border-[#FF172F]/20 overflow-hidden group hover:border-[#FF172F]/50 transition-all duration-500 shadow-[0_10px_35px_rgba(0,0,0,0.7)] min-w-0"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
              {/* Left Column: Visual Schematic Preview */}
              <div className="lg:col-span-5 bg-[#08080B] p-6 sm:p-8 relative flex flex-col justify-between overflow-hidden border-b lg:border-b-0 lg:border-r border-white/10 group-hover:bg-[#0D090E] transition-colors duration-500 min-w-0">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF172F]/10 blur-[80px] pointer-events-none group-hover:bg-[#FF172F]/20 transition-colors" />

                <div className="flex flex-col gap-2 relative z-10 mb-6">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <span className="font-mono text-xs text-[#FF172F] font-bold tracking-[0.2em] uppercase">
                      {project.number}
                    </span>
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-[#050505] text-[#92929B] border border-white/10 shrink-0">
                      {project.category}
                    </span>
                  </div>

                  {project.recognition && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#26070D]/80 border border-[#FF172F]/40 text-[#FF612E] font-mono text-[11px] font-semibold mt-1">
                      <Award size={13} className="text-[#FF172F] shrink-0 animate-pulse" />
                      <span className="break-words">{project.recognition}</span>
                    </div>
                  )}
                </div>

                {/* Visual Graphic Representation */}
                <div className="relative aspect-[16/10] rounded-sm bg-[#050505] border border-white/10 p-4 sm:p-6 flex flex-col items-center justify-center overflow-hidden group-hover:border-[#FF172F]/40 transition-colors mb-6 min-w-0">
                  <div className="absolute inset-0 cyber-grid opacity-30" />
                  
                  {project.id === 'proj-01' && (
                    <div className="relative z-10 flex flex-col items-center text-center">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-dashed border-[#FF172F]/60 flex items-center justify-center relative group-hover:rotate-45 transition-transform duration-700">
                        <Cpu size={34} className="text-[#FF172F]" />
                      </div>
                      <span className="font-mono text-[10px] sm:text-[11px] text-[#92929B] tracking-widest mt-3">
                        ESP32 IoT CORE // CANOPY SERVO
                      </span>
                    </div>
                  )}

                  {project.id === 'proj-02' && (
                    <div className="relative z-10 flex flex-col items-center text-center">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg border-2 border-[#FF612E]/50 flex items-center justify-center relative">
                        <div className="w-10 h-10 border border-[#FF172F] rounded-full animate-ping opacity-30 absolute" />
                        <span className="font-mono text-lg sm:text-xl font-black text-white">MRI</span>
                      </div>
                      <span className="font-mono text-[10px] sm:text-[11px] text-[#92929B] tracking-widest mt-3">
                        NEURAL VISION // LUMBAR SEGMENTATION
                      </span>
                    </div>
                  )}

                  {project.id === 'proj-03' && (
                    <div className="relative z-10 flex flex-col items-center text-center">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#26070D] border-2 border-[#FF172F] flex items-center justify-center shadow-[0_0_20px_#FF172F]">
                        <Flame size={32} className="text-[#FF612E] animate-bounce" />
                      </div>
                      <span className="font-mono text-[10px] sm:text-[11px] text-[#92929B] tracking-widest mt-3">
                        OPTICAL SENSOR // ALERT ARRAY
                      </span>
                    </div>
                  )}

                  {project.id === 'proj-04' && (
                    <div className="relative z-10 flex flex-col items-center text-center">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-[#FF172F]/70 flex items-center justify-center relative bg-[#26070D]/40">
                        <Eye size={32} className="text-[#FF172F] animate-pulse" />
                        <div className="absolute inset-0 rounded-full border border-dashed border-[#FF612E] animate-spin" />
                      </div>
                      <span className="font-mono text-[10px] sm:text-[11px] text-[#92929B] tracking-widest mt-3">
                        3-STAGE PAD // 2D FFT &amp; TEMPORAL
                      </span>
                    </div>
                  )}

                  {project.id === 'proj-05' && (
                    <div className="relative z-10 flex flex-col items-center text-center">
                      <div className="w-20 sm:w-24 h-12 sm:h-14 rounded border border-white/20 bg-[#0B0B0E] flex flex-col p-1.5 shadow-lg">
                        <div className="flex gap-1 mb-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FF172F]" />
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FF612E]" />
                          <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                        </div>
                        <div className="flex-1 bg-white/5 rounded flex items-center justify-center">
                          <Sparkles size={16} className="text-[#FF172F]" />
                        </div>
                      </div>
                      <span className="font-mono text-[10px] sm:text-[11px] text-[#92929B] tracking-widest mt-3">
                        REACT 19 // WEBGL 3D PORTFOLIO
                      </span>
                    </div>
                  )}

                  <div className="absolute bottom-2 right-2 text-[9px] font-mono text-white/30">
                    DK-SCHEMATIC // V4.1
                  </div>
                </div>

                {project.stats && (
                  <div className="grid grid-cols-3 gap-2 pt-4 border-t border-white/5 relative z-10">
                    {project.stats.map((st) => (
                      <div key={st.label} className="flex flex-col min-w-0">
                        <span className="font-mono text-[9px] text-[#92929B] truncate">{st.label}</span>
                        <span className="font-mono text-xs font-bold text-[#F5F5F5] truncate">{st.value}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Right Column: Project Dossier & Interaction */}
              <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between min-w-0">
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#F5F5F5] group-hover:text-white transition-colors mb-2 break-words">
                    {project.title}
                  </h3>
                  <p className="font-mono text-xs text-[#FF612E] tracking-wider mb-6 uppercase font-medium">
                    {project.subtitle}
                  </p>

                  <p className="font-sans text-sm sm:text-base text-[#92929B] leading-relaxed mb-8">
                    {project.description}
                  </p>

                  <div className="mb-8">
                    <span className="font-mono text-[10px] text-[#92929B] tracking-[0.2em] uppercase block mb-3">
                      // INTEGRATED TECHNOLOGIES
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 rounded-sm bg-[#050505] border border-white/10 text-xs font-mono text-[#F5F5F5] group-hover:border-[#FF172F]/30 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                  <button
                    onClick={() => {
                      sound.playClick();
                      setSelectedProject(project);
                    }}
                    onMouseEnter={() => sound.playHover()}
                    className="w-full sm:w-auto px-6 py-3 rounded-sm bg-[#FF172F] hover:bg-[#E52B35] text-white font-mono text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-[0_0_20px_rgba(255,23,47,0.35)] hover:shadow-[0_0_30px_rgba(255,23,47,0.6)] cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>VIEW ARCHITECTURE</span>
                    <ArrowRight size={14} />
                  </button>

                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseEnter={() => sound.playHover()}
                        className="flex-1 sm:flex-none p-3 rounded-sm bg-[#050505] border border-white/10 hover:border-[#FF172F]/50 text-[#92929B] hover:text-white transition-all flex items-center justify-center gap-2 text-xs font-mono"
                        title="GitHub Repository"
                      >
                        <GithubIcon size={15} />
                        <span>SOURCE CODE</span>
                      </a>
                    )}

                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseEnter={() => sound.playHover()}
                        className="flex-1 sm:flex-none p-3 rounded-sm bg-[#050505] border border-white/10 hover:border-[#FF172F]/50 text-[#92929B] hover:text-white transition-all flex items-center justify-center gap-2 text-xs font-mono"
                        title="Live Demo"
                      >
                        <ExternalLink size={15} />
                        <span>LIVE DEMO</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-panel max-w-2xl w-full p-6 sm:p-8 rounded-sm border border-[#FF172F]/40 relative bg-[#0B0B0E] max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 text-[#92929B] hover:text-white cursor-pointer"
                title="Close"
              >
                <X size={22} />
              </button>

              <span className="font-mono text-xs text-[#FF172F] tracking-[0.25em] uppercase font-bold block mb-2">
                {selectedProject.number} // ARCHITECTURAL DOSSIER
              </span>

              <h3 className="font-display text-2xl sm:text-3xl font-black text-white mb-2 break-words">
                {selectedProject.title}
              </h3>

              <p className="font-mono text-xs text-[#FF612E] tracking-wider mb-6 uppercase">
                {selectedProject.subtitle}
              </p>

              {selectedProject.recognition && (
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-[#26070D] border border-[#FF172F]/40 text-[#FF172F] font-mono text-xs font-bold mb-6">
                  <Award size={15} className="shrink-0" />
                  <span className="break-words">{selectedProject.recognition}</span>
                </div>
              )}

              <div className="space-y-4 mb-8">
                <h4 className="font-mono text-xs text-[#92929B] tracking-[0.2em] uppercase">
                  ENGINEERING SPECIFICATION:
                </h4>
                <p className="font-sans text-sm sm:text-base text-[#F5F5F5] leading-relaxed bg-[#050505] p-5 rounded border border-white/5">
                  {selectedProject.fullDetails}
                </p>
              </div>

              <div className="mb-8">
                <h4 className="font-mono text-xs text-[#92929B] tracking-[0.2em] uppercase mb-3">
                  INTEGRATED PROTOCOLS &amp; STACK:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((t) => (
                    <span
                      key={t}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-[#050505] border border-[#FF172F]/30 text-xs font-mono text-white rounded"
                    >
                      <CheckCircle size={12} className="text-[#FF172F]" />
                      <span>{t}</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-[#050505] hover:bg-[#26070D] border border-[#FF172F]/40 text-white font-mono text-xs rounded flex items-center gap-2 transition-colors"
                    >
                      <GithubIcon size={14} />
                      <span>VIEW CODE</span>
                    </a>
                  )}
                  {selectedProject.demo && (
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-[#FF172F] hover:bg-[#E52B35] text-white font-mono text-xs rounded flex items-center gap-2 transition-colors"
                    >
                      <ExternalLink size={14} />
                      <span>LIVE SITE</span>
                    </a>
                  )}
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white font-mono text-xs tracking-wider uppercase rounded-sm cursor-pointer"
                >
                  CLOSE DOSSIER
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

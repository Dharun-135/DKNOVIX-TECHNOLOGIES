import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  image: string;
  alt: string;
  problem: string;
  built: string;
  tools: string[];
  note?: string;
  github: string;
  demo?: string;
}

const projects: Project[] = [
  {
    id: 'smart-umbrella',
    title: 'Smart umbrella for bikes and cycles using IoT',
    image: './projects/umbrella.webp',
    alt: 'Illustration of a bicycle with a motorised umbrella',
    problem: 'Motorcyclists and cyclists have no hands-free protection against sudden downpours and harsh UV exposure while riding.',
    built: 'An automated IoT umbrella system using ESP32 and NodeMCU with rain, temperature, and UV sensors. A high-torque servo motor deploys or retracts the canopy automatically based on environmental thresholds, with real-time telemetry streaming to a Blynk mobile dashboard and a manual override switch.',
    tools: ['ESP32', 'NodeMCU', 'Rain Sensor', 'UV Sensor', 'Servo Motor', 'Blynk'],
    note: 'Selected at MSME Hackathon 2024 (project valued at ₹15 Lakh / about AED 62,000). Published in the International Journal of Engineering Development and Research (IJEDR, Paper ID: IJEDR2602179).',
    github: 'https://github.com/Dharun-135',
  },
  {
    id: 'mri-lumbar',
    title: 'MRI-based lumbar spine degenerative condition detection',
    image: './projects/spine.webp',
    alt: 'Illustration of a glowing lumbar spine scan',
    problem: 'Diagnosing lumbar spine degeneration across hundreds of MRI slices requires time-consuming manual measurement by medical specialists.',
    built: 'A Convolutional Neural Network (CNN) in Python with TensorFlow and Keras that segments lumbar vertebrae (L1–S1) from MRI scans. It applies DICOM contrast normalization and noise reduction to detect disc herniation and spinal stenosis, generating visual anomaly maps to support clinical triage.',
    tools: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'DICOM', 'Image Processing'],
    note: 'Peer-reviewed scientific methodology evaluating multi-slice diagnostic reliability.',
    github: 'https://github.com/Dharun-135',
  },
  {
    id: 'fire-detection',
    title: 'Fire detection system',
    image: './projects/fire.webp',
    alt: 'Illustration of an ESP32 fire and smoke detection board',
    problem: 'Standard optical smoke alarms suffer from false alarms and sluggish reaction times during rapid thermal hazards in industrial workshops.',
    built: 'An embedded safety array combining optical flame sensors with smoke and heat sensors. The microcontroller runs localized anomaly-detection routines to verify combustion events within milliseconds and triggers automated buzzer alerts and digital notifications.',
    tools: ['Embedded C++', 'Flame Sensor', 'Gas/Smoke Sensor', 'Microcontrollers', 'Relay Circuits'],
    note: 'Hardware prototype tested with rapid response triggers under 100ms.',
    github: 'https://github.com/Dharun-135',
  },
  {
    id: 'face-antispoofing',
    title: 'Three-stage face anti-spoofing',
    image: './projects/antispoof.webp',
    alt: 'Illustration of a three-stage face anti-spoofing verification system',
    problem: 'Facial verification cameras are vulnerable to presentation attacks using high-resolution printed photos, digital tablet replays, and flexible masks.',
    built: 'A physical Presentation Attack Detection (PAD) system built in three stages: Stage 1 uses Laplacian variance blur checks and MobileNetV3 for instant screening; Stage 2 applies EfficientNet texture inspection and 2D Fast Fourier Transform (FFT) frequency analysis to isolate screen Moiré patterns; Stage 3 evaluates a 16-frame sliding temporal buffer tracking physiological blinking and natural head movement.',
    tools: ['PyTorch', 'TorchVision', 'OpenCV', 'MobileNetV3', 'EfficientNet', '2D FFT', 'Albumentations'],
    note: 'Multi-stage defense architecture preventing both 2D print and digital video presentation attacks.',
    github: 'https://github.com/manosakthi3112/Three-Stage-Face-Anti-Spoofing-',
  },
  {
    id: 'portfolio-website',
    title: 'Personal portfolio website',
    image: './projects/portfolio.webp',
    alt: 'Illustration of developer portfolio website on laptop and mobile',
    problem: 'Presenting software engineering, data analytics, and embedded IoT projects in a clean, high-performance web experience.',
    built: 'A responsive developer studio website built with React 19, TypeScript, and Tailwind CSS. Features real-time 3D robotics with React Three Fiber, Framer Motion transitions, and Netlify form handling without third-party dependencies.',
    tools: ['React 19', 'TypeScript', 'Tailwind CSS', 'React Three Fiber', 'Framer Motion'],
    note: 'Responsive layout tested across desktop and mobile screen sizes.',
    github: 'https://github.com/Dharun-135/DKNOVIX-TECHNOLOGIES',
    demo: 'https://dharunkarthikportfolio.netlify.app/',
  },
];

export const FeaturedProjects: React.FC = () => {
  return (
    <section
      id="our-work"
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
          className="headline-section text-[#F5F5F5] mb-4 text-left"
          style={{ fontSize: 'clamp(2rem, 4.5vw, 3.6rem)' }}
        >
          Selected <span className="text-[#FF172F]">projects.</span>
        </h2>

        <p className="font-sans text-[1.05rem] leading-[1.65] text-[#D8D8DC]/90 max-w-[62ch] mb-16 text-left">
          Real software, embedded systems, and deep learning models built to solve concrete problems.
        </p>

        {/* Large Alternating Rows */}
        <div className="space-y-20 sm:space-y-28">
          {projects.map((project, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div
                key={project.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                {/* Visual Cover Card with 1px border and 4px radius, no glow */}
                <div
                  className={`w-full order-1 ${
                    isEven ? 'lg:order-1 lg:col-span-5' : 'lg:order-2 lg:col-span-5'
                  }`}
                >
                  <div className="relative group overflow-hidden rounded-[4px] border border-[rgba(255,255,255,0.10)] aspect-[8/5] w-full bg-[#050505] flex flex-col justify-between p-5 sm:p-6">
                    {/* Background Cover Image with 1.03 scale on hover */}
                    <img
                      src={project.image}
                      alt={project.alt}
                      loading={idx === 0 ? 'eager' : 'lazy'}
                      decoding="async"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.03] pointer-events-none"
                    />

                    {/* Left-to-right dark gradient overlay (rgba(5,5,5,0.92) to transparent) */}
                    <div
                      className="absolute inset-0 bg-gradient-to-r from-[rgba(5,5,5,0.92)] via-[rgba(5,5,5,0.65)] to-transparent pointer-events-none"
                      aria-hidden="true"
                    />

                    {/* Top Row: Tech Tags & View on GitHub Link */}
                    <div className="relative z-10 flex items-start justify-between gap-3">
                      <div className="flex flex-wrap gap-1.5 max-w-[65%]">
                        {project.tools.slice(0, 3).map((tool) => (
                          <span
                            key={tool}
                            className="font-mono text-[11px] text-[#D8D8DC] px-2 py-0.5 rounded-[4px] border border-[rgba(255,255,255,0.15)] bg-[rgba(5,5,5,0.70)]"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-underline font-mono text-xs text-[#D8D8DC] hover:text-[#FF172F] inline-flex items-center gap-1 shrink-0 bg-[rgba(5,5,5,0.70)] px-2.5 py-1 rounded-[4px] border border-[rgba(255,255,255,0.10)]"
                      >
                        <span>View on GitHub</span>
                        <ArrowUpRight size={13} />
                      </a>
                    </div>

                    {/* Middle: Title overlaid over dark gradient for legibility */}
                    <div className="relative z-10 my-auto py-2">
                      <h4 className="font-display font-semibold text-lg sm:text-xl text-[#F5F5F5] leading-snug max-w-[90%]">
                        {project.title}
                      </h4>
                    </div>

                    {/* Bottom Row: Caption "Illustration" in corner */}
                    <div className="relative z-10 flex items-center justify-between">
                      <span className="font-mono text-[10px] text-[#92929B] uppercase tracking-wider bg-[rgba(5,5,5,0.85)] px-2 py-0.5 rounded-[2px] border border-[rgba(255,255,255,0.10)]">
                        Illustration
                      </span>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div
                  className={`w-full order-2 ${
                    isEven ? 'lg:order-2 lg:col-span-7' : 'lg:order-1 lg:col-span-7'
                  } flex flex-col justify-center text-left`}
                >
                  <h3 className="font-display font-semibold text-2xl sm:text-3xl text-[#F5F5F5] mb-4 tracking-[-0.01em]">
                    {project.title}
                  </h3>

                  <div className="space-y-3 mb-6">
                    <p className="font-sans text-base text-[#D8D8DC]/90 leading-[1.65]">
                      <span className="text-white font-medium">Problem: </span>
                      {project.problem}
                    </p>
                    <p className="font-sans text-base text-[#D8D8DC]/90 leading-[1.65]">
                      <span className="text-white font-medium">What I built: </span>
                      {project.built}
                    </p>
                    {project.note && (
                      <p className="font-mono text-xs text-[#92929B] leading-relaxed pt-1">
                        Note: {project.note}
                      </p>
                    )}
                  </div>

                  {/* Tools as small outlined tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="font-mono text-xs text-[#D8D8DC] px-2.5 py-1 rounded-[4px] border border-[rgba(255,255,255,0.10)]"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  {/* Clean Text Links with 1px underline */}
                  <div className="flex items-center gap-6 pt-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline font-mono text-xs text-[#D8D8DC] inline-flex items-center gap-1.5"
                    >
                      <span>View on GitHub</span>
                      <ArrowUpRight size={14} />
                    </a>

                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-underline font-mono text-xs text-[#D8D8DC] inline-flex items-center gap-1.5"
                      >
                        <span>Live demo</span>
                        <ArrowUpRight size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

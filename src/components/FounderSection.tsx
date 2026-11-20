import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin,
  GraduationCap,
  Award,
  Download,
  FileText,
  CheckCircle2,
  X,
  Globe,
} from 'lucide-react';
import { sound } from '../utils/sound';
import { GithubIcon, LinkedinIcon } from './Icons';
import { NeuralNetworkCanvas } from './NeuralNetworkCanvas';
import founderEnhancedImg from '../assets/founder-enhanced.png';

export const FounderSection: React.FC = () => {
  const [showResumeModal, setShowResumeModal] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Exact technical skills from specification:
  // Python, Java, SQL, Power BI, Advanced Excel, React.js, Node.js, TensorFlow, Keras, Scikit-Learn, OpenCV, IoT (NodeMCU/ESP32, Blynk), Linux, networking (TCP/IP, DNS, HTTP/HTTPS)
  const technicalSkills = [
    'Python',
    'Java',
    'SQL',
    'Power BI',
    'Advanced Excel',
    'React.js',
    'Node.js',
    'TensorFlow',
    'Keras',
    'Scikit-Learn',
    'OpenCV',
    'IoT (NodeMCU/ESP32, Blynk)',
    'Linux',
    'Networking (TCP/IP, DNS, HTTP/HTTPS)',
  ];

  // Mouse tilt parallax handler for portrait frame
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  return (
    <section id="founder" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 scroll-mt-20 w-full max-w-full overflow-hidden min-w-0">
      {/* Background Ambience: Subtle red light waves & particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#FF172F]/10 blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-[#FF612E]/8 blur-[120px] pointer-events-none" />
      </div>

      {/* Section Header */}
      <div className="flex flex-col items-start mb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 font-mono text-xs text-[#FF172F] tracking-[0.3em] uppercase mb-3"
        >
          <span className="w-2 h-2 bg-[#FF172F] shadow-[0_0_8px_#FF172F]" />
          <span>05 // THE FOUNDER</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#F5F5F5] tracking-tight leading-tight"
        >
          THE HUMAN BEHIND THE TECHNOLOGY.
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-24 h-[2px] bg-gradient-to-r from-[#FF172F] via-[#FF612E] to-transparent mt-4 origin-left"
        />
      </div>

      {/* Main Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* ========================================================
            LEFT COLUMN: RETOUCHED FOUNDER PHOTOGRAPH IN AI NEURAL FRAME
           ======================================================== */}
        <motion.div
          initial={{ opacity: 0, x: -40, y: 20 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 w-full max-w-md sm:max-w-lg lg:max-w-none mx-auto min-w-0"
        >
          <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => {
              setIsHovered(true);
              sound.playHover();
            }}
            onMouseLeave={() => {
              setIsHovered(false);
              setMousePos({ x: 0, y: 0 });
            }}
            className="group relative overflow-hidden rounded-[1.8rem] border border-white/15 bg-[#07070A] transition-all duration-500"
            style={{
              boxShadow: isHovered
                ? '0 30px 70px rgba(0,0,0,0.95), 0 0 55px rgba(255,23,47,0.4)'
                : '0 20px 50px rgba(0,0,0,0.85), 0 0 30px rgba(255,23,47,0.2)',
            }}
          >
            {/* Ambient Radial Halo Glow behind the Card */}
            <div className="absolute -inset-6 rounded-[2.2rem] bg-[radial-gradient(60%_60%_at_50%_25%,rgba(255,23,47,0.32),transparent_70%)] blur-2xl pointer-events-none" />

            {/* Top-Left Location Badge Pill */}
            <div className="absolute left-4 top-4 z-30 flex items-center gap-2 rounded-full border border-white/15 bg-black/65 px-3.5 py-1.5 backdrop-blur-md shadow-[0_0_15px_rgba(0,0,0,0.5)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF172F] shadow-[0_0_8px_2px_rgba(255,23,47,0.8)] animate-ping" />
              <span className="font-mono text-[0.62rem] font-bold tracking-[0.24em] text-white/95 uppercase">
                ABU DHABI, UAE
              </span>
            </div>

            {/* Top-Right Red Corner Geometric Bracket */}
            <div className="absolute top-4 right-4 w-5 h-5 border-t-2 border-r-2 border-[#FF172F] z-30 pointer-events-none" />
            <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-[#FF172F]/50 z-30 pointer-events-none" />
            <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-[#FF172F]/50 z-30 pointer-events-none" />

            {/* Animated Laser Border Pulse across top */}
            <motion.div
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'linear' }}
              className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#FF172F] to-transparent shadow-[0_0_14px_#FF172F] pointer-events-none z-30"
            />

            {/* Portrait Frame Container */}
            <div
              className="relative aspect-[4/5] w-full overflow-hidden bg-[#07070A] flex items-end justify-center select-none"
              style={{
                transform: `perspective(1000px) rotateY(${mousePos.x * 5}deg) rotateX(${-mousePos.y * 5}deg)`,
                transition: 'transform 0.15s ease-out',
              }}
            >
              {/* Dark Background behind Portrait with Cyber Grid */}
              <div className="absolute inset-0 bg-[#07070A] bg-[radial-gradient(ellipse_at_center,#18080E_0%,#050505_85%)]" />
              <div className="absolute inset-0 cyber-grid opacity-20" />

              {/* LIVING AI NEURAL NETWORK BACKGROUND VISUALIZATION */}
              <NeuralNetworkCanvas mousePos={mousePos} className="opacity-75" />

              {/* Glowing Crimson Circular Halo Behind Head & Shoulders */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
                className="absolute top-[10%] w-64 h-64 sm:w-76 sm:h-76 rounded-full border border-dashed border-[#FF172F]/40 pointer-events-none z-1"
              />
              <div className="absolute top-[12%] w-60 h-60 sm:w-72 sm:h-72 rounded-full bg-gradient-to-tr from-[#FF172F]/35 via-[#FF612E]/25 to-transparent blur-3xl pointer-events-none z-1 animate-pulse" />

              {/* Subtle Fiery Orange Secondary Rim Light */}
              <div className="absolute top-[20%] -left-10 w-44 h-44 bg-[#FF612E]/25 rounded-full blur-2xl pointer-events-none z-1" />
              <div className="absolute top-[20%] -right-10 w-44 h-44 bg-[#FF172F]/25 rounded-full blur-2xl pointer-events-none z-1" />

              {/* Floating Red Spark Particles */}
              {[
                { top: '22%', left: '15%', delay: 0 },
                { top: '42%', right: '12%', delay: 1.2 },
                { top: '60%', left: '18%', delay: 2.4 },
                { top: '32%', right: '20%', delay: 0.8 },
              ].map((spark, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -18, 0],
                    opacity: [0.3, 0.9, 0.3],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    duration: 3 + i,
                    repeat: Infinity,
                    delay: spark.delay,
                    ease: 'easeInOut',
                  }}
                  className="absolute w-1.5 h-1.5 rounded-full bg-[#FF172F] shadow-[0_0_8px_#FF172F] pointer-events-none z-10"
                  style={{ top: spark.top, left: spark.left, right: spark.right }}
                />
              ))}

              {/* AUTHENTIC RETOUCHED PHOTOGRAPH OF DHARUN KARTHIK S L */}
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative z-10 w-full h-full flex items-end justify-center pointer-events-none"
              >
                <img
                  src={founderEnhancedImg}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (target.src.indexOf('founder.jpg') === -1) {
                      target.src = '/founder.jpg';
                    }
                  }}
                  alt="Dharun Karthik S L - Founder & Technology Developer"
                  className="w-full h-full object-cover object-top drop-shadow-[0_15px_30px_rgba(0,0,0,0.95)]"
                  loading="eager"
                />
              </motion.div>

              {/* Soft Bottom Vignette Fade */}
              <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(180deg,transparent_45%,rgba(5,5,5,0.94)_100%)] z-15" />

              {/* Bottom Card Title Overlay with Name Exactly Centered on One Line */}
              <div className="absolute inset-x-0 bottom-0 px-4 sm:px-5 pb-5 pt-3 z-20 w-full flex flex-col items-center justify-center text-center overflow-visible">
                <p className="font-mono text-[0.62rem] sm:text-[0.66rem] tracking-[0.24em] sm:tracking-[0.28em] text-[#FF172F] font-bold uppercase whitespace-nowrap overflow-visible text-center">
                  FOUNDER &amp; TECHNOLOGY DEVELOPER
                </p>
                <h3
                  className="founder-name founder-card-name font-display mt-1 text-white drop-shadow-[0_0_12px_rgba(255,23,47,0.4)] whitespace-nowrap overflow-visible w-full tracking-[0.02em] font-bold text-center"
                  style={{
                    whiteSpace: 'nowrap',
                    width: '100%',
                    fontSize: 'clamp(17px, 2.2vw, 24px)',
                    letterSpacing: '0.02em',
                    lineHeight: 1.2,
                    fontWeight: 700,
                    overflow: 'visible',
                    textAlign: 'center',
                  }}
                >
                  DHARUN KARTHIK S L
                </h3>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ========================================================
            RIGHT COLUMN: FOUNDER DOSSIER, BIOGRAPHY, HIGHLIGHTS & CREDENTIALS
           ======================================================== */}
        <div className="lg:col-span-7 flex flex-col justify-between min-w-0">
          {/* 1. Header Information & Identity */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-8"
          >
            <span className="inline-block px-3 py-1 rounded-xs bg-[#26070D] border border-[#FF172F]/40 text-[#FF172F] font-mono text-xs font-bold tracking-[0.22em] uppercase mb-3">
              THE FOUNDER
            </span>

            <h3
              className="founder-name font-display text-white drop-shadow-[0_0_16px_rgba(255,23,47,0.25)] tracking-[0.02em] leading-tight mb-2 whitespace-nowrap overflow-visible w-full font-bold"
              style={{
                whiteSpace: 'nowrap',
                width: '100%',
                fontSize: 'clamp(18px, 4.2vw, 38px)',
                letterSpacing: '0.02em',
                lineHeight: 1.2,
                fontWeight: 700,
                overflow: 'visible',
              }}
            >
              DHARUN KARTHIK S L
            </h3>

            <p className="font-mono text-xs sm:text-base text-gradient-fire font-bold tracking-[0.16em] sm:tracking-[0.22em] uppercase mb-2 break-words">
              FOUNDER &amp; TECHNOLOGY DEVELOPER
            </p>

            {/* Required subtitle lines: */}
            <p className="font-mono text-[11px] sm:text-xs text-[#F5F5F5] tracking-[0.08em] sm:tracking-[0.16em] uppercase font-semibold mb-2 break-words leading-relaxed">
              IT Support Engineer | Data Analyst | Full-Stack Developer | Application Developer
            </p>

            <div className="font-sans text-xs sm:text-sm text-emerald-400 font-medium mb-4 flex items-start gap-2 min-w-0">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0 mt-1" />
              <span className="min-w-0 break-words">Available for immediate joining. Open to Abu Dhabi, Dubai and wider UAE.</span>
            </div>

            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs font-mono text-[#92929B]">
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-[#FF172F] shrink-0" />
                <span className="text-[#F5F5F5]">Abu Dhabi, United Arab Emirates</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-white/20 hidden sm:block" />
              <div className="flex items-center gap-2">
                <GraduationCap size={14} className="text-[#FF612E] shrink-0" />
                <span className="text-[#F5F5F5]">B.Tech AI &amp; Data Science (2022–2026)</span>
              </div>
            </div>
          </motion.div>

          {/* 2. Professional Biography */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.15 }}
            className="space-y-3 font-sans text-sm sm:text-base text-[#92929B] leading-relaxed mb-8 pl-4 sm:pl-5 border-l-2 border-[#FF172F]"
          >
            <p className="text-[#F5F5F5] font-light">
              "I am Dharun Karthik, an Artificial Intelligence and Data Science graduate passionate about software engineering, artificial intelligence, data analytics, and digital innovation."
            </p>
            <p>
              "With hands-on proficiency across Python, Java, SQL, Machine Learning, Deep Learning, and full-stack application development, I bridge theoretical concepts with production-ready technology systems."
            </p>
            <p className="text-white font-medium">
              "Through DKNOVIX Technologies, my vision is to engineer intelligent digital products, develop innovative solutions, and create meaningful technology experiences."
            </p>
          </motion.div>

          {/* 3. Credentials Grid: Education, Experience, Leadership */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.25 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
          >
            {/* Education Card */}
            <div className="glass-panel p-4 sm:p-5 rounded-sm border border-white/10 hover:border-[#FF172F]/50 transition-all duration-300 relative group">
              <div className="flex items-start justify-between mb-2">
                <span className="font-mono text-[9px] text-[#FF172F] tracking-wider uppercase font-bold flex items-center gap-1.5">
                  <GraduationCap size={14} />
                  <span>EDUCATION</span>
                </span>
                <span className="font-mono text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                  CGPA 7.83 / 10
                </span>
              </div>
              <h4 className="font-display text-sm font-bold text-white mb-1">
                B.Tech Artificial Intelligence &amp; Data Science (2022–2026)
              </h4>
              <p className="font-sans text-xs text-[#92929B] leading-relaxed">
                P.A. College of Engineering and Technology (Autonomous, Anna University affiliated), Pollachi, India. First Class.
              </p>
            </div>

            {/* Recognition & Hackathon */}
            <div className="glass-panel p-4 sm:p-5 rounded-sm border border-white/10 hover:border-[#FF172F]/50 transition-all duration-300 relative group">
              <div className="flex items-start justify-between mb-2">
                <span className="font-mono text-[9px] text-[#FF612E] tracking-wider uppercase font-bold flex items-center gap-1.5">
                  <Award size={14} />
                  <span>NATIONAL RECOGNITION</span>
                </span>
                <span className="font-mono text-[10px] text-[#FF612E] bg-[#26070D] px-2 py-0.5 rounded border border-[#FF612E]/30">
                  ₹15 LAKHS
                </span>
              </div>
              <h4 className="font-display text-sm font-bold text-white mb-1">
                MSME Hackathon 2024 Recognition
              </h4>
              <p className="font-sans text-xs text-[#92929B] leading-relaxed">
                Selected for IoT Smart Umbrella micro-mobility system valued at ₹15 Lakhs (~AED 62,000). Published author in IJEDR journal.
              </p>
            </div>
          </motion.div>

          {/* 4. Technical Expertise Badges */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.35 }}
            className="mb-8"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-xs text-[#FF172F] tracking-[0.24em] uppercase font-bold">
                CORE TECHNICAL SKILLS
              </span>
              <span className="font-mono text-[10px] text-[#92929B]">
                // PRODUCTION EXPERTISE
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {technicalSkills.map((skill, idx) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + idx * 0.03 }}
                  onMouseEnter={() => sound.playHover()}
                  className="px-3 py-1.5 rounded-sm bg-[#07070A] border border-white/10 hover:border-[#FF172F]/60 text-xs font-mono text-[#F5F5F5] hover:text-white hover:bg-[#26070D]/40 transition-all duration-300 cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* 5. Founder Signature and Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.45 }}
            className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-6"
          >
            {/* Signature Block */}
            <div className="flex flex-col min-w-0">
              <span className="font-display italic text-2xl sm:text-3xl font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white via-[#F5F5F5] to-[#FF172F]">
                Dharun Karthik
              </span>
              <span className="font-mono text-[9px] sm:text-[10px] text-[#FF612E] tracking-[0.16em] sm:tracking-[0.28em] uppercase font-semibold mt-1 break-words">
                FOUNDER &amp; TECHNOLOGY DEVELOPER
              </span>
            </div>

            {/* Action Buttons: DOWNLOAD RESUME | PORTFOLIO | LINKEDIN | GITHUB */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="/Dharun_Karthik_CV.pdf"
                download="Dharun_Karthik_CV.pdf"
                onClick={() => sound.playSuccess()}
                onMouseEnter={() => sound.playHover()}
                className="flex-1 sm:flex-none px-5 py-3 rounded-sm bg-gradient-to-r from-[#FF172F] to-[#E52B35] hover:from-[#E52B35] hover:to-[#FF612E] text-white font-mono text-xs font-bold tracking-[0.18em] uppercase shadow-[0_0_20px_rgba(255,23,47,0.35)] hover:shadow-[0_0_30px_rgba(255,23,47,0.65)] transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-95"
              >
                <Download size={14} />
                <span>DOWNLOAD RESUME</span>
              </a>

              <a
                href="https://dharunkarthikportfolio.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => sound.playHover()}
                className="p-3 rounded-sm bg-[#07070A] border border-white/10 hover:border-[#FF172F]/50 text-[#92929B] hover:text-white transition-all text-xs font-mono flex items-center justify-center gap-1.5 cursor-pointer"
                title="Personal Portfolio"
              >
                <Globe size={15} />
                <span className="hidden sm:inline">PORTFOLIO</span>
              </a>

              <a
                href="https://www.linkedin.com/in/dharun-karthik2332"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => sound.playHover()}
                className="p-3 rounded-sm bg-[#07070A] border border-white/10 hover:border-[#FF172F]/50 text-[#92929B] hover:text-white transition-all text-xs font-mono flex items-center justify-center gap-1.5 cursor-pointer"
                title="LinkedIn Profile"
              >
                <LinkedinIcon size={15} />
                <span className="hidden sm:inline">LINKEDIN</span>
              </a>

              <a
                href="https://github.com/Dharun-135"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => sound.playHover()}
                className="p-3 rounded-sm bg-[#07070A] border border-white/10 hover:border-[#FF172F]/50 text-[#92929B] hover:text-white transition-all text-xs font-mono flex items-center justify-center gap-1.5 cursor-pointer"
                title="GitHub Profile"
              >
                <GithubIcon size={15} />
                <span className="hidden sm:inline">GITHUB</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Resume Modal */}
      <AnimatePresence>
        {showResumeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl"
            onClick={() => setShowResumeModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-panel max-w-lg w-full p-8 rounded-sm border border-[#FF172F]/40 relative bg-[#0B0B0E]"
            >
              <button
                onClick={() => setShowResumeModal(false)}
                className="absolute top-4 right-4 text-[#92929B] hover:text-white cursor-pointer"
              >
                <X size={20} />
              </button>

              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-[#FF172F]/10 border border-[#FF172F]/30 text-[#FF172F] rounded-sm">
                  <FileText size={24} />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-white">
                    CURRICULUM VITAE
                  </h3>
                  <p className="font-mono text-xs text-[#FF172F]">
                    DHARUN KARTHIK S L // FOUNDER &amp; DEVELOPER
                  </p>
                </div>
              </div>

              <div className="space-y-3 font-mono text-xs text-[#92929B] mb-8 bg-[#050505] p-5 rounded border border-white/5">
                <div className="flex items-center gap-2 text-[#F5F5F5]">
                  <CheckCircle2 size={14} className="text-[#FF172F]" />
                  <span>B.Tech AI &amp; Data Science (2022–2026), CGPA 7.83 First Class</span>
                </div>
                <div className="flex items-center gap-2 text-[#F5F5F5]">
                  <CheckCircle2 size={14} className="text-[#FF172F]" />
                  <span>MSME Hackathon 2024 Winner (₹15 Lakhs Worth / ~AED 62,000)</span>
                </div>
                <div className="flex items-center gap-2 text-[#F5F5F5]">
                  <CheckCircle2 size={14} className="text-[#FF172F]" />
                  <span>Published Author: IJEDR Paper ID IJEDR2602179</span>
                </div>
                <div className="flex items-center gap-2 text-[#F5F5F5]">
                  <CheckCircle2 size={14} className="text-[#FF172F]" />
                  <span>Open to immediate joining in Abu Dhabi, Dubai &amp; wider UAE</span>
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href="/Dharun_Karthik_CV.pdf"
                  download="Dharun_Karthik_CV.pdf"
                  onClick={() => {
                    sound.playSuccess();
                    setShowResumeModal(false);
                  }}
                  className="w-full py-3 bg-[#FF172F] hover:bg-[#E52B35] text-white font-mono text-xs font-bold tracking-widest uppercase rounded-sm transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,23,47,0.4)]"
                >
                  <Download size={16} />
                  <span>DOWNLOAD VERIFIED CV (.PDF)</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

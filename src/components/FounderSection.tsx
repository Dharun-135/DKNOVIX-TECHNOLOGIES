import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Download, ArrowUpRight } from 'lucide-react';
import founderEnhancedImg from '../assets/founder-enhanced.png';

const skills = [
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

export const FounderSection: React.FC = () => {
  return (
    <section
      id="founder"
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
          The human behind the <span className="text-[#FF172F]">technology.</span>
        </h2>

        <p className="font-sans text-[1.05rem] leading-[1.65] text-[#D8D8DC]/90 max-w-[62ch] mb-16 text-left">
          Background, technical credentials, and engineering experience.
        </p>

        {/* Split Layout: Photo on Left (Desktop), Information on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Flat dark panel with a thin outline around the photo */}
          <div className="lg:col-span-5 w-full max-w-md mx-auto lg:max-w-none">
            <div className="bg-[#0B0B0E] border border-[rgba(255,255,255,0.10)] rounded-[4px] p-5 sm:p-6 flex flex-col">
              {/* Photo with thin outline */}
              <div className="w-full aspect-[4/5] rounded-[4px] overflow-hidden border border-[rgba(255,255,255,0.10)] bg-[#050505]">
                <img
                  src={founderEnhancedImg}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (target.src.indexOf('founder.jpg') === -1) {
                      target.src = '/founder.jpg';
                    }
                  }}
                  alt="Dharun Karthik S L"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
              </div>

              {/* Founder Identity Card Line */}
              <div className="pt-5 text-left">
                <h3 className="font-display font-semibold text-xl text-[#F5F5F5]">
                  Dharun Karthik S L
                </h3>
                <p className="font-mono text-xs text-[#FF172F] mt-1 uppercase tracking-wider">
                  Founder &amp; Technology Developer
                </p>
                <p className="font-mono text-xs text-[#92929B] mt-2">
                  Abu Dhabi, UAE
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Founder Dossier & Credentials */}
          <div className="lg:col-span-7 flex flex-col justify-start text-left">
            {/* Header Identity */}
            <div className="mb-6">
              <h3 className="font-display font-bold text-3xl sm:text-4xl text-[#F5F5F5] tracking-tight mb-2">
                Dharun Karthik S L
              </h3>
              <p className="font-mono text-xs sm:text-sm text-[#FF172F] uppercase tracking-wider mb-2 font-medium">
                Founder &amp; Technology Developer
              </p>

              {/* Role Line */}
              <p className="font-mono text-xs text-[#D8D8DC] mb-3 leading-relaxed">
                IT Support Engineer | Data Analyst | Full-Stack Developer | Application Developer
              </p>

              {/* Immediate Joining Line */}
              <div className="flex items-center gap-2 text-xs font-sans text-emerald-400 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                <span>Available for immediate joining. Open to Abu Dhabi, Dubai and wider UAE.</span>
              </div>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-[#92929B] tabular-nums pt-1 border-t border-[rgba(255,255,255,0.08)]">
                <div className="flex items-center gap-1.5">
                  <MapPin size={13} className="text-[#FF172F]" />
                  <span>Abu Dhabi, United Arab Emirates</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <GraduationCap size={14} className="text-[#92929B]" />
                  <span>B.Tech AI &amp; Data Science (2022–2026)</span>
                </div>
              </div>
            </div>

            {/* Personal Statement written with "I" */}
            <div className="space-y-3 font-sans text-[1.05rem] text-[#D8D8DC]/90 leading-[1.65] mb-8 border-l border-[rgba(255,255,255,0.15)] pl-4">
              <p>
                I am an Artificial Intelligence and Data Science graduate with practical experience across machine learning, software development, data analytics, and embedded IoT systems.
              </p>
              <p>
                With hands-on proficiency in Python, Java, SQL, React, Node.js, and Machine Learning pipelines, I bridge prototype research with reliable software engineering. Through DKNOVIX Technologies, my goal is to deliver clean digital solutions and software systems for companies in the UAE and beyond.
              </p>
            </div>

            {/* Credentials: Education, Experience & Leadership */}
            <div className="space-y-4 mb-8">
              {/* Education */}
              <div className="p-4 rounded-[4px] border border-[rgba(255,255,255,0.10)] bg-[#0B0B0E]">
                <span className="font-mono text-[11px] text-[#92929B] uppercase block mb-1">
                  EDUCATION
                </span>
                <p className="font-sans text-sm text-[#F5F5F5] font-medium">
                  B.Tech Artificial Intelligence &amp; Data Science, 2022–2026
                </p>
                <p className="font-sans text-xs text-[#92929B] mt-1">
                  P.A. College of Engineering and Technology (Autonomous, Anna University affiliated), Pollachi, India. CGPA 7.83/10, First Class.
                </p>
              </div>

              {/* Experience */}
              <div className="p-4 rounded-[4px] border border-[rgba(255,255,255,0.10)] bg-[#0B0B0E]">
                <span className="font-mono text-[11px] text-[#92929B] uppercase block mb-1">
                  EXPERIENCE
                </span>
                <p className="font-sans text-sm text-[#F5F5F5] font-medium">
                  Machine Learning Intern, Crescent Infotech (90 days) · Data Science Intern, Neha Solutions (120 days)
                </p>
                <p className="font-sans text-xs text-[#92929B] mt-1">
                  Built predictive models, cleaned relational datasets, and engineered automated image preprocessing routines.
                </p>
              </div>

              {/* Leadership & Recognition */}
              <div className="p-4 rounded-[4px] border border-[rgba(255,255,255,0.10)] bg-[#0B0B0E]">
                <span className="font-mono text-[11px] text-[#92929B] uppercase block mb-1">
                  LEADERSHIP &amp; RECOGNITION
                </span>
                <p className="font-sans text-sm text-[#F5F5F5] font-medium">
                  Treasurer, AI &amp; DS Department (2025–2026) · Joint Secretary (2024–2025)
                </p>
                <p className="font-sans text-xs text-[#92929B] mt-1">
                  Selected at MSME Hackathon 2024 (Smart Umbrella project valued at ₹15 Lakh / ~AED 62,000). Published author in IJEDR journal (Paper ID: IJEDR2602179).
                </p>
              </div>
            </div>

            {/* Skills as small outlined tags */}
            <div className="mb-8">
              <span className="font-mono text-xs text-[#92929B] uppercase tracking-wider block mb-3">
                TECHNICAL SKILLS
              </span>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-xs text-[#D8D8DC] px-2.5 py-1 rounded-[4px] border border-[rgba(255,255,255,0.10)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons: Download Resume, Portfolio, LinkedIn, GitHub */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[rgba(255,255,255,0.10)]">
              <a
                href="/Dharun_Karthik_CV.pdf"
                download="Dharun_Karthik_CV.pdf"
                className="btn-primary"
              >
                <Download size={15} />
                <span>Download resume</span>
              </a>

              <a
                href="https://dharunkarthikportfolio.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <span>Portfolio</span>
                <ArrowUpRight size={14} />
              </a>

              <a
                href="https://www.linkedin.com/in/dharun-karthik2332"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <span>LinkedIn</span>
                <ArrowUpRight size={14} />
              </a>

              <a
                href="https://github.com/Dharun-135"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <span>GitHub</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, GraduationCap, ArrowUpRight } from 'lucide-react';
import founderEnhancedImg from '/founder-enhanced.png';

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
        {/* Section Heading in Sentence Case with One Crimson Word */}
        <h2
          className="headline-section text-[#F5F5F5] mb-4 text-left"
          style={{ fontSize: 'clamp(2rem, 4.5vw, 3.6rem)' }}
        >
          The engineer behind the <span className="text-[#FF172F]">work.</span>
        </h2>

        <p className="font-sans text-[1.05rem] leading-[1.65] text-[#D8D8DC] max-w-[62ch] mb-16 text-left">
          Background, technical competencies, published research, and academic qualifications.
        </p>

        {/* Split Layout: Flat Dark Panel + Outline around photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
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
                <h3 className="title-subheading text-xl text-[#F5F5F5]">
                  Dharun Karthik S L
                </h3>
                <p className="font-mono text-xs text-[#FF172F] mt-1 tracking-[0.02em]">
                  Founder &amp; Technology Developer
                </p>
                <p className="font-mono text-xs text-[#B4B4BC] mt-2 tracking-[0.02em]">
                  Abu Dhabi, UAE
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Founder Dossier & Credentials */}
          <div className="lg:col-span-7 flex flex-col justify-start text-left">
            {/* Header Identity */}
            <div className="mb-6">
              <h3 className="title-subheading text-3xl sm:text-4xl text-[#F5F5F5] mb-2">
                Dharun Karthik S L
              </h3>
              <p className="font-mono text-xs sm:text-sm text-[#FF172F] mb-2 font-medium tracking-[0.02em]">
                Founder &amp; Technology Developer
              </p>

              {/* Role Line */}
              <p className="font-mono text-xs text-[#B4B4BC] mb-3 leading-relaxed tracking-[0.02em]">
                IT Support Engineer | Data Analyst | Full-Stack Developer | Application Developer
              </p>

              {/* Immediate Joining Line */}
              <div className="flex items-center gap-2 text-xs font-sans text-emerald-400 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                <span>Available for immediate joining. Open to Abu Dhabi, Dubai and wider UAE.</span>
              </div>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-[#B4B4BC] tabular-nums pt-1 border-t border-[rgba(255,255,255,0.08)] tracking-[0.02em]">
                <div className="flex items-center gap-1.5">
                  <MapPin size={13} className="text-[#FF172F]" />
                  <span>Abu Dhabi, United Arab Emirates</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <GraduationCap size={14} className="text-[#B4B4BC]" />
                  <span>B.Tech AI &amp; Data Science (2022–2026)</span>
                </div>
              </div>
            </div>

            {/* Personal Statement written with "I" */}
            <div className="space-y-3 font-sans text-[1.05rem] text-[#D8D8DC] leading-[1.65] mb-8 border-l border-[rgba(255,255,255,0.15)] pl-4">
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
                <span className="font-mono text-xs text-[#B4B4BC] block mb-1 tracking-[0.02em]">
                  Education
                </span>
                <p className="font-sans text-sm text-[#F5F5F5] font-medium">
                  B.Tech Artificial Intelligence &amp; Data Science, 2022–2026
                </p>
                <p className="font-sans text-xs text-[#B4B4BC] mt-1">
                  P.A. College of Engineering and Technology (Autonomous, Anna University affiliated), Pollachi, India. CGPA 7.83/10, First Class.
                </p>
              </div>

              {/* Experience */}
              <div className="p-4 rounded-[4px] border border-[rgba(255,255,255,0.10)] bg-[#0B0B0E]">
                <span className="font-mono text-xs text-[#B4B4BC] block mb-1 tracking-[0.02em]">
                  Experience
                </span>
                <p className="font-sans text-sm text-[#F5F5F5] font-medium">
                  Machine Learning Intern, Crescent Infotech (90 days) · Data Science Intern, Neha Solutions (120 days)
                </p>
                <p className="font-sans text-xs text-[#B4B4BC] mt-1">
                  Built predictive models, cleaned relational datasets, and engineered automated image preprocessing routines.
                </p>
              </div>

              {/* Leadership & Recognition */}
              <div className="p-4 rounded-[4px] border border-[rgba(255,255,255,0.10)] bg-[#0B0B0E]">
                <span className="font-mono text-xs text-[#B4B4BC] block mb-1 tracking-[0.02em]">
                  Leadership &amp; recognition
                </span>
                <p className="font-sans text-sm text-[#F5F5F5] font-medium">
                  Treasurer (2025–2026) &amp; Joint Secretary (2024–2025), AI &amp; DS Department
                </p>
                <p className="font-sans text-xs text-[#B4B4BC] mt-1">
                  Selected at MSME Hackathon 2024 (Project Valued at ₹15 Lakh / ~AED 62,000) · Published Author in IJEDR.
                </p>
              </div>
            </div>

            {/* Core Skills Tags */}
            <div className="mb-8">
              <span className="font-mono text-xs text-[#B4B4BC] block mb-3 tracking-[0.02em]">
                Core technical skills
              </span>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-xs text-[#B4B4BC] px-2.5 py-1 rounded-[4px] border border-[rgba(255,255,255,0.10)] tracking-[0.02em]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Direct Links */}
            <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-[rgba(255,255,255,0.10)]">
              <a
                href="/Dharun_Karthik_CV.pdf"
                download="Dharun_Karthik_CV.pdf"
                className="btn-primary"
              >
                <span>Download resume</span>
                <ArrowUpRight size={14} />
              </a>

              <a
                href="https://dharunkarthikportfolio.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline font-mono text-xs text-[#B4B4BC] hover:text-[#FF172F] inline-flex items-center gap-1.5 tracking-[0.02em]"
              >
                <span>Portfolio</span>
                <ArrowUpRight size={14} />
              </a>

              <a
                href="https://www.linkedin.com/in/dharun-karthik2332"
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline font-mono text-xs text-[#B4B4BC] hover:text-[#FF172F] inline-flex items-center gap-1.5 tracking-[0.02em]"
              >
                <span>LinkedIn</span>
                <ArrowUpRight size={14} />
              </a>

              <a
                href="https://github.com/Dharun-135"
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline font-mono text-xs text-[#B4B4BC] hover:text-[#FF172F] inline-flex items-center gap-1.5 tracking-[0.02em]"
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

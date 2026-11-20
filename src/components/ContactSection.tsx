import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, MessageSquare, MapPin, Mail, Phone, CheckCircle2, AlertCircle, Loader2, RotateCcw } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sound } from '../utils/sound';

interface ContactProps {
  selectedServicePreset?: string;
}

const WHATSAPP_DEFAULT_URL =
  'https://wa.me/971502332870?text=Hello%20DKNOVIX%20Technologies%2C%20I%20would%20like%20to%20discuss%20a%20project.';

export const ContactSection: React.FC<ContactProps> = ({ selectedServicePreset }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    serviceRequired: selectedServicePreset || 'WEB DEVELOPMENT',
    projectDescription: '',
  });

  const [botField, setBotField] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Sync preset if changed from outside
  React.useEffect(() => {
    if (selectedServicePreset) {
      setFormData((prev) => ({ ...prev, serviceRequired: selectedServicePreset }));
    }
  }, [selectedServicePreset]);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim() || formData.fullName.length < 2) {
      errs.fullName = 'Please enter your full name (minimum 2 characters).';
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.projectDescription.trim() || formData.projectDescription.length < 10) {
      errs.projectDescription = 'Please describe your project (minimum 10 characters).';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    sound.playClick();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const payload: Record<string, string> = {
        'form-name': 'enquiry',
        'bot-field': botField,
        fullName: formData.fullName,
        email: formData.email,
        company: formData.company,
        serviceRequired: formData.serviceRequired,
        projectDescription: formData.projectDescription,
      };

      const body = new URLSearchParams(payload).toString();

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      });

      if (response.ok) {
        setIsSuccess(true);
        sound.playSuccess();

        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#FF172F', '#FF612E', '#FFFFFF'],
          });
        } catch {
          // fallback
        }
      } else {
        throw new Error(`Netlify form submission failed with status ${response.status}`);
      }
    } catch (err: unknown) {
      console.error('Submission failed:', err);
      setSubmitError(
        'Unable to send message to Netlify Forms. Please verify your connection or reach out directly via WhatsApp or email.'
      );
      sound.playLaserSweep();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 scroll-mt-20 w-full max-w-full overflow-hidden min-w-0">
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
          <span>08 // INITIATE TRANSMISSION</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#F5F5F5] tracking-tight leading-tight"
        >
          LET'S CREATE SOMETHING EXTRAORDINARY.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-sans text-base sm:text-lg text-[#92929B] max-w-2xl mt-4 leading-relaxed"
        >
          Have an idea? Let's bring it to life with technology, creativity, and innovation.
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-24 h-[2px] bg-gradient-to-r from-[#FF172F] via-[#FF612E] to-transparent mt-4 origin-left"
        />
      </div>

      {/* Grid: Contact Information & Actual Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Direct Dossier & Founder Direct Info */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 flex flex-col justify-between space-y-6 w-full min-w-0"
        >
          <div className="glass-panel p-6 sm:p-8 rounded-sm border border-[#FF172F]/25 relative overflow-hidden min-w-0">
            <h3 className="font-display text-2xl font-bold text-white mb-2">
              DKNOVIX TECHNOLOGIES
            </h3>
            <p className="font-mono text-xs text-[#FF172F] tracking-[0.2em] uppercase mb-6">
              INNOVATING TODAY. BUILDING TOMORROW.
            </p>

            <div className="space-y-5 text-sm font-sans text-[#92929B] min-w-0">
              <div className="flex items-start gap-3 min-w-0">
                <MapPin size={18} className="text-[#FF172F] shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <span className="font-mono text-xs text-[#F5F5F5] block font-semibold">LOCATION</span>
                  <span className="text-white/90">Abu Dhabi, UAE</span>
                </div>
              </div>

              <div className="flex items-start gap-3 min-w-0">
                <Mail size={18} className="text-[#FF612E] shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <span className="font-mono text-xs text-[#F5F5F5] block font-semibold">DIRECT COMMUNICATIONS</span>
                  <a
                    href="mailto:dharun111004@gmail.com"
                    className="hover:text-[#FF172F] transition-colors break-all inline-block font-mono text-xs sm:text-sm text-white/90"
                  >
                    dharun111004@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 min-w-0">
                <Phone size={18} className="text-[#FF172F] shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <span className="font-mono text-xs text-[#F5F5F5] block font-semibold">PHONE &amp; WHATSAPP</span>
                  <a
                    href="tel:+971502332870"
                    className="hover:text-[#FF172F] transition-colors font-mono text-xs sm:text-sm text-white/90 block"
                  >
                    +971 50 233 2870
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 min-w-0">
                <div className="w-4 h-4 rounded-full bg-[#FF172F]/20 border border-[#FF172F] flex items-center justify-center shrink-0 mt-0.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FF172F]" />
                </div>
                <div className="min-w-0">
                  <span className="font-mono text-xs text-[#F5F5F5] block font-semibold">FOUNDER DIRECT</span>
                  <span className="text-white/90">Dharun Karthik S L</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 text-xs font-mono text-[#92929B]">
              <span className="text-white block font-bold mb-1">// RESPONSE PROTOCOL</span>
              <span>All transmissions evaluated and responded to within 24 hours.</span>
            </div>
          </div>

          {/* Instant WhatsApp Quick Connect Box */}
          <div className="glass-panel p-6 rounded-sm border border-emerald-500/20 bg-[#0B0B0E]/90 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 min-w-0">
            <div className="min-w-0">
              <span className="font-mono text-xs text-emerald-400 block font-bold tracking-wider">
                RAPID COMM PROTOCOL
              </span>
              <span className="font-sans text-xs text-[#92929B] block">
                Direct WhatsApp: +971 50 233 2870
              </span>
            </div>
            <a
              href={WHATSAPP_DEFAULT_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playClick()}
              onMouseEnter={() => sound.playHover()}
              className="w-full sm:w-auto px-4 py-2.5 bg-emerald-500/10 hover:bg-emerald-500 text-emerald-400 hover:text-black font-mono text-xs font-bold rounded-sm border border-emerald-500/40 transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0"
            >
              <MessageSquare size={14} />
              <span>CONTACT VIA WHATSAPP</span>
            </a>
          </div>
        </motion.div>

        {/* Right Column: Interactive Netlify Form */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 w-full min-w-0"
        >
          <div className="glass-panel p-6 sm:p-10 rounded-sm border border-white/10 relative min-w-0">
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-12 flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-[#26070D] border-2 border-[#FF172F] text-[#FF172F] flex items-center justify-center mb-6 shadow-[0_0_25px_#FF172F]">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white mb-2">
                    TRANSMISSION RECEIVED
                  </h3>
                  <p className="font-mono text-xs text-[#FF612E] tracking-widest uppercase mb-4">
                    STATUS: DELIVERED TO NETLIFY SECURE INBOX
                  </p>
                  <p className="font-sans text-sm sm:text-base text-[#92929B] max-w-md mb-8 leading-relaxed">
                    Thank you, <span className="text-white font-medium">{formData.fullName}</span>. Your enquiry has reached Dharun Karthik and the DKNOVIX engineering team. We will review your requirements and respond promptly.
                  </p>
                  <button
                    onClick={() => {
                      sound.playClick();
                      setIsSuccess(false);
                      setFormData({
                        fullName: '',
                        email: '',
                        company: '',
                        serviceRequired: 'WEB DEVELOPMENT',
                        projectDescription: '',
                      });
                      setSubmitError(null);
                    }}
                    className="px-6 py-3 rounded-sm bg-white/10 hover:bg-white/20 text-white font-mono text-xs font-bold tracking-widest uppercase transition-colors cursor-pointer"
                  >
                    SEND ANOTHER TRANSMISSION
                  </button>
                </motion.div>
              ) : (
                <form
                  key="form"
                  name="enquiry"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="space-y-6 min-w-0"
                >
                  {/* Hidden Netlify Inputs */}
                  <input type="hidden" name="form-name" value="enquiry" />
                  <p className="hidden" aria-hidden="true">
                    <label>
                      Don't fill this out if you're human:{' '}
                      <input
                        name="bot-field"
                        value={botField}
                        onChange={(e) => setBotField(e.target.value)}
                      />
                    </label>
                  </p>

                  {/* Submission Error Banner */}
                  {submitError && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 rounded-sm bg-[#26070D] border border-[#FF172F] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono"
                    >
                      <div className="flex items-center gap-2 text-[#FF172F]">
                        <AlertCircle size={18} className="shrink-0" />
                        <span className="text-white">{submitError}</span>
                      </div>
                      <button
                        type="button"
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className="px-3 py-1.5 bg-[#FF172F] hover:bg-[#E52B35] text-white font-mono text-[11px] font-bold uppercase rounded-xs transition-colors cursor-pointer shrink-0 flex items-center gap-1.5"
                      >
                        <RotateCcw size={12} />
                        <span>RETRY</span>
                      </button>
                    </motion.div>
                  )}

                  {/* Name and Email row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 min-w-0">
                    <div className="min-w-0">
                      <label className="block font-mono text-xs text-[#92929B] tracking-wider uppercase mb-2">
                        FULL NAME *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. John Anderson"
                        className="w-full px-4 py-3 bg-[#050505] rounded-sm border border-white/10 text-white placeholder-white/20 font-sans text-base sm:text-sm focus:outline-none focus:border-[#FF172F] transition-colors"
                      />
                      {errors.fullName && (
                        <p className="flex items-center gap-1 font-mono text-[11px] text-[#FF172F] mt-1.5">
                          <AlertCircle size={12} />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    <div className="min-w-0">
                      <label className="block font-mono text-xs text-[#92929B] tracking-wider uppercase mb-2">
                        EMAIL ADDRESS *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. john@company.com"
                        className="w-full px-4 py-3 bg-[#050505] rounded-sm border border-white/10 text-white placeholder-white/20 font-sans text-base sm:text-sm focus:outline-none focus:border-[#FF172F] transition-colors"
                      />
                      {errors.email && (
                        <p className="flex items-center gap-1 font-mono text-[11px] text-[#FF172F] mt-1.5">
                          <AlertCircle size={12} />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Company and Service */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 min-w-0">
                    <div className="min-w-0">
                      <label className="block font-mono text-xs text-[#92929B] tracking-wider uppercase mb-2">
                        COMPANY / ORGANIZATION
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Cybernetics Corp"
                        className="w-full px-4 py-3 bg-[#050505] rounded-sm border border-white/10 text-white placeholder-white/20 font-sans text-base sm:text-sm focus:outline-none focus:border-[#FF172F] transition-colors"
                      />
                    </div>

                    <div className="min-w-0">
                      <label className="block font-mono text-xs text-[#92929B] tracking-wider uppercase mb-2">
                        SERVICE REQUIRED *
                      </label>
                      <select
                        name="serviceRequired"
                        value={formData.serviceRequired}
                        onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                        className="w-full px-4 py-3 bg-[#050505] rounded-sm border border-white/10 text-white font-sans text-base sm:text-sm focus:outline-none focus:border-[#FF172F] transition-colors cursor-pointer"
                      >
                        <option value="WEB DEVELOPMENT">01 – WEB DEVELOPMENT</option>
                        <option value="AI & MACHINE LEARNING">02 – AI & MACHINE LEARNING</option>
                        <option value="SOFTWARE DEVELOPMENT">03 – SOFTWARE DEVELOPMENT</option>
                        <option value="DATA ANALYTICS">04 – DATA ANALYTICS</option>
                        <option value="UI/UX DESIGN">05 – UI/UX DESIGN</option>
                        <option value="IT SOLUTIONS">06 – IT SOLUTIONS</option>
                      </select>
                    </div>
                  </div>

                  {/* Project Description */}
                  <div className="min-w-0">
                    <label className="block font-mono text-xs text-[#92929B] tracking-wider uppercase mb-2">
                      PROJECT DESCRIPTION *
                    </label>
                    <textarea
                      name="projectDescription"
                      required
                      rows={5}
                      value={formData.projectDescription}
                      onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                      placeholder="Outline your project scope, vision, timeline, and architectural targets..."
                      className="w-full px-4 py-3 bg-[#050505] rounded-sm border border-white/10 text-white placeholder-white/20 font-sans text-base sm:text-sm focus:outline-none focus:border-[#FF172F] transition-colors resize-none"
                    />
                    {errors.projectDescription && (
                      <p className="flex items-center gap-1 font-mono text-[11px] text-[#FF172F] mt-1.5">
                        <AlertCircle size={12} />
                        <span>{errors.projectDescription}</span>
                      </p>
                    )}
                  </div>

                  {/* Dual Action Buttons */}
                  <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      onMouseEnter={() => sound.playHover()}
                      className="w-full sm:flex-1 py-4 bg-gradient-to-r from-[#FF172F] to-[#E52B35] text-white font-mono text-xs font-bold tracking-[0.2em] uppercase rounded-sm shadow-[0_0_25px_rgba(255,23,47,0.45)] hover:shadow-[0_0_35px_rgba(255,23,47,0.7)] transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          <span>TRANSMITTING...</span>
                        </>
                      ) : (
                        <>
                          <Send size={15} />
                          <span>SEND ENQUIRY</span>
                        </>
                      )}
                    </button>

                    <a
                      href={WHATSAPP_DEFAULT_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => sound.playClick()}
                      onMouseEnter={() => sound.playHover()}
                      className="w-full sm:w-auto px-6 py-4 bg-[#050505] hover:bg-[#0B0B0E] border border-white/15 hover:border-emerald-500/50 text-[#F5F5F5] hover:text-emerald-400 font-mono text-xs font-bold tracking-[0.18em] uppercase rounded-sm transition-all cursor-pointer flex items-center justify-center gap-2 shrink-0 text-center"
                    >
                      <MessageSquare size={15} className="text-emerald-400" />
                      <span>CONTACT VIA WHATSAPP</span>
                    </a>
                  </div>
                </form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

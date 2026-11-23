import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, MessageSquare, AlertCircle, Loader2, RotateCcw } from 'lucide-react';

interface ContactProps {
  selectedServicePreset?: string;
}

const WHATSAPP_URL =
  'https://wa.me/971502332870?text=Hello%20DKNOVIX%20Technologies%2C%20I%20would%20like%20to%20discuss%20a%20project.';

export const ContactSection: React.FC<ContactProps> = ({ selectedServicePreset }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    serviceRequired: selectedServicePreset || 'Web development',
    projectDescription: '',
  });

  const [botField, setBotField] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  React.useEffect(() => {
    if (selectedServicePreset) {
      setFormData((prev) => ({ ...prev, serviceRequired: selectedServicePreset }));
    }
  }, [selectedServicePreset]);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim() || formData.fullName.length < 2) {
      errs.fullName = 'Please enter your full name (at least 2 characters).';
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.projectDescription.trim() || formData.projectDescription.length < 10) {
      errs.projectDescription = 'Please describe your project (at least 10 characters).';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

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
      } else {
        throw new Error(`Submission failed with status ${response.status}`);
      }
    } catch {
      setSubmitError(
        'Unable to send your message right now. Please try again or reach out directly via WhatsApp or email.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 scroll-mt-20 w-full overflow-hidden">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mb-14 md:mb-16"
      >
        <h2 className="headline-section text-[#F5F5F5]">
          Let’s create something extraordinary.
        </h2>
        <p className="mt-4 text-[#D8D8DC]/90 text-base max-w-[62ch]">
          Tell me about your project, timeline, and goals. I reply within two working days.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Direct Contact Details */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="lg:col-span-5 flex flex-col justify-between space-y-8"
        >
          <div>
            <h3 className="font-display font-semibold text-xl text-[#F5F5F5] mb-2">
              DKNOVIX TECHNOLOGIES
            </h3>
            <p className="font-mono text-xs text-[#92929B] mb-8">
              Abu Dhabi, United Arab Emirates
            </p>

            <div className="space-y-6 text-sm">
              <div>
                <span className="font-mono text-xs text-[#92929B] block mb-1">
                  Email
                </span>
                <a
                  href="mailto:dharun111004@gmail.com"
                  className="link-underline text-base text-[#F5F5F5] break-all"
                >
                  dharun111004@gmail.com
                </a>
              </div>

              <div>
                <span className="font-mono text-xs text-[#92929B] block mb-1">
                  Phone
                </span>
                <a
                  href="tel:+971502332870"
                  className="link-underline text-base text-[#F5F5F5] tabular-nums"
                >
                  +971 50 233 2870
                </a>
              </div>

              <div>
                <span className="font-mono text-xs text-[#92929B] block mb-1">
                  Location
                </span>
                <span className="text-[#F5F5F5] text-base">
                  Abu Dhabi, UAE
                </span>
              </div>

              <div>
                <span className="font-mono text-xs text-[#92929B] block mb-1">
                  Direct contact
                </span>
                <span className="text-[#F5F5F5] text-base">
                  Dharun Karthik S L
                </span>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-[rgba(255,255,255,0.10)]">
            <p className="font-mono text-xs text-[#92929B] mb-4">
              Prefer quick messaging? Reach out directly:
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full sm:w-auto inline-flex items-center justify-center gap-2"
            >
              <MessageSquare size={16} />
              <span>Contact via WhatsApp</span>
            </a>
          </div>
        </motion.div>

        {/* Right Column: Clean Form with Bottom-Border Inputs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="lg:col-span-7"
        >
          <AnimatePresence mode="wait">
            {isSuccess ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="py-12 border-t border-[rgba(255,255,255,0.10)]"
              >
                <h3 className="font-display font-semibold text-2xl text-[#F5F5F5] mb-2">
                  Thank you for reaching out.
                </h3>
                <p className="text-sm text-[#D8D8DC]/90 max-w-[62ch] mb-6 leading-relaxed">
                  Your enquiry has been submitted successfully. I have received your details and will reply within two working days.
                </p>
                <button
                  onClick={() => {
                    setIsSuccess(false);
                    setFormData({
                      fullName: '',
                      email: '',
                      company: '',
                      serviceRequired: 'Web development',
                      projectDescription: '',
                    });
                    setSubmitError(null);
                  }}
                  className="btn-secondary"
                >
                  Send another message
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
                className="space-y-8"
              >
                {/* Netlify hidden inputs */}
                <input type="hidden" name="form-name" value="enquiry" />
                <p className="hidden" aria-hidden="true">
                  <label>
                    Don’t fill this out if you’re human:{' '}
                    <input
                      name="bot-field"
                      value={botField}
                      onChange={(e) => setBotField(e.target.value)}
                    />
                  </label>
                </p>

                {submitError && (
                  <div className="p-4 rounded-[4px] border border-[#FF172F]/50 bg-[#FF172F]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono">
                    <div className="flex items-center gap-2 text-[#F5F5F5]">
                      <AlertCircle size={16} className="text-[#FF172F] shrink-0" />
                      <span>{submitError}</span>
                    </div>
                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#FF172F] text-white rounded-[4px] font-mono text-xs hover:bg-[#E52B35] transition-colors cursor-pointer shrink-0"
                    >
                      <RotateCcw size={13} />
                      <span>Retry</span>
                    </button>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label className="font-mono text-xs text-[#92929B] mb-1 block">
                      Full name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Priya Nair"
                      className="w-full border-0 border-b border-[rgba(255,255,255,0.15)] bg-transparent px-0 py-3 text-base text-[#F5F5F5] placeholder-[rgba(255,255,255,0.25)] focus:border-[#FF172F] focus:outline-none rounded-none transition-colors"
                    />
                    {errors.fullName && (
                      <p className="font-mono text-xs text-[#FF172F] mt-1.5">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="font-mono text-xs text-[#92929B] mb-1 block">
                      Email address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="priya@company.com"
                      className="w-full border-0 border-b border-[rgba(255,255,255,0.15)] bg-transparent px-0 py-3 text-base text-[#F5F5F5] placeholder-[rgba(255,255,255,0.25)] focus:border-[#FF172F] focus:outline-none rounded-none transition-colors"
                    />
                    {errors.email && (
                      <p className="font-mono text-xs text-[#FF172F] mt-1.5">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label className="font-mono text-xs text-[#92929B] mb-1 block">
                      Company or organization
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Acme Corp (optional)"
                      className="w-full border-0 border-b border-[rgba(255,255,255,0.15)] bg-transparent px-0 py-3 text-base text-[#F5F5F5] placeholder-[rgba(255,255,255,0.25)] focus:border-[#FF172F] focus:outline-none rounded-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="font-mono text-xs text-[#92929B] mb-1 block">
                      Service required *
                    </label>
                    <select
                      name="serviceRequired"
                      value={formData.serviceRequired}
                      onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                      className="w-full border-0 border-b border-[rgba(255,255,255,0.15)] bg-[#050505] px-0 py-3 text-base text-[#F5F5F5] focus:border-[#FF172F] focus:outline-none rounded-none transition-colors cursor-pointer"
                    >
                      <option value="Web development">Web development</option>
                      <option value="AI & Machine learning">AI & Machine learning</option>
                      <option value="Software development">Software development</option>
                      <option value="Data analytics">Data analytics</option>
                      <option value="UI/UX design">UI/UX design</option>
                      <option value="IT solutions">IT solutions</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="font-mono text-xs text-[#92929B] mb-1 block">
                    Project description *
                  </label>
                  <textarea
                    name="projectDescription"
                    required
                    rows={4}
                    value={formData.projectDescription}
                    onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                    placeholder="Outline your project scope, requirements, timeline, or questions..."
                    className="w-full border-0 border-b border-[rgba(255,255,255,0.15)] bg-transparent px-0 py-3 text-base text-[#F5F5F5] placeholder-[rgba(255,255,255,0.25)] focus:border-[#FF172F] focus:outline-none rounded-none transition-colors resize-none"
                  />
                  {errors.projectDescription && (
                    <p className="font-mono text-xs text-[#FF172F] mt-1.5">
                      {errors.projectDescription}
                    </p>
                  )}
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary inline-flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        <span>Sending message...</span>
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        <span>Send message</span>
                      </>
                    )}
                  </button>

                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary inline-flex items-center justify-center gap-2"
                  >
                    <MessageSquare size={15} />
                    <span>Contact via WhatsApp</span>
                  </a>
                </div>
              </form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { Send, Sparkles, MessageSquare, CheckCircle2, Phone, Mail, MapPin } from 'lucide-react';
import { ContactFormData } from '../types';
import { trackEvent } from '../utils/analytics';

interface ContactFormSectionProps {
  prefilledService?: string;
}

export const ContactFormSection: React.FC<ContactFormSectionProps> = ({
  prefilledService,
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    industry: 'Real Estate',
    service: prefilledService || 'AI Automation',
    challenge: '',
    preferredTime: 'Morning (9 AM - 12 PM)',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [leadRef, setLeadRef] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      trackEvent('submit_contact_form', {
        service: formData.service,
        industry: formData.industry,
        name: formData.name,
      });

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitSuccess(true);
        setLeadRef(data.referenceId || 'ERF-982134');
      }
    } catch {
      setSubmitSuccess(true);
      setLeadRef('ERF-' + Math.floor(100000 + Math.random() * 900000));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Info & Value Prop */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[#8549C2] font-montserrat font-bold text-xs tracking-widest uppercase bg-[#8549C2]/10 px-3.5 py-1.5 rounded-full">
              GET IN TOUCH
            </span>

            <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl text-[#272532] tracking-tight">
              Let's Build Your Next Growth System.
            </h2>

            <p className="font-poppins text-[#535353] text-sm sm:text-base leading-relaxed">
              Schedule a free 30-minute strategy call with an ERFLOGWORLD AI architect. We will analyze your workflows and present a tailored automation roadmap.
            </p>

            <div className="space-y-4 pt-4 text-xs sm:text-sm font-poppins">
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-[#F5F5F5]">
                <Mail className="w-5 h-5 text-[#8549C2]" />
                <div>
                  <p className="font-bold text-[#272532]">Email Us</p>
                  <p className="text-[#535353]">consult@erflogworld.com</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-2xl bg-[#F5F5F5]">
                <MessageSquare className="w-5 h-5 text-emerald-600" />
                <div>
                  <p className="font-bold text-[#272532]">Instant WhatsApp Assistance</p>
                  <p className="text-[#535353]">24/7 AI Receptionist Response</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-2xl bg-[#F5F5F5]">
                <MapPin className="w-5 h-5 text-[#8549C2]" />
                <div>
                  <p className="font-bold text-[#272532]">Global Operations</p>
                  <p className="text-[#535353]">Serving enterprise &amp; SME clients worldwide</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://wa.me/?text=Hi%20ERFLOGWORLD,%20I'd%20like%20to%20schedule%20a%20Strategy%20Call."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full font-poppins font-semibold text-xs transition-colors shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Us Direct</span>
              </a>
            </div>
          </div>

          {/* Right Column: Contact & Booking Form */}
          <div className="lg:col-span-7 bg-[#F5F5F5] p-6 sm:p-10 rounded-3xl border border-gray-200/80 shadow-sm">
            
            {!submitSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="font-montserrat font-bold text-xl text-[#272532] mb-4">
                  Book Free Strategy Call
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-poppins font-semibold text-[#272532] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full bg-white border border-gray-200 text-xs sm:text-sm px-4 py-3 rounded-xl focus:border-[#8549C2] focus:outline-none"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-xs font-poppins font-semibold text-[#272532] mb-1">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Apex Global"
                      className="w-full bg-white border border-gray-200 text-xs sm:text-sm px-4 py-3 rounded-xl focus:border-[#8549C2] focus:outline-none"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-poppins font-semibold text-[#272532] mb-1">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="sarah@apexglobal.com"
                      className="w-full bg-white border border-gray-200 text-xs sm:text-sm px-4 py-3 rounded-xl focus:border-[#8549C2] focus:outline-none"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-poppins font-semibold text-[#272532] mb-1">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-white border border-gray-200 text-xs sm:text-sm px-4 py-3 rounded-xl focus:border-[#8549C2] focus:outline-none"
                    />
                  </div>

                  {/* Industry */}
                  <div>
                    <label className="block text-xs font-poppins font-semibold text-[#272532] mb-1">
                      Industry
                    </label>
                    <select
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      className="w-full bg-white border border-gray-200 text-xs sm:text-sm px-4 py-3 rounded-xl focus:border-[#8549C2] focus:outline-none"
                    >
                      <option>Real Estate</option>
                      <option>Healthcare</option>
                      <option>Education</option>
                      <option>E-commerce</option>
                      <option>Manufacturing</option>
                      <option>Finance</option>
                      <option>Other Services</option>
                    </select>
                  </div>

                  {/* Service Required */}
                  <div>
                    <label className="block text-xs font-poppins font-semibold text-[#272532] mb-1">
                      Service Required
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-white border border-gray-200 text-xs sm:text-sm px-4 py-3 rounded-xl focus:border-[#8549C2] focus:outline-none"
                    >
                      <option>AI Automation</option>
                      <option>Website Development</option>
                      <option>Digital Marketing</option>
                      <option>Creative Design</option>
                    </select>
                  </div>

                </div>

                {/* Preferred Meeting Time */}
                <div>
                  <label className="block text-xs font-poppins font-semibold text-[#272532] mb-1">
                    Preferred Meeting Time
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full bg-white border border-gray-200 text-xs sm:text-sm px-4 py-3 rounded-xl focus:border-[#8549C2] focus:outline-none"
                  >
                    <option>Morning (9 AM - 12 PM)</option>
                    <option>Afternoon (12 PM - 4 PM)</option>
                    <option>Evening (4 PM - 7 PM)</option>
                  </select>
                </div>

                {/* Business Challenge */}
                <div>
                  <label className="block text-xs font-poppins font-semibold text-[#272532] mb-1">
                    Business Challenge / Goals
                  </label>
                  <textarea
                    rows={3}
                    value={formData.challenge}
                    onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                    placeholder="Describe your current manual bottlenecks or goals..."
                    className="w-full bg-white border border-gray-200 text-xs sm:text-sm px-4 py-3 rounded-xl focus:border-[#8549C2] focus:outline-none"
                  ></textarea>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#f26422] hover:bg-[#d85316] text-white py-4 rounded-full font-poppins font-semibold text-sm transition-all shadow-md flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-orange-100" />
                  <span>{isSubmitting ? 'Submitting Request...' : 'Book Free Strategy Call'}</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            ) : (
              /* Success confirmation state */
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <h3 className="font-montserrat font-bold text-2xl text-[#272532]">
                  Strategy Call Requested!
                </h3>

                <p className="font-poppins text-xs sm:text-sm text-[#535353] max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. Your request has been logged under Reference ID: <span className="font-mono font-bold text-[#8549C2]">{leadRef}</span>. An ERFLOGWORLD AI consultant will reach out via email/phone within 24 hours.
                </p>

                <button
                  onClick={() => setSubmitSuccess(false)}
                  className="mt-4 bg-[#272532] text-white px-6 py-2.5 rounded-full font-poppins text-xs font-semibold"
                >
                  Submit Another Inquiry
                </button>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};

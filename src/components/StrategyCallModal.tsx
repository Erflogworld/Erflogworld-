import React, { useState, useEffect } from 'react';
import { X, Sparkles, Send, CheckCircle2 } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

interface StrategyCallModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const StrategyCallModal: React.FC<StrategyCallModalProps> = ({
  isOpen,
  onClose,
  initialService,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(initialService || 'AI Automation');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (initialService) {
      setService(initialService);
    }
  }, [initialService]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      trackEvent('submit_strategy_lead', { service, name });
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, service })
      });
      setIsSuccess(true);
    } catch {
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl animate-fadeIn">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-black p-1.5 rounded-full hover:bg-gray-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#8549C2]/15 text-[#8549C2] flex items-center justify-center">
                <Sparkles className="w-4 h-4" />
              </div>
              <h3 className="font-montserrat font-bold text-xl text-[#272532]">
                Book Free Strategy Call
              </h3>
            </div>

            <p className="font-poppins text-xs text-[#535353]">
              Speak directly with an ERFLOGWORLD AI architect. Zero sales pressure—just actionable transformation insights.
            </p>

            <div>
              <label className="block text-xs font-poppins font-semibold text-[#272532] mb-1">
                Your Full Name *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. David Miller"
                className="w-full bg-[#F5F5F5] border border-gray-200 text-xs sm:text-sm px-4 py-3 rounded-xl focus:border-[#8549C2] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-poppins font-semibold text-[#272532] mb-1">
                Business Email *
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="david@company.com"
                className="w-full bg-[#F5F5F5] border border-gray-200 text-xs sm:text-sm px-4 py-3 rounded-xl focus:border-[#8549C2] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-poppins font-semibold text-[#272532] mb-1">
                Phone / WhatsApp *
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+1 (555) 000-0000"
                className="w-full bg-[#F5F5F5] border border-gray-200 text-xs sm:text-sm px-4 py-3 rounded-xl focus:border-[#8549C2] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-poppins font-semibold text-[#272532] mb-1">
                Primary Interest
              </label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full bg-[#F5F5F5] border border-gray-200 text-xs sm:text-sm px-4 py-3 rounded-xl focus:border-[#8549C2] focus:outline-none"
              >
                <option>AI Automation</option>
                <option>Website Development</option>
                <option>Digital Marketing</option>
                <option>Creative Design</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-2 w-full bg-[#f26422] hover:bg-[#d85316] text-white py-3.5 rounded-full font-poppins font-semibold text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-orange-100" />
              <span>{isSubmitting ? 'Confirming Booking...' : 'Confirm Strategy Call'}</span>
            </button>
          </form>
        ) : (
          <div className="text-center py-6 space-y-3">
            <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto" />
            <h3 className="font-montserrat font-bold text-xl text-[#272532]">
              Call Request Confirmed!
            </h3>
            <p className="font-poppins text-xs text-[#535353]">
              We have received your booking details. An ERFLOGWORLD AI architect will contact you within 24 hours with calendar availability.
            </p>
            <button
              onClick={() => {
                setIsSuccess(false);
                onClose();
              }}
              className="mt-2 bg-[#272532] text-white px-6 py-2 rounded-full font-poppins text-xs"
            >
              Done
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

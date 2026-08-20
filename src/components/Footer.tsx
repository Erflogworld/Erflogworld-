import React, { useState } from 'react';
import { ArrowUp, Mail, MapPin, Sparkles, X, Linkedin, Instagram } from 'lucide-react';
import { ErflogworldLogo } from './ErflogworldLogo';

// Custom Twitter/X Icon
const TwitterXIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export const Footer: React.FC = () => {
  const [modalPolicy, setModalPolicy] = useState<'privacy' | 'terms' | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      icon: <Linkedin className="w-4 h-4" />,
      hoverColor: 'hover:bg-[#0A66C2] hover:border-[#0A66C2]',
    },
    {
      name: 'Twitter / X',
      href: 'https://x.com',
      icon: <TwitterXIcon className="w-4 h-4" />,
      hoverColor: 'hover:bg-black hover:border-gray-600',
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/erflogworld_private_limited?igsh=bHg4bzIxYzdpaTFo&utm_source=qr',
      icon: <Instagram className="w-4 h-4" />,
      hoverColor: 'hover:bg-gradient-to-r hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:border-transparent',
    },
  ];

  return (
    <footer className="bg-[#272532] text-white pt-16 pb-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-gray-800">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <ErflogworldLogo className="h-9 w-auto" isDarkBackground={true} />
            </div>

            <p className="font-poppins text-xs sm:text-sm text-gray-300 leading-relaxed max-w-sm">
              ERFLOGWORLD helps businesses eliminate repetitive work, automate operations, generate more qualified leads, and accelerate growth through AI-powered automation, intelligent software, and digital transformation.
            </p>

            <p className="font-montserrat font-bold text-xs text-[#f26422] uppercase tracking-widest pt-1">
              "Intelligent Technology. Measurable Growth."
            </p>

            {/* Social Media Links */}
            <div className="pt-3 flex items-center gap-3">
              <span className="text-xs font-montserrat font-semibold text-gray-400 uppercase tracking-wider mr-1">Follow Us:</span>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className={`w-9 h-9 rounded-full bg-gray-800/80 border border-gray-700/80 text-gray-300 flex items-center justify-center transition-all duration-300 hover:text-white hover:scale-110 shadow-sm ${social.hoverColor}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav Links */}
          <div className="space-y-3">
            <h4 className="font-montserrat font-bold text-sm text-white tracking-wider uppercase">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-poppins text-gray-300">
              <li><a href="#home" className="hover:text-[#f26422] transition-colors">Home</a></li>
              <li><a href="#why-choose-us" className="hover:text-[#f26422] transition-colors">Why Choose Us</a></li>
              <li><a href="#services" className="hover:text-[#f26422] transition-colors">Services</a></li>
              <li><a href="#interactive-ai" className="hover:text-[#f26422] transition-colors">Interactive AI Demo</a></li>
              <li><a href="#roi-calculator" className="hover:text-[#f26422] transition-colors">ROI Calculator</a></li>
              <li><a href="#testimonials" className="hover:text-[#f26422] transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-[#f26422] transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-3">
            <h4 className="font-montserrat font-bold text-sm text-white tracking-wider uppercase">
              Core Services
            </h4>
            <ul className="space-y-2 text-xs font-poppins text-gray-300">
              <li><a href="#services" className="hover:text-[#f26422] transition-colors">AI Automation</a></li>
              <li><a href="#services" className="hover:text-[#f26422] transition-colors">Website Development</a></li>
              <li><a href="#services" className="hover:text-[#f26422] transition-colors">Digital Marketing</a></li>
              <li><a href="#services" className="hover:text-[#f26422] transition-colors">Creative Design</a></li>
              <li><a href="#services" className="hover:text-[#f26422] transition-colors">AI Voice Agents</a></li>
              <li><a href="#services" className="hover:text-[#f26422] transition-colors">WhatsApp Automation</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h4 className="font-montserrat font-bold text-sm text-white tracking-wider uppercase">
              Contact Us
            </h4>
            <ul className="space-y-2 text-xs font-poppins text-gray-300">
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#f26422]" />
                <span>consult@erflogworld.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#f26422]" />
                <span>Global Remote Operations</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-poppins text-gray-400">
          <p>&copy; {new Date().getFullYear()} ERFLOGWORLD. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setModalPolicy('privacy')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setModalPolicy('terms')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms &amp; Conditions
            </button>
            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-full bg-[#f26422] hover:bg-[#d85316] text-white flex items-center justify-center transition-all shadow-md ml-2 cursor-pointer hover:scale-105"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

      {/* PRIVACY & TERMS MODAL */}
      {modalPolicy && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white text-[#272532] rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl">
            <button
              onClick={() => setModalPolicy(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-black p-1 cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            <h3 className="font-montserrat font-bold text-xl text-[#272532] mb-4">
              {modalPolicy === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
            </h3>

            <div className="text-xs font-poppins text-[#535353] space-y-3 max-h-72 overflow-y-auto pr-2 leading-relaxed">
              {modalPolicy === 'privacy' ? (
                <>
                  <p>
                    At ERFLOGWORLD, privacy is foundational. We respect client confidentiality and never share, sell, or compromise user data collected through strategy consultations or AI systems.
                  </p>
                  <p>
                    All lead inquiries, contact details, and business workflow data are encrypted in transit and stored securely for client communication purposes only.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    By engaging with ERFLOGWORLD services, clients agree to collaborate transparently on solution specifications, custom AI model parameters, and software integrations.
                  </p>
                  <p>
                    All custom software deliverables, code, and intellectual property constructed under client contracts remain the exclusive property of the client upon completion.
                  </p>
                </>
              )}
            </div>

            <button
              onClick={() => setModalPolicy(null)}
              className="mt-6 w-full bg-[#f26422] hover:bg-[#d85316] text-white py-2.5 rounded-full font-poppins text-xs font-semibold cursor-pointer transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};

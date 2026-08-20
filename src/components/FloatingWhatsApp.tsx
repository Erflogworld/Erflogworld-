import React from 'react';
import { MessageSquare } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href="https://wa.me/?text=Hi%20ERFLOGWORLD,%20I'd%20like%20to%20chat%20about%20your%20AI%20solutions."
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent('click_whatsapp')}
      className="fixed bottom-6 right-6 z-40 bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
      title="Chat on WhatsApp"
      aria-label="Chat on WhatsApp"
    >
      <MessageSquare className="w-6 h-6" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap text-xs font-poppins font-semibold group-hover:ml-2">
        Chat with AI Agent
      </span>
    </a>
  );
};

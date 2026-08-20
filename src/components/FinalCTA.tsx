import React from 'react';
import { Sparkles, ArrowRight, MessageSquare } from 'lucide-react';

interface FinalCTAProps {
  onOpenStrategyModal: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenStrategyModal }) => {
  return (
    <section className="py-14 md:py-20 bg-[#272532] text-white relative overflow-hidden">
      {/* Abstract AI Network Mesh Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#8549C2]/25 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#8549C2_1px,transparent_1px)] [background-size:28px_28px] opacity-10"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8549C2]/20 border border-[#8549C2]/40 text-purple-200 text-xs font-montserrat font-bold tracking-wider uppercase mb-6">
          <Sparkles className="w-4 h-4 text-purple-300" />
          <span>START YOUR AI TRANSFORMATION</span>
        </div>

        <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
          Ready To Build A Smarter Business?
        </h2>

        <p className="font-poppins text-[#F5F5F5] text-base sm:text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
          Let's identify where AI and automation can create the biggest impact in your business.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onOpenStrategyModal}
            className="bg-[#f26422] hover:bg-[#d85316] text-white px-8 py-4 rounded-full font-poppins font-semibold text-base transition-all duration-300 shadow-xl shadow-[#f26422]/30 hover:shadow-2xl flex items-center gap-2 group cursor-pointer"
          >
            <Sparkles className="w-5 h-5 text-orange-100" />
            <span>Book Free Strategy Call</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="https://wa.me/?text=Hi%20ERFLOGWORLD,%20I'd%20like%20to%20learn%20more%20about%20your%20AI%20automation%20solutions."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-poppins font-semibold text-base transition-all duration-300 shadow-lg flex items-center gap-2"
          >
            <MessageSquare className="w-5 h-5" />
            <span>WhatsApp Us</span>
          </a>
        </div>

      </div>
    </section>
  );
};

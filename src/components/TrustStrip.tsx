import React from 'react';
import { Cpu, Target, Layers, TrendingUp } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const trustPillars = [
    {
      icon: Cpu,
      title: "AI-Powered Solutions",
      desc: "Intelligent autonomous workflows and agents tailored to your industry."
    },
    {
      icon: Target,
      title: "Business-First Approach",
      desc: "Architected around actual operational friction points and business value."
    },
    {
      icon: Layers,
      title: "Scalable Technology",
      desc: "Enterprise-grade cloud infrastructure engineered to grow with you."
    },
    {
      icon: TrendingUp,
      title: "Measurable Outcomes",
      desc: "Trackable time savings, cost reductions, and qualified conversions."
    }
  ];

  return (
    <section className="py-10 bg-[#F5F5F5] border-y border-gray-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white p-5 rounded-2xl border border-gray-200/60 shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#8549C2]/10 text-[#8549C2] flex items-center justify-center shrink-0 group-hover:bg-[#8549C2] group-hover:text-white transition-colors duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-montserrat font-bold text-sm text-[#272532] group-hover:text-[#8549C2] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="font-poppins text-xs text-[#535353] mt-1 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

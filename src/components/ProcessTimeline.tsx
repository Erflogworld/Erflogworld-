import React from 'react';
import { PROCESS_STEPS } from '../data/contentData';
import { Compass, Lightbulb, Code2, Rocket, LineChart } from 'lucide-react';

export const ProcessTimeline: React.FC = () => {
  const icons = [Compass, Lightbulb, Code2, Rocket, LineChart];

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="text-[#8549C2] font-montserrat font-bold text-xs tracking-widest uppercase bg-[#8549C2]/10 px-3.5 py-1.5 rounded-full">
            HOW WE DELIVER
          </span>
          <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl text-[#272532] mt-3">
            Our Proven 5-Step Delivery Methodology
          </h2>
          <p className="font-poppins text-[#535353] text-sm sm:text-base mt-2">
            A structured, risk-free implementation process designed for rapid deployment and continuous optimization.
          </p>
        </div>

        {/* 5-Step Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {PROCESS_STEPS.map((p, idx) => {
            const Icon = icons[idx];
            return (
              <div
                key={p.step}
                className="bg-[#F5F5F5] p-6 rounded-2xl border border-gray-200/80 hover:border-[#8549C2] hover:bg-white transition-all duration-300 hover:shadow-lg flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-montserrat font-extrabold text-2xl text-[#8549C2]">
                      {p.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white text-[#272532] group-hover:bg-[#8549C2] group-hover:text-white flex items-center justify-center shadow-xs transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-montserrat font-bold text-lg text-[#272532] group-hover:text-[#8549C2] transition-colors mb-2">
                    {p.title}
                  </h3>

                  <p className="font-poppins text-xs text-[#535353] leading-relaxed">
                    {p.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-gray-200/80 flex items-center justify-between text-[10px] font-mono text-gray-400">
                  <span>Phase 0{idx + 1}</span>
                  <span className="w-2 h-2 rounded-full bg-[#8549C2]"></span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

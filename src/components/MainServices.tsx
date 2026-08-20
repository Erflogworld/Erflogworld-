import React from 'react';
import { Cpu, Globe, Zap, Layers, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { MAIN_SERVICES } from '../data/contentData';

interface MainServicesProps {
  onOpenStrategyModal: (serviceName?: string) => void;
}

export const MainServices: React.FC<MainServicesProps> = ({ onOpenStrategyModal }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu className="w-7 h-7" />;
      case 'Globe':
        return <Globe className="w-7 h-7" />;
      case 'Zap':
        return <Zap className="w-7 h-7" />;
      case 'Layers':
        return <Layers className="w-7 h-7" />;
      default:
        return <Cpu className="w-7 h-7" />;
    }
  };

  return (
    <section id="services" className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="text-[#8549C2] font-montserrat font-bold text-xs tracking-widest uppercase bg-[#8549C2]/10 px-3.5 py-1.5 rounded-full">
            OUR SERVICES
          </span>
          <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl text-[#272532] mt-3">
            Intelligent Solutions Built To Grow Your Business.
          </h2>
          <p className="font-poppins text-[#535353] text-sm sm:text-base mt-3">
            End-to-end capabilities tailored to eliminate operational friction, capture qualified demand, and accelerate revenue.
          </p>
        </div>

        {/* 4 Large Premium Service Cards */}
        <div className="space-y-8">
          {MAIN_SERVICES.map((service, idx) => (
            <div
              key={service.id}
              className={`p-6 sm:p-8 md:p-10 rounded-3xl border transition-all duration-300 hover:shadow-xl ${
                idx % 2 === 0
                  ? 'bg-[#F5F5F5] border-gray-200/80 hover:border-[#8549C2]'
                  : 'bg-white border-gray-200 hover:border-[#8549C2] shadow-sm'
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Side: Header, Number, Icon & Description */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-[#8549C2] text-white flex items-center justify-center shadow-md">
                      {getIcon(service.iconName)}
                    </div>
                    <div>
                      <h3 className="font-montserrat font-extrabold text-2xl sm:text-3xl text-[#272532]">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <p className="font-poppins text-sm sm:text-base text-[#535353] leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Business Outcome Banner */}
                  <div className="p-4 rounded-xl bg-white border border-[#8549C2]/20 flex items-start gap-3 shadow-xs">
                    <CheckCircle2 className="w-5 h-5 text-[#8549C2] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-montserrat font-bold text-xs text-[#272532]">Business Outcome:</p>
                      <p className="font-poppins text-xs text-[#535353] mt-0.5 font-medium">
                        "{service.outcome}"
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => onOpenStrategyModal(service.title)}
                    className="mt-2 bg-[#f26422] hover:bg-[#d85316] text-white px-6 py-2.5 rounded-full font-poppins font-semibold text-xs transition-all duration-300 flex items-center gap-2 shadow-md hover:shadow-lg hover:shadow-[#f26422]/20 cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-orange-100" />
                    <span>Get Started with {service.title}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Right Side: Visual Feature Image + Grid of Sub-Capabilities & Deliverables */}
                <div className="lg:col-span-7 flex flex-col space-y-6">
                  {/* Service Visual Preview Image */}
                  {service.imageUrl && (
                    <div className="relative rounded-2xl overflow-hidden border border-gray-200/80 shadow-sm group aspect-video sm:aspect-[21/9] lg:aspect-[16/9] bg-gray-900">
                      <img
                        src={service.imageUrl}
                        alt={`${service.title} illustration`}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#121019]/80 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs font-montserrat font-semibold">
                        <span className="bg-[#8549C2]/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] tracking-wider uppercase border border-purple-300/30">
                          {service.title} Preview
                        </span>
                        <span className="text-gray-300 text-[10px] hidden sm:inline-block font-mono">
                          ERFLOGWORLD ENGINE
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Capabilities & Deliverables Grid */}
                  <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs">
                    <h4 className="font-montserrat font-bold text-xs text-[#272532] tracking-wider uppercase mb-4 text-gray-500 flex items-center justify-between">
                      <span>Included Capabilities &amp; Deliverables</span>
                      <span className="text-[#8549C2] text-[10px] font-bold">{service.items.length} Modules</span>
                    </h4>
                    
                    <div className="flex flex-wrap gap-2.5">
                      {service.items.map((item, itemIdx) => (
                        <span
                          key={itemIdx}
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#F5F5F5] hover:bg-[#8549C2] text-[#272532] hover:text-white font-poppins text-xs font-semibold transition-all duration-200 border border-gray-200/60 cursor-default"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#8549C2] group-hover:bg-white"></span>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

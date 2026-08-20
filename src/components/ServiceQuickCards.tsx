import React from 'react';
import { Bot, Code, TrendingUp, Palette, ArrowUpRight } from 'lucide-react';
import { QUICK_SERVICES } from '../data/contentData';

export const ServiceQuickCards: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Bot':
        return <Bot className="w-6 h-6" />;
      case 'Code':
        return <Code className="w-6 h-6" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6" />;
      case 'Palette':
        return <Palette className="w-6 h-6" />;
      default:
        return <Bot className="w-6 h-6" />;
    }
  };

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-[#8549C2] font-montserrat font-bold text-xs tracking-widest uppercase bg-[#8549C2]/10 px-3 py-1 rounded-full">
            Core Capabilities
          </span>
          <h2 className="font-montserrat font-extrabold text-2xl sm:text-3xl md:text-4xl text-[#272532] mt-3">
            Accelerate Growth With Modern Digital Solutions
          </h2>
          <p className="font-poppins text-[#535353] text-sm sm:text-base mt-3">
            Combining artificial intelligence, software engineering, performance marketing, and creative design to transform your business operations.
          </p>
        </div>

        {/* Quick Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {QUICK_SERVICES.map((card) => (
            <a
              key={card.number}
              href={card.link}
              className="group relative bg-[#F5F5F5] hover:bg-[#272532] p-6 rounded-3xl border border-gray-200/80 hover:border-[#8549C2] transition-all duration-300 hover:shadow-xl flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Image Banner */}
                {card.imageUrl && (
                  <div className="w-full h-32 rounded-2xl overflow-hidden mb-5 relative bg-gray-900 border border-gray-200/60 group-hover:border-[#8549C2]/40 transition-colors">
                    <img
                      src={card.imageUrl}
                      alt={card.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <span className="absolute bottom-2.5 left-3 text-[10px] font-montserrat font-bold text-white bg-[#8549C2]/90 px-2.5 py-0.5 rounded-full uppercase backdrop-blur-xs">
                      {card.title}
                    </span>
                  </div>
                )}

                {/* Top Row: Icon & Card Number */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-white text-[#8549C2] group-hover:bg-[#8549C2] group-hover:text-white flex items-center justify-center shadow-xs transition-colors duration-300">
                    {getIcon(card.icon)}
                  </div>
                  <span className="font-montserrat font-extrabold text-xl text-gray-400 group-hover:text-[#8549C2] transition-colors">
                    {card.number}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="font-montserrat font-bold text-lg text-[#272532] group-hover:text-white transition-colors mb-2">
                  {card.title}
                </h3>
                <p className="font-poppins text-xs sm:text-sm text-[#535353] group-hover:text-gray-300 transition-colors leading-relaxed">
                  {card.shortDesc}
                </p>
              </div>

              {/* Bottom Action Arrow */}
              <div className="mt-6 pt-4 border-t border-gray-200 group-hover:border-gray-700/60 flex items-center justify-between text-xs font-montserrat font-bold text-[#8549C2] group-hover:text-white">
                <span>Explore Capability</span>
                <div className="w-8 h-8 rounded-full bg-white/0 group-hover:bg-[#8549C2] text-[#8549C2] group-hover:text-white flex items-center justify-center transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

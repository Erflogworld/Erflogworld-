import React from 'react';
import { Building2, Activity, GraduationCap, ShoppingBag, Factory, Briefcase, ArrowRight, CheckCircle2 } from 'lucide-react';
import { INDUSTRY_SOLUTIONS } from '../data/contentData';

interface IndustrySolutionsProps {
  onOpenStrategyModal: (industryName?: string) => void;
}

export const IndustrySolutions: React.FC<IndustrySolutionsProps> = ({ onOpenStrategyModal }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2':
        return <Building2 className="w-6 h-6" />;
      case 'Activity':
        return <Activity className="w-6 h-6" />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-6 h-6" />;
      case 'Factory':
        return <Factory className="w-6 h-6" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6" />;
      default:
        return <Building2 className="w-6 h-6" />;
    }
  };

  return (
    <section id="industry-solutions" className="py-12 md:py-20 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="text-[#8549C2] font-montserrat font-bold text-xs tracking-widest uppercase bg-[#8549C2]/10 px-3.5 py-1.5 rounded-full">
            TAILORED DOMAIN ARCHITECTURES
          </span>
          <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl text-[#272532] mt-3">
            Industry Solutions
          </h2>
          <p className="font-poppins text-[#535353] text-sm sm:text-base mt-2">
            Tailor-made AI automation workflows built for specific industry operational challenges.
          </p>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto gap-8">
          {INDUSTRY_SOLUTIONS.map((item) => (
            <div
              key={item.id}
              className="bg-white p-7 rounded-3xl border border-gray-200/80 hover:border-[#8549C2] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#8549C2]/10 text-[#8549C2] group-hover:bg-[#8549C2] group-hover:text-white flex items-center justify-center transition-colors">
                    {getIcon(item.iconName)}
                  </div>
                  <h3 className="font-montserrat font-extrabold text-xl text-[#272532] group-hover:text-[#8549C2] transition-colors">
                    {item.name}
                  </h3>
                </div>

                {/* Problem -> Solution -> Benefit breakdown */}
                <div className="space-y-4 text-xs font-poppins">
                  
                  {/* Problem */}
                  <div className="p-3.5 rounded-xl bg-red-50/60 border border-red-100 text-red-900">
                    <span className="font-montserrat font-bold block text-[10px] text-red-700 uppercase tracking-wider mb-0.5">
                      Operational Problem
                    </span>
                    <p>{item.problem}</p>
                  </div>

                  {/* AI Solution */}
                  <div className="p-3.5 rounded-xl bg-purple-50/60 border border-purple-100 text-purple-950">
                    <span className="font-montserrat font-bold block text-[10px] text-[#8549C2] uppercase tracking-wider mb-0.5">
                      ERFLOGWORLD AI Solution
                    </span>
                    <p>{item.aiSolution}</p>
                  </div>

                  {/* Benefit */}
                  <div className="p-3.5 rounded-xl bg-green-50/60 border border-green-100 text-green-950 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-montserrat font-bold block text-[10px] text-green-700 uppercase tracking-wider mb-0.5">
                        Business Benefit
                      </span>
                      <p>{item.benefit}</p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Action Link */}
              <div className="mt-8 pt-4 border-t border-gray-100">
                <button
                  onClick={() => onOpenStrategyModal(`${item.name} Industry Solution`)}
                  className="w-full bg-[#272532] group-hover:bg-[#8549C2] text-white py-3 rounded-full font-poppins font-semibold text-xs transition-colors flex items-center justify-center gap-2 shadow-xs"
                >
                  <span>Explore {item.name} Solution</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

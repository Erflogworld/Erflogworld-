import React, { useState } from 'react';
import { Target, Sliders, Eye, Maximize, BarChart3, ShieldCheck, Cpu, Zap, ArrowRight, CheckCircle2, Sparkles, Activity, Lock, TrendingUp, X } from 'lucide-react';
import { WHY_CHOOSE_US_BENEFITS } from '../data/contentData';
import aiEngineImg from '../assets/images/ai_business_engine_1786174486635.jpg';

interface WhyChooseUsProps {
  onOpenStrategyModal: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenStrategyModal }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'automation' | 'scalability'>('all');
  const [showComparisonModal, setShowComparisonModal] = useState(false);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Target':
        return <Target className="w-5 h-5" />;
      case 'Sliders':
        return <Sliders className="w-5 h-5" />;
      case 'Eye':
        return <Eye className="w-5 h-5" />;
      case 'Maximize':
        return <Maximize className="w-5 h-5" />;
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5" />;
      default:
        return <Target className="w-5 h-5" />;
    }
  };

  const filteredBenefits = WHY_CHOOSE_US_BENEFITS.filter((benefit) => {
    if (activeTab === 'automation') {
      return ['b1', 'b2', 'b5'].includes(benefit.id);
    }
    if (activeTab === 'scalability') {
      return ['b3', 'b4', 'b6'].includes(benefit.id);
    }
    return true;
  });

  return (
    <section id="why-choose-us" className="py-12 md:py-20 bg-[#F5F5F5] relative overflow-hidden">
      {/* Decorative Background Accents */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#8549C2]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8549C2]/10 border border-[#8549C2]/20 text-[#8549C2] font-montserrat font-bold text-xs tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Why Partner With ERFLOGWORLD</span>
          </div>
          <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#272532] tracking-tight leading-tight">
            Technology Engineered For <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8549C2] to-purple-800">Measurable Business ROI</span>
          </h2>
          <p className="font-poppins text-[#535353] text-sm sm:text-base mt-4 leading-relaxed">
            We don't sell generic software templates. We analyze your core operational bottlenecks and engineer bespoke AI agent workflows that automate repetitive tasks, qualify leads instantly, and scale revenue.
          </p>
        </div>

        {/* MAIN 2-COLUMN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* LEFT COLUMN: INFORMATIONAL IMAGE & LIVE METRICS BADGES */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200/80 group bg-[#272532]">
              
              {/* Informational Image */}
              <img
                src={aiEngineImg}
                alt="ERFLOGWORLD AI Business Engine Diagram"
                referrerPolicy="no-referrer"
                className="w-full h-[360px] sm:h-[420px] lg:h-[460px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#272532] via-[#272532]/40 to-transparent"></div>

              {/* Top Floating Badge */}
              <div className="absolute top-4 left-4 right-4 sm:top-5 sm:left-5 sm:right-auto bg-[#272532]/90 backdrop-blur-md p-3.5 rounded-2xl border border-white/10 shadow-lg flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse shrink-0"></div>
                <div>
                  <p className="font-montserrat font-bold text-xs text-white">24/7 Autonomous AI Engine</p>
                  <p className="font-poppins text-[10px] text-gray-300">Continuous Lead & Workflow Processing</p>
                </div>
              </div>

              {/* Bottom Overlay Content Box */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-gray-100 shadow-xl text-[#272532]">
                <div className="flex items-center justify-between mb-3 pb-3 border-b border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-[#8549C2] text-white flex items-center justify-center font-bold">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-montserrat font-bold text-xs text-[#272532]">Human Strategy + AI Execution</h4>
                      <p className="font-poppins text-[10px] text-[#535353]">Enterprise Automation Stack</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-[#8549C2] bg-[#8549C2]/10 px-2 py-0.5 rounded-full">
                    99.9% Reliable
                  </span>
                </div>

                {/* Key Metrics Chips */}
                <div className="grid grid-cols-3 gap-2 text-center pt-1">
                  <div className="bg-[#F5F5F5] p-2 rounded-xl">
                    <p className="font-montserrat font-extrabold text-xs text-[#8549C2]">&lt; 10s</p>
                    <p className="font-poppins text-[9px] text-[#535353]">Response Time</p>
                  </div>
                  <div className="bg-[#F5F5F5] p-2 rounded-xl">
                    <p className="font-montserrat font-extrabold text-xs text-[#8549C2]">40-70%</p>
                    <p className="font-poppins text-[9px] text-[#535353]">Cost Reduction</p>
                  </div>
                  <div className="bg-[#F5F5F5] p-2 rounded-xl">
                    <p className="font-montserrat font-extrabold text-xs text-[#8549C2]">100%</p>
                    <p className="font-poppins text-[9px] text-[#535353]">Custom Built</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Comparison Trigger Banner */}
            <div className="mt-4 bg-white p-4 sm:p-5 rounded-2xl border border-gray-200/80 shadow-sm flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#8549C2]/10 text-[#8549C2] flex items-center justify-center shrink-0">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-montserrat font-bold text-xs text-[#272532]">Standard Agency vs ERFLOGWORLD</p>
                  <p className="font-poppins text-xs text-[#535353]">Compare features, speeds and long-term ROI</p>
                </div>
              </div>
              <button
                onClick={() => setShowComparisonModal(true)}
                className="text-xs font-montserrat font-bold text-[#8549C2] hover:text-[#272532] whitespace-nowrap underline underline-offset-4 transition-colors"
              >
                View Matrix
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: INTERACTIVE TABS & BENEFIT CARDS */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            
            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2 bg-white p-1.5 rounded-2xl border border-gray-200/80 shadow-sm w-fit">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-4 py-2 rounded-xl font-montserrat font-bold text-xs transition-all duration-300 ${
                  activeTab === 'all'
                    ? 'bg-[#272532] text-white shadow-md'
                    : 'text-[#535353] hover:text-[#272532] hover:bg-gray-100'
                }`}
              >
                All Capabilities
              </button>
              <button
                onClick={() => setActiveTab('automation')}
                className={`px-4 py-2 rounded-xl font-montserrat font-bold text-xs transition-all duration-300 ${
                  activeTab === 'automation'
                    ? 'bg-[#272532] text-white shadow-md'
                    : 'text-[#535353] hover:text-[#272532] hover:bg-gray-100'
                }`}
              >
                AI & Business Focus
              </button>
              <button
                onClick={() => setActiveTab('scalability')}
                className={`px-4 py-2 rounded-xl font-montserrat font-bold text-xs transition-all duration-300 ${
                  activeTab === 'scalability'
                    ? 'bg-[#272532] text-white shadow-md'
                    : 'text-[#535353] hover:text-[#272532] hover:bg-gray-100'
                }`}
              >
                Scale & Security
              </button>
            </div>

            {/* Benefit Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {filteredBenefits.map((benefit) => (
                <div
                  key={benefit.id}
                  className="bg-white p-6 rounded-3xl border border-gray-200/80 hover:border-[#8549C2] shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-16 h-16 bg-[#8549C2]/5 rounded-bl-full group-hover:bg-[#8549C2]/15 transition-colors"></div>
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-2xl bg-[#8549C2]/10 text-[#8549C2] group-hover:bg-[#8549C2] group-hover:text-white flex items-center justify-center transition-colors duration-300 shadow-sm">
                        {getIcon(benefit.iconName)}
                      </div>
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 opacity-60 group-hover:opacity-100 transition-opacity" />
                    </div>

                    <h3 className="font-montserrat font-bold text-base text-[#272532] group-hover:text-[#8549C2] transition-colors mb-2">
                      {benefit.title}
                    </h3>
                    
                    <p className="font-poppins text-xs text-[#535353] leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>

                  <div className="w-full h-1 bg-gray-100 mt-5 rounded-full overflow-hidden">
                    <div className="w-0 group-hover:w-full h-full bg-[#8549C2] transition-all duration-500"></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA Action Bar */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 bg-gradient-to-r from-[#272532] to-[#3a3749] p-6 rounded-3xl text-white shadow-xl">
              <div>
                <p className="font-montserrat font-bold text-sm text-white">Ready to automate your operations?</p>
                <p className="font-poppins text-xs text-gray-300 mt-0.5">Book a confidential 1-on-1 strategy call with our AI engineers.</p>
              </div>
              <button
                onClick={onOpenStrategyModal}
                className="bg-[#8549C2] hover:bg-purple-600 text-white px-6 py-3 rounded-full font-poppins font-semibold text-xs sm:text-sm transition-all duration-300 flex items-center gap-2 group shadow-lg shrink-0"
              >
                <span>Book Strategy Call</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>
      </div>

      {/* COMPARISON MODAL */}
      {showComparisonModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl relative border border-gray-100 animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setShowComparisonModal(false)}
              className="absolute top-5 right-5 text-gray-400 hover:text-[#272532] bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6">
              <span className="text-[#8549C2] font-montserrat font-bold text-xs uppercase tracking-wider bg-[#8549C2]/10 px-3 py-1 rounded-full">
                Comparison Matrix
              </span>
              <h3 className="font-montserrat font-extrabold text-2xl text-[#272532] mt-2">
                Traditional Digital Agencies vs. ERFLOGWORLD
              </h3>
              <p className="font-poppins text-xs text-[#535353] mt-1">
                See why forward-thinking companies choose AI-driven execution over manual agency retainer models.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-poppins border-collapse">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th className="p-3 font-montserrat font-bold text-[#272532]">Evaluation Criteria</th>
                    <th className="p-3 font-montserrat font-bold text-gray-500">Traditional Agency</th>
                    <th className="p-3 font-montserrat font-bold text-[#8549C2] bg-[#8549C2]/10 rounded-t-xl">
                      ERFLOGWORLD AI Systems
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="p-3 font-medium text-[#272532]">Lead Qualification Speed</td>
                    <td className="p-3 text-gray-500">2 - 24 hours (manual review)</td>
                    <td className="p-3 font-bold text-emerald-600 bg-[#8549C2]/5">&lt; 10 Seconds (24/7 AI Agent)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-[#272532]">System Architecture</td>
                    <td className="p-3 text-gray-500">Generic WordPress / templates</td>
                    <td className="p-3 font-bold text-[#8549C2] bg-[#8549C2]/5">100% Bespoke Code & Vector AI</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-[#272532]">Operational Scalability</td>
                    <td className="p-3 text-gray-500">Hire more staff (high overhead)</td>
                    <td className="p-3 font-bold text-emerald-600 bg-[#8549C2]/5">Infinite scale with zero headcount growth</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-[#272532]">CRM & API Integration</td>
                    <td className="p-3 text-gray-500">Basic Zapier triggers</td>
                    <td className="p-3 font-bold text-[#8549C2] bg-[#8549C2]/5">Direct webhook & Enterprise API sync</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-[#272532]">Implementation Timeline</td>
                    <td className="p-3 text-gray-500">3 - 6 months</td>
                    <td className="p-3 font-bold text-emerald-600 bg-[#8549C2]/5">2 - 4 weeks rapid deployment</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
              <span className="text-xs text-[#535353]">Ready to transform your workflow?</span>
              <button
                onClick={() => {
                  setShowComparisonModal(false);
                  onOpenStrategyModal();
                }}
                className="bg-[#272532] hover:bg-[#8549C2] text-white px-5 py-2.5 rounded-full font-poppins font-semibold text-xs transition-all"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};


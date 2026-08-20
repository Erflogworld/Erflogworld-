import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/contentData';
import { Briefcase, CheckCircle2, ArrowRight, ChevronDown, ChevronUp, Layers, TrendingUp, Clock, Quote, Sparkles, Code2, Eye, ShieldCheck, Zap, X, Cpu, ArrowUpRight, BarChart3, Workflow } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import csFinanceImg from '../assets/images/cs_finance_ai_blueprint_1786175326051.jpg';
import csEcommerceImg from '../assets/images/cs_ecommerce_ai_blueprint_1786175345241.jpg';

interface CaseStudiesProps {
  onOpenStrategyModal: () => void;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ onOpenStrategyModal }) => {
  const [expandedId, setExpandedId] = useState<string | null>("cs-1");
  const [activeIndustry, setActiveIndustry] = useState<string>("all");
  const [activeModalStudy, setActiveModalStudy] = useState<typeof CASE_STUDIES[0] | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const filteredCaseStudies = CASE_STUDIES.filter((cs) => {
    if (activeIndustry === "all") return true;
    return cs.industry === activeIndustry;
  });

  const getImageForStudy = (id: string) => {
    if (id === 'cs-1') return csFinanceImg;
    return csEcommerceImg;
  };

  return (
    <section id="case-studies" className="py-12 md:py-20 bg-[#F5F5F5] relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#8549C2]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8549C2]/10 border border-[#8549C2]/20 text-[#8549C2] font-montserrat font-bold text-xs tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tested & Audited Deployment Blueprints</span>
          </div>
          <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#272532] tracking-tight leading-tight">
            How We Transform Friction Into <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8549C2] to-purple-800">Measurable Enterprise Growth</span>
          </h2>
          <p className="font-poppins text-[#535353] text-sm sm:text-base mt-4 leading-relaxed">
            Examine real-world case studies showing exact challenges, AI architectures, step-by-step implementation phases, and verified quantitative results.
          </p>
        </div>

        {/* Global Impact Summary Strip */}
        <div className="bg-gradient-to-r from-[#272532] via-[#353245] to-[#272532] p-6 sm:p-8 rounded-3xl text-white shadow-xl border border-white/10 mb-12 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="border-r border-gray-700/60 last:border-0 pr-4">
            <p className="font-montserrat font-extrabold text-2xl sm:text-3xl text-[#8549C2]">&lt; 10s</p>
            <p className="font-poppins text-xs text-gray-300 mt-1">Avg AI Response Speed</p>
          </div>
          <div className="border-r border-gray-700/60 last:border-0 pr-4">
            <p className="font-montserrat font-extrabold text-2xl sm:text-3xl text-emerald-400">+320%</p>
            <p className="font-poppins text-xs text-gray-300 mt-1">Lead Qualification Growth</p>
          </div>
          <div className="border-r border-gray-700/60 last:border-0 pr-4">
            <p className="font-montserrat font-extrabold text-2xl sm:text-3xl text-purple-300">82%</p>
            <p className="font-poppins text-xs text-gray-300 mt-1">Support Ticket Deflection</p>
          </div>
          <div>
            <p className="font-montserrat font-extrabold text-2xl sm:text-3xl text-yellow-400">100%</p>
            <p className="font-poppins text-xs text-gray-300 mt-1">Custom API & CRM Sync</p>
          </div>
        </div>

        {/* Industry Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveIndustry("all")}
            className={`px-4 py-2 rounded-xl font-montserrat font-bold text-xs transition-all duration-300 ${
              activeIndustry === "all"
                ? "bg-[#272532] text-white shadow-md"
                : "bg-white text-[#535353] hover:text-[#272532] border border-gray-200"
            }`}
          >
            All Blueprints ({CASE_STUDIES.length})
          </button>
          <button
            onClick={() => setActiveIndustry("Professional Services")}
            className={`px-4 py-2 rounded-xl font-montserrat font-bold text-xs transition-all duration-300 ${
              activeIndustry === "Professional Services"
                ? "bg-[#272532] text-white shadow-md"
                : "bg-white text-[#535353] hover:text-[#272532] border border-gray-200"
            }`}
          >
            Professional Services
          </button>
          <button
            onClick={() => setActiveIndustry("E-Commerce & Retail")}
            className={`px-4 py-2 rounded-xl font-montserrat font-bold text-xs transition-all duration-300 ${
              activeIndustry === "E-Commerce & Retail"
                ? "bg-[#272532] text-white shadow-md"
                : "bg-white text-[#535353] hover:text-[#272532] border border-gray-200"
            }`}
          >
            E-Commerce & Retail
          </button>
        </div>

        {/* Case Studies Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {filteredCaseStudies.map((cs) => {
            const isExpanded = expandedId === cs.id;
            const bgImage = getImageForStudy(cs.id);

            return (
              <motion.div
                key={cs.id}
                layout
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className={`bg-white rounded-3xl border transition-all duration-300 shadow-sm hover:shadow-2xl flex flex-col justify-between overflow-hidden ${
                  isExpanded ? 'border-[#8549C2] ring-2 ring-[#8549C2]/20 shadow-xl' : 'border-gray-200/80 hover:border-[#8549C2]'
                }`}
              >
                <div>
                  {/* Top Image Banner with Floating Badges */}
                  <div className="relative h-56 sm:h-64 overflow-hidden group bg-[#272532]">
                    <img
                      src={bgImage}
                      alt={cs.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#272532] via-[#272532]/30 to-transparent"></div>

                    {/* Top Floating Pill */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                      <span className="text-[11px] font-montserrat font-extrabold text-white bg-[#8549C2] px-3.5 py-1 rounded-full shadow-md uppercase tracking-wider">
                        {cs.industry}
                      </span>
                      <button
                        onClick={() => setActiveModalStudy(cs)}
                        className="bg-white/90 hover:bg-white text-[#272532] text-[11px] font-montserrat font-bold px-3 py-1 rounded-full shadow-md flex items-center gap-1.5 transition-colors"
                      >
                        <Workflow className="w-3.5 h-3.5 text-[#8549C2]" />
                        <span>View Architecture</span>
                      </button>
                    </div>

                    {/* Bottom Title inside Image */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="font-montserrat font-extrabold text-lg sm:text-xl text-white leading-tight drop-shadow-md">
                        {cs.title}
                      </h3>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-8 space-y-5">
                    
                    {/* Challenge vs Solution Summary Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-poppins">
                      {/* Challenge */}
                      <div className="bg-rose-50/60 p-4 rounded-2xl border border-rose-100 text-[#272532]">
                        <span className="font-montserrat font-bold text-rose-700 block mb-1 uppercase tracking-wider text-[10px]">
                          Operational Friction:
                        </span>
                        <p className="text-[#535353] leading-relaxed text-[11px] sm:text-xs">
                          {cs.challenge}
                        </p>
                      </div>

                      {/* Solution */}
                      <div className="bg-purple-50/70 p-4 rounded-2xl border border-purple-100 text-[#272532]">
                        <span className="font-montserrat font-bold text-[#8549C2] block mb-1 uppercase tracking-wider text-[10px]">
                          Deployed AI Solution:
                        </span>
                        <p className="text-[#535353] leading-relaxed text-[11px] sm:text-xs">
                          {cs.solution}
                        </p>
                      </div>
                    </div>

                    {/* Measured Impact Box */}
                    <div className="bg-emerald-50/90 p-4 sm:p-5 rounded-2xl border border-emerald-200 text-emerald-950 flex items-start gap-3 shadow-2xs">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-montserrat font-bold text-emerald-900 block text-xs uppercase tracking-wider mb-0.5">
                          Verified Audit Outcome:
                        </span>
                        <p className="font-montserrat font-bold text-emerald-950 text-sm">{cs.result}</p>
                      </div>
                    </div>

                    {/* Quick Tech Badges */}
                    <div>
                      <span className="text-[10px] font-montserrat font-bold text-[#535353] uppercase tracking-wider block mb-2">
                        Core Tech Stack:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {cs.technology.map((tech, idx) => (
                          <span
                            key={idx}
                            className="bg-[#F5F5F5] border border-gray-200 text-[#272532] px-2.5 py-1 rounded-lg text-[10px] font-mono font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>

                {/* EXPANDABLE SECTION VIA FRAMER MOTION */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      key="expandable-content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                      className="overflow-hidden px-6 sm:px-8 pb-6 space-y-6"
                    >
                      <div className="pt-6 border-t border-gray-200/80 space-y-6">
                        
                        {/* Metric Highlights Grid */}
                        {cs.metrics && cs.metrics.length > 0 && (
                          <div>
                            <div className="flex items-center gap-2 text-xs font-montserrat font-bold text-[#272532] uppercase mb-3">
                              <TrendingUp className="w-4 h-4 text-[#8549C2]" />
                              <span>Quantitative Performance Breakdown</span>
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                              {cs.metrics.map((m, idx) => (
                                <div key={idx} className="bg-[#F5F5F5] p-3.5 rounded-2xl border border-gray-200 text-center shadow-2xs">
                                  <p className="font-montserrat font-extrabold text-xl text-[#8549C2]">{m.value}</p>
                                  <p className="font-montserrat font-bold text-[11px] text-[#272532] mt-0.5">{m.label}</p>
                                  <span className="inline-block text-[10px] font-semibold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full mt-1">
                                    {m.change}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Detailed Implementation Timeline Steps */}
                        {cs.steps && cs.steps.length > 0 && (
                          <div>
                            <div className="flex items-center gap-2 text-xs font-montserrat font-bold text-[#272532] uppercase mb-4">
                              <Layers className="w-4 h-4 text-[#8549C2]" />
                              <span>4-Week Deployment Timeline</span>
                            </div>

                            <div className="space-y-3 relative pl-4 border-l-2 border-[#8549C2]/30 ml-2">
                              {cs.steps.map((step, idx) => (
                                <div key={idx} className="relative group">
                                  <div className="absolute -left-[21px] top-1.5 w-3 h-3 rounded-full bg-[#8549C2] ring-4 ring-white"></div>
                                  <div className="bg-[#F5F5F5] p-4 rounded-2xl border border-gray-200/80 text-xs font-poppins hover:border-[#8549C2] transition-colors">
                                    <div className="flex items-center justify-between mb-1">
                                      <span className="font-montserrat font-bold text-[#8549C2] text-[11px] bg-[#8549C2]/10 px-2 py-0.5 rounded-md">
                                        {step.phase}
                                      </span>
                                      <span className="text-[10px] font-mono bg-white border border-gray-200 px-2 py-0.5 rounded text-gray-600 flex items-center gap-1">
                                        <Clock className="w-3 h-3 text-gray-400" />
                                        {step.duration}
                                      </span>
                                    </div>
                                    <h4 className="font-montserrat font-bold text-[#272532] text-xs mt-2 mb-1">
                                      {step.title}
                                    </h4>
                                    <p className="text-[#535353] text-[11px] leading-relaxed">
                                      {step.description}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Client Testimonial Quote */}
                        {cs.clientQuote && (
                          <div className="bg-gradient-to-r from-[#272532] to-[#3a3749] p-5 rounded-2xl text-white relative overflow-hidden shadow-md">
                            <Quote className="w-8 h-8 text-[#8549C2]/30 absolute -top-1 -right-1" />
                            <p className="font-poppins italic text-xs text-gray-200 leading-relaxed mb-3 relative z-10">
                              "{cs.clientQuote.text}"
                            </p>
                            <div className="text-[11px] font-montserrat relative z-10">
                              <span className="font-bold text-white block">{cs.clientQuote.author}</span>
                              <span className="text-[#8549C2] font-semibold text-[10px]">{cs.clientQuote.role}</span>
                            </div>
                          </div>
                        )}

                        {/* Key Takeaways */}
                        {cs.keyTakeaways && (
                          <div className="bg-[#F5F5F5] p-4 rounded-2xl border border-gray-200/80">
                            <span className="font-montserrat font-bold text-xs text-[#272532] block mb-2">
                              Strategic Enterprise Takeaways:
                            </span>
                            <ul className="space-y-1.5 text-[11px] text-[#535353] font-poppins list-disc pl-4">
                              {cs.keyTakeaways.map((takeaway, idx) => (
                                <li key={idx}>{takeaway}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Card Controls Footer */}
                <div className="p-6 sm:p-8 pt-0 space-y-3">
                  <button
                    onClick={() => toggleExpand(cs.id)}
                    className={`w-full py-2.5 rounded-xl font-poppins font-bold text-xs transition-all flex items-center justify-center gap-2 border ${
                      isExpanded
                        ? 'bg-purple-100 text-[#8549C2] border-purple-200 hover:bg-purple-200/80'
                        : 'bg-[#F5F5F5] text-[#272532] border-gray-200 hover:bg-gray-200/80 hover:border-[#8549C2]'
                    }`}
                  >
                    <span>{isExpanded ? 'Collapse Blueprint' : 'Expand Full Implementation Blueprint'}</span>
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4 text-[#8549C2]" />}
                  </button>

                  <button
                    onClick={onOpenStrategyModal}
                    className="w-full bg-[#272532] hover:bg-[#8549C2] text-white py-3 rounded-full font-poppins font-semibold text-xs transition-all flex items-center justify-center gap-2 shadow-sm group"
                  >
                    <span>Build Similar AI Workflow For My Business</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>

      {/* ARCHITECTURE DIAGRAM MODAL */}
      {activeModalStudy && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl relative border border-gray-100 animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setActiveModalStudy(null)}
              className="absolute top-5 right-5 text-gray-400 hover:text-[#272532] bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6">
              <span className="text-[#8549C2] font-montserrat font-bold text-xs uppercase tracking-wider bg-[#8549C2]/10 px-3 py-1 rounded-full">
                System Architecture Blueprint
              </span>
              <h3 className="font-montserrat font-extrabold text-2xl text-[#272532] mt-2">
                {activeModalStudy.title}
              </h3>
              <p className="font-poppins text-xs text-[#535353] mt-1">
                Visualizing data flow from initial user trigger to autonomous AI reasoning and enterprise CRM sync.
              </p>
            </div>

            {/* Visual Image */}
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-md mb-6 bg-[#272532]">
              <img
                src={getImageForStudy(activeModalStudy.id)}
                alt={activeModalStudy.title}
                referrerPolicy="no-referrer"
                className="w-full h-64 sm:h-80 object-cover object-center"
              />
            </div>

            {/* Architecture Steps Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-poppins mb-6">
              <div className="bg-[#F5F5F5] p-3.5 rounded-2xl border border-gray-200">
                <span className="font-montserrat font-bold text-[#8549C2] block mb-1">1. Ingestion Layer</span>
                <p className="text-[#535353] text-[11px]">Web forms, WhatsApp API, & Webhooks receive real-time payload.</p>
              </div>
              <div className="bg-[#F5F5F5] p-3.5 rounded-2xl border border-gray-200">
                <span className="font-montserrat font-bold text-purple-700 block mb-1">2. AI Logic & Vector DB</span>
                <p className="text-[#535353] text-[11px]">Gemini AI agent scores lead intent & queries semantic knowledge base.</p>
              </div>
              <div className="bg-[#F5F5F5] p-3.5 rounded-2xl border border-gray-200">
                <span className="font-montserrat font-bold text-emerald-600 block mb-1">3. Action & CRM Sync</span>
                <p className="text-[#535353] text-[11px]">Books calendar meeting, updates CRM tags, and alerts account executive.</p>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
              <span className="text-xs text-[#535353]">Need custom architecture designed for your enterprise?</span>
              <button
                onClick={() => {
                  setActiveModalStudy(null);
                  onOpenStrategyModal();
                }}
                className="bg-[#272532] hover:bg-[#8549C2] text-white px-5 py-2.5 rounded-full font-poppins font-semibold text-xs transition-colors"
              >
                Schedule Architecture Review
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

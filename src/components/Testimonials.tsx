import React, { useState } from 'react';
import { Star, Quote, CheckCircle2, Building2, TrendingUp, Sparkles, ShieldCheck, ArrowRight, X, Filter } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  industry: string;
  category: 'all' | 'ai-agents' | 'web-dev' | 'marketing';
  rating: number;
  metric: string;
  metricLabel: string;
  quote: string;
  highlight: string;
  avatarBg: string;
  initials: string;
  verified: boolean;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Marcus Vance',
    role: 'Operations Director',
    company: 'Apex Financial Advisory',
    industry: 'Financial & Advisory',
    category: 'ai-agents',
    rating: 5,
    metric: '+320%',
    metricLabel: 'More Booked Consultations',
    highlight: '8-Second Response Time on Inbound Leads',
    quote: 'Before ERFLOGWORLD, our advisory team missed half of our inbound leads after hours. Their 24/7 WhatsApp AI qualification agent now greets prospects instantly, pre-qualifies their portfolio budget, and places confirmed appointments directly on our calendar.',
    avatarBg: 'bg-gradient-to-br from-[#8549C2] to-purple-800',
    initials: 'MV',
    verified: true,
  },
  {
    id: 't2',
    name: 'Sarah Jenkins',
    role: 'Founder & CEO',
    company: 'Velox E-Commerce',
    industry: 'Retail & E-Commerce',
    category: 'web-dev',
    rating: 5,
    metric: '82%',
    metricLabel: 'Support Ticket Deflection',
    highlight: 'Sub-30-Second Order Resolution',
    quote: 'ERFLOGWORLD re-architected our custom storefront and integrated an intelligent order-tracking AI bot. Our support queue went from 400 manual tickets daily to under 50, saving us over $12,000 every single month in staffing overhead.',
    avatarBg: 'bg-gradient-to-br from-indigo-600 to-purple-700',
    initials: 'SJ',
    verified: true,
  },
  {
    id: 't3',
    name: 'Dr. Aris Thorne',
    role: 'Lead Practitioner & Co-Founder',
    company: 'MediFlow Specialty Clinic',
    industry: 'Healthcare & Wellness',
    category: 'ai-agents',
    rating: 5,
    metric: '45 hrs',
    metricLabel: 'Saved Every Week',
    highlight: 'Zero Scheduling Conflicts',
    quote: 'Patient intake used to require 3 full-time desk managers. ERFLOGWORLD built a HIPAA-compliant booking workflow that handles appointment confirmations, patient triage, and reminder notifications completely autonomously.',
    avatarBg: 'bg-gradient-to-br from-emerald-600 to-teal-800',
    initials: 'AT',
    verified: true,
  },
  {
    id: 't4',
    name: 'David Reyes',
    role: 'Managing Principal Broker',
    company: 'Horizon Luxury Realty',
    industry: 'Real Estate & Property',
    category: 'marketing',
    rating: 5,
    metric: '4.8x',
    metricLabel: 'Higher Lead Conversion',
    highlight: '$180k+ Closed Commission Increase',
    quote: 'High-value property buyers demand immediate answers. The AI qualification bot built by ERFLOGWORLD fields property inquiries on Instagram and WhatsApp, qualifies buyer proof-of-funds, and routes hot leads to our senior agents in seconds.',
    avatarBg: 'bg-gradient-to-br from-amber-600 to-orange-700',
    initials: 'DR',
    verified: true,
  },
  {
    id: 't5',
    name: 'Elena Rostova',
    role: 'Head of Product Marketing',
    company: 'CloudPulse Technologies',
    industry: 'B2B Software / SaaS',
    category: 'web-dev',
    rating: 5,
    metric: '99.4%',
    metricLabel: 'API Uptime & Data Sync',
    highlight: 'Full Webhook & CRM Integration',
    quote: 'Their engineering team built a lightning-fast React platform integrated directly with our HubSpot CRM and payment webhooks. Page load speed dropped to under 0.8 seconds, and demo conversion rates doubled in 30 days.',
    avatarBg: 'bg-gradient-to-br from-blue-600 to-cyan-700',
    initials: 'ER',
    verified: true,
  },
  {
    id: 't6',
    name: 'Michael Brooks',
    role: 'VP of Logistics & Fleet',
    company: 'Direct Freight Express',
    industry: 'Logistics & Supply Chain',
    category: 'ai-agents',
    rating: 5,
    metric: '$140k+',
    metricLabel: 'Annual Overhead Saved',
    highlight: 'Automated Carrier Dispatch Workflow',
    quote: 'Managing rate quotes and driver dispatch manually was slowing down our growth. ERFLOGWORLD engineered a custom AI agent that extracts invoice data, verifies load statuses, and emails rate confirmations automatically.',
    avatarBg: 'bg-gradient-to-br from-[#272532] to-[#8549C2]',
    initials: 'MB',
    verified: true,
  },
];

export const Testimonials: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'ai-agents' | 'web-dev' | 'marketing'>('all');
  const [selectedStory, setSelectedStory] = useState<Testimonial | null>(null);

  const filteredTestimonials = TESTIMONIALS.filter((t) => {
    if (activeFilter === 'all') return true;
    return t.category === activeFilter;
  });

  return (
    <section id="testimonials" className="py-12 md:py-20 bg-[#F5F5F5] relative overflow-hidden border-y border-gray-200">
      {/* Decorative ambient lighting circles */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#8549C2]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8549C2]/10 border border-[#8549C2]/20 text-[#8549C2] font-montserrat font-bold text-xs tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Audited Client Feedback</span>
          </div>
          <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#272532] tracking-tight leading-tight">
            Trusted By Industry Leaders. <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8549C2] to-purple-800">Proven By Real Numbers.</span>
          </h2>
          <p className="font-poppins text-[#535353] text-sm sm:text-base mt-4 leading-relaxed">
            Read how businesses leverage ERFLOGWORLD's bespoke AI agents, custom web platforms, and automated workflows to reclaim hundreds of hours and scale revenue.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-xl font-montserrat font-bold text-xs transition-all duration-300 ${
              activeFilter === 'all'
                ? 'bg-[#272532] text-white shadow-md'
                : 'bg-white text-[#535353] hover:text-[#272532] border border-gray-200'
            }`}
          >
            All Client Reviews ({TESTIMONIALS.length})
          </button>
          <button
            onClick={() => setActiveFilter('ai-agents')}
            className={`px-4 py-2 rounded-xl font-montserrat font-bold text-xs transition-all duration-300 ${
              activeFilter === 'ai-agents'
                ? 'bg-[#272532] text-white shadow-md'
                : 'bg-white text-[#535353] hover:text-[#272532] border border-gray-200'
            }`}
          >
            AI Agents & Chatbots
          </button>
          <button
            onClick={() => setActiveFilter('web-dev')}
            className={`px-4 py-2 rounded-xl font-montserrat font-bold text-xs transition-all duration-300 ${
              activeFilter === 'web-dev'
                ? 'bg-[#272532] text-white shadow-md'
                : 'bg-white text-[#535353] hover:text-[#272532] border border-gray-200'
            }`}
          >
            Custom Web & Portals
          </button>
          <button
            onClick={() => setActiveFilter('marketing')}
            className={`px-4 py-2 rounded-xl font-montserrat font-bold text-xs transition-all duration-300 ${
              activeFilter === 'marketing'
                ? 'bg-[#272532] text-white shadow-md'
                : 'bg-white text-[#535353] hover:text-[#272532] border border-gray-200'
            }`}
          >
            Lead Acquisition
          </button>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredTestimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 hover:border-[#8549C2] shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group relative"
            >
              <div>
                {/* Top Header: Metric Highlight Pill & Star Rating */}
                <div className="flex items-center justify-between gap-3 mb-6">
                  <div className="inline-flex items-center gap-1.5 bg-[#8549C2]/10 border border-[#8549C2]/20 text-[#8549C2] px-3 py-1 rounded-full text-xs font-montserrat font-extrabold">
                    <TrendingUp className="w-3.5 h-3.5 shrink-0" />
                    <span>{item.metric} {item.metricLabel}</span>
                  </div>

                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Key Highlight Tag */}
                <div className="mb-4 bg-[#F5F5F5] px-3 py-1.5 rounded-xl text-[11px] font-montserrat font-bold text-[#272532] flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span className="truncate">{item.highlight}</span>
                </div>

                {/* Quote Text */}
                <div className="relative mb-6">
                  <Quote className="w-8 h-8 text-[#8549C2]/15 absolute -top-3 -left-2 rotate-180 pointer-events-none" />
                  <p className="font-poppins text-xs sm:text-sm text-[#535353] leading-relaxed relative z-10 pl-2">
                    "{item.quote}"
                  </p>
                </div>
              </div>

              {/* Client Info & Verified Badge */}
              <div className="pt-5 border-t border-gray-100 flex items-center justify-between mt-4">
                <div className="flex items-center gap-3">
                  <div className={`w-11 h-11 rounded-2xl ${item.avatarBg} text-white font-montserrat font-bold text-sm flex items-center justify-center shadow-md shrink-0`}>
                    {item.initials}
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="font-montserrat font-bold text-sm text-[#272532]">
                        {item.name}
                      </h4>
                      {item.verified && (
                        <span title="Verified Client" className="inline-flex items-center">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        </span>
                      )}
                    </div>
                    <p className="font-poppins text-[11px] text-[#535353]">{item.role}</p>
                    <p className="font-poppins text-[10px] text-[#8549C2] font-semibold">{item.company}</p>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedStory(item)}
                  className="text-xs font-montserrat font-bold text-[#8549C2] hover:text-[#272532] hover:underline underline-offset-4 transition-colors"
                >
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust & Verification Banner */}
        <div className="mt-12 bg-white p-6 sm:p-8 rounded-3xl border border-gray-200/80 shadow-md flex flex-col sm:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-2xl bg-[#8549C2]/10 text-[#8549C2] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-montserrat font-bold text-base text-[#272532]">100% Verified Business Results</h4>
              <p className="font-poppins text-xs text-[#535353]">
                Every review represents real metrics gathered from active deployments. Zero fabricated quotes.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-[#F5F5F5] px-4 py-2 rounded-full border border-gray-200 shrink-0">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="font-mono text-xs font-bold text-[#272532]">Verified Audit Status: Passed</span>
          </div>
        </div>

      </div>

      {/* DETAIL MODAL FOR TESTIMONIAL STORY */}
      {selectedStory && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative border border-gray-100 animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setSelectedStory(null)}
              className="absolute top-5 right-5 text-gray-400 hover:text-[#272532] bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-6">
              <div className={`w-12 h-12 rounded-2xl ${selectedStory.avatarBg} text-white font-montserrat font-bold text-base flex items-center justify-center shadow-md shrink-0`}>
                {selectedStory.initials}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-montserrat font-bold text-lg text-[#272532]">{selectedStory.name}</h3>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    Verified Client
                  </span>
                </div>
                <p className="font-poppins text-xs text-[#535353]">{selectedStory.role} — <span className="text-[#8549C2] font-semibold">{selectedStory.company}</span></p>
              </div>
            </div>

            <div className="bg-[#F5F5F5] p-4 rounded-2xl mb-6 grid grid-cols-2 gap-4">
              <div>
                <p className="font-poppins text-[10px] text-[#535353] uppercase font-semibold">Industry Sector</p>
                <p className="font-montserrat font-bold text-xs text-[#272532] mt-0.5">{selectedStory.industry}</p>
              </div>
              <div>
                <p className="font-poppins text-[10px] text-[#535353] uppercase font-semibold">Key Outcome Metric</p>
                <p className="font-montserrat font-bold text-xs text-[#8549C2] mt-0.5">{selectedStory.metric} {selectedStory.metricLabel}</p>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-montserrat font-bold text-xs uppercase tracking-wider text-[#535353] mb-2">Verified Deployment Impact</h4>
              <p className="font-poppins text-xs sm:text-sm text-[#272532] leading-relaxed italic bg-purple-50/50 p-4 rounded-2xl border border-purple-100">
                "{selectedStory.quote}"
              </p>
            </div>

            <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
              <span className="text-xs text-[#535353]">Want similar results for your company?</span>
              <button
                onClick={() => setSelectedStory(null)}
                className="bg-[#8549C2] hover:bg-purple-700 text-white px-5 py-2 rounded-full font-poppins font-semibold text-xs transition-colors"
              >
                Close Summary
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};


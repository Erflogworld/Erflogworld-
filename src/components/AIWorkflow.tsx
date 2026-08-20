import React, { useState, useEffect } from 'react';
import { 
  User, Bot, CheckCircle, Database, MessageSquare, PhoneCall, Repeat, 
  TrendingUp, Play, Pause, RefreshCw, Zap, ArrowRight, ShieldCheck, 
  Cpu, Layers, Sparkles, Check, Server, Terminal, Code2, Globe, Clock,
  ShoppingCart, HelpCircle, UserCheck, MessageCircle, AlertCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface AIWorkflowProps {
  onOpenStrategyModal?: (serviceName?: string) => void;
}

interface WorkflowStep {
  id: number;
  title: string;
  desc: string;
  icon: React.ElementType;
  latency: string;
  tool: string;
  inputPayload: string;
  outputResult: string;
  aiLogic: string;
  keyMetric: string;
}

interface WorkflowPreset {
  id: string;
  name: string;
  subtitle: string;
  badge: string;
  icon: React.ElementType;
  steps: WorkflowStep[];
}

const WORKFLOW_PRESETS: WorkflowPreset[] = [
  {
    id: "lead-gen",
    name: "Lead Generation & B2B Sales Engine",
    subtitle: "Capture, qualify, score, and book high-intent meetings 24/7 without human delay.",
    badge: "B2B & High-Ticket",
    icon: Zap,
    steps: [
      {
        id: 1,
        title: "Omnichannel Inquiry",
        desc: "Web forms, LinkedIn DM, WhatsApp, or incoming calls.",
        icon: User,
        latency: "0.05s",
        tool: "Webhook Listener / API Gateway",
        inputPayload: '{\n  "source": "Website Form",\n  "prospect": "Alex Vance",\n  "email": "alex@enterprise.com",\n  "companySize": "250-500"\n}',
        outputResult: "Standardized JSON Payload ingested",
        aiLogic: "Captures raw prospect data from web, social, or phone and normalizes fields into unified payload.",
        keyMetric: "Instant 0s Response Latency"
      },
      {
        id: 2,
        title: "Autonomous AI Agent",
        desc: "Instant conversational engagement & intent classification.",
        icon: Bot,
        latency: "0.35s",
        tool: "Gemini 1.5 Pro / LLM Agent",
        inputPayload: '{\n  "prompt": "Analyze buying intent for enterprise AI implementation",\n  "context": "Needs CRM integration & custom SLA"\n}',
        outputResult: '{\n  "intent": "High Commercial Intent",\n  "urgency": "Immediate (1-3 weeks)"\n}',
        aiLogic: "Evaluates buyer budget, timeline, authority, and need using customized system prompts.",
        keyMetric: "24/7 Zero Wait Time"
      },
      {
        id: 3,
        title: "Lead Qualification & Scoring",
        desc: "Automated BANT scoring & deal value estimation.",
        icon: CheckCircle,
        latency: "0.12s",
        tool: "Custom Python Logic & Rules Engine",
        inputPayload: '{\n  "companyRevenue": "$10M+",\n  "techStack": ["Salesforce", "AWS", "HubSpot"]\n}',
        outputResult: '{\n  "leadScore": 96,\n  "tier": "Tier 1 Enterprise",\n  "estContractValue": "$45,000"\n}',
        aiLogic: "Compares lead profile against historical converted customer models to assign numerical score.",
        keyMetric: "96% Scoring Accuracy"
      },
      {
        id: 4,
        title: "Bi-Directional CRM Sync",
        desc: "Instant update to HubSpot, Salesforce, or Zoho.",
        icon: Database,
        latency: "0.22s",
        tool: "HubSpot / Salesforce REST API",
        inputPayload: '{\n  "action": "upsertContact",\n  "owner": "Enterprise Sales Team",\n  "lifecycleStage": "Sales Qualified Lead"\n}',
        outputResult: "Record Created #CRM-88291 with full enrichment data",
        aiLogic: "Eliminates manual rep data entry, auto-logging deal stage and conversation sentiment.",
        keyMetric: "100% Data Accuracy"
      },
      {
        id: 5,
        title: "Automated WhatsApp & Calendar",
        desc: "Personalized video message & direct booking link.",
        icon: MessageSquare,
        latency: "0.45s",
        tool: "WhatsApp Business API + Calendly API",
        inputPayload: '{\n  "recipient": "+1 (555) 019-2831",\n  "message": "Hi Alex, here is your customized AI Audit Blueprint..."\n}',
        outputResult: "WhatsApp Message Delivered with Calendar Invite",
        aiLogic: "Sends a personalized follow-up with calendar slot suggestions based on executive availability.",
        keyMetric: "78% Calendar Booking Rate"
      },
      {
        id: 6,
        title: "Sales Team Hand-off",
        desc: "Real-time Slack / Teams notification with summary.",
        icon: PhoneCall,
        latency: "0.10s",
        tool: "Slack Bot / Microsoft Teams Webhook",
        inputPayload: '{\n  "channel": "#hot-deals",\n  "alert": "🔥 New Tier 1 Lead: Alex Vance (Score: 96/100)",\n  "summary": "Wants AI automation for 300 support agents"\n}',
        outputResult: "Executive Account Executive Assigned in < 60s",
        aiLogic: "Pushes AI-generated briefing doc to assigned AE so they enter the call fully prepared.",
        keyMetric: "< 1 Min Internal Routing"
      },
      {
        id: 7,
        title: "Smart Nurture & Follow-Up",
        desc: "Autonomous re-engagement if calendar is unbooked.",
        icon: Repeat,
        latency: "Scheduled",
        tool: "Autonomous Email & SMS Sequences",
        inputPayload: '{\n  "status": "Unbooked after 24h",\n  "action": "Trigger Case Study Email & Value Deck"\n}',
        outputResult: "Custom Case Study PDF Delivered via Email",
        aiLogic: "Detects drop-offs and sends relevant industry case studies tailored to the prospect's sector.",
        keyMetric: "+34% Recovered Meetings"
      },
      {
        id: 8,
        title: "Conversion & Revenue Growth",
        desc: "Closed deal signed, tracked, and attribution logged.",
        icon: TrendingUp,
        latency: "Real-time",
        tool: "Stripe / ERP / BI Analytics Dashboard",
        inputPayload: '{\n  "dealStatus": "Closed Won",\n  "revenue": "$45,000",\n  "paybackPeriod": "18 Days"\n}',
        outputResult: "Revenue Recognized & Attributed to AI Campaign",
        aiLogic: "Feeds deal outcome back into AI scoring model to continually optimize targeting accuracy.",
        keyMetric: "320% ROI Average"
      }
    ]
  },
  {
    id: "customer-support",
    name: "Autonomous Support & Ticket Deflection",
    subtitle: "Resolve 80%+ of customer inquiries instantly using semantic Vector KB and smart API tools.",
    badge: "Support & Operations",
    icon: HelpCircle,
    steps: [
      {
        id: 1,
        title: "Customer Ticket Ingress",
        desc: "Inbound Email, In-App Chat, or Support Portal.",
        icon: MessageCircle,
        latency: "0.02s",
        tool: "Zendesk / Freshdesk Webhook",
        inputPayload: '{\n  "ticketId": "TK-9021",\n  "user": "Sarah Lee",\n  "query": "How do I update my API key and webhook secret?"\n}',
        outputResult: "Inbound Ticket Parsed",
        aiLogic: "Classifies ticket topic, urgency rating, and sentiment score immediately upon receipt.",
        keyMetric: "0s Initial Queue Time"
      },
      {
        id: 2,
        title: "Semantic KB Search",
        desc: "Vector embeddings search technical documentation.",
        icon: Database,
        latency: "0.18s",
        tool: "Pinecone / Qdrant Vector DB",
        inputPayload: '{\n  "vectorQuery": "API key rotation webhook security",\n  "topK": 3\n}',
        outputResult: "Top 3 relevant documentation articles retrieved (Match: 98.4%)",
        aiLogic: "Queries vector database for exact procedural steps matching customer intent.",
        keyMetric: "98.4% Knowledge Match"
      },
      {
        id: 3,
        title: "AI Answer Generation",
        desc: "Synthesizes concise, step-by-step resolution.",
        icon: Bot,
        latency: "0.40s",
        tool: "Gemini 1.5 Flash + Grounded Search",
        inputPayload: '{\n  "kbContext": "Doc ID #402: API Security Settings",\n  "tone": "Helpful, Professional, Technical"\n}',
        outputResult: "Customized step-by-step reply generated with screenshots & code snippets",
        aiLogic: "Generates step-by-step instructions with verified code samples without hallucinations.",
        keyMetric: "82% Ticket Deflection"
      },
      {
        id: 4,
        title: "API Verification Check",
        desc: "Validates account status & subscription Tier.",
        icon: Server,
        latency: "0.10s",
        tool: "Backend Auth & Microservice API",
        inputPayload: '{\n  "account": "Sarah Lee",\n  "plan": "Enterprise Pro"\n}',
        outputResult: "Account Verified (SLA: 15 min response guaranteed)",
        aiLogic: "Checks live API database to ensure customer has permission for requested settings.",
        keyMetric: "100% Secure Auth"
      },
      {
        id: 5,
        title: "Instant Resolution Delivery",
        desc: "Sends solution directly to user in preferred channel.",
        icon: CheckCircle,
        latency: "0.05s",
        tool: "Intercom / Email API",
        inputPayload: '{\n  "channel": "In-App Chat",\n  "status": "Resolved",\n  "resolutionTime": "1.2s"\n}',
        outputResult: "Customer receives working solution in 1.2 seconds",
        aiLogic: "Delivers resolution formatted cleanly with interactive buttons and links.",
        keyMetric: "1.2s Resolution Time"
      },
      {
        id: 6,
        title: "CSAT & Feedback Prompt",
        desc: "Automated rating request & sentiment capture.",
        icon: Sparkles,
        latency: "5.00s",
        tool: "Micro-Survey Engine",
        inputPayload: '{\n  "prompt": "Did this answer resolve your question?",\n  "userResponse": "⭐⭐⭐⭐⭐ Excellent!"\n}',
        outputResult: "5/5 CSAT Score Recorded",
        aiLogic: "Captures instant feedback to validate accuracy of AI answer.",
        keyMetric: "4.9 / 5 Avg Rating"
      },
      {
        id: 7,
        title: "Human Escalation (If Needed)",
        desc: "Seamless hand-off with full AI conversation summary.",
        icon: UserCheck,
        latency: "0.05s",
        tool: "Tier 2 Agent Dispatch",
        inputPayload: '{\n  "escalated": false,\n  "reason": "Resolved autonomously"\n}',
        outputResult: "No Human Intervention Required",
        aiLogic: "If sentiment turns negative or edge case occurs, routes to senior engineer with full transcript.",
        keyMetric: "88% Cost Reduction"
      },
      {
        id: 8,
        title: "Knowledge Base Auto-Improvement",
        desc: "Learns from edge cases to train future responses.",
        icon: RefreshCw,
        latency: "Async",
        tool: "Continuous RLHF / Feedback Loop",
        inputPayload: '{\n  "action": "Index new resolved solution pattern"\n}',
        outputResult: "Vector Index Updated automatically",
        aiLogic: "Feeds successful resolutions back into knowledge index for perpetual accuracy growth.",
        keyMetric: "Continuous Learning"
      }
    ]
  },
  {
    id: "ecommerce-upsell",
    name: "E-Commerce & Omnichannel Revenue Engine",
    subtitle: "Recover abandoned carts, recommend cross-sells, and scale repeat purchase rates automatically.",
    badge: "E-Commerce & Retail",
    icon: ShoppingCart,
    steps: [
      {
        id: 1,
        title: "Cart Abandonment Trigger",
        desc: "User exits checkout with $180 cart item.",
        icon: ShoppingCart,
        latency: "0.01s",
        tool: "Shopify / WooCommerce Webhook",
        inputPayload: '{\n  "cartId": "CART-7712",\n  "value": "$180.00",\n  "items": ["Ergonomic Pro Chair"]\n}',
        outputResult: "Abandoned Cart Detected",
        aiLogic: "Monitors checkout drop-offs in real time to capture high-value abandoned orders.",
        keyMetric: "Instant Signal Capture"
      },
      {
        id: 2,
        title: "Customer Profile Lookup",
        desc: "Retrieves past purchases & preference vectors.",
        icon: User,
        latency: "0.08s",
        tool: "Klaviyo / Segment CDP",
        inputPayload: '{\n  "user": "Marcus Brody",\n  "ltv": "$1,240",\n  "preferredChannel": "WhatsApp"\n}',
        outputResult: "Profile Retrieved (VIP Member)",
        aiLogic: "Identifies lifetime customer value and preferred messaging channel.",
        keyMetric: "100% Identity Match"
      },
      {
        id: 3,
        title: "Personalized Offer Creation",
        desc: "Generates dynamic discount or bonus gift.",
        icon: Sparkles,
        latency: "0.15s",
        tool: "Dynamic Coupon Engine",
        inputPayload: '{\n  "discount": "15% Off or Free Next-Day Shipping",\n  "expires": "In 4 Hours"\n}',
        outputResult: "Unique Code #SAVE15-MARCUS generated",
        aiLogic: "Calculates optimal incentive needed to close order without destroying margin.",
        keyMetric: "Max Margin Retention"
      },
      {
        id: 4,
        title: "Omnichannel Alert",
        desc: "WhatsApp & SMS message sent with 1-click checkout.",
        icon: MessageSquare,
        latency: "0.30s",
        tool: "Twilio / WhatsApp Business API",
        inputPayload: '{\n  "recipient": "+1 (555) 392-1049",\n  "message": "Hey Marcus, your Ergonomic Pro Chair is waiting! Use 1-click checkout for 15% off."\n}',
        outputResult: "WhatsApp Delivered with Dynamic Link",
        aiLogic: "Delivers a rich media message with interactive quick-reply buttons.",
        keyMetric: "89% Open Rate"
      },
      {
        id: 5,
        title: "Interactive AI Q&A",
        desc: "Answers product dimensions or shipping questions.",
        icon: Bot,
        latency: "0.25s",
        tool: "Conversational Shopping Assistant",
        inputPayload: '{\n  "userQuestion": "Does this chair support lumbar adjustment?",\n  "aiReply": "Yes! It features 4D pneumatic lumbar support."\n}',
        outputResult: "Question Answered in WhatsApp thread",
        aiLogic: "Eliminates buyer hesitation by answering specific product specs instantly.",
        keyMetric: "Zero Checkout Friction"
      },
      {
        id: 6,
        title: "1-Click Apple / Google Pay",
        desc: "Pre-filled checkout link completes order instantly.",
        icon: Zap,
        latency: "0.10s",
        tool: "Stripe / Shopify Pay Link API",
        inputPayload: '{\n  "orderTotal": "$153.00",\n  "paymentMethod": "Apple Pay"\n}',
        outputResult: "Order Completed #ORD-9912",
        aiLogic: "Bypasses tedious login/address forms with instant biometric mobile checkout.",
        keyMetric: "3.4x Higher Conversion"
      },
      {
        id: 7,
        title: "AI Cross-Sell Recommendation",
        desc: "Suggests matching desk accessory 3 days later.",
        icon: Repeat,
        latency: "Scheduled",
        tool: "Recommendation Matrix Engine",
        inputPayload: '{\n  "purchased": "Ergonomic Pro Chair",\n  "recommended": "Memory Foam Footrest (+ $35)"\n}',
        outputResult: "Post-Purchase Upsell Accepted",
        aiLogic: "Analyzes complementary products to increase Average Order Value (AOV).",
        keyMetric: "+28% Higher AOV"
      },
      {
        id: 8,
        title: "Automated Logistics & Review",
        desc: "Tracks package & prompts for photo review.",
        icon: CheckCircle,
        latency: "Real-time",
        tool: "AfterShip API + Review Bot",
        inputPayload: '{\n  "tracking": "DELIVERED",\n  "reviewPrompt": "Rate your comfort 1-5 stars"\n}',
        outputResult: "5-Star Photo Review Published",
        aiLogic: "Builds ongoing brand loyalty and collects verified social proof automatically.",
        keyMetric: "+42% Repeat Orders"
      }
    ]
  }
];

export const AIWorkflow: React.FC<AIWorkflowProps> = ({ onOpenStrategyModal }) => {
  const [activePresetId, setActivePresetId] = useState<string>("lead-gen");
  const [activeStepId, setActiveStepId] = useState<number>(1);
  const [isSimulating, setIsSimulating] = useState<boolean>(true);

  const currentPreset = WORKFLOW_PRESETS.find(p => p.id === activePresetId) || WORKFLOW_PRESETS[0];
  const activeStep = currentPreset.steps.find(s => s.id === activeStepId) || currentPreset.steps[0];

  // Auto-play simulation loop
  useEffect(() => {
    if (!isSimulating) return;

    const interval = setInterval(() => {
      setActiveStepId((prev) => (prev >= currentPreset.steps.length ? 1 : prev + 1));
    }, 3200);

    return () => clearInterval(interval);
  }, [isSimulating, currentPreset]);

  // When changing preset, reset active step to 1
  const handleSelectPreset = (id: string) => {
    setActivePresetId(id);
    setActiveStepId(1);
  };

  return (
    <section className="py-12 md:py-20 bg-[#272532] text-white relative overflow-hidden">
      {/* Dynamic Background Glow & Grid Lines */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#8549C2] rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-600 rounded-full blur-[120px]"></div>
        <div className="w-full h-full bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8549C2]/20 border border-[#8549C2]/40 text-purple-300 font-montserrat font-bold text-xs tracking-wider uppercase mb-3 shadow-md">
            <Cpu className="w-3.5 h-3.5 text-[#8549C2]" />
            <span>Interactive Visual Architecture</span>
          </div>
          <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
            The ERFLOGWORLD <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-[#8549C2] to-purple-400">Autonomous AI Workflow</span>
          </h2>
          <p className="font-poppins text-gray-300 text-sm sm:text-base mt-3 leading-relaxed">
            Select a business workflow below to test how our battle-tested AI pipelines ingest data, reason autonomously, execute API calls, and deliver measurable revenue.
          </p>
        </div>

        {/* Workflow Preset Switcher Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {WORKFLOW_PRESETS.map((preset) => {
            const Icon = preset.icon;
            const isActive = preset.id === activePresetId;
            return (
              <button
                key={preset.id}
                onClick={() => handleSelectPreset(preset.id)}
                className={`px-5 py-3 rounded-2xl font-montserrat font-bold text-xs sm:text-sm flex items-center gap-2.5 transition-all duration-300 cursor-pointer border ${
                  isActive
                    ? 'bg-[#f26422] text-white border-orange-400/50 shadow-lg shadow-[#f26422]/40 scale-105'
                    : 'bg-[#1E1B2B]/90 text-gray-300 border-gray-700/80 hover:bg-[#2F2C3F] hover:text-white'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#f26422]'}`} />
                <span>{preset.name}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-mono uppercase ${
                  isActive ? 'bg-white/20 text-white' : 'bg-gray-800 text-orange-200'
                }`}>
                  {preset.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* Presets Subtitle & Simulation Controls */}
        <div className="bg-[#1E1B2B]/80 border border-purple-500/20 rounded-2xl p-4 sm:p-5 mb-8 flex flex-col md:flex-row items-center justify-between gap-4 backdrop-blur-md">
          <div className="flex items-center gap-3 text-center md:text-left">
            <div className="w-10 h-10 rounded-xl bg-[#8549C2]/20 border border-[#8549C2]/40 flex items-center justify-center text-[#8549C2] shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-montserrat font-bold text-sm sm:text-base text-white">
                {currentPreset.name}
              </h3>
              <p className="font-poppins text-xs text-gray-300">
                {currentPreset.subtitle}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsSimulating(!isSimulating)}
              className={`px-4 py-2 rounded-xl font-poppins font-bold text-xs flex items-center gap-2 transition-colors border ${
                isSimulating
                  ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 hover:bg-emerald-500/30'
                  : 'bg-purple-900/40 text-purple-200 border-purple-500/30 hover:bg-purple-900/60'
              }`}
            >
              {isSimulating ? (
                <>
                  <Pause className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Pause Auto Simulation</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 text-purple-300" />
                  <span>Resume Auto Simulation</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* PIPELINE CONNECTED NODES GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 mb-8 relative">
          {currentPreset.steps.map((step) => {
            const Icon = step.icon;
            const isCurrent = step.id === activeStepId;
            const isPassed = step.id < activeStepId;

            return (
              <div
                key={step.id}
                onClick={() => {
                  setIsSimulating(false);
                  setActiveStepId(step.id);
                }}
                className={`relative rounded-2xl p-3.5 border transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[140px] group ${
                  isCurrent
                    ? 'bg-gradient-to-b from-[#8549C2]/40 to-[#1E1B2B] border-[#8549C2] ring-2 ring-[#8549C2]/50 shadow-lg shadow-[#8549C2]/30 scale-102 z-20'
                    : isPassed
                    ? 'bg-[#1E1B2B]/90 border-purple-500/30 hover:border-purple-400 opacity-90'
                    : 'bg-[#181623]/80 border-gray-800 hover:border-gray-700 opacity-70'
                }`}
              >
                {/* Step Badge */}
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                    isCurrent
                      ? 'bg-[#8549C2] text-white shadow-xs'
                      : isPassed
                      ? 'bg-emerald-900/50 text-emerald-300'
                      : 'bg-gray-800 text-gray-400'
                  }`}>
                    0{step.id}
                  </span>
                  {isCurrent && (
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  )}
                </div>

                {/* Icon & Title */}
                <div className="my-1">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-2 transition-colors ${
                    isCurrent
                      ? 'bg-white text-[#8549C2]'
                      : 'bg-purple-900/30 text-purple-300 group-hover:bg-[#8549C2] group-hover:text-white'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className={`font-montserrat font-bold text-xs leading-tight ${
                    isCurrent ? 'text-white' : 'text-gray-300 group-hover:text-white'
                  }`}>
                    {step.title}
                  </h4>
                </div>

                {/* Micro Footer */}
                <div className="mt-2 pt-1.5 border-t border-white/10 flex items-center justify-between text-[9px] font-mono text-gray-400">
                  <span className="truncate">{step.latency}</span>
                  {isCurrent && <span className="text-emerald-400 font-bold">ACTIVE</span>}
                </div>
              </div>
            );
          })}
        </div>

        {/* LIVE EXECUTION CONSOLE / DEEP DIVE INSPECTOR */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep.id + activePresetId}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="bg-[#181623] rounded-3xl border border-purple-500/30 shadow-2xl p-6 sm:p-8 relative overflow-hidden"
          >
            {/* Top Bar Inspector Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-800">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#8549C2] text-white flex items-center justify-center shadow-lg shadow-[#8549C2]/30 shrink-0">
                  {React.createElement(activeStep.icon, { className: "w-6 h-6" })}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-purple-300 bg-[#8549C2]/20 border border-[#8549C2]/40 px-2.5 py-0.5 rounded-full">
                      STEP 0{activeStep.id} OF 08
                    </span>
                    <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {activeStep.latency}
                    </span>
                  </div>
                  <h3 className="font-montserrat font-extrabold text-xl sm:text-2xl text-white mt-1">
                    {activeStep.title}
                  </h3>
                </div>
              </div>

              {/* Connected Tool Badge */}
              <div className="bg-[#242132] px-4 py-2.5 rounded-2xl border border-purple-500/20 flex items-center gap-2.5 self-start sm:self-auto">
                <Code2 className="w-4 h-4 text-[#8549C2]" />
                <div className="text-left">
                  <span className="text-[10px] font-mono text-gray-400 block uppercase">Powered By</span>
                  <span className="text-xs font-montserrat font-bold text-purple-200">{activeStep.tool}</span>
                </div>
              </div>
            </div>

            {/* Inspector Grid: AI Reasoning Logic vs Code Payload */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-6">
              
              {/* Left Column: Functional Description & AI Reasoning */}
              <div className="lg:col-span-6 space-y-5">
                <div className="bg-[#211E2E] p-5 rounded-2xl border border-gray-800">
                  <span className="text-xs font-montserrat font-bold text-[#8549C2] uppercase tracking-wider block mb-1.5 flex items-center gap-1.5">
                    <Cpu className="w-4 h-4" />
                    Autonomous AI Reasoning Logic:
                  </span>
                  <p className="font-poppins text-sm text-gray-200 leading-relaxed">
                    {activeStep.aiLogic}
                  </p>
                </div>

                {/* Key Outcome Highlight Card */}
                <div className="bg-gradient-to-r from-emerald-950/40 via-[#1E1B2B] to-[#1E1B2B] p-5 rounded-2xl border border-emerald-500/30 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-montserrat font-semibold text-emerald-400 block uppercase">
                      Verified Benchmark Metric
                    </span>
                    <p className="font-montserrat font-extrabold text-lg text-white mt-0.5">
                      {activeStep.keyMetric}
                    </p>
                  </div>
                  <ShieldCheck className="w-8 h-8 text-emerald-400 shrink-0 opacity-80" />
                </div>

                {/* Quick Next Steps Indicator */}
                <div className="text-xs font-poppins text-gray-400 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-400" />
                  <span>Next Step in Flow: <strong>0{activeStep.id === 8 ? 1 : activeStep.id + 1} - {currentPreset.steps[activeStep.id === 8 ? 0 : activeStep.id].title}</strong></span>
                </div>
              </div>

              {/* Right Column: Simulated JSON Payload Console */}
              <div className="lg:col-span-6">
                <div className="bg-[#0F0D17] rounded-2xl border border-gray-800 overflow-hidden shadow-inner font-mono text-xs">
                  
                  {/* Terminal Header */}
                  <div className="bg-[#1A1726] px-4 py-2.5 border-b border-gray-800 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-500"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                      <span className="text-[10px] text-gray-400 ml-2">live_payload_console.json</span>
                    </div>
                    <span className="text-[10px] text-emerald-400 font-bold bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">
                      STATUS: 200 OK
                    </span>
                  </div>

                  {/* Code Body */}
                  <div className="p-4 space-y-3 overflow-x-auto max-h-56">
                    <div>
                      <span className="text-purple-400 font-bold">// Ingested Input Payload</span>
                      <pre className="text-gray-300 mt-1 whitespace-pre-wrap">{activeStep.inputPayload}</pre>
                    </div>
                    <div className="pt-2 border-t border-gray-800/80">
                      <span className="text-emerald-400 font-bold">// AI Output Result</span>
                      <p className="text-emerald-200 mt-1 font-semibold">{activeStep.outputResult}</p>
                    </div>
                  </div>

                </div>
              </div>

            </div>

          </motion.div>
        </AnimatePresence>

        {/* Global System Performance Summary Strip */}
        <div className="mt-12 bg-gradient-to-r from-[#1E1B2B] via-[#2F2C3F] to-[#1E1B2B] rounded-2xl p-6 border border-purple-500/20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="font-montserrat font-extrabold text-2xl text-purple-300">&lt; 850ms</p>
            <p className="font-poppins text-xs text-gray-300 mt-1">Average Response Speed</p>
          </div>
          <div>
            <p className="font-montserrat font-extrabold text-2xl text-emerald-400">99.98%</p>
            <p className="font-poppins text-xs text-gray-300 mt-1">System Uptime SLA</p>
          </div>
          <div>
            <p className="font-montserrat font-extrabold text-2xl text-yellow-300">100%</p>
            <p className="font-poppins text-xs text-gray-300 mt-1">Custom API & CRM Sync</p>
          </div>
          <div>
            <p className="font-montserrat font-extrabold text-2xl text-purple-200">Zero</p>
            <p className="font-poppins text-xs text-gray-300 mt-1">Manual Data Entry Required</p>
          </div>
        </div>

        {/* Bottom Call To Action */}
        <div className="mt-10 text-center">
          <button
            onClick={() => onOpenStrategyModal?.('AI Workflow Customization')}
            className="inline-flex items-center gap-2 bg-[#f26422] hover:bg-[#d85316] text-white px-8 py-4 rounded-full font-poppins font-bold text-sm sm:text-base transition-all duration-300 shadow-lg shadow-[#f26422]/40 hover:shadow-2xl hover:shadow-[#f26422]/60 hover:scale-105 group cursor-pointer"
          >
            <Sparkles className="w-5 h-5 text-orange-100" />
            <span>Design A Custom AI Workflow For My Business</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};

import { ServiceCategory, BenefitItem, IndustrySolution, CaseStudy, FAQItem } from '../types';

import serviceAiImg from '../assets/images/service_ai_automation_1786173444273.jpg';
import serviceWebImg from '../assets/images/service_web_development_1786173458969.jpg';
import serviceMarketingImg from '../assets/images/service_digital_marketing_1786173471998.jpg';
import serviceDesignImg from '../assets/images/service_creative_design_1786173486576.jpg';

export const QUICK_SERVICES = [
  {
    number: "01",
    title: "AI Automation",
    shortDesc: "Automate repetitive work, qualify leads, support customers and streamline operations.",
    icon: "Bot",
    link: "#main-services",
    imageUrl: serviceAiImg
  },
  {
    number: "02",
    title: "Website Development",
    shortDesc: "Build high-performing websites, applications, portals and digital products.",
    icon: "Code",
    link: "#main-services",
    imageUrl: serviceWebImg
  },
  {
    number: "03",
    title: "Digital Marketing",
    shortDesc: "Generate visibility, qualified traffic, leads and measurable business growth.",
    icon: "TrendingUp",
    link: "#main-services",
    imageUrl: serviceMarketingImg
  },
  {
    number: "04",
    title: "Creative Design",
    shortDesc: "Create premium UI/UX, branding, social creatives and high-converting visual experiences.",
    icon: "Palette",
    link: "#main-services",
    imageUrl: serviceDesignImg
  }
];

export const WHY_CHOOSE_US_BENEFITS: BenefitItem[] = [
  {
    id: "b1",
    title: "Business-First Approach",
    description: "We don't sell technology for technology's sake. Every AI system is architected around your specific operational friction points and revenue goals.",
    iconName: "Target"
  },
  {
    id: "b2",
    title: "Customized Solutions",
    description: "No generic templates or forced tools. We build tailored AI models, workflow integrations, and software designed for your exact business model.",
    iconName: "Sliders"
  },
  {
    id: "b3",
    title: "Transparent Collaboration",
    description: "Clear timelines, straightforward communication, and full visibility at every development stage so you remain in total control.",
    iconName: "Eye"
  },
  {
    id: "b4",
    title: "Scalable Technology",
    description: "Our enterprise-grade cloud architecture grows seamlessly as your transaction volume and team size expand.",
    iconName: "Maximize"
  },
  {
    id: "b5",
    title: "Measurable Outcomes",
    description: "We focus on trackable KPIs: hours saved, lead response speeds, operational cost reductions, and qualified conversion rates.",
    iconName: "BarChart3"
  },
  {
    id: "b6",
    title: "Long-Term Partnership",
    description: "We provide continuous optimization, proactive security updates, and feature upgrades to ensure your business stays ahead.",
    iconName: "ShieldCheck"
  }
];

export const MAIN_SERVICES: ServiceCategory[] = [
  {
    id: "ai-automation",
    number: "01",
    title: "AI Automation",
    shortDesc: "Transform manual customer interactions and repetitive operational tasks into autonomous, 24/7 intelligent systems.",
    iconName: "Cpu",
    imageUrl: serviceAiImg,
    items: [
      "AI Chatbots",
      "AI Agents",
      "AI Voice Calling Agents",
      "WhatsApp Automation",
      "Instagram Automation",
      "Workflow Automation",
      "CRM Automation",
      "Customer Support AI",
      "AI Receptionist",
      "AI Sales Assistant",
      "Lead Qualification AI"
    ],
    outcome: "Eliminate repetitive work and turn conversations into qualified business opportunities."
  },
  {
    id: "web-development",
    number: "02",
    title: "Website Development",
    shortDesc: "High-speed, scalable web platforms and digital products built with modern frameworks and seamless AI integration.",
    iconName: "Globe",
    imageUrl: serviceWebImg,
    items: [
      "Business Websites",
      "Landing Pages",
      "E-commerce Websites",
      "Web Applications",
      "SaaS Platforms",
      "Custom Portals",
      "SaaS Dashboards"
    ],
    outcome: "Build high-performing digital experiences that convert visitors into customers."
  },
  {
    id: "digital-marketing",
    number: "03",
    title: "Digital Marketing",
    shortDesc: "Data-driven multi-channel marketing campaigns engineered to attract high-intent traffic and nurture leads.",
    iconName: "Zap",
    imageUrl: serviceMarketingImg,
    items: [
      "SEO",
      "Google Ads",
      "Meta Ads",
      "Social Media Management",
      "Content Marketing",
      "Email Marketing",
      "Performance Marketing"
    ],
    outcome: "Increase visibility, generate qualified traffic and create measurable growth."
  },
  {
    id: "creative-design",
    number: "04",
    title: "Creative Design",
    shortDesc: "World-class visual systems, user experience designs, and brand collateral that captivate and convert.",
    iconName: "Layers",
    imageUrl: serviceDesignImg,
    items: [
      "UI/UX Design",
      "Graphic Design",
      "Product Design",
      "Branding",
      "Social Media Creatives",
      "Ad Creatives",
      "Video Editing"
    ],
    outcome: "Create memorable digital experiences that make your brand stand out."
  }
];

export const INDUSTRY_SOLUTIONS: IndustrySolution[] = [
  {
    id: "real-estate",
    name: "Real Estate",
    iconName: "Building2",
    problem: "High lead bounce rates due to slow response times after working hours; delayed property inquiry follow-ups.",
    aiSolution: "24/7 AI WhatsApp & Web Receptionist that instantly qualifies buyer budgets, schedules site visits, and updates CRM.",
    benefit: "Capture 100% of inbound leads instantly and increase qualified viewing appointments by up to 3x."
  },
  {
    id: "healthcare",
    name: "Healthcare",
    iconName: "Activity",
    problem: "Reception staff overloaded with repetitive phone booking calls, patient appointment reminders, and FAQ inquiries.",
    aiSolution: "AI Voice Calling Agent & automated WhatsApp confirmation flows integrated directly with appointment calendars.",
    benefit: "Reduce no-show rates by 45% while freeing clinic staff to focus on patient care."
  },
  {
    id: "education",
    name: "Education",
    iconName: "GraduationCap",
    problem: "Counselors overwhelmed during admission seasons; slow response to prospective student inquiries across channels.",
    aiSolution: "Multilingual AI Admission Assistant that answers course details, evaluates eligibility, and guides registration.",
    benefit: "Improve student inquiry-to-enrollment speed and reduce administrative counseling workload."
  },
  {
    id: "e-commerce",
    name: "E-commerce",
    iconName: "ShoppingBag",
    problem: "Cart abandonment, repetitive order status questions, and missed cross-selling opportunities.",
    aiSolution: "Automated WhatsApp cart recovery triggers, instant order tracking bot, and AI product recommendation agent.",
    benefit: "Recover abandoned sales automatically and boost customer lifetime value."
  }
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discover",
    desc: "We analyze your current operations, identify repetitive tasks, bottleneck friction, and map high-ROI automation opportunities."
  },
  {
    step: "02",
    title: "Strategize",
    desc: "We design an architecture blueprint tailored to your tech stack, defining exact workflows, AI models, and measurable KPIs."
  },
  {
    step: "03",
    title: "Build",
    desc: "Our engineers build custom AI agents, web platforms, and automated triggers with robust security and data validation."
  },
  {
    step: "04",
    title: "Launch",
    desc: "We deploy the solution smoothly, conduct rigorous end-to-end testing, and train your team for seamless adoption."
  },
  {
    step: "05",
    title: "Scale",
    desc: "We monitor live metrics, continuously refine prompt performance, and expand automation across additional departments."
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "cs-1",
    title: "Automated Lead Intake & CRM Pipeline for Regional Consultancy",
    industry: "Professional Services",
    challenge: "Consultants were losing leads due to 6+ hour delays in responding to web and social inquiries.",
    solution: "Deployed an AI WhatsApp Qualification Agent that engages leads in 8 seconds, scores budget & urgency, and books calendar meetings automatically.",
    technology: ["AI Voice & Chat Agents", "WhatsApp Business API", "HubSpot CRM Sync", "Node.js Automation", "Gemini 1.5 Flash", "Make.com Webhooks"],
    implementation: "Designed intake logic in 2 weeks; trained AI on company services & objection handling.",
    result: "Instant lead engagement rate increased to 99%; qualified meeting bookings grew by 320%.",
    metrics: [
      { label: "Response Time", value: "8s", change: "-99.8%", trend: "up" },
      { label: "Lead Qualification", value: "100%", change: "Automated", trend: "up" },
      { label: "Booked Meetings", value: "+320%", change: "Monthly", trend: "up" },
      { label: "Consultant Hours Saved", value: "35h", change: "/week", trend: "up" }
    ],
    steps: [
      {
        phase: "Phase 1: Discovery & Audit",
        title: "Inbound Pipeline Analysis",
        duration: "Week 1",
        description: "Mapped multi-channel inquiry touchpoints across Web forms, WhatsApp, and LinkedIn ads to identify high-dropoff stages."
      },
      {
        phase: "Phase 2: AI Agent Training",
        title: "Prompt Design & Knowledge Sync",
        duration: "Week 2",
        description: "Engineered strict guardrail prompts with company service catalogs, pricing tiers, and calendar scheduling logic."
      },
      {
        phase: "Phase 3: Integration & Testing",
        title: "HubSpot & WhatsApp API Wiring",
        duration: "Week 3",
        description: "Configured bi-directional webhooks to sync qualified lead scores, contact tags, and meeting links directly to HubSpot."
      },
      {
        phase: "Phase 4: Live Rollout",
        title: "Autonomous Deployment & Monitoring",
        duration: "Week 4",
        description: "Launched automated 24/7 engagement with real-time human escalation triggers for high-value priority accounts."
      }
    ],
    clientQuote: {
      text: "Our consultants no longer waste hours chasing unvetted inquiries. The AI books qualified appointments on our calendar before competitors even respond.",
      author: "Marcus Vance",
      role: "Managing Director, Apex Advisory"
    },
    keyTakeaways: [
      "Sub-10-second response times double initial inquiry-to-meeting conversion rates.",
      "Automated budget scoring eliminates tire-kicker calls for senior staff.",
      "Seamless CRM syncing provides instant visibility into pipeline health."
    ]
  },
  {
    id: "cs-2",
    title: "Omnichannel Support & Order Portal Transformation",
    industry: "E-Commerce & Retail",
    challenge: "Support team was overwhelmed with 500+ daily repetitive inquiries about shipping, returns, and inventory.",
    solution: "Built a custom Web App portal paired with an AI Support Assistant connected directly to warehouse ERP.",
    technology: ["React / Next.js", "AI Agent API", "Shopify ERP API", "Tailwind CSS", "Pinecone Vector DB", "Zendesk Webhooks"],
    implementation: "Unified customer lookup into a single dashboard and automated 80% of routine FAQ responses.",
    result: "Support resolution time dropped from 4 hours to 30 seconds with 94% CSAT rating.",
    metrics: [
      { label: "Avg Resolution Time", value: "30s", change: "From 4 hours", trend: "up" },
      { label: "Ticket Deflection", value: "82%", change: "Self-Service", trend: "up" },
      { label: "Customer Satisfaction", value: "94%", change: "+28% CSAT", trend: "up" },
      { label: "Support Overhead", value: "-60%", change: "Cost Reduction", trend: "up" }
    ],
    steps: [
      {
        phase: "Phase 1: Knowledge Indexing",
        title: "Vector Database Setup",
        duration: "Week 1",
        description: "Indexed 1,200+ help articles, return policies, and warehouse dispatch FAQs into a semantic retrieval vector DB."
      },
      {
        phase: "Phase 2: ERP API Connector",
        title: "Shopify & Fulfillment Sync",
        duration: "Week 2",
        description: "Built secure API webhooks to fetch live tracking codes, order statuses, and return labels on demand."
      },
      {
        phase: "Phase 3: Custom Self-Service Portal",
        title: "Frontend & Chat Widget",
        duration: "Week 3",
        description: "Crafted an ultra-fast React self-service widget with instant order verification and interactive status tracking."
      },
      {
        phase: "Phase 4: Optimization & Escalation",
        title: "Feedback Loop & Hand-off",
        duration: "Week 4",
        description: "Implemented sentiment detection to seamlessly transfer complex refund cases directly to human support agents."
      }
    ],
    clientQuote: {
      text: "During peak holiday sales, the AI handled over 15,000 queries without missing a beat. Our team was able to focus strictly on complex VIP client issues.",
      author: "Elena Rostova",
      role: "Head of Customer Experience, Velox Brands"
    },
    keyTakeaways: [
      "Connecting AI agents to live ERP data enables instant, actionable resolution rather than generic canned replies.",
      "Self-service tracking portals reduce support ticket volume by over 80%.",
      "Automated order lookups operate 24/7 across global time zones effortlessly."
    ]
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "What does ERFLOGWORLD do?",
    answer: "ERFLOGWORLD is an AI Transformation & Digital Solutions company. We help businesses eliminate repetitive work, automate operations, generate more qualified leads, and accelerate growth through AI automation, custom software, high-performing websites, and digital marketing."
  },
  {
    question: "How can AI automation help my business?",
    answer: "AI automation handles repetitive operational tasks—such as qualifying incoming leads, answering customer inquiries 24/7, updating CRMs, scheduling appointments, and managing follow-ups—allowing your team to focus on closing deals and high-value strategic growth."
  },
  {
    question: "Can you automate WhatsApp and lead follow-ups?",
    answer: "Yes! We specialize in official WhatsApp Business API automation, Instagram DMs, email workflows, and instant SMS follow-ups. Our AI agents can engage prospects within seconds of form submission."
  },
  {
    question: "Can you integrate AI with our CRM?",
    answer: "Absolutely. We seamlessly connect AI automation with major CRMs including HubSpot, Salesforce, Zoho, Pipedrive, GoHighLevel, as well as custom internal databases."
  },
  {
    question: "Do you build custom AI solutions?",
    answer: "Yes, every solution we deliver is customized around your specific business processes, industry requirements, brand voice, and existing software stack."
  },
  {
    question: "How long does implementation take?",
    answer: "Simple AI automation projects and high-converting landing pages can launch in as little as 1 to 2 weeks. Complex custom enterprise software or multi-department workflows typically take 3 to 6 weeks."
  },
  {
    question: "Can you work with startups and SMEs?",
    answer: "Yes, we work with growth-oriented startups, small-to-medium businesses (SMEs), and enterprise clients looking to streamline operations and gain a competitive technology edge."
  },
  {
    question: "How do we get started?",
    answer: "Getting started is easy! Book a Free Strategy Call with our AI specialists using any of the booking buttons on our site. We'll evaluate your current processes and present a tailored AI transformation roadmap."
  }
];

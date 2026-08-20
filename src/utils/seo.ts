// Helper functions to dynamically update document title, meta tags, and Schema.org JSON-LD

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  schemaLd: Record<string, unknown> | Array<Record<string, unknown>>;
}

export const SECTION_SEO_MAP: Record<string, SEOConfig> = {
  hero: {
    title: "ERFLOGWORLD | AI Transformation & Digital Solutions",
    description: "ERFLOGWORLD helps businesses eliminate repetitive work, automate operations, generate qualified leads, and scale faster through AI-powered automation.",
    keywords: "AI automation company, AI agents, business process automation, ERFLOGWORLD",
    schemaLd: {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "ERFLOGWORLD",
      "url": "https://erflogworld.com",
      "description": "Enterprise-grade AI automation, custom web development, performance digital marketing, and UI/UX design agency.",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "US"
      },
      "priceRange": "$$$",
      "knowsAbout": [
        "Artificial Intelligence",
        "AI Automation",
        "Custom Software Development",
        "Lead Qualification Agents",
        "Digital Marketing"
      ]
    }
  },
  "main-services": {
    title: "AI Automation & Custom Software Development Services | ERFLOGWORLD",
    description: "Explore ERFLOGWORLD's 4 core capability pillars: Autonomous AI Agents & Chatbots, Custom Web Engineering, Performance Marketing, and UI/UX Design.",
    keywords: "AI agent development, custom web app, SEO services, UI/UX agency",
    schemaLd: {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "AI Automation & Software Development",
      "provider": {
        "@type": "Organization",
        "name": "ERFLOGWORLD"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "ERFLOGWORLD Digital Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AI Automation & Autonomous Agents",
              "description": "Transform manual customer interactions and repetitive tasks into 24/7 intelligent AI workflows."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Custom Website & Portal Engineering",
              "description": "High-speed, scalable web platforms and digital products built with React, Next.js, and API integrations."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Data-Driven Digital Marketing",
              "description": "Multi-channel advertising, SEO, and lead acquisition campaigns engineered for measurable ROI."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Creative UI/UX & Brand Design",
              "description": "World-class visual systems, user interface design, and high-converting marketing collateral."
            }
          }
        ]
      }
    }
  },
  "roi-calculator": {
    title: "Interactive AI ROI & Operational Savings Calculator | ERFLOGWORLD",
    description: "Calculate your estimated hours saved, annual cost reduction, and projected return on investment from implementing AI automation.",
    keywords: "AI ROI calculator, automation savings estimator, operational efficiency calculator",
    schemaLd: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "ERFLOGWORLD AI ROI Calculator",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "description": "Interactive web tool to calculate cost savings and hours reclaimed by deploying enterprise AI agents."
    }
  },
  "ai-readiness": {
    title: "AI Readiness Assessment & Implementation Audit | ERFLOGWORLD",
    description: "Take our 2-minute interactive assessment to evaluate your business AI readiness score and receive a tailored implementation roadmap.",
    keywords: "AI readiness assessment, AI audit, AI implementation roadmap",
    schemaLd: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "AI Readiness Assessment",
      "provider": {
        "@type": "Organization",
        "name": "ERFLOGWORLD"
      },
      "description": "Strategic evaluation tool for analyzing organizational data maturity and automation opportunities."
    }
  },
  "industry-solutions": {
    title: "Tailored AI Workflows for E-Commerce, Real Estate & Healthcare | ERFLOGWORLD",
    description: "Discover industry-specific AI automation solutions engineered for E-Commerce cart recovery, Real Estate lead qualification, and Healthcare scheduling.",
    keywords: "E-commerce AI automation, Real estate AI lead qualification, Healthcare AI booking",
    schemaLd: {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Industry-Specific AI Solutions",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "E-Commerce AI Recovery & Tracking"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Real Estate 24/7 AI Lead Qualification"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Healthcare Automated Appointment Booking"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Professional Services Lead Qualification"
        }
      ]
    }
  },
  "case-studies": {
    title: "Real-World AI Case Studies & Proven Blueprints | ERFLOGWORLD",
    description: "In-depth case studies showcasing +320% meeting growth, 8-second lead response time, and 82% support ticket deflection using ERFLOGWORLD AI systems.",
    keywords: "AI case studies, AI automation results, WhatsApp AI chatbot ROI",
    schemaLd: {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "ERFLOGWORLD AI Case Studies",
      "itemListElement": [
        {
          "@type": "Article",
          "headline": "Sub-10-Second Inbound Lead Engagement for Professional Services",
          "description": "How Apex Advisory achieved 320% more booked meetings using a 24/7 AI WhatsApp Qualification Agent."
        },
        {
          "@type": "Article",
          "headline": "Automated Customer Support & Order Verification Portal",
          "description": "How Velox Brands reduced average support resolution time from 4 hours to 30 seconds."
        }
      ]
    }
  },
  faq: {
    title: "Frequently Asked Questions About AI Automation | ERFLOGWORLD",
    description: "Answers to key questions regarding AI implementation timelines, security protocols, CRM integration, and ongoing agent training.",
    keywords: "AI automation FAQ, AI agency security, AI implementation timeline",
    schemaLd: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How quickly can an AI solution be deployed?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most standard AI agents and automation workflows are built, tested, and deployed within 2 to 4 weeks."
          }
        },
        {
          "@type": "Question",
          "name": "Will the AI integrate with our existing software and CRM?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we build custom API webhooks and native connectors for HubSpot, Salesforce, Shopify, Zendesk, WhatsApp, and custom ERPs."
          }
        },
        {
          "@type": "Question",
          "name": "How is proprietary company data kept secure?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We enforce strict enterprise data encryption standards, private vector indexes, and zero-data-retention AI guardrails."
          }
        }
      ]
    }
  },
  contact: {
    title: "Book Your 1-on-1 AI Strategy Call & Audit | ERFLOGWORLD",
    description: "Schedule a confidential 30-minute AI strategy call with ERFLOGWORLD engineers to map out your custom automation roadmap.",
    keywords: "book AI strategy call, AI consultation, ERFLOGWORLD contact",
    schemaLd: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Book AI Strategy Call",
      "description": "Direct calendar booking for a 1-on-1 AI implementation audit and architecture review."
    }
  }
};

// Aliases
SECTION_SEO_MAP["home"] = SECTION_SEO_MAP["hero"];
SECTION_SEO_MAP["services"] = SECTION_SEO_MAP["main-services"];

/**
 * Updates document meta tags and injects dynamic Schema.org JSON-LD
 */
export function updateSEOMetadata(sectionId: string): void {
  const config = SECTION_SEO_MAP[sectionId] || SECTION_SEO_MAP.hero;

  // 1. Update Title
  if (config.title && document.title !== config.title) {
    document.title = config.title;
  }

  // 2. Helper to set meta tag
  const setMetaTag = (attrName: string, attrVal: string, content: string) => {
    let element = document.querySelector(`meta[${attrName}="${attrVal}"]`);
    if (!element) {
      element = document.createElement("meta");
      element.setAttribute(attrName, attrVal);
      document.head.appendChild(element);
    }
    element.setAttribute("content", content);
  };

  // 3. Set standard meta tags
  if (config.description) {
    setMetaTag("name", "description", config.description);
    setMetaTag("property", "og:description", config.description);
  }

  if (config.title) {
    setMetaTag("property", "og:title", config.title);
  }

  if (config.keywords) {
    setMetaTag("name", "keywords", config.keywords);
  }

  // 4. Update Schema.org JSON-LD script
  let ldJsonScript = document.getElementById("dynamic-seo-schema-ld") as HTMLScriptElement | null;
  if (!ldJsonScript) {
    ldJsonScript = document.createElement("script");
    ldJsonScript.id = "dynamic-seo-schema-ld";
    ldJsonScript.type = "application/ld+json";
    document.head.appendChild(ldJsonScript);
  }

  ldJsonScript.textContent = JSON.stringify(config.schemaLd, null, 2);
}

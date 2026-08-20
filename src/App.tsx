import React, { useState, Suspense, lazy } from 'react';
import { motion } from 'motion/react';
import { Header } from './components/Header';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { Hero } from './components/Hero';
import { SectionTransition } from './components/SectionTransition';
import { useDynamicSEO } from './hooks/useDynamicSEO';

// Lazy-loaded components below the fold for optimal initial JS bundle size & fast LCP
const TrustStrip = lazy(() => import('./components/TrustStrip').then(m => ({ default: m.TrustStrip })));
const ServiceQuickCards = lazy(() => import('./components/ServiceQuickCards').then(m => ({ default: m.ServiceQuickCards })));
const WhyChooseUs = lazy(() => import('./components/WhyChooseUs').then(m => ({ default: m.WhyChooseUs })));
const MainServices = lazy(() => import('./components/MainServices').then(m => ({ default: m.MainServices })));
const AIWorkflow = lazy(() => import('./components/AIWorkflow').then(m => ({ default: m.AIWorkflow })));
const ROICalculator = lazy(() => import('./components/ROICalculator').then(m => ({ default: m.ROICalculator })));
const IndustrySolutions = lazy(() => import('./components/IndustrySolutions').then(m => ({ default: m.IndustrySolutions })));
const ProcessTimeline = lazy(() => import('./components/ProcessTimeline').then(m => ({ default: m.ProcessTimeline })));
const Testimonials = lazy(() => import('./components/Testimonials').then(m => ({ default: m.Testimonials })));
const CaseStudies = lazy(() => import('./components/CaseStudies').then(m => ({ default: m.CaseStudies })));
const FAQ = lazy(() => import('./components/FAQ').then(m => ({ default: m.FAQ })));
const FinalCTA = lazy(() => import('./components/FinalCTA').then(m => ({ default: m.FinalCTA })));
const ContactFormSection = lazy(() => import('./components/ContactFormSection').then(m => ({ default: m.ContactFormSection })));
const Footer = lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })));
const StrategyCallModal = lazy(() => import('./components/StrategyCallModal').then(m => ({ default: m.StrategyCallModal })));
const FloatingWhatsApp = lazy(() => import('./components/FloatingWhatsApp').then(m => ({ default: m.FloatingWhatsApp })));
const SEOHealthChecker = lazy(() => import('./components/SEOHealthChecker').then(m => ({ default: m.SEOHealthChecker })));

const SEO_SECTIONS = [
  'home',
  'services',
  'roi-calculator',
  'industry-solutions',
  'case-studies',
  'faq',
  'contact'
];

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalService, setModalService] = useState<string | undefined>(undefined);

  // Dynamically update document title, OpenGraph tags, and Schema.org JSON-LD as user scrolls
  useDynamicSEO(SEO_SECTIONS);

  const handleOpenModal = (serviceName?: string) => {
    setModalService(serviceName);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-[#535353] font-poppins selection:bg-[#8549C2] selection:text-white overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Navigation Header */}
      <Header onOpenStrategyModal={() => handleOpenModal()} />

      <motion.main
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        {/* 1. Hero Section - Rendered immediately for high-speed LCP */}
        <SectionTransition>
          <Hero onOpenStrategyModal={() => handleOpenModal()} />
        </SectionTransition>

        {/* Below-the-fold components wrapped in Suspense */}
        <Suspense fallback={<div className="py-12 min-h-[100px]" />}>
          {/* 2. Trust / Value Strip */}
          <SectionTransition delay={0.1}>
            <TrustStrip />
          </SectionTransition>

          {/* 3. Core Services Quick Cards */}
          <SectionTransition>
            <ServiceQuickCards />
          </SectionTransition>

          {/* 4. Why Choose Us */}
          <SectionTransition>
            <WhyChooseUs onOpenStrategyModal={() => handleOpenModal()} />
          </SectionTransition>

          {/* 5. Main Services */}
          <SectionTransition>
            <MainServices onOpenStrategyModal={(serviceName) => handleOpenModal(serviceName)} />
          </SectionTransition>

          {/* 7. AI Automation Workflow */}
          <SectionTransition>
            <AIWorkflow onOpenStrategyModal={(serviceName) => handleOpenModal(serviceName)} />
          </SectionTransition>

          {/* 8. Interactive ROI Calculator */}
          <SectionTransition>
            <ROICalculator onOpenStrategyModal={() => handleOpenModal()} />
          </SectionTransition>

          {/* 9. Industry Solutions */}
          <SectionTransition>
            <IndustrySolutions onOpenStrategyModal={(industry) => handleOpenModal(industry)} />
          </SectionTransition>

          {/* 11. Process Timeline */}
          <SectionTransition>
            <ProcessTimeline />
          </SectionTransition>

          {/* 12. Testimonials */}
          <SectionTransition>
            <Testimonials />
          </SectionTransition>

          {/* 13. Case Studies */}
          <SectionTransition>
            <CaseStudies onOpenStrategyModal={() => handleOpenModal()} />
          </SectionTransition>

          {/* 14. FAQ Accordion */}
          <SectionTransition>
            <FAQ />
          </SectionTransition>

          {/* 15. Final CTA */}
          <SectionTransition>
            <FinalCTA onOpenStrategyModal={() => handleOpenModal()} />
          </SectionTransition>

          {/* 16. Contact & Booking Form */}
          <SectionTransition>
            <ContactFormSection
              prefilledService={modalService}
            />
          </SectionTransition>

          {/* Footer */}
          <SectionTransition>
            <Footer />
          </SectionTransition>

          {/* Floating Action Modal & WhatsApp Button */}
          <StrategyCallModal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            initialService={modalService}
          />
          
          <FloatingWhatsApp />
          <SEOHealthChecker />
        </Suspense>
      </motion.main>
    </div>
  );
}

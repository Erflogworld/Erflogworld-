import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Header } from './components/Header';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { Hero } from './components/Hero';
import { SectionTransition } from './components/SectionTransition';
import { useDynamicSEO } from './hooks/useDynamicSEO';
import { TrustStrip } from './components/TrustStrip';
import { ServiceQuickCards } from './components/ServiceQuickCards';
import { WhyChooseUs } from './components/WhyChooseUs';
import { MainServices } from './components/MainServices';
import { AIWorkflow } from './components/AIWorkflow';
import { ROICalculator } from './components/ROICalculator';
import { IndustrySolutions } from './components/IndustrySolutions';
import { ProcessTimeline } from './components/ProcessTimeline';
import { Testimonials } from './components/Testimonials';
import { CaseStudies } from './components/CaseStudies';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { ContactFormSection } from './components/ContactFormSection';
import { Footer } from './components/Footer';
import { StrategyCallModal } from './components/StrategyCallModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { SEOHealthChecker } from './components/SEOHealthChecker';

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
        {/* 1. Hero Section */}
        <SectionTransition>
          <Hero onOpenStrategyModal={() => handleOpenModal()} />
        </SectionTransition>

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

        {/* 6. AI Automation Workflow */}
        <SectionTransition>
          <AIWorkflow onOpenStrategyModal={(serviceName) => handleOpenModal(serviceName)} />
        </SectionTransition>

        {/* 7. Interactive ROI Calculator */}
        <SectionTransition>
          <ROICalculator onOpenStrategyModal={() => handleOpenModal()} />
        </SectionTransition>

        {/* 8. Industry Solutions */}
        <SectionTransition>
          <IndustrySolutions onOpenStrategyModal={(industry) => handleOpenModal(industry)} />
        </SectionTransition>

        {/* 9. Process Timeline */}
        <SectionTransition>
          <ProcessTimeline />
        </SectionTransition>

        {/* 10. Testimonials */}
        <SectionTransition>
          <Testimonials />
        </SectionTransition>

        {/* 11. Case Studies */}
        <SectionTransition>
          <CaseStudies onOpenStrategyModal={() => handleOpenModal()} />
        </SectionTransition>

        {/* 12. FAQ Accordion */}
        <SectionTransition>
          <FAQ />
        </SectionTransition>

        {/* 13. Final CTA */}
        <SectionTransition>
          <FinalCTA onOpenStrategyModal={() => handleOpenModal()} />
        </SectionTransition>

        {/* 14. Contact & Booking Form */}
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
      </motion.main>
    </div>
  );
}

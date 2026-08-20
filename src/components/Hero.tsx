import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight } from 'lucide-react';
import heroImage from '../assets/images/hero_ai_transformation_1787049587942.jpg';
import { trackEvent } from '../utils/analytics';

interface HeroProps {
  onOpenStrategyModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenStrategyModal }) => {
  return (
    <section
      id="home"
      className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-gradient-to-b from-[#001535] via-[#001d47] to-[#001838] text-white transition-colors duration-500"
    >
      {/* Background Animated Recording Glows & Mesh Grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.32, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-[#f26422] rounded-full blur-[140px]"
        />

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.18, 0.28, 0.18],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 -left-40 w-[500px] h-[500px] bg-[#8549C2] rounded-full blur-[150px]"
        />

        {/* Cyber Grid Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#8549C2_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.08]"></div>

        {/* Scanning Light Beam Animation */}
        <motion.div
          animate={{ y: ['-100%', '200%'] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-x-0 h-32 bg-gradient-to-b from-transparent via-[#f26422]/10 to-transparent pointer-events-none"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Headline, Copy & CTAs */}
          <div className="lg:col-span-6 flex flex-col items-start text-left space-y-6">
            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="font-montserrat font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[3.35rem] leading-[1.12] tracking-tight text-white"
            >
              Transform Your Business Through{' '}
              <span className="text-[#f26422]">
                Intelligent AI
              </span>{' '}
              Automation.
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="font-poppins text-base sm:text-lg leading-relaxed max-w-xl text-gray-200"
            >
              ERFLOGWORLD helps businesses eliminate repetitive work, automate operations, generate more qualified leads, and accelerate growth through AI-powered automation, intelligent software, and digital transformation.
            </motion.p>

            {/* CTA Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-3 sm:gap-4 w-full sm:w-auto"
            >
              {/* Primary CTA */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => {
                  trackEvent('click_strategy_call', { source: 'hero' });
                  onOpenStrategyModal();
                }}
                className="w-full sm:w-auto bg-[#f26422] hover:bg-[#d85316] text-white px-7 py-3.5 rounded-full font-poppins font-semibold text-sm sm:text-base transition-all duration-300 shadow-lg shadow-[#f26422]/30 hover:shadow-2xl hover:shadow-[#f26422]/45 flex items-center justify-center gap-2 group cursor-pointer whitespace-nowrap"
              >
                <Sparkles className="w-4 h-4 text-orange-100 shrink-0" />
                <span>Book Free Strategy Call</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
              </motion.button>

              {/* Secondary CTA */}
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#services"
                className="w-full sm:w-auto border-2 border-white/85 text-white hover:bg-white hover:text-[#001d47] px-7 py-3 rounded-full font-poppins font-semibold text-sm sm:text-base transition-all duration-300 flex items-center justify-center gap-2 text-center whitespace-nowrap cursor-pointer"
              >
                Explore Solutions
              </motion.a>
            </motion.div>
          </div>

          {/* Right Column: Hero Visual Artwork */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-6 relative w-full flex items-center justify-center"
          >
            {/* Outer Ambient Glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-[#f26422]/35 via-[#8549c2]/30 to-[#001d47]/50 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition duration-700"></div>

            {/* Main Visual Container */}
            <div className="relative w-full rounded-2xl overflow-hidden border border-white/20 bg-[#001538]/60 backdrop-blur-md shadow-2xl shadow-black/60 group">
              <img
                src={heroImage}
                alt="ERFLOGWORLD AI Enterprise Automation Hub"
                className="w-full h-auto min-h-[320px] sm:min-h-[380px] lg:min-h-[440px] max-h-[560px] object-cover object-center rounded-2xl transform group-hover:scale-[1.02] transition-transform duration-700"
                referrerPolicy="no-referrer"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


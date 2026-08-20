import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import { ErflogworldLogo } from './ErflogworldLogo';
import { trackEvent } from '../utils/analytics';

interface HeaderProps {
  onOpenStrategyModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenStrategyModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Why Choose Us', href: '#why-choose-us' },
    { name: 'Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 py-3.5'
          : 'bg-white/60 backdrop-blur-sm py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#home" className="flex items-center gap-2 group transition-transform duration-300 hover:scale-105">
            <ErflogworldLogo className="h-7 sm:h-8 w-auto" isDarkBackground={false} />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-poppins text-sm font-bold text-[#001540] hover:text-[#f26422] transition-colors relative group py-1 tracking-normal"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#001540] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => {
                trackEvent('click_strategy_call', { source: 'header_desktop' });
                onOpenStrategyModal();
              }}
              className="bg-[#f26422] hover:bg-[#d85316] text-white px-6 py-2.5 rounded-full font-poppins text-sm font-semibold tracking-wide transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[#f26422]/25 flex items-center gap-2 group active:scale-95 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-orange-100 group-hover:rotate-12 transition-transform" />
              <span>Book Free Strategy Call</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#272532] p-2 rounded-lg hover:bg-[#F5F5F5] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-b border-gray-200 px-4 pt-4 pb-6 mt-3 shadow-xl animate-fadeIn">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-poppins text-base font-bold text-[#001540] hover:text-[#f26422] py-2 border-b border-gray-100"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                trackEvent('click_strategy_call', { source: 'header_mobile' });
                onOpenStrategyModal();
              }}
              className="mt-2 w-full bg-[#f26422] hover:bg-[#d85316] text-white py-3 rounded-full font-poppins font-semibold text-center flex items-center justify-center gap-2 shadow-md cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              Book Free Strategy Call
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

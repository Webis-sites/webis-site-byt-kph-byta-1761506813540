'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

interface NavLink {
  label: string;
  href: string;
}

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const navLinks: NavLink[] = [
    { label: 'דף הבית', href: '#home' },
    { label: 'שירותים', href: '#services' },
    { label: 'המלצות', href: '#testimonials' },
    { label: 'הזמנת תור', href: '#booking' },
  ];

  useEffect(() => {
    const handleScroll = (): void => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href: string): void => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleKeyDown = (e: React.KeyboardEvent, action: () => void): void => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      action();
    }
  };

  return (
    <motion.nav
      id="navbar"
      dir="rtl"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
      style={{
        boxShadow: isScrolled
          ? '0 8px 32px 0 rgba(150, 206, 180, 0.15)'
          : 'none',
      }}
      role="navigation"
      aria-label="ניווט ראשי"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20" dir="rtl">
          {/* Logo/Brand Name - Right Side (RTL Start) */}
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#home');
              }}
              className="text-2xl font-bold text-right"
              style={{ color: '#96CEB4' }}
              aria-label="בית קפה ביתא - דף הבית"
            >
              בית קפה ביתא
            </a>
          </motion.div>

          {/* Desktop Navigation Links - Left Side (RTL End) */}
          <div className="hidden md:flex items-center space-x-reverse space-x-8" dir="rtl">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="text-gray-700 hover:text-[#96CEB4] px-3 py-2 rounded-lg text-base font-medium transition-all duration-300 text-right relative"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                style={{
                  backdropFilter: isScrolled ? 'blur(10px)' : 'none',
                }}
                aria-label={link.label}
                tabIndex={0}
                onKeyDown={(e) => handleKeyDown(e, () => handleLinkClick(link.href))}
              >
                <span className="relative z-10">{link.label}</span>
                <motion.span
                  className="absolute inset-0 rounded-lg"
                  style={{
                    background: 'rgba(150, 206, 180, 0.1)',
                    boxShadow: 'inset 2px 2px 5px rgba(255, 255, 255, 0.5), inset -2px -2px 5px rgba(150, 206, 180, 0.2)',
                  }}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button - Left Side (RTL End) */}
          <motion.button
            className="md:hidden p-2 rounded-lg text-gray-700 hover:text-[#96CEB4] focus:outline-none focus:ring-2 focus:ring-[#96CEB4]"
            onClick={toggleMobileMenu}
            whileTap={{ scale: 0.9 }}
            aria-label={isMobileMenuOpen ? 'סגור תפריט' : 'פתח תפריט'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            tabIndex={0}
            onKeyDown={(e) => handleKeyDown(e, toggleMobileMenu)}
            style={{
              background: isScrolled ? 'rgba(150, 206, 180, 0.1)' : 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)',
              boxShadow: '4px 4px 10px rgba(150, 206, 180, 0.2), -4px -4px 10px rgba(255, 255, 255, 0.5)',
            }}
          >
            {isMobileMenuOpen ? (
              <HiX className="h-6 w-6" aria-hidden="true" />
            ) : (
              <HiMenu className="h-6 w-6" aria-hidden="true" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu - Opens from Right Side */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm md:hidden"
              onClick={toggleMobileMenu}
              aria-hidden="true"
              style={{ top: '80px' }}
            />

            {/* Mobile Menu Panel */}
            <motion.div
              id="mobile-menu"
              dir="rtl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-20 right-0 w-64 h-[calc(100vh-80px)] md:hidden overflow-y-auto"
              style={{
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(20px)',
                boxShadow: '-8px 0 32px rgba(150, 206, 180, 0.2)',
                border: '1px solid rgba(150, 206, 180, 0.2)',
              }}
              role="menu"
              aria-label="תפריט ניווט נייד"
            >
              <div className="px-4 pt-4 pb-6 space-y-2" dir="rtl">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className="block px-4 py-3 rounded-lg text-gray-700 hover:text-[#96CEB4] text-right font-medium transition-all duration-300"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ delay: index * 0.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      background: 'rgba(150, 206, 180, 0.05)',
                      boxShadow: '4px 4px 8px rgba(150, 206, 180, 0.15), -4px -4px 8px rgba(255, 255, 255, 0.8)',
                    }}
                    role="menuitem"
                    tabIndex={0}
                    onKeyDown={(e) => handleKeyDown(e, () => handleLinkClick(link.href))}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
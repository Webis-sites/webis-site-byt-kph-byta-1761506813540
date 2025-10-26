'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="hero"
      dir="rtl"
      className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop"
          alt="בית קפה מודרני ומזמין עם אווירה ביתית"
          fill
          priority
          className="object-cover"
          quality={90}
        />
        {/* Glassmorphism Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#96CEB4]/30 via-[#D4A5A5]/20 to-[#96CEB4]/40"></div>
        <div className="absolute inset-0 backdrop-blur-[2px]"></div>
      </div>

      {/* Content Container */}
      <motion.div
        dir="rtl"
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-4xl mx-auto text-right">
          {/* Glassmorphism Card */}
          <div
            className="backdrop-blur-xl bg-white/20 rounded-[2rem] p-8 sm:p-12 lg:p-16 border border-white/30 shadow-[0_8px_32px_0_rgba(150,206,180,0.25)]"
            style={{
              boxShadow:
                '12px 12px 24px rgba(150, 206, 180, 0.15), -12px -12px 24px rgba(255, 255, 255, 0.7), inset 2px 2px 5px rgba(255, 255, 255, 0.3)',
            }}
          >
            {/* Headline */}
            <motion.h1
              dir="rtl"
              className="text-4xl sm:text-5xl lg:text-7xl font-bold text-right mb-6 sm:mb-8 text-gray-900 leading-tight tracking-tight"
              variants={itemVariants}
              style={{
                textShadow: '2px 2px 4px rgba(255, 255, 255, 0.8)',
              }}
            >
              בית קפה מוביל בישראל
            </motion.h1>

            {/* Description */}
            <motion.p
              dir="rtl"
              className="text-xl sm:text-2xl lg:text-3xl font-light text-right mb-8 sm:mb-12 text-gray-800 leading-relaxed"
              variants={itemVariants}
              style={{
                textShadow: '1px 1px 3px rgba(255, 255, 255, 0.7)',
              }}
            >
              חווית לקוח מושלמת בכל ביקור
            </motion.p>

            {/* CTA Button */}
            <motion.div dir="rtl" className="flex justify-end" variants={itemVariants}>
              <button
                onClick={scrollToBooking}
                className="group relative px-8 sm:px-10 lg:px-12 py-4 sm:py-5 text-lg sm:text-xl lg:text-2xl font-semibold text-white rounded-full transition-all duration-300 overflow-hidden"
                style={{
                  backgroundColor: '#96CEB4',
                  boxShadow:
                    '8px 8px 16px rgba(150, 206, 180, 0.4), -8px -8px 16px rgba(255, 255, 255, 0.6), inset 0 0 0 rgba(255, 255, 255, 0)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    'inset 8px 8px 16px rgba(150, 206, 180, 0.6), inset -8px -8px 16px rgba(255, 255, 255, 0.3), 0 0 20px rgba(150, 206, 180, 0.5)';
                  e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow =
                    '8px 8px 16px rgba(150, 206, 180, 0.4), -8px -8px 16px rgba(255, 255, 255, 0.6), inset 0 0 0 rgba(255, 255, 255, 0)';
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                }}
                onMouseDown={(e) => {
                  e.currentTarget.style.boxShadow =
                    'inset 4px 4px 8px rgba(150, 206, 180, 0.7), inset -4px -4px 8px rgba(255, 255, 255, 0.2)';
                  e.currentTarget.style.transform = 'translateY(1px) scale(0.98)';
                }}
                onMouseUp={(e) => {
                  e.currentTarget.style.boxShadow =
                    'inset 8px 8px 16px rgba(150, 206, 180, 0.6), inset -8px -8px 16px rgba(255, 255, 255, 0.3), 0 0 20px rgba(150, 206, 180, 0.5)';
                  e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
                }}
                aria-label="קבע תור עכשיו - גלול לטופס הזמנה"
              >
                <span className="relative z-10 text-right">קבע תור עכשיו</span>
                {/* Glassmorphism Hover Effect */}
                <span
                  className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
                  style={{
                    backdropFilter: 'blur(10px)',
                  }}
                ></span>
              </button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Decorative Glassmorphism Elements */}
      <div
        className="absolute top-10 right-10 w-32 h-32 rounded-full backdrop-blur-md bg-[#96CEB4]/10 border border-white/20 hidden lg:block"
        style={{
          boxShadow: '8px 8px 16px rgba(150, 206, 180, 0.2)',
        }}
      ></div>
      <div
        className="absolute bottom-20 left-20 w-40 h-40 rounded-full backdrop-blur-md bg-[#D4A5A5]/10 border border-white/20 hidden lg:block"
        style={{
          boxShadow: '8px 8px 16px rgba(212, 165, 165, 0.2)',
        }}
      ></div>
    </section>
  );
};

export default HeroSection;
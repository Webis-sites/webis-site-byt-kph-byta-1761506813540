'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface CTASectionProps {
  className?: string;
}

const CTASection: React.FC<CTASectionProps> = ({ className = '' }) => {
  const handleBookNow = (): void => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: '0 20px 40px rgba(150, 206, 180, 0.4)',
      transition: { duration: 0.3 },
    },
    tap: {
      scale: 0.95,
      boxShadow: 'inset 4px 4px 8px rgba(0, 0, 0, 0.1), inset -4px -4px 8px rgba(255, 255, 255, 0.5)',
    },
  };

  return (
    <section
      id="cta"
      dir="rtl"
      className={`relative w-full min-h-screen flex items-center justify-center overflow-hidden ${className}`}
      style={{
        background: 'linear-gradient(135deg, #96CEB4 0%, #D4A5A5 100%)',
      }}
    >
      {/* Background Pattern - Decorative Circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-10 right-10 w-64 h-64 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.25, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(212, 165, 165, 0.5) 0%, transparent 70%)',
          }}
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      {/* Glassmorphism Card Container */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div
          className="relative rounded-3xl p-8 sm:p-12 md:p-16 lg:p-20"
          style={{
            background: 'rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
          }}
        >
          {/* Headline */}
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white text-center text-right mb-6"
            variants={itemVariants}
            style={{
              textShadow: '2px 2px 8px rgba(0, 0, 0, 0.2)',
              letterSpacing: '-0.02em',
            }}
          >
            מוכנים לחוות את הקפה הטוב ביותר?
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-white/90 text-center text-right mb-10 max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
            style={{
              textShadow: '1px 1px 4px rgba(0, 0, 0, 0.15)',
            }}
          >
            הצטרפו אלינו לחוויה בלתי נשכחת של קפה איכותי ושירות מעולה. קבעו תור עכשיו ותיהנו מהאווירה המיוחדת שלנו!
          </motion.p>

          {/* CTA Button with Neumorphic Style */}
          <motion.div
            className="flex justify-center"
            variants={itemVariants}
          >
            <motion.button
              onClick={handleBookNow}
              className="relative px-10 py-5 sm:px-12 sm:py-6 text-xl sm:text-2xl font-bold text-white rounded-full overflow-hidden focus:outline-none focus:ring-4 focus:ring-white/50 transition-all"
              style={{
                background: 'linear-gradient(145deg, #96CEB4, #7AB89A)',
                boxShadow: '8px 8px 16px rgba(0, 0, 0, 0.2), -8px -8px 16px rgba(255, 255, 255, 0.3)',
              }}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              aria-label="קבע תור עכשיו"
            >
              {/* Button Shine Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{
                  x: '100%',
                  transition: { duration: 0.6, ease: 'easeInOut' },
                }}
              />
              <span className="relative z-10">קבע תור עכשיו</span>
            </motion.button>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            className="mt-12 flex justify-center items-center gap-3"
            variants={itemVariants}
          >
            <motion.div
              className="w-16 h-1 rounded-full bg-white/40"
              animate={{
                scaleX: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className="w-3 h-3 rounded-full bg-white/60"
              animate={{
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.3,
              }}
            />
            <motion.div
              className="w-16 h-1 rounded-full bg-white/40"
              animate={{
                scaleX: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Floating Coffee Beans Animation */}
      <motion.div
        className="absolute bottom-10 right-10 w-12 h-12 rounded-full opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.6) 0%, transparent 70%)',
        }}
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute top-20 left-32 w-8 h-8 rounded-full opacity-25"
        style={{
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.5) 0%, transparent 70%)',
        }}
        animate={{
          y: [0, 15, 0],
          x: [0, -8, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.5,
        }}
      />
    </section>
  );
};

export default CTASection;
'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaCoffee, FaHeart, FaStar, FaMapMarkerAlt } from 'react-icons/fa';

interface ExperienceHighlight {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ExperienceSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const highlights: ExperienceHighlight[] = [
    {
      id: 'atmosphere',
      icon: <FaHeart className="w-8 h-8" />,
      title: 'אווירה מזמינה',
      description: 'חלל מעוצב ונעים שמזמין אתכם להישאר'
    },
    {
      id: 'quality',
      icon: <FaCoffee className="w-8 h-8" />,
      title: 'קפה איכותי',
      description: 'פולי קפה מובחרים וטריים מהקלייה'
    },
    {
      id: 'service',
      icon: <FaStar className="w-8 h-8" />,
      title: 'שירות מעולה',
      description: 'צוות מקצועי ומסור לשירותכם'
    },
    {
      id: 'location',
      icon: <FaMapMarkerAlt className="w-8 h-8" />,
      title: 'מיקום נוח',
      description: 'במרכז העיר, נגיש לכולם'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section
      id="experience-section"
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#f5f5f5] to-[#e8e8e8]"
      dir="rtl"
      aria-labelledby="experience-heading"
    >
      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y }}
      >
        <div className="relative w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop"
            alt="בית קפה ביתא - אווירה מודרנית ומזמינה"
            fill
            className="object-cover"
            priority={false}
            loading="lazy"
            sizes="100vw"
          />
          {/* Dark Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        </div>
      </motion.div>

      {/* Content Container */}
      <motion.div 
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24"
        style={{ opacity }}
      >
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2
            id="experience-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 text-right"
            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
          >
            החוויה שלנו
          </h2>
          <div className="w-24 h-1 bg-gradient-to-l from-[#96CEB4] to-[#D4A5A5] mr-auto rounded-full" />
        </motion.div>

        {/* Experience Highlights Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto"
        >
          {highlights.map((highlight, index) => (
            <motion.article
              key={highlight.id}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group relative"
              aria-label={`${highlight.title}: ${highlight.description}`}
            >
              {/* Glassmorphism Card */}
              <div className="relative h-full backdrop-blur-xl bg-white/10 rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl overflow-hidden">
                {/* Neumorphic Inner Shadow */}
                <div className="absolute inset-0 rounded-3xl shadow-[inset_0_2px_20px_rgba(0,0,0,0.1)]" />
                
                {/* Gradient Background on Hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                  style={{
                    background: index % 2 === 0 
                      ? 'linear-gradient(135deg, rgba(150, 206, 180, 0.2) 0%, rgba(212, 165, 165, 0.2) 100%)'
                      : 'linear-gradient(135deg, rgba(212, 165, 165, 0.2) 0%, rgba(150, 206, 180, 0.2) 100%)'
                  }}
                />

                {/* Content */}
                <div className="relative z-10 flex flex-col items-end text-right h-full">
                  {/* Icon Container with Neumorphic Effect */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="mb-6 p-4 rounded-2xl bg-gradient-to-br from-white/20 to-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.1),inset_0_2px_8px_rgba(255,255,255,0.2)]"
                    style={{
                      color: index % 2 === 0 ? '#96CEB4' : '#D4A5A5'
                    }}
                  >
                    {highlight.icon}
                  </motion.div>

                  {/* Text Content */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                    {highlight.title}
                  </h3>
                  <p className="text-base sm:text-lg text-white/90 leading-relaxed">
                    {highlight.description}
                  </p>

                  {/* Decorative Element */}
                  <div 
                    className="mt-auto pt-6 w-16 h-1 rounded-full mr-auto opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: index % 2 === 0 
                        ? 'linear-gradient(to left, #96CEB4, #D4A5A5)'
                        : 'linear-gradient(to left, #D4A5A5, #96CEB4)'
                    }}
                  />
                </div>
              </div>

              {/* Floating Badge Effect */}
              <motion.div
                className="absolute -top-2 -right-2 w-12 h-12 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: index % 2 === 0 
                    ? 'radial-gradient(circle, rgba(150, 206, 180, 0.6) 0%, transparent 70%)'
                    : 'radial-gradient(circle, rgba(212, 165, 165, 0.6) 0%, transparent 70%)',
                  filter: 'blur(10px)'
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              />
            </motion.article>
          ))}
        </motion.div>

        {/* Bottom Decorative Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16 sm:mt-20"
        >
          <p className="text-xl sm:text-2xl lg:text-3xl text-white/90 font-light text-right max-w-3xl mx-auto leading-relaxed">
            בבית קפה ביתא, אנחנו יוצרים חוויה ייחודית שמשלבת איכות, אווירה ושירות ברמה הגבוהה ביותר
          </p>
        </motion.div>
      </motion.div>

      {/* Decorative Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 rounded-full opacity-30 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(150, 206, 180, 0.4) 0%, transparent 70%)',
          filter: 'blur(40px)'
        }}
        animate={{
          y: [0, 30, 0],
          x: [0, 20, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      <motion.div
        className="absolute bottom-32 right-16 w-40 h-40 rounded-full opacity-30 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(212, 165, 165, 0.4) 0%, transparent 70%)',
          filter: 'blur(40px)'
        }}
        animate={{
          y: [0, -40, 0],
          x: [0, -25, 0],
          scale: [1, 1.15, 1]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
    </section>
  );
};

export default ExperienceSection;
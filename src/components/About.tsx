'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaCoffee, FaAward, FaUsers, FaLightbulb } from 'react-icons/fa';

interface ValueProposition {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const valuePropositions: ValueProposition[] = [
    {
      id: 1,
      icon: <FaCoffee className="w-8 h-8" />,
      title: '15+ שנות ניסיון',
      description: 'מובילים את תחום הקפה והאופנה',
    },
    {
      id: 2,
      icon: <FaAward className="w-8 h-8" />,
      title: 'שירות איכותי',
      description: 'מחויבות למצוינות בכל פרט',
    },
    {
      id: 3,
      icon: <FaUsers className="w-8 h-8" />,
      title: '98% שביעות רצון',
      description: 'לקוחות מרוצים וחוזרים',
    },
    {
      id: 4,
      icon: <FaLightbulb className="w-8 h-8" />,
      title: 'חדשנות מתמדת',
      description: 'תמיד צעד אחד קדימה',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="about-section"
      ref={sectionRef}
      dir="rtl"
      className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #f5f7fa 0%, #e8eef5 100%)',
      }}
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#96CEB4] to-transparent opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#D4A5A5] to-transparent opacity-10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 text-right">
            אודותינו
          </h2>
          <div className="w-24 h-1 bg-gradient-to-l from-[#96CEB4] to-[#D4A5A5] mr-auto mt-4"></div>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Image Column (Left on desktop for RTL) */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="order-2 lg:order-1"
          >
            <div
              className="relative rounded-3xl overflow-hidden shadow-2xl"
              style={{
                background: 'rgba(255, 255, 255, 0.25)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.5)',
              }}
            >
              <div className="p-2">
                <img
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&h=600&fit=crop"
                  alt="בית קפה ביתא - אווירה מזמינה"
                  className="w-full h-[400px] lg:h-[500px] object-cover rounded-2xl"
                  loading="lazy"
                />
              </div>
              {/* Neumorphic overlay effect */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  boxShadow: 'inset 0 0 60px rgba(0, 0, 0, 0.1)',
                }}
              ></div>
            </div>
          </motion.div>

          {/* Text Column (Right on desktop for RTL) */}
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="order-1 lg:order-2 flex flex-col justify-center"
          >
            <div
              className="p-8 rounded-3xl"
              style={{
                background: 'rgba(255, 255, 255, 0.4)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.6)',
                boxShadow: '20px 20px 60px #d1d9e6, -20px -20px 60px #ffffff',
              }}
            >
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-right mb-6">
                אנחנו בית קפה מוביל בתחום הטכנולוגיה עם ניסיון של שנים רבות. אנחנו
                מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.
              </p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed text-right">
                המשימה שלנו היא לשלב בין תרבות הקפה המסורתית לבין חדשנות עכשווית,
                תוך יצירת חוויה ייחודית שמשלבת אופנה, טכנולוגיה ואיכות ללא פשרות.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Value Propositions Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {valuePropositions.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
              className="group"
            >
              <div
                className="p-6 rounded-2xl text-center transition-all duration-300"
                style={{
                  background: 'rgba(255, 255, 255, 0.5)',
                  backdropFilter: 'blur(15px)',
                  border: '1px solid rgba(255, 255, 255, 0.7)',
                  boxShadow:
                    '12px 12px 24px #d1d9e6, -12px -12px 24px #ffffff',
                }}
              >
                <div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 transition-all duration-300"
                  style={{
                    background: `linear-gradient(135deg, #96CEB4 0%, #D4A5A5 100%)`,
                    boxShadow:
                      '6px 6px 12px rgba(150, 206, 180, 0.3), -6px -6px 12px rgba(212, 165, 165, 0.3)',
                    color: '#ffffff',
                  }}
                >
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2 text-right">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm text-right">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
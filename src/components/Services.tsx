'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Users, Briefcase, Utensils, GraduationCap, Sparkles } from 'lucide-react';

interface Service {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServicesSection: React.FC = () => {
  const services: Service[] = [
    {
      id: 'specialty-coffee',
      icon: <Coffee className="w-8 h-8" />,
      title: 'חוויות קפה מיוחדות',
      description: 'מגוון רחב של משקאות קפה איכוtiים המוכנים על ידי בריסטות מומחים, עם שיטות חליטה ייחודיות וטעמים מרהיבים'
    },
    {
      id: 'private-events',
      icon: <Users className="w-8 h-8" />,
      title: 'אירועים פרטיים',
      description: 'אירוח אירועים פרטיים ועסקיים באווירה אינטימית ומקצועית, מושלם לפגישות, השקות מוצרים ואירועי רשת'
    },
    {
      id: 'coworking',
      icon: <Briefcase className="w-8 h-8" />,
      title: 'מרחב עבודה משותף',
      description: 'סביבת עבודה מעוצבת ונוחה עם WiFi מהיר, שקעי חשמל ואווירה שקטה המושלמת ליזמים ואנשי מקצוע'
    },
    {
      id: 'catering',
      icon: <Utensils className="w-8 h-8" />,
      title: 'שירותי קייטרינג',
      description: 'שירותי קייטרינג מקצועיים לאירועים עסקיים ופרטיים, כולל מגוון רחב של משקאות חמים וקרים ומאפים טריים'
    },
    {
      id: 'workshops',
      icon: <GraduationCap className="w-8 h-8" />,
      title: 'סדנאות בריסטה',
      description: 'סדנאות מקצועיות להכנת קפה, לאט ארט ושיטות חליטה מתקדמות, מתאים למתחילים ומקצוענים כאחד'
    },
    {
      id: 'custom-beverages',
      icon: <Sparkles className="w-8 h-8" />,
      title: 'יצירת משקאות מותאמים',
      description: 'פיתוח משקאות ייחודיים ומותאמים אישית לפי העדפות הלקוח, מושלם למיתוג עסקי ואירועים מיוחדים'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section 
      id="services" 
      className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100"
      dir="rtl"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#96CEB4] opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4A5A5] opacity-5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-right">
            השירותים שלנו
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto text-right">
            חוויה ייחודית המשלבת תרבות קפה איכותית עם אווירה מקצועית ומודרנית
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              {/* Glassmorphism Card */}
              <div className="relative h-full bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-lg border border-white/50 overflow-hidden transition-all duration-300 hover:shadow-2xl">
                {/* Neumorphic Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-gray-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Colored Accent on Hover */}
                <div 
                  className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  style={{ background: service.id.includes('coffee') || service.id.includes('custom') ? '#96CEB4' : '#D4A5A5' }}
                ></div>

                <div className="relative z-10">
                  {/* Icon Container with Neumorphic Effect */}
                  <div 
                    className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 transition-all duration-300 shadow-[8px_8px_16px_rgba(163,177,198,0.3),-8px_-8px_16px_rgba(255,255,255,0.8)] group-hover:shadow-[inset_4px_4px_8px_rgba(163,177,198,0.2),inset_-4px_-4px_8px_rgba(255,255,255,0.9)]"
                    style={{ 
                      background: 'linear-gradient(145deg, #f0f0f0, #ffffff)',
                      color: service.id.includes('coffee') || service.id.includes('custom') ? '#96CEB4' : '#D4A5A5'
                    }}
                  >
                    {service.icon}
                  </div>

                  {/* Service Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 text-right group-hover:text-[#96CEB4] transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Service Description */}
                  <p className="text-gray-600 leading-relaxed text-right">
                    {service.description}
                  </p>

                  {/* Decorative Border Bottom */}
                  <div 
                    className="absolute bottom-0 right-0 h-1 w-0 group-hover:w-full transition-all duration-500 rounded-full"
                    style={{ 
                      background: `linear-gradient(90deg, ${service.id.includes('coffee') || service.id.includes('custom') ? '#96CEB4' : '#D4A5A5'}, transparent)` 
                    }}
                  ></div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-lg text-gray-700 mb-6 text-right md:text-center">
            מעוניינים להזמין שירות או לקבל מידע נוסף?
          </p>
          <motion.a
            href="#booking"
            className="inline-block px-8 py-4 rounded-full font-semibold text-white shadow-lg transition-all duration-300 relative overflow-hidden group"
            style={{ 
              background: 'linear-gradient(135deg, #96CEB4 0%, #D4A5A5 100%)',
              boxShadow: '0 10px 25px rgba(150, 206, 180, 0.3)'
            }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 15px 35px rgba(150, 206, 180, 0.4)'
            }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">צור קשר לפרטים נוספים</span>
            <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right"></div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
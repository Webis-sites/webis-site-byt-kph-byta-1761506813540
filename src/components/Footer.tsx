'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaFacebookF, FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };

  const socialLinks = [
    { 
      name: 'Instagram', 
      icon: FaInstagram, 
      url: 'https://instagram.com',
      ariaLabel: 'עקבו אחרינו באינסטגרם'
    },
    { 
      name: 'Facebook', 
      icon: FaFacebookF, 
      url: 'https://facebook.com',
      ariaLabel: 'עקבו אחרינו בפייסבוק'
    },
    { 
      name: 'WhatsApp', 
      icon: FaWhatsapp, 
      url: 'https://wa.me/972501234567',
      ariaLabel: 'צרו קשר דרך וואטסאפ'
    }
  ];

  const quickLinks = [
    { name: 'דף הבית', url: '#home' },
    { name: 'שירותים', url: '#services' },
    { name: 'המלצות', url: '#testimonials' },
    { name: 'הזמנת תור', url: '#booking' }
  ];

  const legalLinks = [
    { name: 'תנאי שימוש', url: '#terms' },
    { name: 'מדיניות פרטיות', url: '#privacy' }
  ];

  return (
    <footer 
      id="footer" 
      dir="rtl" 
      className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-gray-950 text-gray-200 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#96CEB4] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4A5A5] rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <motion.div 
          className="container mx-auto px-6 py-12 lg:py-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Business Info Column */}
            <motion.div 
              className="text-right"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-bold mb-4 text-[#96CEB4]">
                בית קפה ביתא
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                חוויית קפה ייחודית המשלבת איכות, אווירה ושירות מעולה. מקום מושלם לפגישות, עבודה או רגעי הנאה.
              </p>
              <div className="inline-block px-4 py-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg">
                <p className="text-sm text-gray-300">
                  אופנה • קפה • סגנון חיים
                </p>
              </div>
            </motion.div>

            {/* Quick Links Column */}
            <motion.div 
              className="text-right"
              variants={itemVariants}
            >
              <h4 className="text-lg font-semibold mb-4 text-white">
                קישורים מהירים
              </h4>
              <nav aria-label="קישורים מהירים">
                <ul className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <motion.a
                        href={link.url}
                        className="inline-block text-gray-400 hover:text-[#96CEB4] transition-colors duration-300 relative group"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className="relative">
                          {link.name}
                          <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-[#96CEB4] group-hover:w-full transition-all duration-300"></span>
                        </span>
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </nav>
            </motion.div>

            {/* Contact Column */}
            <motion.div 
              className="text-right"
              variants={itemVariants}
            >
              <h4 className="text-lg font-semibold mb-4 text-white">
                צור קשר
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start justify-end gap-3 group">
                  <div className="text-right">
                    <p className="text-gray-400 group-hover:text-[#96CEB4] transition-colors duration-300">
                      רחוב הרצל 123, תל אביב
                    </p>
                  </div>
                  <div className="mt-1 p-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 shadow-inner">
                    <FaMapMarkerAlt className="text-[#96CEB4] text-lg" aria-hidden="true" />
                  </div>
                </li>
                <li className="flex items-start justify-end gap-3 group">
                  <div className="text-right">
                    <a 
                      href="tel:+972501234567" 
                      className="text-gray-400 hover:text-[#96CEB4] transition-colors duration-300"
                      aria-label="התקשר אלינו"
                    >
                      050-123-4567
                    </a>
                  </div>
                  <div className="mt-1 p-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 shadow-inner">
                    <FaPhone className="text-[#96CEB4] text-lg" aria-hidden="true" />
                  </div>
                </li>
                <li className="flex items-start justify-end gap-3 group">
                  <div className="text-right">
                    <a 
                      href="mailto:info@beta-cafe.co.il" 
                      className="text-gray-400 hover:text-[#96CEB4] transition-colors duration-300 break-all"
                      aria-label="שלח לנו מייל"
                    >
                      info@beta-cafe.co.il
                    </a>
                  </div>
                  <div className="mt-1 p-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 shadow-inner">
                    <FaEnvelope className="text-[#96CEB4] text-lg" aria-hidden="true" />
                  </div>
                </li>
              </ul>
            </motion.div>

            {/* Social Media Column */}
            <motion.div 
              className="text-right"
              variants={itemVariants}
            >
              <h4 className="text-lg font-semibold mb-4 text-white">
                עקבו אחרינו
              </h4>
              <p className="text-gray-400 mb-6 text-sm">
                הצטרפו לקהילה שלנו ברשתות החברתיות
              </p>
              <div className="flex gap-4 justify-end">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.ariaLabel}
                      className="group relative"
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg group-hover:bg-[#96CEB4] group-hover:border-[#96CEB4] transition-all duration-300">
                        <IconComponent 
                          className="text-xl text-gray-300 group-hover:text-white transition-colors duration-300" 
                          aria-hidden="true"
                        />
                      </div>
                      {/* Neumorphic shadow effect */}
                      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-md bg-[#96CEB4]/50"></div>
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Divider with glassmorphism */}
        <div className="container mx-auto px-6">
          <div className="h-px bg-gradient-to-l from-transparent via-white/20 to-transparent"></div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="container mx-auto px-6 py-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            
            {/* Copyright */}
            <div className="text-gray-400 text-center md:text-right order-2 md:order-1">
              <p>
                © {currentYear} בית קפה ביתא. כל הזכויות שמורות
              </p>
            </div>

            {/* Legal Links */}
            <nav aria-label="קישורים משפטיים" className="order-1 md:order-2">
              <ul className="flex gap-6 text-gray-400">
                {legalLinks.map((link, index) => (
                  <li key={index}>
                    <motion.a
                      href={link.url}
                      className="hover:text-[#96CEB4] transition-colors duration-300 relative group"
                      whileHover={{ scale: 1.05 }}
                    >
                      {link.name}
                      <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-[#96CEB4] group-hover:w-full transition-all duration-300"></span>
                    </motion.a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
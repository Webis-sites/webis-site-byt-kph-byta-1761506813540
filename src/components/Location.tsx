'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, MessageCircle } from 'lucide-react';

interface ContactItem {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}

interface SocialLink {
  icon: React.ReactNode;
  label: string;
  href: string;
  color: string;
}

const LocationSection: React.FC = () => {
  const contactItems: ContactItem[] = [
    {
      icon: <MapPin className="w-6 h-6" />,
      label: 'כתובת',
      value: 'רחוב דיזנגוף 123, תל אביב-יפו',
      href: 'https://maps.google.com/?q=Dizengoff+123+Tel+Aviv'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'טלפון',
      value: '03-5551234',
      href: 'tel:+97235551234'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'דוא״ל',
      value: 'info@cafe-beita.co.il',
      href: 'mailto:info@cafe-beita.co.il'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      label: 'שעות פתיחה',
      value: 'א׳-ו׳: 07:00-22:00, שבת: 08:00-23:00'
    }
  ];

  const socialLinks: SocialLink[] = [
    {
      icon: <Instagram className="w-6 h-6" />,
      label: 'Instagram',
      href: 'https://instagram.com/cafebeita',
      color: '#E4405F'
    },
    {
      icon: <Facebook className="w-6 h-6" />,
      label: 'Facebook',
      href: 'https://facebook.com/cafebeita',
      color: '#1877F2'
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      label: 'WhatsApp',
      href: 'https://wa.me/97235551234',
      color: '#25D366'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  const mapVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, delay: 0.2 }
    }
  };

  return (
    <section
      id="location"
      dir="rtl"
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#96CEB4] opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4A5A5] opacity-5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-right">
            מיקום ויצירת קשר
          </h2>
          <div className="w-24 h-1 bg-gradient-to-l from-[#96CEB4] to-[#D4A5A5] mr-auto rounded-full"></div>
        </motion.div>

        {/* Two Column Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
        >
          {/* Contact Information - Right Side for RTL */}
          <motion.div
            variants={itemVariants}
            className="order-1 lg:order-2 space-y-6"
          >
            {/* Contact Items */}
            <div className="space-y-4">
              {contactItems.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, x: -5 }}
                  className="group"
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-start gap-4 p-6 rounded-2xl bg-white/60 backdrop-blur-md border border-white/40 shadow-[8px_8px_16px_rgba(163,177,198,0.15),-8px_-8px_16px_rgba(255,255,255,0.7)] hover:shadow-[inset_4px_4px_8px_rgba(163,177,198,0.2),inset_-4px_-4px_8px_rgba(255,255,255,0.9)] transition-all duration-300"
                      aria-label={item.label}
                    >
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#96CEB4] to-[#D4A5A5] flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </div>
                      <div className="flex-1 text-right">
                        <h3 className="text-sm font-semibold text-gray-500 mb-1">
                          {item.label}
                        </h3>
                        <p className="text-lg text-gray-900 font-medium">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/60 backdrop-blur-md border border-white/40 shadow-[8px_8px_16px_rgba(163,177,198,0.15),-8px_-8px_16px_rgba(255,255,255,0.7)] transition-all duration-300">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#96CEB4] to-[#D4A5A5] flex items-center justify-center text-white shadow-md">
                        {item.icon}
                      </div>
                      <div className="flex-1 text-right">
                        <h3 className="text-sm font-semibold text-gray-500 mb-1">
                          {item.label}
                        </h3>
                        <p className="text-lg text-gray-900 font-medium">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Social Media Links */}
            <motion.div
              variants={itemVariants}
              className="p-6 rounded-2xl bg-white/60 backdrop-blur-md border border-white/40 shadow-[8px_8px_16px_rgba(163,177,198,0.15),-8px_-8px_16px_rgba(255,255,255,0.7)]"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-right">
                עקבו אחרינו
              </h3>
              <div className="flex gap-4 justify-end">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ scale: 1.15, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-14 h-14 rounded-full bg-white/80 backdrop-blur-sm border border-white/60 shadow-[4px_4px_8px_rgba(163,177,198,0.2),-4px_-4px_8px_rgba(255,255,255,0.9)] hover:shadow-[inset_2px_2px_4px_rgba(163,177,198,0.3),inset_-2px_-2px_4px_rgba(255,255,255,1)] flex items-center justify-center text-gray-700 hover:text-white transition-all duration-300"
                    style={{
                      ['--hover-bg' as string]: social.color
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = social.color;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
                    }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Map Placeholder - Left Side for RTL */}
          <motion.div
            variants={mapVariants}
            className="order-2 lg:order-1"
          >
            <div className="relative h-full min-h-[400px] lg:min-h-[600px] rounded-2xl overflow-hidden shadow-[12px_12px_24px_rgba(163,177,198,0.2),-12px_-12px_24px_rgba(255,255,255,0.8)] border border-white/40">
              {/* Map Image from Unsplash */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#96CEB4]/20 to-[#D4A5A5]/20">
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=1000&fit=crop&q=80"
                  alt="מיקום בית קפה ביתא"
                  className="w-full h-full object-cover opacity-90"
                />
              </div>

              {/* Glassmorphic Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent backdrop-blur-[2px]"></div>

              {/* Location Pin Indicator */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.5, type: "spring" }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full"
              >
                <div className="relative">
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-16 h-16 rounded-full bg-gradient-to-br from-[#96CEB4] to-[#D4A5A5] flex items-center justify-center shadow-lg"
                  >
                    <MapPin className="w-8 h-8 text-white" />
                  </motion.div>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gradient-to-b from-[#D4A5A5] to-transparent"></div>
                </div>
              </motion.div>

              {/* Address Label */}
              <div className="absolute bottom-6 right-6 left-6">
                <div className="p-4 rounded-xl bg-white/80 backdrop-blur-md border border-white/60 shadow-lg">
                  <p className="text-right text-gray-900 font-semibold text-lg">
                    רחוב דיזנגוף 123, תל אביב-יפו
                  </p>
                  <a
                    href="https://maps.google.com/?q=Dizengoff+123+Tel+Aviv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-[#96CEB4] hover:text-[#D4A5A5] font-medium text-sm transition-colors duration-300"
                  >
                    פתח ב-Google Maps ←
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationSection;
'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface Testimonial {
  id: number;
  name: string;
  review: string;
  rating: number;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'שרה כהן',
    review: 'בית הקפה הכי מקסים שהייתי בו! האווירה חמה ומזמינה, והקפה פשוט מעולה. השירות מהיר ומקצועי, בהחלט אחזור שוב.',
    rating: 5,
    initials: 'שכ'
  },
  {
    id: 2,
    name: 'דוד לוי',
    review: 'מקום נהדר לעבוד ולהירגע. הקפה איכותי במיוחד והצוות ידידותי ומסביר פנים. העיצוב המודרני והנעים יוצר חוויה מושלמת.',
    rating: 5,
    initials: 'דל'
  },
  {
    id: 3,
    name: 'מיכל אברהם',
    review: 'התאהבתי במקום! הקפה הכי טעים בעיר והאווירה פשוט מדהימה. כל פעם שאני מגיעה אני מרגישה כמו בבית.',
    rating: 5,
    initials: 'מא'
  },
  {
    id: 4,
    name: 'יוסי מזרחי',
    review: 'שירות מעולה ותשומת לב לפרטים הקטנים. הקפה טרי ואיכותי, והמקום מעוצב בטעם רב. ממליץ בחום!',
    rating: 5,
    initials: 'ימ'
  },
  {
    id: 5,
    name: 'רונית שפירא',
    review: 'חוויה קולינרית נפלאה! הקפה מושלם, האווירה נעימה והצוות מקצועי ואדיב. המקום האהוב עליי בשכונה.',
    rating: 5,
    initials: 'רש'
  },
  {
    id: 6,
    name: 'אלי גולדברג',
    review: 'בית קפה ברמה גבוהה! איכות הקפה יוצאת דופן והשירות מצוין. המקום מושלם לפגישות עסקיות או לבילוי עם חברים.',
    rating: 5,
    initials: 'אג'
  }
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [direction, setDirection] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? -1000 : 1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = useCallback((newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = testimonials.length - 1;
      if (nextIndex >= testimonials.length) nextIndex = 0;
      return nextIndex;
    });
  }, []);

  const goToSlide = (index: number) => {
    const newDirection = index > currentIndex ? 1 : -1;
    setDirection(newDirection);
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      paginate(1);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying, paginate]);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'ArrowLeft') {
      paginate(1);
      setIsAutoPlaying(false);
    } else if (event.key === 'ArrowRight') {
      paginate(-1);
      setIsAutoPlaying(false);
    }
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1 justify-end" aria-label={`דירוג: ${rating} מתוך 5 כוכבים`}>
        {[...Array(5)].map((_, index) => (
          <FaStar
            key={index}
            className="text-yellow-400"
            size={18}
            aria-hidden="true"
          />
        ))}
      </div>
    );
  };

  return (
    <section
      id="testimonials-section"
      dir="rtl"
      className="relative py-20 px-4 overflow-hidden bg-gradient-to-br from-[#f5f5f5] via-[#fafafa] to-[#f0f0f0]"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-label="מה הלקוחות שלנו אומרים"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-[#96CEB4] opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#D4A5A5] opacity-10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 text-right">
            מה הלקוחות שלנו אומרים
          </h2>
          <div className="w-24 h-1 bg-gradient-to-l from-[#96CEB4] to-[#D4A5A5] mr-auto rounded-full"></div>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Testimonial Cards */}
          <div className="relative h-[400px] md:h-[350px] flex items-center justify-center overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(-1);
                    setIsAutoPlaying(false);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(1);
                    setIsAutoPlaying(false);
                  }
                }}
                className="absolute w-full max-w-3xl px-4"
              >
                <div
                  className="relative bg-white/40 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-[8px_8px_16px_rgba(163,177,198,0.3),-8px_-8px_16px_rgba(255,255,255,0.8)] border border-white/50"
                  style={{
                    background: 'linear-gradient(145deg, rgba(255,255,255,0.5), rgba(255,255,255,0.2))'
                  }}
                >
                  {/* Avatar and Name */}
                  <div className="flex items-center gap-4 mb-6 justify-end">
                    <div className="text-right">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                        {testimonials[currentIndex].name}
                      </h3>
                      <div className="mt-2">
                        {renderStars(testimonials[currentIndex].rating)}
                      </div>
                    </div>
                    <div
                      className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center text-white text-xl md:text-2xl font-bold shadow-[inset_4px_4px_8px_rgba(163,177,198,0.3),inset_-4px_-4px_8px_rgba(255,255,255,0.8)]"
                      style={{
                        background: `linear-gradient(135deg, #96CEB4, #D4A5A5)`
                      }}
                      aria-hidden="true"
                    >
                      {testimonials[currentIndex].initials}
                    </div>
                  </div>

                  {/* Review Text */}
                  <blockquote className="text-right">
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                      "{testimonials[currentIndex].review}"
                    </p>
                  </blockquote>

                  {/* Decorative Quote Mark */}
                  <div
                    className="absolute top-6 left-6 text-6xl md:text-7xl font-serif opacity-20"
                    style={{ color: '#96CEB4' }}
                    aria-hidden="true"
                  >
                    "
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => {
              paginate(-1);
              setIsAutoPlaying(false);
            }}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/60 backdrop-blur-md shadow-[4px_4px_8px_rgba(163,177,198,0.3),-4px_-4px_8px_rgba(255,255,255,0.8)] hover:shadow-[inset_4px_4px_8px_rgba(163,177,198,0.3),inset_-4px_-4px_8px_rgba(255,255,255,0.8)] transition-all duration-300 flex items-center justify-center text-gray-700 hover:text-[#96CEB4] border border-white/50 z-20"
            aria-label="המלצה קודמת"
          >
            <FaChevronRight size={20} />
          </button>

          <button
            onClick={() => {
              paginate(1);
              setIsAutoPlaying(false);
            }}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/60 backdrop-blur-md shadow-[4px_4px_8px_rgba(163,177,198,0.3),-4px_-4px_8px_rgba(255,255,255,0.8)] hover:shadow-[inset_4px_4px_8px_rgba(163,177,198,0.3),inset_-4px_-4px_8px_rgba(255,255,255,0.8)] transition-all duration-300 flex items-center justify-center text-gray-700 hover:text-[#D4A5A5] border border-white/50 z-20"
            aria-label="המלצה הבאה"
          >
            <FaChevronLeft size={20} />
          </button>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3 mt-12" role="tablist" aria-label="בחר המלצה">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                goToSlide(index);
                setIsAutoPlaying(false);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'w-10 shadow-[inset_2px_2px_4px_rgba(163,177,198,0.5),inset_-2px_-2px_4px_rgba(255,255,255,0.8)]'
                  : 'shadow-[2px_2px_4px_rgba(163,177,198,0.3),-2px_-2px_4px_rgba(255,255,255,0.8)] hover:shadow-[inset_2px_2px_4px_rgba(163,177,198,0.3)]'
              }`}
              style={{
                background:
                  index === currentIndex
                    ? 'linear-gradient(135deg, #96CEB4, #D4A5A5)'
                    : '#e0e5ec'
              }}
              aria-label={`עבור להמלצה ${index + 1}`}
              role="tab"
              aria-selected={index === currentIndex}
            />
          ))}
        </div>

        {/* Accessibility Instructions */}
        <div className="sr-only" role="region" aria-live="polite">
          המלצה {currentIndex + 1} מתוך {testimonials.length}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
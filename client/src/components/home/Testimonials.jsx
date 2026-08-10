import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '@/components/common/Container';
import { testimonialsData } from '@/data/testimonials';

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto rotate testimonials smoothly
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  const current = testimonialsData[activeIndex];

  return (
    <section className="py-14 sm:py-18 md:py-22 bg-[#FAFDFB] relative overflow-hidden border-y border-[#003D2F]/[0.06]" id="testimonials">
      {/* Subtle Ambient Radial Gold Glows */}
      <div className="absolute top-0 left-1/3 -translate-x-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse_at_top,_rgba(216,180,106,0.08)_0%,_transparent_70%)] blur-2xl pointer-events-none z-0" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[250px] bg-[radial-gradient(circle,_rgba(1,39,27,0.03)_0%,_transparent_70%)] blur-2xl pointer-events-none z-0" />

      <Container className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* 1. Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20px' }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-6 sm:mb-8 max-w-xl mx-auto"
        >
          {/* Eyebrow */}
          <span className="font-sans text-[10.5px] sm:text-[11px] font-semibold tracking-[0.28em] text-[#00281B] uppercase block mb-2.5">
            CLIENT TESTIMONIALS
          </span>

          {/* Gold Sparkle Star Accent */}
          <div className="text-[#C9A45C] text-[10px] sm:text-[11px] mb-2.5 select-none opacity-85">
            ✦
          </div>

          {/* Main Heading */}
          <h2 className="font-serif text-3xl sm:text-4xl md:text-[42px] font-medium text-[#00281B] leading-tight tracking-tight">
            What Our <span className="font-highlight font-mango italic text-[#D8B46A]">Customers</span> Say
          </h2>
        </motion.div>

        {/* 2. Editorial Quote Area with Side Gold Lines & Stars (Rock-Solid Constant Height Container to Eliminate Layout Shift) */}
        <div className="relative max-w-5xl xl:max-w-6xl mx-auto flex items-center justify-center gap-3 sm:gap-6 lg:gap-8 my-4 sm:my-6 px-2">
          {/* Left Side Gold Design Line with Diamond Star */}
          <div className="hidden sm:flex items-center gap-2 flex-1 max-w-[100px] md:max-w-[130px] lg:max-w-[160px]">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#C9A45C]/40 to-[#C9A45C]" />
            <span className="text-[#C9A45C] text-xs select-none leading-none">✦</span>
            <div className="h-[1px] w-4 md:w-6 bg-[#C9A45C]" />
          </div>

          {/* Centered Active Quote Text Container - FIXED STABLE HEIGHT to prevent layout shift */}
          <div className="flex-1 max-w-3xl lg:max-w-4xl text-center relative px-6 sm:px-10 h-[140px] xs:h-[120px] sm:h-[105px] md:h-[95px] flex items-center justify-center">
            {/* Top-Left Quotation Mark */}
            <span className="absolute top-1 left-0 sm:left-2 font-serif text-3xl sm:text-4xl text-[#00281B] font-bold select-none leading-none opacity-90">
              “
            </span>

            <div className="w-full relative flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeIndex}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="font-serif text-base sm:text-lg md:text-[20px] lg:text-[21px] text-[#00281B] font-normal leading-relaxed tracking-tight"
                >
                  "{current.quote}"
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Bottom-Right Quotation Mark */}
            <span className="absolute bottom-1 right-0 sm:right-2 font-serif text-3xl sm:text-4xl text-[#00281B] font-bold select-none leading-none opacity-90">
              ”
            </span>
          </div>

          {/* Right Side Gold Design Line with Diamond Star */}
          <div className="hidden sm:flex items-center gap-2 flex-1 max-w-[100px] md:max-w-[130px] lg:max-w-[160px]">
            <div className="h-[1px] w-4 md:w-6 bg-[#C9A45C]" />
            <span className="text-[#C9A45C] text-xs select-none leading-none">✦</span>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#C9A45C]/40 to-[#C9A45C]" />
          </div>
        </div>

        {/* 3. Author Name and Location (Rock-Solid Constant Height) */}
        <div className="text-center mt-3 sm:mt-4 mb-6 sm:mb-7 min-h-[52px] flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center justify-center"
            >
              <h4 className="font-sans font-semibold text-sm sm:text-base text-[#00281B] tracking-wide mb-1">
                {current.author}
              </h4>
              <p className="font-sans text-[10px] sm:text-[11px] font-semibold tracking-[0.25em] text-[#C9A45C] uppercase">
                {current.location}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 4. Horizontal Pagination Dots */}
        <div className="flex items-center justify-center gap-2.5">
          {testimonialsData.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveIndex(idx)}
              className={`transition-all duration-300 rounded-full cursor-pointer p-0 border-none outline-none ${
                idx === activeIndex
                  ? 'w-2.5 h-2.5 bg-[#00281B]'
                  : 'w-2 h-2 bg-[#00281B]/20 hover:bg-[#00281B]/40'
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>

      </Container>
    </section>
  );
};

export default Testimonials;

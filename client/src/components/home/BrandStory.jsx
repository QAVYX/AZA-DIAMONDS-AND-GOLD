import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import brandStoryImg from '@/assets/images/aza_brand_story_cinematic.png';
import Container from '@/components/common/Container';

export const BrandStory = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative bg-[#00170F] overflow-hidden border-y border-[#C9A45C]/20 py-6 sm:py-8" id="brand-story">
      {/* Seamless Continuous Deep Emerald Luxury Atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00140D] via-[#00170F] to-[#001a12] opacity-90 pointer-events-none z-0" />
      <div className="absolute -top-24 left-10 w-80 h-80 bg-[radial-gradient(circle,_rgba(216,180,106,0.12)_0%,_transparent_70%)] blur-2xl pointer-events-none" />

      {/* Main Horizontal Panoramic Banner Grid */}
      <Container className="relative z-10">
        <div className="min-h-[180px] sm:min-h-[200px] lg:min-h-[220px] grid grid-cols-1 lg:grid-cols-12 items-center py-4 sm:py-5 lg:py-6 gap-6 sm:gap-8">
          
          {/* LEFT COLUMN (45% on Desktop): Modern Editorial Story & Typography */}
          <motion.div
            className="lg:col-span-6 xl:col-span-5 flex flex-col justify-center items-start text-left z-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-20px' }}
          >
            {/* Eyebrow with Star Accent */}
            <motion.div variants={itemVariants} className="flex items-center gap-2 mb-2">
              <span className="text-[#C9A45C] text-[8px]">✦</span>
              <span className="font-sans text-[9.5px] sm:text-[10px] font-semibold tracking-[0.28em] text-[#C9A45C] uppercase">
                THE AZA DIFFERENCE
              </span>
            </motion.div>

            {/* Main Headline with Serif & Champagne Gold Accent */}
            <motion.h2
              variants={itemVariants}
              className="font-serif text-2xl sm:text-3xl lg:text-[34px] font-medium text-[#FBFDFC] leading-[1.18] tracking-tight mb-2 max-w-lg"
            >
              Crafted for <span className="font-highlight font-mango italic text-[#D8B46A]">Everyday Elegance</span>
            </motion.h2>

            {/* Supporting Description with Modern Clean Sans Typography */}
            <motion.p
              variants={itemVariants}
              className="font-sans text-xs sm:text-[12.5px] text-[#E2EFE9]/90 leading-relaxed font-light tracking-wide mb-4 max-w-md"
            >
              <span className="text-[#FBFDFC]/95 font-normal">Lightweight diamonds. Timeless gold.</span><br />
              Designed with precision, made to be treasured.
            </motion.p>

            {/* Sleek Modern Luxury CTA Button */}
            <motion.div variants={itemVariants}>
              <Link
                to="/about"
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-[#D8B46A]/60 bg-[#00170F]/60 hover:bg-[#002418] hover:border-[#D8B46A] text-[#D8B46A] font-sans text-[10px] sm:text-[10.5px] font-semibold tracking-[2px] uppercase transition-all duration-300 group shadow-sm hover:shadow-[0_4px_15px_rgba(216,180,106,0.25)] no-underline cursor-pointer"
              >
                <span>DISCOVER OUR CRAFT</span>
                <FaArrowRight className="text-[9px] text-[#D8B46A] transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN (55% on Desktop): Scaled-Down, Elegantly Proportioned Diamond Pendant Visual */}
          <div className="lg:col-span-6 xl:col-span-7 relative w-full flex items-center justify-center lg:justify-end py-2 overflow-hidden">
            <div className="relative max-w-[420px] sm:max-w-[460px] lg:max-w-[490px] w-full aspect-[16/9] sm:aspect-[16/8.8] overflow-hidden rounded-2xl border border-[#C9A45C]/35 shadow-[0_12px_35px_rgba(0,10,5,0.6)] group">
              {/* Soft subtle gradient border highlight */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#00170F]/30 via-transparent to-transparent z-10 pointer-events-none" />

              <motion.img
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                src={brandStoryImg}
                alt="AZA 18K Diamond Solitaire Pendant on Emerald Silk"
                className="w-full h-full object-cover object-center select-none transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default BrandStory;

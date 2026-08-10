import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGem, FaShieldAlt, FaAward } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import Container from '@/components/common/Container';

export const WhyChoose = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="py-10 sm:py-12 md:py-16 bg-white relative overflow-hidden text-[#18201D] border-y border-[#E9E4D9]" id="why-aza">
      {/* Soft Deep-Green Ambient Glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[550px] h-[350px] bg-[radial-gradient(circle,_rgba(6,59,45,0.05)_0%,_transparent_75%)] blur-3xl pointer-events-none z-0" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-12 xl:gap-16">
          
          {/* LEFT SIDE: Content, Typography, Refined CTA & Horizontal Trust Strip */}
          <motion.div
            className="lg:col-span-7 flex flex-col items-start text-left z-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            {/* Eyebrow */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-2.5 sm:mb-3">
              <span className="text-[#C9A45C] text-[9px]">✦</span>
              <span className="font-sans text-[11px] font-bold tracking-[0.25em] text-[#C9A45C] uppercase">
                OUR PROMISE
              </span>
              <span className="text-[#C9A45C] text-[9px]">✦</span>
            </motion.div>

            {/* High-Fashion Luxury Serif Main Heading */}
            <motion.h2
              variants={itemVariants}
              className="font-serif text-3xl sm:text-4xl md:text-[44px] lg:text-[48px] font-medium leading-[1.14] tracking-tight mb-3.5"
            >
              <span className="text-[#18201D] block">Crafted with Passion,</span>
              <span className="text-[#063B2D] font-semibold block mt-1">Made to Last.</span>
            </motion.h2>

            {/* Small Champagne-Gold Decorative Divider */}
            <motion.div variants={itemVariants} className="w-12 h-[1.5px] bg-[#C9A45C] mb-4.5" />

            {/* Clean Modern Sans-Serif Description */}
            <motion.p
              variants={itemVariants}
              className="font-sans text-xs sm:text-sm text-[#18201D]/75 font-light leading-relaxed mb-6 max-w-lg"
            >
              Every piece is a celebration of artistry and purity, designed to be cherished today and forever.
            </motion.p>

            {/* Premium Deep Forest-Green CTA Button */}
            <motion.div variants={itemVariants} className="mb-8 sm:mb-9">
              <Link
                to="/about"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 sm:px-8 sm:py-4 bg-[#063B2D] hover:bg-[#042A20] text-white font-sans font-bold text-xs sm:text-sm tracking-[0.18em] uppercase rounded-xl transition-all duration-300 shadow-md hover:shadow-lg group no-underline cursor-pointer"
              >
                <span>DISCOVER OUR STORY</span>
                <FiArrowRight size={15} className="text-white group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* REFINED HORIZONTAL LUXURY TRUST STRIP (No card backgrounds, thin champagne-gold separators) */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-0 pt-6 border-t border-[#E9E4D9] w-full"
            >
              {/* 1. Certified Diamonds */}
              <div className="flex items-center gap-3 sm:flex-1 sm:pr-3.5">
                <div className="w-8 h-8 rounded-full bg-[#063B2D]/8 text-[#063B2D] flex items-center justify-center flex-shrink-0">
                  <FaGem size={13} />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-xs text-[#18201D] leading-tight">
                    Certified Diamonds
                  </h4>
                  <p className="font-sans text-[10.5px] text-[#063B2D]/75 font-medium mt-0.5">
                    100% Genuine
                  </p>
                </div>
              </div>

              {/* Thin Champagne-Gold Vertical Divider 1 */}
              <div className="hidden sm:block w-px h-8 bg-[#C9A45C]/40 mx-2 flex-shrink-0" />

              {/* 2. Ethical Sourcing */}
              <div className="flex items-center gap-3 sm:flex-1 sm:px-3.5">
                <div className="w-8 h-8 rounded-full bg-[#063B2D]/8 text-[#063B2D] flex items-center justify-center flex-shrink-0">
                  <FaShieldAlt size={13} />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-xs text-[#18201D] leading-tight">
                    Ethical Sourcing
                  </h4>
                  <p className="font-sans text-[10.5px] text-[#063B2D]/75 font-medium mt-0.5">
                    Responsibly Sourced
                  </p>
                </div>
              </div>

              {/* Thin Champagne-Gold Vertical Divider 2 */}
              <div className="hidden sm:block w-px h-8 bg-[#C9A45C]/40 mx-2 flex-shrink-0" />

              {/* 3. BIS Hallmarked */}
              <div className="flex items-center gap-3 sm:flex-1 sm:pl-3.5">
                <div className="w-8 h-8 rounded-full bg-[#063B2D]/8 text-[#063B2D] flex items-center justify-center flex-shrink-0">
                  <FaAward size={13} />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-xs text-[#18201D] leading-tight">
                    BIS Hallmarked
                  </h4>
                  <p className="font-sans text-[10.5px] text-[#063B2D]/75 font-medium mt-0.5">
                    100% Purity
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE: Faint Oversized AZA Watermark Brand Feature */}
          <motion.div
            className="lg:col-span-5 relative w-full flex items-center justify-center lg:justify-end py-6 lg:py-0 z-10"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative w-full flex items-center justify-center lg:justify-end select-none">
              {/* Subtle Champagne Gold Accent Arch Frame */}
              <div className="absolute w-[260px] sm:w-[320px] lg:w-[360px] h-[260px] sm:h-[320px] lg:h-[360px] rounded-full border border-[#C9A45C]/20 pointer-events-none" />

              {/* Faint Oversized AZA Watermark Brand Statement */}
              <span className="font-serif text-[150px] xs:text-[180px] sm:text-[230px] md:text-[260px] lg:text-[280px] xl:text-[320px] font-bold text-[#063B2D]/[0.06] tracking-tighter leading-none select-none pointer-events-none relative z-10">
                AZA
              </span>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
};

export default WhyChoose;

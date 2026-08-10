import React from 'react';
import { motion } from 'framer-motion';
import Container from '@/components/common/Container';

export const BrandTaglineBanner = () => {
  return (
    <section className="py-14 sm:py-16 md:py-20 bg-[#FBFDFC] relative overflow-hidden border-y border-[#C9A45C]/15" id="brand-tagline-banner">
      {/* 1-2 Subtle Ambient Radial Gold Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[260px] bg-[radial-gradient(ellipse,_rgba(216,180,106,0.09)_0%,_transparent_75%)] blur-2xl pointer-events-none z-0" />

      {/* 1. Large Prominent Watermark Behind ("AZA DIAMONDS & GOLD") */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
        <span className="font-serif text-6xl sm:text-8xl md:text-9xl lg:text-[120px] xl:text-[130px] font-light tracking-[0.22em] text-[#C9A45C]/[0.09] uppercase whitespace-nowrap leading-none">
          AZA
        </span>
        <span className="font-sans text-[11px] sm:text-[14px] md:text-[17px] lg:text-[19px] font-bold tracking-[0.55em] text-[#C9A45C]/[0.12] uppercase whitespace-nowrap mt-1 sm:mt-2">
          DIAMONDS & GOLD
        </span>
      </div>

      {/* 2. Foreground Editorial Quote in Dark Emerald Green */}
      <Container className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20px' }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center justify-center max-w-3xl mx-auto"
        >
          {/* Quote Line 1 */}
          <h3 className="font-serif text-xl sm:text-2xl md:text-[26px] lg:text-[28px] text-[#00281B] font-normal leading-relaxed tracking-wide mb-1.5 sm:mb-2">
            Timeless elegance. Crafted with passion.
          </h3>

          {/* Quote Line 2 */}
          <p className="font-serif text-xl sm:text-2xl md:text-[26px] lg:text-[28px] text-[#00281B] font-normal leading-relaxed tracking-wide">
            <span className="font-bold text-[#00281B]">AZA</span> Diamonds & Gold – Where every piece tells your story.
          </p>

          {/* Minimal Champagne Gold Divider with Diamond Star */}
          <div className="flex items-center gap-3 mt-4 sm:mt-5 opacity-75">
            <span className="w-10 sm:w-16 h-[1.5px] bg-[#C9A45C]" />
            <span className="text-[#C9A45C] text-[8px] sm:text-[10px]">✦</span>
            <span className="w-10 sm:w-16 h-[1.5px] bg-[#C9A45C]" />
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default BrandTaglineBanner;

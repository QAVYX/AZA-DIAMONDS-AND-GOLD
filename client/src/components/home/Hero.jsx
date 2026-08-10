import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import heroBgSilkImg from '@/assets/images/hero_bg_silk_emerald.png';
import heroJewellerySetImg from '@/assets/images/hero_jewellery_set_exact.png';

export const Hero = () => {
  const prefersReducedMotion = useReducedMotion();

  // Character-by-character heading reveal container with refined stagger
  const headingContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.026,
        delayChildren: 0.04,
      },
    },
  };

  // Individual character reveal: translateY(8px) -> 0, opacity 0 -> 1, blur(4px) -> 0px
  const letterVariants = {
    hidden: { opacity: 0, y: 8, filter: 'blur(4px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.58,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // Gold highlighted phrase: reveals ~180-220ms after heading begins
  const goldContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.026,
        delayChildren: 0.22,
      },
    },
  };

  // Supporting paragraph: subtle fade-up (~250-320ms delay, 550ms duration)
  const paragraphVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        delay: 0.32,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // CTA button: settles into position (~150ms after paragraph, 550ms duration)
  const buttonVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        delay: 0.48,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // Product image: soft entrance (~300ms after CTA, 900ms duration, translateY: 16px, scale: 0.98 -> 1)
  const imageVariants = {
    hidden: { opacity: 0, y: 16, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.9,
        delay: 0.62,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // Helper to split text into words and animated characters while preserving natural word wrapping
  const renderAnimatedWords = (text, keyPrefix = 'char') => {
    if (prefersReducedMotion) return text;
    const words = text.split(' ');
    return words.map((word, wordIdx) => (
      <span key={`${keyPrefix}-w-${wordIdx}`} className="inline-block whitespace-nowrap">
        {word.split('').map((char, charIdx) => (
          <motion.span
            key={`${keyPrefix}-c-${wordIdx}-${charIdx}`}
            variants={letterVariants}
            className="inline-block will-change-transform"
          >
            {char}
          </motion.span>
        ))}
        {wordIdx < words.length - 1 && (
          <span className="inline-block">&nbsp;</span>
        )}
      </span>
    ));
  };

  return (
    <section
      className="relative min-h-[85vh] sm:min-h-screen bg-cover bg-center bg-no-repeat bg-[#FAFDFB] flex items-center overflow-hidden pt-[76px] xs:pt-[82px] sm:pt-28 lg:pt-24 pb-8 xs:pb-10 sm:pb-14 lg:pb-16 text-[#00140D]"
      id="hero"
      style={{ backgroundImage: `url(${heroBgSilkImg})` }}
    >
      {/* Subtle Ambient Gold & Soft Emerald Glow for Clean Luxury White Aesthetic */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[300px] bg-[radial-gradient(ellipse,_rgba(216,180,106,0.12)_0%,_transparent_70%)] blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[radial-gradient(circle,_rgba(1,39,27,0.04)_0%,_transparent_70%)] blur-3xl pointer-events-none z-0" />

      {/* Refined Luxury Container */}
      <div className="w-full max-w-[1520px] mx-auto px-4 xs:px-5 sm:px-10 lg:px-14 xl:px-20 2xl:px-24 relative z-10">
        {/* Two-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-4 xs:gap-5 sm:gap-8 lg:gap-8 xl:gap-12 overflow-visible">
          
          {/* Left Side: Headline, Subtitle, CTAs */}
          <div className="lg:col-span-6 text-left flex flex-col items-start z-10 max-w-xl xl:max-w-2xl">
            {/* Main Hero Heading with Letter-by-Letter Entrance Animation */}
            <motion.h1
              variants={prefersReducedMotion ? undefined : headingContainerVariants}
              initial={prefersReducedMotion ? false : "hidden"}
              animate="visible"
              className="font-serif font-medium text-[34px] xs:text-[38px] sm:text-[46px] md:text-[52px] lg:text-[50px] xl:text-[58px] 2xl:text-[64px] leading-[1.12] xs:leading-[1.10] tracking-tight text-[#00140D] mb-3 xs:mb-3.5 sm:mb-5 max-w-lg xl:max-w-xl"
            >
              <span className="block">
                {renderAnimatedWords("Diamonds & Gold,", "l1")}
              </span>
              <span className="block mt-0.5 sm:mt-1">
                {renderAnimatedWords("Crafted for", "l2")}
                <span className="inline-block">&nbsp;</span>
                <motion.span
                  variants={prefersReducedMotion ? undefined : goldContainerVariants}
                  className="font-highlight font-mango italic text-[#D8B46A] inline-block"
                >
                  {renderAnimatedWords("Every Moment.", "gold")}
                </motion.span>
              </span>
            </motion.h1>

            {/* Subheadline Text (Smooth Fade-Up) */}
            <motion.p
              variants={prefersReducedMotion ? undefined : paragraphVariants}
              initial={prefersReducedMotion ? false : "hidden"}
              animate="visible"
              className="font-sans font-normal text-[12.5px] xs:text-[13.5px] sm:text-[15px] lg:text-[16px] leading-relaxed text-[#01271B]/85 max-w-[340px] xs:max-w-[380px] sm:max-w-lg mb-5 xs:mb-6 sm:mb-8"
            >
              Refined 18K Diamond, 22K & 18K Gold jewellery, designed to bring effortless elegance to every day.
            </motion.p>

            {/* Primary Action Button (Settle Entrance Animation) */}
            <motion.div
              variants={prefersReducedMotion ? undefined : buttonVariants}
              initial={prefersReducedMotion ? false : "hidden"}
              animate="visible"
              className="pt-0 sm:pt-0.5"
            >
              <motion.a
                href="/collections"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="inline-flex items-center justify-center gap-2.5 xs:gap-3 bg-[#01271B] hover:bg-[#0F4A38] text-white hover:text-white rounded-xl px-6 xs:px-7 sm:px-8 py-3 xs:py-3.5 sm:py-4 font-sans font-semibold text-[11px] xs:text-xs sm:text-sm tracking-[1.8px] sm:tracking-[2px] uppercase transition-all duration-300 no-underline shadow-[0_8px_20px_rgba(0,20,13,0.22)] hover:shadow-[0_12px_28px_rgba(0,20,13,0.32)] border border-[#D8B46A]/40 group cursor-pointer"
              >
                <span>EXPLORE COLLECTIONS</span>
                <FaArrowRight className="text-xs text-white transition-transform duration-300 group-hover:translate-x-1.5" />
              </motion.a>
            </motion.div>
          </div>

          {/* Right Side: Prominently Scaled Jewellery Product Display Set (Larger & Shifted Downwards on Mobile) */}
          <motion.div
            variants={prefersReducedMotion ? undefined : imageVariants}
            initial={prefersReducedMotion ? false : "hidden"}
            animate="visible"
            className="lg:col-span-6 relative w-full flex items-center justify-center lg:justify-end mt-7 xs:mt-8 sm:mt-10 lg:mt-0 overflow-visible self-end"
          >
            <div className="relative w-full flex items-center justify-center lg:justify-end -mx-3 xs:-mx-5 sm:mx-0">
              {/* Soft Warm Ivory Glow behind Product */}
              <div className="absolute w-[120%] h-[120%] bg-[radial-gradient(circle,_rgba(216,180,106,0.32)_0%,_transparent_68%)] blur-3xl pointer-events-none" />

              {/* Extra Large Product Set Image (Enlarged and shifted downwards on mobile view) */}
              <img
                src={heroJewellerySetImg}
                alt="AZA Fine Jewellery Set in 18K Diamond and Gold"
                className="w-[142%] xs:w-[136%] sm:w-[112%] md:w-[102%] lg:w-[155%] xl:w-[170%] 2xl:w-[182%] h-auto max-h-[620px] sm:max-h-[720px] lg:max-h-[880px] object-contain block mx-auto lg:ml-auto scale-[1.28] xs:scale-[1.22] sm:scale-100 lg:scale-[1.38] lg:translate-x-8 xl:translate-x-12 translate-y-6 xs:translate-y-8 sm:translate-y-10 lg:translate-y-14 filter drop-shadow-[0_24px_50px_rgba(0,20,13,0.25)] lg:drop-shadow-[0_45px_75px_rgba(0,20,13,0.3)]"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

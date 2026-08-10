import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlay, FaTimes } from 'react-icons/fa';
import Container from '@/components/common/Container';

// Import the exact provided background and right-side jewelry product image
import promiseBg from '@/assets/images/aza_promise_bg.png';
import promiseRing from '@/assets/images/aza_promise_ring_cropped.png';

export const AzaPromise = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      className="relative bg-[#00170F] bg-cover bg-center bg-no-repeat min-h-[680px] sm:min-h-[720px] lg:min-h-[760px] xl:min-h-[800px] flex items-center overflow-hidden border-y border-[#C9A45C]/20"
      id="aza-promise"
      style={{ backgroundImage: `url(${promiseBg})` }}
    >
      <Container className="relative z-10 w-full max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          
          {/* LEFT COLUMN (Dark Emerald Area): Editorial Story, Headline & Play CTA */}
          <motion.div
            className="lg:col-span-6 xl:col-span-6 flex flex-col items-start text-left z-20 max-w-xl"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-30px' }}
          >
            {/* Eyebrow with Diamond Sparkle Accents */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-3 sm:mb-4">
              <span className="text-[#C9A45C] text-[9px]">✦</span>
              <span className="font-sans text-[10.5px] sm:text-[11.5px] font-semibold tracking-[0.28em] text-[#C9A45C] uppercase">
                THE AZA PROMISE
              </span>
              <span className="text-[#C9A45C] text-[9px]">✦</span>
            </motion.div>

            {/* Main Heading: "Crafted with" in White, "Purpose." in Elegant Gold */}
            <motion.h2
              variants={itemVariants}
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[52px] xl:text-[56px] font-medium leading-[1.12] tracking-tight text-[#FBFDFC] mb-4 sm:mb-5"
            >
              Crafted with <br />
              <span className="font-highlight font-mango italic text-[#D8B46A]">Purpose.</span>
            </motion.h2>

            {/* Delicate Gold Divider */}
            <motion.div variants={itemVariants} className="w-12 h-[1.5px] bg-[#D8B46A] mb-5 sm:mb-6" />

            {/* Emotional Brand Promise Description */}
            <motion.p
              variants={itemVariants}
              className="font-sans text-sm sm:text-base lg:text-[16.5px] text-[#E2EFE9]/90 leading-relaxed font-light mb-8 sm:mb-10 max-w-lg"
            >
              Every AZA piece is a celebration of artistry, purity and emotion. Made to be passed on, cherished forever.
            </motion.p>

            {/* Minimal Gold-Outlined Circular Play Button CTA */}
            <motion.div variants={itemVariants}>
              <button
                type="button"
                onClick={() => setIsVideoOpen(true)}
                className="inline-flex items-center gap-4 group cursor-pointer bg-transparent border-none p-0 outline-none text-left"
                aria-label="Watch Our Story Video"
              >
                {/* Gold Circular Play Icon Button */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-[#D8B46A] bg-[#00170F]/60 backdrop-blur-md flex items-center justify-center text-[#D8B46A] shadow-[0_6px_25px_rgba(216,180,106,0.25)] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#002418] group-hover:border-[#E8D7B5] group-hover:shadow-[0_10px_35px_rgba(216,180,106,0.4)]">
                  <FaPlay className="text-xs sm:text-sm ml-1 text-[#D8B46A] group-hover:text-[#E8D7B5] transition-colors" />
                </div>
                
                {/* CTA Label with Subtitle */}
                <div className="flex flex-col">
                  <span className="font-sans text-xs sm:text-[13px] font-semibold tracking-[2px] uppercase text-[#FBFDFC] group-hover:text-[#D8B46A] transition-colors">
                    WATCH OUR STORY
                  </span>
                  <span className="font-sans text-[11px] text-[#E2EFE9]/60 font-light tracking-wider mt-0.5">
                    Experience our craftsmanship
                  </span>
                </div>
              </button>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN (Ivory & Geometric Pattern Area): Arched Pedestal Jewelry Visual */}
          <motion.div
            className="lg:col-span-6 xl:col-span-6 flex items-center justify-center lg:justify-end z-20 pt-6 lg:pt-0"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative flex items-center justify-center">
              {/* Subtle ambient aura beneath the white circular podium */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-12 bg-black/10 blur-xl rounded-full pointer-events-none" />

              {/* Jewelry Image resting naturally in the ivory area */}
              <motion.img
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                src={promiseRing}
                alt="AZA Diamond Flower Ring on Arched Emerald Pedestal"
                className="w-[300px] sm:w-[360px] md:w-[410px] lg:w-[450px] xl:w-[490px] h-auto object-contain select-none filter drop-shadow-[0_15px_35px_rgba(0,0,0,0.12)] transition-transform duration-500"
              />
            </div>
          </motion.div>

        </div>
      </Container>

      {/* Cinematic Brand Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-xl p-4 sm:p-6"
            onClick={() => setIsVideoOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-4xl bg-[#00170F] border border-[#D8B46A]/40 rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.8)]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-[#D8B46A]/20 bg-[#00140D]">
                <div className="flex items-center gap-2">
                  <span className="text-[#D8B46A] text-xs">✦</span>
                  <span className="font-sans text-xs font-semibold tracking-widest text-[#D8B46A] uppercase">
                    THE AZA PROMISE — BRAND FILM
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsVideoOpen(false)}
                  className="w-8 h-8 rounded-full border border-white/20 text-white/80 hover:text-white hover:border-white/50 flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Close video modal"
                >
                  <FaTimes className="text-xs" />
                </button>
              </div>

              {/* Video Player / Showcase Container */}
              <div className="relative aspect-video w-full bg-[#00120B] flex flex-col items-center justify-center p-8 text-center">
                <div className="w-20 h-20 rounded-full border border-[#D8B46A] bg-[#00170F]/80 flex items-center justify-center text-[#D8B46A] mb-4 shadow-[0_0_30px_rgba(216,180,106,0.3)] animate-pulse">
                  <FaPlay className="text-xl ml-1 text-[#D8B46A]" />
                </div>
                <h3 className="font-serif text-2xl text-white mb-2 font-normal">
                  Artistry in Motion
                </h3>
                <p className="text-xs text-[#E2EFE9]/70 max-w-md">
                  A cinematic look inside our Kannur luxury showroom and master craftsmanship.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AzaPromise;

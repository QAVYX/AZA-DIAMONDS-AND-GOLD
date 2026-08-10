import React from 'react';
import { motion } from 'framer-motion';
import Container from '@/components/common/Container';
import showroomImg from '@/assets/images/showroom_about.png';
import emeraldSilkBg from '@/assets/images/emerald_silk_texture.png';

export const About = () => {
  return (
    <section
      className="bg-[#00170F] bg-cover bg-center bg-no-repeat py-14 sm:py-18 md:py-22 text-white relative overflow-hidden border-y border-[#C9A45C]/20"
      id="about"
      style={{ backgroundImage: `url(${emeraldSilkBg})` }}
    >
      {/* Subtle Dark Emerald Tint Overlay for Rich Contrast */}
      <div className="absolute inset-0 bg-[#00140D]/40 pointer-events-none" />

      {/* Ambient Lighting Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none z-0 opacity-20 bg-gradient-to-bl from-[#D8B46A]/20 to-transparent blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] pointer-events-none z-0 opacity-25 bg-gradient-to-tr from-white/10 to-transparent blur-3xl" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 sm:gap-12 lg:gap-16">
          
          {/* Text Content Reveal on Scroll */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl"
          >
            <div className="inline-flex items-center gap-2 mb-3.5">
              <span className="text-[#D8B46A] text-[9px]">✦</span>
              <span className="font-sans text-[10px] sm:text-[11px] font-semibold tracking-[0.25em] text-[#F3F6F7] uppercase">
                OUR LUXURY SHOWROOM
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-medium text-white mb-4 sm:mb-6 leading-[1.14]">
              Welcome to <span className="font-highlight font-mango italic text-[#D8B46A]">AZA Diamonds & Gold</span>
            </h2>

            <div className="w-16 h-px bg-white/25 mb-5 sm:mb-6" />

            <p className="font-sans text-sm sm:text-base leading-relaxed text-white/90 mb-6 sm:mb-8 font-light">
              AZA Diamonds and Gold is a trusted jewellery destination in Global Village, Kannur, offering a curated collection of diamond and gold ornaments in 18K Diamond, 22K Gold, and 18K Gold purity. Our jewellery is crafted with precision, passion, and a promise of purity.
            </p>

            <div className="flex">
              <motion.a
                href="/about"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="inline-flex items-center justify-center px-7 py-3.5 sm:px-8 sm:py-4 border-2 border-white bg-[#062B1E] text-white font-sans font-bold text-xs sm:text-sm tracking-[0.18em] uppercase rounded-xl hover:bg-white hover:text-[#062B1E] transition-all duration-300 no-underline shadow-md cursor-pointer"
              >
                KNOW MORE ABOUT US
              </motion.a>
            </div>
          </motion.div>

          {/* Showroom Image Reveal with Soft Scale on Scroll */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="relative rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.5)] border border-white/15 hover:border-[#D8B46A]/40 transition-colors duration-300 group"
          >
            <img
              src={showroomImg}
              alt="AZA Diamonds & Gold Showroom Interior, Global Village, Kannur"
              className="w-full h-full max-h-[320px] sm:max-h-[400px] md:max-h-[460px] object-cover block transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
            />
            <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none" />
          </motion.div>

        </div>
      </Container>
    </section>
  );
};

export default About;

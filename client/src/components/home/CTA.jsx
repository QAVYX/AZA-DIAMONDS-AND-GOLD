import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import brideConsultationImg from '@/assets/images/aza_consultation_bride_luxury.jpg';
import Container from '@/components/common/Container';
import { BUILD_WHATSAPP_LINK } from '@/utils/constants';
import emeraldSilkBg from '@/assets/images/emerald_silk_texture.png';

export const CTA = () => {
  return (
    <section
      className="py-12 sm:py-16 md:py-20 bg-[#00170F] bg-cover bg-center bg-no-repeat relative overflow-hidden text-white border-y border-[#C9A45C]/20"
      id="contact-cta"
      style={{ backgroundImage: `url(${emeraldSilkBg})` }}
    >
      {/* Subtle Dark Emerald Tint Overlay */}
      <div className="absolute inset-0 bg-[#00140D]/40 pointer-events-none" />

      {/* Gold Ambient Lighting Accents */}
      <div className="absolute top-0 left-1/3 -translate-x-1/2 w-[550px] h-[280px] bg-[radial-gradient(ellipse,_rgba(216,180,106,0.12)_0%,_transparent_70%)] blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] pointer-events-none z-0 opacity-20 bg-gradient-to-tl from-[#D8B46A]/20 to-transparent blur-3xl" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 sm:gap-10 lg:gap-12 xl:gap-14">
          
          {/* 1. LEFT SIDE: Consultation Image (Scroll Entrance) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/15 hover:border-[#D8B46A]/40 transition-colors duration-300 group"
          >
            <img
              src={brideConsultationImg}
              alt="AZA Diamonds & Gold — Master Jewellery Consultation"
              className="w-full h-auto max-h-[360px] sm:max-h-[440px] md:max-h-[480px] object-cover block transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
            />
            <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none" />
          </motion.div>

          {/* 2. RIGHT SIDE: Text Content & WhatsApp CTA (Scroll Entrance) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
            className="lg:col-span-6 flex flex-col items-start text-left max-w-xl lg:pl-2"
          >
            {/* Main Headline */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-[48px] font-medium text-white mb-3 sm:mb-4 leading-[1.14] tracking-tight">
              Let's Find Your <br />
              <span className="font-highlight font-mango italic text-[#D8B46A]">Perfect Jewellery</span>
            </h2>

            <div className="w-14 h-px bg-[#D8B46A]/60 mb-4 sm:mb-5" />

            <p className="font-sans text-sm sm:text-base leading-relaxed text-white/90 mb-6 sm:mb-8 font-light">
              Connect with our master jewellery experts on WhatsApp for custom designs, gold purity certifications, pricing & bespoke orders.
            </p>

            <div className="flex">
              <motion.a
                href={BUILD_WHATSAPP_LINK('Hi AZA Team, I would like to consult with a master jewellery expert.')}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:px-8 sm:py-4 border-2 border-white bg-[#062B1E] text-white font-sans font-bold text-xs sm:text-sm tracking-[0.18em] uppercase rounded-xl hover:bg-white hover:text-[#062B1E] transition-all duration-300 no-underline shadow-md group cursor-pointer"
              >
                <FaWhatsapp className="text-base text-white group-hover:text-[#062B1E] transition-colors duration-300 group-hover:scale-110" />
                <span className="text-white group-hover:text-[#062B1E] transition-colors duration-300">CHAT ON WHATSAPP</span>
              </motion.a>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
};

export default CTA;

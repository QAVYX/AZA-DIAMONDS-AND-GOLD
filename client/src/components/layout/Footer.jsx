import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaInstagram, FaFacebookF, FaMapMarkerAlt, FaPhoneAlt, FaChevronRight } from 'react-icons/fa';
import Container from '@/components/common/Container';
import logoOfficialImg from '@/assets/images/aza_official_logo.png';

export const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <footer
      className="bg-[#01271B] bg-gradient-to-b from-[#01271B] via-[#063326] to-[#00140D] text-white pt-14 sm:pt-20 pb-10 sm:pb-14 relative overflow-hidden luxury-dark-pattern border-t border-[#C9A45C]/25"
      id="contact"
    >
      {/* Soft Ambient Background Lighting Overlays */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] pointer-events-none z-0 opacity-25 bg-gradient-to-br from-white/10 to-transparent blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] pointer-events-none z-0 opacity-20 bg-gradient-to-tl from-[#D8B46A]/20 to-transparent blur-3xl" />

      <Container className="relative z-10">
        {/* Modern Responsive Grid (Logo block stays top-aligned, right sections padded downwards for perfect balance) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-20px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8 mb-12 sm:mb-16 items-start"
        >
          
          {/* Col 1: Brand Logo (Enlarged) & Tagline (Span 4) */}
          <motion.div variants={itemVariants} className="lg:col-span-4 flex flex-col items-start pr-0 lg:pr-6">
            <Link to="/" className="inline-block mb-3 no-underline">
              <img
                src={logoOfficialImg}
                alt="AZA Diamonds & Gold Official Logo"
                className="h-[68px] sm:h-[80px] md:h-[92px] lg:h-[104px] w-auto object-contain transition-transform duration-300 hover:scale-105"
              />
            </Link>

            <p className="font-sans text-xs sm:text-sm text-white/75 leading-relaxed mb-6 max-w-sm font-light">
              Crafting timeless jewellery with purity, passion & perfection. Elegance that lasts forever.
            </p>

            {/* Social Media Outlined Glass Icon Buttons */}
            <div className="flex items-center gap-3">
              <motion.a
                href="https://www.instagram.com/aza_diamondsandgold"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className="w-10 h-10 rounded-xl border border-white/20 bg-white/5 flex items-center justify-center text-white hover:bg-white/15 hover:border-white/40 transition-all duration-300 no-underline shadow-xs"
              >
                <FaInstagram className="text-sm" />
              </motion.a>
              <motion.a
                href="https://www.facebook.com/share/189yRoZ8JG/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className="w-10 h-10 rounded-xl border border-white/20 bg-white/5 flex items-center justify-center text-white hover:bg-white/15 hover:border-white/40 transition-all duration-300 no-underline shadow-xs"
              >
                <FaFacebookF className="text-xs" />
              </motion.a>
            </div>
          </motion.div>

          {/* Col 2 & 3: Quick Links & Collections (Span 4) - Pushed downwards */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-6 sm:gap-8 w-full pt-0 lg:pt-12">
            {/* Quick Links */}
            <div>
              <h4 className="font-sans font-semibold text-[11px] sm:text-[12px] tracking-[2px] text-white uppercase mb-3">
                QUICK LINKS
              </h4>
              <div className="w-8 h-px bg-white/30 mb-4" />

              <ul className="list-none p-0 m-0 space-y-3 font-sans text-xs sm:text-sm">
                <li>
                  <Link to="/" className="text-white/80 hover:text-white transition-colors no-underline flex items-center justify-between group max-w-[140px]">
                    <span>Home</span>
                    <FaChevronRight className="text-[9px] text-white/50 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                  </Link>
                </li>
                <li>
                  <Link to="/collections" className="text-white/80 hover:text-white transition-colors no-underline flex items-center justify-between group max-w-[140px]">
                    <span>Collections</span>
                    <FaChevronRight className="text-[9px] text-white/50 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-white/80 hover:text-white transition-colors no-underline flex items-center justify-between group max-w-[140px]">
                    <span>About Us</span>
                    <FaChevronRight className="text-[9px] text-white/50 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                  </Link>
                </li>
                <li>
                  <Link to="/#why-aza" className="text-white/80 hover:text-white transition-colors no-underline flex items-center justify-between group max-w-[140px]">
                    <span>Why AZA</span>
                    <FaChevronRight className="text-[9px] text-white/50 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-white/80 hover:text-white transition-colors no-underline flex items-center justify-between group max-w-[140px]">
                    <span>Contact Us</span>
                    <FaChevronRight className="text-[9px] text-white/50 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Collections */}
            <div>
              <h4 className="font-sans font-semibold text-[11px] sm:text-[12px] tracking-[2px] text-white uppercase mb-3">
                COLLECTIONS
              </h4>
              <div className="w-8 h-px bg-white/30 mb-4" />

              <ul className="list-none p-0 m-0 space-y-3 font-sans text-xs sm:text-sm">
                <li>
                  <Link to="/collections?filter=22k-gold" className="text-white/80 hover:text-white transition-colors no-underline flex items-center justify-between group max-w-[140px]">
                    <span>22K Gold</span>
                    <FaChevronRight className="text-[9px] text-white/50 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                  </Link>
                </li>
                <li>
                  <Link to="/collections?filter=18k-diamond" className="text-white/80 hover:text-white transition-colors no-underline flex items-center justify-between group max-w-[140px]">
                    <span>18K Diamond</span>
                    <FaChevronRight className="text-[9px] text-white/50 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                  </Link>
                </li>
                <li>
                  <Link to="/collections?filter=18k-gold" className="text-white/80 hover:text-white transition-colors no-underline flex items-center justify-between group max-w-[140px]">
                    <span>18K Gold</span>
                    <FaChevronRight className="text-[9px] text-white/50 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Col 4: Modern Glassmorphic Showroom Card (Span 4) - Pushed downwards */}
          <div className="lg:col-span-4 bg-[#012E20]/60 border border-white/20 rounded-2xl p-6 sm:p-7 backdrop-blur-md shadow-lg flex flex-col justify-between w-full mt-0 lg:mt-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white shrink-0">
                  <FaMapMarkerAlt className="text-xs" />
                </div>
                <h4 className="font-sans font-semibold text-[11px] sm:text-[12px] tracking-[2px] text-white uppercase">
                  SHOWROOM LOCATION
                </h4>
              </div>

              <strong className="font-sans font-semibold text-base text-white block mb-1">AZA Diamonds & Gold</strong>
              <p className="font-sans text-xs text-white/80 leading-relaxed font-light mb-4">
                Global Village, Kannur, <br />
                Kerala, India
              </p>
            </div>

            <div className="pt-4 border-t border-white/15">
              <span className="font-sans text-[10px] text-white/60 uppercase tracking-wider block mb-2.5">
                FOR ENQUIRIES & APPOINTMENTS
              </span>
              <a
                href="tel:+919847555916"
                className="font-sans font-semibold text-sm sm:text-base text-white hover:text-white/90 transition-colors no-underline inline-flex items-center gap-3 group"
              >
                <div className="w-8 h-8 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#00140D] transition-colors shrink-0">
                  <FaPhoneAlt className="text-xs" />
                </div>
                <span>+91 98475 55916</span>
              </a>
            </div>
          </div>

        </motion.div>

        {/* Bottom Bar Divider & Copyright */}
        <div className="border-t border-white/15 pt-8 flex flex-col items-center justify-center">
          <p className="font-sans text-xs text-white/70 tracking-wider mb-1.5 text-center">
            © 2026 AZA Diamonds & Gold. All Rights Reserved.
          </p>
          <p className="font-sans text-[11px] text-white/45 tracking-wider mb-5 text-center font-light">
            Developed by <a href="https://qavyx.com" target="_blank" rel="noopener noreferrer" className="text-white/45 hover:text-white/75 transition-colors no-underline">qavyx.com</a>
          </p>

          {/* Central Silver Star Emblem */}
          <div className="flex items-center gap-3">
            <div className="w-20 sm:w-32 h-px bg-white/20" />
            <div className="text-white/70 text-xs flex items-center gap-1.5">
              <span>✦</span>
              <span>✦</span>
              <span>✦</span>
            </div>
            <div className="w-20 sm:w-32 h-px bg-white/20" />
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

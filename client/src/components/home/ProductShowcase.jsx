import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Container from '@/components/common/Container';
import emeraldSilkBg from '@/assets/images/emerald_silk_texture.png';

// Import the 5 showcase product assets
import showcase18kGold from '@/assets/images/aza_showcase_18k_gold.jpg';
import showcase18kDiamond from '@/assets/images/aza_showcase_18k_diamond.jpg';
import showcase22kGold from '@/assets/images/aza_showcase_22k_gold.jpg';
import showcase9kGold from '@/assets/images/aza_showcase_9k_gold.png';
import showcasePlatinum from '@/assets/images/aza_showcase_platinum.png';
import showcaseTimelessElegance from '@/assets/images/aza_showcase_timeless_elegance.png';

export const ProductShowcase = () => {
  const collectionCards = [
    {
      id: '18k-gold',
      title: '18K GOLD',
      subtitle: 'COLLECTION',
      img: showcase18kGold,
      alt: 'AZA 18K Gold Collection',
      link: '/collections?filter=18k-gold',
    },
    {
      id: '18k-diamond',
      title: '18K DIAMOND',
      subtitle: 'COLLECTION',
      img: showcase18kDiamond,
      alt: 'AZA 18K Diamond Collection',
      link: '/collections?filter=18k-diamond',
    },
    {
      id: '22k-gold',
      title: '22K GOLD',
      subtitle: 'COLLECTION',
      img: showcase22kGold,
      alt: 'AZA 22K Gold Collection',
      link: '/collections?filter=22k-gold',
    },
    {
      id: '9k-gold',
      title: '9K GOLD',
      subtitle: 'COLLECTION',
      img: showcase9kGold,
      alt: 'AZA 9K Gold Collection',
      link: '/collections?filter=9k-gold',
    },
    {
      id: 'platinum',
      title: 'PLATINUM',
      subtitle: 'COLLECTION',
      img: showcasePlatinum,
      alt: 'AZA Platinum Collection',
      link: '/collections?filter=platinum',
    },
  ];

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
    hidden: { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      className="relative bg-[#00170F] bg-cover bg-center bg-no-repeat py-10 sm:py-16 md:py-20 overflow-hidden text-white border-y border-[#C9A45C]/20"
      id="product-showcase"
      style={{ backgroundImage: `url(${emeraldSilkBg})` }}
    >
      {/* Subtle Dark Emerald Tint Overlay for Rich Contrast */}
      <div className="absolute inset-0 bg-[#00140D]/40 pointer-events-none" />

      {/* Ambient Lighting Accents */}
      <div className="absolute top-0 left-0 w-[550px] h-[550px] pointer-events-none z-0 opacity-25 bg-gradient-to-br from-white/10 to-transparent blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] pointer-events-none z-0 opacity-20 bg-gradient-to-tl from-[#D8B46A]/20 to-transparent blur-3xl" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[450px] h-[450px] bg-[radial-gradient(circle,_rgba(216,180,106,0.12)_0%,_transparent_70%)] blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-6 xl:gap-8 items-center">
          
          {/* LEFT COLUMN: Headline, Description & EXPLORE COLLECTION Button */}
          <motion.div
            className="lg:col-span-4 xl:col-span-3 flex flex-col items-center lg:items-start text-center lg:text-left z-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            {/* Small Eyebrow with Gold Line and Diamond */}
            <motion.div variants={itemVariants} className="flex items-center gap-2 mb-2 sm:mb-3">
              <span className="font-sans text-[10px] sm:text-[11px] font-bold tracking-[0.25em] text-[#D8B46A] uppercase">
                OUR COLLECTION
              </span>
              <span className="w-6 h-[1px] bg-[#D8B46A]/60" />
              <span className="text-[#D8B46A] text-[8px]">◇</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              variants={itemVariants}
              className="font-serif text-2xl sm:text-3xl lg:text-3xl xl:text-[38px] font-medium leading-[1.16] tracking-tight text-[#FBFDFC] mb-2 sm:mb-3"
            >
              Timeless Beauty, <br className="hidden sm:inline" />
              Crafted in <span className="font-highlight font-mango italic text-[#D8B46A]">Perfection</span>
            </motion.h2>

            {/* Small Gold Divider */}
            <motion.div variants={itemVariants} className="w-10 h-[1.5px] bg-[#D8B46A] mb-3 sm:mb-4" />

            {/* Subtitle Description */}
            <motion.p
              variants={itemVariants}
              className="font-sans text-xs sm:text-[13px] text-[#E2EFE9]/90 leading-relaxed font-light mb-5 sm:mb-7 max-w-sm"
            >
              Discover our exclusive range of gold and diamond jewellery, crafted with precision and passion for every special moment.
            </motion.p>

            {/* CTA Button with Arrow (Desktop Only - on Mobile it is placed in the 6th grid card slot below) */}
            <motion.div variants={itemVariants} className="hidden lg:block">
              <Link
                to="/collections"
                className="group inline-flex items-center justify-center px-6 sm:px-7 py-3 border border-white/80 text-white font-sans font-semibold text-[10.5px] sm:text-xs tracking-[2px] uppercase rounded-md hover:bg-white hover:text-[#01271B] transition-all duration-300 no-underline shadow-sm cursor-pointer"
              >
                <span>EXPLORE COLLECTION</span>
                <svg
                  className="w-3.5 h-3.5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: 5 Luxury Collection Cards on Desktop, 6 Grid Items (5 Cards + 1 Promo Card) on Mobile */}
          <motion.div
            className="lg:col-span-8 xl:col-span-9 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4 lg:gap-3 xl:gap-4 mt-4 lg:mt-0"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            {collectionCards.map((card) => (
              <motion.div
                key={card.id}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="group flex flex-col justify-between cursor-pointer w-full"
              >
                <Link to={card.link} className="block w-full no-underline">
                  <div className="relative w-full aspect-[3/3.8] rounded-xl sm:rounded-2xl border border-white/20 group-hover:border-white/70 bg-[#00170F] overflow-hidden shadow-[0_10px_25px_rgba(0,0,0,0.45)] group-hover:shadow-[0_20px_45px_rgba(0,0,0,0.7)] transition-all duration-300">
                    <img
                      src={card.img}
                      alt={card.alt}
                      className="w-full h-full object-cover object-center select-none transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-106"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#00140D]/40 pointer-events-none" />
                  </div>

                  <div className="pt-2.5 sm:pt-3.5 flex flex-col items-center justify-center text-center">
                    <h3 className="font-serif lining-nums text-xs sm:text-sm lg:text-sm xl:text-base font-semibold text-[#FBFDFC] group-hover:text-white tracking-[0.1em] sm:tracking-[0.12em] leading-snug uppercase mb-1 transition-colors duration-300">
                      {card.title}
                    </h3>
                    <div className="flex items-center justify-center gap-1.5 sm:gap-2">
                      <span className="font-sans text-[8.5px] sm:text-[9.5px] font-semibold tracking-[0.16em] leading-none text-[#D8B46A] group-hover:text-white uppercase transition-colors duration-300">
                        {card.subtitle}
                      </span>
                      <span className="w-3 sm:w-4 h-[1.5px] bg-[#D8B46A] group-hover:bg-white transition-colors duration-300" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}

            {/* 6th Slot Card (MOBILE ONLY): Fills the empty gap in the 2-column mobile grid with luxury image card */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden group flex flex-col justify-between cursor-pointer w-full"
            >
              <Link to="/collections" className="block w-full h-full no-underline">
                <div className="relative w-full aspect-[3/3.8] rounded-xl sm:rounded-2xl border border-white/30 group-hover:border-[#D8B46A] bg-[#00170F] overflow-hidden shadow-[0_10px_25px_rgba(0,0,0,0.45)] group-hover:shadow-[0_20px_45px_rgba(0,0,0,0.7)] transition-all duration-300">
                  {/* Luxury Background Image (Emerald Velvet & Flowers) */}
                  <img
                    src={showcaseTimelessElegance}
                    alt="AZA Timeless Elegance"
                    className="absolute inset-0 w-full h-full object-cover object-center select-none transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-106"
                  />
                  {/* Dark Emerald Gradient Overlay for Text Legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#00170F] via-[#00170F]/50 to-[#00170F]/20 pointer-events-none" />

                  {/* Card Content Overlay */}
                  <div className="relative z-10 p-4 xs:p-4.5 sm:p-5 flex flex-col justify-between h-full w-full">
                    {/* Top Text Content */}
                    <div className="pt-0.5">
                      <h3 className="font-serif text-base xs:text-lg sm:text-xl font-semibold text-[#D8B46A] tracking-[0.08em] leading-[1.18] uppercase mb-1 drop-shadow-sm">
                        TIMELESS<br />ELEGANCE
                      </h3>
                      <p className="font-serif italic text-white/95 text-[11px] xs:text-xs sm:text-sm font-normal leading-snug mb-2 drop-shadow-sm">
                        Crafted for<br />Every Moment
                      </p>
                      {/* Small Gold Divider */}
                      <div className="w-8 sm:w-10 h-[1.5px] bg-[#D8B46A]" />
                    </div>

                    {/* Bottom Action Button */}
                    <div className="mt-auto pt-2">
                      <div className="inline-flex items-center justify-center w-full px-3 py-2 sm:py-2.5 border border-[#D8B46A] bg-[#00170F]/60 backdrop-blur-xs text-[#D8B46A] group-hover:bg-[#D8B46A] group-hover:text-[#00170F] font-sans font-semibold text-[9px] xs:text-[9.5px] sm:text-[10.5px] tracking-[1.5px] uppercase rounded-md transition-all duration-300 shadow-sm">
                        <span>EXPLORE MORE</span>
                        <svg
                          className="w-3 h-3 ml-1.5 transition-transform duration-300 group-hover:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
};

export default ProductShowcase;


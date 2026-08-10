import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Container from '@/components/common/Container';
import emeraldSilkBg from '@/assets/images/emerald_silk_texture.png';

// Import the 3 exact showcase product assets
import showcase18kGold from '@/assets/images/aza_showcase_18k_gold.jpg';
import showcase18kDiamond from '@/assets/images/aza_showcase_18k_diamond.jpg';
import showcase22kGold from '@/assets/images/aza_showcase_22k_gold.jpg';

export const ProductShowcase = () => {
  const collectionCards = [
    {
      id: '18k-gold',
      title: '18K GOLD',
      subtitle: 'COLLECTION',
      img: showcase18kGold,
      alt: 'AZA 18K Gold Diamond Link Bracelet Collection',
      link: '/collections',
    },
    {
      id: '18k-diamond',
      title: '18K DIAMOND',
      subtitle: 'COLLECTION',
      img: showcase18kDiamond,
      alt: 'AZA 18K Diamond Solitaire Tennis Necklace Collection',
      link: '/collections',
    },
    {
      id: '22k-gold',
      title: '22K GOLD',
      subtitle: 'COLLECTION',
      img: showcase22kGold,
      alt: 'AZA 22K Traditional Gold Sunburst Bracelet Collection',
      link: '/collections',
    },
  ];

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
    hidden: { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      className="relative bg-[#00170F] bg-cover bg-center bg-no-repeat py-10 sm:py-18 md:py-22 overflow-hidden text-white border-y border-[#C9A45C]/20"
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 xl:gap-14 items-center">
          
          {/* LEFT COLUMN: Headline, Description & EXPLORE COLLECTION Button */}
          <motion.div
            className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left z-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            {/* Small Eyebrow with Gold Line and Diamond */}
            <motion.div variants={itemVariants} className="flex items-center gap-2 mb-2 sm:mb-4">
              <span className="font-sans text-[10px] sm:text-[11px] font-bold tracking-[0.25em] text-[#D8B46A] uppercase">
                OUR COLLECTION
              </span>
              <span className="w-6 h-[1px] bg-[#D8B46A]/60" />
              <span className="text-[#D8B46A] text-[8px]">◇</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              variants={itemVariants}
              className="font-serif text-2xl sm:text-4xl lg:text-[38px] xl:text-[44px] font-medium leading-[1.16] tracking-tight text-[#FBFDFC] mb-2 sm:mb-3"
            >
              Timeless Beauty, <br className="hidden sm:inline" />
              Crafted in <span className="font-highlight font-mango italic text-[#D8B46A]">Perfection</span>
            </motion.h2>

            {/* Small Gold Divider */}
            <motion.div variants={itemVariants} className="w-10 h-[1.5px] bg-[#D8B46A] mb-3 sm:mb-5" />

            {/* Subtitle Description */}
            <motion.p
              variants={itemVariants}
              className="font-sans text-xs sm:text-[13.5px] text-[#E2EFE9]/90 leading-relaxed font-light mb-5 sm:mb-8 max-w-sm"
            >
              Discover our exclusive range of gold and diamond jewellery, crafted with precision and passion for every special moment.
            </motion.p>

            {/* CTA Button */}
            <motion.div variants={itemVariants}>
              <Link
                to="/collections"
                className="inline-flex items-center justify-center px-7 sm:px-8 py-3 sm:py-3.5 border border-white text-white font-sans font-semibold text-[11px] sm:text-sm tracking-[2px] uppercase rounded-md hover:bg-white hover:text-[#01271B] transition-all duration-300 no-underline shadow-sm cursor-pointer"
              >
                EXPLORE COLLECTION
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: 3 Luxury Collection Cards with Scroll Entrance */}
          <motion.div
            className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-6 xl:gap-7 mt-4 lg:mt-0"
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
                <Link to={card.link} className="block w-full max-w-[250px] xs:max-w-[280px] sm:max-w-none mx-auto no-underline">
                  <div className="relative w-full aspect-[4/3] sm:aspect-[4/3.7] lg:aspect-[4/3.8] rounded-xl sm:rounded-3xl border border-white/20 group-hover:border-white bg-[#00170F] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.45)] group-hover:shadow-[0_24px_55px_rgba(0,0,0,0.7)] transition-all duration-300">
                    <img
                      src={card.img}
                      alt={card.alt}
                      className="w-full h-full object-cover object-center select-none transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-106"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#00140D]/40 pointer-events-none" />
                  </div>

                  <div className="pt-2.5 sm:pt-4 flex flex-col items-center justify-center text-center">
                    <h3 className="font-serif lining-nums text-base sm:text-lg lg:text-xl font-semibold text-[#FBFDFC] group-hover:text-white tracking-[0.14em] leading-snug uppercase mb-1 transition-colors duration-300">
                      {card.title}
                    </h3>
                    <div className="flex items-center justify-center gap-1.5 sm:gap-2">
                      <span className="font-sans text-[9.5px] sm:text-[10.5px] font-semibold tracking-[0.18em] leading-none text-[#D8B46A] group-hover:text-white uppercase transition-colors duration-300">
                        {card.subtitle}
                      </span>
                      <span className="w-3.5 sm:w-4 h-[1.5px] bg-[#D8B46A] group-hover:bg-white transition-colors duration-300" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </Container>
    </section>
  );
};

export default ProductShowcase;

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiHeart, FiShoppingCart, FiArrowRight } from 'react-icons/fi';
import Container from '@/components/common/Container';
import ProductModal from '@/ui/ProductModal';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import emeraldSilkBg from '@/assets/images/emerald_silk_texture.png';

// Import all product assets
import diamondPendantImg from '@/assets/images/diamond_pendant_emerald.png';
import diamondEarringsImg from '@/assets/images/diamond_earrings_emerald.png';
import diamondRingImg from '@/assets/images/diamond_ring_emerald.png';
import diamondBraceletImg from '@/assets/images/diamond_bracelet_emerald.png';

import gold22kNecklaceImg from '@/assets/images/gold22k_necklace_emerald.png';
import gold22kBangleImg from '@/assets/images/gold22k_bangle_emerald.png';
import gold22kEarringsImg from '@/assets/images/gold22k_earrings_emerald.png';
import gold22kRingImg from '@/assets/images/gold22k_ring_emerald.png';

import gold18kChainImg from '@/assets/images/gold18k_chain_emerald.png';
import gold18kHoopsImg from '@/assets/images/gold18k_hoops_emerald.png';
import gold18kPendantImg from '@/assets/images/gold18k_pendant_emerald.png';
import gold18kBraceletImg from '@/assets/images/gold18k_bracelet_emerald.png';

// Complete product dataset for Collections Catalog
const allProductsList = [
  // 18K DIAMOND
  {
    id: 'd-pendant-1',
    name: 'Eternal Teardrop Pendant',
    subTitle: '18K Gold & Diamond',
    description: 'Handcrafted teardrop solitaire diamond pendant in 18K gold. Features certified VVS-EF diamonds designed to add radiance to any occasion.',
    price: '₹ 45,800',
    numericPrice: 45800,
    image: diamondPendantImg,
    categoryKey: '18k-diamond',
    categoryTag: '18K Gold & Diamond',
    goldPurity: '18K Yellow Gold',
    diamondGrade: 'Certified VVS-EF Solitaire'
  },
  {
    id: 'd-earrings-1',
    name: 'Grace Drop Earrings',
    subTitle: '18K Gold & Diamond',
    description: 'Stunning teardrop loop earrings in 18K yellow gold featuring precision set VVS diamonds for everyday luxury.',
    price: '₹ 54,600',
    numericPrice: 54600,
    image: diamondEarringsImg,
    categoryKey: '18k-diamond',
    categoryTag: '18K Gold & Diamond',
    goldPurity: '18K Yellow Gold',
    diamondGrade: 'VVS-EF Diamond Petals'
  },
  {
    id: 'd-ring-1',
    name: 'Blossom Diamond Ring',
    subTitle: '18K Gold & Diamond',
    description: 'Elegant 18K yellow gold floral diamond ring featuring a sparkling central solitaire surrounded by diamond accents.',
    price: '₹ 48,200',
    numericPrice: 48200,
    image: diamondRingImg,
    categoryKey: '18k-diamond',
    categoryTag: '18K Gold & Diamond',
    goldPurity: '18K Yellow Gold',
    diamondGrade: 'VVS Solitaire Cluster'
  },
  {
    id: 'd-bracelet-1',
    name: 'Radiant Circle Bracelet',
    subTitle: '18K Gold & Diamond',
    description: 'Sophisticated 18K yellow gold diamond line bracelet featuring individually prong-set certified diamonds.',
    price: '₹ 37,900',
    numericPrice: 37900,
    image: diamondBraceletImg,
    categoryKey: '18k-diamond',
    categoryTag: '18K Gold & Diamond',
    goldPurity: '18K Yellow Gold',
    diamondGrade: 'Certified Round Diamonds'
  },

  // 22K GOLD
  {
    id: 'g22-necklace-1',
    name: 'Royal Filigree Necklace',
    subTitle: '22K Pure Gold Heritage',
    description: 'Intricately handcrafted 22K pure gold necklace celebrating authentic Kerala heritage and timeless elegance.',
    price: '₹ 1,28,500',
    numericPrice: 128500,
    image: gold22kNecklaceImg,
    categoryKey: '22k-gold',
    categoryTag: '22K Pure Gold Heritage',
    goldPurity: '22K BIS Hallmarked Gold',
    diamondGrade: 'Pure Gold Heritage'
  },
  {
    id: 'g22-bangle-1',
    name: 'Carved Gold Bangles',
    subTitle: '22K Pure Gold Heritage',
    description: 'Luxurious 22K BIS hallmarked gold bangles designed with rich traditional patterns for weddings and festivities.',
    price: '₹ 94,200',
    numericPrice: 94200,
    image: gold22kBangleImg,
    categoryKey: '22k-gold',
    categoryTag: '22K Pure Gold Heritage',
    goldPurity: '22K BIS Hallmarked Gold',
    diamondGrade: 'Pure Gold Heritage'
  },
  {
    id: 'g22-earrings-1',
    name: 'Heritage Jhumka Earrings',
    subTitle: '22K Pure Gold Heritage',
    description: 'Traditional 22K gold jhumka earrings featuring detailed filigree and hanging golden droplets.',
    price: '₹ 56,800',
    numericPrice: 56800,
    image: gold22kEarringsImg,
    categoryKey: '22k-gold',
    categoryTag: '22K Pure Gold Heritage',
    goldPurity: '22K BIS Hallmarked Gold',
    diamondGrade: 'Pure Gold Heritage'
  },
  {
    id: 'g22-ring-1',
    name: 'Embossed Cocktail Ring',
    subTitle: '22K Pure Gold Heritage',
    description: 'Bold and elegant 22K pure gold statement ring showcasing master artisan craftsmanship.',
    price: '₹ 34,500',
    numericPrice: 34500,
    image: gold22kRingImg,
    categoryKey: '22k-gold',
    categoryTag: '22K Pure Gold Heritage',
    goldPurity: '22K BIS Hallmarked Gold',
    diamondGrade: 'Pure Gold Heritage'
  },

  // 18K GOLD
  {
    id: 'g18-chain-1',
    name: 'Layered Gold Chain',
    subTitle: '18K Gold Fine Jewelry',
    description: 'Sleek and resilient 18K gold layered chain necklace, crafted for everyday polish and effortless charm.',
    price: '₹ 32,400',
    numericPrice: 32400,
    image: gold18kChainImg,
    categoryKey: '18k-gold',
    categoryTag: '18K Gold Fine Jewelry',
    goldPurity: '18K BIS Hallmarked Gold',
    diamondGrade: 'Modern Lightweight Gold'
  },
  {
    id: 'g18-hoops-1',
    name: 'Ribbed Gold Hoops',
    subTitle: '18K Gold Fine Jewelry',
    description: 'Chic 18K yellow gold ribbed hoop earrings, lightweight and designed for modern, daily wear.',
    price: '₹ 24,900',
    numericPrice: 24900,
    image: gold18kHoopsImg,
    categoryKey: '18k-gold',
    categoryTag: '18K Gold Fine Jewelry',
    goldPurity: '18K BIS Hallmarked Gold',
    diamondGrade: 'Modern Lightweight Gold'
  },
  {
    id: 'g18-pendant-1',
    name: 'Solitaire Gold Disc Pendant',
    subTitle: '18K Gold Fine Jewelry',
    description: 'Minimalist 18K yellow gold disc pendant necklace featuring a central accent diamond.',
    price: '₹ 28,600',
    numericPrice: 28600,
    image: gold18kPendantImg,
    categoryKey: '18k-gold',
    categoryTag: '18K Gold Fine Jewelry',
    goldPurity: '18K BIS Hallmarked Gold',
    diamondGrade: 'Accent Diamond Disc'
  },
  {
    id: 'g18-bracelet-1',
    name: 'Minimalist Gold Link Bracelet',
    subTitle: '18K Gold Fine Jewelry',
    description: 'Subtle and radiant 18K gold chain bracelet designed to be worn solo or stacked.',
    price: '₹ 26,800',
    numericPrice: 26800,
    image: gold18kBraceletImg,
    categoryKey: '18k-gold',
    categoryTag: '18K Gold Fine Jewelry',
    goldPurity: '18K BIS Hallmarked Gold',
    diamondGrade: 'Modern Lightweight Gold'
  }
];

export const CollectionsPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist, showToast } = useWishlist();

  // 4 Category Filter Tabs as requested by user
  const filterTabs = [
    { id: 'all', label: 'ALL COLLECTIONS' },
    { id: '18k-diamond', label: '18K DIAMOND' },
    { id: '22k-gold', label: '22K GOLD' },
    { id: '18k-gold', label: '18K GOLD' }
  ];

  const handleWishlistClick = (e, product) => {
    e.stopPropagation();
    toggleWishlist(product);
  };

  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    addToCart(product);
    showToast('Added to Shopping Bag', `"${product.name}" has been added to your shopping bag!`, 'cart', product.image);
  };

  // Filter products dynamically based on tab
  const displayedProducts = activeFilter === 'all'
    ? allProductsList
    : allProductsList.filter(p => p.categoryKey === activeFilter);

  // Stagger animation variants
  const gridContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.04 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <div className="pt-24 bg-[#FAF8F5] min-h-screen text-[#00140D]">
      <Helmet>
        <title>Our Fine Collections | AZA Diamonds & Gold</title>
        <meta
          name="description"
          content="Browse Kannur's premier 18K Diamond, 22K Heritage Gold & 18K Lightweight Fine Gold jewellery collections at AZA Diamonds & Gold."
        />
      </Helmet>

      {/* LUXURY EDITORIAL HERO BANNER */}
      <section
        className="bg-[#00170F] bg-cover bg-center bg-no-repeat text-white py-14 sm:py-20 text-center relative overflow-hidden border-b border-[#C9A14A]/20"
        style={{ backgroundImage: `url(${emeraldSilkBg})` }}
      >
        <div className="absolute inset-0 bg-[#00140D]/40 pointer-events-none" />

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-[#C9A14A] text-xs">✦</span>
              <span className="font-sans text-[11px] font-semibold tracking-[0.25em] text-[#D8B46A] uppercase">
                FINE JEWELLERY CATALOGUE
              </span>
              <span className="text-[#C9A14A] text-xs">✦</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-medium text-white mb-3 tracking-tight leading-tight">
              Our Fine <span className="font-mango text-[#D8B46A] italic">Collections</span>
            </h1>

            <p className="font-sans text-xs sm:text-sm md:text-base text-white/80 max-w-xl mx-auto font-light leading-relaxed">
              Discover certified lightweight diamond brilliance and signature 22K & 18K gold designs, crafted for every celebration.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* CATEGORY FILTER TABS */}
      <section className="py-8 sm:py-12">
        <Container>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3.5 mb-8">
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-5 sm:px-7 py-2.5 sm:py-3 rounded-full font-sans text-xs font-bold tracking-[0.14em] uppercase transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                    isActive
                      ? 'bg-[#062B1E] text-white shadow-md'
                      : 'bg-white text-[#00140D] border border-stone-300 hover:border-[#062B1E] shadow-2xs'
                  }`}
                >
                  <span>{tab.label}</span>
                  {isActive && <span className="text-[#9EE5C6] text-xs font-black">•</span>}
                </button>
              );
            })}
          </div>
        </Container>

        {/* 4-COLUMN LUXURY EDITORIAL GRID */}
        <Container>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              variants={gridContainerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -10 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 pt-3.5 sm:pt-4.5 pb-4 overflow-y-visible"
            >
              {displayedProducts.map((product) => (
                <motion.div
                  key={product.id}
                  variants={cardVariants}
                  onClick={() => setSelectedProduct(product)}
                  className="group bg-[#062B1E] rounded-2xl p-3.5 sm:p-4 border border-[#C5A059]/25 hover:border-[#C5A059]/60 shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-400 cursor-pointer flex flex-col justify-between"
                >
                  {/* Top Image Canvas with Pure White Wishlist Heart Badge */}
                  <div className="relative aspect-square bg-[#00170F] rounded-xl overflow-hidden flex items-center justify-center p-0 mb-3.5 shadow-inner">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover object-center rounded-xl group-hover:scale-106 transition-transform duration-700 ease-out select-none"
                    />

                    {/* Wishlist Circular Badge with Pure White Border & Icon */}
                    <button
                      onClick={(e) => handleWishlistClick(e, product)}
                      className="absolute top-3 right-3 w-8 h-8 rounded-full border border-white/40 hover:border-white bg-[#062B1E]/70 backdrop-blur-md text-white hover:bg-white hover:text-[#062B1E] transition-all duration-300 z-10 flex items-center justify-center cursor-pointer shadow-xs"
                      title="Add to Wishlist"
                    >
                      <FiHeart
                        size={15}
                        className={isInWishlist(product.id) ? 'fill-white text-white' : 'text-white'}
                      />
                    </button>
                  </div>

                  {/* Card Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif text-base sm:text-[17px] font-medium text-stone-100 group-hover:text-[#D8B46A] transition-colors mb-1 leading-snug">
                        {product.name}
                      </h3>

                      <span className="font-sans text-[11px] font-semibold text-[#C5A059]/90 tracking-wide block mb-3">
                        {product.categoryTag}
                      </span>
                    </div>

                    {/* Bottom Row: Gold Price & Pure White Action Buttons */}
                    <div className="flex items-center justify-between pt-2.5 border-t border-white/10 mt-auto">
                      <span className="font-sans text-sm sm:text-base font-semibold text-[#D8B46A] tracking-tight">
                        {product.price}
                      </span>

                      <div className="flex items-center gap-2">
                        {/* Circular Pure White Shopping Cart Icon Button with Tooltip */}
                        <div className="relative group/tooltip">
                          <button
                            onClick={(e) => handleAddToCart(e, product)}
                            className="w-8.5 h-8.5 rounded-full border border-white/70 hover:border-white bg-transparent hover:bg-white text-white hover:text-[#062B1E] transition-all duration-300 flex items-center justify-center shadow-xs cursor-pointer group/cart"
                            aria-label="Add to Cart"
                          >
                            <FiShoppingCart size={14} className="text-white group-hover/cart:text-[#062B1E] group-hover/cart:scale-110 transition-all" />
                          </button>

                          {/* Hover Tooltip */}
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover/tooltip:block bg-[#00170F] text-white border border-white/40 text-[10px] font-sans font-bold px-2.5 py-1 rounded-md shadow-lg whitespace-nowrap z-30 pointer-events-none">
                            Add to Cart
                            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-[#00170F]" />
                          </div>
                        </div>

                        {/* Circular Pure White Arrow Quick View Button */}
                        <div className="relative group/tooltip">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedProduct(product);
                            }}
                            className="w-8.5 h-8.5 rounded-full border border-white/70 hover:border-white bg-transparent hover:bg-white text-white hover:text-[#062B1E] transition-all duration-300 flex items-center justify-center shadow-xs cursor-pointer group/btn"
                            aria-label="Quick View"
                          >
                            <FiArrowRight size={15} className="text-white group-hover/btn:text-[#062B1E] group-hover/btn:translate-x-0.5 transition-all" />
                          </button>

                          {/* Hover Tooltip */}
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover/tooltip:block bg-[#00170F] text-white border border-white/40 text-[10px] font-sans font-bold px-2.5 py-1 rounded-md shadow-lg whitespace-nowrap z-30 pointer-events-none">
                            Quick View
                            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-[#00170F]" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </Container>
      </section>

      {/* QUICK VIEW / BOOKING PRODUCT MODAL */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

export default CollectionsPage;

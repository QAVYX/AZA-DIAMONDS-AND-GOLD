import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiHeart, FiShoppingBag, FiTrash2, FiArrowRight } from 'react-icons/fi';
import Container from '@/components/common/Container';
import { useWishlist } from '@/context/WishlistContext';
import { useCart } from '@/context/CartContext';
import emeraldSilkBg from '@/assets/images/emerald_silk_texture.png';

export const WishlistPage = () => {
  const { wishlist, removeFromWishlist, wishlistCount, showToast } = useWishlist();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleMoveToCart = (product) => {
    addToCart(product);
    showToast('Added to Shopping Bag', `"${product.name}" has been added to your shopping bag!`, 'cart', product.image);
  };

  return (
    <div className="pt-24 bg-[#FAF8F5] min-h-screen text-[#00140D]">
      <Helmet>
        <title>Your Saved Wishlist | AZA Diamonds & Gold</title>
        <meta
          name="description"
          content="View your saved fine diamond & gold jewellery pieces in your AZA Wishlist."
        />
      </Helmet>

      {/* Hero Header Banner */}
      <section
        className="bg-[#00170F] bg-cover bg-center bg-no-repeat text-white py-10 sm:py-14 text-center relative overflow-hidden border-b border-[#C9A14A]/20"
        style={{ backgroundImage: `url(${emeraldSilkBg})` }}
      >
        <div className="absolute inset-0 bg-[#00140D]/45 pointer-events-none" />
        <Container className="relative z-10">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="text-[#C9A14A] text-[9px]">✦</span>
            <span className="font-sans text-[10px] sm:text-[11px] font-semibold tracking-[0.25em] text-[#D8B46A] uppercase">
              SAVED PIECES
            </span>
            <span className="text-[#C9A14A] text-[9px]">✦</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-2 leading-tight">
            Your Saved <span className="font-mango text-[#D8B46A] italic">Wishlist</span>
          </h1>

          <p className="font-sans text-xs sm:text-sm text-white/80 max-w-md mx-auto font-light">
            {wishlistCount > 0
              ? `You have saved ${wishlistCount} ${wishlistCount === 1 ? 'piece' : 'pieces'} to cherish`
              : 'Your wishlist is currently empty'}
          </p>
        </Container>
      </section>

      {/* Main Content Area */}
      <section className="py-10 sm:py-16">
        <Container>
          {wishlist.length === 0 ? (
            /* EMPTY WISHLIST VIEW */
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="py-12 sm:py-20 text-center max-w-md mx-auto flex flex-col items-center justify-center"
            >
              {/* Simple dark emerald green line-style heart icon */}
              <FiHeart className="text-[#062B1E] stroke-[1.5] mb-5 sm:mb-6" size={38} />

              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#00140D] mb-3">
                Your Wishlist is Empty
              </h2>

              <p className="font-sans text-xs sm:text-sm text-stone-600 font-light mb-8 max-w-xs leading-relaxed">
                Save the pieces you love and come back to them whenever you’re ready.
              </p>

              <Link
                to="/collections"
                className="bg-[#062B1E] hover:bg-[#042016] text-white font-sans font-bold text-xs tracking-[0.18em] uppercase py-3.5 px-8 rounded-xl no-underline shadow-sm hover:shadow-md transition-all inline-flex items-center gap-2"
              >
                <span>EXPLORE COLLECTIONS</span>
                <FiArrowRight size={15} />
              </Link>
            </motion.div>
          ) : (
            /* ACTIVE WISHLIST GRID */
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-gray-200 mb-8">
                <span className="font-sans text-xs font-bold tracking-wider text-gray-500 uppercase">
                  SAVED ITEMS ({wishlistCount})
                </span>
                <Link
                  to="/collections"
                  className="font-sans text-xs font-bold tracking-wider text-[#062B1E] hover:text-[#C5A059] transition-colors no-underline inline-flex items-center gap-1.5 uppercase"
                >
                  <span>BROWSE MORE DESIGNS →</span>
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <AnimatePresence>
                  {wishlist.map((product) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      layout
                      className="group bg-[#062B1E] rounded-2xl p-4 border border-[#C5A059]/25 hover:border-[#C5A059]/60 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
                    >
                      {/* Image Canvas with Remove Heart Button */}
                      <div className="relative aspect-square bg-[#00170F] rounded-xl overflow-hidden flex items-center justify-center mb-3.5 shadow-inner">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500 select-none"
                        />
                        <button
                          onClick={() => removeFromWishlist(product.id)}
                          className="absolute top-3 right-3 w-8 h-8 rounded-full border border-red-400/40 bg-black/60 text-red-400 hover:bg-red-500 hover:text-white transition-all duration-300 z-10 flex items-center justify-center cursor-pointer shadow-xs"
                          title="Remove from Wishlist"
                        >
                          <FiTrash2 size={14} />
                        </button>
                      </div>

                      {/* Details & Actions */}
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <span className="font-sans text-[10px] font-semibold text-[#C5A059]/90 tracking-wider block uppercase mb-1">
                            {product.subTitle || product.categoryTag}
                          </span>
                          <h3 className="font-serif text-base sm:text-[17px] font-medium text-stone-100 mb-2 leading-snug">
                            {product.name}
                          </h3>
                        </div>

                        <div className="pt-3 border-t border-white/10 mt-auto">
                          <div className="font-sans text-sm sm:text-base font-semibold text-[#D8B46A] tracking-tight mb-3">
                            {product.price}
                          </div>

                          <div className="flex gap-2">
                            <button
                              onClick={() => handleMoveToCart(product)}
                              className="flex-1 bg-transparent hover:bg-white text-white hover:text-[#062B1E] border border-white font-sans font-bold text-[11px] tracking-wider uppercase py-2.5 px-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-xs group/bag"
                            >
                              <FiShoppingBag size={14} className="text-white group-hover/bag:text-[#062B1E] transition-colors" />
                              <span>Add to Bag</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {/* DESKTOP ONLY: Quiet Luxury Editorial Text Block */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="hidden lg:flex flex-col justify-center items-start p-6 lg:pl-8 text-left"
                >
                  <div className="w-8 h-[1.5px] bg-[#C5A059]/60 mb-4" />

                  <h3 className="font-serif text-2xl lg:text-3xl font-medium text-[#00140D] mb-3 leading-snug">
                    Made to be remembered.
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-stone-600 font-light leading-relaxed max-w-xs mb-6">
                    Keep exploring pieces designed for everyday elegance and meaningful moments.
                  </p>

                  <Link
                    to="/collections"
                    className="font-sans text-xs font-semibold tracking-wider text-[#062B1E] hover:text-[#C5A059] transition-colors no-underline inline-flex items-center gap-1.5 uppercase group"
                  >
                    <span>EXPLORE COLLECTIONS</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </motion.div>
              </div>
            </div>
          )}
        </Container>
      </section>
    </div>
  );
};

export default WishlistPage;

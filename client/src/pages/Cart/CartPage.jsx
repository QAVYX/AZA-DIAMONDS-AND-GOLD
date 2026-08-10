import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiTrash2, FiPlus, FiMinus, FiShoppingBag, FiArrowRight } from 'react-icons/fi';
import { FaWhatsapp, FaShieldAlt } from 'react-icons/fa';
import Container from '@/components/common/Container';
import { useCart } from '@/context/CartContext';
import { BUILD_WHATSAPP_LINK } from '@/utils/constants';
import emeraldSilkBg from '@/assets/images/emerald_silk_texture.png';

export const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, clearCart, cartCount, cartTotal } = useCart();

  const formatPrice = (num) => {
    return '₹ ' + Number(num).toLocaleString('en-IN');
  };

  const handleCheckoutWhatsApp = () => {
    if (cart.length === 0) return;
    
    let msg = `Hi AZA Team, I would like to place an inquiry for the following items in my bag:\n\n`;
    cart.forEach((item, idx) => {
      msg += `${idx + 1}. *${item.name}* (${item.subTitle})\n   Quantity: ${item.quantity} | Total: ${formatPrice(item.numericPrice * item.quantity)}\n`;
    });
    msg += `\n*Grand Total: ${formatPrice(cartTotal)}*\n\nPlease confirm availability and details for showroom pickup / delivery.`;

    window.open(BUILD_WHATSAPP_LINK(msg), '_blank');
  };

  // Stagger animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.05 }
    }
  };

  const rowVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <div className="pt-24 bg-[#FAF8F5] min-h-screen text-[#00140D]">
      <Helmet>
        <title>Your Shopping Bag | AZA Diamonds & Gold</title>
        <meta name="description" content="View items in your AZA Diamonds & Gold shopping bag and proceed with your enquiry." />
      </Helmet>

      {/* 1. REFINED COMPACT HERO */}
      <section
        className="bg-[#00170F] bg-cover bg-center bg-no-repeat text-white py-8 sm:py-12 text-center relative overflow-hidden border-b border-[#C9A14A]/20"
        style={{ backgroundImage: `url(${emeraldSilkBg})` }}
      >
        <div className="absolute inset-0 bg-[#00140D]/40 pointer-events-none" />
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="text-[#C9A14A] text-[9px]">✦</span>
              <span className="font-sans text-[10px] sm:text-[11px] font-semibold tracking-[0.25em] text-[#D8B46A] uppercase">
                YOUR SELECTION
              </span>
              <span className="text-[#C9A14A] text-[9px]">✦</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-2 leading-tight">
              Shopping <span className="font-mango text-[#D8B46A] italic">Bag</span>
            </h1>

            <p className="font-sans text-xs sm:text-sm text-white/80 max-w-md mx-auto font-light">
              {cartCount > 0
                ? `You have ${cartCount} ${cartCount === 1 ? 'item' : 'items'} in your bag`
                : 'Your bag is currently empty'}
            </p>
          </motion.div>
        </Container>
      </section>

      {/* 2. MAIN CART LAYOUT */}
      <section className="py-8 sm:py-14">
        <Container>
          {cart.length === 0 ? (
            /* EMPTY CART VIEW */
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="py-12 sm:py-20 text-center max-w-md mx-auto flex flex-col items-center justify-center"
            >
              {/* Simple dark emerald green line-style icon */}
              <FiShoppingBag className="text-[#062B1E] stroke-[1.5] mb-5 sm:mb-6" size={38} />

              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#00140D] mb-3">
                Your Bag is Empty
              </h2>

              <p className="font-sans text-xs sm:text-sm text-stone-600 font-light mb-8 max-w-xs leading-relaxed">
                Explore our collections and discover a piece made for your everyday moments.
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
            /* ACTIVE CART VIEW */
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* LEFT COLUMN: Shopping Bag Items */}
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-stone-200/80 px-1">
                  <span className="font-sans text-xs font-semibold tracking-widest text-stone-500 uppercase">
                    BAG ITEMS ({cartCount})
                  </span>
                  <button
                    onClick={clearCart}
                    className="font-sans text-xs font-medium text-stone-400 hover:text-stone-700 transition-colors cursor-pointer bg-transparent border-0"
                  >
                    Clear All
                  </button>
                </div>

                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="space-y-3.5"
                >
                  <AnimatePresence>
                    {cart.map((item) => (
                      <motion.div
                        key={item.id}
                        variants={rowVariants}
                        exit={{ opacity: 0, x: -20, transition: { duration: 0.25 } }}
                        layout
                        className="bg-white rounded-2xl p-4 sm:p-5 border border-stone-200/70 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4"
                      >
                        {/* Product Image & Info */}
                        <div className="flex items-center gap-4 w-full sm:w-auto">
                          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl bg-[#00170F] overflow-hidden shrink-0 border border-stone-100 group">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400 ease-out select-none"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="font-sans text-[10.5px] font-semibold tracking-wider text-[#C5A059] uppercase block mb-1">
                              {item.subTitle}
                            </span>
                            <h3 className="font-serif text-base sm:text-lg font-medium text-[#00140D] mb-1 leading-snug truncate">
                              {item.name}
                            </h3>
                            <span className="font-sans text-xs text-stone-400 font-light block mb-1">
                              Unit: {formatPrice(item.numericPrice)}
                            </span>
                            <span className="font-sans text-sm font-semibold text-[#00140D] block sm:hidden">
                              {formatPrice(item.numericPrice * item.quantity)}
                            </span>
                          </div>
                        </div>

                        {/* Quantity Control, Subtotal & Remove Action */}
                        <div className="flex items-center justify-between sm:justify-end gap-5 sm:gap-7 w-full sm:w-auto pt-3 sm:pt-0 border-t sm:border-t-0 border-stone-100">
                          {/* Unit Price (Desktop) */}
                          <span className="font-sans text-sm sm:text-base font-semibold text-[#00140D] hidden sm:block w-24 text-right">
                            {formatPrice(item.numericPrice * item.quantity)}
                          </span>

                          {/* 4. QUANTITY CONTROL PILL */}
                          <div className="flex items-center border border-stone-200/80 rounded-full bg-[#FAF8F5] px-1 py-0.5 shadow-2xs">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-7 h-7 rounded-full flex items-center justify-center text-stone-500 hover:text-[#00140D] hover:bg-stone-200/60 transition-colors cursor-pointer border-0 bg-transparent"
                              aria-label="Decrease Quantity"
                            >
                              <FiMinus size={11} />
                            </button>
                            <span className="w-7 text-center font-sans font-semibold text-xs text-[#00140D]">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-7 h-7 rounded-full flex items-center justify-center text-stone-500 hover:text-[#00140D] hover:bg-stone-200/60 transition-colors cursor-pointer border-0 bg-transparent"
                              aria-label="Increase Quantity"
                            >
                              <FiPlus size={11} />
                            </button>
                          </div>

                          {/* 5. REMOVE ACTION ICON */}
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-stone-300 hover:text-stone-700 hover:scale-110 transition-all p-1.5 cursor-pointer border-0 bg-transparent"
                            title="Remove Item"
                            aria-label="Remove Item"
                          >
                            <FiTrash2 size={16} />
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>

                {/* 9. CONTINUE SHOPPING LINK */}
                <div className="pt-5 flex justify-start">
                  <Link
                    to="/collections"
                    className="font-sans text-xs font-semibold tracking-wider text-[#062B1E] hover:text-[#C5A059] transition-colors no-underline inline-flex items-center gap-2 uppercase group"
                  >
                    <span>← CONTINUE SHOPPING</span>
                  </Link>
                </div>
              </div>

              {/* RIGHT COLUMN: 6. ORDER SUMMARY PANEL */}
              <div className="lg:col-span-4 bg-white rounded-2xl p-6 sm:p-7 border border-[#C5A059]/25 shadow-sm sticky top-28">
                <h3 className="font-serif text-xl font-medium text-[#00140D] mb-5 pb-3 border-b border-stone-100">
                  Order Summary
                </h3>

                <div className="space-y-3.5 font-sans text-xs sm:text-sm text-stone-600 mb-6">
                  <div className="flex justify-between items-center">
                    <span>Selected Items ({cartCount})</span>
                    <span className="font-semibold text-[#00140D]">{formatPrice(cartTotal)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Showroom Inspection</span>
                    <span className="font-medium text-[#062B1E]">Complimentary</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>BIS Hallmark Certification</span>
                    <span className="font-medium text-[#C5A059]">Included</span>
                  </div>

                  <div className="pt-4 border-t border-stone-100 flex justify-between items-center">
                    <span className="font-sans text-xs font-bold uppercase tracking-wider text-stone-700">Total Amount</span>
                    <span className="font-serif text-xl sm:text-2xl font-semibold text-[#00140D]">{formatPrice(cartTotal)}</span>
                  </div>
                </div>

                {/* 7. WHATSAPP ORDER BUTTON */}
                <button
                  onClick={handleCheckoutWhatsApp}
                  className="w-full bg-[#062B1E] hover:bg-[#042016] text-white rounded-xl py-3.5 px-4 font-sans font-bold text-xs tracking-[0.1em] uppercase inline-flex items-center justify-center gap-2.5 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 cursor-pointer border border-[#C5A059]/30 group mb-3"
                >
                  <FaWhatsapp className="text-base text-white group-hover:scale-110 transition-transform shrink-0" />
                  <span>INQUIRE & ORDER ON WHATSAPP</span>
                </button>

                {/* 8. TRUST LINE */}
                <div className="flex items-center justify-center gap-2 text-[11px] text-stone-400 font-light pt-2">
                  <FaShieldAlt className="text-[#C5A059]/80 text-xs shrink-0" />
                  <span>Guaranteed BIS Hallmark Purity & Verification</span>
                </div>
              </div>

            </div>
          )}
        </Container>
      </section>
    </div>
  );
};

export default CartPage;

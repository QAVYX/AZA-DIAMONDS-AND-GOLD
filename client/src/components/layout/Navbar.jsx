import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHome, FaGem, FaInfoCircle, FaQuestionCircle, FaPhoneAlt, FaWhatsapp, FaRegHeart, FaShoppingBag } from 'react-icons/fa';
import logoDarkImg from '@/assets/images/aza_logo_dark.png';
import { BUILD_WHATSAPP_LINK } from '@/utils/constants';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { cartCount } = useCart();
  const { wishlistCount } = useWishlist();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', path: '/' },
    { label: 'COLLECTIONS', path: '/collections' },
    { label: 'ABOUT', path: '/about' },
    { label: 'FAQ', path: '/faq' },
    { label: 'CONTACT', path: '/contact' },
  ];

  const bottomTabs = [
    { label: 'HOME', path: '/', icon: FaHome },
    { label: 'DESIGNS', path: '/collections', icon: FaGem },
    { label: 'ABOUT', path: '/about', icon: FaInfoCircle },
    { label: 'FAQ', path: '/faq', icon: FaQuestionCircle },
    { label: 'CONTACT', path: '/contact', icon: FaPhoneAlt },
  ];

  return (
    <>
      {/* Top Header Navbar */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-[100] flex items-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolled
            ? 'h-[64px] xs:h-[70px] sm:h-[78px] lg:h-[88px] bg-white/95 backdrop-blur-xl border-b border-black/5 shadow-[0_10px_30px_rgba(0,0,0,0.06)]'
            : location.pathname !== '/'
            ? 'h-[70px] xs:h-[76px] sm:h-[84px] lg:h-[96px] bg-white/98 backdrop-blur-md border-b border-black/5 shadow-xs'
            : 'h-[70px] xs:h-[76px] sm:h-[84px] lg:h-[96px] bg-transparent border-none shadow-none backdrop-blur-none'
        }`}
      >
        <div className="w-full h-full flex items-center justify-between px-4 xs:px-5 sm:px-8 lg:px-14 xl:px-20 2xl:px-24">
          
          {/* LEFT SIDE: Brand Logo - Cleanly Left-Aligned */}
          <div className="shrink-0 flex items-center justify-start text-left">
            <Link to="/" className="flex items-center no-underline group py-0.5">
              <img
                src={logoDarkImg}
                alt="AZA Diamonds & Gold Official Logo"
                className={`w-auto object-contain transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02] ${
                  scrolled
                    ? 'h-[40px] xs:h-[46px] sm:h-[54px] lg:h-[68px]'
                    : 'h-[46px] xs:h-[52px] sm:h-[62px] lg:h-[78px]'
                }`}
              />
            </Link>
          </div>

          {/* RIGHT SIDE CONTAINER: Navigation Links + Wishlist & Cart Icons + WhatsApp Action Button */}
          <div className="flex items-center gap-2 xs:gap-3 sm:gap-4 lg:gap-6 xl:gap-8 ml-auto">
            {/* Desktop Navigation Links (Right aligned, clean spacing) */}
            <nav className="hidden lg:flex items-center gap-5 xl:gap-[32px]">
              {navLinks.map((link, index) => {
                const isActive = location.pathname === link.path;

                return (
                  <Link
                    key={index}
                    to={link.path}
                    className={`relative py-2 font-sans font-medium text-[11.5px] xl:text-[12.5px] tracking-[0.12em] uppercase transition-colors duration-300 no-underline group ${
                      isActive
                        ? 'text-[#00140D] font-semibold'
                        : 'text-[#00140D]/80 hover:text-[#00140D]'
                    }`}
                  >
                    <span>{link.label}</span>

                    <span
                      className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#C9A14A] rounded-full transition-transform duration-300 ease-out ${
                        isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100 origin-left'
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Luxury Wishlist Heart & Cart Bag Icons (Clean & Compact) */}
            <div className="flex items-center gap-1 xs:gap-1.5 sm:gap-2 text-[#00140D]">
              {/* Wishlist Heart Icon */}
              <Link
                to="/wishlist"
                aria-label="Saved Wishlist"
                className={`w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 relative no-underline group cursor-pointer ${
                  location.pathname === '/wishlist'
                    ? 'bg-[#062B1E] text-white shadow-md ring-2 ring-[#D8B46A]/50'
                    : 'text-[#00140D] hover:text-[#C9A14A] hover:bg-black/5'
                }`}
                title="Wishlist"
              >
                <FaRegHeart className="text-sm xs:text-base sm:text-lg transition-transform duration-300 group-hover:scale-115" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#D8B46A] text-[#00140D] font-sans font-bold text-[9.5px] w-4.5 h-4.5 rounded-full flex items-center justify-center border border-[#062B1E]">
                    {wishlistCount}
                  </span>
                )}
              </Link>

              {/* Shopping Bag / Cart Icon */}
              <Link
                to="/cart"
                aria-label="Jewellery Cart"
                className={`w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 relative no-underline group cursor-pointer ${
                  location.pathname === '/cart'
                    ? 'bg-[#062B1E] text-white shadow-md ring-2 ring-[#D8B46A]/50'
                    : 'text-[#00140D] hover:text-[#C9A14A] hover:bg-black/5'
                }`}
                title="Shopping Bag"
              >
                <FaShoppingBag className="text-sm xs:text-base sm:text-lg transition-transform duration-300 group-hover:scale-115" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#062B1E] text-white font-sans font-bold text-[9.5px] w-4.5 h-4.5 rounded-full flex items-center justify-center border border-[#C5A059]">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>

            {/* Compact & Elegant WhatsApp Action Button */}
            <div className="shrink-0 flex items-center">
              <a
                href={BUILD_WHATSAPP_LINK('Hi AZA Team, I would like to inquire about your fine diamond and gold jewellery collections.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 xs:gap-2 bg-[#01271B] hover:bg-[#0F4A38] text-white rounded-lg xs:rounded-xl px-2.5 py-1.5 xs:px-3.5 xs:py-2 sm:px-5 sm:py-2.5 font-sans font-semibold text-[10px] xs:text-[11px] sm:text-[12.5px] tracking-[0.06em] uppercase transition-all duration-300 no-underline shadow-xs hover:shadow-md border border-[#D8B46A]/30 group"
              >
                <FaWhatsapp className="text-sm xs:text-base sm:text-lg text-white transition-transform duration-300 group-hover:scale-110 shrink-0" />
                <span className="tracking-[0.08em]">WHATSAPP</span>
              </a>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Refined Slim Floating Glass Bottom Navigation Bar (Mobile / Tablet Responsive) */}
      <nav className="lg:hidden fixed bottom-2.5 xs:bottom-3 left-3 right-3 z-[90] bg-[#00140D]/95 text-white backdrop-blur-2xl border border-[#C9A14A]/35 rounded-full shadow-[0_10px_32px_rgba(0,20,13,0.45)] px-1.5 py-1 xs:px-2 xs:py-1.5 flex items-center justify-around">
        {bottomTabs.map((tab, idx) => {
          const Icon = tab.icon;
          const isActive = location.pathname === tab.path;

          return (
            <Link
              key={idx}
              to={tab.path}
              className={`flex flex-col items-center justify-center py-1 px-2.5 xs:px-3 rounded-full transition-all duration-300 no-underline ${
                isActive
                  ? 'bg-white/18 text-white font-semibold border border-white/35 shadow-xs'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              <Icon className={`text-[13px] xs:text-[15px] sm:text-base mb-0.5 transition-transform duration-300 ${isActive ? 'scale-105 text-white' : ''}`} />
              <span className="font-sans text-[8.5px] xs:text-[9.5px] font-semibold tracking-wider uppercase leading-none">
                {tab.label}
              </span>
            </Link>
          );
        })}
      </nav>
    </>
  );
};

export default Navbar;

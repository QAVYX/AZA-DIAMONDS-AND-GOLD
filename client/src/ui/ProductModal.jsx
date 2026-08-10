import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTimes, FaWhatsapp, FaShieldAlt, FaGem, FaCheckCircle, FaShoppingBag } from 'react-icons/fa';
import { BUILD_WHATSAPP_LINK } from '@/utils/constants';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';

export const ProductModal = ({ product, onClose }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { showToast } = useWishlist();

  useEffect(() => {
    if (product) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => document.body.classList.remove('overflow-hidden');
  }, [product]);

  if (!product) return null;

  const whatsappMessage = `Hi AZA Team, I am interested in inquiring about: ${product.name} (Price: ${product.price || 'N/A'}). Please share more details.`;

  const handleAddToCartModal = () => {
    addToCart(product);
    showToast('Added to Shopping Bag', `"${product.name}" has been added to your shopping bag!`, 'cart', product.image);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-lg md:max-w-3xl bg-[#062B1E] bg-gradient-to-b from-[#062B1E] via-[#00170F] to-[#00140D] border border-[#C5A059]/35 rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.85)] text-white flex flex-col md:flex-row max-h-[82vh] sm:max-h-[88vh] my-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-2.5 right-2.5 sm:top-3.5 sm:right-3.5 z-30 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/60 border border-white/20 text-white flex items-center justify-center cursor-pointer hover:bg-white hover:text-[#062B1E] transition-colors shadow-md"
        >
          <FaTimes size={13} />
        </button>

        {/* Media Side */}
        <div className="w-full md:w-1/2 bg-[#00170F] relative h-40 xs:h-48 sm:h-56 md:h-auto shrink-0 overflow-hidden flex items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover block"
          />
        </div>

        {/* Details Side */}
        <div className="w-full md:w-1/2 p-4 xs:p-5 sm:p-7 md:p-8 flex flex-col justify-between overflow-y-auto">
          <div>
            <span className="inline-block px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#C5A059]/15 border border-[#C5A059]/40 text-[#D8B46A] font-sans text-[9.5px] sm:text-[10px] font-semibold tracking-[0.18em] uppercase mb-2 sm:mb-3">
              {product.categoryTag || 'AZA Fine Jewellery'}
            </span>

            <h3 className="font-serif text-lg sm:text-2xl md:text-3xl font-medium text-white mb-1 sm:mb-2 leading-tight">
              {product.name}
            </h3>

            {product.price && (
              <div className="font-sans text-base sm:text-xl font-semibold text-[#D8B46A] mb-3 sm:mb-4 tracking-tight">
                {product.price}
              </div>
            )}

            <p className="font-sans text-xs sm:text-sm text-white/80 leading-relaxed font-light mb-4 sm:mb-5">
              {product.description || product.subTitle}
            </p>

            {/* Specifications List */}
            <div className="space-y-2 sm:space-y-2.5 mb-4 sm:mb-6 pt-3 sm:pt-4 border-t border-white/10">
              {product.goldPurity && (
                <div className="flex items-center gap-2 font-sans text-xs text-white/90">
                  <FaShieldAlt className="text-[#C5A059] shrink-0 text-xs" />
                  <span><strong>Gold Purity:</strong> {product.goldPurity}</span>
                </div>
              )}

              {product.diamondGrade && (
                <div className="flex items-center gap-2 font-sans text-xs text-white/90">
                  <FaGem className="text-[#C5A059] shrink-0 text-xs" />
                  <span><strong>Diamonds:</strong> {product.diamondGrade}</span>
                </div>
              )}

              <div className="flex items-center gap-2 font-sans text-xs text-white/90">
                <FaCheckCircle className="text-[#C5A059] shrink-0 text-xs" />
                <span>100% Certified Purity & BIS Hallmarked</span>
              </div>
            </div>
          </div>

          {/* Action Buttons: Pure White ADD TO BAG button with Green Text */}
          <div className="pt-3 sm:pt-4 border-t border-white/10 flex flex-col xs:flex-row gap-2 sm:gap-2.5">
            <button
              onClick={handleAddToCartModal}
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:py-3 rounded-xl border border-white bg-white hover:bg-stone-100 text-[#062B1E] font-sans font-bold text-xs tracking-wider uppercase transition-all duration-300 shadow-md cursor-pointer group/bag"
            >
              <FaShoppingBag className="text-[#062B1E] text-xs shrink-0" />
              <span className="text-[#062B1E]">Add to Bag</span>
            </button>

            <a
              href={BUILD_WHATSAPP_LINK(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:py-3 rounded-xl border border-white/30 bg-[#062B1E] hover:bg-white text-white hover:text-[#062B1E] font-sans font-bold text-xs tracking-wider uppercase transition-all duration-300 shadow-md group no-underline cursor-pointer"
            >
              <FaWhatsapp className="text-sm text-white group-hover:text-[#062B1E] transition-colors shrink-0" />
              <span>Inquire</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiHeart, FiShoppingBag, FiInfo, FiX } from 'react-icons/fi';
import { useWishlist } from '@/context/WishlistContext';

export const LuxuryToast = () => {
  const { toast, hideToast } = useWishlist();

  useEffect(() => {
    if (toast.visible) {
      const timer = setTimeout(() => {
        hideToast();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [toast.visible]);

  return (
    <AnimatePresence>
      {toast.visible && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -15, scale: 0.96 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed top-24 right-4 sm:right-6 z-[200] max-w-sm sm:max-w-md w-[calc(100vw-2rem)] bg-[#00170F]/95 backdrop-blur-xl text-white rounded-2xl p-3.5 sm:p-4 border border-white/20 shadow-[0_15px_40px_rgba(0,0,0,0.6)] overflow-hidden"
        >
          <div className="flex items-center gap-3.5 relative z-10">
            {/* Minimal White Icon or Product Image Thumbnail */}
            {toast.image ? (
              <div className="w-10 h-10 rounded-xl bg-black/40 overflow-hidden shrink-0 border border-white/20 p-0.5 shadow-inner">
                <img
                  src={toast.image}
                  alt="Product thumbnail"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            ) : (
              <div className="w-9 h-9 rounded-full bg-white/10 border border-white/25 flex items-center justify-center text-white shrink-0">
                {toast.type === 'wishlist' ? (
                  <FiHeart className="fill-white text-white" size={15} />
                ) : toast.type === 'cart' ? (
                  <FiShoppingBag className="text-white" size={15} />
                ) : (
                  <FiInfo className="text-white" size={15} />
                )}
              </div>
            )}

            {/* Clean & Minimal Text */}
            <div className="flex-1 min-w-0 pr-1">
              <h4 className="font-sans font-bold text-[11px] sm:text-xs tracking-[0.12em] text-white uppercase mb-0.5 leading-none">
                {toast.title}
              </h4>
              <p className="font-sans text-xs text-white/80 font-light truncate leading-tight">
                {toast.message}
              </p>
            </div>

            {/* Close Button */}
            <button
              onClick={hideToast}
              className="text-white/40 hover:text-white transition-colors p-1 cursor-pointer bg-transparent border-0 shrink-0"
              aria-label="Close notification"
            >
              <FiX size={15} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LuxuryToast;

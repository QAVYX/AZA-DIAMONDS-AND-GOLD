import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

export const CollectionCard = ({ collection, onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="group bg-white rounded-[24px] overflow-hidden shadow-[0_20px_45px_rgba(0,0,0,0.35)] hover:shadow-[0_28px_55px_rgba(0,0,0,0.45)] transition-shadow duration-300 flex flex-col cursor-pointer relative"
    >
      {/* Product Image Display */}
      <div className="relative w-full aspect-[4/3] bg-[#F3F1ED] overflow-hidden">
        <img
          src={collection.image}
          alt={collection.title}
          className="w-full h-full object-cover block transition-transform duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
        />
      </div>

      {/* Content Area */}
      <div className="pt-4 px-6 pb-7 text-center flex flex-col items-center flex-grow">
        <h3 className="font-serif text-2xl font-medium text-[#00140D] mb-1.5">
          {collection.title}
        </h3>
        
        {/* Small Gold Divider */}
        <div className="text-[#C9A14A] text-[8px] mb-3">❖</div>
        
        <p className="font-sans text-xs text-gray-500 mb-6 leading-relaxed max-w-[270px] font-light">
          {collection.description}
        </p>

        {/* Solid Dark Emerald Action Button */}
        <button className="mt-auto bg-[#01271B] group-hover:bg-[#0F4A38] text-white border-0 rounded-lg px-6 py-3 font-sans text-[11.5px] font-semibold tracking-[0.08em] uppercase inline-flex items-center gap-2 cursor-pointer transition-all duration-300 shadow-[0_4px_12px_rgba(0,20,13,0.25)] group-hover:shadow-[0_6px_18px_rgba(0,20,13,0.4)]">
          <span>{collection.linkText || 'EXPLORE COLLECTION'}</span>
          <FaArrowRight className="text-[#D8B46A] text-xs transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </motion.div>
  );
};

export default CollectionCard;

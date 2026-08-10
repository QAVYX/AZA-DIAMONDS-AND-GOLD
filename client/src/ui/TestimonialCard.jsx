import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaCheck } from 'react-icons/fa';

export const TestimonialCard = ({ testimonial }) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="group bg-white rounded-[24px] p-8 sm:p-9 shadow-[0_20px_45px_rgba(0,0,0,0.35)] hover:shadow-[0_28px_55px_rgba(0,0,0,0.45)] transition-shadow duration-300 flex flex-col justify-between relative overflow-hidden border border-black/5"
    >
      {/* Top-Right Watermark Quote Mark (Soft Mint/Emerald) */}
      <span className="font-serif text-[100px] text-[#E2EFE9] opacity-80 leading-none absolute -top-4 right-6 pointer-events-none select-none z-0">
        “
      </span>

      <div className="relative z-10">
        {/* 5 Gold Star Rating */}
        <div className="flex items-center gap-1 mb-5">
          {[...Array(testimonial.rating || 5)].map((_, i) => (
            <FaStar key={i} className="text-[#C9A14A] text-base sm:text-lg" />
          ))}
        </div>

        {/* Quote Content */}
        <p className="font-serif text-[16px] sm:text-[17px] italic text-gray-800 leading-relaxed mb-8 max-w-md font-normal">
          "{testimonial.quote}"
        </p>
      </div>

      {/* Card Bottom: Author Info & Verified Customer Badge */}
      <div className="pt-5 border-t border-gray-100 flex items-center justify-between relative z-10">
        <div>
          <h4 className="font-sans font-semibold text-base text-[#00140D] mb-0.5">
            {testimonial.author}
          </h4>
          <span className="font-sans text-xs text-gray-500 font-light block">
            {testimonial.location}
          </span>
        </div>

        {/* Verified Customer Badge */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#EBF5F0] border border-[#01271B]/20 text-[#01271B] font-sans text-[10px] font-semibold tracking-[1px] uppercase">
          <FaCheck className="text-[11px] text-[#01271B]" />
          <span>VERIFIED CUSTOMER</span>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;

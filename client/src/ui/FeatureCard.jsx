import React from 'react';
import { motion } from 'framer-motion';

export const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="group flex flex-col items-center text-center py-2"
    >
      {/* Icon in Minimal Deep Emerald Circular Container */}
      <div className="w-11 h-11 rounded-full bg-[#003D2F]/[0.05] border border-[#003D2F]/10 flex items-center justify-center text-[#003D2F] mb-3.5 transition-transform duration-300 group-hover:scale-105">
        {Icon && <Icon className="text-lg text-[#003D2F]" />}
      </div>

      {/* Title */}
      <h3 className="font-serif text-[16.5px] sm:text-[17.5px] font-medium text-[#003D2F] tracking-wide mb-1">
        {title}
      </h3>

      {/* Tiny Muted-Gold Accent Underneath Title */}
      <div className="w-5 h-[1.5px] bg-[#C9A45C]/50 mx-auto my-2 rounded-full transition-all duration-300 group-hover:w-8 group-hover:bg-[#C9A45C]" />

      {/* Description Text */}
      <p className="font-sans text-xs text-gray-500 leading-relaxed max-w-[210px] mx-auto font-light">
        {description}
      </p>
    </motion.div>
  );
};

export default FeatureCard;

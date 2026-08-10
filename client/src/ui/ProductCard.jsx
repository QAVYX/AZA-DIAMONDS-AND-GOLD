import React from 'react';
import { FaWhatsapp, FaArrowRight } from 'react-icons/fa';
import { BUILD_WHATSAPP_LINK } from '@/utils/constants';

export const ProductCard = ({ product, onQuickView }) => {
  const whatsappUrl = BUILD_WHATSAPP_LINK(`Hi AZA Team, I am interested in inquiring about: ${product.name}. Please share availability and details.`);

  return (
    <div className="group bg-white rounded-2xl overflow-hidden flex flex-col transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] border border-black/8 shadow-xs hover:-translate-y-1.5 hover:shadow-[0_20px_45px_rgba(0,20,13,0.12)] relative">
      {/* Product Image Container */}
      <div
        className="w-full aspect-[4/3] sm:aspect-square overflow-hidden cursor-pointer bg-[#F8FFFC] relative flex items-center justify-center"
        onClick={() => onQuickView && onQuickView(product)}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>

      {/* Product Information Area */}
      <div className="p-6 text-center flex flex-col items-center flex-grow justify-between">
        <div className="flex flex-col items-center">
          {/* Category Tag */}
          <span className="inline-block px-3 py-1 rounded-full bg-[#0F4A38]/8 border border-[#0F4A38]/15 text-[#0F4A38] font-sans text-[10px] font-semibold tracking-[0.18em] uppercase mb-2">
            {product.categoryTag || (product.categoryKey === 'gold' ? '18K / 14K Gold' : 'Certified Diamond')}
          </span>

          <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#00140D] mb-1.5 group-hover:text-[#0F4A38] transition-colors duration-300">
            {product.name}
          </h3>

          <p className="font-sans text-xs text-gray-500 mb-5 leading-relaxed font-light max-w-[260px] line-clamp-2">
            {product.subTitle || product.description}
          </p>
        </div>

        {/* Action Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-[#01271B] group-hover:bg-[#0F4A38] text-white no-underline rounded-xl py-3 px-5 font-sans font-semibold text-[11px] tracking-[0.08em] uppercase inline-flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 shadow-xs border border-[#D8B46A]/20"
        >
          <FaWhatsapp className="text-sm text-[#25D366]" />
          <span>INQUIRE NOW</span>
          <FaArrowRight className="text-[10px] text-[#D8B46A] transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
};

export default ProductCard;

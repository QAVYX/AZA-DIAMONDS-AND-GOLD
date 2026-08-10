import React from 'react';

export const SectionTitle = ({
  title,
  subtitle,
  centered = true,
  theme = 'light',
  className = ''
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}>
      <h2 className={`font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight mb-3 ${
        theme === 'dark' ? 'text-white' : 'text-[#1E1E1E]'
      }`}>
        {title}
      </h2>
      
      <div className="inline-flex items-center gap-3 mb-3.5">
        <span className="w-10 h-px bg-[#D8B46A]/40" />
        <span className="text-[#D8B46A] text-[10px]">❖</span>
        <span className="w-10 h-px bg-[#D8B46A]/40" />
      </div>

      {subtitle && (
        <p className={`font-sans text-sm sm:text-base max-w-xl mx-auto leading-relaxed ${
          theme === 'dark' ? 'text-white/75' : 'text-gray-600'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;

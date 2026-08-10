import React from 'react';

export const Button = ({
  children,
  variant = 'gold',
  size = 'medium',
  href,
  onClick,
  icon,
  className = '',
  target,
  ...props
}) => {
  const baseClasses = "inline-flex items-center justify-center gap-2.5 rounded-full font-sans font-bold tracking-wider uppercase transition-all duration-300 whitespace-nowrap cursor-pointer";
  
  const sizeClasses = size === 'small' ? 'px-5 py-2 text-xs' : 'px-8 py-3.5 text-xs sm:text-sm';

  const variantClasses = {
    gold: 'bg-gradient-to-r from-[#D8B46A] to-[#C49A4D] text-[#00140D] shadow-[0_4px_15px_rgba(216,180,106,0.25)] hover:shadow-[0_8px_25px_rgba(216,180,106,0.4)] hover:-translate-y-0.5',
    'outline-light': 'border border-[#D8B46A]/60 text-[#D8B46A] hover:bg-[#D8B46A]/10 hover:border-[#D8B46A] hover:text-white hover:-translate-y-0.5',
    primary: 'bg-[#01271B] hover:bg-[#0F4A38] text-white shadow-[0_4px_15px_rgba(0,20,13,0.25)] hover:shadow-[0_8px_25px_rgba(0,20,13,0.4)] hover:-translate-y-0.5 border border-[#D8B46A]/20'
  }[variant] || '';

  const combinedClasses = `${baseClasses} ${sizeClasses} ${variantClasses} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        onClick={onClick}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        {...props}
      >
        <span>{children}</span>
        {icon && <span className="inline-flex items-center text-base">{icon}</span>}
      </a>
    );
  }

  return (
    <button className={combinedClasses} onClick={onClick} {...props}>
      <span>{children}</span>
      {icon && <span className="inline-flex items-center text-base">{icon}</span>}
    </button>
  );
};

export default Button;

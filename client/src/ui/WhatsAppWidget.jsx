import React, { useState } from 'react';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';
import { BUILD_WHATSAPP_LINK } from '@/utils/constants';

export const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const quickReplies = [
    'I want to inquire about 18K Gold Collections.',
    'I want to inquire about Certified Diamonds.',
    'Can I customize a solitaire ring?',
    'What are your showroom locations in Kannur?'
  ];

  return (
    <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end">
      {/* Concierge Drawer Box */}
      {isOpen && (
        <div className="mb-3 w-[calc(100vw-2rem)] sm:w-80 max-w-[340px] bg-[#0F4A38] bg-gradient-to-b from-[#0F4A38] via-[#063326] to-[#01271B] border border-[#D8B46A]/40 rounded-2xl p-4 sm:p-5 shadow-[0_20px_40px_rgba(0,0,0,0.6)] text-white animate-fade-in">
          <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <div>
                <strong className="font-serif text-base font-medium text-[#D8B46A] block leading-none">AZA Concierge</strong>
                <span className="font-sans text-[10px] text-white/60">Live Jewellery Expert</span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/60 hover:text-white bg-transparent border-0 cursor-pointer p-1"
            >
              <FaTimes />
            </button>
          </div>

          <p className="font-sans text-xs text-white/80 leading-relaxed font-light mb-3">
            Welcome to AZA Diamonds & Gold. How may we assist your fine jewellery selection today?
          </p>

          <div className="space-y-2 mb-3">
            {quickReplies.map((reply, idx) => (
              <a
                key={idx}
                href={BUILD_WHATSAPP_LINK(reply)}
                target="_blank"
                rel="noopener noreferrer"
                className="block font-sans text-[11px] sm:text-xs p-2.5 rounded-lg bg-white/5 border border-white/10 hover:border-[#D8B46A] hover:bg-[#D8B46A]/10 text-white/90 no-underline transition-colors font-light"
              >
                {reply}
              </a>
            ))}
          </div>

          <a
            href={BUILD_WHATSAPP_LINK('Hi AZA Team, I would like to consult with an expert.')}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-4 rounded-full bg-[#25D366] text-white font-sans text-xs font-semibold tracking-wider uppercase inline-flex items-center justify-center gap-2 no-underline shadow-md hover:bg-[#20ba5a] transition-colors"
          >
            <FaWhatsapp className="text-base" /> Start Direct Chat
          </a>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Chat on WhatsApp"
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center text-xl sm:text-2xl shadow-[0_8px_25px_rgba(37,211,102,0.4)] hover:scale-105 cursor-pointer border-0 transition-transform duration-300"
      >
        <FaWhatsapp />
      </button>
    </div>
  );
};

export default WhatsAppWidget;

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaChevronDown, FaQuestionCircle, FaWhatsapp, FaShieldAlt } from 'react-icons/fa';
import Container from '@/components/common/Container';
import { BUILD_WHATSAPP_LINK } from '@/utils/constants';
import emeraldSilkBg from '@/assets/images/emerald_silk_texture.png';

export const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'Is your gold jewellery BIS hallmark certified?',
      a: 'Yes, all gold jewellery at AZA Diamonds and Gold is BIS hallmark certified, guaranteeing purity across our 22K Gold, 18K Diamond, and 18K Gold collections.',
    },
    {
      q: 'What is lightweight diamond jewellery?',
      a: 'Lightweight diamond jewellery is designed with reduced metal weight and thinner settings, making pieces comfortable for daily wear while retaining diamond brilliance and design detail.',
    },
    {
      q: 'Which gold karat is best for daily wear?',
      a: '18K Gold and 22K Gold are ideal choices for daily wear and special occasions due to their timeless beauty, durability, and certified purity.',
    },
    {
      q: 'Do you offer certified diamonds?',
      a: 'Yes, all diamonds sold at AZA are certified for clarity, cut, and authenticity.',
    },
    {
      q: 'Where is AZA Diamonds and Gold located?',
      a: 'We are located in Global Village, Kannur, Kerala, India.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="pt-24 bg-[#FAF8F5] min-h-screen text-[#00140D]">
      <Helmet>
        <title>Frequently Asked Questions | AZA Diamonds & Gold</title>
        <meta
          name="description"
          content="Find answers to frequently asked questions about BIS hallmarked gold purities, certified diamonds, and showroom locations in Kannur."
        />
      </Helmet>

      {/* Hero Header Banner - Dark Emerald Silk */}
      <section
        className="bg-[#00170F] bg-cover bg-center bg-no-repeat text-white py-12 sm:py-16 md:py-20 text-center relative overflow-hidden border-b border-[#C9A14A]/20"
        style={{ backgroundImage: `url(${emeraldSilkBg})` }}
      >
        <div className="absolute inset-0 bg-[#00140D]/45 pointer-events-none" />
        <Container className="relative z-10">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-[#C9A14A] text-[9px]">✦</span>
            <span className="font-sans text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] text-[#C9A14A] uppercase">
              HELP & SUPPORT
            </span>
            <span className="text-[#C9A14A] text-[9px]">✦</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-3.5 leading-tight">
            Frequently Asked <span className="font-mango text-[#D8B46A] italic">Questions</span>
          </h1>

          <p className="font-sans text-xs sm:text-sm md:text-base text-white/80 max-w-xl mx-auto leading-relaxed font-light">
            Everything you need to know about our gold purities, diamond certification, and Kannur showroom.
          </p>
        </Container>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-12 sm:py-16 md:py-24">
        <Container className="max-w-4xl mx-auto">
          <div className="space-y-3 sm:space-y-4 mb-12 sm:mb-16">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-black/5 shadow-sm overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full p-4 sm:p-6 md:p-7 text-left flex items-center justify-between gap-3 sm:gap-4 cursor-pointer bg-transparent border-0"
                  >
                    <div className="flex items-center gap-3 sm:gap-3.5">
                      <FaQuestionCircle className="text-[#C9A14A] text-base sm:text-lg shrink-0" />
                      <span className="font-serif text-base sm:text-xl font-medium text-[#00140D]">
                        {faq.q}
                      </span>
                    </div>
                    <div className={`w-7 h-7 sm:w-8 sm:h-8 shrink-0 rounded-full bg-[#FAF5EC] border border-[#C9A14A]/30 flex items-center justify-center text-[#C9A14A] transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#00140D] text-white border-none' : ''}`}>
                      <FaChevronDown className="text-xs" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-7 sm:pb-7 pt-0 border-t border-gray-100 font-sans text-xs sm:text-sm text-gray-600 leading-relaxed font-light mt-2">
                      <p className="max-w-3xl">{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom WhatsApp Support Box */}
          <div
            className="bg-[#00170F] bg-cover bg-center bg-no-repeat text-white rounded-2xl p-6 sm:p-8 md:p-10 text-center relative overflow-hidden shadow-xl border border-[#D8B46A]/30"
            style={{ backgroundImage: `url(${emeraldSilkBg})` }}
          >
            <div className="absolute inset-0 bg-[#00140D]/40 pointer-events-none" />
            <div className="relative z-10">
              <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-medium mb-3">
                Have Additional Questions?
              </h3>
              <p className="font-sans text-xs sm:text-sm text-white/80 max-w-md mx-auto mb-6 font-light">
                Our jewellery experts in Kannur are ready to answer any custom design or pricing query directly.
              </p>
              <a
                href={BUILD_WHATSAPP_LINK('Hi AZA Team, I have a question about your jewellery collections.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white text-[#00140D] hover:bg-gray-100 rounded-lg px-6 sm:px-8 py-3.5 font-sans font-semibold text-xs tracking-widest uppercase transition-all shadow-md no-underline"
              >
                <FaWhatsapp className="text-base text-[#25D366]" />
                <span>ASK US ON WHATSAPP</span>
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default FAQPage;

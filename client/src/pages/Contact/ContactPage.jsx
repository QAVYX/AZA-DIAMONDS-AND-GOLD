import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp, FaClock, FaExternalLinkAlt } from 'react-icons/fa';
import Container from '@/components/common/Container';
import { BUILD_WHATSAPP_LINK } from '@/utils/constants';
import emeraldSilkBg from '@/assets/images/emerald_silk_texture.png';

export const ContactPage = () => {
  const [mapActive, setMapActive] = useState(false);

  return (
    <div className="pt-24 bg-[#FAF8F5] min-h-screen text-[#00140D]">
      <Helmet>
        <title>Contact Us | AZA Diamonds & Gold Kannur</title>
        <meta
          name="description"
          content="Visit AZA Diamonds & Gold luxury showroom at Global Village, Kannur, Kerala or chat with us directly on WhatsApp."
        />
      </Helmet>

      {/* Hero Header Banner - Dark Emerald Silk */}
      <section
        className="bg-[#00170F] bg-cover bg-center bg-no-repeat text-white py-12 sm:py-16 md:py-20 text-center relative overflow-hidden border-b border-[#C9A14A]/20"
        style={{ backgroundImage: `url(${emeraldSilkBg})` }}
      >
        <div className="absolute inset-0 bg-[#00140D]/45 pointer-events-none" />
        <Container className="relative z-10">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="text-[#C9A14A] text-[9px]">✦</span>
            <span className="font-sans text-[10px] sm:text-[11px] font-semibold tracking-[0.25em] text-[#D8B46A] uppercase">
              GET IN TOUCH
            </span>
            <span className="text-[#C9A14A] text-[9px]">✦</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-3.5 leading-tight">
            Visit Our Showroom in <span className="font-mango text-[#D8B46A] italic">Kannur</span>
          </h1>

          <p className="font-sans text-xs sm:text-sm md:text-base text-white/80 max-w-xl mx-auto leading-relaxed font-light">
            Experience our 22K Gold, 18K Diamond & 18K Gold certified collections in person or connect with us directly.
          </p>
        </Container>
      </section>

      {/* Main Content Area */}
      <section className="py-10 sm:py-14 md:py-20">
        <Container>
          {/* Top 3 Info Cards Grid - Equal Height & Sleek White Icons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-7 items-stretch mb-14 sm:mb-18">
            {/* Card 1: Location */}
            <div className="bg-white rounded-2xl p-5.5 sm:p-6.5 border border-[#C5A059]/25 hover:border-[#C5A059]/60 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between items-center text-center group relative overflow-hidden hover:-translate-y-1 h-full">
              <div className="flex flex-col items-center w-full">
                <div className="w-12 h-12 rounded-xl bg-[#062B1E] text-white border border-[#C5A059]/30 flex items-center justify-center text-lg mb-3 group-hover:scale-108 group-hover:bg-[#00170F] transition-all duration-300 shadow-md shrink-0">
                  <FaMapMarkerAlt />
                </div>
                
                <span className="font-sans text-[9.5px] font-bold tracking-[0.2em] text-[#C5A059] uppercase block mb-1">
                  SHOWROOM
                </span>
                
                <h3 className="font-serif text-lg sm:text-xl font-medium text-[#00140D] mb-2">
                  Location & Address
                </h3>
                
                <p className="font-sans text-xs text-gray-600 leading-relaxed font-light mb-3 max-w-xs">
                  AZA Diamonds & Gold,<br />
                  Global Village, Kannur,<br />
                  Kerala, India - 670001
                </p>
              </div>

              <a
                href="https://maps.google.com/?q=AZA+Diamonds+Gold+Global+Village+Kannur"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#062B1E] hover:bg-[#042A20] text-white rounded-xl py-3 font-sans font-bold text-xs tracking-wider uppercase inline-flex items-center justify-center gap-2 transition-all no-underline shadow-sm group/btn border border-[#C5A059]/30 mt-3"
              >
                <FaExternalLinkAlt className="text-[11px] text-white group-hover/btn:scale-110 transition-transform" />
                <span className="text-white">GET DIRECTIONS</span>
              </a>
            </div>

            {/* Card 2: Phone & Timings */}
            <div className="bg-white rounded-2xl p-5.5 sm:p-6.5 border border-[#C5A059]/25 hover:border-[#C5A059]/60 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between items-center text-center group relative overflow-hidden hover:-translate-y-1 h-full">
              <div className="flex flex-col items-center w-full">
                <div className="w-12 h-12 rounded-xl bg-[#062B1E] text-white border border-[#C5A059]/30 flex items-center justify-center text-lg mb-3 group-hover:scale-108 group-hover:bg-[#00170F] transition-all duration-300 shadow-md shrink-0">
                  <FaPhoneAlt />
                </div>
                
                <span className="font-sans text-[9.5px] font-bold tracking-[0.2em] text-[#C5A059] uppercase block mb-1">
                  CALL CONCIERGE
                </span>

                <h3 className="font-serif text-lg sm:text-xl font-medium text-[#00140D] mb-2">
                  Call & Inquiry
                </h3>

                <a href="tel:+919847555916" className="font-sans text-base sm:text-lg font-bold text-[#062B1E] hover:text-[#C5A059] transition-colors no-underline block mb-2">
                  +91 98475 55916
                </a>

                <div className="inline-flex items-center gap-1.5 text-[11px] text-gray-500 font-medium mb-3 bg-[#FAF5EC] px-3 py-1 rounded-full border border-[#C5A059]/30">
                  <FaClock className="text-[#C5A059]" />
                  <span>Mon – Sun: 10:00 AM – 9:00 PM</span>
                </div>
              </div>

              <a
                href="tel:+919847555916"
                className="w-full bg-[#062B1E] hover:bg-[#042A20] text-white rounded-xl py-3 font-sans font-bold text-xs tracking-wider uppercase inline-flex items-center justify-center gap-2 transition-all no-underline shadow-sm group/btn border border-[#C5A059]/30 mt-3"
              >
                <FaPhoneAlt className="text-[11px] text-white group-hover/btn:scale-110 transition-transform" />
                <span className="text-white">CALL SHOWROOM NOW</span>
              </a>
            </div>

            {/* Card 3: Instant WhatsApp Support */}
            <div className="bg-white rounded-2xl p-5.5 sm:p-6.5 border border-[#C5A059]/25 hover:border-[#C5A059]/60 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between items-center text-center group relative overflow-hidden hover:-translate-y-1 h-full">
              <div className="flex flex-col items-center w-full">
                <div className="w-12 h-12 rounded-xl bg-[#062B1E] text-white border border-[#C5A059]/30 flex items-center justify-center text-lg mb-3 group-hover:scale-108 group-hover:bg-[#00170F] transition-all duration-300 shadow-md shrink-0">
                  <FaWhatsapp />
                </div>
                
                <span className="font-sans text-[9.5px] font-bold tracking-[0.2em] text-[#C5A059] uppercase block mb-1">
                  WHATSAPP CHAT
                </span>

                <h3 className="font-serif text-lg sm:text-xl font-medium text-[#00140D] mb-2">
                  Instant Support
                </h3>

                <p className="font-sans text-xs text-gray-600 leading-relaxed font-light mb-3 max-w-xs">
                  Direct support for custom jewellery design inquiries, gold purity & pricing.
                </p>
              </div>

              <a
                href={BUILD_WHATSAPP_LINK('Hi AZA Team, I would like to inquire about your jewellery collections.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#062B1E] hover:bg-[#042A20] text-white rounded-xl py-3 font-sans font-bold text-xs tracking-wider uppercase inline-flex items-center justify-center gap-2 transition-all no-underline shadow-sm group/btn border border-[#C5A059]/30 mt-3"
              >
                <FaWhatsapp className="text-base text-white group-hover/btn:scale-110 transition-transform" />
                <span className="text-white">CHAT ON WHATSAPP</span>
              </a>
            </div>
          </div>

          {/* Centered Embedded Interactive Google Map Section */}
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-6">
              <span className="font-sans text-[10px] sm:text-[11px] font-bold tracking-[0.25em] text-[#C5A059] uppercase block mb-1">
                FIND OUR SHOWROOM
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#00140D]">
                Interactive Location Map
              </h2>
            </div>

            <div
              className="bg-white rounded-2xl overflow-hidden border border-[#C5A059]/25 shadow-lg flex flex-col relative h-[320px] sm:h-[360px] lg:h-[400px]"
              onMouseLeave={() => setMapActive(false)}
            >
              {/* Sleek Map Header Bar */}
              <div className="p-4 sm:p-4.5 bg-[#01271B] text-white flex items-center justify-between z-10 shrink-0 border-b border-[#C5A059]/30">
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-white text-sm" />
                  <span className="font-sans font-bold text-[10px] sm:text-xs tracking-wider uppercase text-white">
                    GLOBAL VILLAGE, KANNUR
                  </span>
                </div>
                <a
                  href="https://maps.google.com/?q=AZA+Diamonds+Gold+Global+Village+Kannur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] sm:text-xs text-white/90 hover:text-white transition-colors flex items-center gap-1.5 no-underline font-semibold bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full border border-white/20"
                >
                  <span>Open in Google Maps</span>
                  <FaExternalLinkAlt className="text-[9px] text-white" />
                </a>
              </div>

              {/* Embedded Google Maps iFrame Container */}
              <div className="relative w-full h-full flex-grow">
                {!mapActive && (
                  <div
                    onClick={() => setMapActive(true)}
                    className="absolute inset-0 z-20 bg-black/5 hover:bg-black/10 transition-colors flex items-center justify-center cursor-pointer group"
                    title="Click map to interact"
                  >
                    <span className="bg-[#01271B]/90 text-white font-sans font-bold text-[11px] tracking-wider uppercase px-4 py-2 rounded-full shadow-lg border border-[#D8B46A]/40 group-hover:scale-105 transition-transform">
                      Click Map to Interact
                    </span>
                  </div>
                )}

                <iframe
                  title="AZA Diamonds & Gold Showroom Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3904.757833096053!2d75.3697!3d11.8745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDUyJzI4LjIiTiA3NcKwMjInMTAuOSJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  className={`w-full h-full border-0 ${mapActive ? 'pointer-events-auto' : 'pointer-events-none'}`}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default ContactPage;

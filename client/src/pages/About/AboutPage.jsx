import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaGem, FaTag, FaUsers, FaShieldAlt, FaMedal, FaMapMarkerAlt } from 'react-icons/fa';
import Container from '@/components/common/Container';
import storyImg from '@/assets/images/collection_18k_exact.jpg';
import goldCollImg from '@/assets/images/collection_14k_exact.jpg';
import diamondCollImg from '@/assets/images/featured_necklace_exact.jpg';
import showroomImg from '@/assets/images/showroom_about.png';
import emeraldSilkBg from '@/assets/images/emerald_silk_texture.png';

export const AboutPage = () => {
  return (
    <div className="pt-24 bg-[#FAF8F5] min-h-screen text-[#00140D]">
      <Helmet>
        <title>About Us | AZA Diamonds & Gold Kannur</title>
        <meta
          name="description"
          content="Learn about AZA Diamonds & Gold, Kannur's premier destination for fine gold and certified diamond jewellery in Global Village."
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
            <FaMapMarkerAlt className="text-[#D8B46A] text-xs" />
            <span className="font-sans text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] text-[#D8B46A] uppercase">
              SINCE GLOBAL VILLAGE, KANNUR
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-3.5 leading-tight">
            About <span className="font-highlight font-mango text-[#D8B46A] italic">AZA Diamonds and Gold</span>
          </h1>

          <div className="font-sans text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-white uppercase">
            LUXURY JEWELLERY SHOWROOM IN KANNUR
          </div>
        </Container>
      </section>

      {/* Our Story Section - REFINED EXACT BRAND STORY TEXT */}
      <section className="py-14 sm:py-20 md:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 sm:gap-12 lg:gap-16">
            {/* Story Text */}
            <div className="max-w-xl">
              <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-medium text-[#00140D] mb-4 sm:mb-6">
                Our Story
              </h2>
              <div className="w-16 h-px bg-[#C9A14A] mb-4 sm:mb-6" />

              <p className="font-sans text-sm sm:text-base md:text-[17px] leading-relaxed text-gray-700 font-light mb-4 sm:mb-5">
                At AZA Diamonds & Gold, we believe jewellery is more than something you wear — it is part of the moments you remember.
              </p>
              <p className="font-sans text-sm sm:text-base md:text-[17px] leading-relaxed text-gray-700 font-light">
                Founded in Global Village, Kannur, AZA brings thoughtfully selected diamond and gold jewellery to modern customers across Kerala’s Malabar region. From effortless everyday pieces to jewellery chosen for life’s special occasions, we focus on designs that feel elegant, comfortable, and genuinely personal.
              </p>
            </div>

            {/* Story Image */}
            <div className="rounded-2xl overflow-hidden shadow-[0_20px_45px_rgba(0,0,0,0.12)] border border-black/5">
              <img
                src={storyImg}
                alt="AZA Fine Jewellery Craftsmanship"
                className="w-full h-full max-h-[300px] sm:max-h-[420px] object-cover block"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* WHAT SETS US APART SECTION - MATCHING USER SCREENSHOT EXACTLY */}
      <section className="py-16 sm:py-22 bg-[#FAF9F5] border-y border-[#E9E4D9]">
        <Container>
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 max-w-2xl mx-auto">
            <span className="font-sans text-[11px] font-bold tracking-[0.25em] text-[#C9A45C] uppercase block mb-1.5">
              OUR DIFFERENCE
            </span>
            
            <div className="w-8 h-[1px] bg-[#C9A45C] mx-auto mb-3" />

            <h2 className="font-serif text-3xl sm:text-4xl md:text-[44px] font-medium text-[#063B2D] tracking-tight mb-3">
              What Sets Us Apart
            </h2>
            
            <p className="font-sans text-xs sm:text-sm text-stone-600 font-light max-w-xl mx-auto">
              A showroom experience built around trust, comfort, and everyday wearability.
            </p>
          </div>

          {/* 4 Editorial Columns Separated by Thin Champagne-Gold Vertical Lines (No Card Backgrounds) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-[#C9A45C]/35">
            {/* 1. Specialized Focus */}
            <div className="flex flex-col items-center text-center px-4 lg:px-6">
              {/* Minimal Line Icon */}
              <div className="relative mb-5 text-[#062B1E]">
                <FaGem size={34} />
                <span className="absolute -top-1 -right-2 text-[10px] text-[#062B1E]">✦</span>
              </div>

              <h3 className="font-serif text-xl font-medium text-[#18201D] mb-2">
                Specialized Focus
              </h3>

              <div className="w-6 h-[1.5px] bg-[#C9A45C] mb-3.5" />

              <p className="font-sans text-xs sm:text-[13px] text-[#18201D]/75 font-light leading-relaxed max-w-[220px]">
                We focus on lightweight diamond jewellery, unlike traditional heavy-gold-only showrooms.
              </p>
            </div>

            {/* 2. Transparent Pricing */}
            <div className="flex flex-col items-center text-center px-4 lg:px-6">
              {/* Minimal Line Icon */}
              <div className="mb-5 text-[#062B1E]">
                <FaTag size={34} />
              </div>

              <h3 className="font-serif text-xl font-medium text-[#18201D] mb-2">
                Transparent Pricing
              </h3>

              <div className="w-6 h-[1.5px] bg-[#C9A45C] mb-3.5" />

              <p className="font-sans text-xs sm:text-[13px] text-[#18201D]/75 font-light leading-relaxed max-w-[220px]">
                Get honest pricing across 18K Diamond, 22K Gold, and 18K Gold purities. No hidden surprises.
              </p>
            </div>

            {/* 3. Personal Guidance */}
            <div className="flex flex-col items-center text-center px-4 lg:px-6">
              {/* Minimal Line Icon */}
              <div className="mb-5 text-[#062B1E]">
                <FaUsers size={34} />
              </div>

              <h3 className="font-serif text-xl font-medium text-[#18201D] mb-2">
                Personal Guidance
              </h3>

              <div className="w-6 h-[1.5px] bg-[#C9A45C] mb-3.5" />

              <p className="font-sans text-xs sm:text-[13px] text-[#18201D]/75 font-light leading-relaxed max-w-[220px]">
                Personalized in-store support for first-time buyers, gifting, and bridal shopping.
              </p>
            </div>

            {/* 4. Guaranteed Authenticity */}
            <div className="flex flex-col items-center text-center px-4 lg:px-6">
              {/* Minimal Line Icon */}
              <div className="mb-5 text-[#062B1E]">
                <FaShieldAlt size={34} />
              </div>

              <h3 className="font-serif text-xl font-medium text-[#18201D] mb-2">
                Guaranteed Authenticity
              </h3>

              <div className="w-6 h-[1.5px] bg-[#C9A45C] mb-3.5" />

              <p className="font-sans text-xs sm:text-[13px] text-[#18201D]/75 font-light leading-relaxed max-w-[220px]">
                Every piece is BIS Hallmark certified gold and certified diamonds.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Inside Our Showroom Section */}
      <section className="py-14 sm:py-20 md:py-24">
        <Container>
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-medium text-[#00140D]">
              Inside Our Showroom
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 mb-12 sm:mb-16">
            {/* Showroom Photo 1 */}
            <div className="relative rounded-2xl overflow-hidden shadow-md group aspect-[4/3]">
              <img
                src={goldCollImg}
                alt="Gold Collection Display"
                className="w-full h-full object-cover block transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4 sm:p-5">
                <span className="font-sans font-semibold text-xs tracking-[1.5px] text-white uppercase">
                  GOLD COLLECTION
                </span>
              </div>
            </div>

            {/* Showroom Photo 2 */}
            <div className="relative rounded-2xl overflow-hidden shadow-md group aspect-[4/3]">
              <img
                src={diamondCollImg}
                alt="Diamond Jewellery Collection"
                className="w-full h-full object-cover block transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4 sm:p-5">
                <span className="font-sans font-semibold text-xs tracking-[1.5px] text-white uppercase">
                  DIAMOND JEWELLERY
                </span>
              </div>
            </div>

            {/* Showroom Photo 3 */}
            <div className="relative rounded-2xl overflow-hidden shadow-md group aspect-[4/3]">
              <img
                src={showroomImg}
                alt="AZA Showroom Interior"
                className="w-full h-full object-cover block transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4 sm:p-5">
                <span className="font-sans font-semibold text-xs tracking-[1.5px] text-white uppercase">
                  SHOWROOM INTERIOR
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default AboutPage;

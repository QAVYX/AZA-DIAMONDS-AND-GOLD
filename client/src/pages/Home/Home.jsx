import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '@/components/home/Hero';
import ProductShowcase from '@/components/home/ProductShowcase';
import HomeProducts from '@/components/home/HomeProducts';
import WhyChoose from '@/components/home/WhyChoose';
import About from '@/components/home/About';
import Testimonials from '@/components/home/Testimonials';
import CTA from '@/components/home/CTA';

export const Home = () => {
  return (
    <>
      <Helmet>
        <title>AZA Diamonds & Gold | Luxury Fine Jewellery | Kannur, Kerala</title>
        <meta
          name="description"
          content="Explore Kannur's premier destination for certified lightweight diamond jewellery and signature 22K Gold, 18K Diamond, and 18K Gold collections at AZA Diamonds & Gold."
        />
        <meta
          name="keywords"
          content="AZA Diamonds, AZA Gold, Jewellery Kannur, 18K Gold Kerala, Lightweight Diamonds, BIS Hallmarked Gold"
        />
      </Helmet>

      <Hero />
      <ProductShowcase />
      <HomeProducts />
      <About />
      <WhyChoose />
      <CTA />
      <Testimonials />
    </>
  );
};

export default Home;

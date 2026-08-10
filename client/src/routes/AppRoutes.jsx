import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import Home from '@/pages/Home/Home';
import CollectionsPage from '@/pages/Collections/CollectionsPage';
import AboutPage from '@/pages/About/AboutPage';
import FAQPage from '@/pages/FAQ/FAQPage';
import ContactPage from '@/pages/Contact/ContactPage';
import CartPage from '@/pages/Cart/CartPage';
import WishlistPage from '@/pages/Wishlist/WishlistPage';
import NotFoundPage from '@/pages/NotFound/NotFoundPage';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="collections" element={<CollectionsPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="faq" element={<FAQPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="wishlist" element={<WishlistPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;

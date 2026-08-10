import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { CartProvider } from '@/context/CartContext';
import { WishlistProvider } from '@/context/WishlistContext';
import LuxuryToast from '@/components/common/LuxuryToast';
import AppRoutes from '@/routes/AppRoutes';
import '@/styles/global.css';

export function App() {
  return (
    <HelmetProvider>
      <WishlistProvider>
        <CartProvider>
          <BrowserRouter>
            <LuxuryToast />
            <AppRoutes />
          </BrowserRouter>
        </CartProvider>
      </WishlistProvider>
    </HelmetProvider>
  );
}

export default App;

import React, { createContext, useContext, useState, useEffect } from 'react';

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('aza_wishlist_items');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  const [toast, setToast] = useState({
    visible: false,
    title: '',
    message: '',
    type: 'success', // 'wishlist' | 'cart' | 'info'
    image: null,
  });

  useEffect(() => {
    try {
      localStorage.setItem('aza_wishlist_items', JSON.stringify(wishlist));
    } catch (e) {
      console.warn('Could not save wishlist to localStorage', e);
    }
  }, [wishlist]);

  const showToast = (title, message, type = 'wishlist', image = null) => {
    setToast({
      visible: true,
      title,
      message,
      type,
      image,
    });
  };

  const hideToast = () => {
    setToast((prev) => ({ ...prev, visible: false }));
  };

  const toggleWishlist = (product) => {
    setWishlist((prevWishlist) => {
      const exists = prevWishlist.some((item) => item.id === product.id);
      if (exists) {
        showToast(
          'Removed from Wishlist',
          `"${product.name}" has been removed from your wishlist.`,
          'info',
          product.image
        );
        return prevWishlist.filter((item) => item.id !== product.id);
      } else {
        showToast(
          'Added to Wishlist',
          `"${product.name}" has been saved to your wishlist!`,
          'wishlist',
          product.image
        );
        return [
          ...prevWishlist,
          {
            id: product.id,
            name: product.name,
            subTitle: product.subTitle || product.categoryTag || '',
            price: product.price,
            numericPrice: product.numericPrice || parseFloat(String(product.price).replace(/[^0-9.]/g, '')) || 0,
            image: product.image,
            categoryTag: product.categoryTag || '',
          },
        ];
      }
    });
  };

  const removeFromWishlist = (productId) => {
    setWishlist((prev) => prev.filter((item) => item.id !== productId));
  };

  const isInWishlist = (productId) => {
    return wishlist.some((item) => item.id === productId);
  };

  const wishlistCount = wishlist.length;

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        toggleWishlist,
        removeFromWishlist,
        isInWishlist,
        wishlistCount,
        toast,
        showToast,
        hideToast,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};

export default WishlistContext;

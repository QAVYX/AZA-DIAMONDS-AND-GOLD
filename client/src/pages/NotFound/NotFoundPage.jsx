import React from 'react';
import { Helmet } from 'react-helmet-async';
import Container from '@/components/common/Container';
import Button from '@/components/common/Button';

export const NotFoundPage = () => {
  return (
    <div className="pt-32 pb-20 bg-[#F8FFFC] min-h-screen flex items-center justify-center">
      <Helmet>
        <title>404 Page Not Found | AZA Diamonds & Gold</title>
      </Helmet>

      <Container className="text-center">
        <h1 className="font-serif text-6xl sm:text-7xl font-bold text-[#0F4A38] mb-4">404</h1>
        <h2 className="font-serif text-2xl sm:text-3xl text-gray-800 mb-4">Page Not Found</h2>
        <p className="font-sans text-base text-gray-600 max-w-md mx-auto mb-8">
          The luxury creation or page you are searching for does not exist or has been moved.
        </p>
        <Button variant="gold" href="/">
          Return to Home
        </Button>
      </Container>
    </div>
  );
};

export default NotFoundPage;

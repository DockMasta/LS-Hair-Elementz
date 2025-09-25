import React from 'react';
import Hero from '../components/Hero';
import FeaturedServices from '../components/FeaturedServices';
import GalleryPreview from '../components/GalleryPreview';
import TestimonialsSlider from '../components/TestimonialsSlider';
import CTABanner from '../components/CTABanner';

const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedServices />
      <GalleryPreview />
      <TestimonialsSlider />
      <CTABanner />
    </div>
  );
};

export default Home;
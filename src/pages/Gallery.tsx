import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Styling', 'Coloring', 'Extensions', 'Braiding', 'Treatments', 'Salon'];

  const galleryImages = [
    {
      src: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Beautiful blonde hair styling transformation',
      category: 'Styling'
    },
    {
      src: 'https://images.pexels.com/photos/3065171/pexels-photo-3065171.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Hair coloring transformation - brunette to blonde',
      category: 'Coloring'
    },
    {
      src: 'https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Professional salon interior with modern styling chairs',
      category: 'Salon'
    },
    {
      src: 'https://images.pexels.com/photos/3993434/pexels-photo-3993434.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Balayage highlights on dark hair',
      category: 'Coloring'
    },
    {
      src: 'https://images.pexels.com/photos/3065171/pexels-photo-3065171.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Curly hair treatment results',
      category: 'Treatments'
    },
    {
      src: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Hair extension application process',
      category: 'Extensions'
    },
    {
      src: 'https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Intricate braiding styles showcase',
      category: 'Braiding'
    },
    {
      src: 'https://images.pexels.com/photos/3993434/pexels-photo-3993434.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Keratin treatment before and after',
      category: 'Treatments'
    },
    {
      src: 'https://images.pexels.com/photos/3065171/pexels-photo-3065171.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Professional blow dry styling',
      category: 'Styling'
    },
    {
      src: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Salon workspace with organic products',
      category: 'Salon'
    },
    {
      src: 'https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Hair weave installation results',
      category: 'Extensions'
    },
    {
      src: 'https://images.pexels.com/photos/3993434/pexels-photo-3993434.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Protective braiding styles',
      category: 'Braiding'
    }
  ];

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Gallery</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Witness the transformations and see the artistry of our professional stylists
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer"
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs px-3 py-1 rounded-full font-medium">
                    {image.category}
                  </span>
                </div>
                
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                    <ZoomIn className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready for Your Transformation?</h3>
            <p className="mb-6 opacity-90">
              Join our gallery of satisfied clients and experience the LS Hair Elementz difference
            </p>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300">
              Book Your Appointment
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300 z-10"
            >
              <X className="w-6 h-6" />
            </button>
            
            <img
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-full object-contain rounded-xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
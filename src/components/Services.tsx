import React, { useState } from 'react';
import { Wind, Scissors, Palette, Baby, Waves, Hop as Rope, Brush, Heart, Layers, Sun, Shield, Sparkles } from 'lucide-react';

const Services = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services = [
    {
      icon: Wind,
      name: 'Blow Dry',
      description: 'Professional styling and finishing for silky, voluminous hair that lasts.',
      details: 'Transform your hair with our expert blow-dry techniques using premium organic products for lasting shine and volume.'
    },
    {
      icon: Layers,
      name: 'Hair Extensions',
      description: 'Premium quality extensions for length, volume, and instant transformation.',
      details: '100% natural hair extensions applied with care for seamless, natural-looking results that blend perfectly.'
    },
    {
      icon: Palette,
      name: 'Balayage',
      description: 'Hand-painted highlights for natural, sun-kissed dimensional color.',
      details: 'Our signature balayage technique creates beautiful, natural-looking highlights with organic color formulations.'
    },
    {
      icon: Baby,
      name: "Children's Haircut",
      description: 'Gentle, patient styling for your little ones in a comfortable environment.',
      details: 'Specialized child-friendly approach with organic products safe for young, delicate hair.'
    },
    {
      icon: Waves,
      name: 'Curly Haircut',
      description: 'Specialized cuts designed to enhance and celebrate your natural curls.',
      details: 'Expert techniques for curly hair that work with your natural texture for beautiful, defined curls.'
    },
    {
      icon: Rope,
      name: 'Hair Braiding',
      description: 'Intricate braiding styles from classic to contemporary protective styles.',
      details: 'Traditional and modern braiding techniques that protect your hair while creating stunning styles.'
    },
    {
      icon: Brush,
      name: 'Hair Coloring',
      description: 'Full color services using organic, ammonia-free formulations.',
      details: 'Complete color transformations with gentle, organic formulations that nourish while they color.'
    },
    {
      icon: Heart,
      name: 'Hair Treatment',
      description: 'Deep conditioning and restorative treatments for healthy hair.',
      details: 'Intensive treatments using 100% organic extracts to restore health, shine, and strength to damaged hair.'
    },
    {
      icon: Sparkles,
      name: 'Hair Weaves',
      description: 'Professional weave installation for added length and volume.',
      details: 'Expert weave application techniques for natural-looking results with premium quality hair.'
    },
    {
      icon: Sun,
      name: 'Highlights',
      description: 'Precision highlighting for brightness and dimensional color.',
      details: 'Professional highlighting techniques using organic formulations for vibrant, long-lasting color.'
    },
    {
      icon: Shield,
      name: 'Keratin Treatment',
      description: 'Smoothing treatment that reduces frizz and adds incredible shine.',
      details: 'Advanced keratin treatments that smooth, strengthen, and protect your hair for months.'
    },
    {
      icon: Scissors,
      name: 'Locs',
      description: 'Professional loc maintenance and styling services.',
      details: 'Specialized care for locs including maintenance, styling, and treatment with organic products.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of professional hair services, each performed with 100% organic products
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isHovered = hoveredService === index;
            
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className="relative overflow-hidden">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl mb-4 group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">
                    <IconComponent className={`w-8 h-8 ${isHovered ? 'text-white' : 'text-purple-600'} transition-colors duration-300`} />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all duration-300">
                    {service.name}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Expandable details */}
                  <div className={`transition-all duration-300 overflow-hidden ${
                    isHovered ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-xs text-gray-500 leading-relaxed">
                        {service.details}
                      </p>
                    </div>
                  </div>

                  <div className={`mt-4 transition-all duration-300 ${
                    isHovered ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-2'
                  }`}>
                    <span className="text-sm font-medium bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      Learn More →
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300">
            Book Your Service Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
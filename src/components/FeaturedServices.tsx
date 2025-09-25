import React from 'react';
import { Link } from 'react-router-dom';
import { Wind, Palette, Layers, Heart, ArrowRight } from 'lucide-react';

const FeaturedServices = () => {
  const featuredServices = [
    {
      icon: Wind,
      name: 'Professional Blow Dry',
      description: 'Silky, voluminous styling that lasts',
      price: 'From $45'
    },
    {
      icon: Palette,
      name: 'Balayage Highlights',
      description: 'Natural, sun-kissed dimensional color',
      price: 'From $120'
    },
    {
      icon: Layers,
      name: 'Hair Extensions',
      description: 'Premium quality for instant transformation',
      price: 'From $150'
    },
    {
      icon: Heart,
      name: 'Organic Treatments',
      description: 'Deep conditioning with 100% organic extracts',
      price: 'From $60'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our most popular services, each performed with 100% organic products
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl mb-4 group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">
                  <IconComponent className="w-8 h-8 text-purple-600 group-hover:text-white transition-colors duration-300" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all duration-300">
                  {service.name}
                </h3>
                
                <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                  {service.description}
                </p>

                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-purple-600">{service.price}</span>
                  <span className="text-sm font-medium bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn More →
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Link 
            to="/services"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <span>View All Services</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
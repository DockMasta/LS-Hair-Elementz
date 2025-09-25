import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Phone, Sparkles } from 'lucide-react';

const CTABanner = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
      <div className="container mx-auto px-4">
        <div className="text-center text-white">
          <Sparkles className="w-16 h-16 mx-auto mb-6 opacity-80" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready for Your Hair Transformation?
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
            Experience the LS Hair Elementz difference with our 100% organic products 
            and expert stylists. Your journey to beautiful, healthy hair starts here.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link
              to="/contact"
              className="group bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center space-x-2"
            >
              <Calendar className="w-5 h-5" />
              <span>Book Your Appointment</span>
            </Link>
            
            <a
              href="tel:+1234567890"
              className="group bg-white/10 backdrop-blur-md text-white border-2 border-white/30 px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 hover:scale-105 transition-all duration-300 flex items-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now: (123) 456-7890</span>
            </a>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-white/90">
            <div className="text-center">
              <div className="text-2xl font-bold">500+</div>
              <div className="text-sm">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">5★</div>
              <div className="text-sm">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">100%</div>
              <div className="text-sm">Organic Products</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">5+</div>
              <div className="text-sm">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
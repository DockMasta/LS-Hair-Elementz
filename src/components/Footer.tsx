import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, Phone, MapPin, Heart, Send, CheckCircle } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Blog', href: '/blog' },
    { label: 'Testimonials', href: '/testimonials' }
  ];

  const services = [
    'Blow Dry',
    'Hair Extensions',
    'Balayage',
    'Hair Coloring',
    'Keratin Treatment',
    'Hair Braiding'
  ];

  return (
    <footer className="bg-black text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <img 
                src="/LS Hair Elementz Icon.png" 
                alt="LS Hair Elementz" 
                className="w-12 h-12 object-contain"
              />
              <div>
                <h3 className="text-2xl font-bold">LS Hair Elementz</h3>
                <p className="text-sm text-gray-400">100% Organic Extracts</p>
              </div>
            </Link>
            
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Transform your hair with our professional styling services using only the finest 
              organic products. Experience the difference of pure, natural beauty care.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <span className="text-gray-300">123 Beauty Boulevard, Stylish City, SC 12345</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-white transition-colors">
                  (123) 456-7890
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <a href="mailto:hello@lshairelementz.com" className="text-gray-300 hover:text-white transition-colors">
                  hello@lshairelementz.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href} 
                    className="text-gray-300 hover:text-white hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 hover:bg-clip-text transition-all duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Popular Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    to="/services"
                    className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="max-w-md mx-auto text-center">
            <h4 className="text-xl font-semibold mb-4">Stay Beautiful</h4>
            <p className="text-gray-300 mb-6">
              Subscribe to our newsletter for hair care tips, exclusive offers, and styling inspiration
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                required
              />
              <button 
                type="submit"
                disabled={isSubscribed}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubscribed ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    <span className="hidden sm:inline">Subscribed!</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span className="hidden sm:inline">Subscribe</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-6">Follow Us</h4>
            <div className="flex justify-center space-x-4 mb-8">
              <a 
                href="#" 
                className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-all duration-300 group"
              >
                <Facebook className="w-6 h-6 text-gray-400 group-hover:text-white" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-all duration-300 group"
              >
                <Instagram className="w-6 h-6 text-gray-400 group-hover:text-white" />
              </a>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-2xl p-6 max-w-md mx-auto">
              <h5 className="text-xl font-semibold mb-2">Ready for Your Transformation?</h5>
              <p className="text-gray-300 mb-4">Book your appointment today and discover the LS Hair Elementz difference</p>
              <Link 
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 inline-block"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 LS Hair Elementz. All Rights Reserved.
            </p>
            
            <div className="flex items-center space-x-1 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              <span>for beautiful hair</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
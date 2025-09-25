import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Star } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        {/* Top bar with tagline and ratings */}
        <div className="hidden md:flex justify-between items-center py-2 text-sm border-b border-gray-200/20">
          <span className={`font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>Pure Hair. Pure Confidence.</span>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
              <span className={`font-bold ml-2 ${isScrolled ? 'text-gray-900' : 'text-white'}`}>Award Winning Salon</span>
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <nav className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/LS Hair Elementz Icon.png" 
              alt="LS Hair Elementz" 
              className="w-12 h-12 object-contain"
            />
            <div>
              <h1 className={`text-2xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>LS Hair Elementz</h1>
              <p className={`text-sm font-bold hidden sm:block ${isScrolled ? 'text-gray-600' : 'text-white'}`}>100% Organic Extracts</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`font-bold transition-all duration-300 ${
                  isActive(item.href)
                    ? 'text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text'
                    : isScrolled 
                      ? 'text-gray-900 hover:text-transparent hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:bg-clip-text'
                      : 'text-white hover:text-transparent hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:bg-clip-text'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link 
              to="/contact"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className={`md:hidden p-2 ${isScrolled ? 'text-gray-900' : 'text-white'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden bg-white/95 backdrop-blur-md transition-all duration-300 ${
        isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="px-4 py-4 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={`block font-bold transition-colors duration-300 py-2 ${
                isActive(item.href)
                  ? 'text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text'
                  : 'text-gray-900 hover:text-purple-600'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link 
            to="/contact"
            className="block w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-full font-medium text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Book Now
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
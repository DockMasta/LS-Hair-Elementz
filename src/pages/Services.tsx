import React, { useState } from 'react';
import { Wind, Scissors, Palette, Baby, Waves, Hop as Rope, Brush, Heart, Layers, Sun, Shield, Sparkles, X } from 'lucide-react';

const Services = () => {
  const [selectedService, setSelectedService] = useState<any>(null);

  const services = [
    {
      icon: Wind,
      name: 'Blow Dry',
      price: '$45 - $65',
      duration: '45 mins',
      description: 'Professional styling and finishing for silky, voluminous hair that lasts.',
      details: 'Transform your hair with our expert blow-dry techniques using premium organic products for lasting shine and volume. Our stylists use advanced techniques to create smooth, bouncy styles that complement your face shape and lifestyle.',
      benefits: ['Long-lasting volume', 'Silky smooth finish', 'Heat protection', 'Organic products only']
    },
    {
      icon: Layers,
      name: 'Hair Extensions',
      price: '$150 - $400',
      duration: '2-3 hours',
      description: 'Premium quality extensions for length, volume, and instant transformation.',
      details: '100% natural hair extensions applied with care for seamless, natural-looking results that blend perfectly with your natural hair. Choose from clip-ins, tape-ins, or permanent application methods.',
      benefits: ['100% human hair', 'Natural color matching', 'Multiple application methods', 'Long-lasting results']
    },
    {
      icon: Palette,
      name: 'Balayage',
      price: '$120 - $200',
      duration: '2-3 hours',
      description: 'Hand-painted highlights for natural, sun-kissed dimensional color.',
      details: 'Our signature balayage technique creates beautiful, natural-looking highlights with organic color formulations. This freehand painting technique gives you a customized, low-maintenance color that grows out beautifully.',
      benefits: ['Natural sun-kissed look', 'Low maintenance', 'Customized placement', 'Organic color formulas']
    },
    {
      icon: Baby,
      name: "Children's Haircut",
      price: '$25 - $35',
      duration: '30 mins',
      description: 'Gentle, patient styling for your little ones in a comfortable environment.',
      details: 'Specialized child-friendly approach with organic products safe for young, delicate hair. Our patient stylists create a fun, comfortable experience while delivering age-appropriate cuts.',
      benefits: ['Child-friendly environment', 'Gentle organic products', 'Patient stylists', 'Fun experience']
    },
    {
      icon: Waves,
      name: 'Curly Haircut',
      price: '$55 - $75',
      duration: '60 mins',
      description: 'Specialized cuts designed to enhance and celebrate your natural curls.',
      details: 'Expert techniques for curly hair that work with your natural texture for beautiful, defined curls. Our curl specialists understand the unique needs of textured hair and create cuts that enhance your natural pattern.',
      benefits: ['Curl-specific techniques', 'Enhanced natural texture', 'Reduced frizz', 'Shape and definition']
    },
    {
      icon: Rope,
      name: 'Hair Braiding',
      price: '$40 - $150',
      duration: '1-4 hours',
      description: 'Intricate braiding styles from classic to contemporary protective styles.',
      details: 'Traditional and modern braiding techniques that protect your hair while creating stunning styles. From simple braids to complex protective styles, our braiding specialists create beautiful, long-lasting looks.',
      benefits: ['Protective styling', 'Long-lasting results', 'Various style options', 'Hair health focused']
    },
    {
      icon: Brush,
      name: 'Hair Coloring',
      price: '$80 - $180',
      duration: '2-3 hours',
      description: 'Full color services using organic, ammonia-free formulations.',
      details: 'Complete color transformations with gentle, organic formulations that nourish while they color. Our color specialists create vibrant, long-lasting results while maintaining hair health.',
      benefits: ['Ammonia-free formulas', 'Full color coverage', 'Hair health protection', 'Long-lasting results']
    },
    {
      icon: Heart,
      name: 'Hair Treatment',
      price: '$60 - $120',
      duration: '60-90 mins',
      description: 'Deep conditioning and restorative treatments for healthy hair.',
      details: 'Intensive treatments using 100% organic extracts to restore health, shine, and strength to damaged hair. Our treatments address specific hair concerns from dryness to damage repair.',
      benefits: ['100% organic extracts', 'Deep conditioning', 'Damage repair', 'Restored shine and strength']
    },
    {
      icon: Sparkles,
      name: 'Hair Weaves',
      price: '$200 - $500',
      duration: '3-5 hours',
      description: 'Professional weave installation for added length and volume.',
      details: 'Expert weave application techniques for natural-looking results with premium quality hair. Our weave specialists ensure secure, comfortable installation that looks and feels natural.',
      benefits: ['Premium quality hair', 'Secure installation', 'Natural appearance', 'Long-lasting wear']
    },
    {
      icon: Sun,
      name: 'Highlights',
      price: '$90 - $160',
      duration: '2-3 hours',
      description: 'Precision highlighting for brightness and dimensional color.',
      details: 'Professional highlighting techniques using organic formulations for vibrant, long-lasting color. Our colorists create customized highlight patterns that complement your skin tone and style.',
      benefits: ['Precision application', 'Organic formulations', 'Customized patterns', 'Dimensional color']
    },
    {
      icon: Shield,
      name: 'Keratin Treatment',
      price: '$150 - $300',
      duration: '2-4 hours',
      description: 'Smoothing treatment that reduces frizz and adds incredible shine.',
      details: 'Advanced keratin treatments that smooth, strengthen, and protect your hair for months. This treatment reduces styling time while adding incredible shine and manageability.',
      benefits: ['Frizz reduction', 'Incredible shine', 'Reduced styling time', 'Long-lasting results']
    },
    {
      icon: Scissors,
      name: 'Locs',
      price: '$50 - $120',
      duration: '1-3 hours',
      description: 'Professional loc maintenance and styling services.',
      details: 'Specialized care for locs including maintenance, styling, and treatment with organic products. Our loc specialists understand the unique needs of locked hair and provide expert care.',
      benefits: ['Specialized loc care', 'Organic products', 'Maintenance and styling', 'Expert techniques']
    }
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of professional hair services, each performed with 100% organic products
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                onClick={() => setSelectedService(service)}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl mb-4 group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">
                  <IconComponent className="w-8 h-8 text-purple-600 group-hover:text-white transition-colors duration-300" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all duration-300">
                  {service.name}
                </h3>
                
                <div className="flex justify-between items-center mb-3">
                  <span className="text-lg font-bold text-purple-600">{service.price}</span>
                  <span className="text-sm text-gray-500">{service.duration}</span>
                </div>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>

                <div className="mt-4">
                  <span className="text-sm font-medium bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Learn More →
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Service Modal */}
        {selectedService && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                      <selectedService.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">{selectedService.name}</h2>
                      <div className="flex items-center space-x-4 mt-1">
                        <span className="text-xl font-bold text-purple-600">{selectedService.price}</span>
                        <span className="text-gray-500">{selectedService.duration}</span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">{selectedService.details}</p>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Benefits</h3>
                  <ul className="space-y-2">
                    {selectedService.benefits.map((benefit: string, index: number) => (
                      <li key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
                        <span className="text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex space-x-4">
                  <button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                    Book This Service
                  </button>
                  <button 
                    onClick={() => setSelectedService(null)}
                    className="px-6 py-3 border border-gray-300 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
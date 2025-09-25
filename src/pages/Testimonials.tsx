import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Mitchell',
      service: 'Balayage & Styling',
      rating: 5,
      text: 'Lisa and her team at LS Hair Elementz are absolutely amazing! I\'ve been going there for over a year now, and every single time I leave feeling like a new person. The organic products they use have completely transformed my hair health. My balayage looks natural and beautiful, and the color lasts so much longer than anywhere else I\'ve been.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
      date: '2025-01-10'
    },
    {
      id: 2,
      name: 'Marcus Johnson',
      service: 'Hair Treatment & Cut',
      rating: 5,
      text: 'As someone with naturally curly hair, I\'ve struggled to find a salon that really understands my hair type. Sarah at LS Hair Elementz is a curly hair specialist and she completely changed my hair game. The organic treatments have made my curls more defined and healthy than ever. I finally love my natural texture!',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
      date: '2025-01-08'
    },
    {
      id: 3,
      name: 'Jennifer Rodriguez',
      service: 'Hair Extensions & Color',
      rating: 5,
      text: 'Maya did my hair extensions and I am blown away by the quality and how natural they look! The color matching is perfect and the application was so comfortable. I\'ve gotten so many compliments and people can\'t even tell they\'re extensions. The organic products they use make my hair feel so healthy and strong.',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300',
      date: '2025-01-05'
    },
    {
      id: 4,
      name: 'Ashley Thompson',
      service: 'Keratin Treatment',
      rating: 5,
      text: 'I was hesitant about getting a keratin treatment because of all the chemicals, but LS Hair Elementz uses organic formulations that are safe and effective. My hair has never been smoother or more manageable. The frizz is completely gone and my styling time has been cut in half. Worth every penny!',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
      date: '2025-01-03'
    },
    {
      id: 5,
      name: 'David Chen',
      service: 'Hair Braiding',
      rating: 5,
      text: 'Maya\'s braiding skills are incredible! She created the most intricate protective style for me and it lasted for months. The attention to detail and the care she takes with each braid is amazing. My hair actually grew and got healthier while in the protective style. Highly recommend!',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
      date: '2025-01-01'
    },
    {
      id: 6,
      name: 'Rachel Williams',
      service: 'Hair Coloring & Highlights',
      rating: 5,
      text: 'The color work at LS Hair Elementz is phenomenal! Lisa created the perfect blonde highlights that complement my skin tone perfectly. The organic color formulas didn\'t damage my hair at all - in fact, my hair feels healthier than before. The salon has such a welcoming atmosphere and the staff is so knowledgeable.',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300',
      date: '2024-12-28'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Client <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Testimonials</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear what our satisfied clients have to say about their transformative experiences
          </p>
        </div>

        {/* Featured Testimonial Slider */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <Quote className="w-16 h-16 text-purple-200 mb-6" />
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                {renderStars(testimonials[currentTestimonial].rating)}
              </div>
              
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 italic">
                "{testimonials[currentTestimonial].text}"
              </p>
              
              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="text-left">
                  <h4 className="text-lg font-semibold text-gray-900">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-purple-600 font-medium">
                    {testimonials[currentTestimonial].service}
                  </p>
                  <p className="text-sm text-gray-500">
                    {new Date(testimonials[currentTestimonial].date).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600'
                      : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* All Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex">
                  {renderStars(testimonial.rating)}
                </div>
                <Quote className="w-8 h-8 text-purple-200" />
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text.length > 150 
                  ? testimonial.text.substring(0, 150) + '...' 
                  : testimonial.text}"
              </p>
              
              <div className="flex items-center space-x-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-purple-600">{testimonial.service}</p>
                  <p className="text-xs text-gray-500">
                    {new Date(testimonial.date).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">Our Client Satisfaction</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
              <div className="text-sm opacity-90">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">5.0</div>
              <div className="text-sm opacity-90">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">98%</div>
              <div className="text-sm opacity-90">Client Retention</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">5+</div>
              <div className="text-sm opacity-90">Years of Excellence</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to Join Our Happy Clients?
            </h3>
            <p className="text-xl text-gray-600 mb-8">
              Experience the LS Hair Elementz difference and see why our clients love us
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300">
              Book Your Appointment Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
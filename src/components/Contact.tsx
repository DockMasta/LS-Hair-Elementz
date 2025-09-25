import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Instagram, 
  Send,
  CheckCircle
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const businessHours = [
    { day: 'Monday', hours: '9:00 AM - 7:00 PM' },
    { day: 'Tuesday', hours: '9:00 AM - 7:00 PM' },
    { day: 'Wednesday', hours: '9:00 AM - 7:00 PM' },
    { day: 'Thursday', hours: '9:00 AM - 8:00 PM' },
    { day: 'Friday', hours: '9:00 AM - 8:00 PM' },
    { day: 'Saturday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Sunday', hours: 'Closed' }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready for your transformation? Contact us today to schedule your appointment
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Visit Our Salon</h4>
                  <p className="text-gray-300">
                    Shop 3 Wattle Grove Plaza Village Way<br />
                    Wattle Grove NSW, 2173, Australia
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Call Us</h4>
                  <a href="tel:+1234567890" className="text-gray-300 hover:text-white transition-colors">
                    (123) 456-7890
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Email Us</h4>
                  <a href="mailto:hello@lshairelementz.com" className="text-gray-300 hover:text-white transition-colors">
                    hello@lshairelementz.com
                  </a>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-gray-800 rounded-2xl p-6 mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="w-6 h-6 text-purple-400" />
                <h4 className="text-xl font-semibold">Business Hours</h4>
              </div>
              <div className="space-y-2">
                {businessHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="text-gray-300">{schedule.day}</span>
                    <span className={schedule.hours === 'Closed' ? 'text-red-400' : 'text-white'}>
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Book Your Appointment</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                      placeholder="(123) 456-7890"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Service</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white focus:outline-none focus:border-purple-500 transition-colors"
                    >
                      <option value="">Select a service</option>
                      <option value="blow-dry">Blow Dry</option>
                      <option value="hair-extensions">Hair Extensions</option>
                      <option value="balayage">Balayage</option>
                      <option value="childrens-cut">Children's Haircut</option>
                      <option value="curly-cut">Curly Haircut</option>
                      <option value="braiding">Hair Braiding</option>
                      <option value="coloring">Hair Coloring</option>
                      <option value="treatment">Hair Treatment</option>
                      <option value="weaves">Hair Weaves</option>
                      <option value="highlights">Highlights</option>
                      <option value="keratin">Keratin Treatment</option>
                      <option value="locs">Locs</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                    placeholder="Tell us about your hair goals or any special requests..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitted}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      <span>Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Quick Booking Button */}
            <div className="mt-6 text-center">
              <button className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300">
                Book Online Now
              </button>
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-16">
          <div className="bg-gray-800 rounded-2xl p-4 h-64 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <p className="text-gray-300">Interactive map will be embedded here</p>
              <p className="text-sm text-gray-400 mt-2">123 Beauty Boulevard, Stylish City, SC 12345</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

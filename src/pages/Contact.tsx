import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Instagram, 
  Send,
  CheckCircle,
  Calendar,
  User,
  MessageSquare
} from 'lucide-react';

const Contact = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [bookingForm, setBookingForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    notes: ''
  });

  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [activeForm, setActiveForm] = useState<'contact' | 'booking'>('booking');

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitted(true);
    setTimeout(() => setContactSubmitted(false), 3000);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSubmitted(true);
    setTimeout(() => setBookingSubmitted(false), 3000);
  };

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    });
  };

  const handleBookingChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setBookingForm({
      ...bookingForm,
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

  const services = [
    'Blow Dry', 'Hair Extensions', 'Balayage', "Children's Haircut", 
    'Curly Haircut', 'Hair Braiding', 'Hair Coloring', 'Hair Treatment',
    'Hair Weaves', 'Highlights', 'Keratin Treatment', 'Locs'
  ];

  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM',
    '6:00 PM', '6:30 PM', '7:00 PM'
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready for your transformation? Contact us today to schedule your appointment
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Visit Our Salon</h3>
                  <p className="text-gray-600">
                    123 Beauty Boulevard<br />
                    Stylish City, SC 12345
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Call Us</h3>
                  <a href="tel:+1234567890" className="text-gray-600 hover:text-purple-600 transition-colors">
                    (123) 456-7890
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Email Us</h3>
                  <a href="mailto:hello@lshairelementz.com" className="text-gray-600 hover:text-purple-600 transition-colors">
                    hello@lshairelementz.com
                  </a>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-gray-50 rounded-2xl p-6 mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="w-6 h-6 text-purple-600" />
                <h3 className="text-xl font-semibold text-gray-900">Business Hours</h3>
              </div>
              <div className="space-y-2">
                {businessHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="text-gray-600">{schedule.day}</span>
                    <span className={schedule.hours === 'Closed' ? 'text-red-500' : 'text-gray-900 font-medium'}>
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white transition-all duration-300">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white transition-all duration-300">
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Forms Section */}
          <div>
            {/* Form Toggle */}
            <div className="flex bg-gray-100 rounded-xl p-1 mb-6">
              <button
                onClick={() => setActiveForm('booking')}
                className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
                  activeForm === 'booking'
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Calendar className="w-5 h-5 inline mr-2" />
                Book Appointment
              </button>
              <button
                onClick={() => setActiveForm('contact')}
                className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
                  activeForm === 'contact'
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <MessageSquare className="w-5 h-5 inline mr-2" />
                Send Message
              </button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              {activeForm === 'booking' ? (
                <>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Book Your Appointment</h3>
                  <form onSubmit={handleBookingSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                        <input
                          type="text"
                          name="name"
                          value={bookingForm.name}
                          onChange={handleBookingChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-purple-500 transition-colors"
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={bookingForm.email}
                          onChange={handleBookingChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-purple-500 transition-colors"
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                        <input
                          type="tel"
                          name="phone"
                          value={bookingForm.phone}
                          onChange={handleBookingChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-purple-500 transition-colors"
                          placeholder="(123) 456-7890"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Service</label>
                        <select
                          name="service"
                          value={bookingForm.service}
                          onChange={handleBookingChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-purple-500 transition-colors"
                          required
                        >
                          <option value="">Select a service</option>
                          {services.map((service) => (
                            <option key={service} value={service}>{service}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date</label>
                        <input
                          type="date"
                          name="date"
                          value={bookingForm.date}
                          onChange={handleBookingChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-purple-500 transition-colors"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time</label>
                        <select
                          name="time"
                          value={bookingForm.time}
                          onChange={handleBookingChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-purple-500 transition-colors"
                          required
                        >
                          <option value="">Select time</option>
                          {timeSlots.map((time) => (
                            <option key={time} value={time}>{time}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Special Notes</label>
                      <textarea
                        name="notes"
                        value={bookingForm.notes}
                        onChange={handleBookingChange}
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-purple-500 transition-colors resize-none"
                        placeholder="Any special requests or hair concerns..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={bookingSubmitted}
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {bookingSubmitted ? (
                        <>
                          <CheckCircle className="w-5 h-5" />
                          <span>Booking Request Sent!</span>
                        </>
                      ) : (
                        <>
                          <Calendar className="w-5 h-5" />
                          <span>Book Appointment</span>
                        </>
                      )}
                    </button>
                  </form>
                </>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
                  <form onSubmit={handleContactSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                        <input
                          type="text"
                          name="name"
                          value={contactForm.name}
                          onChange={handleContactChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-purple-500 transition-colors"
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={contactForm.email}
                          onChange={handleContactChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-purple-500 transition-colors"
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={contactForm.phone}
                        onChange={handleContactChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-purple-500 transition-colors"
                        placeholder="(123) 456-7890"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                      <textarea
                        name="message"
                        value={contactForm.message}
                        onChange={handleContactChange}
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-purple-500 transition-colors resize-none"
                        placeholder="Tell us how we can help you..."
                        required
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={contactSubmitted}
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {contactSubmitted ? (
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
                </>
              )}
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <div className="bg-gray-100 rounded-2xl p-4 h-64 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <p className="text-gray-600 font-medium">Interactive Map</p>
              <p className="text-sm text-gray-500 mt-2">123 Beauty Boulevard, Stylish City, SC 12345</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
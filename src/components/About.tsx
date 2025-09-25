import React from 'react';
import { Award, Heart, Leaf, Users } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Leaf,
      title: '100% Organic Products',
      description: 'We use only the finest organic extracts and natural ingredients for healthier hair care.'
    },
    {
      icon: Award,
      title: 'Award-Winning Service',
      description: 'Recognized for excellence in hair styling and customer satisfaction.'
    },
    {
      icon: Heart,
      title: 'Passionate Experts',
      description: 'Our certified stylists are passionate about creating beautiful, healthy hair.'
    },
    {
      icon: Users,
      title: 'Community Focused',
      description: 'Building lasting relationships with our clients and the community we serve.'
    }
  ];

  const teamMembers = [
    {
      name: 'Lisa Sterling',
      role: 'Master Stylist & Owner',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialty: 'Color Specialist'
    },
    {
      name: 'Sarah Johnson',
      role: 'Senior Stylist',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialty: 'Curly Hair Expert'
    },
    {
      name: 'Maya Rodriguez',
      role: 'Styling Artist',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialty: 'Extensions & Braiding'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">LS Hair Elementz</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our story of passion, expertise, and commitment to natural beauty
          </p>
        </div>

        {/* Story Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Founded with a vision to revolutionize hair care through natural, organic methods, 
                  LS Hair Elementz has been transforming lives one client at a time. Our dedication 
                  to using 100% organic extracts stems from our belief that beautiful hair should 
                  never come at the cost of your health.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  With years of expertise and a passion for excellence, we've built a reputation 
                  as the premier destination for those seeking professional hair care that nurtures 
                  and protects while delivering stunning results.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">5+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">500+</div>
                    <div className="text-sm text-gray-600">Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">12</div>
                    <div className="text-sm text-gray-600">Services</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Salon interior"
                  className="rounded-2xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Team Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Expert Team</h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our certified stylists bring years of experience and passion for creating beautiful hair
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6 text-center">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h4>
                <p className="text-purple-600 font-medium mb-1">{member.role}</p>
                <p className="text-sm text-gray-600">{member.specialty}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="text-center mt-16">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h3>
            <p className="text-lg leading-relaxed opacity-90">
              To provide exceptional hair care services using only the purest organic ingredients, 
              creating beautiful transformations that enhance your natural confidence while 
              maintaining the health and integrity of your hair.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
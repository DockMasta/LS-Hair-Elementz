import React from 'react';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Top 5 Hair Care Tips for Healthy, Beautiful Hair',
      excerpt: 'Discover the essential tips that will transform your hair care routine and give you the healthy, beautiful hair you\'ve always wanted.',
      content: `
        <p>Having beautiful, healthy hair doesn't have to be complicated. With the right knowledge and organic products, you can achieve salon-quality results at home. Here are our top 5 tips:</p>
        
        <h3>1. Use 100% Organic Products</h3>
        <p>Chemical-laden products can damage your hair over time. Switch to organic, natural products that nourish your hair without harmful side effects.</p>
        
        <h3>2. Deep Condition Weekly</h3>
        <p>Regular deep conditioning treatments restore moisture and repair damage. Use organic oils like argan or coconut oil for best results.</p>
        
        <h3>3. Protect from Heat Damage</h3>
        <p>Always use a heat protectant before styling. Keep heat tools on lower settings and give your hair breaks from heat styling.</p>
        
        <h3>4. Trim Regularly</h3>
        <p>Regular trims every 6-8 weeks prevent split ends from traveling up the hair shaft and keep your hair looking healthy.</p>
        
        <h3>5. Eat for Hair Health</h3>
        <p>A balanced diet rich in proteins, vitamins, and minerals supports healthy hair growth from the inside out.</p>
      `,
      author: 'Lisa Sterling',
      date: '2025-01-15',
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Hair Care'
    },
    {
      id: 2,
      title: 'The Benefits of Organic Hair Products',
      excerpt: 'Learn why switching to organic hair products can revolutionize your hair health and give you the natural beauty you deserve.',
      content: `
        <p>At LS Hair Elementz, we believe in the power of nature. Our commitment to 100% organic extracts isn't just a marketing claim—it's a philosophy that transforms hair health.</p>
        
        <h3>Why Choose Organic?</h3>
        <p>Organic hair products are free from harsh chemicals like sulfates, parabens, and synthetic fragrances that can strip your hair of its natural oils and cause long-term damage.</p>
        
        <h3>Natural Ingredients That Work</h3>
        <p>Ingredients like argan oil, coconut oil, and botanical extracts provide deep nourishment while being gentle on your hair and scalp.</p>
        
        <h3>Better for Your Health</h3>
        <p>What you put on your hair gets absorbed into your scalp and bloodstream. Organic products ensure you're not exposing yourself to harmful chemicals.</p>
        
        <h3>Environmental Benefits</h3>
        <p>Organic products are better for the environment, using sustainable farming practices and biodegradable ingredients.</p>
      `,
      author: 'Sarah Johnson',
      date: '2025-01-10',
      readTime: '4 min read',
      image: 'https://images.pexels.com/photos/3065171/pexels-photo-3065171.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Organic Care'
    },
    {
      id: 3,
      title: 'Curly Hair Care: Embrace Your Natural Texture',
      excerpt: 'Discover how to care for and style your curly hair to enhance its natural beauty and reduce frizz.',
      content: `
        <p>Curly hair is beautiful, but it requires special care to look its best. Understanding your curl pattern and using the right techniques can transform your hair routine.</p>
        
        <h3>Know Your Curl Type</h3>
        <p>Curls range from loose waves (Type 2) to tight coils (Type 4). Each type has different needs and responds to different products and techniques.</p>
        
        <h3>The Curly Girl Method</h3>
        <p>This method involves avoiding sulfates, silicones, and heat styling to maintain your hair's natural moisture and curl pattern.</p>
        
        <h3>Moisture is Key</h3>
        <p>Curly hair tends to be drier than straight hair. Use leave-in conditioners and natural oils to keep your curls hydrated and defined.</p>
        
        <h3>Gentle Styling Techniques</h3>
        <p>Use wide-tooth combs, scrunch instead of brush, and sleep on silk pillowcases to minimize frizz and breakage.</p>
      `,
      author: 'Maya Rodriguez',
      date: '2025-01-05',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Styling Tips'
    }
  ];

  const [selectedPost, setSelectedPost] = React.useState<any>(null);

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Hair Care <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Blog</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Expert tips, trends, and insights for beautiful, healthy hair
          </p>
        </div>

        {selectedPost ? (
          // Blog Post Detail View
          <div className="max-w-4xl mx-auto">
            <button
              onClick={() => setSelectedPost(null)}
              className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 mb-8 transition-colors"
            >
              <ArrowRight className="w-5 h-5 rotate-180" />
              <span>Back to Blog</span>
            </button>

            <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full h-64 md:h-96 object-cover"
              />
              
              <div className="p-8 md:p-12">
                <div className="flex items-center space-x-4 mb-6">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {selectedPost.category}
                  </span>
                  <div className="flex items-center space-x-2 text-gray-500 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(selectedPost.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-500 text-sm">
                    <Clock className="w-4 h-4" />
                    <span>{selectedPost.readTime}</span>
                  </div>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {selectedPost.title}
                </h1>

                <div className="flex items-center space-x-2 mb-8">
                  <User className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-600">By {selectedPost.author}</span>
                </div>

                <div 
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                />

                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Ready to Transform Your Hair?</h3>
                    <p className="text-gray-600 mb-4">
                      Book an appointment with our expert stylists and experience the LS Hair Elementz difference.
                    </p>
                    <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </article>
          </div>
        ) : (
          // Blog Posts Grid View
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                onClick={() => setSelectedPost(post)}
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center space-x-2 text-gray-500 text-sm">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h2>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                      <span>•</span>
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    
                    <div className="flex items-center space-x-1 text-purple-600 font-medium">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {!selectedPost && (
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
              <p className="mb-6 opacity-90">
                Subscribe to our newsletter for the latest hair care tips and salon updates
              </p>
              <div className="flex gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none"
                />
                <button className="bg-white text-purple-600 px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
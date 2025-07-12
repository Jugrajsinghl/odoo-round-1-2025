import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ItemCard } from '../components/ItemCard';
import { mockItems } from '../data/mockItems';
import { Recycle, Heart, Users, Leaf, ArrowRight, Star } from 'lucide-react';

export function LandingPage() {
  const { user } = useAuth();
  const featuredItems = mockItems.filter(item => item.isApproved).slice(0, 6);

  const stats = [
    { label: 'Items Exchanged', value: '2,500+', Icon: Recycle },
    { label: 'Happy Users', value: '1,200+', Icon: Users },
    { label: 'CO2 Saved', value: '50 Tons', Icon: Leaf },
    { label: 'User Rating', value: '4.9/5', Icon: Star },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Give Your Clothes a
              <span className="text-emerald-600"> Second Life</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Join ReWear's sustainable fashion revolution. Exchange unused clothing through direct swaps 
              or our point-based system. Reduce textile waste while refreshing your wardrobe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {user ? (
                <>
                  <Link
                    to="/browse"
                    className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors inline-flex items-center"
                  >
                    Browse Items
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  <Link
                    to="/add-item"
                    className="border-2 border-emerald-600 text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-600 hover:text-white transition-colors"
                  >
                    List an Item
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to="/signup"
                    className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors inline-flex items-center"
                  >
                    Start Swapping
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  <Link
                    to="/browse"
                    className="border-2 border-emerald-600 text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-600 hover:text-white transition-colors"
                  >
                    Browse Items
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </section>



      
      <section className="bg-white py-10 overflow-hidden">
  <div className="relative w-full">
    <div className="flex w-max gap-4 animate-scroll-x">
      {[
        'https://images.pexels.com/photos/1002693/pexels-photo-1002693.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=800',
      ]
        .concat([
          'https://images.pexels.com/photos/1002693/pexels-photo-1002693.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=800',
        ])
        .map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className="h-48 w-72 object-cover rounded-lg shadow-md flex-shrink-0"
          />
        ))}
    </div>
  </div>
</section>





      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.Icon;
              return (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <Icon className="h-8 w-8 text-emerald-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      

      {/* Featured Items */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Featured Items</h2>
            <Link
              to="/browse"
              className="text-emerald-600 hover:text-emerald-700 font-medium inline-flex items-center"
            >
              View All
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredItems.map(item => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How ReWear Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Simple, sustainable, and social. Join our community and start making a positive impact today.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map(step => (
              <div key={step} className="text-center">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-emerald-600">{step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {step === 1 ? 'List Your Items' : step === 2 ? 'Find & Request' : 'Complete Exchange'}
                </h3>
                <p className="text-gray-600">
                  {step === 1
                    ? 'Upload photos and details of clothes you no longer wear. Set them for swap or point redemption.'
                    : step === 2
                    ? 'Browse amazing items from other users. Send swap requests or redeem with points you\'ve earned.'
                    : 'Coordinate with other users to complete the exchange. Rate your experience and earn more points.'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-16 bg-emerald-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Heart className="h-16 w-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4">
            Join the Sustainable Fashion Movement
          </h2>
          <p className="text-emerald-100 text-lg mb-8">
            Every item you swap or trade helps reduce textile waste and supports a more sustainable future.
          </p>
          {!user && (
            <Link
              to="/signup"
              className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          )}
        </div>
      </section>
    </div>
  );
}

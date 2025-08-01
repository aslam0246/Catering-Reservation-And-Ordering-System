import React from 'react'
import { Link } from 'react-router-dom'
import { Star, Users, Clock, Award, ChefHat, Calendar, Utensils } from 'lucide-react'

export default function Home() {
  const features = [
    {
      icon: ChefHat,
      title: 'Expert Chefs',
      description: 'Our professional chefs create culinary masterpieces using the finest ingredients.'
    },
    {
      icon: Users,
      title: 'Any Event Size',
      description: 'From intimate gatherings to large corporate events, we cater to all occasions.'
    },
    {
      icon: Clock,
      title: 'Timely Service',
      description: 'Punctual delivery and setup ensuring your event runs smoothly.'
    },
    {
      icon: Award,
      title: 'Award Winning',
      description: 'Recognized for excellence in catering and customer service.'
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Wedding Client',
      content: 'Elite Catering made our wedding day absolutely perfect. The food was exceptional and the service was flawless.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Corporate Event Manager',
      content: 'Professional, reliable, and delicious. They handle all our company events with excellence.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Private Party Host',
      content: 'From planning to execution, everything was seamless. Our guests are still talking about the amazing food!',
      rating: 5
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto section-padding">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Exceptional Catering for
              <span className="block text-primary-200">Unforgettable Events</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100 max-w-3xl mx-auto">
              From intimate gatherings to grand celebrations, we create culinary experiences that delight your guests and make your event truly memorable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/menu" className="btn-primary text-lg px-8 py-4">
                View Our Menu
              </Link>
              <Link to="/reservation" className="btn-secondary text-lg px-8 py-4 bg-white/10 border-white text-white hover:bg-white hover:text-primary-600">
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Elite Catering?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We combine culinary excellence with exceptional service to create memorable dining experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 transition-colors duration-300">
                  <feature.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Catering Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive catering solutions for every type of event and occasion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-8 text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Utensils className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Wedding Catering</h3>
              <p className="text-gray-600 mb-6">
                Make your special day perfect with our elegant wedding catering services, featuring customizable menus and professional presentation.
              </p>
              <Link to="/menu" className="text-primary-600 font-medium hover:text-primary-700 transition-colors">
                View Wedding Menus →
              </Link>
            </div>

            <div className="card p-8 text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Corporate Events</h3>
              <p className="text-gray-600 mb-6">
                Professional catering for business meetings, conferences, and corporate celebrations with reliable service and quality food.
              </p>
              <Link to="/menu" className="text-primary-600 font-medium hover:text-primary-700 transition-colors">
                Corporate Packages →
              </Link>
            </div>

            <div className="card p-8 text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Private Parties</h3>
              <p className="text-gray-600 mb-6">
                Celebrate life's moments with our private party catering, offering flexible menus and personalized service for any occasion.
              </p>
              <Link to="/menu" className="text-primary-600 font-medium hover:text-primary-700 transition-colors">
                Party Menus →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Plan Your Perfect Event?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Let us handle the catering while you focus on enjoying your special occasion. 
            Contact us today for a personalized quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/reservation" className="btn-secondary bg-white text-primary-600 hover:bg-primary-50">
              Make a Reservation
            </Link>
            <Link to="/contact" className="btn-secondary border-white text-white hover:bg-white hover:text-primary-600">
              Get a Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
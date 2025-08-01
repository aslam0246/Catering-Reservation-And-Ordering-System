import React, { useState } from 'react'
import { Plus, Star } from 'lucide-react'
import { useCatering } from '../context/CateringContext'

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('appetizers')
  const { addToCart } = useCatering()

  const categories = [
    { id: 'appetizers', name: 'Appetizers', icon: '🥗' },
    { id: 'mains', name: 'Main Courses', icon: '🍽️' },
    { id: 'desserts', name: 'Desserts', icon: '🍰' },
    { id: 'beverages', name: 'Beverages', icon: '🥤' },
    { id: 'packages', name: 'Event Packages', icon: '📦' }
  ]

  const menuItems = {
    appetizers: [
      {
        id: 1,
        name: 'Gourmet Bruschetta Platter',
        description: 'Fresh tomatoes, basil, and mozzarella on artisan bread',
        price: 45,
        image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=400&h=300&fit=crop',
        rating: 4.8,
        popular: true
      },
      {
        id: 2,
        name: 'Artisan Cheese & Charcuterie Board',
        description: 'Selection of premium cheeses, cured meats, and accompaniments',
        price: 85,
        image: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=400&h=300&fit=crop',
        rating: 4.9
      },
      {
        id: 3,
        name: 'Stuffed Mushroom Caps',
        description: 'Button mushrooms filled with herb cream cheese and breadcrumbs',
        price: 38,
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
        rating: 4.7
      },
      {
        id: 4,
        name: 'Shrimp Cocktail Ring',
        description: 'Fresh jumbo shrimp served with cocktail sauce',
        price: 65,
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
        rating: 4.8
      }
    ],
    mains: [
      {
        id: 5,
        name: 'Herb-Crusted Salmon',
        description: 'Atlantic salmon with herb crust, lemon butter sauce, and seasonal vegetables',
        price: 32,
        image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop',
        rating: 4.9,
        popular: true
      },
      {
        id: 6,
        name: 'Prime Beef Tenderloin',
        description: 'Grilled to perfection with red wine reduction and roasted potatoes',
        price: 45,
        image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop',
        rating: 4.8
      },
      {
        id: 7,
        name: 'Chicken Marsala',
        description: 'Pan-seared chicken breast with mushroom marsala sauce',
        price: 28,
        image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=400&h=300&fit=crop',
        rating: 4.7
      },
      {
        id: 8,
        name: 'Vegetarian Lasagna',
        description: 'Layers of pasta, ricotta, spinach, and roasted vegetables',
        price: 24,
        image: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=400&h=300&fit=crop',
        rating: 4.6
      }
    ],
    desserts: [
      {
        id: 9,
        name: 'Chocolate Lava Cake',
        description: 'Warm chocolate cake with molten center and vanilla ice cream',
        price: 12,
        image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop',
        rating: 4.9,
        popular: true
      },
      {
        id: 10,
        name: 'Tiramisu',
        description: 'Classic Italian dessert with coffee-soaked ladyfingers and mascarpone',
        price: 10,
        image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop',
        rating: 4.8
      },
      {
        id: 11,
        name: 'Fresh Berry Tart',
        description: 'Pastry shell filled with vanilla custard and seasonal berries',
        price: 11,
        image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&h=300&fit=crop',
        rating: 4.7
      },
      {
        id: 12,
        name: 'Crème Brûlée',
        description: 'Rich vanilla custard with caramelized sugar top',
        price: 13,
        image: 'https://images.unsplash.com/photo-1470324161839-ce2bb6fa6bc3?w=400&h=300&fit=crop',
        rating: 4.8
      }
    ],
    beverages: [
      {
        id: 13,
        name: 'Premium Coffee Service',
        description: 'Freshly brewed coffee with cream, sugar, and accompaniments',
        price: 25,
        image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop',
        rating: 4.6
      },
      {
        id: 14,
        name: 'Signature Cocktail Package',
        description: 'Selection of house cocktails with premium spirits',
        price: 85,
        image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&h=300&fit=crop',
        rating: 4.8,
        popular: true
      },
      {
        id: 15,
        name: 'Wine Selection',
        description: 'Curated selection of red and white wines',
        price: 65,
        image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&h=300&fit=crop',
        rating: 4.7
      },
      {
        id: 16,
        name: 'Fresh Juice Bar',
        description: 'Assorted fresh fruit juices and sparkling water',
        price: 35,
        image: 'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=400&h=300&fit=crop',
        rating: 4.5
      }
    ],
    packages: [
      {
        id: 17,
        name: 'Wedding Package - Elegant',
        description: 'Complete wedding catering for 100 guests including appetizers, main course, dessert, and beverages',
        price: 2500,
        image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=300&fit=crop',
        rating: 4.9,
        popular: true
      },
      {
        id: 18,
        name: 'Corporate Lunch Package',
        description: 'Professional lunch service for business meetings and conferences',
        price: 850,
        image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
        rating: 4.8
      },
      {
        id: 19,
        name: 'Birthday Party Package',
        description: 'Fun and festive catering perfect for birthday celebrations',
        price: 450,
        image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&h=300&fit=crop',
        rating: 4.7
      },
      {
        id: 20,
        name: 'Holiday Catering Package',
        description: 'Seasonal menu featuring traditional holiday favorites',
        price: 1200,
        image: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=400&h=300&fit=crop',
        rating: 4.8
      }
    ]
  }

  const handleAddToCart = (item) => {
    addToCart(item)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-primary-600 text-white section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Menu</h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Discover our carefully crafted menu featuring premium ingredients and exceptional flavors
          </p>
        </div>
      </section>

      {/* Menu Content */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-primary-50 hover:text-primary-600 shadow-md'
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems[activeCategory]?.map((item) => (
              <div key={item.id} className="card overflow-hidden">
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                  {item.popular && (
                    <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Popular
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">{item.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary-600">
                      ${item.price}
                    </span>
                    <button
                      onClick={() => handleAddToCart(item)}
                      className="flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                    >
                      <Plus className="h-4 w-4" />
                      <span>Add to Cart</span>
                    </button>
                  </div>
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
            Need a Custom Menu?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Our chefs can create a personalized menu tailored to your event's specific needs and dietary requirements.
          </p>
          <button className="btn-secondary bg-white text-primary-600 hover:bg-primary-50">
            Request Custom Menu
          </button>
        </div>
      </section>
    </div>
  )
}
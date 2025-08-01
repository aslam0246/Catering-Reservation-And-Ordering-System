import React, { useState } from 'react'
import { Search, Package, Clock, CheckCircle, Truck, MapPin } from 'lucide-react'
import { useCatering } from '../context/CateringContext'

export default function OrderTracking() {
  const [trackingId, setTrackingId] = useState('')
  const [searchedOrder, setSearchedOrder] = useState(null)
  const { orders, reservations } = useCatering()

  // Sample tracking data for demonstration
  const sampleOrders = [
    {
      id: '12345',
      status: 'in-preparation',
      customerName: 'John Smith',
      eventDate: '2024-01-15',
      eventType: 'Wedding',
      items: [
        { name: 'Herb-Crusted Salmon', quantity: 50 },
        { name: 'Prime Beef Tenderloin', quantity: 30 },
        { name: 'Chocolate Lava Cake', quantity: 80 }
      ],
      total: 2450,
      timeline: [
        { status: 'confirmed', time: '2024-01-10 10:30 AM', completed: true },
        { status: 'in-preparation', time: '2024-01-14 8:00 AM', completed: true },
        { status: 'ready', time: '2024-01-15 2:00 PM', completed: false },
        { status: 'delivered', time: '2024-01-15 5:00 PM', completed: false }
      ]
    },
    {
      id: '67890',
      status: 'delivered',
      customerName: 'Sarah Johnson',
      eventDate: '2024-01-12',
      eventType: 'Corporate Event',
      items: [
        { name: 'Corporate Lunch Package', quantity: 1 },
        { name: 'Premium Coffee Service', quantity: 1 }
      ],
      total: 875,
      timeline: [
        { status: 'confirmed', time: '2024-01-08 2:15 PM', completed: true },
        { status: 'in-preparation', time: '2024-01-12 7:00 AM', completed: true },
        { status: 'ready', time: '2024-01-12 11:30 AM', completed: true },
        { status: 'delivered', time: '2024-01-12 12:00 PM', completed: true }
      ]
    }
  ]

  const handleSearch = (e) => {
    e.preventDefault()
    
    // Search in actual orders first
    let foundOrder = orders.find(order => order.id === trackingId)
    
    // If not found, search in sample orders for demonstration
    if (!foundOrder) {
      foundOrder = sampleOrders.find(order => order.id === trackingId)
    }
    
    if (foundOrder) {
      setSearchedOrder(foundOrder)
    } else {
      alert('Order not found. Please check your tracking ID and try again.')
      setSearchedOrder(null)
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'confirmed':
        return <CheckCircle className="h-6 w-6" />
      case 'in-preparation':
        return <Package className="h-6 w-6" />
      case 'ready':
        return <Clock className="h-6 w-6" />
      case 'delivered':
        return <Truck className="h-6 w-6" />
      default:
        return <Clock className="h-6 w-6" />
    }
  }

  const getStatusColor = (status, completed) => {
    if (completed) {
      return 'text-green-600 bg-green-100'
    }
    switch (status) {
      case 'in-preparation':
        return 'text-blue-600 bg-blue-100'
      case 'ready':
        return 'text-yellow-600 bg-yellow-100'
      default:
        return 'text-gray-600 bg-gray-100'
    }
  }

  const getStatusText = (status) => {
    switch (status) {
      case 'confirmed':
        return 'Order Confirmed'
      case 'in-preparation':
        return 'In Preparation'
      case 'ready':
        return 'Ready for Pickup/Delivery'
      case 'delivered':
        return 'Delivered'
      default:
        return 'Processing'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-primary-600 text-white section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Track Your Order</h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Enter your tracking ID to see the status of your catering order
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="card p-8 mb-8">
            <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tracking ID
                </label>
                <input
                  type="text"
                  value={trackingId}
                  onChange={(e) => setTrackingId(e.target.value)}
                  placeholder="Enter your tracking ID (e.g., 12345)"
                  className="input-field"
                  required
                />
              </div>
              <div className="flex items-end">
                <button
                  type="submit"
                  className="btn-primary flex items-center space-x-2"
                >
                  <Search className="h-5 w-5" />
                  <span>Track Order</span>
                </button>
              </div>
            </form>
            
            <div className="mt-4 text-sm text-gray-600">
              <p>Demo tracking IDs: <span className="font-mono bg-gray-100 px-2 py-1 rounded">12345</span> or <span className="font-mono bg-gray-100 px-2 py-1 rounded">67890</span></p>
            </div>
          </div>

          {/* Order Details */}
          {searchedOrder && (
            <div className="space-y-8">
              {/* Order Summary */}
              <div className="card p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                      Order #{searchedOrder.id}
                    </h2>
                    <p className="text-gray-600">
                      {searchedOrder.eventType} for {searchedOrder.customerName}
                    </p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full ${getStatusColor(searchedOrder.status, false)}`}>
                      {getStatusIcon(searchedOrder.status)}
                      <span className="font-medium">{getStatusText(searchedOrder.status)}</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Event Date</h3>
                    <p className="text-gray-600">{searchedOrder.eventDate}</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Order Total</h3>
                    <p className="text-gray-600">${searchedOrder.total}</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Items</h3>
                    <p className="text-gray-600">{searchedOrder.items.length} items</p>
                  </div>
                </div>
              </div>

              {/* Order Timeline */}
              <div className="card p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Order Timeline</h3>
                <div className="space-y-6">
                  {searchedOrder.timeline?.map((step, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${getStatusColor(step.status, step.completed)}`}>
                        {getStatusIcon(step.status)}
                      </div>
                      <div className="flex-1">
                        <h4 className={`font-medium ${step.completed ? 'text-gray-900' : 'text-gray-500'}`}>
                          {getStatusText(step.status)}
                        </h4>
                        <p className={`text-sm ${step.completed ? 'text-gray-600' : 'text-gray-400'}`}>
                          {step.completed ? step.time : 'Estimated: ' + step.time}
                        </p>
                      </div>
                      {step.completed && (
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Order Items */}
              <div className="card p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Order Items</h3>
                <div className="space-y-4">
                  {searchedOrder.items.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0">
                      <div>
                        <h4 className="font-medium text-gray-900">{item.name}</h4>
                        <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Support */}
              <div className="card p-8 bg-primary-50 border border-primary-200">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Need Help?</h3>
                    <p className="text-gray-600 mb-4">
                      If you have any questions about your order or need to make changes, 
                      please contact our customer service team.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href="tel:(555)123-4567"
                        className="btn-primary text-center"
                      >
                        Call (555) 123-4567
                      </a>
                      <a
                        href="mailto:support@elitecatering.com"
                        className="btn-secondary text-center"
                      >
                        Email Support
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Recent Orders */}
          {!searchedOrder && (orders.length > 0 || reservations.length > 0) && (
            <div className="card p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Your Recent Activity</h3>
              
              {orders.length > 0 && (
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-4">Recent Orders</h4>
                  <div className="space-y-3">
                    {orders.slice(0, 3).map((order) => (
                      <div key={order.id} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium text-gray-900">Order #{order.id}</p>
                          <p className="text-sm text-gray-600">${order.total} • {order.items.length} items</p>
                        </div>
                        <span className="text-sm text-primary-600 font-medium">{order.status}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {reservations.length > 0 && (
                <div>
                  <h4 className="font-medium text-gray-900 mb-4">Recent Reservations</h4>
                  <div className="space-y-3">
                    {reservations.slice(0, 3).map((reservation) => (
                      <div key={reservation.id} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium text-gray-900">{reservation.eventType}</p>
                          <p className="text-sm text-gray-600">{reservation.eventDate} • {reservation.guestCount} guests</p>
                        </div>
                        <span className="text-sm text-primary-600 font-medium">{reservation.status}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
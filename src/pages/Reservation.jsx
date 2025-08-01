import React, { useState } from 'react'
import { Calendar, Clock, Users, MapPin, Phone, Mail, User } from 'lucide-react'
import { useCatering } from '../context/CateringContext'

export default function Reservation() {
  const { addReservation } = useCatering()
  const [formData, setFormData] = useState({
    eventType: '',
    eventDate: '',
    eventTime: '',
    guestCount: '',
    venue: '',
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    specialRequests: '',
    budget: '',
    serviceType: 'full-service'
  })

  const eventTypes = [
    'Wedding',
    'Corporate Event',
    'Birthday Party',
    'Anniversary',
    'Holiday Party',
    'Graduation',
    'Baby Shower',
    'Retirement Party',
    'Other'
  ]

  const serviceTypes = [
    { id: 'full-service', name: 'Full Service', description: 'Complete setup, service, and cleanup' },
    { id: 'drop-off', name: 'Drop-off', description: 'Food delivery only' },
    { id: 'buffet', name: 'Buffet Style', description: 'Self-service buffet setup' }
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Basic validation
    if (!formData.eventType || !formData.eventDate || !formData.customerName || !formData.customerEmail) {
      alert('Please fill in all required fields.')
      return
    }

    addReservation(formData)
    alert('Reservation submitted successfully! We will contact you within 24 hours to confirm details.')
    
    // Reset form
    setFormData({
      eventType: '',
      eventDate: '',
      eventTime: '',
      guestCount: '',
      venue: '',
      customerName: '',
      customerEmail: '',
      customerPhone: '',
      specialRequests: '',
      budget: '',
      serviceType: 'full-service'
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-primary-600 text-white section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Make a Reservation</h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Let us cater your next event. Fill out the form below and we'll create a custom proposal for you.
          </p>
        </div>
      </section>

      {/* Reservation Form */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="card p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Event Details */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                  <Calendar className="h-6 w-6 text-primary-600 mr-2" />
                  Event Details
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Event Type *
                    </label>
                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleInputChange}
                      className="input-field"
                      required
                    >
                      <option value="">Select event type</option>
                      {eventTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Event Date *
                    </label>
                    <input
                      type="date"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleInputChange}
                      className="input-field"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Event Time
                    </label>
                    <input
                      type="time"
                      name="eventTime"
                      value={formData.eventTime}
                      onChange={handleInputChange}
                      className="input-field"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Number of Guests
                    </label>
                    <input
                      type="number"
                      name="guestCount"
                      value={formData.guestCount}
                      onChange={handleInputChange}
                      placeholder="e.g., 50"
                      className="input-field"
                      min="1"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Venue/Location
                    </label>
                    <input
                      type="text"
                      name="venue"
                      value={formData.venue}
                      onChange={handleInputChange}
                      placeholder="Event venue or address"
                      className="input-field"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Estimated Budget
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="input-field"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-500">Under $500</option>
                      <option value="500-1000">$500 - $1,000</option>
                      <option value="1000-2500">$1,000 - $2,500</option>
                      <option value="2500-5000">$2,500 - $5,000</option>
                      <option value="over-5000">Over $5,000</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Service Type */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Service Type</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {serviceTypes.map(service => (
                    <label key={service.id} className="cursor-pointer">
                      <input
                        type="radio"
                        name="serviceType"
                        value={service.id}
                        checked={formData.serviceType === service.id}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <div className={`p-4 border-2 rounded-lg transition-all duration-200 ${
                        formData.serviceType === service.id
                          ? 'border-primary-600 bg-primary-50'
                          : 'border-gray-200 hover:border-primary-300'
                      }`}>
                        <h4 className="font-medium text-gray-900">{service.name}</h4>
                        <p className="text-sm text-gray-600 mt-1">{service.description}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                  <User className="h-6 w-6 text-primary-600 mr-2" />
                  Contact Information
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="customerName"
                      value={formData.customerName}
                      onChange={handleInputChange}
                      className="input-field"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="customerEmail"
                      value={formData.customerEmail}
                      onChange={handleInputChange}
                      className="input-field"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="customerPhone"
                      value={formData.customerPhone}
                      onChange={handleInputChange}
                      className="input-field"
                    />
                  </div>
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Special Requests or Dietary Requirements
                </label>
                <textarea
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Please let us know about any dietary restrictions, special menu requests, or other details..."
                  className="input-field"
                />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="btn-primary text-lg px-12 py-4"
                >
                  Submit Reservation Request
                </button>
                <p className="text-sm text-gray-600 mt-4">
                  We'll contact you within 24 hours to confirm your reservation and discuss menu options.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Need Help Planning Your Event?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Phone className="h-8 w-8 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <p>(555) 123-4567</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="h-8 w-8 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <p>events@elitecatering.com</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="h-8 w-8 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
              <p>123 Culinary Street<br />Food City, FC 12345</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
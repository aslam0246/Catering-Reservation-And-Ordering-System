import React from 'react'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { useCatering } from '../context/CateringContext'

export default function CartModal({ isOpen, onClose }) {
  const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart, addOrder } = useCatering()

  if (!isOpen) return null

  const handleCheckout = () => {
    if (cart.length === 0) return
    
    const order = {
      items: cart,
      total: getCartTotal(),
      orderType: 'delivery',
      customerInfo: {
        name: 'Guest Customer',
        phone: '(555) 123-4567',
        email: 'guest@example.com'
      }
    }
    
    addOrder(order)
    onClose()
    alert('Order placed successfully! You will receive a confirmation email shortly.')
  }

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
      
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-semibold">Shopping Cart</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-4">
            {cart.length === 0 ? (
              <div className="text-center py-8">
                <ShoppingBag className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">Your cart is empty</p>
              </div>
            ) : (
              <div className="space-y-4">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center space-x-3 bg-gray-50 p-3 rounded-lg">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium text-sm">{item.name}</h3>
                      <p className="text-primary-600 font-semibold">${item.price}</p>
                      <div className="flex items-center space-x-2 mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:bg-gray-200 rounded"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="px-2 py-1 bg-white rounded border text-sm">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:bg-gray-200 rounded"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 p-1"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cart.length > 0 && (
            <div className="border-t p-4 space-y-4">
              <div className="flex justify-between items-center text-lg font-semibold">
                <span>Total:</span>
                <span className="text-primary-600">${getCartTotal().toFixed(2)}</span>
              </div>
              <div className="space-y-2">
                <button
                  onClick={handleCheckout}
                  className="w-full btn-primary"
                >
                  Checkout
                </button>
                <button
                  onClick={clearCart}
                  className="w-full text-gray-600 hover:text-gray-800 py-2 transition-colors"
                >
                  Clear Cart
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
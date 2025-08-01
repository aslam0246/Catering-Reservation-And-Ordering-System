import React, { createContext, useContext, useReducer } from 'react'

const CateringContext = createContext()

const initialState = {
  cart: [],
  reservations: [],
  orders: [],
  user: null,
}

function cateringReducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItem = state.cart.find(item => item.id === action.payload.id)
      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        }
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }]
      }
    
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload)
      }
    
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        )
      }
    
    case 'CLEAR_CART':
      return {
        ...state,
        cart: []
      }
    
    case 'ADD_RESERVATION':
      const newReservation = {
        ...action.payload,
        id: Date.now().toString(),
        status: 'pending',
        createdAt: new Date().toISOString()
      }
      return {
        ...state,
        reservations: [...state.reservations, newReservation]
      }
    
    case 'ADD_ORDER':
      const newOrder = {
        ...action.payload,
        id: Date.now().toString(),
        status: 'confirmed',
        createdAt: new Date().toISOString()
      }
      return {
        ...state,
        orders: [...state.orders, newOrder],
        cart: []
      }
    
    default:
      return state
  }
}

export function CateringProvider({ children }) {
  const [state, dispatch] = useReducer(cateringReducer, initialState)

  const addToCart = (item) => {
    dispatch({ type: 'ADD_TO_CART', payload: item })
  }

  const removeFromCart = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id })
  }

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id)
    } else {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } })
    }
  }

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  const addReservation = (reservation) => {
    dispatch({ type: 'ADD_RESERVATION', payload: reservation })
  }

  const addOrder = (order) => {
    dispatch({ type: 'ADD_ORDER', payload: order })
  }

  const getCartTotal = () => {
    return state.cart.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  const getCartItemCount = () => {
    return state.cart.reduce((total, item) => total + item.quantity, 0)
  }

  const value = {
    ...state,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    addReservation,
    addOrder,
    getCartTotal,
    getCartItemCount
  }

  return (
    <CateringContext.Provider value={value}>
      {children}
    </CateringContext.Provider>
  )
}

export function useCatering() {
  const context = useContext(CateringContext)
  if (!context) {
    throw new Error('useCatering must be used within a CateringProvider')
  }
  return context
}
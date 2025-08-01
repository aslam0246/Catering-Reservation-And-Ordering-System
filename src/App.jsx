import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CateringProvider } from './context/CateringContext'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Reservation from './pages/Reservation'
import About from './pages/About'
import Contact from './pages/Contact'
import OrderTracking from './pages/OrderTracking'

function App() {
  return (
    <CateringProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/reservation" element={<Reservation />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/tracking" element={<OrderTracking />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CateringProvider>
  )
}

export default App
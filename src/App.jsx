import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import ProductDetail from './components/ProductDetail'
import Checkout from './pages/Checkout'
import AuthPage from './pages/LoginSignUp'


function App() {

  return (
    <>
      <Navbar />
      <main>

        <Routes>
          <Route path="/RawHerbCopy/product/:id" element={<ProductDetail />} />
          <Route path='/RawHerbCopy/' element={<Home />} />
          <Route path='/RawHerbCopy/cart/' element={<Cart />} />
          <Route path='/RawHerbCopy/login/' element={<AuthPage />} />
          <Route path='/RawHerbCopy/contact-us/' element={<Contact />} />
          <Route path='/RawHerbCopy/checkout' element={<Checkout />} />
        </Routes>

      </main>
      <Footer />
    </>
  )
}

export default App

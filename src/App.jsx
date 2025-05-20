import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import Contact from './pages/Contact'
import ProductDetail from './components/ProductDetail'
import ScrollToTop from './components/ScrollToTop'

function App() {

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>

        <Routes>
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path='/' element={<Home />} />
          <Route path='/contact-us/' element={<Contact />} />
        </Routes>

      </main>
      <Footer />
    </>
  )
}

export default App

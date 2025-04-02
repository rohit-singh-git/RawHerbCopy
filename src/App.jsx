import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import Contact from './pages/Contact'
import ProductDetail from './components/ProductDetail'

function App() {

  return (
    <>
      <Navbar />
      <main>

        <Routes>
          <Route path="/RawHerbCopy/product/:id" element={<ProductDetail />} />
          <Route path='/RawHerbCopy/' element={<Home />} />
          <Route path='/RawHerbCopy/contact-us/' element={<Contact />} />
        </Routes>

      </main>
      <Footer />
    </>
  )
}

export default App

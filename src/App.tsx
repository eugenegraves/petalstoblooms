import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Pricing from './components/Pricing'
import Gallery from './components/Gallery'
import Carousel from './components/Carousel'
import Contact from './components/Contact'
import FontTester from './components/FontTester'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery/:category" element={<Carousel />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/font-test" element={<FontTester />} />
      </Routes>
    </Router>
  )
}

export default App


import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedProducts from './components/FeaturedProducts'
import PromoBanner from './components/PromoBanner'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar cartCount={3} />
      <Hero />
      <FeaturedProducts />
      <PromoBanner />
      <Footer />
    </div>
  )
}

export default App

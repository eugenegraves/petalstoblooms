import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import './Pricing.css'

const Pricing = () => {
  const gridRef = useRef<HTMLDivElement>(null)
  const disclaimerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline()

    // Grid columns stagger animation
    if (gridRef.current) {
      const columns = gridRef.current.querySelectorAll('.pricing-column')
      gsap.set(columns, { opacity: 0, y: 40 })
      tl.to(columns, {
        opacity: 1,
        y: 0,
        duration: 1.0,
        ease: 'power3.out',
        stagger: 0.3,
      }, 0.2)
    }

    // Disclaimer fades in last
    if (disclaimerRef.current) {
      gsap.set(disclaimerRef.current, { opacity: 0 })
      tl.to(
        disclaimerRef.current,
        {
          opacity: 1,
          duration: 0.9,
          ease: 'power2.out',
        },
        1.2
      )
    }

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <div className="pricing-container">
      {/* Header Navigation - Consistent with other pages */}
      <header className="header">
        <nav className="nav">
          <Link to="/" className="nav-link">HOME</Link>
          <Link to="/about" className="nav-link">ABOUT US</Link>
          <Link to="/pricing" className="nav-link nav-link-active">PRICING</Link>
          <Link to="/gallery" className="nav-link">GALLERY</Link>
          <Link to="/contact" className="nav-link">CONTACT US</Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="pricing-main">
        <div className="pricing-grid" ref={gridRef}>
          {/* Column 1 - 1 STEM */}
          <div className="pricing-column">
            <div className="orchid-images-container">
              <div className="orchid-item">
                <img 
                  src="/images/pricing-image-1.jpg" 
                  alt="1 stem orchid arrangement"
                  className="orchid-image"
                />
              </div>
              <div className="orchid-item">
                <img 
                  src="/images/pricing-image-2.jpg" 
                  alt="1 stem orchid arrangement"
                  className="orchid-image"
                />
              </div>
            </div>
            <div className="pricing-info">
              <div className="stem-count">1 STEM</div>
            </div>
          </div>

          {/* Column 2 - 2 STEMS */}
          <div className="pricing-column">
            <div className="orchid-images-container">
              <div className="orchid-item">
                <img 
                  src="/images/pricing-image-3.jpg" 
                  alt="2 stems orchid arrangement"
                  className="orchid-image"
                />
              </div>
              <div className="orchid-item">
                <img 
                  src="/images/pricing-image-4.jpg" 
                  alt="2 stems orchid arrangement"
                  className="orchid-image"
                />
              </div>
            </div>
            <div className="pricing-info">
              <div className="stem-count">2 STEMS</div>
            </div>
          </div>

          {/* Column 3 - 3 STEMS */}
          <div className="pricing-column">
            <div className="orchid-images-container">
              <div className="orchid-item">
                <img 
                  src="/images/pricing-image-5.jpg" 
                  alt="3 stems orchid arrangement"
                  className="orchid-image"
                />
              </div>
              <div className="orchid-item">
                <img 
                  src="/images/pricing-image-6.jpg" 
                  alt="3 stems orchid arrangement"
                  className="orchid-image"
                />
              </div>
            </div>
            <div className="pricing-info">
              <div className="stem-count">3 STEMS</div>
            </div>
          </div>
        </div>

        {/* Pricing Disclaimer */}
        <div className="pricing-disclaimer" ref={disclaimerRef}>
          <p className="disclaimer-text">
            *Prices vary depending upon the container and the decor you choose; larger arrangements will be priced accordingly. Plants & Orchids grow differently and will vary in number of blooms, buds and leaves
          </p>
        </div>
      </main>
    </div>
  )
}

export default Pricing


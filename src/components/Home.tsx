import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import './Home.css'
import Logo from './Logo'
import VanillaTilt from 'vanilla-tilt'

const Home = () => {
  const tiltRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const leftColumnRef = useRef<HTMLDivElement>(null)
  const rightColumnRef = useRef<HTMLDivElement>(null)
  const branchRef = useRef<HTMLDivElement>(null)
  const imageContainerRef = useRef<HTMLDivElement>(null)
  const textContentRef = useRef<HTMLDivElement>(null)
  const contactInfoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Only apply tilt effect on non-mobile devices (tablet and desktop)
    const isMobile = window.innerWidth < 768
    if (!isMobile && tiltRef.current) {
      const tiltElement = tiltRef.current
      VanillaTilt.init(tiltElement, {
        max: 15,
        speed: 400,
        glare: true,
        'max-glare': 0.2,
      })

      return () => {
        // Cleanup on unmount
        if (tiltElement && (tiltElement as any).vanillaTilt) {
          (tiltElement as any).vanillaTilt.destroy()
        }
      }
    }
  }, [])

  useEffect(() => {
    // Page entrance animations
    const tl = gsap.timeline()

    // Left column slides in from left
    if (leftColumnRef.current) {
      gsap.set(leftColumnRef.current, { x: -30, opacity: 0 })
      tl.to(
        leftColumnRef.current,
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
        },
        0.2
      )
    }

    // Right column slides in from right
    if (rightColumnRef.current) {
      gsap.set(rightColumnRef.current, { x: 30, opacity: 0 })
      tl.to(
        rightColumnRef.current,
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
        },
        0.4
      )
    }

    // Logo fades in
    if (logoRef.current) {
      gsap.set(logoRef.current, { opacity: 0, scale: 0.95 })
      tl.to(
        logoRef.current,
        {
          opacity: 1,
          scale: 1,
          duration: 1.0,
          ease: 'back.out(1.2)',
        },
        0.6
      )
    }

    // Image container fades in from bottom
    if (imageContainerRef.current) {
      gsap.set(imageContainerRef.current, { opacity: 0, y: 30 })
      tl.to(
        imageContainerRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 1.0,
          ease: 'power3.out',
        },
        1.0
      )
    }

    // Text content fades in from bottom
    if (textContentRef.current) {
      gsap.set(textContentRef.current, { opacity: 0, y: 30 })
      tl.to(
        textContentRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 1.0,
          ease: 'power3.out',
        },
        1.2
      )
    }

    // Contact info fades in from bottom
    if (contactInfoRef.current) {
      gsap.set(contactInfoRef.current, { opacity: 0, y: 30 })
      tl.to(
        contactInfoRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 1.0,
          ease: 'power3.out',
        },
        1.4
      )
    }

    // Decorative branch fades in last
    if (branchRef.current) {
      gsap.set(branchRef.current, { opacity: 0 })
      tl.to(
        branchRef.current,
        {
          opacity: 0.6,
          duration: 1.0,
          ease: 'power2.out',
        },
        1.8
      )
    }

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <div className="home-container">
      {/* Header Navigation */}
      <header className="header">
        <nav className="nav">
          <Link to="/" className="nav-link nav-link-active">HOME</Link>
          <Link to="/about" className="nav-link">ABOUT US</Link>
          <Link to="/pricing" className="nav-link">PRICING</Link>
          <Link to="/gallery" className="nav-link">GALLERY</Link>
          <Link to="/contact" className="nav-link">CONTACT US</Link>
        </nav>
      </header>

      {/* Main Content - Two Column Layout */}
      <main className="main-content">
        {/* Left Column - Dark Gray */}
        <div className="left-column" ref={leftColumnRef}>
          {/* Logo Area */}
          <div className="logo-area" ref={logoRef}>
            <Logo />
          </div>

          {/* Image and Text Content - Side by side on mobile */}
          <div className="image-text-wrapper">
            {/* Image */}
            <div className="image-container" ref={imageContainerRef}>
              <img 
                src="/images/home-image.jpg" 
                alt="Orchid arrangement"
                className="orchid-image"
              />
            </div>

            {/* Text Content */}
            <div className="text-content" ref={textContentRef}>
              <p className="paragraph">
                <span className="drop-cap">L</span>ocated in Palm Beach Gardens, we bring life to your space with Living Art. Our unique orchid arrangements are paired with tropical plants, lasting much longer than cut flowers. Browse through our designs & see what we can do for you.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="contact-info" ref={contactInfoRef}>
            <p className="phone">561-768-5217</p>
            <a href="mailto:petalstobloomsfl@gmail.com" className="email">
              petalstobloomsfl@gmail.com
            </a>
            <div className="instagram-link">
              <span>Follow us on Instagram!</span>
              <a 
                href="https://instagram.com/petalstobloomsfl" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <svg 
                  className="instagram-icon" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="instagramGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#833AB4" />
                      <stop offset="50%" stopColor="#FD1D1D" />
                      <stop offset="100%" stopColor="#FCAF45" />
                    </linearGradient>
                  </defs>
                  <path 
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                    fill="url(#instagramGradient)"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column - Sage Green */}
        <div className="right-column" ref={rightColumnRef}>
          {/* Main Image */}
          {/* Note: Client mentioned they have a video of this arrangement rotating - can be added later */}
          <div className="main-image-container" ref={tiltRef}>
            <img 
              src="/images/Gleneagles-Big-Lobby.jpg" 
              alt="Luxurious floral arrangement"
              className="main-orchid-image"
            />
          </div>

          {/* Call to Action */}
          <div className="cta-section">
            <p className="cta-text">Ask About Our Concierge Service</p>
          </div>
        </div>

        {/* Decorative Branch - Using Floralipart2 font, positioned at the boundary */}
        {/* Common characters to try for branch designs: Q, S, |, I, l, or check /font-test route to see all characters */}
        <div className="decorative-branch" ref={branchRef}>c</div>
      </main>
    </div>
  )
}

export default Home


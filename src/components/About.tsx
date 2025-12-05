import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import './About.css'

const About = () => {
  const textSectionRef = useRef<HTMLDivElement>(null)
  const imagesSectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const ownerSectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline()

    // Title animation
    if (titleRef.current) {
      gsap.set(titleRef.current, { opacity: 0, y: 20 })
      tl.to(
        titleRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 1.0,
          ease: 'power3.out',
        },
        0.2
      )
    }

    // Text section slides in from left
    if (textSectionRef.current) {
      gsap.set(textSectionRef.current, { x: -40, opacity: 0 })
      tl.to(
        textSectionRef.current,
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
        },
        0.4
      )
    }

    // Images section slides in from right
    if (imagesSectionRef.current) {
      gsap.set(imagesSectionRef.current, { x: 40, opacity: 0 })
      tl.to(
        imagesSectionRef.current,
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
        },
        0.6
      )
    }

    // Owner section fades in last
    if (ownerSectionRef.current) {
      gsap.set(ownerSectionRef.current, { opacity: 0, scale: 0.95 })
      tl.to(
        ownerSectionRef.current,
        {
          opacity: 1,
          scale: 1,
          duration: 1.0,
          ease: 'back.out(1.2)',
        },
        0.8
      )
    }

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <div className="about-container">
      {/* Header Navigation - Consistent with homepage */}
      <header className="header">
        <nav className="nav">
          <Link to="/" className="nav-link">HOME</Link>
          <Link to="/about" className="nav-link nav-link-active">ABOUT US</Link>
          <Link to="/pricing" className="nav-link">PRICING</Link>
          <Link to="/gallery" className="nav-link">GALLERY</Link>
          <Link to="/contact" className="nav-link">CONTACT US</Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="about-main">
        <div className="about-content">
          {/* Left Section - Text Content */}
          <div className="text-section" ref={textSectionRef}>
            <h1 className="welcome-title" ref={titleRef}>Welcome!</h1>
            
            <p className="paragraph-regular">
              Welcome to our gallery & of stunning orchid arrangements. From the roots to the petals each arrangement is created for you...unique & custom designed. We offer 'At Home' installation and Interiorscape set-up along with frequent maintenance visits to help care for your larger indoor/outdoor potted planters.
            </p>

            <p className="paragraph-bold">
              Enhance the elements of your private residence, event, business, outdoor space. We also cater to storefronts, offices, restaurants, yacht clubs, luxury car dealerships, corporate offices, interior designers, beauty salons, event venues, holidays and more. You can purchase one of our containers or bring your own!
            </p>

            <p className="paragraph-regular">
              We also offer hanging plants, terrariums, succulent gardens, table decor & gift baskets.
            </p>

            {/* Nancy Crell Section */}
            <div className="owner-section" ref={ownerSectionRef}>
              <div className="owner-image-wrapper">
                <img 
                  src="/images/nancy-picture.jpg" 
                  alt="Nancy Crell"
                  className="owner-image"
                />
              </div>
              <div className="owner-info">
                <h2 className="owner-name">Nancy Crell</h2>
                <p className="owner-title">Owner / Lead Designer</p>
              </div>
            </div>
          </div>

          {/* Right Section - Images with Labels */}
          <div className="images-section" ref={imagesSectionRef}>
            <div className="image-item">
              <div className="image-label">Orchid Arrangements</div>
              <div className="image-wrapper">
                <img 
                  src="/images/cohen-shell.jpg" 
                  alt="Orchid arrangements on outdoor patio"
                  className="content-image"
                />
              </div>
            </div>

            <div className="image-item image-item-centered">
              <div className="image-label image-label-small">Succulent Gardens, Hanging Planters & More</div>
              <div className="image-wrapper image-wrapper-small">
                <img 
                  src="/images/driftwood-2.jpg" 
                  alt="Driftwood arrangement with plants"
                  className="content-image"
                />
              </div>
            </div>

            <div className="image-item">
              <div className="image-label">Gift Baskets & Tablescapes</div>
              <div className="image-wrapper">
                <img 
                  src="/images/X-Mas Console Table.jpg" 
                  alt="Gift baskets and tablescapes"
                  className="content-image"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default About


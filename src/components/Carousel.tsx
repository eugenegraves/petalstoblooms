import { useState, useEffect, useRef } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { gsap } from 'gsap'
import './Carousel.css'

// Image sets for each category
const categoryImages: Record<string, string[]> = {
  'orchid-arrangements': [
    '/images/carousel/orchid-1.jpg',
    '/images/carousel/orchid-2.jpg',
    '/images/carousel/orchid-3.jpg',
    '/images/carousel/orchid-4.jpg',
    '/images/carousel/orchid-5.jpg',
    '/images/carousel/orchid-6.jpg',
    '/images/carousel/orchid-7.jpg',
    '/images/carousel/orchid-8.jpg',
    '/images/carousel/orchid-9.jpg',
    '/images/carousel/orchid-10.jpg',
    '/images/carousel/orchid-11.jpg',
    '/images/carousel/orchid-12.jpg',
    '/images/carousel/orchid-13.jpg',
    '/images/carousel/orchid-14.jpg',
    '/images/carousel/orchid-15.jpg',
    '/images/carousel/orchid-16.jpg',
    '/images/carousel/orchid-17.jpg',
    '/images/carousel/orchid-18.jpg',
    '/images/carousel/orchid-19.jpg',
    '/images/carousel/orchid-20.jpg',
    '/images/carousel/orchid-21.jpg',
  ],
  'succulent-gardens': [
    '/images/carousel/succulent-1.jpg',
    '/images/carousel/succulent-2.jpg',
    '/images/carousel/succulent-3.jpg',
    '/images/carousel/succulent-4.jpg',
    '/images/carousel/succulent-5.jpg',
    '/images/carousel/succulent-6.jpg',
    '/images/carousel/succulent-7.jpg',
    '/images/carousel/succulent-8.jpg',
    '/images/carousel/succulent-9.jpg',
    '/images/carousel/succulent-10.jpg',
    '/images/carousel/succulent-11.jpg',
    '/images/carousel/succulent-12.jpg',
    '/images/carousel/succulent-13.jpg',
    '/images/carousel/succulent-14.jpg'
  ],
  'events-tablescapes': [
    '/images/carousel/tablescape-1.jpg',
    '/images/carousel/tablescape-2.jpg',
    '/images/carousel/tablescape-3.jpg',
    '/images/carousel/tablescape-4.jpg',
    '/images/carousel/tablescape-5.jpg',
    '/images/carousel/tablescape-6.jpg',
    '/images/carousel/tablescape-7.jpg',
    '/images/carousel/tablescape-8.jpg',
    '/images/carousel/tablescape-9.jpg',
    '/images/carousel/tablescape-10.jpg',
    '/images/carousel/tablescape-11.jpg',
    '/images/carousel/tablescape-12.jpg',
  ],
}

const categoryTitles: Record<string, string> = {
  'orchid-arrangements': 'Orchid Arrangements',
  'succulent-gardens': 'Succulent Gardens, Hanging Planters, Terrariums & More',
  'events-tablescapes': 'Events, Gift Baskets & Tablescapes',
}

const Carousel = () => {
  const { category } = useParams<{ category: string }>()
  const navigate = useNavigate()
  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)

  // Get images for the current category
  const images = category && categoryImages[category] ? categoryImages[category] : []

  useEffect(() => {
    setCurrentIndex(0)
  }, [category])

  useEffect(() => {
    const tl = gsap.timeline()

    // Carousel container animation
    if (carouselRef.current) {
      gsap.set(carouselRef.current, { opacity: 0, scale: 0.95 })
      tl.to(
        carouselRef.current,
        {
          opacity: 1,
          scale: 1,
          duration: 1.0,
          ease: 'power3.out',
        },
        0.2
      )
    }

    return () => {
      tl.kill()
    }
  }, [category])

  // Animate image change
  useEffect(() => {
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.98 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: 'power2.out',
        }
      )
    }
  }, [currentIndex])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  if (!category || !images.length) {
    return (
      <div className="carousel-container">
        <div className="carousel-error">
          <p>Category not found or no images available.</p>
          <Link to="/gallery" className="back-link">Back to Gallery</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="carousel-container">
      {/* Header Navigation */}
      <header className="header">
        <nav className="nav">
          <Link to="/" className="nav-link">HOME</Link>
          <Link to="/about" className="nav-link">ABOUT US</Link>
          <Link to="/pricing" className="nav-link">PRICING</Link>
          <Link to="/gallery" className="nav-link nav-link-active">GALLERY</Link>
          <Link to="/contact" className="nav-link">CONTACT US</Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="carousel-main">
        <div className="carousel-header">
          <Link to="/gallery" className="back-button">← Back to Gallery</Link>
          <h1 className="carousel-title">{categoryTitles[category] || 'Gallery'}</h1>
        </div>

        <div className="carousel-wrapper" ref={carouselRef}>
          <button 
            className="carousel-button carousel-button-prev" 
            onClick={goToPrevious}
            aria-label="Previous image"
          >
            ‹
          </button>

          <div className="carousel-slide-container">
            <img 
              ref={imageRef}
              src={images[currentIndex]} 
              alt={`${categoryTitles[category]} - Image ${currentIndex + 1}`}
              className="carousel-image"
            />
          </div>

          <button 
            className="carousel-button carousel-button-next" 
            onClick={goToNext}
            aria-label="Next image"
          >
            ›
          </button>
        </div>

        {/* Dots indicator */}
        <div className="carousel-dots">
          {images.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Image counter */}
        <div className="carousel-counter">
          {currentIndex + 1} / {images.length}
        </div>
      </main>
    </div>
  )
}

export default Carousel


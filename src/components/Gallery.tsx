import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import './Gallery.css'

const orchidImages = [
  '/images/carousel/orchid-1.jpg',
  '/images/carousel/orchid-2.jpg',
  '/images/carousel/orchid-3.jpg',
  '/images/carousel/orchid-4.jpg',
  '/images/carousel/orchid-5.jpg',
  '/images/carousel/orchid-7.jpg',
  '/images/carousel/orchid-8.jpg',
  '/images/carousel/orchid-9.jpg',
  '/images/carousel/orchid-10.jpg',
  '/images/carousel/orchid-11.jpg',
  '/images/carousel/orchid-14.jpg',
  '/images/carousel/orchid-15.jpg',
  '/images/carousel/orchid-16.jpg',
  '/images/carousel/orchid-17.jpg',
  '/images/carousel/orchid-18.jpg',
  '/images/carousel/orchid-19.jpg',
  '/images/carousel/orchid-21.jpg',
  '/images/carousel/orchid-22.jpg',
  '/images/carousel/orchid-23.jpg'
]

const succulentImages = [
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
]

const tablescapeImages = [
  '/images/carousel/tablescape-1.jpg',
  '/images/carousel/tablescape-2.jpg',
  '/images/carousel/tablescape-3.jpg',
  '/images/carousel/tablescape-4.jpg',
  '/images/carousel/tablescape-5.jpg',
  '/images/carousel/tablescape-6.jpg',
  '/images/carousel/tablescape-7.jpg',
  '/images/carousel/tablescape-9.jpg',
  '/images/carousel/tablescape-10.jpg',
  '/images/carousel/tablescape-11.png',
  '/images/carousel/tablescape-12.jpg'
]

const AutoCarousel = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

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

  return (
    <div className="auto-carousel-wrapper">
      <div className="auto-carousel-container">
        <button 
          className="gallery-carousel-button gallery-carousel-button-prev"
          onClick={goToPrevious}
          aria-label="Previous image"
        >
          ‹
        </button>
        <img 
          src={images[currentIndex]} 
          alt={`Gallery image ${currentIndex + 1}`}
          className="auto-carousel-image"
        />
        <button 
          className="gallery-carousel-button gallery-carousel-button-next"
          onClick={goToNext}
          aria-label="Next image"
        >
          ›
        </button>
      </div>
    </div>
  )
}

const Gallery = () => {
  const categoriesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline()

    // Categories stagger animation
    if (categoriesRef.current) {
      const categories = categoriesRef.current.querySelectorAll('.gallery-category')
      gsap.set(categories, { opacity: 0, y: 50, scale: 0.95 })
      tl.to(categories, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.0,
        ease: 'power3.out',
        stagger: 0.4,
      }, 0.2)
    }

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <div className="gallery-container">
      {/* Header Navigation - Consistent with other pages */}
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
      <main className="gallery-main">
        <div className="gallery-categories" ref={categoriesRef}>
          {/* Category 1 - Orchid Arrangements */}
          <div className="gallery-category">
            <div className="category-link category-link-no-hover">
              <div className="category-image-wrapper">
                <AutoCarousel images={orchidImages} />
              </div>
              <h2 className="category-title">Orchid Arrangements</h2>
            </div>
          </div>

          {/* Category 2 - Succulent Gardens, etc */}
          <div className="gallery-category">
            <div className="category-link category-link-no-hover">
              <div className="category-image-wrapper">
                <AutoCarousel images={succulentImages} />
              </div>
              <h2 className="category-title">
                Succulent Gardens<br />
                Hanging Planters, Terrariums<br />
                & More
              </h2>
            </div>
          </div>

          {/* Category 3 - Events, Gift Baskets & Tablescapes */}
          <div className="gallery-category">
            <div className="category-link category-link-no-hover">
              <div className="category-image-wrapper">
                <AutoCarousel images={tablescapeImages} />
              </div>
              <h2 className="category-title">
                Events, Gift Baskets<br />
                & Tablescapes
              </h2>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Gallery


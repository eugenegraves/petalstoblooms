import { useEffect, useRef, ReactNode } from 'react'
import { gsap } from 'gsap'
import { useLocation } from 'react-router-dom'

interface PageTransitionProps {
  children: ReactNode
}

/**
 * Page Transition wrapper component
 * Handles fade-in animations when navigating between pages
 */
const PageTransition = ({ children }: PageTransitionProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const location = useLocation()

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current

    // Fade out old content
    gsap.fromTo(
      container,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.4,
        ease: 'power2.out',
      }
    )
  }, [location.pathname])

  return (
    <div ref={containerRef} style={{ minHeight: '100vh' }}>
      {children}
    </div>
  )
}

export default PageTransition


import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

interface AnimationConfig {
  fadeIn?: boolean
  slideUp?: boolean
  slideFromLeft?: boolean
  slideFromRight?: boolean
  delay?: number
  duration?: number
}

/**
 * Custom hook for page animations
 * Animates elements on mount and when navigating between pages
 */
export const usePageAnimations = () => {
  const pageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!pageRef.current) return

    // Set initial states for all animated elements
    const animatedElements = pageRef.current.querySelectorAll('[data-animate]')
    
    animatedElements.forEach((el) => {
      const element = el as HTMLElement
      const config = element.dataset.animate || ''
      const delay = parseFloat(element.dataset.delay || '0')
      const duration = parseFloat(element.dataset.duration || '0.8')

      // Set initial state based on animation type
      if (config.includes('fade-up')) {
        gsap.set(element, { opacity: 0, y: 30 })
      } else if (config.includes('fade-left')) {
        gsap.set(element, { opacity: 0, x: -30 })
      } else if (config.includes('fade-right')) {
        gsap.set(element, { opacity: 0, x: 30 })
      } else if (config.includes('fade')) {
        gsap.set(element, { opacity: 0 })
      } else {
        gsap.set(element, { opacity: 0, y: 20 })
      }
    })

    // Animate elements
    const tl = gsap.timeline()

    animatedElements.forEach((el) => {
      const element = el as HTMLElement
      const config = element.dataset.animate || ''
      const delay = parseFloat(element.dataset.delay || '0')
      const duration = parseFloat(element.dataset.duration || '0.8')

      if (config.includes('fade-up')) {
        tl.to(element, {
          opacity: 1,
          y: 0,
          duration: duration,
          ease: 'power3.out',
        }, delay)
      } else if (config.includes('fade-left')) {
        tl.to(element, {
          opacity: 1,
          x: 0,
          duration: duration,
          ease: 'power3.out',
        }, delay)
      } else if (config.includes('fade-right')) {
        tl.to(element, {
          opacity: 1,
          x: 0,
          duration: duration,
          ease: 'power3.out',
        }, delay)
      } else if (config.includes('fade')) {
        tl.to(element, {
          opacity: 1,
          duration: duration,
          ease: 'power2.out',
        }, delay)
      } else {
        tl.to(element, {
          opacity: 1,
          y: 0,
          duration: duration,
          ease: 'power3.out',
        }, delay)
      }
    })

    return () => {
      tl.kill()
    }
  }, [])

  return pageRef
}

/**
 * Simple fade-in animation hook
 */
export const useFadeIn = (delay: number = 0, duration: number = 0.8) => {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!ref.current) return

    gsap.fromTo(
      ref.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: duration,
        delay: delay,
        ease: 'power2.out',
      }
    )
  }, [])

  return ref
}

/**
 * Slide up and fade in animation hook
 */
export const useSlideUp = (delay: number = 0, duration: number = 0.8, distance: number = 30) => {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!ref.current) return

    gsap.fromTo(
      ref.current,
      { opacity: 0, y: distance },
      {
        opacity: 1,
        y: 0,
        duration: duration,
        delay: delay,
        ease: 'power3.out',
      }
    )
  }, [])

  return ref
}

/**
 * Slide from side and fade in animation hook
 */
export const useSlideFromSide = (
  side: 'left' | 'right' = 'left',
  delay: number = 0,
  duration: number = 0.8,
  distance: number = 30
) => {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!ref.current) return

    const x = side === 'left' ? -distance : distance

    gsap.fromTo(
      ref.current,
      { opacity: 0, x: x },
      {
        opacity: 1,
        x: 0,
        duration: duration,
        delay: delay,
        ease: 'power3.out',
      }
    )
  }, [side])

  return ref
}


import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import emailjs from '@emailjs/browser'
import './Contact.css'

// EmailJS Configuration
const EMAILJS_SERVICE_ID = 'service_sqba6ii'
const EMAILJS_TEMPLATE_ID = 'template_ctai1no'
const EMAILJS_PUBLIC_KEY = 'lEeQsyrfgz5cCHF8H'

const Contact = () => {
  const imageSectionRef = useRef<HTMLDivElement>(null)
  const formSectionRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    const tl = gsap.timeline()

    // Image section slides in from left
    if (imageSectionRef.current) {
      gsap.set(imageSectionRef.current, { x: -50, opacity: 0 })
      tl.to(
        imageSectionRef.current,
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
        },
        0.2
      )
    }

    // Form section slides in from right
    if (formSectionRef.current) {
      gsap.set(formSectionRef.current, { x: 50, opacity: 0 })
      tl.to(
        formSectionRef.current,
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
        },
        0.5
      )
    }

    return () => {
      tl.kill()
    }
  }, [])
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    comment: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [statusMessage, setStatusMessage] = useState('')

  useEffect(() => {
    // Initialize EmailJS
    emailjs.init(EMAILJS_PUBLIC_KEY)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    // Clear status message when user starts typing again
    if (submitStatus !== 'idle') {
      setSubmitStatus('idle')
      setStatusMessage('')
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setStatusMessage('')

    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          message: formData.comment,
          first_name: formData.firstName,
          last_name: formData.lastName,
        },
        EMAILJS_PUBLIC_KEY
      )

      if (result.text === 'OK') {
        setSubmitStatus('success')
        setStatusMessage('Thank you! Your message has been sent successfully.')
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          comment: ''
        })
      }
    } catch (error) {
      console.error('EmailJS Error:', error)
      setSubmitStatus('error')
      setStatusMessage('Sorry, there was an error sending your message. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="contact-container">
      {/* Header Navigation - Consistent with other pages */}
      <header className="header">
        <nav className="nav">
          <Link to="/" className="nav-link">HOME</Link>
          <Link to="/about" className="nav-link">ABOUT US</Link>
          <Link to="/pricing" className="nav-link">PRICING</Link>
          <Link to="/gallery" className="nav-link">GALLERY</Link>
          <Link to="/contact" className="nav-link nav-link-active">CONTACT US</Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="contact-main">
        <div className="contact-content">
          {/* Left Side - Decorative Image */}
          <div className="contact-image-section" ref={imageSectionRef}>
            <img 
              src="/images/skinny_shells.jpg" 
              alt="Natural arrangement with greenery and seashells"
              className="contact-arrangement-image"
            />
          </div>

          {/* Right Side - Contact Form */}
          <div className="contact-form-section" ref={formSectionRef}>
            <h1 className="contact-header">
              CONTACT US USING THE FORM BELOW. WE WILL GET BACK TO YOU PROMPTLY
            </h1>
            <p className="required-indicator">*INDICATES REQUIRED FIELD</p>

            <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="firstName" className="form-label">
                  Name*
                </label>
                <div className="name-inputs">
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="First"
                    className="form-input name-input"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Last"
                    className="form-input name-input"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  *Email*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="comment" className="form-label">
                  *Comment
                </label>
                <textarea
                  id="comment"
                  name="comment"
                  className="form-textarea"
                  rows={6}
                  value={formData.comment}
                  onChange={handleChange}
                  required
                />
              </div>

              <button 
                type="submit" 
                className="submit-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'SENDING...' : 'SUBMIT MESSAGE'}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="form-status form-status-success">
                  {statusMessage}
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="form-status form-status-error">
                  {statusMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Contact


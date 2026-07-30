import { useState, useEffect } from 'react'

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const slides = [
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&h=900&fit=crop',
    'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1600&h=900&fit=crop',
    'https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=1600&h=900&fit=crop'
  ]
  useEffect(() => {
    const t = setInterval(() => setCurrent((s) => (s + 1) % slides.length), 3500)
    return () => clearInterval(t)
  }, [slides.length])

  return (
    <section className="hero" aria-label="Featured">
      <div className="banner-slide active" style={{ backgroundImage: `url('${slides[current]}')` }} />
      <div className="banner-content">
        <h1>Take more trips, create more memories.</h1>
        <p>Curated beach, mountain and city packages across Goa, Myanmar, Singapore and more.</p>
        <div className="banner-cta">
          <button className="btn btn-primary" onClick={() => document.getElementById('packages').scrollIntoView({ behavior: 'smooth' })}>Explore Packages</button>
          <button className="btn btn-secondary">Why book with us</button>
        </div>
      </div>
    </section>
  )
}

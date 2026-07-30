import { useState, useRef, useEffect } from 'react'
import TopNav from '../components/TopNav/TopNav.jsx'
import Hero from '../components/Hero/Hero.jsx'
import TopPicks from '../components/TopPicks/TopPicks.jsx'
import Search from '../components/Search/Search.jsx'
import FilterChip from '../components/FilterChip/FilterChip.jsx'
import PackageCard from '../components/PackageCard/PackageCard.jsx'
import HotelCard from '../components/HotelCard/HotelCard.jsx'
import DestinationCard from '../components/DestinationCard/DestinationCard.jsx'
import TestimonialCard from '../components/TestimonialCard/TestimonialCard.jsx'
import Footer from '../components/Footer/Footer.jsx'
import { packages as packagesData } from '../data/packages.js'
import { hotels as hotelsData } from '../data/hotels.js'
import { destinations as destinationsData } from '../data/destinations.js'

export default function Home() {
  const [filter, setFilter] = useState('All')
  const [wish, setWish] = useState(() => new Set())
  const carouselRef = useRef(null)
  const [guests, setGuests] = useState('2 Guests')
  const [destination, setDestination] = useState('')

  const filters = ['All', 'Beach', 'Heritage', 'City', 'Luxury']

  const filteredPackages = filter === 'All'
    ? packagesData
    : packagesData.filter((pkg) => pkg.type === filter || pkg.tag === filter.toLowerCase())

  const toggleWish = (id) => {
    setWish((prev) => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  const submitSearch = (e) => {
    e.preventDefault()
    if (!destination.trim()) return
    alert(`Searching packages for: ${destination}\nGuests: ${guests}`)
  }

  const scrollCarousel = (dir) => {
    const el = carouselRef.current
    if (!el) return
    el.scrollBy({ left: dir * (el.clientWidth * 0.8), behavior: 'smooth' })
  }

  return (
    <div className="app">
      <TopNav />
      <Hero />

      <TopPicks />

      <Search destination={destination} setDestination={setDestination} guests={guests} setGuests={setGuests} onSearch={submitSearch} />

      <section className="packages-section" id="packages" aria-labelledby="packages-title">
        <div className="packages-header">
          <div>
            <div className="section-badge">Handpicked Packages</div>
            <h2 id="packages-title">Trending holiday packages</h2>
            <p className="section-sub">Beach, heritage and city escapes designed for real travelers.</p>
          </div>
          <div className="filter-bar" role="tablist">
            {filters.map((f) => (
              <FilterChip key={f} label={f} active={filter === f} onClick={() => setFilter(f)} />
            ))}
          </div>
        </div>

        <div className="packages-grid">
          {filteredPackages.map((pkg) => (
            <article className="package-card" key={pkg.id} role="listitem" tabIndex={0}>
              <div className="package-media">
                <img src={pkg.image} alt={pkg.name} loading="lazy" onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=800&fit=crop' }} />
                <div className="package-badges">
                  {pkg.tag ? (
                    <span className="package-badge">{pkg.tag.charAt(0).toUpperCase() + pkg.tag.slice(1)}</span>
                  ) : null}
                  {pkg.type ? <span className="package-badge dark">{pkg.type}</span> : null}
                </div>
                <button
                  className={`package-wish ${wish.has(pkg.id) ? 'active' : ''}`}
                  aria-label={`${wish.has(pkg.id) ? 'Remove' : 'Add'} ${pkg.name} ${wish.has(pkg.id) ? 'from' : 'to'} wishlist`}
                  onClick={() => toggleWish(pkg.id)}
                >
                  {wish.has(pkg.id) ? '♥' : '♡'}
                </button>
              </div>
              <div className="package-body">
                <div className="package-location">📍 {pkg.location}</div>
                <div className="package-name">{pkg.name}</div>
                <div className="package-text">{pkg.duration} · {pkg.hotel}</div>
                <div className="package-foot">
                  <div className="package-price">${pkg.price} <small><s>${pkg.oldPrice}</s> / person</small></div>
                  <div className="package-rating">★★★★★ {pkg.rating} ({pkg.reviews.toLocaleString()})</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="hotels-section" id="hotels" aria-labelledby="hotels-title">
        <div className="section-row">
          <div>
            <div className="section-badge">Hotel Stores</div>
            <h2 id="hotels-title">Curated hotel brands</h2>
          </div>
          <div className="carousel-actions">
            <button className="carousel-btn" aria-label="Previous" onClick={() => scrollCarousel(-1)}>‹</button>
            <button className="carousel-btn" aria-label="Next" onClick={() => scrollCarousel(1)}>›</button>
          </div>
        </div>
        <div className="carousel" ref={carouselRef}>
          {hotelsData.map((hotel) => (
            <article className="hotel-card" key={hotel.id} tabIndex={0}>
              <div className="hotel-media">
                <img src={hotel.image} alt={hotel.name} loading="lazy" />
              </div>
              <div className="hotel-body">
                <div className="hotel-brand">{hotel.brand}</div>
                <div className="hotel-name">{hotel.name}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="destinations-section" aria-labelledby="experiences-title">
        <div className="section-header">
          <div>
            <span className="section-badge">Experiences</span>
            <h2 id="experiences-title">Discover more</h2>
            <p>Popular collections picked for your next trip.</p>
          </div>
        </div>
        <div className="destinations-grid">
          {destinationsData.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} wish={wish} onToggleWish={() => toggleWish(destination.id)} />
          ))}
        </div>
      </section>

      <TestimonialCard />

      <section className="cta-section" aria-labelledby="cta-title">
        <div className="cta-card">
          <h2 id="cta-title">Ready to travel?</h2>
          <p>Book now and get exclusive member savings on your next trip.</p>
          <button className="btn btn-primary" onClick={() => alert('Booking flow would open here')}>Book Now</button>
          <button className="btn btn-secondary" onClick={() => alert('Offers coming soon')}>View Offers</button>
        </div>
      </section>

      <Footer />
    </div>
  )
}

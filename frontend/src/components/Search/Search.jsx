export default function Search({ destination, setDestination, guests, setGuests, onSearch }) {
  return (
    <section className="search-section" aria-labelledby="search-title">
      <div className="search-container">
        <div className="search-card">
          <div className="search-header">
            <h2 id="search-title">Where to next?</h2>
            <p>Search packages, hotels, flights and experiences</p>
          </div>
          <form className="search-form" onSubmit={onSearch}>
            <div className="form-group">
              <label className="form-label" htmlFor="destination">Destination</label>
              <div className="form-input-wrapper">
                <input
                  type="text"
                  id="destination"
                  className="form-input"
                  placeholder="Where are you going?"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                />
                <svg className="form-input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </div>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="checkin">Check-in</label>
              <div className="form-input-wrapper">
                <input type="date" id="checkin" className="form-input" />
                <svg className="form-input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="checkout">Check-out</label>
              <div className="form-input-wrapper">
                <input type="date" id="checkout" className="form-input" />
                <svg className="form-input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="guests">Guests</label>
              <div className="form-input-wrapper">
                <select
                  id="guests"
                  className="form-input"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                >
                  <option>1 Guest</option>
                  <option>2 Guests</option>
                  <option>3 Guests</option>
                  <option>4 Guests</option>
                  <option>5+ Guests</option>
                </select>
                <svg className="form-input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
            </div>
            <button type="submit" className="search-submit">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              Search
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

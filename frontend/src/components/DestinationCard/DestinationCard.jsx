export default function DestinationCard({ destination, wish, onToggleWish }) {
  const fallbackImg = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=500&fit=crop'
  return (
    <article className="destination-card" role="listitem" tabIndex={0}>
      <div className="destination-image">
        <img src={destination.image} alt={destination.name} loading="lazy" onError={(e) => { e.currentTarget.src = fallbackImg }} />
        {destination.badge ? (
          <span className={`destination-badge ${destination.badge}`}>
            {destination.badge === 'luxe' ? 'Luxe' : 'Plus'}
          </span>
        ) : null}
        <button
          className={`wishlist-btn ${wish?.has(destination.id) ? 'active' : ''}`}
          aria-label={`${wish?.has(destination.id) ? 'Remove' : 'Add'} ${destination.name} ${wish?.has(destination.id) ? 'from' : 'to'} wishlist`}
          onClick={onToggleWish}
        >
          {wish?.has(destination.id) ? '♥' : '♡'}
        </button>
      </div>
      <div className="destination-content">
        <div className="destination-location">{destination.country}</div>
        <h3 className="destination-title">{destination.name}</h3>
        <p className="destination-desc">{destination.description}</p>
        <div className="destination-footer">
          <span className="destination-price">From ${destination.price}<span>/person</span></span>
          <div className="destination-rating">★★★★★ {destination.rating} ({destination.reviews.toLocaleString()})</div>
        </div>
      </div>
    </article>
  )
}

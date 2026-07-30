export default function PackageCard({ pkg, wish, onToggleWish }) {
  const fallbackImg = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=800&fit=crop'
  return (
    <article className="package-card" role="listitem" tabIndex={0}>
      <div className="package-media">
        <img src={pkg.image} alt={pkg.name} loading="lazy" onError={(e) => { e.currentTarget.src = fallbackImg }} />
        <div className="package-badges">
          {pkg.tag ? (
            <span className="package-badge">{pkg.tag.charAt(0).toUpperCase() + pkg.tag.slice(1)}</span>
          ) : null}
          {pkg.type ? <span className="package-badge dark">{pkg.type}</span> : null}
        </div>
        <button
          className={`package-wish ${wish?.has(pkg.id) ? 'active' : ''}`}
          aria-label={`${wish?.has(pkg.id) ? 'Remove' : 'Add'} ${pkg.name} ${wish?.has(pkg.id) ? 'from' : 'to'} wishlist`}
          onClick={() => onToggleWish?.(pkg.id)}
        >
          {wish?.has(pkg.id) ? '♥' : '♡'}
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
  )
}

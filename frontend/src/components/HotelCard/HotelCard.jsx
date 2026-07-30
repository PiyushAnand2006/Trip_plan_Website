export default function HotelCard({ hotel }) {
  const fallbackImg = 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=500&fit=crop'
  return (
    <article className="hotel-card">
      <div className="hotel-media">
        <img src={hotel.image} alt={hotel.name} loading="lazy" onError={(e) => { e.currentTarget.src = fallbackImg }} />
      </div>
      <div className="hotel-body">
        <div className="hotel-brand">{hotel.brand}</div>
        <div className="hotel-name">{hotel.name}</div>
      </div>
    </article>
  )
}

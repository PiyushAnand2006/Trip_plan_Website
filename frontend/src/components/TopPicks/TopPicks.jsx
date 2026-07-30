export default function TopPicks() {
  const fallbackImg = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=500&fit=crop'
  const picks = [
    { tag: 'Bestseller', title: 'Beach Destinations', meta: 'Goa, Maldives, Phuket — top rated stays', price: '$699 /person', image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&h=500&fit=crop' },
    { tag: 'Trending', title: 'Weekend Getaways', meta: 'Easy 2-3 day escapes from your city', price: '$249 /person', image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&h=500&fit=crop' },
    { tag: 'Family', title: 'Hill Station Retreats', meta: 'Cool breezes, scenic stays, family fun', price: '$899 /person', image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=500&fit=crop' }
  ]

  return (
    <section className="top-picks" aria-label="Top picks">
      {picks.map((pick) => (
        <article className="pick-card" key={pick.title}>
          <img
            className="pick-img"
            src={pick.image}
            alt={pick.title}
            loading="lazy"
            onError={(e) => { e.currentTarget.src = fallbackImg }}
          />
          <div className="pick-body">
            <div className="pick-top-tag">{pick.tag}</div>
            <div className="pick-title">{pick.title}</div>
            <div className="pick-meta">{pick.meta}</div>
            <div className="pick-price">{pick.price}</div>
          </div>
        </article>
      ))}
    </section>
  )
}

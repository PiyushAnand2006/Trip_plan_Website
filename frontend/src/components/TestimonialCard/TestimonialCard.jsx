import { testimonials } from '../../data/testimonials.js'

export default function TestimonialCard() {
  return (
    <section className="testimonials-section" aria-labelledby="testimonials-title">
      <div className="section-header">
        <div>
          <span className="section-badge">Traveler Stories</span>
          <h2 id="testimonials-title">Trusted by millions</h2>
          <p>Real trips, real memories.</p>
        </div>
      </div>
      <div className="testimonials-grid">
        {testimonials.map((t) => (
          <article className="testimonial-card" key={t.id}>
            <div className="testimonial-stars">{'★'.repeat(t.stars)}</div>
            <p className="testimonial-text">"{t.text}"</p>
            <div className="testimonial-author">
              <img src={t.avatar} alt="" className="testimonial-avatar" loading="lazy" />
              <div>
                <div className="testimonial-name">{t.author}</div>
                <div className="testimonial-location">{t.location}</div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

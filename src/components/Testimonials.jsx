import './Testimonials.css';

const testimonials = [
  {
    name: 'Maaz Ahmed',
    text: 'Excellent AC installation service. The technician installed my split AC professionally with proper vacuuming and gas pressure checking. Work was neat and on time.',
    rating: 5
  },
  {
    name: 'Shamshuddin Neelgar',
    text: 'Affordable price and quick service. Installation was clean with proper copper piping and drainage setup. Highly recommended.',
    rating: 5
  },
  {
    name: 'Ziya Pallan',
    text: 'My AC was not cooling. They quickly diagnosed gas issue and fixed it. Very professional and efficient.',
    rating: 5
  },
  {
    name: 'Adv Ribin Benny',
    text: 'Cooling improved significantly after service. Charges were reasonable and technician was professional.',
    rating: 5
  },
  {
    name: 'Arbaz Kanchi',
    text: 'Technician arrived on time, did proper cleaning and didn’t push unnecessary gas filling. Honest service.',
    rating: 5
  },
  {
    name: 'Asif Ameenasabanavar',
    text: 'Fast response, clean work, and honest charges. Best AC service experience.',
    rating: 5
  },
  {
    name: 'Ahamad',
    text: 'Installation was seamless and workspace was left spotless. Truly professional team.',
    rating: 5
  },
  {
    name: 'Mohammed Khasim',
    text: 'Very skilled technicians. AC working like new after service.',
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="section testimonials-section" id="testimonials">
      <div className="container">
        <div className="section-header reveal">
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">Real feedback from our satisfied clients in Hubli.</p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((t, index) => (
            <div className="testimonial-card reveal" key={index} style={{ transitionDelay: `${index * 0.1}s` }}>
              <div className="quote-icon">“</div>
              <p className="testimonial-text">{t.text}</p>
              <div className="testimonial-footer">
                <div className="stars">{'⭐'.repeat(t.rating)}</div>
                <div className="user-info">
                  <strong>{t.name}</strong>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

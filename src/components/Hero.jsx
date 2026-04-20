import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-bg-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
      </div>
      
      <div className="container hero-container reveal">
        <div className="hero-content">
          <div className="rating-badge">
            <span className="stars">⭐⭐⭐⭐⭐</span>
            <span className="rating-text">4.9/5 Rated by 90+ Customers</span>
          </div>
          <h1>Trusted <span className="text-gradient">AC Repair & Service</span> in Hubli</h1>
          <p>
            Experience cool comfort again with Hubli Airconditioners. 
            4.9⭐ rated professional AC repair, installation, and maintenance by skilled technicians.
          </p>
          
          <div className="trust-badges">
            <div className="trust-badge">✔ 24/7 Service</div>
            <div className="trust-badge">✔ Same-Day Repair</div>
            <div className="trust-badge">✔ Skilled Technicians</div>
          </div>

          <div className="hero-btns">
            <a href="tel:07338494564" className="btn btn-primary">Call Now</a>
            <a href="#contact" className="btn btn-outline">Book Service</a>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <strong>10+</strong>
              <span>Years Experience</span>
            </div>
            <div className="stat-item">
              <strong>91</strong>
              <span>Google Reviews</span>
            </div>
          </div>
        </div>
        
        <div className="hero-image">
          <div className="ac-illustration">
             <div className="unit">
               <div className="vents"></div>
               <div className="display">18°C</div>
             </div>
             <div className="air-flow">
               <span></span>
               <span></span>
               <span></span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

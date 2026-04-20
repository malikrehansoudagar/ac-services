import './Contact.css';

const Contact = () => {
  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="section-header reveal">
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">We are available 24/7 for all your AC repair needs in Hubli.</p>
        </div>
        <div className="contact-grid">
          <div className="contact-info reveal">
            <h3>Contact Details</h3>
            <p>Ready to get your AC fixed? Reach out to us via call or WhatsApp. We provide same-day doorstep service.</p>
            
            <div className="info-items">
              <div className="info-item">
                <div className="icon">📞</div>
                <div className="text">
                  <strong>Call Us</strong>
                  <a href="tel:07338494564">073384 94564</a>
                </div>
              </div>
              <div className="info-item">
                <div className="icon">💬</div>
                <div className="text">
                  <strong>WhatsApp</strong>
                  <a href="https://wa.me/917338494564" target="_blank" rel="noreferrer">Chat with us</a>
                </div>
              </div>
              <div className="info-item">
                <div className="icon">📍</div>
                <div className="text">
                  <strong>Location</strong>
                  <span>31, Gudihal Rd, Vishal Nagar, Old Hubli, Hubballi, Karnataka 580024</span>
                </div>
              </div>
            </div>

            <div className="map-placeholder">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3848.1465664124334!2d75.1226053!3d15.3117565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8d7367c37617b%3A0xc078972e3895e636!2sHubli%20Airconditioners!5e0!3m2!1sen!2sin!4v1713596543000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Hubli Airconditioners Location"
              ></iframe>
            </div>
          </div>

          <div className="contact-form-container reveal">
            <form className="contact-form">
              <div className="form-group">
                <label>Name</label>
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" placeholder="Your Phone" required />
              </div>
              <div className="form-group">
                <label>Service Type</label>
                <select>
                  <option>AC Repair</option>
                  <option>AC Installation</option>
                  <option>Gas Charging</option>
                  <option>Maintenance</option>
                  <option>Commercial AC</option>
                </select>
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea rows="4" placeholder="How can we help?"></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-block">Send Message</button>
              
              <div className="form-divider">OR</div>
              
              <a href="https://wa.me/917338494564" target="_blank" rel="noreferrer" className="btn btn-whatsapp btn-block">
                <span>💬</span> Chat on WhatsApp
              </a>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

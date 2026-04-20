import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo">
              <span className="logo-icon">❄️</span>
              <span className="logo-text">Hubli Airconditioners</span>
            </div>
            <p>Reliable AC Service in Hubli – 24/7 Support. Providing the best AC repair, installation, and maintenance services for over a decade.</p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook">FB</a>
              <a href="#" className="social-link" aria-label="Instagram">IG</a>
              <a href="https://wa.me/917338494564" className="social-link" aria-label="WhatsApp">WA</a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#why-us">Why Choose Us</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact Info</h4>
            <ul>
              <li>📍 31, Gudihal Rd, Old Hubli, KA</li>
              <li>📞 073384 94564</li>
              <li>✉️ info@hubliac.com</li>
              <li>⏰ Open 24 Hours / 7 Days</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Hubli Airconditioners. All Rights Reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

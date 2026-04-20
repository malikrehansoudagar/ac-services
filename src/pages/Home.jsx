import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import Process from '../components/Process';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  useEffect(() => {
    // Reveal animation on scroll
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    // Update document title for SEO
    document.title = "AC Repair in Hubli | Hubli Airconditioners | 24/7 Service";
    
    // Add meta description dynamically
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.getElementsByTagName('head')[0].appendChild(meta);
    }
    meta.content = "Looking for AC repair in Hubli? Hubli Airconditioners offers fast, affordable AC service, installation, gas filling & maintenance. Call 073384 94564 now!";

    return () => {
      revealElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="home-page">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      
      {/* Floating Buttons */}
      <div className="floating-actions">
        <a href="https://wa.me/917338494564" className="floating-whatsapp" title="WhatsApp Us" target="_blank" rel="noreferrer">
          💬
        </a>
        <a href="tel:07338494564" className="floating-call" title="Call Now">
          📞
        </a>
      </div>
    </div>
  );
};

export default Home;

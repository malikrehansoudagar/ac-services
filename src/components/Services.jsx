import './Services.css';

const services = [
  {
    id: 1,
    title: 'AC Repair',
    desc: 'Expert diagnosis and repair for all brands. We fix cooling issues, noise, and electrical faults efficiently.',
    icon: '🔧'
  },
  {
    id: 2,
    title: 'AC Installation',
    desc: 'Specialist split AC installation with proper vacuuming, copper piping, and drainage setup for peak performance.',
    icon: '❄️'
  },
  {
    id: 3,
    title: 'Gas Charging',
    desc: 'Safe refrigerant gas filling with leakage testing and pressure checking to restore maximum cooling.',
    icon: '💨'
  },
  {
    id: 4,
    title: 'Maintenance',
    desc: 'Deep cleaning and performance check-ups. We ensure your AC runs efficiently and saves on electricity bills.',
    icon: '🧹'
  },
  {
    id: 5,
    title: 'HVAC & Commercial',
    desc: 'Professional service for commercial AC units and HVAC systems with specialized tools and expert technicians.',
    icon: '🏢'
  }
];

const Services = () => {
  return (
    <section className="section services-section" id="services">
      <div className="container">
        <div className="section-header reveal">
          <h2 className="section-title">Our Expert Services</h2>
          <p className="section-subtitle">We provide comprehensive cooling solutions with 100% satisfaction guarantee.</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card reveal" key={service.id} style={{ transitionDelay: `${index * 0.1}s` }}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <a href="#contact" className="service-link">Book Now →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

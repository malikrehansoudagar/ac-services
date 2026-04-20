import './WhyChooseUs.css';

const reasons = [
  {
    title: 'Highly Skilled Technicians',
    desc: 'Our team is professionally trained for split and commercial AC units.',
    icon: '👨‍🔧'
  },
  {
    id: 2,
    title: 'Same-Day Service',
    desc: 'We value your time. Most repairs are completed within hours of booking.',
    icon: '⚡'
  },
  {
    title: 'Affordable & Transparent',
    desc: 'No hidden charges. We provide honest pricing with detailed explanation.',
    icon: '💰'
  },
  {
    title: 'Clean & Neat Work',
    desc: 'We leave your space spotless after every installation or service.',
    icon: '🧹'
  },
  {
    title: 'Honest Service',
    desc: 'No unnecessary parts replacement. We fix only what is needed.',
    icon: '🛡️'
  },
  {
    title: 'Cooling Performance',
    desc: 'Significant improvement in cooling with our detailed cleaning methods.',
    icon: '❄️'
  }
];

const WhyChooseUs = () => {
  return (
    <section className="section why-us-section" id="why-us">
      <div className="container">
        <div className="why-us-grid">
          <div className="why-us-content reveal">
            <h2 className="section-title" style={{ textAlign: 'left' }}>Why Choose Hubli Airconditioners?</h2>
            <p className="subtitle">Most trusted AC service provider in Hubli with consistent 4.9-star rating and honest workmanship.</p>
            <ul className="reasons-list">
              {reasons.map((reason, index) => (
                <li key={index} className="reason-item">
                  <div className="reason-icon">{reason.icon}</div>
                  <div className="reason-text">
                    <h4>{reason.title}</h4>
                    <p>{reason.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="why-us-visual reveal">
             <div className="badge-circle">
                <span className="number">4.9</span>
                <span className="stars">⭐⭐⭐⭐⭐</span>
                <span className="label">Rating</span>
             </div>
             <div className="experience-box">
                <strong>91+</strong>
                <span>Happy Customers</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

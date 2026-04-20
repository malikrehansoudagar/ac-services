import './Process.css';

const steps = [
  {
    number: '01',
    title: 'Call or Book Service',
    desc: 'Reach out via phone or WhatsApp to schedule a convenient time.'
  },
  {
    number: '02',
    title: 'Technician Visits',
    desc: 'Our expert arrives at your location with specialized tools for diagnosis.'
  },
  {
    number: '03',
    title: 'AC Fixed & Tested',
    desc: 'Professional repair followed by gas pressure and cooling performance tests.'
  }
];

const Process = () => {
  return (
    <section className="section process-section">
      <div className="container">
        <div className="section-header reveal">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">Simple 3-step process to get your AC back in top condition.</p>
        </div>
        <div className="steps-container">
          {steps.map((step, index) => (
            <div className="step-card reveal" key={index} style={{ transitionDelay: `${index * 0.1}s` }}>
              <div className="step-number">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
              {index < steps.length - 1 && <div className="step-arrow">→</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;

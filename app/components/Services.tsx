import styles from './Services.module.css'

export default function Services() {
  const services = [
    {
      icon: '🎯',
      title: 'SEO Optimization',
      description: 'Boost your search rankings with strategic SEO that drives organic traffic and increases visibility.'
    },
    {
      icon: '📱',
      title: 'Social Media Marketing',
      description: 'Engage your audience across all platforms with compelling content and targeted campaigns.'
    },
    {
      icon: '✍️',
      title: 'Content Marketing',
      description: 'Create valuable, relevant content that attracts and retains your target audience.'
    },
    {
      icon: '📊',
      title: 'Analytics & Insights',
      description: 'Make data-driven decisions with comprehensive analytics and actionable insights.'
    },
    {
      icon: '💰',
      title: 'PPC Advertising',
      description: 'Maximize ROI with expertly managed pay-per-click campaigns across multiple platforms.'
    },
    {
      icon: '🎨',
      title: 'Brand Strategy',
      description: 'Build a powerful brand identity that resonates with your audience and stands out.'
    }
  ]

  return (
    <section id="services" className={styles.services}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Our Services</h2>
          <p className={styles.subtitle}>
            Comprehensive digital marketing solutions tailored to your business needs
          </p>
        </div>
        <div className={styles.grid}>
          {services.map((service, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="#contact" className={styles.link}>Learn More →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

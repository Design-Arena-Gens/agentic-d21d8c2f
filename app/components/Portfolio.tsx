import styles from './Portfolio.module.css'

export default function Portfolio() {
  const projects = [
    {
      title: 'E-Commerce Growth',
      category: 'SEO & PPC',
      result: '+350% Revenue',
      color: '#6366f1'
    },
    {
      title: 'Brand Launch',
      category: 'Social Media',
      result: '1M+ Reach',
      color: '#ec4899'
    },
    {
      title: 'SaaS Expansion',
      category: 'Content Marketing',
      result: '+500% Leads',
      color: '#8b5cf6'
    },
    {
      title: 'Local Business',
      category: 'Local SEO',
      result: '+200% Foot Traffic',
      color: '#10b981'
    }
  ]

  return (
    <section id="portfolio" className={styles.portfolio}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Success Stories</h2>
          <p className={styles.subtitle}>
            Real results for real businesses. See how we've helped our clients achieve their goals.
          </p>
        </div>
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.card} style={{ borderTopColor: project.color }}>
              <div className={styles.cardHeader}>
                <span className={styles.category}>{project.category}</span>
              </div>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <div className={styles.result} style={{ color: project.color }}>
                {project.result}
              </div>
              <a href="#contact" className={styles.link}>View Case Study →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

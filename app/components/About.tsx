import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.text}>
            <h2 className={styles.title}>About Dream Finds Company</h2>
            <p className={styles.description}>
              We are a passionate team of digital marketing experts dedicated to helping
              businesses thrive in the digital landscape. With years of experience and a
              proven track record, we deliver results that matter.
            </p>
            <p className={styles.description}>
              Our approach combines creativity, data analytics, and industry best practices
              to create campaigns that not only look great but deliver measurable ROI.
            </p>
            <div className={styles.features}>
              <div className={styles.feature}>
                <span className={styles.checkmark}>✓</span>
                <span>Award-winning team</span>
              </div>
              <div className={styles.feature}>
                <span className={styles.checkmark}>✓</span>
                <span>Data-driven strategies</span>
              </div>
              <div className={styles.feature}>
                <span className={styles.checkmark}>✓</span>
                <span>Proven results</span>
              </div>
              <div className={styles.feature}>
                <span className={styles.checkmark}>✓</span>
                <span>24/7 support</span>
              </div>
            </div>
            <a href="#contact" className={styles.button}>Partner With Us</a>
          </div>
          <div className={styles.image}>
            <div className={styles.imagePlaceholder}>
              <div className={styles.iconGrid}>
                <div className={styles.iconItem}>📈</div>
                <div className={styles.iconItem}>💡</div>
                <div className={styles.iconItem}>🚀</div>
                <div className={styles.iconItem}>🎯</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

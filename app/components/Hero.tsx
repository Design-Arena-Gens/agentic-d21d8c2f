import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className="container">
        <div className={styles.content}>
          <h1 className={styles.title}>
            Transform Your Brand with
            <span className={styles.highlight}> Digital Excellence</span>
          </h1>
          <p className={styles.subtitle}>
            We create data-driven digital marketing strategies that elevate your brand,
            engage your audience, and drive measurable results.
          </p>
          <div className={styles.buttons}>
            <a href="#contact" className={styles.primaryBtn}>Start Your Journey</a>
            <a href="#services" className={styles.secondaryBtn}>Our Services</a>
          </div>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <h3>500+</h3>
              <p>Clients Served</p>
            </div>
            <div className={styles.stat}>
              <h3>98%</h3>
              <p>Satisfaction Rate</p>
            </div>
            <div className={styles.stat}>
              <h3>250%</h3>
              <p>Avg ROI Increase</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.background}>
        <div className={styles.circle1}></div>
        <div className={styles.circle2}></div>
        <div className={styles.circle3}></div>
      </div>
    </section>
  )
}

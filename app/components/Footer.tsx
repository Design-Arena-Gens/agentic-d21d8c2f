import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.column}>
            <div className={styles.logo}>
              <span className={styles.logoIcon}>✨</span>
              <span className={styles.logoText}>DREAM FINDS</span>
            </div>
            <p className={styles.tagline}>
              Transforming brands through innovative digital marketing solutions.
            </p>
            <div className={styles.social}>
              <a href="#" className={styles.socialLink}>LinkedIn</a>
              <a href="#" className={styles.socialLink}>Twitter</a>
              <a href="#" className={styles.socialLink}>Instagram</a>
              <a href="#" className={styles.socialLink}>Facebook</a>
            </div>
          </div>
          <div className={styles.column}>
            <h4>Services</h4>
            <ul>
              <li><a href="#services">SEO Optimization</a></li>
              <li><a href="#services">Social Media Marketing</a></li>
              <li><a href="#services">Content Marketing</a></li>
              <li><a href="#services">PPC Advertising</a></li>
            </ul>
          </div>
          <div className={styles.column}>
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className={styles.column}>
            <h4>Newsletter</h4>
            <p>Subscribe for marketing tips and insights.</p>
            <form className={styles.newsletter}>
              <input type="email" placeholder="Your email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>&copy; 2025 Dream Finds Company. All rights reserved.</p>
          <div className={styles.links}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

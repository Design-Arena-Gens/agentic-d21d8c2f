'use client'
import { useState } from 'react'
import styles from './Header.module.css'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <span className={styles.logoIcon}>✨</span>
            <span className={styles.logoText}>DREAM FINDS</span>
          </div>

          <button
            className={styles.menuToggle}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}>
            <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
            <li><a href="#services" onClick={() => setIsOpen(false)}>Services</a></li>
            <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
            <li><a href="#portfolio" onClick={() => setIsOpen(false)}>Portfolio</a></li>
            <li><a href="#testimonials" onClick={() => setIsOpen(false)}>Testimonials</a></li>
            <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
          </ul>

          <a href="#contact" className={styles.ctaButton}>Get Started</a>
        </nav>
      </div>
    </header>
  )
}

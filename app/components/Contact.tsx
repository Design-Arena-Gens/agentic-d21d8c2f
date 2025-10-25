'use client'
import { useState } from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [status, setStatus] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('Thank you! We\'ll be in touch soon.')
    setFormData({ name: '', email: '', company: '', message: '' })
    setTimeout(() => setStatus(''), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.info}>
            <h2 className={styles.title}>Let's Start Your Success Story</h2>
            <p className={styles.description}>
              Ready to transform your digital presence? Get in touch with us today
              and let's discuss how we can help your business grow.
            </p>
            <div className={styles.contactDetails}>
              <div className={styles.detail}>
                <span className={styles.icon}>📧</span>
                <div>
                  <div className={styles.label}>Email</div>
                  <div className={styles.value}>hello@dreamfinds.com</div>
                </div>
              </div>
              <div className={styles.detail}>
                <span className={styles.icon}>📞</span>
                <div>
                  <div className={styles.label}>Phone</div>
                  <div className={styles.value}>+1 (555) 123-4567</div>
                </div>
              </div>
              <div className={styles.detail}>
                <span className={styles.icon}>📍</span>
                <div>
                  <div className={styles.label}>Location</div>
                  <div className={styles.value}>San Francisco, CA</div>
                </div>
              </div>
            </div>
          </div>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <input
                type="text"
                name="company"
                placeholder="Company Name"
                value={formData.company}
                onChange={handleChange}
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <textarea
                name="message"
                placeholder="Tell us about your project"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className={styles.textarea}
              />
            </div>
            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
            {status && <p className={styles.status}>{status}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}

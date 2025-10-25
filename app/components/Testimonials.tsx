import styles from './Testimonials.module.css'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart',
      content: 'Dream Finds Company transformed our digital presence. Their strategic approach and attention to detail resulted in a 300% increase in qualified leads.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Marketing Director, GrowthCo',
      content: 'Outstanding results! The team\'s expertise in SEO and content marketing helped us dominate our niche. Highly recommended.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Founder, StyleHub',
      content: 'Professional, creative, and results-driven. They don\'t just promise results—they deliver them. Our ROI has never been better.',
      rating: 5
    }
  ]

  return (
    <section id="testimonials" className={styles.testimonials}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>What Our Clients Say</h2>
          <p className={styles.subtitle}>
            Don't just take our word for it—hear from the businesses we've helped grow
          </p>
        </div>
        <div className={styles.grid}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.stars}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
              <p className={styles.content}>{testimonial.content}</p>
              <div className={styles.author}>
                <div className={styles.avatar}>{testimonial.name[0]}</div>
                <div>
                  <div className={styles.name}>{testimonial.name}</div>
                  <div className={styles.role}>{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

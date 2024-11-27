"use client"
import Link from 'next/link';
import styles from './contact.module.css';

const ContactPage = () => {
  return (
    <section className={styles.contactSection}>
      <div className={styles.contactContainer}>
        <div className={styles.contactInfo}>
          <h1 className={styles.contactTitle}>Get in Touch</h1>
          <div className={styles.contactDescription}>
            <p className={styles.contactText}>
              Feel free to reach out to me through email, phone, or my social media accounts. I&apos;d love to hear from you!
            </p>
          </div>
          <div className={styles.contactDetails}>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>&#9993;</span>
              <a href="mailto:awaissoomro65@gmail.com" className={styles.contactLink}>
                awaissoomro65@gmail.com
              </a>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>&#9742;</span>
              <Link href="tel:+923025345219" className={styles.contactLink}>
                +92 3025345219
              </Link>
            </div>
            <div className={styles.contactSocial}>
              <Link href="https://www.linkedin.com/in/meetawaissoomronow" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </Link>
              <Link href="https://github.com/awais995" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
                GitHub
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.contactFormContainer}>
          <h2 className={styles.formTitle}>Send a Message</h2>
          <form action="mailto:yourname@example.com" method="POST" encType="text/plain" className={styles.contactForm}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.formLabel}>Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className={styles.formInput}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.formLabel}>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className={styles.formInput}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.formLabel}>Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className={styles.formTextarea}
              />
            </div>
            <button
              type="submit"
              className={styles.formButton}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;

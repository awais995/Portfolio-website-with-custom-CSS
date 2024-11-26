import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Welcome to My Portfolio
        </h1>
        <p className={styles.subtitle}>
          Showcasing my projects and skills
        </p>
        <a
          href="/projects"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className={styles.button}>
            Projects
          </button>
        </a>
      </div>
    </section>
  );
};

export default Hero;

import styles from './About.module.css';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          About Me
        </h2>
        <div className={styles.content}>
          <div className={styles.text}>
            <p className={styles.paragraph}>
              Hi there! I&apos;m a web developer with a passion for creating
              beautiful and functional websites. With expertise in HTML, CSS,
              JavaScript, React, Next.js, Tailwind CSS, and TypeScript, I craft clean and efficient
              code to bring ideas to life. I&apos;m committed to continuous learning
              and pushing the boundaries of what&apos;s possible with modern
              technologies.
            </p>
            <p className={styles.paragraph}>
              My focus is on user-centric development, ensuring that websites
              not only perform well but provide exceptional user experiences.
              When I&apos;m not coding, you&apos;ll find me experimenting with new
              web development trends or contributing to open-source projects.
            </p>
          </div>
          <div className={styles.imageContainer}>
            <img
              src="/3.webp" 
              alt="Profile"
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

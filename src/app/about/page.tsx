import Image from "next/image";
import styles from './aboutPage.module.css';

const About = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>About Me</h2>
        <div className={styles.profileSection}>
          <div className={styles.profileImageContainer}>
            <Image
              src="/1.webp"
              alt="profile"
              width={600}
              height={400}
              layout="responsive"
              objectFit="cover"
              className={styles.profileImage}
            />
          </div>
          <div className={styles.profileText}>
            <p className={styles.text}>
              Hello! I am <span className={styles.highlight}>Muhammad Awais</span>, a
              passionate and dedicated <span className={styles.highlight}>Web Developer</span> with a
              strong background in <span className={styles.highlight}>web development using the latest tech stack in cutting-edge
              technologies</span>. I thrive on solving complex problems and delivering
              high-quality solutions.
            </p>
            <p className={styles.text}>
              I hold a <span className={styles.highlight}>Diploma in Agentic AI</span> in
              Agentic AI Development Stack from Karachi University. Over the
              past <span className={styles.highlight}>1</span> year, I have gained
              valuable experience working with various companies and clients,
              enhancing my skills in <span className={styles.highlight}>
              Agentic AI Hybrid UI, Agentic AI Stack, API Stack, Cloud Stack</span>.
            </p>
          </div>
        </div>

        <div className={styles.goalsSection}>
          <h3 className={styles.subTitle}>Goals</h3>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              To continuously improve my skills and knowledge in <span className={styles.highlight}>
              HTML, CSS, JavaScript, TypeScript, React, Next.js, Node.js, and Tailwind CSS</span>.
            </li>
            <li className={styles.listItem}>To lead innovative projects that make a significant impact.</li>
            <li className={styles.listItem}>To mentor and guide aspiring professionals in my field.</li>
          </ul>
        </div>

        <div className={styles.skillsSection}>
          <h3 className={styles.subTitle}>Skills</h3>
          <div className={styles.skillsGrid}>
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "TypeScript",
              "React",
              "Next.js",
              "Node.js",
              "Tailwind CSS",
              "Github",
            ].map((skill) => (
              <div key={skill} className={styles.skillItem}>
                <span className={styles.highlight}>{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

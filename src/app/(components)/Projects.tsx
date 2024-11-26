import Image from "next/image";
import styles from './Projects.module.css';

const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          Featured Projects
        </h2>
        <div className={styles.grid}>
          <div className={styles.projectCard}>
            <Image
              src="/7.webp"
              alt="Project 1"
              width={600}
              height={400}
              layout="responsive"
              objectFit="cover"
              className={styles.image}
              placeholder="empty"
            />
            <h3 className={styles.projectTitle}>
              Resume Builder
            </h3>
            <p className={styles.projectDescription}>
              A brief description of the first featured project. This project
              involved creating a dynamic web app with modern technologies.
            </p>
            <a
              href="https://static-resume-orcin.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className={styles.button}>
                Visit Project
              </button>
            </a>
          </div>

          <div className={styles.projectCard}>
            <Image
              src="/8.avif"
              alt="Project 2"
              width={600}
              height={400}
              layout="responsive"
              objectFit="cover"
              className={styles.image}
              placeholder="empty"
            />
            <h3 className={styles.projectTitle}>
              Github Projects
            </h3>
            <p className={styles.projectDescription}>
              A brief description of the second featured project. This project
              showcases my all Github projects on Node.js.
            </p>
            <a
              href="https://github.com/awais995?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className={styles.button}>
                Visit Project
              </button>
            </a>
          </div>

          <div className={styles.projectCard}>
            <Image
              src="/9.avif"
              alt="Project 3"
              width={600}
              height={400}
              layout="responsive"
              objectFit="cover"
              className={styles.image}
              placeholder="empty"
            />
            <h3 className={styles.projectTitle}>
              Todo App
            </h3>
            <p className={styles.projectDescription}>
              A brief description of the third featured project. This project
              showcases a Todo-App application built on Node.js.
            </p>
            <a
              href="https://github.com/awais995/todoApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className={styles.button}>
                Visit Project
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

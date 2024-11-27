import Image from "next/image";
import styles from './projectspage.module.css';

const projects = [
  {
    title: "Currency Converter",
    description:
      "Creating beautiful and responsive websites that look great on all devices.",
    imageUrl: "/4.webp",
    link: "https://github.com/awais995/Currency-Converter", 
  },
  {
    title: "ATM",
    description:
      "Building robust e-commerce platforms to help you sell online effectively.",
    imageUrl: "/2.webp",
    link: "https://github.com/awais995/ATM", 
  },
  {
    title: "Resume Builder",
    description:
      "Enhancing your website visibility on search engines to attract more visitors.",
    imageUrl: "/5.webp",
    link: "https://static-resume-orcin.vercel.app/", 
  },
];

export default function Projects() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        My Projects 
      </h1>
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <Image
              src={project.imageUrl}
              alt={project.title}
              width={600}
              height={400}
              className={styles.projectImage}
            />
            <h2 className={styles.projectTitle}>{project.title}</h2>
            <p className={styles.projectDescription}>{project.description}</p>
            <a
              href={project.link}
              className={styles.projectLink}
            >
              Visit project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

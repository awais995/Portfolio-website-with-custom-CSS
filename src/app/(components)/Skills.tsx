import styles from './Skills.module.css';

const Skills = () => {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          My Skills
        </h2>
        <div className={styles.grid}>
    
          <div className={`${styles.skillCard} ${styles.hoverEffect}`}>
            <h3 className={styles.skillTitle}>HTML</h3>
            <div className={styles.progressBackground}>
              <div className={`${styles.progress} ${styles.htmlProgress}`}></div>
            </div>
            <p className={styles.skillDescription}>
              Advanced knowledge of HTML5, semantic tags, and accessibility standards.
            </p>
          </div>
          
      
          <div className={`${styles.skillCard} ${styles.hoverEffect}`}>
            <h3 className={styles.skillTitle}>CSS</h3>
            <div className={styles.progressBackground}>
              <div className={`${styles.progress} ${styles.cssProgress}`}></div>
            </div>
            <p className={styles.skillDescription}>
              Proficient in CSS3, Flexbox, Grid, and responsive web design techniques.
            </p>
          </div>


          <div className={`${styles.skillCard} ${styles.hoverEffect}`}>
            <h3 className={styles.skillTitle}>JavaScript</h3>
            <div className={styles.progressBackground}>
              <div className={`${styles.progress} ${styles.jsProgress}`}></div>
            </div>
            <p className={styles.skillDescription}>
              Strong experience in JavaScript, including ES6 features, DOM manipulation, and asynchronous programming.
            </p>
          </div>

      
          <div className={`${styles.skillCard} ${styles.hoverEffect}`}>
            <h3 className={styles.skillTitle}>React</h3>
            <div className={styles.progressBackground}>
              <div className={`${styles.progress} ${styles.reactProgress}`}></div>
            </div>
            <p className={styles.skillDescription}>
              Proficient in building dynamic UIs with React, including hooks and state management.
            </p>
          </div>

    
          <div className={`${styles.skillCard} ${styles.hoverEffect}`}>
            <h3 className={styles.skillTitle}>Next.JS</h3>
            <div className={styles.progressBackground}>
              <div className={`${styles.progress} ${styles.nextJsProgress}`}></div>
            </div>
            <p className={styles.skillDescription}>
              Experience with TypeScript for strong typing, better maintainability, and enhanced IDE support.
            </p>
          </div>

         
          <div className={`${styles.skillCard} ${styles.hoverEffect}`}>
            <h3 className={styles.skillTitle}>Node.JS</h3>
            <div className={styles.progressBackground}>
              <div className={`${styles.progress} ${styles.nodeJsProgress}`}></div>
            </div>
            <p className={styles.skillDescription}>
              Proficient in version control with Git and GitHub for efficient collaboration and version management.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

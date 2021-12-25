import React from 'react'
import styles from '../styles/Intro.module.css'
const About = () => {

    return (
        <section  className={styles.about} id='about'>
            <div className={styles.about_content}>
                <h1 className={styles.about_title}>
                About me 
                </h1>
                <p className={styles.about_text}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quos accusamus, eligendi voluptates laboriosam quidem voluptas fugiat maiores perferendis odio magni officia laborum porro. Sit eveniet eaque dolore odio? Pariatur?</p>
            </div>
        </section>
    )
}

export default About

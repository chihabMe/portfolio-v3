import React from 'react'
import styles from '../styles/Intro.module.css'
const Hero = () => {
    return (
        <section className={styles.hero} id='home'>
            <div className={styles.hero_content}>
                <h1 className={styles.hero_title}>
                Welcome to<br/> 
                my personal portfolio 
                </h1>
                <p className={styles.hero_text}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste aliquid, cupiditate deserunt tenetur, quae soluta </p>
            </div>
        </section>
    )
}

export default Hero

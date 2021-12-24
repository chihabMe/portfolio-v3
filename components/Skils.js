import React from 'react'
import styles from '../styles/Intro.module.css'
import Skill from '../UI/Skill'
const Skils = () => {
    return (
        <section className={styles.skils} id='skills'>
            <div className={styles.skils_content}>
                <h1 className={styles.skils_title}>
                    Skills and services
                </h1>
                <Skill key={Math.floor(Math.random()*2020+1).toString()} id={Math.floor(Math.random()*2020+1)} title='Programing languges ' body={['Python','javaScript / typeScript','php']} />
                <Skill key={Math.floor(Math.random()*2200+1).toString()} id={Math.floor(Math.random()*2200+1)} title='Backend frameworks ' body={['django','nodeJs']} />
                <Skill key={Math.floor(Math.random()*2200+1).toString()} id={Math.floor(Math.random()*2200+1)} title='Frontend frameworks ' body={['ReactJs','NextJs']} />
                <Skill key={Math.floor(Math.random()*2200+1).toString()} id={Math.floor(Math.random()*2200+1)} title='Design ' body={['HTML','CSS /SASS/LESS','Figma','UI/UX Design','Responsive Design']} />
                <Skill key={Math.floor(Math.random()*2200+1).toString()} id={Math.floor(Math.random()*2200+1)} title='Others ' body={['Linux','bulding APIS','Amazone AWS','Google cload','Heruko']} />

            </div>
        </section>
    )
}

export default Skils

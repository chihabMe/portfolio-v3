import React from 'react'
import styles from '../styles/Intro.module.css'
const Skill = ({title,body,id}) => {
    return (
        <div key={title+id} className={styles.skill}>
            <h1 className={styles.skill_title}>{title}</h1>
            <div className={styles.skill_body}>
                {body.map((s)=>[
                    <h6 className={styles.skill_body_child}>{s}</h6>
                ])}
            </div>
            
        </div>
    )
}

export default Skill

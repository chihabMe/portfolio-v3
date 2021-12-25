import React from 'react'
import styles from '../styles/Projects.module.css'

const Project = ({image,title,tags,des,id}) => {
    const shortDes = (txt)=>{
        let new_des  = txt.split(' ').slice(0,15).join(' ')
        return new_des +' ...'
    }
    return (
        <div key={title+id}  className={styles.project}>
            <div className={styles.shadow}>
                <p className={styles.shadow_des}>{des}</p>
            </div>
            <img loading='lazy' className={styles.project_img} src={image ? image :'https://picsum.photos/450/250'} />
            <h3 className={styles.project_title}>{title}</h3>
            <p className={styles.project_short_des}>{shortDes(des)}</p>
            <div className={styles.project_tags}>
                {tags?.map((tag)=>{
                  return   <div className={styles.project_tag}>{tag}</div>

                }) }
            </div>
        </div>
    )
}

export default Project

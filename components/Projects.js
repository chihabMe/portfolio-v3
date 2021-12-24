import React from 'react'
import styles from '../styles/Projects.module.css'
import Project from '../UI/Project'
import { useState ,useEffect} from 'react'
const Projects = () => {
    let project_objs = [
            {
                title:'food ordering web app',
                tags:['django','python','css','javascript'],
                des:'its a good app ',
                id:Math.floor(Math.random()*2000+1)
            },
            {
                title:'hotel web site ',
                tags:['django','python','css','javascript','html'],
                des:' i buid it using django for backend and vanilaJs with ajax  ',
                id:Math.floor(Math.random()*2000+1)
            },
            {
                title:'social media web app',
                tags:['reactJs','nextjs','typescript','django','django restframework','python','css','javascript'],
                des:'i used reactJs/Nextjs for the frontend and django/restframework for the backend',
                id:Math.floor(Math.random()*2000+1)
            },
            {
                title:'live video chat application',
                tags:[,'nodeJs','css','javascript'],
                des:'i build it using nodeJs for the backend and reactJs for the frontend ',
                id:Math.floor(Math.random()*2000+1)
            },
            
    ]
    const [projects,setProjects] = useState(project_objs)
    const [search,setSearch] = useState('')

    const searchHand = ()=>{
        if(search){
               setProjects((prev)=>{
                   return(
                    project_objs.filter((proj)=>proj.des.includes(search) || proj.title.includes(search) || proj.tags.includes(search))
                   )
               })
        }else{
            setProjects(project_objs)
        }
    }
    const searching = (e)=>{
        setSearch(e.target.value)
        searchHand()
    }
    return (
        <section className={styles.projects} id='projects' >
            
            <div className={styles.projects_content}>
            <h1 className={styles.projects_title}>Projects</h1>
            <div className={styles.search}>
                <div className={styles.search_wrapper}>
                    <input onChange={searching} className={styles.search_inp} type='text' />
                    <button className={styles.search_btn}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                            </svg>
                    </button>
                </div>
                <h1 className={styles.search_results}>results {projects.length}</h1>

            </div>
            <div className={styles.project_res}>
            {projects?.map((project,index)=>{
                console.log(index)
            return  (
            <Project key={index}  image={null} id={project.id} title={project.title} des={project.des} tags={project.tags} />
            )
            })}
            
            </div>
            </div>
        </section >
    )
}

export default Projects

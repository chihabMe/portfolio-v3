import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Socials from '../components/Socials'
import { useState,useEffect } from 'react'
//import About from '../components/About'
//import Skils from '../components/Skils'
//import Projects from '../components/Projects'
import useInView from "react-cool-inview";
import dynamic from 'next/dynamic'
export default function Home() {
  const About =    dynamic( () => import('../components/About'))
  const Skils =    dynamic( () => import('../components/Skils'))
  const Projects =    dynamic(()=> import('../components/Projects'))
  const [showAbout,setShowAbout] = useState(false)
  const [showProjects,setShowProjects] = useState(false)
  const [showSkils,setShowSkils] = useState(false)
  const { observe:Aobserve, inView:AinView } = useInView()
  const { observe:Sobserve, inView:SinView } = useInView()
  const { observe:Pobserve, inView:PinView } = useInView()
  useEffect(()=>{
    console.log(AinView)
  },[AinView])
  return (  

  <div className={styles.container}>
      <Head>
        <title>chihab</title>
        <meta name="description" content="chihab personal web portfolio" />
        <link rel="icon" href="./icons/linux.png" />
      </Head>

    <main  className={styles.home}>

    <Socials setShowAbout={setShowAbout}/>
    <Header/>
    <Hero/>
    <div ref={Aobserve} style={{width:'100%',height:'100vh'}}>

    {AinView &&
        <About/>
  }
  </div>
  <div ref={Sobserve} style={{width:'100%',height:'100vh'}}>

{SinView &&
  <Skils/>
}
</div>

<div ref={Pobserve} style={{width:'100%',minHeight:'100vh'}}>

{PinView &&
    <Projects/>
  }
</div>
    </main>
    <footer id='footer' className={styles.footer}>
      <p className={styles.chihab}> all rights reserved for chihab hhh &copy; 2022</p>
    </footer>
    </div>
  )
}

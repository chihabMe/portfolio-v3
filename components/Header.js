import React from 'react'
import { useState } from 'react'

import styles from '../styles/Header.module.css'
const Header = ()=>{
	const [menuShow, setMenuShow]= useState(false)

	const toggHand = (e)=>{
		if(e.target.checked){
			document.documentElement.setAttribute('theme','light')
			document.documentElement.classList.add('transition')
		}else{
			document.documentElement.setAttribute('theme','dark')
		}
		setTimeout(() => {
			document.documentElement.classList.remove('transition')
		}, 1000);
	}
	return (


  		<nav className={styles.header}>
			  <button onClick={()=>{setMenuShow(prev=>!prev)}} className={menuShow ? styles.menu_togg_btn+ ' ' +styles.active :styles.menu_togg_btn}>
			{menuShow ?
				<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
						</svg>
									:
										<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
										</svg>
								}
		</button>	
  		<div className={styles.header_left}> 
  			<img className={styles.header_logo} src="./icons/linux.png" alt="linux"/>
  			<h4 className={styles.header_logo_text}>linux lover</h4>

  			<label className={styles.switch}>
				  <input onChange={toggHand} className={styles.check_box} type="checkbox"/>
				  <span className={styles.slider}></span>
			</label>

  		</div>
  		<ul className={menuShow ? styles.header_menu +' '+ styles.active : styles.header_menu}>
  			<li className={styles.header_menu_item}><a href='#home'  className={styles.header_menu_item_link}>Home</a></li>
  			<li className={styles.header_menu_item}><a href='#about'  className={styles.header_menu_item_link}>About</a></li>
  			<li className={styles.header_menu_item}><a href='#skills'  className={styles.header_menu_item_link}>Skills</a></li>
  			<li className={styles.header_menu_item}><a href='#projects'  className={styles.header_menu_item_link}>Projects</a></li>
  		</ul>
  		<button className={styles.contect_btn}>contect</button>
		</nav>

)
}

export default Header;
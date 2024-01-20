/* eslint-disable react/prop-types */

import { useContext } from "react"
import { Link } from "react-router-dom"
import { ThemeContext } from "../contexts/ThemeContextcreateContext"
export default function Header() {
  //const [isDark,setisDark]= theme
  const [isDark,setisDark] =useContext(ThemeContext)
  // if(isDark){
  //   document.body.classList.add('dark')
  // }
  // else{
  //   document.body.classList.remove('dark')
  // }
  return (
    <header className={`header-container ${isDark?'dark':""}`}>
      <div className="header-content">
        <h2 className="title">
          <Link to="/">Where in the world ?</Link>
        </h2>
        <h2 className="title">
          <Link to="/Aboutme">About Me</Link>
        </h2>
        <p className="theme-changer" onClick={()=>{
        
        setisDark(!isDark)
        localStorage.setItem('isDarkMode',!isDark)
      
      }
        
        }>
          <i className={`fa-solid fa-${isDark?"moon":"sun"}`} />
          
          &nbsp;&nbsp;{isDark?"Dark":"Light"}
        </p>
      </div>
    </header>
  )
}

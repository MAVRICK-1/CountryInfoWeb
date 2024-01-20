/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContextcreateContext";
import "./Aboutme.css"
import punit from '../assets/punit.png'
function Aboutme () {
    const [isDark]=useContext(ThemeContext)
    let message = `Behold, the enigmatic Rishi Mondal, known by the electrifying alias Mavrick, emerges from the shadows, ready to conquer the realms of destiny!`;
    return (
        <main className={isDark?'dark':""}>
            <section className="section-white">
    <div className="container">

        <div className="row">
                    <div className="col-md-12 text-center">

                        <h2 className="section-title">About Me</h2>

                        <p className="section-subtitle">{message}</p>
    
                    </div>
            
            <div className="col-sm-6 col-md-4">

                    <div className={`team-item${isDark?'-dark':""}`}>
                    
                        <img src={punit} className="team-img" alt="pic" />
                        
                        <h3>Mavrick</h3>
                        
                        <div className="team-info"><p>Hi Amigo!</p></div>

                        <p> I'm a Software Engineer and Web Developer, navigating coding and design intricacies. With a foundation in robust software and engaging web experiences, I'm currently exploring the exciting realm of machine learning. Eager to blend creativity with algorithms, I'm on a continuous journey of learning and evolution in technology.</p>
                    
                        <ul className={`team-icon ${isDark?'dark':""}`}>
                        
                        
                            
                            <li><a href='https://github.com/MAVRICK-1'className={`github${isDark?'-dark':""}`}><i className="fa-brands fa-github"/></a></li>
                            
                            <li><a href="https://www.facebook.com/profile.php?id=100090874723521&mibextid=ZbWKwL" className="facebook"><i className="fa-brands fa-square-facebook"></i></a></li>
                            
                            
                            
                        </ul>
                        
                    </div>

            </div> 
        
        
        </div> 
    
    </div> 

    </section>
        </main>
    )
}

export default Aboutme;
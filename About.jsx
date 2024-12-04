import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
    <div className="about-left">
        <img src = {about_img} alt="" className='about-img'/>
        <img src = {play_icon} alt="" className='play-icon'/>
    </div>
    <div className="about-right">
        <h3>ABOUT UNIVERSITIES</h3>
        <h2>NOUTURING TOMOOROW LEADER TODAY</h2>
        <p>Tjdlkjvklfdmkbjfdkkbpofkbo;kdf;lkb;okf;lbk;</p>
    </div>
      
    </div>
  )
}
 

export default About




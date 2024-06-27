import React from 'react'
import logo from "../assets/images/logo.png";
import mail from "../assets/images/gmail.png"


const Hero = () => {
  return (
   <>
   <div className="container">
       <img src={logo} alt="logo" className="logo" />
       <div className="input-con">
       <i className="fa-solid fa-magnifying-glass left-icon"></i>
        <input type="text" placeholder='Search Google or type a URL' />
        <span className='right-icon'>
        <i className="fa-solid fa-microphone"></i>
        <i className="fa-solid fa-camera"></i>
        </span>
       </div>
       <div className="bottom-icon">
       <div className="bottom-content">
            <img src={mail} alt="gmail" className='gmail-icon-2'/>
            <span className='bottom-text'>inbox(10)</span>
        </div>
        <div className="bottom-content">
            <i className="fa-solid fa-plus"></i>
            <span className='bottom-text'>add shortcut</span>
        </div>
       </div>
   </div>
   </>
  )
}

export default Hero;

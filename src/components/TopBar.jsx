import React from 'react'
import mail from "../assets/images/gmail.png"
import map from "../assets/images/map.png"
import youtube from "../assets/images/youtube.png"


const TopBar = () => {
  return (
    <>
        <div className="topnav">
            <div className="top-inner">
                <div className="inner-content">
                   <img src={mail} alt="gmail" className='gmail-icon'/>
                   <span className='logo-name'>gmail</span>
                </div>
                <div className="inner-content">
                   <img src={youtube} alt="gmail" className='gmail-icon youtube'/>
                   <span className='logo-name'>youTube</span>
                </div>
                <div className="inner-content">
                   <img src={map} alt="gmail" className='gmail-icon gmail'/>
                   <span className='logo-name'>maps</span>
                </div>
            </div>
        </div>
    </>
  )
}

export default TopBar

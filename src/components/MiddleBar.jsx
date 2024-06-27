import React from 'react';
import img from "../assets/images/pp.png";

const MiddleBar = () => {
  return (
    <>
    <div className="middlenav">
        <div className="middle-inner">
            <div className="inner-content">
               <span className='logo-name'>gmail</span>
            </div>
            <div className="inner-content">
               <span className='logo-name'>images</span>
            </div>
            <div className="inner-content">
               <span className='logo-name menu-icon'><i className="fa-solid fa-ellipsis-vertical"/></span>
               <span className='logo-name menu-icon'><i className="fa-solid fa-ellipsis-vertical"/></span>
               <span className='logo-name menu-icon'><i className="fa-solid fa-ellipsis-vertical"/></span>
            </div>
            <div className="inner-content img-c">
            <img src={img} alt="pp"className='pp-img'/>
            </div>
        </div>
    </div>
</>
  )
}

export default MiddleBar

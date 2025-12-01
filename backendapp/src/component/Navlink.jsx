import React, { Component } from 'react';
import "./Navlink.css";
const Navlink = (props) => {
    return ( 
        <div className='iconwithnavlink'>
            <img src={props.linkicon} alt="navlink icon" />
            <p className='navlink'>{props.linktitle}</p>
        </div>
     );
}
 
export default Navlink;

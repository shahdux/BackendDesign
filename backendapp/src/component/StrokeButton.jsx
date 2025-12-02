import React, { Component } from 'react';
import "./StrokeButton.css";
import plus from "../assets/plus.svg"
const StrokeButton = (props) => {
    return ( 
        <div className='strokebutton'>
            <img src={plus} alt="plus icon" />
            <p className='strokebtext'>{props.strokebtext}</p>
        </div>
     );
}
 
export default StrokeButton;
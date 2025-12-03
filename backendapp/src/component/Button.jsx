import React, { Component } from 'react';
import "./Button.css";
const Button = (props) => {
    return ( 
        <>
        <div className='loginButton' style={{width: props.buttonwidth}}>
            <p className='logintext' >{props.buttontext}</p>
        </div>
        </>
     );
}
 
export default Button;

import React, { Component } from 'react';
import "./Navbar.css"
import Navlink from './Navlink';
import dashboardicon from '../assets/dashboardicon.svg';

const Navbar = () => {
    return ( 
        <div className='navbar'>
            <Navlink linkicon={dashboardicon}
            linktitle="Dashboard"/>
        </div>
     );
}
 
export default Navbar;
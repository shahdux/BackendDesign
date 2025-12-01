import React, { Component } from 'react';
import "./Navbar.css"
import Navlink from './Navlink';
import dashboardicon from '../assets/dashboardicon.svg';
import categories from '../assets/categpries.svg';
import projects from '../assets/projects.svg';
import Messages from '../assets/messege.svg';
import Pages from '../assets/pages.svg';
import Settings from '../assets/settings.svg';
import logout from '../assets/log.svg';



import Profile from './Profile';

const Navbar = () => {
    return ( 
        <div className='navbar'>
            <Profile/>
            <Navlink linkicon={dashboardicon}
            linktitle="Dashboard"/>
               <Navlink linkicon={categories}
            linktitle="Categories"/>   
            <Navlink linkicon={projects}
            linktitle="Projects"/>   
            <Navlink linkicon={Messages}
            linktitle="Messages"/>  
              <Navlink linkicon={Settings}
            linktitle="Settings"/>
             <Navlink linkicon={Pages}
            linktitle="Pages"/>
            <div className='formargintop'></div>
            
            <Navlink linkicon={logout}
            linktitle="Log out"/>

            
        </div>
     );
}
 
export default Navbar;
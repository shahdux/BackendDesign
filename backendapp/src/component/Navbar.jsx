// import React, { Component } from 'react';
// import "./Navbar.css"
// import Navlink from './Navlink';
// import dashboardicon from '../assets/dashboardicon.svg';
// import categories from '../assets/categpries.svg';
// import projects from '../assets/projects.svg';
// import Messages from '../assets/messege.svg';
// import Pages from '../assets/pages.svg';
// import Settings from '../assets/settings.svg';
// import logout from '../assets/log.svg';



// import Profile from './Profile';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//     return ( 
//         <div className='navbar'>
//             <Profile/>
//             <Link to ="/" className="no-underline">
//             <Navlink linkicon={dashboardicon}
//             linktitle="Dashboard"/>
//             </Link>
//             <Link to ="/categories" className="no-underline">
//                <Navlink linkicon={categories}
//             linktitle="Categories"/> 
//             </Link>
//              <Link to ="/projects" className="no-underline">
//              <Link to ="/projects" className="no-underline">
//             <Navlink linkicon={projects}
//             linktitle="Projects"/>   
//              </Link>
//              </Link>  
//             <Navlink linkicon={Messages}
//             linktitle="Messages"/>  
//               <Navlink linkicon={Settings}
//             linktitle="Settings"/>
//              <Navlink linkicon={Pages}
//             linktitle="Pages"/>
//             <div className='formargintop'></div>
//             <Link to ="/login" className="no-underline">
//             <Navlink linkicon={logout}
//             linktitle="Log out"/></Link>

            
//         </div>
//      );
// }
 
// export default Navbar;
import React, { useState } from 'react';
import "./Navbar.css";
import Navlink from './Navlink';
import dashboardicon from '../assets/dashboardicon.svg';
import categories from '../assets/categpries.svg';
import projects from '../assets/projects.svg';
import Messages from '../assets/messege.svg';
import Pages from '../assets/pages.svg';
import Settings from '../assets/settings.svg';
import logout from '../assets/log.svg';
import Profile from './Profile';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ✅ Burger Button */}
      <div className="burger" onClick={() => setOpen(!open)}>
        ☰
      </div>

      {/* ✅ Sidebar */}
      <div className={`navbar ${open ? "active" : ""}`}>
        <Profile />

        <Link to="/" className="no-underline" onClick={() => setOpen(false)}>
          <Navlink linkicon={dashboardicon} linktitle="Dashboard" />
        </Link>

        <Link to="/categories" className="no-underline" onClick={() => setOpen(false)}>
          <Navlink linkicon={categories} linktitle="Categories" />
        </Link>

        <Link to="/projects" className="no-underline" onClick={() => setOpen(false)}>
          <Navlink linkicon={projects} linktitle="Projects" />
        </Link>

        <Navlink linkicon={Messages} linktitle="Messages" />

                <Link to="/settings" className="no-underline" onClick={() => setOpen(false)}>

        <Navlink linkicon={Settings} linktitle="Settings" />
        </Link>
        <Navlink linkicon={Pages} linktitle="Pages" />

        <div className='formargintop'></div>

        <Link to="/login" className="no-underline" onClick={() => setOpen(false)}>
          <Navlink linkicon={logout} linktitle="Log out" />
        </Link>
      </div>
    </>
  );
};

export default Navbar;

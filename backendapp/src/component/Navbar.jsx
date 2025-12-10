
// import React, { useState } from 'react';
// import "./Navbar.css";
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
//   const [open, setOpen] = useState(false);

//   return (
//     <>
      
//       <div className="burger" onClick={() => setOpen(!open)}>
//         ☰
//       </div>

      
//       <div className={`navbar ${open ? "active" : ""}`}>
//         <Profile />

//         <Link to="/" className="no-underline" onClick={() => setOpen(false)}>
//           <Navlink linkicon={dashboardicon} linktitle="Dashboard" />
//         </Link>

//         <Link to="/categories" className="no-underline" onClick={() => setOpen(false)}>
//           <Navlink linkicon={categories} linktitle="Categories" />
//         </Link>

//         <Link to="/projects" className="no-underline" onClick={() => setOpen(false)}>
//           <Navlink linkicon={projects} linktitle="Projects" />
//         </Link>

//         <Navlink linkicon={Messages} linktitle="Messages" />

//                 <Link to="/settings" className="no-underline" onClick={() => setOpen(false)}>

//         <Navlink linkicon={Settings} linktitle="Settings" />
//         </Link>
//         <Navlink linkicon={Pages} linktitle="Pages" />

//         <div className='formargintop'></div>

//         <Link to="/login" className="no-underline" onClick={() => setOpen(false)}>
//           <Navlink linkicon={logout} linktitle="Log out" />
//         </Link>
//       </div>
//     </>
//   );
// };

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
  const [pagesOpen, setPagesOpen] = useState(false);

  return (
    <>
      {/* Burger Button */}
      <div className="burger" onClick={() => setOpen(!open)}>
        ☰
      </div>

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
        <Link to="/messages" className="no-underline" onClick={() => setOpen(false)}>

        <Navlink linkicon={Messages} linktitle="Messages" />
        </Link>

        <Link to="/settings" className="no-underline" onClick={() => setOpen(false)}>
          <Navlink linkicon={Settings} linktitle="Settings" />
        </Link>

        {/* --- DROPDOWN START --- */}
        <div 
          className="dropdown-container"
          onClick={() => setPagesOpen(!pagesOpen)}
        >
          <Navlink linkicon={Pages} linktitle="Pages ▾" />
        </div>

        {pagesOpen && (
          <div className="dropdown-menu">
            <Link to="/EditHome" className="no-underline"><p>Home</p></Link>
            <Link to="/EditHome" className="no-underline"><p>About</p></Link>
            <Link to="/blogs" className="no-underline"><p>Blogs</p></Link>
            <Link to="/EditHome" className="no-underline"><p>Contact</p></Link>
          </div>
        )}
        

        <div className='formargintop'></div>

        <Link to="/login" className="no-underline" onClick={() => setOpen(false)}>
          <Navlink linkicon={logout} linktitle="Log out" />
        </Link>
      </div>
    </>
  );
};

export default Navbar;


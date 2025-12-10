import React, { Component } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Projects from './pages/Projects';
import Categories from './pages/Categories';
import ProjectDetails from './pages/ProjectDetails';
import Settings from './pages/Settings';
import Blogs from './pages/Blogs';
import Blogdetails from './pages/BlogDetails';
import EditHome from './pages/EditHome';
import Messages from './pages/Messages';



const RoutingApp = () => {
    return ( 
        <>
        <BrowserRouter>
        <Routes>
<Route path='/' element={<Home />}/>
<Route path='/login' element={<Login />}/>
<Route path='/projects' element={<Projects />}/>
<Route path='/categories' element={<Categories />}/>
<Route path='/project1' element={<ProjectDetails />}/>
<Route path='/settings' element={<Settings />}/>
<Route path='/blogs' element={<Blogs />}/>
<Route path='/blogdetails' element={<Blogdetails />}/>
<Route path='/EditHome' element={<EditHome />}/>
<Route path='/messages' element={<Messages />}/>













        </Routes>
        
        </BrowserRouter>
        </>
     );
}
 
export default RoutingApp;
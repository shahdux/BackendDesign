import React, { Component } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Projects from './pages/Projects';
import Categories from './pages/Categories';
import ProjectDetails from './pages/ProjectDetails';



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








        </Routes>
        
        </BrowserRouter>
        </>
     );
}
 
export default RoutingApp;
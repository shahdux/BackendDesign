import React, { Component } from 'react';
import "./ProjectDetails.css"
import Navbar from '../component/Navbar';
import SectionTitle from '../component/SectionTitle';
import artmentorapp from "../assets/p1img.svg";
import upload from "../assets/upload.svg";

const ProjectDetails = () => {
    return ( 
        <>
                 <div className='nabarwithmain'>

        <Navbar/>
        <div className='mainBar'>
            <div className='titlewsearch'>
            <SectionTitle Sectiontitle="Art Mentor App"/>
          

            </div>
           
               <div className='forallinputs'>
                <div className='titlewithinput'>
                    <p className='project-image'>Image</p>
                    <div className='imagewithbutton'>
                    <div className='inputforiumage'>
                        <img src={artmentorapp} alt="art mentor ux ui app mockup" />
                    </div>
<div className='imagechnage'>
    <p className='change'>Change Image</p>
    <img src={upload} alt="upload icon"/>
</div>
                    </div>
                </div>
            
           

            </div>
        </div>
        </div>
        </>
     );
}
 
export default ProjectDetails;
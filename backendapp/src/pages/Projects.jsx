import React, { Component } from 'react';
import "./Projects.css";
import Navbar from '../component/Navbar';
import SectionTitle from '../component/SectionTitle';
import p1 from "../assets/img1.svg"
import TableHeader from '../component/TableHeader';
import StrokeButton from '../component/StrokeButton';
import pen from "../assets/pen.svg";
import removeicon from "../assets/delete.svg";



const Projects = () => {
    return ( 
        <>
         <div className='nabarwithmain'>
        <Navbar/>
        <div className='mainBar'>
            <div className='titlewsearch'>
            <SectionTitle Sectiontitle="Project Management"/>
            <StrokeButton strokebtext="Add project"/>

            </div>
         <input className='searchcont width90' type="text" name="" id="" placeholder='Search'  />
           
               <div className='titlewsection2 titlewsection3 '>
            <div className='titlewsearch width90'>
                <SectionTitle textsize="24px" 
                Sectiontitle="All Projects"/>
                
            </div>
<div className='recentprojectsDiv '>
    <div className='forfirstline gap2 projectstabwidth'>
       <TableHeader tableheadertext="Image"/>
              <TableHeader tableheadertext="Category"/>
       <TableHeader tableheadertext="Name"/>
       <TableHeader tableheadertext="Description"/>
              {/* <TableHeader tableheadertext="Actions"/> */}
              <p className='
              actionspadding'>Actions</p>


    </div>
     <div className='forfirstline2 gap40'>
      <img src={p1} alt="Art Mentor App" className='paddingtop'/>
            <p className='projectName paddingleft130'>UX/UI</p>

            <p className='projectName padding2'>Art Mentor App</p>
              <p className='projectName '>An intuitive design app that helps users avoiding...</p>
              <div className='foractionbuttons'>
                    <img src={pen} alt="pen icon" />
                    <img src={removeicon} alt="delete icon" />

              </div>

           


    </div>
     <div className='forfirstline2 gap40'>
      <img src={p1} alt="Art Mentor App" className='paddingtop'/>
            <p className='projectName paddingleft130'>UX/UI</p>

            <p className='projectName padding2'>Art Mentor App</p>
              <p className='projectName '>An intuitive design app that helps users avoiding...</p>
              <div className='foractionbuttons'>
                    <img src={pen} alt="pen icon" />
                    <img src={removeicon} alt="delete icon" />

              </div>

           


    </div>
     <div className='forfirstline2 gap40'>
      <img src={p1} alt="Art Mentor App" className='paddingtop'/>
            <p className='projectName paddingleft130'>UX/UI</p>

            <p className='projectName padding2'>Art Mentor App</p>
              <p className='projectName '>An intuitive design app that helps users avoiding...</p>
              <div className='foractionbuttons'>
                    <img src={pen} alt="pen icon" />
                    <img src={removeicon} alt="delete icon" />

              </div>

           


    </div>
      <div className='forfirstline2 gap40'>
      <img src={p1} alt="Art Mentor App" className='paddingtop'/>
            <p className='projectName paddingleft130'>UX/UI</p>

            <p className='projectName padding2'>Art Mentor App</p>
              <p className='projectName '>An intuitive design app that helps users avoiding...</p>
              <div className='foractionbuttons'>
                    <img src={pen} alt="pen icon" />
                    <img src={removeicon} alt="delete icon" />

              </div>

           


    </div>  <div className='forfirstline2 gap40'>
      <img src={p1} alt="Art Mentor App" className='paddingtop'/>
            <p className='projectName paddingleft130'>UX/UI</p>

            <p className='projectName padding2'>Art Mentor App</p>
              <p className='projectName '>An intuitive design app that helps users avoiding...</p>
              <div className='foractionbuttons'>
                    <img src={pen} alt="pen icon" />
                    <img src={removeicon} alt="delete icon" />

              </div>

           


    </div>  <div className='forfirstline2 gap40'>
      <img src={p1} alt="Art Mentor App" className='paddingtop'/>
            <p className='projectName paddingleft130'>UX/UI</p>

            <p className='projectName padding2'>Art Mentor App</p>
              <p className='projectName '>An intuitive design app that helps users avoiding...</p>
              <div className='foractionbuttons'>
                    <img src={pen} alt="pen icon" />
                    <img src={removeicon} alt="delete icon" />

              </div>

           


    </div>
    
      
</div>
            </div>
        </div>
            
        </div>
        
        
        
        
        
        </>
     );
}
 
export default Projects;
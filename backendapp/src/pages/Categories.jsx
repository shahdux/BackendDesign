import React, { Component } from 'react';
import "./Categories.css";
import Navbar from '../component/Navbar';
import SectionTitle from '../component/SectionTitle';
import TableHeader from '../component/TableHeader';
import StrokeButton from '../component/StrokeButton';
import catimg1 from "../assets/catimg.svg";
import pen from "../assets/pen.svg";
import removeicon from "../assets/delete.svg";




const Categories = () => {
    return ( 
        <>
         <div className='nabarwithmain'>
        <Navbar/>
        <div className='mainBar'>
            <div className='titlewsearch'>
            <SectionTitle Sectiontitle="Categories Management"/>
            <StrokeButton strokebtext="Add category"/>

            </div>
           
               <div className='titlewsection2 '>
            
           
<div className='recentprojectsDiv'>
    <div className='forfirstline'>
       <TableHeader tableheadertext="Thumbnail"/>
              <TableHeader tableheadertext="Name"/>
       <TableHeader tableheadertext="Description"/>
       <TableHeader tableheadertext="Actions"/>

    </div>
     <div className='forfirstline2'>
        <div className='imgcont'>

        <img src={catimg1} alt="mockup of a TVOS design" className='paddingtop'/>
        </div>
            <p className='projectName'>UX/UI</p>
              <p className='projectName padding2'>Crafting intuitive use...</p>
              <div className='foractionbuttons2 imgcont'>

                                <img src={pen} alt="pen icon" />
                                <img src={removeicon} alt="delete icon" />
            
                          </div>


    </div>
      
      <div className='forfirstline2'>
        <div className='imgcont'>

        <img src={catimg1} alt="mockup of a TVOS design" className='paddingtop'/>
        </div>
            <p className='projectName'>UX/UI</p>
              <p className='projectName padding2'>Crafting intuitive use...</p>
              <div className='foractionbuttons2 imgcont'>

                                <img src={pen} alt="pen icon" />
                                <img src={removeicon} alt="delete icon" />
            
                          </div>


    </div>
     <div className='forfirstline2'>
        <div className='imgcont'>

        <img src={catimg1} alt="mockup of a TVOS design" className='paddingtop'/>
        </div>
            <p className='projectName'>UX/UI</p>
              <p className='projectName padding2'>Crafting intuitive use...</p>
              <div className='foractionbuttons2 imgcont'>

                                <img src={pen} alt="pen icon" />
                                <img src={removeicon} alt="delete icon" />
            
                          </div>


    </div> <div className='forfirstline2'>
        <div className='imgcont'>

        <img src={catimg1} alt="mockup of a TVOS design" className='paddingtop'/>
        </div>
            <p className='projectName'>UX/UI</p>
              <p className='projectName padding2'>Crafting intuitive use...</p>
              <div className='foractionbuttons2 imgcont'>

                                <img src={pen} alt="pen icon" />
                                <img src={removeicon} alt="delete icon" />
            
                          </div>


    </div> <div className='forfirstline2'>
        <div className='imgcont'>

        <img src={catimg1} alt="mockup of a TVOS design" className='paddingtop'/>
        </div>
            <p className='projectName'>UX/UI</p>
              <p className='projectName padding2'>Crafting intuitive use...</p>
              <div className='foractionbuttons2 imgcont'>

                                <img src={pen} alt="pen icon" />
                                <img src={removeicon} alt="delete icon" />
            
                          </div>


    </div> <div className='forfirstline2'>
        <div className='imgcont'>

        <img src={catimg1} alt="mockup of a TVOS design" className='paddingtop'/>
        </div>
            <p className='projectName'>UX/UI</p>
              <p className='projectName padding2'>Crafting intuitive use...</p>
              <div className='foractionbuttons2 imgcont'>

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
 
export default Categories;
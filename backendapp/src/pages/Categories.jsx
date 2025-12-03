import React, { Component } from 'react';
import "./Categories.css";
import Navbar from '../component/Navbar';
import SectionTitle from '../component/SectionTitle';
import TableHeader from '../component/TableHeader';
import StrokeButton from '../component/StrokeButton';
import catimg1 from "../assets/catimg.svg";




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
        <img src={catimg1} alt="mockup of a TVOS design" className='paddingtop'/>
            <p className='projectName'>AR</p>
              <p className='projectName padding2'>Oct 2025</p>
            <p className='projectName padding3'>Published</p>


    </div>
       <div className='forfirstline2'>
      <p className='projectName'>AR Escape Game</p>
            <p className='projectName'>AR</p>
        <p className='projectName padding2'>Oct 2025</p>
            <p className='projectName padding3'>Published</p>


    </div>
      <div className='forfirstline2'>
      <p className='projectName'>AR Escape Game</p>
            <p className='projectName'>AR</p>
            <p className='projectName padding2'>Oct 2025</p>
            <p className='projectName padding3'>Published</p>


    </div>  <div className='forfirstline2'>
      <p className='projectName'>AR Escape Game</p>
            <p className='projectName'>AR</p>
            <p className='projectName padding2'>Oct 2025</p>
            <p className='projectName padding3'>Published</p>


    </div>
</div>
            </div>
        </div>
            
        </div>
        
        
        
        
        
        </>
     );
}
 
export default Categories;
import React, { Component, useEffect, useState } from 'react';
import "./Categories.css";
import Navbar from '../component/Navbar';
import SectionTitle from '../component/SectionTitle';
import TableHeader from '../component/TableHeader';
import StrokeButton from '../component/StrokeButton';
import catimg1 from "../assets/catimg.svg";
import pen from "../assets/pen.svg";
import removeicon from "../assets/delete.svg";
import { supabase } from '../Supabase';
import { Link } from 'react-router-dom';




const Categories = () => {
    const [loading, setLoading] = useState(true);
        const [categories, setCategories] = useState("");
  
        useEffect(()=>{
              async function callGetAPI2(){
                    const res = await supabase.from("Categories").select("*");
                    setCategories(res.data);
                    // console.log(res);
                    setLoading(false);
              }
              callGetAPI2();
        },[]);
        if (loading) return <p>Loading...</p>;
    return ( 
        <>
         <div className='nabarwithmain'>
        <Navbar/>
        <div className='mainBar'>
            <div className='titlewsearch'>
            <SectionTitle Sectiontitle="Categories Management"/>
             <Link to="/add-category">
            <StrokeButton strokebtext="Add category"/>
             </Link>

            </div>
           
               <div className='titlewsection2 '>
            
           
<div className='recentprojectsDiv'>
    <div className='forfirstline'>
       <TableHeader tableheadertext="Thumbnail"/>
              <TableHeader tableheadertext="Name"/>
       <TableHeader tableheadertext="Description"/>
       <TableHeader tableheadertext="Actions"/>

    </div>
     {/* <div className='forfirstline2'>
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


    </div> */}


    {
 categories.map((category)=>{
            return  <div className='forfirstline2'>
        <div className='imgcont'>

        <img src={category.Thumbnail} alt="mockup of a TVOS design" className='paddingtop'/>
        </div>
            <p className='projectName'>{category.Name}</p>
              <p className='projectName padding2'>{category.Description}</p>
              <div className='foractionbuttons2 imgcont'>

                                <img src={pen} alt="pen icon" />
                                <img src={removeicon} alt="delete icon" />
            
                          </div>


    </div>
      })
    }
</div>
            </div>
        </div>
            
        </div>
        
        
        
        
        
        </>
     );
}
 
export default Categories;
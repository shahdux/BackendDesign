import React, { Component, useEffect, useState } from 'react';
import "./Projects.css";
import Navbar from '../component/Navbar';
import SectionTitle from '../component/SectionTitle';
import p1 from "../assets/img1.svg"
import TableHeader from '../component/TableHeader';
import StrokeButton from '../component/StrokeButton';
import pen from "../assets/pen.svg";
import removeicon from "../assets/delete.svg";
import { Link } from 'react-router-dom';
import { supabase } from '../Supabase';



const Projects = () => {
      const [loading, setLoading] = useState(true);
      const [projects, setProjects] = useState("");

      useEffect(()=>{
            async function callGetAPI(){
                  const res = await supabase.from("Projects").select("*");
                  setProjects(res.data);
                  // console.log(res);
                  setLoading(false);
            }
            callGetAPI();
      },[]);
      if (loading) return <p>Loading...</p>;
    return ( 
          <>
          {/* {console.log(Projects)} */}
         <div className='nabarwithmain'>
        <Navbar/>
        <div className='mainBar'>
           
            <div className='titlewsearch width90'>
            <SectionTitle Sectiontitle="Project Management"/>
           
            <StrokeButton strokebtext="Add project"/>
           

            </div>
         <input className='searchcont width90' type="text" name="" id="" placeholder='Search'  />
           
               <div className='titlewsection2 titlewsection3'>
            <div className='titlewsearch width90'>
                <SectionTitle textsize="24px" 
                Sectiontitle="All Projects"/>
                
            </div>
<div className='recentprojectsDiv '>
    <div className='forfirstline gap2 projectstabwidth nomleft gap120'>
       <TableHeader tableheadertext="Image" tableheaderwidth="auto"/> 
              <TableHeader tableheadertext="Category" tableheaderwidth="auto"/>
       <TableHeader tableheadertext="Name" tableheaderwidth="auto"/>
       <TableHeader tableheadertext="Description" tableheaderwidth="auto"/>
              {/* <TableHeader tableheadertext="Actions"/> */}
              <p className='
              actionspaddingprojects actionsmledt'>Actions</p>


    </div>
     {/* <div className='forfirstline22 gap40'>
      <img src={p1} alt="Art Mentor App" className='paddingtop'/>
            <p className='projectName paddingleft130 pwidthauto'>UX/UI</p>
            <p className='projectName padding22 pwidthauto pleft75i'>Art Mentor App</p>

              <p className='projectName projectpaddingledt20 pwidthauto'>An intuitive design app that helps users avoiding...</p>
              <div className='foractionbuttons '>
                  <Link to="/project1" className='no-underline'>

                    <img src={pen} alt="pen icon" className='penclass' />
                    </Link>
                    <img src={removeicon} alt="delete icon" />

              </div>

           


    </div> */}
    {
      projects.map((project)=>{
            return   <div className='forfirstline22 gap40'>
      <img src={project.image} alt="Art Mentor App" className='paddingtop'/>
            <p className='projectName paddingleft130 pwidthauto'>{project.Category}</p>
            <p className='projectName padding22 pwidthauto pleft75i'>{project.title}</p>

              <p className='projectName projectpaddingledt20 pwidthauto'>{project.description}</p>
              <div className='foractionbuttons '>
                  <Link to="/project1" className='no-underline'>

                    <img src={pen} alt="pen icon" className='penclass' />
                    </Link>
                    <img src={removeicon} alt="delete icon" />

              </div>

           


    </div>
      })
    }



     {/* <div className='forfirstline22 gap40'>
      <img src={p1} alt="Art Mentor App" className='paddingtop'/>
            <p className='projectName paddingleft130 pwidthauto'>UX/UI</p>

            <p className='projectName padding22 pwidthauto pleft75i'>Art Mentor App</p>
              <p className='projectName projectpaddingledt20 pwidthauto'>An intuitive design app that helps users avoiding...</p>
              <div className='foractionbuttons '>
                    <img src={pen} alt="pen icon" className='penclass'/>
                    <img src={removeicon} alt="delete icon" />

              </div>

           


    </div>
    <div className='forfirstline22 gap40'>
      <img src={p1} alt="Art Mentor App" className='paddingtop'/>
            <p className='projectName paddingleft130 pwidthauto'>UX/UI</p>

            <p className='projectName padding22 pwidthauto pleft75i'>Art Mentor App</p>
              <p className='projectName projectpaddingledt20 pwidthauto'>An intuitive design app that helps users avoiding...</p>
              <div className='foractionbuttons '>
                    <img src={pen} alt="pen icon" className='penclass' />
                    <img src={removeicon} alt="delete icon" />

              </div>

           


    </div>
  <div className='forfirstline22 gap40'>
      <img src={p1} alt="Art Mentor App" className='paddingtop'/>
            <p className='projectName paddingleft130 pwidthauto'>UX/UI</p>

            <p className='projectName padding22 pwidthauto pleft75i'>Art Mentor App</p>
              <p className='projectName projectpaddingledt20 pwidthauto'>An intuitive design app that helps users avoiding...</p>
              <div className='foractionbuttons '>
                    <img src={pen} alt="pen icon" className='penclass'/>
                    <img src={removeicon} alt="delete icon" />

              </div>

           


    </div>
    <div className='forfirstline22 gap40'>
      <img src={p1} alt="Art Mentor App" className='paddingtop'/>
            <p className='projectName paddingleft130 pwidthauto'>UX/UI</p>

            <p className='projectName padding22 pwidthauto pleft75i'>Art Mentor App</p>
              <p className='projectName projectpaddingledt20 pwidthauto'>An intuitive design app that helps users avoiding...</p>
              <div className='foractionbuttons '>
                    <img src={pen} alt="pen icon" className='penclass'/>
                    <img src={removeicon} alt="delete icon" />

              </div>

           


    </div>
    <div className='forfirstline22 gap40'>
      <img src={p1} alt="Art Mentor App" className='paddingtop'/>
            <p className='projectName paddingleft130 pwidthauto'>UX/UI</p>

            <p className='projectName padding22 pwidthauto pleft75i'>Art Mentor App</p>
              <p className='projectName projectpaddingledt20 pwidthauto'>An intuitive design app that helps users avoiding...</p>
              <div className='foractionbuttons '>
                    <img src={pen} alt="pen icon" className='penclass' />
                    <img src={removeicon} alt="delete icon" />

              </div>

           


    </div> */}
    
      
</div>
            </div>
        </div>
            
        </div>
        
        
        
        
        
        </>
     );
}
 
export default Projects;
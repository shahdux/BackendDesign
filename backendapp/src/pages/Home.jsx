import React, { Component, useEffect, useState } from 'react';
import "./Home.css"
import Navbar from '../component/Navbar';
import SectionTitle from '../component/SectionTitle';
import StatisticCard from '../component/StatisticCard';
import visitsdata from "../assets/data.svg"
import TableHeader from '../component/TableHeader';
import { supabase } from '../Supabase';

const Home = () => {
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
        <div className='nabarwithmain'>
        <Navbar/>
        <div className='mainBar'>
            <div className='titlewsearch'>
            <SectionTitle Sectiontitle="Welcome back, Shahd"/>
            <input className='searchcont' type="text" name="" id="" placeholder='Search' />

            </div>
            <div className='forstatCards'>
                <StatisticCard stattitle="Total Projects"
                statnumber="20"
                />
                  <StatisticCard stattitle="Blog posts"
                statnumber="2"
                />  <StatisticCard stattitle="Total categories"
                statnumber="5"
                />  <StatisticCard stattitle="Project viewers"
                statnumber="430"
                />
            </div>
            <div className='titlewsection2'>
            <div className='titlewsearch'>
                <SectionTitle textsize="24px" 
                Sectiontitle="Website Visits"/>
                
            </div>
<img src={visitsdata} alt="website visits" className='visits'/>
            </div>
               <div className='titlewsection2'>
            <div className='titlewsearch'>
                <SectionTitle textsize="24px" 
                Sectiontitle="Recent Projects"/>
                
            </div>
<div className='recentprojectsDiv'>
    <div className='forfirstline'>
       <TableHeader tableheadertext="Project"/>
              <TableHeader tableheadertext="Category"/>
       <TableHeader tableheadertext="Date Added"/>
       <TableHeader tableheadertext="Status"/>

    </div>
    
     {
      projects.map((project)=>{
            return   <div className='forfirstline2'>
      <p className='projectName'>{project.title}</p>
            <p className='projectName'>{project.Category}</p>
              <p className='projectName padding2'>{project.created_at}</p>
            <p className='projectName padding3'>Published</p>


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
 
export default Home;
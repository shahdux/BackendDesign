import React, { Component } from 'react';
import "./Home.css"
import Navbar from '../component/Navbar';
import SectionTitle from '../component/SectionTitle';
import StatisticCard from '../component/StatisticCard';
const Home = () => {
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
            <div className='titlewsearch'>
                <SectionTitle textsize="24px" 
                Sectiontitle="Website Visits"/>
            </div>
        </div>
            
        </div>
        
        
        </>
     );
}
 
export default Home;
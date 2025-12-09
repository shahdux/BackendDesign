import React, { Component } from 'react';
import "./Settings.css";
import Navbar from '../component/Navbar';
import SectionTitle from '../component/SectionTitle';
import Titlewinput from '../component/Titlewinput';
import profileimg from "../assets/profile.svg"
const Settings = () => {
    return ( 
        <>
        
          <div className='nabarwithmain'>
        <Navbar/>
        <div className='mainBar'>
             <div className='titlewsearch'>
            <SectionTitle Sectiontitle="Settings"/>
    
            </div>

            <div className='profilesettingdiv'>
                  <SectionTitle textsize="24px" 
                Sectiontitle="Profile settings"/>
                <img src={profileimg} alt="profile image" className='profileicon'/>
                <div className='inputs2sections'>
                    <div className='section1inputs'>
                        <Titlewinput inputtile="Name" 
                        placetext="Shahd Mohammad"
                        />

                    </div>

                </div>

            </div>
           
        </div>
            
        </div>
        
        
        
        
        
        
        
        
        
        
        </>
     );
}
 
export default Settings;

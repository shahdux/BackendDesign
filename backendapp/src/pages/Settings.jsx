import React, { Component } from 'react';
import "./Settings.css";
import Navbar from '../component/Navbar';
import SectionTitle from '../component/SectionTitle';
import Titlewinput from '../component/Titlewinput';
import profileimg from "../assets/profile.svg"
import Button from '../component/Button';
const Settings = () => {
    return ( 
        <>
        
          <div className='nabarwithmain'>
        <Navbar/>
        <div className='mainBar'>
             <div className='titlewsearch width90'>
            <SectionTitle Sectiontitle="Settings"/>
    
            </div>

            <div className='profilesettingdiv'>
                                                    <div className='imgcontwidth'>

                  <SectionTitle textsize="24px" 
                Sectiontitle="Profile settings"/>
</div>
                                    <div className='imgcontwidth'>

                <img src={profileimg} alt="profile image" className='profileicon'/>
                </div>
                <div className='inputs2sections'>
                    <div className='section1inputs'>
                        <Titlewinput inputtile="Name" 
                        placetext="Shahd Mohammad"
                        />
   <Titlewinput inputtile="Country" 
                        placetext="Egypt"
                        />   <Titlewinput inputtile="Role" 
                        placetext="UX/UI Designer"
                        />
                    </div>
                     <div className='section1inputs'>
                        <Titlewinput inputtile="Linkedin" 
                        placetext="Shahd Mohammad"
                        />
   <Titlewinput inputtile="Behance" 
                        placetext="Shahd Mohammad"
                        />   <Titlewinput inputtile="Bio" 
                        
                        />
                    </div>
                    <div className='imgcontwidth2'>

                    <Button buttontext="Save"
                    buttonwidth="210px
"/>
                    </div>

                </div>

            </div>
           
        </div>
            
        </div>
        
        
        
        
        
        
        
        
        
        
        </>
     );
}
 
export default Settings;

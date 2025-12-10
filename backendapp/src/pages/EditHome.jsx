import React, { Component } from 'react';
import "./EditHome.css";
import Navbar from '../component/Navbar';
import SectionTitle from '../component/SectionTitle';
import Titlewinput from '../component/Titlewinput';
import upload from "../assets/upload.svg";
import textcase from "../assets/textcase.svg";
import underline from "../assets/underline.svg";
import numbered from "../assets/numbered.svg";
import left from "../assets/left.svg";
import it from "../assets/it.svg";
import fill from "../assets/fill.svg";
import center from "../assets/center.svg";
import center2 from "../assets/center2.svg";
import bullet from "../assets/bullet.svg";
import bold from "../assets/bold.svg";





const EditHome = () => {
    return ( 
        <>
          <div className='nabarwithmain'>
        <Navbar/>
        <div className='mainBar'>
              <div className='titlewsearch width85'>
           
            <SectionTitle Sectiontitle="Pages Management"/>
           

            </div>
            
               <div className='titlewsearch width85'>
                <SectionTitle textsize="24px" 
                Sectiontitle="Home "/>
              
                
            </div>

            <div className='inputsCont'>
                <div className='sectionOne'>
                    <SectionTitle textsize="24px" 
                Sectiontitle="Section 1"/>
                <div className='fordata'>
                    <div className='forpartwithimg'>

 <Titlewinput inputswidth="1120px" inputtile="Background image" 
                        
                        />
                        <div className='imagechnage'>
                            <p className='change '>Change Image</p>
                            <img src={upload} alt="upload icon"/>
                        </div>
                    </div>
                        <Titlewinput inputswidth="1120px" inputtile="Alt text (EN)" 
                       
                        />
                         <Titlewinput inputswidth="1120px" inputtile="Alt text (AR)" 
                        
                        />
                          
                                            <div className='rte1'>
                        <div className='foriconst'>
                        <img src={bold} alt="bold icon" />
                        <img src={it} alt="italic icon" />
                        <img src={underline} alt="underline icon" />
                        <img src={center} alt="center icon" />
                        <img src={left} alt="leftside icon" />
                        <img src={center2} alt="center icon" />
                        <img src={bullet} alt="bullet points icon" />
                        <img src={numbered} alt="numbered icon" />
                        <img src={fill} alt="fill icon" />
                        <img src={textcase} alt="textcase icon" />
                        
                        
                        
                        
                        
                        </div>
                        <input type="text" className='input-width2' name="" id="" placeholder=''/>  
                                            </div>
                                            <Titlewinput inputswidth="1120px" inputtile="CTA Button 1" 
                        
                        />
                           <Titlewinput inputswidth="1120px" inputtile="CTA Button 2" 
                        
                        />
                        
                                           
                                      

                </div>

                 <div className='sectionOne'>
                                    <p className='project-image'>Section 2 (EN)</p>
                                    <div className='rte1'>
                <div className='foriconst'>
                <img src={bold} alt="bold icon" />
                <img src={it} alt="italic icon" />
                <img src={underline} alt="underline icon" />
                <img src={center} alt="center icon" />
                <img src={left} alt="leftside icon" />
                <img src={center2} alt="center icon" />
                <img src={bullet} alt="bullet points icon" />
                <img src={numbered} alt="numbered icon" />
                <img src={fill} alt="fill icon" />
                <img src={textcase} alt="textcase icon" />
                
                
                
                
                
                </div>
                <input type="text" className='input-width2' name="" id="" placeholder=''/>  
                                    </div>
                                  
                
                                   
                                </div>
                                 <div className='sectionOne'>
                                    <p className='project-image'>Section 2 (AR)</p>
                                    <div className='rte1'>
                <div className='foriconst'>
                <img src={bold} alt="bold icon" />
                <img src={it} alt="italic icon" />
                <img src={underline} alt="underline icon" />
                <img src={center} alt="center icon" />
                <img src={left} alt="leftside icon" />
                <img src={center2} alt="center icon" />
                <img src={bullet} alt="bullet points icon" />
                <img src={numbered} alt="numbered icon" />
                <img src={fill} alt="fill icon" />
                <img src={textcase} alt="textcase icon" />
                
                
                
                
                
                </div>
                <input type="text" className='input-width2' name="" id="" placeholder=''/>  
                                    </div>
                                  
                
                                   
                                </div>
                                  <div className='sectionOne'>
                                    <p className='project-image'>Section 3 (EN)</p>
                                    <div className='rte1'>
                <div className='foriconst'>
                <img src={bold} alt="bold icon" />
                <img src={it} alt="italic icon" />
                <img src={underline} alt="underline icon" />
                <img src={center} alt="center icon" />
                <img src={left} alt="leftside icon" />
                <img src={center2} alt="center icon" />
                <img src={bullet} alt="bullet points icon" />
                <img src={numbered} alt="numbered icon" />
                <img src={fill} alt="fill icon" />
                <img src={textcase} alt="textcase icon" />
                
                
                
                
                
                </div>
                <input type="text" className='input-width2' name="" id="" placeholder=''/>  
                                    </div>
                                  
                
                                   
                                </div>  <div className='sectionOne'>
                                    <p className='project-image'>Section 3 (AR)</p>
                                    <div className='rte1'>
                <div className='foriconst'>
                <img src={bold} alt="bold icon" />
                <img src={it} alt="italic icon" />
                <img src={underline} alt="underline icon" />
                <img src={center} alt="center icon" />
                <img src={left} alt="leftside icon" />
                <img src={center2} alt="center icon" />
                <img src={bullet} alt="bullet points icon" />
                <img src={numbered} alt="numbered icon" />
                <img src={fill} alt="fill icon" />
                <img src={textcase} alt="textcase icon" />
                
                
                
                
                
                </div>
                <input type="text" className='input-width2' name="" id="" placeholder=''/>  
                                    </div>
                                  
                
                                   
                                </div>
                </div>

            </div>

          

        </div>
        </div>
        
        
        </>
     );
}
 
export default EditHome;
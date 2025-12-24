import React, { Component, useState } from 'react';
import "./ProjectDetails.css"
import Navbar from '../component/Navbar';
import SectionTitle from '../component/SectionTitle';
import artmentorapp from "../assets/p1img.svg";
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
import Button from '../component/Button';
import { supabase } from '../Supabase';










const Addcategory = () => {
// const [image, setImage] = useState(""); 
const [title, setTitle] = useState("");
const [description, setDescription] = useState("");
async function saveCategory() {
  const res = await supabase.from("Categories").insert({
     
      "Name": title,
      "Description": description});}
    return ( 
        <>
                 <div className='nabarwithmain'>

        <Navbar/>
        <div className='mainBar'>
            <div className='titlewsearch'>
            <SectionTitle Sectiontitle="Add Category"/>
          

            </div>
           
               <div className='forallinputs'>
                <div className='titlewithinput'>
                    <p className='project-image imagemargintop'>Image</p>
                    <div className='imagewithbutton'>
                    <div className='inputforiumage'>
                        <img src={artmentorapp} alt="art mentor ux ui app mockup" />
                    </div>

                    </div>

                </div>
                 

                  <div className='titlewithinput'>
                    <p className='project-image'>Title</p>
                    
<input onChange={(e) => setTitle(e.target.value)} type="text" className='input-width' name="" id="" placeholder=''/>  
                  

                   
                </div>
               
                 <div className='titlewithinput'>
                    <p className='project-image'>Description</p>
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
<input onChange={(e) => setDescription(e.target.value)} type="text" className='input-width2' name="" id="" placeholder=''/>  
                    </div>
                  

                   
                </div>
                
               
             
                 

            {/* <div className='buttoncont'>
                <Button onClick={saveCategory} buttontext="Save" buttonwidth="200px"/>
            </div> */}
            <button onClick={saveCategory}>save</button>
            {/* <div onClick={saveCategory} className='buttoncont'>
  <Button buttontext="Save" buttonwidth="200px"/>
</div> */}
            </div>
        </div>
        </div>
        </>
     );
}
 
export default Addcategory;
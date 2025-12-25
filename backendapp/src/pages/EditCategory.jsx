import React, { Component, useEffect, useState } from 'react';
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
import { useParams } from 'react-router-dom';










const EditCategory = () => {
  
       const [loading, setLoading] = useState(true);
    const {id} = useParams();

   const [data, setData] = useState("");



    useEffect(()=>{
        async function calleditAPI(id) {
  const res = await supabase.from("Categories").select("*").eq("id",id);
  
  setData(res.data[0]);

  setLoading(false);
 
}
calleditAPI(id);
    
    },[])

  if (loading) return <p>Loading...</p>;
  
    return ( 
        <>
                 <div className='nabarwithmain'>

        <Navbar/>
        <div className='mainBar'>
            <div className='titlewsearch'>
            <SectionTitle Sectiontitle="Edit Category"/>
          

            </div>
           
               <div className='forallinputs'>
                <div className='titlewithinput'>
                    <p className='project-image imagemargintop'>Image</p>
                    <div className='imagewithbutton'>
                    <div className='inputforiumage inputforiumagec'>
                        <input type="text" className='input-width' name="" id="" placeholder={data.Image}/>  

                    </div>

                    </div>

                </div>
                 

                  <div className='titlewithinput'>
                    <p className='project-image'>Title</p>
                    
<input type="text" className='input-width' name="" id="" placeholder={data.Name}/>  
                  

                   
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
<input type="text" className='input-width2' name="" id="" placeholder={data.description2}/>  
                    </div>
                  

                   
                </div>
                
               
             
                 

        
            <div  className='buttoncont'>
  <Button buttontext="Save" buttonwidth="200px"/>
</div>
            </div>
        </div>
        </div>
        </>
     );
}
 
export default EditCategory;
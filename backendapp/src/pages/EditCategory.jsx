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

     const [name, setName] = useState("");
          const [img, setImg] = useState("");
     const [desc, setDesc] = useState("");





    useEffect(()=>{
        async function calleditAPI(id) {
  const res = await supabase.from("Categories").select("*").eq("id",id);

  setName(res.data[0].Name);
    setImg(res.data[0].Image);
  setDesc(res.data[0].description2);


  setLoading(false);
 
}
calleditAPI(id);
    
    },[]);
    async function save() {
      const res = await supabase.from("Categories").update({
        "Name":name,
        "description2": desc
      }).eq("id",id);
      
    }

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
                        <input value={img} onChange={(e) => setImg(e.target.value)} type="text" className='input-width' name="" id="" placeholder=""/>  

                    </div>

                    </div>

                </div>
                 

                  <div className='titlewithinput'>
                    <p className='project-image'>Title</p>
                    
<input value={name} onChange={(e) => setName(e.target.value)} type="text" className='input-width' name="" id="" placeholder=""/>  
                  

                   
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
<input value={desc} onChange={(e) => setDesc(e.target.value)} type="text" className='input-width2' name="" id="" placeholder=""/>  
                    </div>
                  

                   
                </div>
                
               
             
                 

        
            <div onClick={save}  className='buttoncont'>
  <Button buttontext="Save" buttonwidth="200px"/>
</div>
            </div>
        </div>
        </div>
        </>
     );
}
 
export default EditCategory;
import React, { Component, useEffect, useState } from 'react';
import "./Blogs.css";
import Navbar from '../component/Navbar';
import SectionTitle from '../component/SectionTitle';
import StrokeButton from '../component/StrokeButton';
import BlogCard from '../component/BlogCard';
import blogimg1 from '../assets/blogimg1.svg';
import blogimg2 from '../assets/blogimg2.svg';
import { Link } from 'react-router-dom';
import { supabase } from '../Supabase';





const Blogs = () => {
   const [loading, setLoading] = useState(true);
          const [blogs, setBlogs] = useState("");
    
          useEffect(()=>{
                async function callGetAPI3(){
                      const res = await supabase.from("Blogs").select("*");
                      setBlogs(res.data);
                      // console.log(res);
                      setLoading(false);
                }
                callGetAPI3();
          },[]);
          if (loading) return <p>Loading...</p>;
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
                Sectiontitle="Blogs "/>
                <StrokeButton strokebtext="Add Blog" />
                
            </div>
                {/* <Link to="/blogdetails" className='no-underline'>
                <BlogCard
                blogimg={blogimg1}
                 blogtitle="How I helped mothers manage their cooking ingredients"
                blogdes="Crafting intuitive, user-centered interfaces that balance form and function across web and mobile platforms."
                />
                </Link>
                 <BlogCard
                blogimg={blogimg2}
                 blogtitle="Top Qualities of a Professional UI Designer in Egypt"
                blogdes="There are some important qualities evry UI designer in Egypt should have."
                /> */}
         

        <div className='forblogsdiv'>
         {
           blogs.map((blog)=>{
             return   <div className='forblogsdiv'>  <BlogCard
             blogimg={blog.Thumbnail}
             blogtitle={blog.Title}
             blogdes={blog.description}
             /></div>
            })
          }
        </div>
          </div>
          </div>
        </>
     );
}
 
export default Blogs;
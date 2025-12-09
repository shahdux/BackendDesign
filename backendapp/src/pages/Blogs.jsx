import React, { Component } from 'react';
import "./Blogs.css";
import Navbar from '../component/Navbar';
import SectionTitle from '../component/SectionTitle';
import StrokeButton from '../component/StrokeButton';
import BlogCard from '../component/BlogCard';
import blogimg1 from '../assets/blogimg1.svg';
import blogimg2 from '../assets/blogimg2.svg';




const Blogs = () => {
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
            <div className='forblogsdiv'>
                <BlogCard
                blogimg={blogimg1}
                 blogtitle="How I helped mothers manage their cooking ingredients"
                blogdes="Crafting intuitive, user-centered interfaces that balance form and function across web and mobile platforms."
                />
                 <BlogCard
                blogimg={blogimg2}
                 blogtitle="Top Qualities of a Professional UI Designer in Egypt"
                blogdes="There are some important qualities evry UI designer in Egypt should have."
                />
            </div>

        </div>
        </div>
        
        
        </>
     );
}
 
export default Blogs;
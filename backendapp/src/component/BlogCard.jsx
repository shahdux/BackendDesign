import React, { Component } from 'react';
import "./BlogCard.css";
import more from "../assets/threedots.svg"
const BlogCard = (props) => {
    return ( 
<>
<div className='blogcard'>

    <img src={props.blogimg} alt="blog cover img" />
    <div className='for2texts'>
        <p className='blogTitle'>{props.blogtitle}</p>
                <p className='blogDes'>{props.blogdes}</p>

    </div>
    <img src={more} alt="3 dots icon" />
</div>


</>
     );
}
 
export default BlogCard;
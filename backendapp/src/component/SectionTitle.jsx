import React, { Component } from 'react';
import "./SectionTitle.css"
const SectionTitle = (props) => {
    return (
        <>
        <h1 className='sectionTitles'>{props.Sectiontitle}</h1>
        </>
      );
}
 
export default SectionTitle;
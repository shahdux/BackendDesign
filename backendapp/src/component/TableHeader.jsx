import React, { Component } from 'react';
import "./TableHeader.css";
const TableHeader = (props) => {
    return ( 
        <>
        <h3 className='tableheader'>{props.tableheadertext}</h3>
        </>
     );
}
 
export default TableHeader;
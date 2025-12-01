import React, { Component } from 'react';
import "./Profile.css";
import profileicon from "../assets/proficon.svg"
const Profile = () => {
    return ( 
        <>
        
        <div className='profilewnamewrole'>
            <img src={profileicon} alt="profil icon" />
            <div className='namewrole'>
                <p className='name'>Shahd Mohammad</p>
                 <p className='role'>UX/UI Designer</p>
            </div>
        </div>
        </>
     );
}
 
export default Profile;
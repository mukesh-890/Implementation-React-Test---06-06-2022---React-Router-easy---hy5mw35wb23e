import React from 'react';
import {NavLink} from 'react-router-dom';


export const NavBar = () =>{
    return(
        <>
        <NavLink className = "index-link" to = "/"></nav>
        <NavLink className = "home-link" to ="/home"></nav>
        
        </>

    )
}

import React from "react";
import './styles/Navbar.css'
import { Link } from "react-router-dom";


const Navbar =() => {
    return(
        <nav className="navigation">

        <div className="logo">
           <Link to='/blog'>Blog</Link>
            <img src="3.png" height={50} width={50}/>  
        </div> 
        
            
        </nav>
       
       ) 
   }
    
export default Navbar
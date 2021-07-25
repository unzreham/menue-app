import React from 'react';
import { Router, Link, navigate } from '@reach/router';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Navbar.css";
import { useState } from 'react';
function Navbar(props) {

    const [isMbile, setMobile] =useState(false);
    return (

  

        <nav className=" navbar  ">
        
            <ul className= {isMbile? "nav-links-mobile" : "nav-links" }  onClick = {()=> setMobile(false)}>
            {/* <div className="" id=""> */}
                <li ><Link className="map" to="/">Home </Link> </li>  
                <li ><Link className="gallery" to="/menue"> My menu </Link></li>
                <li ><Link className="about" to="/search"> Search</Link></li>
                {/* </div> */}
            </ul>
      <button className ="mobile-menu-icon" onClick = {()=> setMobile(!isMbile)}>
          {isMbile? 
         (<i className = "fas fa-times"></i>) 
        :(<i className = "fas fa-bars"></i>)
        }
      </button> 
    </nav>
    );
}

export default Navbar;
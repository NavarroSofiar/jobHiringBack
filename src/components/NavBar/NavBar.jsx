import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.modules.css'
 
const NavBar = () => {
     return (
         <div className='containerDiv'>
            <div >
            <h1 className='title'>Job Hiring...</h1>
            </div>
             <Link to="/admin">
               <button className='btnReload'>Login</button>  
            </Link>
         </div>
     );
 }
  
 export default NavBar;
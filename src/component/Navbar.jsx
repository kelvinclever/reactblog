import React from "react"
import { Link } from "react-router-dom"
import {FcHome} from 'react-icons/fc'
import {FcInfo} from 'react-icons/fc'
import {FaBook} from 'react-icons/fa'
import './navbar.css'

const Navbar=()=>{
    return(
        <div className="navbar">
          <Link to="/"className="logo">
            <div className="nav">
            
            <div className='vite'>
                <span>v*</span>
                <span>I</span>
                <span>t</span>
                <span>*e</span>
            </div>
            <div className='ninja'>
            <span>n</span>
            <span>i</span>
            <span>n</span>
            <span>J</span>
            <span>a</span>
            </div>
    </div></Link>   
        
        <div className="links"> 
                <Link to="/" className="link"><FcHome/>Home</Link>
                <Link to="/blog" className="link"><FaBook/>Blog</Link>
                <Link to="/about" className="link"><FcInfo/>About</Link>
       
         </div>
        
       </div>
    )
}
export default Navbar
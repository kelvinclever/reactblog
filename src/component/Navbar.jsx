import React from "react"
import { Link } from "react-router-dom"
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
                <Link to="/" className="link">Home</Link>
                <Link to="/blog" className="link">Blog</Link>
                <Link to="/about" className="link">About</Link>
       
         </div>
        
       </div>
    )
}
export default Navbar
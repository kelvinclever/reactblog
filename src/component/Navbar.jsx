import React from "react"
import { Link } from "react-router-dom"
import {FcHome} from 'react-icons/fc'
import {FcInfo} from 'react-icons/fc'
import {FaBook} from 'react-icons/fa'
import myImage from '..////assets/Image/pro.png'
import './navbar.css'

const Navbar=()=>{
    return(
        <div className="navbar">
      
          
            <div className="nav">
                  <img src={myImage} alt="" style={{borderRadius:"50%",width:"5rem",height:"auto",alignItems:"center",paddingBottom:"1rem"}}/>
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
            </div> 
              
              <div className="links"> 
                      <Link to="/" className="link"><FcHome/>Home</Link>
                      <Link to="/blog" className="link"><FaBook/>Blog</Link>
                      <Link to="/about" className="link"><FcInfo/>About</Link>
            
              </div>
        
      </div>
    )
}
export default Navbar
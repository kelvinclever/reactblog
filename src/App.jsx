import { useState } from 'react'
import Footer from './component/Footer'
import Navbar from './component/Navbar'
import reactLogo from './assets/react.svg'

import About from './pages/About'
import Blog from './pages/Blog'
import Home from './pages/Home'
import Notfound from './pages/NotFound'
import Evolving from './pages/Evolving'
import Storytime from './pages/Storytime'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import './App.css'
import NotFound from './pages/NotFound'

function App() {
 

  return (
  <>
    <BrowserRouter>
   
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='blog/evolving' element={<Evolving/>}/>
        <Route path='blog/storytime' element={<Storytime/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  
  </>
  )
}

export default App

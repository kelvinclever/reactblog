import './home.css'
import Lottie from 'lottie-react'
import animationData from '../assets/77671-blog-post.json'
import { Link } from 'react-router-dom'

const Home=()=>{
    return(
        <div className="home">
          <div className='logos'>
              
              <Lottie animationData={animationData} id='animee' />
              <Link to='/blog'className='blogs'>Continue to blogs</Link>
          </div>
          <div className='head'>
          <span>Hello,... good to have you here welcome </span> <h1>to kelvin Blogs</h1>
            <p>This is where I share my thoughts, ideas, and experiences.</p>
            <p>Stay tuned for regular updates and engaging content!</p>
          </div>
        </div>
    )
}
export default Home
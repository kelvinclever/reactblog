import './home.css'

import myImage from '../assets/Image/pro.png'
const Home=()=>{
    return(
        <div className="home">
          <div className='logos'>
           

           <img src={myImage} alt="" style={{borderRadius:"50%"}}/>
          </div>
          <div className='head'>
          <span>welcome</span> <h1>to kelvin Blogs</h1>
            <p>This is where I share my thoughts, ideas, and experiences.</p>
            <p>Stay tuned for regular updates and engaging content!</p>
          </div>
        </div>
    )
}
export default Home
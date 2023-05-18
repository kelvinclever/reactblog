import Leftside from "../component/Leftside"
import Rightside from "../component/Rightside"

import './blog.css'

const Blog=()=>{
    return(
        <div className="container">
            <Rightside/> 
            <Leftside/>
        </div>
    )
}
export default Blog
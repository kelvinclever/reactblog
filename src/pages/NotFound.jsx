import './notfound.css'
import { Link } from "react-router-dom"
import {FcHome} from 'react-icons/fc'
const NotFound=()=>{
    return(
        <div className="notfound">
            <h1>Hey newbie ,, can't find what you are looking for </h1>
            <h3>click back home<Link to="/"className='link error'><FcHome/>Home</Link></h3>
            
        </div>
    )
}
export default NotFound
import Rightside from "./Rightside";
import Leftside from "./Leftside";
import './container.css'

const Container=()=>{
  
    return(
        <div className="container">
            <Rightside/>
            <Leftside/>
            
        </div>
    )
}
export default Container;
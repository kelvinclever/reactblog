
import Navbar from './component/navbar'
import Container from './component/Container'
import Footer from './component/Footer'


function App() {
  
const explore="explore";
  return (
    
  <div className="app">
      <Navbar explore={explore}/>
      <Container/>
      <Footer/>
    </div>
      
  )
}

export default App

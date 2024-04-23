import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Home from "../Home/Home";
const Main = () => {
  return (
    <div>
        <Navbar/>
        <Home/>
        <Footer/>
    </div>
  )
}

export default Main

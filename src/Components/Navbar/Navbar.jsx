import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  const fullName =  localStorage.getItem('fullName');


    return (

    <>
    <div className=" navbar ">

        <div className='leftSideNav d-flex justify-content-center align-items-center' >
            <img src="pictures/list.png" alt=""  className='ms-3'/>
             <span className='skyCastText '>Sky Cast</span>
            <img src="pictures/Location.png" alt=""  className='ms-5 '/>
            <span className='egyptText d-inline-block ms-2'>Egypt, Cairo</span>
             

        </div>
        <div className="rightSideNav  me-4 d-flex justify-content-between align-items-center">
            <div className='searchContainer me-5 position-relative'>
            <input className=" searchInput ps-5" type="search" placeholder = "Search Location" aria-label="Search" />
            <span>
            <img src="pictures/search 1.png " alt=""  className='searchIconNav'/>
            </span>
            </div>
                {fullName? <div className=' d-flex justify-content-around align-items-center w-100 '>
                    <img src="pictures/Icons.png" alt=""  />
                    <img src="pictures/Image (2).png" alt="" className=' mx-3 w-25' />
                    <span>
                    {fullName}    

                    </span>
                    
                    

                </div>
                 : <div className="signUpButton">
                <Link to="/signup">
            <button className='btn' > Sign Up</button>
                </Link>
            </div>}
           

          
        </div>


    </div>
    
    
    </>
  )
}

export default Navbar  
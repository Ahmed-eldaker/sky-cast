import "./Home.css"

const CurrentWeatherCard = () => {
  return (
    <>
    <div className="col-md-4">
            <div className="currentWeatherCard cards p-3">
              <p className="">
                Current Weather
                <span className="d-block text-black text-center">3:00 PM</span>
              </p>
              <div className=" w-50">
                <img src="pictures/cloudy.png" alt="" className=""/>
                <p > 25°C</p>
                <p>Cloudy</p>
              </div>
              <div>
                <p>There will be mostly sunny.The high will be <span style={{fontWeight:"400" , color:"#000000"}}>25°C </span>  </p>
              </div>
            </div>
          </div>
    </>
    
  )
}

export default CurrentWeatherCard

const CityCard = () => {
   
      
    const dataArray = [
        {
          day: "Today (Sun)",
          date: "Mar 6",
          Weather: "Sunny",
          Temperature: "15-20℃",
          AQI: 67,
          src:"pictures/01_sunny_color.png"
        },
        {
          day: "Mon",
          date: "Mar 7",
          Weather: "Cloudy",
          Temperature: "16-22℃",
          AQI: 71,
          src:"pictures/04_sun_cloudy_color.png"

        },
        {
          day: "Tue",
          date: "Mar 8",
          Weather: "Lightning",
          Temperature: "17-20℃",
          AQI: 65,
          src:"pictures/Image-1.png"

        },
        {
          day: "Wed",
          date: "Mar 9",
          Weather: "Heavy rain",
          Temperature: "16-21℃",
          AQI: 70,
          src:"pictures/Image-2.png"

        }
      ];
      
  
  
    return (
    <>
    <div className="col-md-5">
       <div className="cards">
        <div>

        <div className='Cites d-flex justify-content-between align-items-center w-50 ms-3 mt-2'>
            <p>New York</p>
            <p>Hongkong</p>
            <p>Tokyo</p>
        </div>
        <img src="pictures/line.png" alt="" className='citeline'/>
        </div>

        <div className="">
        <div className="row m-2">
    {dataArray.map((item, idx) => (
        <div key={idx} className="col-md-3 weather">
            <p>{item.day}</p>
            <p>{item.date}</p>
            <img src={`${item.src}`} alt="" className=""/>
            <p>{item.Weather}</p>
            <p>{item.Temperature}</p>
            <p>AQI {item.AQI}</p>
        </div>
    ))}
</div>


        </div>
       </div>
        </div>
    
    
    </>
  )
}

export default CityCard
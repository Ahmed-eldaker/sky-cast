
const WeatherDetails = () => {
  return (
    <>
       <div className="col-md-3">
        <div className="cards pb-5">
<div className=' d-flex justify-content-between align-items-center mt-5   daysCard'>
            <img src="pictures/Frame 4.png" alt="" />
            <div>
            <div>Fri</div>
            <img src="pictures/308.png" alt="" />
            </div>
            <div>
            <div>Sat</div>
            <img src="pictures/113.png" alt="" />

            </div>
            <div>
            <div>Sun</div>
            <img src="pictures/117.png" alt="" />

            </div>
            <div>
            <div>Mon</div>
            <img src="pictures/114.png" alt="" />

            </div>
            <div>
            <div>Tue</div>
            <img src="pictures/389.png" alt="" />

            </div>
            <img src="pictures/Frame 5.png" alt="" />

</div>

<div className="clockContainer  d-flex justify-content-center align-items-center mt-3">
    <img src="pictures/Clock.png" alt="" />
    <div className='ms-3'>3:00PM </div>
</div>

<div>
    <p className='airCondations'>AIR CONDITIONS</p>
</div>



<div className=' ms-3'>
    <div className='mt-4'>
        <img src="pictures/ICON.png" alt="" className='mx-3 d-inline-block' />
        <p className='d-inline airCondationsDetails'>Real Feel <span className='d-block ms-5 ps-2'>30° </span></p>
    </div>
    
    <div className='mt-4'>
        <img src="pictures/Frame.png" alt="" className='mx-3 d-inline-block' />
        <p className='d-inline airCondationsDetails'>Wind <span className='d-block ms-5 ps-2'>0.8 km/hr </span></p>
    </div>

    <div className='mt-4'>
        <img src="pictures/Frame (1).png" alt="" className='mx-3 d-inline-block' />
        <p className='d-inline airCondationsDetails'>Chance of rain <span className='d-block ms-5 ps-2'>2% </span></p>
    </div>

    <div className='mt-4 mb-5'>
        <img src="pictures/Sun.png" alt="" className='mx-3 d-inline-block' />
        <p className='d-inline airCondationsDetails'>UV Index <span className='d-block ms-5 ps-2 '>4</span></p>
    </div>
</div>
        </div>
        </div> 
    </>
  )
}

export default WeatherDetails
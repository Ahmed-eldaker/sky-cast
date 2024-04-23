
const ForeCast = () => {
  return (
    <>
      <div className="col-md-9  ">
        <div className="cards  mb-5">
          <div className="forecast m-3 ">
            <img src="pictures/Group (6).png" alt="" />
            <p className="d-inline ms-3">24-hour forecast</p>
          </div>
          <div className="forecastTemp  position-relative ">
            <span className="forecastTempText">26°</span>
            <span className="forecastTempText">26°</span>
            <span  className="forecastTempText">22°</span>
            <span className="forecastTempText">16°</span>
            <span className="forecastTempText">20°</span>
            <span className="forecastTempText">22°</span>
            <span className="forecastTempText">16°</span>
            <span className="">
              <img src="pictures/icon (2).png" alt="" className="mb-2" />
              <div className="forecastTempTextTime">11.7km/h</div>
              <div className="forecastTempTextTime">Now</div>
            </span>
            <span className="">
              <img src="pictures/icon (5).png" alt="" className="mb-2" />
              <div className="forecastTempTextTime">9.3km/h</div>
              <div className="forecastTempTextTime">22:00</div>
            </span>
            <span className="">
              <img src="pictures/icon (2).png" alt="" className="mb-2" />
              <div className="forecastTempTextTime">12km/h</div>
              <div className="forecastTempTextTime">00:00</div>
            </span>
            <span className="">
              <img src="pictures/icon (3).png" alt="" className="mb-2" />
              <div className="forecastTempTextTime">15km/h</div>
              <div className="forecastTempTextTime">2:00</div>
            </span>
            <span className="">
              <img src="pictures/icon (3).png" alt="" className="mb-2" />
              <div className="forecastTempTextTime">15km/h</div>
              <div className="forecastTempTextTime">4:00</div>
            </span>
            <span className="">
              <img src="pictures/icon (2).png" alt="" className="mb-2" />
              <div className="forecastTempTextTime">15km/h</div>
              <div className="forecastTempTextTime">6:00</div>
            </span>
            <span className="">
              <img src="pictures/icon (3).png" alt="" className="mb-2" />
              <div className="forecastTempTextTime">15km/h</div>
              <div className="forecastTempTextTime">8:00</div>
            </span>
            <img
              src="pictures/Vector 1.png"
              alt=""
              style={{ width: "100%", marginTop: "3rem" }}
            />
          </div>

          <div className=" mb-5 pb-4  "></div>
        </div>
      </div>
    </>
  );
};

export default ForeCast;

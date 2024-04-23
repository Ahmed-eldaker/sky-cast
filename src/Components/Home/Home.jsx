import "./Home.css"
import CurrentWeatherCard from "./CurrentWeatherCard";
import CityCard from "./CityCard";
import WeatherDetails from "./WeatherDetails";
import ForeCast from "./ForeCast";
const Home = () => {
  return (
    <>
      <div className="container-fluid ">
        <div className="row mx-2 pt-3 position-relative">
        <CurrentWeatherCard/>
        <CityCard/>



        <WeatherDetails/>

    <div className="ForeCast">

        <ForeCast/>
    </div>

            </div>
        </div>
      
    </> 
  );
};

export default Home;

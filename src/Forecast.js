import React, { useState, useEffect} from "react";
import './style/Forecast.css';
import axios from "axios";
// import { connect } from "http2";
// import '../style/style.css'

function Forecast() {
    // const [location, setLocation] = useState('')

    const [data, setData] = useState({})
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Cincinnati&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(url);
          setData(response.data);
        } catch (error) {
          console.error('Error fetching weather data:', error);
        }
      };
      fetchData();
    }, [url]);









    return (
        <div className="forecast">
            <div className="container">
                <div className="top">
                    <div className="location" >
                        <p >Cincinnati</p>
                    </div>
                    <div className="temp">
                    {data.main ? <h1>{data.main.temp}˚F</h1> : null}
                    </div>
                    <div className="description">
                        {data.weather ? <p>{data.weather[0].main}</p> : null}
                    </div>
                </div>
                    <div className="bottom">
                        <div className="feels">
                        {data.main ? <p>{data.weather[0].main}</p> : null}
                            <p className="bold">65˚F</p>
                            <p>Feels Like</p>
                        </div>
                        <div className="humidity">
                            <p className="bold">20%</p>
                            <p>Humidity</p>
                        </div>
                        <div className="wind">
                            <p className="bold">20 MHp</p>
                            <p>Wind Speed</p>
                        </div>
                    </div>
            </div>
        </div>
    );


        // <div className="container">
        // <div className="top-bar">
        //     <input type="text" className="cityInput" placeholder=""/>
        //     <div className="search-icon">
        //         <img src={search_icon} alt="" />
        //     </div>
        // </div>
        // <div className="weather-image">
        //     <img src={cloud_icon} alt="" />
        // </div>
        // <div className="weather-temp">24˚c</div>
        // </div>
}

export default Forecast
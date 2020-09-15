import React from "react";
import { useState } from 'react';
import axios from "axios";
import "./body.styles.scss";
import WeatherContainer from './weather-container/weather-container.component';
import LoadingIndicator from "./loading-indicator/loading-indicator.component";


export interface IWeatherData {
    main: string,
    description: string,
    temp: number,
    feelsLike: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    humidity: number,
    windSpeed: number,
    country: string,
    city: string,
}


const Body = () => {

    const [weatherData, setWeatherData] = useState({});
    const [startedSearch, setStartedSearch] = useState(false);

    axios({
        method: "GET",
        url: "http://api.openweathermap.org/data/2.5/weather?q=Budapest&appid=dc188740a6faebe07902f134609866d2", //https://cors-anywhere.herokuapp.com/
    }).then((response) => {
        console.log(response);
        setWeatherData(response);
    })
        .catch((error) => {
            console.log(error);
        });;


    return (
        <div className='body-component'>
            { Object.keys(weatherData).length > 0 ? <WeatherContainer /> : <LoadingIndicator />}
        </div>
    );
};

export default Body;



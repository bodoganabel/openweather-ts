

import React from "react";
import "./weather-container.styles.scss";

const WeatherContainer = (data: any) => {
    const { main,
        description,
        temp,
        feelsLike,
        temp_min,
        temp_max,
        pressure,
        humidity,
        windSpeed,
        country,
        city
    } = data.data;

    console.log("Data: ", data);

    return (
        <div className='weather-container'>Weather component
            <div className="main">main: {main}</div>
            <div className="description">description: {description}</div>
            <div className="temp">temp: {temp}</div>
            <div className="feelsLike">feelsLike: {feelsLike}</div>
            <div className="temp_min">temp_min: {temp_min}</div>
            <div className="temp_max">temp_max: {temp_max}</div>
            <div className="pressure">pressure: {pressure}</div>
            <div className="humidity">humidity: {humidity}</div>
            <div className="windSpeed">windSpeed: {windSpeed}</div>
            <div className="country">country: {country}</div>
            <div className="city">City: {city}</div>
        </div>
    );
};

export default WeatherContainer;
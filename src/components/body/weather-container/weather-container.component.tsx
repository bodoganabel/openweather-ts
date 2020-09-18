

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
        <div className='weather-container'>
            <h2 className="city">The weather in {city} is {main} today</h2>

            <div className="temperature-indicator">
                <img src={`https://openweathermap.org/img/wn/${"01d@2x"}.png`} className="weather-icon" />
                <h2 className="temp"> {temp}°C </h2>
            </div>
            <h4>(Feels like: {feelsLike}°C)</h4>
            <h3 className="description">{description}</h3>



            <h4>Minimum: {temp_min}°C <br /> Maximum: {temp_max}°C
            </h4>
            <h4 className="details">Pressure: {pressure} hPa <br />
                Humidity: {humidity}% <br />
                WindSpeed: {windSpeed} m/s

            </h4>
            <h4 className="country">Country code: {country}</h4>
        </div>
    );
};

export default WeatherContainer;
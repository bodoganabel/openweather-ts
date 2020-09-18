

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
        city,
        icon
    } = data.data;

    return (
        <div className='weather-container'>
            <h2 className="city">The weather in {city} ({country}) is {main} today</h2>

            <div className="temperature-indicator">
                <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} className="weather-icon" />
                <h2 className="temp"> {Math.round(temp)}°C </h2>
            </div>
            <div className="more-info">
                <h4>(Feels like: {Math.round(feelsLike)}°C) <br />
                    {description}
                </h4>
            </div>

            <div className="additional-details">
                <h3>Details: </h3>
                <h4>
                    Minimum temperature: {Math.round(temp_min)}°C <br />
                    Maximum temperature: {Math.round(temp_max)}°C
                </h4>
                <h4>
                    Pressure: {pressure} hPa <br />
                    Humidity: {humidity}% <br />
                    WindSpeed: {windSpeed} m/s
                </h4>
            </div>
        </div >
    );
};

export default WeatherContainer;
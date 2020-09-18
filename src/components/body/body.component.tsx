import React, { useEffect, useState } from "react";
import "./body.styles.scss";
import WeatherContainer from './weather-container/weather-container.component';
import LoadingIndicator from "./loading-indicator/loading-indicator.component";


export interface IWeatherData {
    main?: string,
    description?: string,
    temp?: number,
    feelsLike?: number,
    temp_min?: number,
    temp_max?: number,
    pressure?: number,
    humidity?: number,
    windSpeed?: number,
    country?: string,
    city?: string,
}


const Body = () => {

    useEffect(() => {
        fetch('http://api.openweathermap.org/data/2.5/weather?q=Budapest&appid=dc188740a6faebe07902f134609866d2&units=metric')
            .then(response => response.json())
            .then(response => {
                console.log(response)
                setWeatherData(
                    {
                        main: response.weather[0].main,
                        description: response.weather[0].description,
                        temp: response.main.temp,
                        feelsLike: response.main.feels_like,
                        temp_min: response.main.temp_min,
                        temp_max: response.main.temp_max,
                        pressure: response.main.pressure,
                        humidity: response.main.humidity,
                        windSpeed: response.wind.speed,
                        country: response.sys.country,
                        city: response.name,
                    }
                )
            })
            .catch(error => console.log(error));
    }, []);

    const [weatherData, setWeatherData] = useState<IWeatherData>(Object);

    return (
        <div className='body-component'>
            { Object.keys(weatherData).length > 0 ? <WeatherContainer data={weatherData} /> : <LoadingIndicator />}
        </div>
    );
};

export default Body;



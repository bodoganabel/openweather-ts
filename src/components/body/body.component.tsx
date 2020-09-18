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
    icon?: string
}


const Body = () => {

    useEffect(() => {
        fetch('http://api.openweathermap.org/data/2.5/weather?q=Budapest&appid=dc188740a6faebe07902f134609866d2&units=metric')
            .then(response => response.json())
            .then(response => {
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
                        icon: response.weather[0].icon
                    }
                )
            })
            .catch(error => {
                setGotNoResponse(true);
                console.log(error);
            });
    }, []);

    const [weatherData, setWeatherData] = useState<IWeatherData>(Object);
    const [gotNoResponse, setGotNoResponse] = useState<boolean>(false);


    return (
        <div className='body-component'>

            {gotNoResponse ?
                <div>Server is unreachable. <br /> Check your webconsole for more details.</div> :
                <div>{Object.keys(weatherData).length > 0 ? <WeatherContainer data={weatherData} /> : <LoadingIndicator />}</div>
            }

        </div>
    );
};

export default Body;



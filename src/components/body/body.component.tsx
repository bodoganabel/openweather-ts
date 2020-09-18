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
        fetch('http://api.openweathermap.org/data/2.5/weather?q=Budapest&appid=dc188740a6faebe07902f134609866d2')
            .then(response => response.json())
            .then(response => console.log(response)/*/response => setResult({main: response.main})/*/)
            .then(response => setWeatherData(response))
            .catch(error => console.log(error));
    }, []);

    const [weatherData, setWeatherData] = useState<IWeatherData>(Object);
    const [startedSearch, setStartedSearch] = useState<boolean>(false);

    return (
        <div className='body-component'>
            { Object.keys(weatherData).length > 0 ? <WeatherContainer /> : <LoadingIndicator />}
        </div>
    );
};

export default Body;



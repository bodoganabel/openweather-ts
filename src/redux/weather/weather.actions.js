import { WeatherActionTypes } from './weather.types';


export const setWeather = weather => ({
    type: WeatherActionTypes.SET_MOVIES,
    payload: weather
});
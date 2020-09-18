import { WeatherActionTypes } from "./weather.types";

export const setWeather = (weather: any) => ({
  type: WeatherActionTypes.SET_MOVIES,
  payload: weather,
});

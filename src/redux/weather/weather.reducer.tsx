import { WeatherActionTypes } from "./weather.types";

const INITIAL_STATE = {
  currentWeather: [],
};

const weatherReducer = (state = INITIAL_STATE, action: { type: any; payload: any; }) => {
  switch (action.type) {
    case WeatherActionTypes.SET_MOVIES:
      return {
        ...state,
        currentWeather: action.payload,
      };
    default:
      return state;
  }
};

export default weatherReducer;

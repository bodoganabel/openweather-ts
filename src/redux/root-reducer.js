import { combineReducers } from 'redux';

import weatherReducer from './weather/weather.reducer';


//Here we can extend the reducers in the future if needed.
const rootReducer = combineReducers({
    weather: weatherReducer,
});

export default rootReducer;
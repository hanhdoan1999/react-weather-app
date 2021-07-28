import {combineReducers} from 'redux';
import {weatherData} from './weatherReducer';

const myReducer = combineReducers({
    weatherData,
})

export default myReducer
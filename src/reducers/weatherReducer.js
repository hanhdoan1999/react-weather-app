import {GET_DATA_SUCCESS, FIND_CITY_SUCCESS,FIND_CITY_FAIL} from '../actions/actionTypes';

const intialState = {
    data:[],
    nameCity:'Ha Noi',
    error:''
}

export const weatherData = (state = intialState,action) => {
    switch (action.type) {
        case GET_DATA_SUCCESS:
            return {...state,data : action.data}
        case FIND_CITY_SUCCESS:
            return {...state,data : action.data, nameCity:action.nameCity, error:''}
        case FIND_CITY_FAIL:
            return {...state,error: 'Not found city'}
        default:
            return state
    }
}
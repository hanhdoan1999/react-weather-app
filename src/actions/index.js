import {GET_DATA, FIND_CITY} from './actionTypes'

export const getData = (latitude,longitude) =>{
    return {
        type: GET_DATA,
        latitude,
        longitude
    }
}

export const findCityByName = (nameCity) =>{
    return {
        type: FIND_CITY,
        nameCity
    }
}
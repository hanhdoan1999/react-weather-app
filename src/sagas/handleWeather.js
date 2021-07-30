import { call, put, takeEvery } from 'redux-saga/effects';
 
import {GET_DATA, GET_DATA_SUCCESS,FIND_CITY,FIND_CITY_SUCCESS, FIND_CITY_FAIL } from '../actions/actionTypes'
import {fetchData, findCity} from './fetchWeather'


function* handleGetData(action) {
    const data = yield call(fetchData,action.latitude,action.longitude);
    yield put({type:GET_DATA_SUCCESS, data});      

}

function* handleFindCity(action) {
    try {
        const city = yield call(findCity,action.nameCity) ;
        const nameCity = city.name;
        const data = yield call(fetchData,city?.coord.lat,city?.coord.lon) ;
        yield put({type:FIND_CITY_SUCCESS, data , nameCity});
      }
      catch(error) {
        yield put({type:FIND_CITY_FAIL});
      }       
}


export function* watchGetData() {
    yield takeEvery(GET_DATA, handleGetData)
}

export function* watchFindCity() {
    yield takeEvery(FIND_CITY, handleFindCity)
}
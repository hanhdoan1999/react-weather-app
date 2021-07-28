import React from 'react'
import { timeFormat } from '../mixins';
import { findCityByName } from '../actions/index';
import { useSelector,useDispatch } from 'react-redux';
import { useState } from 'react';


function SideBar() {

    const data = useSelector(state => state.weatherData.data);
    const nameCity = useSelector(state => state.weatherData.nameCity);
    const dispatch = useDispatch();

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const icons = ["Clear", "Clouds", "Drizzle", "Rain", "Snow", "Thunderstorm"]


    const [value, setValue] = useState('');

    const handleTextChange = (e) => {
      setValue(e.target.value)
    }

    const dateFormat = (strDate) => {
        const date = new Date(strDate * 1000)
        return days[date.getDay()]
      }
    
      
  const filterImg = icons.includes(data?.current?.weather[0]?.main)
  ? data?.current?.weather[0]?.main
  : 'atmosphere'


  

    return (
        <div className="wrap">
              <form className="mb-3">
                <input type="text" value={value} className="form-control" placeholder="Search" data-toggle="tooltip" data-placement="top" title="Press city name then Enter" autoFocus
                  onChange={handleTextChange}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === 'Escape') {
                      dispatch(findCityByName(value))
                      setValue('')
                      event.preventDefault()
                      event.stopPropagation()
                    }
                  }}
                />
              </form>
              <img src={`/img/${filterImg}.png`} alt="icon" className="img-fluid" />
              {/* <img src={`https://openweathermap.org/img/w/${data?.current?.weather[0]?.icon}.png`} alt="icon" className="img-fluid" /> */}
              <div className="fs-2 fw-bold lh-sm text-dack">
                {nameCity}
              </div>
              <div className="fs-1 fw-bold lh-lg">
                {data?.current?.temp}°C
              </div>
              <div className="fs-5 lh-lg">
                {dateFormat(data?.current?.dt)}, {timeFormat(data?.current?.dt)}
              </div>
              <div className="fs-6 lh-base text-capitalize text-muted mb-3">
                {data?.current?.weather[0]?.description} <br />
                {data?.current?.weather[0]?.main} {`${data?.current?.clouds}%`}
              </div>
              <div className="position-relative d-flex justify-content-center align-items-center">
                <div className="position-absolute">
                  <div className="fs-3 fw-bold text-white">{nameCity}</div>
                </div>
                <img src="https://us.123rf.com/450wm/macrovector/macrovector1805/macrovector180500152/100615959-weather-forecast-web-page-with-heavy-rain-on-dark-cloudy-day-with-people-under-umbrellas-vector-illu.jpg?ver=6" alt="" className="img-fluid rounded " />
              </div>
            </div>
    )
}

export default SideBar

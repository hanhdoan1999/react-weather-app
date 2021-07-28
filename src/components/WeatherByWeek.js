import React from 'react';
import { useSelector } from 'react-redux';
import { timeFormat } from '../mixins';
import { useState } from 'react';

function WeatherByWeek() {

  const data = useSelector(state => state.weatherData.data);
  console.log('data', data);

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];


  const [item, setItem] = useState(data?.daily[0]);

  const dateFormat = (strDate) => {
    const date = new Date(strDate * 1000)
    return days[date.getDay()] + ', ' + date.getDate() + '/' + (date.getMonth() + 1)
  }

  const handleShowDetail = (el, index) => {
    setItem(el);
    console.log('item', item);
  }


  return (
    <>
      <div className="row">
        <div className="d-flex flex-wrap">
          {data?.daily.map((el, index) =>
            <div key={index} className="col-xs-12 col-md-3 col-sm-6 p-1" style={{ cursor: 'pointer' }} onClick={() => handleShowDetail(el, index)}>
              <div className={`${el.dt === item.dt ? 'bg-info' : 'bg-white'} p-2 rounded-3 h-100`}>
                <p className="fs-6 text-black-50">{dateFormat(el.dt)}</p>
                <div className="text-center">
                  <img src={`https://openweathermap.org/img/w/${el.weather[0]?.icon}.png`} alt="icon" className="img-fluid" />
                  <p className="fs-6 text-muted fw-bold">{Math.round(el.temp.min)}° - {Math.round(el.temp.max)}°</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="bg-white my-5 p-2 rounded-3 h-100">
        <p className="fs-5 text-muted">{dateFormat(item.dt)}</p>
        <div className="row">
          <div className="col-md-6 col-xs-12">
            <p className="fs-6 text-muted">Temp current : {item.temp?.day} °C</p>
            <p className="fs-6 text-muted">Temp :  {item.temp?.min} °C - {item.temp?.max} °C</p>
            <p className="fs-6 text-muted">Humidity : {item.humidity} %</p>
            <p className="fs-6 text-muted">Wind speed : {Math.round(item.wind_speed * 3.6 * 100) / 100} km/h</p>
          </div>
          <div className="col-md-6 col-xs-12">
            <p className="fs-6 text-muted">Sunrise : {timeFormat(item.sunrise)}</p>
            <p className="fs-6 text-muted">Sunset : {timeFormat(item.sunset)}</p>
            <p className="fs-6 text-muted">Description : {item?.weather[0]?.description}</p>
            <p className="fs-6 text-muted">Atmospheric pressure : {item?.pressure} hPa</p>
          </div>
        </div>

      </div>
    </>

  )
}

export default WeatherByWeek

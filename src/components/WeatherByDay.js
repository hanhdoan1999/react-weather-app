import React from 'react';
import { FiSun } from "react-icons/fi";
import { WiDayWindy, WiHumidity, WiSunrise, WiSunset } from "react-icons/wi";
import { IoMdSpeedometer } from 'react-icons/io';
import { FaThermometerEmpty } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { timeFormat } from '../mixins';

function WeatherByDay() {

    const data = useSelector(state => state.weatherData.data);

    return (
          <div className="row">
                <div className="d-flex flex-wrap">
                  <div className="  col-md-6 col-xl-4  col-sm-12 p-3">
                    <div className="bg-white p-2 rounded-3 h-100">
                      <p className="fs-5 text-black-50">UV index</p>
                      <div className="text-center">
                        <FiSun className="text-warning icon-size my-1" />
                        <p className="fs-3 text-muted fw-bold">{data?.current?.uvi}</p>
                      </div>
                    </div>
                  </div>
                  <div className="  col-md-6 col-xl-4  col-sm-12 p-3">
                    <div className="bg-white p-2 rounded-3 h-100">
                      <p className="fs-5 text-black-50">Wind Status </p>
                      <div className="text-center">
                        <WiDayWindy className="icon-color icon-size" />
                        <p className="fs-3 text-muted fw-bold text-center">{`${Math.round(data?.current?.wind_speed * 3.6 * 100) / 100} km/h`}</p>
                      </div>
                    </div>
                  </div>
                  <div className="  col-md-6 col-xl-4  col-sm-12 p-3">
                    <div className="bg-white p-2 rounded-3 h-100">
                      <p className="fs-5 text-black-50">Sunrise &amp; Sunset</p>
                      <p className="fs-4 text-muted fw-bold "><WiSunrise className="text-warning icon-size" /> {timeFormat(data?.current?.sunrise)}</p>
                      <p className="fs-4 text-muted fw-bold "><WiSunset className="text-warning icon-size" /> {timeFormat(data?.current?.sunset)}</p>
                    </div>
                  </div>
                  <div className="  col-md-6 col-xl-4  col-sm-12 p-3">
                    <div className="bg-white p-2 rounded-3 h-100">
                      <p className="fs-5 text-black-50 "> Humidity </p>
                      <div className="text-center">
                        <WiHumidity className="icon-color icon-size" />
                        <p className="fs-3 text-muted fw-bold text-center">{data?.current?.humidity} %</p>
                      </div>
                    </div>
                  </div>
                  <div className="  col-md-6 col-xl-4  col-sm-12 p-3">
                    <div className="bg-white p-2 rounded-3 h-100">
                      <p className="fs-5 text-black-50">Visibility </p>
                      <div className="text-center">
                        <IoMdSpeedometer className="text-warning icon-size" />
                        <p className="fs-3 text-muted fw-bold text-center">{`${data?.current?.visibility / 1000} km`}</p>
                      </div>
                    </div>
                  </div>
                  <div className="  col-md-6 col-xl-4  col-sm-12 p-3">
                    <div className="bg-white p-2 rounded-3 h-100">
                      <p className="fs-5 text-black-50">Atmospheric pressure </p>
                      <div className="text-center">
                        <FaThermometerEmpty className="icon-color icon-size" />
                        <p className="fs-3 text-muted fw-bold text-center">{data?.current?.pressure} hPa</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div> 
    )
}

export default WeatherByDay

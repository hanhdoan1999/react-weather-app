import React from 'react';
import { useSelector } from 'react-redux';
import { timeFormat } from '../mixins';
import { Line } from "react-chartjs-2";

function WeatherByHour() {

    const data = useSelector(state => state.weatherData.data);
    const hours = [];
    const temp = [];
    const feel = [];
    const gethours = data?.hourly.map(el => [...hours, timeFormat(el.dt)]);
    const gettemp = data?.hourly.map(el => [...temp, el.temp]);
    const getFeelslike = data?.hourly.map(el => [...feel, el.feels_like]);

    return (
        <div className="bg-white p-2 mt-2 rounded-3">
            <Line
                data={{
                    labels: gethours,
                    datasets:
                        [
                            {
                                data: gettemp.flat(),
                                label: " Temp (°C)",
                                borderColor: "#8e5ea2",
                                fill: false
                            },
                            {
                                data: getFeelslike.flat(),
                                label: " Feel like (°C)",
                                borderColor: "#3cba9f",
                                fill: false
                            }
                        ]
                }}
                options={{
                    title: {
                        display: true,
                        text: "Weather"
                    },
                    legend: {
                        display: true,
                        position: "bottom"
                    }
                }}
            />
        </div>


    )
}

export default WeatherByHour

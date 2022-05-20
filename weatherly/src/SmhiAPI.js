import React, { useEffect, useState } from 'react';
import axios from 'axios';
import test from './static/day.svg'

export default function SmhiAPI() {
    const url = 'https://opendata-download-metanalys.smhi.se/api/category/mesan1g/version/2/geotype/point/lon/16.158/lat/58.5812/data.json';
    const [weather, setWeather] = useState({
        day: 'test',
            forecast: 2,
            temp: 1 + "°C",
            highTemp: "temp°",
            windSpeed: 3

        });
    
    axios.get(url).then(function (response) {

        console.log("SUCCESS");
        console.log(response.data)
        const weekday = new Date();
        const options = { weekday: 'long' };

        setWeather([...weather] = {
            day: weekday.toLocaleDateString(undefined, options),
            forecast: response.data.timeSeries[0].parameters[22].values[0],
            temp: response.data.timeSeries[0].parameters[0].values[0] + "°C",
            highTemp: "temp°",
            windSpeed: response.data.timeSeries[0].parameters[6].values[0]
        });


    })
        .catch(function (error) {
            console.log(error + " FEL");
        });


    return (
        <div>
            <h2>7-Dygnsprognos</h2>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Dag</th>
                            <th scope="col">Dygn</th>
                            <th scope="col">Temp</th>
                            <th scope="col">Vind</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="clickable-row" data-href="#">
                            <td><img src={test} alt=""></img></td>
                            <td>{weather.day}</td>
                            <td>{weather.temp}</td>
                            <td>{weather.windSpeed}m/s</td>
                        </tr>
                    </tbody>

                </table>
            </div>
        </div>

    )
}

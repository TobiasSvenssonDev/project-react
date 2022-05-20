import React, { useState } from 'react';
import axios from 'axios';
import test from './static/day.svg'
import jsonData from '.tempResponse.json'

export default function SmhiAPI() {
    const [weather, setWeather] = useState(todaysWeather);    

    function todaysWeather(){
        const smhiData = await getWeather();
        const dateTime = await getDateTime();
        const timeIndex = smhiData.timeSeries.indexOf(dateTime);
        const timeSerie = smhiData.timeSeries[timeIndex];
        const weatherObj = [{
            day: "Idag",
            forecast: timeSerie.parameters.indexOf('Wsymb2').values[0],
            lowTemp: "temp°",
            highTemp: "temp°",
            windSpeed: timeSerie.parameters.indexOf('WS').values[0]
        }];

        async function getDateTime(){
            const today = new Date();
            const todayTime = today.getFullYear() + "-" + today.getMonth() + "-" + today.getDate() + "T" + today.getHours() + ":00:00Z";
            //2022-05-19T11:00:00Z
    
            return todayTime
        }
        
        return weatherObj
        }
    }

    async function getWeather() {
        const url = 'https://opendata-download-metanalys.smhi.se/api/category/mesan1g/version/2/geotype/point/lon/16.158/lat/58.5812/data.json';

        await axios.get(url)
            .then(function (response) {

                console.log("SUCCESS");
                console.log(response.data)

                return response.data

            })
            .catch(function (error) {
                console.log(error + " FEL");
            });
    }



    return (
        <div>
            <h2>7-Dygnsprognos</h2>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">Dag</th>
                        <th scope="col">Dygn</th>
                        <th scope="col">L</th>
                        <th scope="col">H</th>
                        <th scope="col">Vind</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="clickable-row" data-href="#">
                        <td><img src={test} alt=""></img></td>
                        <td>20 Maj</td>
                        <td>14°</td>
                        <td>19°</td>
                        <td>4 m/s</td>
                        </tr>
                    </tbody>

                </table>    
                <button className="btn btn-lg btn-success" onClick={getWeather}>Get started</button>
            </div>

        </div>
        
    )
}

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Weather from './Weather';

export default function SmhiAPI(props) {
    const [weather, setWeather] = useState([]);

    //STÄDA BORT UTSKRIFT
    console.log(weather);

    useEffect(() => {
        const currentDate = new Date();
        const dateTimeToString = currentDate.getFullYear() + "-" + ('0' + (currentDate.getMonth() + 1)).slice(-2) + "-" + currentDate.getDate() + "T" + currentDate.getHours() + ":00:00Z";
        const weekday = currentDate.toLocaleDateString(undefined, { weekday: 'long' });
        const capitalWeekday = weekday.slice(0, 1).toUpperCase() + weekday.slice(1, weekday.length)
        let urlLongitude = 16.158
        let urlLatitude = 58.5812            

        const baseURL = "https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/"+urlLongitude+"/lat/"+urlLatitude+"/data.json"
        axios.get(baseURL).then((response) => {
            const SMHIData = [response.data]
            //STÄDA BORT UTSKRIFT
            console.log(SMHIData[0])
            const weatherData = SMHIData.map((tSerie) =>
                tSerie.timeSeries.filter((time) =>
                    time.validTime === dateTimeToString).map((parameter) =>
                        parameter.parameters.map((val) =>
                            val.values))
            );

            //STÄDA BORT UTSKRIFT
            console.log(weatherData[0] + "DATA")
            const weatherParameters = {
                "date": capitalWeekday,
                "temperature": weatherData[0][0][10],
                "windSpeed": weatherData[0][0][14],
                "weatherCode": weatherData[0][0][18]
            }

            setWeather(weatherParameters);
        });
    }, []);

    if (!weather) return null;

    return (
        <div>
            <h2>Vädret just nu</h2>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Dag</th>
                            <th scope="col">Väder</th>
                            <th scope="col">Temp</th>
                            <th scope="col">Vind</th>
                        </tr>
                    </thead>
                    <tbody>
                        <Weather weather={weather} />
                    </tbody>
                </table>
            </div>
        </div>
    )
}

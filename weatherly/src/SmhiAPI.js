import React from 'react';
import axios from 'axios';
import test from './static/day.svg'

const baseURL = "https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/16.158/lat/58.5812/data.json";
export default function SmhiAPI(props) {
    const [weather, setWeather] = React.useState([]);
    console.log(weather)
    console.log(props.referenceTime)

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            const SMHIData = [response.data]
            const weatherData = SMHIData.map((tSerie) =>
                tSerie.timeSeries.filter((time) =>
                    time.validTime == props.referenceTime).map((params) =>
                        params.parameters.map((val) =>
                            val.values))
            );
            const weatherParameters = {
                "temperature": weatherData[0][0][10],
                "windSpeed": weatherData[0][0][14],
                "weatherCode": weatherData[0][0][18]
            }

            setWeather(weatherParameters);
        });
    }, []);

    if (!weather) return null;

    return (<>

        <td>
            <img src={test} alt="" />
            {weather.weatherCode}
        </td>
        <td>
            {weather.temperature}
        </td>
        <td>
            {weather.windSpeed}m/s
        </td>
    </>
    )
}

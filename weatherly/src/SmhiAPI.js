import React from 'react';
import axios from 'axios';
import test from './static/day.svg'

const baseURL = "https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/16.158/lat/58.5812/data.json";
export default function SmhiAPI(props) {
    const [weather, setWeather] = React.useState(null);

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            console.log(response.data);
            setWeather(response.data);
        });
    }, []);

    if (!weather) return null;

    return (<>
        <td>
            <img src={test} alt="" />
            {weather.timeSeries[0].parameters[18].values[0]}
        </td>
        <td>
            {weather.timeSeries[0].parameters[10].values[0]}
        </td>
        <td>
            {weather.timeSeries[0].parameters[14].values[0]}m/s
        </td>
    </>
    )
}

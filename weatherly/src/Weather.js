import React from 'react'
import test from './static/day.svg'


function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./static', '')] = r(item); return images});
    return images;
  }
  
  const images = importAll(require.context('./static', false, /\.(png|jpe?g|svg)$/));
  console.log(images)

export default function Weather(props) {
    return (
        <tr>
            <td>
                {props.weather.date}
            </td>
            <td>
                <img src={test} alt="" />
                {props.weather.weatherCode}
            </td>
            <td>
                {props.weather.temperature}
            </td>
            <td>
                {props.weather.windSpeed}m/s
            </td>
        </tr>

    )
}

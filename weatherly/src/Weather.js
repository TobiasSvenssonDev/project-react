import React from 'react'

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./static', '')] = r(item); return images});
    return images;
  }
  
  const images = importAll(require.context('./static', false, /\.(png|jpe?g|svg)$/));
  console.log(images)

export default function Weather(props) {

    console.log(props.weather.weatherCode + "Väder")
    

    const myString = "./" + props.weather.weatherCode + ".svg"
    const myImgSrc = images[myString]
    
    return (
        <tr>
            <td>
                {props.weather.date}
            </td>
            <td>
            <img src={myImgSrc} alt="" />

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

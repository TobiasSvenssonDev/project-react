import React from 'react'
import test from './static/day.svg'
import WeatherList from './WeatherList';


function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./static', '')] = r(item); return images });
    return images;
}

const images = importAll(require.context('./static', false, /\.(png|jpe?g|svg)$/));
console.log(images)

export default function Weather(props) {

    const activityCode = props.weather.weatherCode

    return (
        <div>
            <h2>Vädret just nu</h2>

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
                </tbody>
            </table>
            <hr />
            <WeatherList activityCode={activityCode}/>
            
            
        </div>


    )
}

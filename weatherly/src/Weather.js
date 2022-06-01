import React from 'react'
import test from './static/day.svg'


function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./static', '')] = r(item); return images });
    return images;
}

const images = importAll(require.context('./static', false, /\.(png|jpe?g|svg)$/));
console.log(images)

export default function Weather(props) {
    return (
        <>
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
                            {props.weekday}
                        </td>
                        <td>
                            <img src={test} alt="" />
                            {props.weatherCode}
                        </td>
                        <td>
                            {props.temp}
                        </td>
                        <td>
                            {props.wind}m/s
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

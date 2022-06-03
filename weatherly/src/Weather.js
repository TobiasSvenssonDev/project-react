import React from 'react'
import Activity from './Activity';


function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./static', '')] = r(item); return images });
    return images;
}

const images = importAll(require.context('./static', false, /\.(png|jpe?g|svg)$/));


export default function Weather(props) {
    const activityCode = props.weatherCode    

    console.log(props.weatherCode + "Väder")
    const myString = "./" + props.weatherCode + ".svg"
    const myImgSrc = images[myString]
    
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
                        <img src={myImgSrc} alt="väderikon" />
                        </td>
                        <td>
                            {props.temp}°C
                        </td>
                        <td>
                            {props.wind}m/s
                        </td>
                    </tr>
                </tbody>
            </table>
            <Activity activityCode={activityCode} />
        </>
    )
}

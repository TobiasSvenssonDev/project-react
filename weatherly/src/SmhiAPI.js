import React, { useState } from 'react';
import axios from 'axios';

export default function SmhiAPI() {

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
        <div><h1>SmhiAPI.js komponent</h1>
            <div>
                <button className="btn btn-lg btn-success" onClick={getWeather}>Get started</button>
            </div>

        </div>
    )
}

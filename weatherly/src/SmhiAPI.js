import React, { useState } from 'react';
import axios from 'axios';

export default function SmhiAPI() {

    async function getWeather() {
        const url = '';

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
        <div><h1>APOD API</h1>
            <div>
                <button className="btn btn-lg btn-success" onClick={getWeather}>Get started</button>
            </div>

        </div>
    )
}

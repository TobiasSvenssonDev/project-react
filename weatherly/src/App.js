import React from "react";
import WeatherList from "./WeatherList";
import SmhiAPI from "./SmhiAPI";

function App() {
  const weekday = new Date().toLocaleDateString(undefined, { weekday: 'long' });
  const capital = weekday.slice(0,1).toUpperCase() + weekday.slice(1, weekday.length)

  return (
    <>
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-2">
          </div>
          <div className="col">
            <div className="text-center">
              <h1>Weatherly</h1>
                <strong>Welcome to Weatherly!</strong>
                <p>See the current weather in your location and find suggestions for activities suitable for the weather in yur area, enjoy!</p>
            </div>
            <br></br>
            <hr></hr>
            <div>
              <h2>7-Dygnsprognos</h2>
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
                    <tr>
                      <td>
                        {capital}
                      </td>
                      <SmhiAPI />
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <WeatherList />
          </div>
          <div className="col-md-2">
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
export default App;
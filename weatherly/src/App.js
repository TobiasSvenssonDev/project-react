import React from "react";
import WeatherList from "./WeatherList";
import SmhiAPI from "./SmhiAPI";

function App() {
  const weekday = new Date().toLocaleDateString(undefined, { weekday: 'long' });

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-2">
          </div>
          <div className="col">
            <div className="text-center">
              <h1>Weatherly</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                optio, eaque rerum!
              </p>
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
                    <td>
                      {weekday}
                    </td>
                    <SmhiAPI />
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
  );
}
export default App;
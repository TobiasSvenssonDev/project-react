import React from "react";
import WeatherList from "./WeatherList";
import SmhiAPI from "./SmhiAPI";
import Home from "./Map";

function App() {
  
  
  
 

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
            <SmhiAPI />                 
            <WeatherList />
            <Home />
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
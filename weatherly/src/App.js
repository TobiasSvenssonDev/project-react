import React, { Component } from "react";
import axios from 'axios';
import Weather from "./Weather";
import loading from "./animated/happy-sun.gif"

class App extends Component {
  state = {
    lat: undefined,
    lon: undefined,
    temp: undefined,
    wind: undefined,
    weatherCode: undefined,
    status: false
  }

  getPosition = () => {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  }

  getWeather = async (latitude, longitude) => {
    const currentDate = new Date();
    //const dateTimeToString = currentDate.getFullYear() + "-" + ('0' + (currentDate.getMonth() + 1)).slice(-2) + "-" + currentDate.getDate() + "T" + currentDate.getHours() + ":00:00Z";
    const weekday = currentDate.toLocaleDateString(undefined, { weekday: 'long' });
    const capitalWeekday = weekday.slice(0, 1).toUpperCase() + weekday.slice(1, weekday.length)

    const baseURL = (`https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/${parseFloat(longitude.toFixed(2))}/lat/${parseFloat(latitude.toFixed(2))}/data.json`)
    await axios.get(baseURL).then((response) => {
      console.log("SUCCESS")
      console.log(response.data.timeSeries[2].parameters[10].values[0])
      this.setState({
        lat: latitude,
        lon: longitude,
        temp: response.data.timeSeries[2].parameters[10].values[0],
        wind: response.data.timeSeries[2].parameters[14].values[0],
        weatherCode: response.data.timeSeries[2].parameters[18].values[0],
        weekday: capitalWeekday,
        status: true
      })
    });
  }

  componentDidMount() {
    this.getPosition()
      .then((position) => {
        this.getWeather(position.coords.latitude, position.coords.longitude)
      })
      .catch((err) => {
        this.setState({ errorMessage: err.message });
      });
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    const { weekday, temp, wind, weatherCode, status } = this.state;
    if (!status) {
      return (<div className="h-100 d-flex align-items-center justify-content-center">
      <img src={loading} alt="Loading" /></div>)
    } else {
      return (
        <div className="App">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="text-center">
                <h1>WEATHERLY</h1>
                <strong>Välkommen till Weatherly!</strong>                
                <p>Få det senaste vädret direkt där du befinner dig och få föreslagna aktiviteter som passar väderleksrapporten, ha det så kul!</p>                  
                  <div>
                    <Weather weekday={weekday} temp={temp} wind={wind} weatherCode={weatherCode} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>        
      );
    }
  }
}
export default App;


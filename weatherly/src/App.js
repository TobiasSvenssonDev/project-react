import SmhiAPI from "./SmhiAPI";
import WeatherList from "./WeatherList";


function App() {
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
            <SmhiAPI />
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
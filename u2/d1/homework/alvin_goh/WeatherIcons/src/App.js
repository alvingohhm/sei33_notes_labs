import React from "react";
import "./styles.css";
import WeatherIcons from "./components/WeatherIcons";
import weatherData from "./data/weatherData";

function App() {
  return (
    <section className="App">
      {weatherData.map((item, index) => {
        return <WeatherIcons data={item} key={index} />;
      })}
    </section>
  );
}

export default App;

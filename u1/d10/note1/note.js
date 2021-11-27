"use strict";
// const req = fetch("https://goweather.herokuapp.com/weather/singapore")
//   .then(function (response) {
//     // console.log(response);
//     return response.json(); //async
//   })
//   .then(function (json_data) {
//     // console.log(json_data);
//     const h2 = document.getElementById("temperature");
//     h2.innerText = json_data.temperature;
//   });

// console.log(req);

// const getCountryWeather = (country) => {
//   fetch(`https://goweather.herokuapp.com/weather/${country}`)
//     .then((response) => response.json())
//     .then((json_data) => console.log(json_data))
//     .catch((e) => console.log("error encountered", e));
// };

// getCountryWeather("singapore");

// async / await
const getCountryWeatherAsync = async function (country) {
  try {
    const url = `https://goweather.herokuapp.com/weather/${country}`;
    const res = await fetch(url);
    const data = await res.json();
    return data;
    // // return Promise.resolve(res.json());
    // console.log(data);
  } catch (err) {
    console.log(err.message);
  }
};

// (async () => {
//   console.log(await getCountryWeatherAsync("singapore"));
// })();

// IIFE
// (function(){})()

// async function () {
//   const data = await getCountryWeatherAsync("singapore");
//   console.log(data.temperature);
// }

// (()=>{})()

const get3CountriesWeather = async (c1, c2, c3) => {
  try {
    const data = await Promise.all([
      getCountryWeatherAsync(c1),
      getCountryWeatherAsync(c2),
      getCountryWeatherAsync(c3),
    ]);

    console.log(data.map((d) => d.temperature));
  } catch (err) {
    console.log(err.message);
  }
};

get3CountriesWeather("singapore", "vietnam", "thailand");

// (async () => {
//   console.log(await getCountryWeatherAsync("singapore"));
// })();

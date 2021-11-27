// const sqlQueryString =
//   "SELECT borough, descriptor, agency, resolution_description WHERE agency='NYPD' AND borough IN ('BROOKLYN', 'MANHATTAN', 'QUEENS', 'BRONX', 'STATEN ISLAND') ORDER BY descriptor";

const brooklyn = [];
const manhattan = [];
const queens = [];
const bronx = [];
const staten = [];

const getNYCData = async (sqlString) => {
  try {
    const api = `https://data.cityofnewyork.us/resource/erm2-nwe9.json?$query=${sqlString}`;

    const loader = document.querySelector(".loader");
    loader.style.display = "block";
    const res = await fetch(api);
    const data = await res.json();

    data.map((item) => {
      switch (item.borough.toLowerCase()) {
        case "brooklyn":
          brooklyn.push(item);
          break;
        case "manhattan":
          manhattan.push(item);
          break;
        case "queens":
          queens.push(item);
          break;
        case "bronx":
          bronx.push(item);
          break;
        case "staten island":
          staten.push(item);
          break;
        default:
          break;
      }
    });
    loader.style.display = "none";
    console.log(manhattan[0]);
  } catch (err) {
    console.log(err);
  }
};

getNYCData(sqlQueryString);

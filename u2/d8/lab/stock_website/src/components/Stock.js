import React from "react";
import { useParams } from "react-router-dom";

const Stock = (props) => {
  const params = useParams;
  const { stockData } = props;
  console.log(stockData);
  // const stock =
  //   "https://financialmodelingprep.com/api/v3/profile/AAPL?apikey=YOUR KEY";

  return (
    <div>
      <h3>Name: Stock Name Goes Here</h3>
      <h3 className="price">Price: Stock Last Price Goes Here</h3>
    </div>
  );
};

export default Stock;

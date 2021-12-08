import React from "react";
import { useParams } from "react-router-dom";

const Stock = (props) => {
  const params = useParams();
  const { stockData } = props;

  // const stock =
  //   "https://financialmodelingprep.com/api/v3/profile/AAPL?apikey=YOUR KEY";

  const { name, lastPrice } = stockData.find(
    (stock) => stock.symbol === params.symbol
  );

  return (
    <div>
      <h3>Name: {name}</h3>
      <h3 className="price">Price: {lastPrice}</h3>
    </div>
  );
};

export default Stock;

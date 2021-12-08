import React, { useContext } from "react";
import DataContext from "../context/data_context";
import { Link } from "react-router-dom";

function Dashboard() {
  const { stockData } = useContext(DataContext);
  // const activeStocks =
  //   "https://financialmodelingprep.com/api/v3/stock/actives?apikey=YOUR KEY";
  const stockList = stockData.map((item) => {
    return (
      <tr>
        <td>{item.name}</td>
        <Link key={item.symbol} to={`/stocks/${item.symbol}`}>
          <td>{item.symbol}</td>
        </Link>
      </tr>
    );
  });

  return (
    <>
      <h1>Dashboard Page</h1>
      <table>
        <tbody>
          <tr>
            <th>Company Name</th>
            <th>Symbol</th>
          </tr>
          {stockList}
        </tbody>
      </table>
    </>
  );
}

export default Dashboard;

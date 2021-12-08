import React, { useContext } from "react";
import DataContext from "../context/data_context";
import { Link } from "react-router-dom";

function Dashboard() {
  const { stockData } = useContext(DataContext);
  // const activeStocks =
  //   "https://financialmodelingprep.com/api/v3/stock/actives?apikey=YOUR KEY";
  const stockList = stockData.map((item) => {
    return (
      <tr key={item.symbol}>
        <td>{item.name}</td>
        <td>
          <Link to={`/stocks/${item.symbol}`}>{item.symbol}</Link>
        </td>
      </tr>
    );
  });

  return (
    <>
      <h1>Dashboard Page</h1>
      <table>
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Symbol</th>
          </tr>
        </thead>
        <tbody>{stockList}</tbody>
      </table>
    </>
  );
}

export default Dashboard;

import React, { useEffect, useState } from "react";
import "./App.css";
import Coin from "./Coin";
import axios from "axios";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
        console.table(res.data);
        console.log(typeof res.data.market_cap);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleCoin = (event) => {
    setSearch(event.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="container">
      <div className="coin_search">
        <h1 className="coin_search_text">Search your coin</h1>
        <form>
          <input
            type="text"
            className="coin_input"
            placeholder="Provide the coin name"
            onChange={handleCoin}
          />
        </form>
      </div>
      {filteredCoins.map((coin) => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            marketcap={coin.market_cap}
            price={coin.current_price}
            pricechange={coin.price_change_percentage_24h}
            // volume={coin.total_volume}
          />
        );
      })}
    </div>
  );
}

export default App;

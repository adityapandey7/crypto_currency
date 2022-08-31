import React from "react";
import "./Coin.css";

function Coin(props) {
  console.log(typeof props.marketcap);
  return (
    <div className="coin_container">
      <div className="coin_row">
        <div className="coin">
          <img src={props.image} alt={props.name} />
          <h3>{props.name}</h3>
        </div>
        <div className="coin_data">
          <p className="coin_price">Rs. {props.price}</p>
          {props.pricechange < 0 ? (
            <p className="coin_percent red">{props.pricechange.toFixed(2)}%</p>
          ) : (
            <p className="coin_percent green">
              {props.pricechange.toFixed(2)}%
            </p>
          )}
          <p className="coin_marketcap">
            Mkt Cap: Rs.{parseFloat(props.marketcap).toLocaleString("en-US")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Coin;

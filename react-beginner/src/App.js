import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [value, setValue] = useState();
  const [money, setMoney] = useState();
  const [index, setIndex] = useState("");
  const [selectedBool, setSelectedBool] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const Changed = (event) => {
    setValue(event.target.value);
    console.log("changed");
  };

  const Submitted = (event) => {
    event.preventDefault();
    setMoney(value);
  };
  const Selected = (event) => {
    setIndex(parseInt(event.target.value));
    setSelectedBool(true);
  };
  useEffect(() => {
    console.log("loading");
    setLoading(true);
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => setCoins(json.slice(0, 2000)));
    console.log("loaded");
    setLoading(false);
  }, [refresh]);
  return (
    <div>
      <h1>How many Coins you can buy {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <form onSubmit={Submitted}>
            <input
              onChange={Changed}
              value={parseInt(value)}
              type="number"
              placeholder="Your money"
            ></input>
            <button>Enter</button>
          </form>
          <select onChange={Selected}>
            <option>--Select your coin--</option>
            {coins.map((item, index) => (
              <option value={index} key={index}>
                {item.name} : {item.quotes.USD.price}
              </option>
            ))}
          </select>
          <button onClick={() => setRefresh((prev) => (prev = !prev))}>
            새로고침
          </button>
          <hr />
          <h2>
            ${money} ={" "}
            {selectedBool ? money / coins[index].quotes.USD.price : ""}{" "}
            {selectedBool ? coins[index].symbol : ""}
          </h2>
        </div>
      )}
    </div>
  );
}

export default App;

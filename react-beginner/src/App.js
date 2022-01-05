import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0) ;
  const [keyword, setKeyword] = useState('');
  const Clicked =()=>setCounter((prev)=>prev+1);
  const Changed =(event) =>setKeyword(event.target.value);
  useEffect(()=>{
    if(keyword !== "" && keyword.length > 4){console.log("serch for", keyword)};
  }, [keyword]);
  return (
    <div>
      <input value={keyword} onChange={Changed} type="text" placeholder="search.."></input>
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={Clicked} text={"Continue"}>Click me</button>
    </div>
  );
}

export default App;

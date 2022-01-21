import { useState } from "react";
import UserInput from "./component/UserInput";
import UserList from "./component/UserList";
import Alert from "./component/Alert";
import ErrorModal from "./component/UI/ErrorModal";
function App() {
  const [userData, setUserData] = useState([]);
  const [invalid, setInvalid] = useState(false);
  let warningTitle = "Invalid Input";
  const [warningText, setWarningText] = useState("");
  const inputHandler = (data) => {
    console.log(data);
    if (data.name === "" || data.age === "") {
      setInvalid(true);
      setWarningText("You didn't write Information");
    } else {
      if (parseInt(data.age) <= 0) {
        setInvalid(true);
        setWarningText("Age should be larger than 0");
      } else {
        setUserData((userData) => [...userData, data]);
        setInvalid(false);
      }
    }
  };
  const setOkay = () => {
    setInvalid(false);
  };
  return (
    <div className="App">
      {invalid && (
        <ErrorModal onOkay={setOkay} title={warningTitle} text={warningText} />
      )}
      <UserInput onInput={inputHandler} />
      <UserList data={userData} />
    </div>
  );
}

export default App;

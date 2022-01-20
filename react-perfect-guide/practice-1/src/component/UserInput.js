import React, { useState } from "react";
import Card from "./UI/Card.js";
import Button from "./UI/Button.js";
const UserInput = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    const userData = { name: userName, age: userAge };
    props.onInput(userData);
    setUserAge("");
    setUserName("");
  };

  const userNameHandler = (event) => {
    console.log(event);
    setUserName(event.target.value);
    console.log(userName);
  };
  const userAgeHandler = (event) => {
    setUserAge(event.target.value);
  };

  return (
    <Card>
      <form onSubmit={submitHandler}>
        <label>UserName</label>
        <input type="text" onChange={userNameHandler} value={userName}></input>
        <label>Age (Years)</label>
        <input type="number" onChange={userAgeHandler} value={userAge}></input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default UserInput;

import React from "react";
import style from "./UserData.module.css";
const UserData = (props) => {
  return (
    <div
      className={style.box}
    >{`${props.data.name} (${props.data.age} years old)`}</div>
  );
};

export default UserData;

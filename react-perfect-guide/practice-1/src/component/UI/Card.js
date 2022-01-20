import React from "react";
import style from "./Card.module.css";
const Card = (props) => {
  return (
    <div type={props.type} className={`${style.card} ${props.className}`}>
      {props.children}
    </div>
  );
};

export default Card;

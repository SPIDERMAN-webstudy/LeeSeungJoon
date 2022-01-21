import Card from "./Card";
import Button from "./Button";
import style from "./ErrorModal.module.css";
import Wrapper from "../Helpers/Wrapper";
import ReactDOM from "react-dom";
import React from "react";
const Backdrop = (props) => {
  return <div onClick={props.onOkay} className={style.backdrop} />;
};

const ModalOverlay = (props) => {
  return (
    <Card className={style.modal}>
      <header className={style.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={style.content}>
        <p>{props.text}</p>
      </div>
      <footer className={style.actions}>
        <Button onClick={props.onOkay}>확인</Button>
      </footer>
    </Card>
  );
};
const ErrorModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onOkay={props.onOkay} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          onOkay={props.onOkay}
          title={props.title}
          text={props.text}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default ErrorModal;

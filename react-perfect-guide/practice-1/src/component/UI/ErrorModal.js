import Card from "./Card";
import Button from "./Button";
import style from "./ErrorModal.module.css";
const ErrorModal = (props) => {
  const okayHandler = () => {
    props.onOkay(false);
  };
  return (
    <div className={style.backdrop}>
      <Card className={style.modal}>
        <header className={style.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={style.content}>
          <p>{props.text}</p>
        </div>
        <footer className={style.actions}>
          <Button onClick={okayHandler}>확인</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;

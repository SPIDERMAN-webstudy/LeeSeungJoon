import Card from "./UI/Card";
import style from "./Alert.module.css";
import Button from "./UI/Button";
const Alert = (props) => {
  const okayHandler = () => {
    props.onOkay(false);
  };
  return (
    <Card>
      <div className={style.container}>
        <h1>{props.title}</h1>
        <h3>{props.text}</h3>
        <Button onClick={okayHandler}>Okay</Button>
      </div>
    </Card>
  );
};

export default Alert;

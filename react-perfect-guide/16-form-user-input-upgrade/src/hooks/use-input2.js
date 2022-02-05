import { useState } from "react";
const useInput2 = (validateFunc) => {
  const [input, setInput] = useState("");
  const [touched, setTouched] = useState(false);

  let inputValid = validateFunc(input);

  const inputChangeHandler = (event) => {
    setInput(event.target.value);
  };

  const inputBlurHandler = () => {
    setTouched(true);
  };

  return {
    setInput,
    input,
    setTouched,
    touched,
    inputValid,
    inputChangeHandler,
    inputBlurHandler,
  };
};

export default useInput2;

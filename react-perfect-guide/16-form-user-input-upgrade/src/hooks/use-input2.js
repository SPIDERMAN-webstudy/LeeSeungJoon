import { useState, useReducer } from "react";

const initialInputState = {
  value: "",
  isTouched: false,
};

const inputReducerHandler = (state, action) => {
  if (action.type === "INPUT") {
    state.value = action.value;
  }
  if (action.type === "TOUCH") {
    state.isTouched = true;
  }
  if (action.type === "RESET") {
    state.value = "";
    state.isTouched = false;
  }

  return state;
};
const useInput2 = (validateFunc) => {
  const [inputState, dispatchInput] = useReducer(
    inputReducerHandler,
    initialInputState
  );

  let inputValid = validateFunc(inputState.value);

  const inputChangeHandler = (event) => {
    dispatchInput({ type: "INPUT", value: event.target.value });
  };

  const inputBlurHandler = () => {
    dispatchInput({ type: "TOUCH" });
  };

  const reset = () => {
    dispatchInput({ type: "RESET" });
  };
  let input = inputState.value;
  let touched = inputState.isTouched;
  return {
    input,
    touched,
    inputValid,
    inputChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput2;

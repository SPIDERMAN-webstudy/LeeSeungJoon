import { useState } from "react";
import useInput2 from "../hooks/use-input2";
const BasicForm = (props) => {
  const {
    input: firstNameInput,
    inputValid: fisrtNameInputValid,
    touched: firstNameTouched,
    inputChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameInputBlurHandler,
    reset: firstNameReset,
  } = useInput2((input) => input.trim() !== "");

  const {
    input: lastNameInput,
    inputValid: lastNameInputValid,
    touched: lastNameTouched,
    inputChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameInputBlurHandler,
    reset: lastNameReset,
  } = useInput2((input) => input.trim() !== "");

  const {
    input: emailInput,
    inputValid: emailInputValid,
    touched: emailTouched,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: emailReset,
  } = useInput2((input) => input.includes("@"));

  let formIsValid =
    fisrtNameInputValid && lastNameInputValid && emailInputValid;
  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
    console.log(firstNameInput);
    console.log(lastNameInput);
    console.log(emailInput);
    firstNameReset();
    lastNameReset();
    emailReset();
  };

  const firstNameInvalidClass =
    firstNameTouched && !fisrtNameInputValid ? "invalid" : "";
  const lastNameInvalidClass =
    lastNameTouched && !lastNameInputValid ? "invalid" : "";
  const emailInvalidClass = emailTouched && !emailInputValid ? "invalid" : "";
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={"form-control " + firstNameInvalidClass}>
          <label htmlFor="name">First Name</label>
          <input
            onChange={firstNameChangeHandler}
            onBlur={firstNameInputBlurHandler}
            type="text"
            id="name"
            value={firstNameInput}
          />
        </div>
        <div className={"form-control " + lastNameInvalidClass}>
          <label htmlFor="name">Last Name</label>
          <input
            onChange={lastNameChangeHandler}
            onBlur={lastNameInputBlurHandler}
            type="text"
            id="name"
            value={lastNameInput}
          />
        </div>
      </div>
      <div className={"form-control " + emailInvalidClass}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          onChange={emailChangeHandler}
          onBlur={emailInputBlurHandler}
          type="text"
          id="name"
          value={emailInput}
        />
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;

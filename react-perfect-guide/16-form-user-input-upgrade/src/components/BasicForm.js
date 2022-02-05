import { useState } from "react";
import useInput2 from "../hooks/use-input2";
const BasicForm = (props) => {
  const {
    setInput: setFirstNameInput,
    input: firstNameInput,
    inputValid: fisrtNameInputValid,
    setTouched: setFirstNameTouched,
    touched: firstNameTouched,
    inputChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameInputBlurHandler,
  } = useInput2((input) => input.trim() !== "");

  const {
    setInput: setLastNameInput,
    input: lastNameInput,
    inputValid: lastNameInputValid,
    setTouched: setLastNameTouched,
    touched: lastNameTouched,
    inputChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameInputBlurHandler,
  } = useInput2((input) => input.trim() !== "");

  const {
    setInput: setEmailInput,
    input: emailInput,
    inputValid: emailInputValid,
    setTouched: setEmailTouched,
    touched: emailTouched,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
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

    setFirstNameInput("");
    setLastNameInput("");
    setEmailInput("");
    setFirstNameTouched(false);
    setLastNameTouched(false);
    setEmailTouched(false);
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

import useInput from "../hooks/useInput";

const BasicForm = (props) => {
  const {
    value: enteredFirstName,
    isValid: enteredFirstNameIsValid,
    hasError: nameFirstInputHasError,
    valueChangeHandler: nameFirstChangedHandler,
    inputBlurHandler: nameFirstBlurHandler,
    reset: resetFirstNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: nameLastInputHasError,
    valueChangeHandler: nameLastChangedHandler,
    inputBlurHandler: nameLastBlurHandler,
    reset: resetLastNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  let formIsValid = false;

  if (
    enteredEmailIsValid &&
    enteredFirstNameIsValid &&
    enteredLastNameIsValid
  ) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    console.log(enteredFirstName);
    console.log(enteredLastName);
    console.log(enteredEmail);

    resetFirstNameInput();
    resetLastNameInput();
    resetEmailInput();
  };

  const firstNameInputClasses = nameFirstInputHasError
    ? "form-control invalid"
    : "form-control";
  const lastNameInputClasses = nameLastInputHasError
    ? "form-control invalid"
    : "form-control";
  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={firstNameInputClasses}>
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            onChange={nameFirstChangedHandler}
            onBlur={nameFirstBlurHandler}
            value={enteredFirstName}
          />
          {nameFirstInputHasError && <p className='error-text'>please enter a first name.</p>}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            onChange={nameLastChangedHandler}
            onBlur={nameLastBlurHandler}
            value={enteredLastName}
          />
          {nameLastInputHasError && <p className='error-text'>please enter a last name.</p>}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="email"
          id="email"
          onChange={emailChangedHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && <p className='error-text'>please enter your email id.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;

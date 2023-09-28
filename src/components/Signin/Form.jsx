import { useEffect, useState } from 'react';
import './Form.style.css';
import Joi from 'joi';
import useInput from '../hooks/useInput'
const Form = (props) => {
  const [user, setUser] = useState({
    email: '', 
    password: ''
  });  
  const schema = {
    email: Joi.string().email({tlds:  {allow: false}}).required(),
    password: Joi.string().pattern(new RegExp('^(?=.*[a-zA-Z0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$')).required()
  };

  const validateUser = () => {
      const { error } = Joi.object(schema).validate(user, {
          abortEarly: false, 
      });
      return error;
  };
  const {value: enteredEmail, 
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError, 
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler ,
    reset: resetEmailInput,
  } = useInput(value => value.includes('@'));
  const {
    value: enteredPassword, 
    isValid: enteredPasswordIsValid, 
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler, 
    reset: resetPasswordInput,
  } = useInput(value => value.trim() !== '');

  const addUserData = () =>{
    setUser(
      {
        ...user,
        email: enteredEmail,
        password: enteredPassword,
      }
    )
    props.onSaveUser(user);
      resetEmailInput();
      resetPasswordInput();
  }
  const checkValidationErrors = () =>{
    const validationError = validateUser();

    if (validationError) {
      // Handle validation errors
      console.log('Validation errors:', validationError.details);
    } else {
      // Form submission logic
      console.log('Form submitted');
    }
  }
  const onSubmitForm = (event) => {
    event.preventDefault();

    addUserData();

    console.log({ user });
    checkValidationErrors();
    
  }
  const validityInputClass = emailInputHasError ? "form-control is-invalid" :"form-control";
  return (
    <div>
      <h2 className="mt-4 f2-bold fs-1">Sign-in in our website now</h2>
      <div className="signin-form">
        <form onSubmit={onSubmitForm}>
              <div className="mb-4">
                <label htmlFor="exampleInputEmail1" className="form-label fw-semibold fs-6">Email address</label>
                <input value={enteredEmail}
                 onChange={emailChangedHandler} 
                 name='email' type="email"
                  className={validityInputClass} id="exampleInputEmail1" 
                  placeholder="test@gmail.com" aria-describedby="emailHelp"
                  onBlur={emailBlurHandler}/>
                {emailInputHasError && (<p className='error-text'>Email is not valid</p> )}
              </div>
              <div className="mb-4">
                <label htmlFor="exampleInputPassword1" className="form-label fw-semibold fs-6">Password</label>
                <input value={enteredPassword}
                 onChange={passwordChangeHandler}
                 onBlur={passwordBlurHandler}
                  name='password' type="password" 
                  className={validityInputClass} id="exampleInputPassword1"/>
                  {passwordInputHasError && (<p className='error-text'>Password must be at least 8 characters and at most 16 characters and include at least one capital letter, one small letter, one number and one symbol</p>)}
              </div>
              <button type="submit" className="btn btn-primary w-100">Submit</button>
          </form>
      </div>
    </div>
  )
}

export default Form

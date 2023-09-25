import { useState } from 'react';
import './signin.style.css';
import Joi from 'joi';

const Signin = () => {
  
  const [user, setUser] = useState({
    email: '',
    password: '',
  })
  const schema = {
    email: Joi.string().email({ tlds: false }).required(),
    password: Joi.string().pattern(new RegExp('^(?=.*[a-zA-Z0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$')).required()
};

const validateUser = () => {
    const { error } = Joi.object(schema).validate(user, {
        abortEarly: false, 
    });
    return error;
};
    const onSubmitForm = (event) => {
      event.preventDefault();
      console.log("submit");
      console.log({user});
     const validationError = validateUser();

        if (validationError) {
            // Handle validation errors
            console.log('Validation errors:', validationError.details);
        } else {
            // Form submission logic
            console.log('Form submitted');
        }
    }
    
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setUser({
          ...user,
          [name]: value,
      });
  };
 

  return (
    <div>
      <h2 className="mt-4 f2-bold fs-1">Sign-in in our website now</h2>
      <div className="signin-form">
        <form onSubmit={onSubmitForm}>
              <div className="mb-4">
                <label htmlFor="exampleInputEmail1" className="form-label fw-semibold fs-6">Email address</label>
                <input onChange={handleInputChange} name='email' type="email" className="form-control" id="exampleInputEmail1" placeholder="test@gmail.com" aria-describedby="emailHelp"/>
              </div>
              <div className="mb-4">
                <label htmlFor="exampleInputPassword1" className="form-label fw-semibold fs-6">Password</label>
                <input onChange={handleInputChange} name='password' type="password" className="form-control" id="exampleInputPassword1"/>
              </div>
              <button type="submit" className="btn btn-primary w-100">Submit</button>
          </form>
      </div>
    </div>
  )
}

export default Signin

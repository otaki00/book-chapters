import './Form.style.css';
import Joi from 'joi';
import { joiResolver } from '@hookform/resolvers/joi';
import { useForm } from 'react-hook-form';
import React from 'react';

export const Form = () => {

  const schema = Joi.object({
    email: Joi.string().email({ tlds: { allow: false } }).required(),
    password: Joi.string().pattern(new RegExp('^(?=.*[a-z])(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{8,16}$')).required().messages(
      {"string.base": `"" should be a type of 'text'`,
      "string.pattern.base": `password should be at least 8 character and must have at least one digit number, one symbol, one capital letter, one small letter`,
      "any.required": `"" is a required field`
    }
    )
  });
  
  const { register, handleSubmit, formState: { errors },
  } = useForm < FormData > ({ resolver: joiResolver(schema) });
  
  interface FormData {
    email: string,
    password: string,
  }

  const validityEmailInputClass = errors.email ? "form-control is-invalid" :"form-control";
  const validityPasswordInputClass = errors.password ? "form-control is-invalid" :"form-control";

  return (
    <div>
      <h2 className="mt-4 f2-bold fs-1">Sign-in in our website now</h2>
      <div className="signin-form">
        <form onSubmit={handleSubmit((data) => console.log(data))}>
          <div className="mb-4">
            <label htmlFor="exampleInputEmail1" className="form-label fw-semibold fs-6">Email address</label>
            <input
              {...register("email")} name='email' type="email" className={validityEmailInputClass} id="exampleInputEmail1" placeholder="test@gmail.com" aria-describedby="emailHelp" />
            {errors.email && <p className='error-text'>{errors.email.message}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="exampleInputPassword1" className="form-label fw-semibold fs-6">Password</label>
            <input
              {...register('password')}
              className={validityPasswordInputClass} id="exampleInputPassword1" name='password' type="password" />
            { errors.password && <p className='error-text'>{errors.password.message} </p>}
          </div>
          <button type="submit" className="btn btn-primary w-100">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form

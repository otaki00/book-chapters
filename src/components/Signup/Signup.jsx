import { useState } from 'react';
import Joi from 'joi';
import './signup.style.css';


const Signup = () => {

    const [user, setUser] = useState({})
    const schema = {
        username: Joi.string().min(6).max(16).required(),
        email: Joi.string().email().required(),
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

        const validationError = validateUser();

        if (validationError) {
            // Handle validation errors
            console.log('Validation errors:', validationError.details);
        } else {
            // Form submission logic
            console.log('Form submitted');
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUser({
            ...user,
            [name]: value,
        });
    };



    return (
        <>
            <h2 className='mt-4 f2-bold fs-1'> Sign-up in our website now  </h2>
            <div className="signup-form ">
                <form onSubmit={onSubmitForm}>
                    <div className="mb-4">
                        <label htmlFor="exampleInputEmail1" className="form-label fw-semibold fs-6">Username :</label>
                        <input onChange={handleInputChange} type="text" className="form-control" id="exampleUsername" placeholder='Omar ' />
                        <div id="emailHelp" className="form-text"></div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="exampleInputEmail1" className="form-label fw-semibold fs-6">Email address :</label>
                        <input onChange={handleInputChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='example@gmail.com' />
                        <div id="emailHelp" className="form-text"></div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="exampleInputPassword1" className="form-label fw-semibold fs-6 ">Password :</label>
                        <input onChange={handleInputChange} type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Submit</button>
                </form>
            </div>
        </>

    )
}

export default Signup

import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='container w-25'>
            <h2 className='my-3'>Please Register??</h2>
            <form>
                <input type="text" className='w-100 mb-3 p-2' name="name" placeholder='Name' required />
                <br />
                <input type="email" className='w-100 mb-3 p-2' name="email" id="" placeholder='Email' required />
                <br />
                <input type="password" className='w-100 mb-3 p-2' name="password" id="" placeholder='Password' required/>
                <br />
                <input type="submit" className='w-100 mb-3 p-2' value="Register" />
            </form>
            <p>Already Have an account ? Please <Link to="/login">Login</Link></p>
        </div>
    );
};

export default Register;
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    const handleLogin= event => {
        event.preventDefault();
        const eamil = event.target.email.value ;
        const password = event.target.password.value ;
    }

    return (
        <div className='container w-25 '>
            <h2 className='my-3'>Please Login!!</h2>
            <form onSubmit={handleLogin} className='mx-auto'>
                <input type="email"  className='w-100 mb-3 p-2' name="email" id="" placeholder='Email' required />
                <br />
                <input type="password" className='w-100 mb-3 p-2' name="password" id="" placeholder='Password' required />
                <br />
                <input type="submit" className='w-100 mb-3 p-2' value="Login" />
            </form>
            <p>New create a account ? <Link to="/register">Register</Link> </p>
            <p>Password ? <a href=""> Reast</a> </p>
        </div>
    );
};

export default Login;
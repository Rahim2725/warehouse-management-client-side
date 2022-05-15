import React from 'react';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SciolLogin from '../SciolLogin/SciolLogin';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
    const [user, loading, error] = useAuthState(auth);

    const handleLogin = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password);
    }

    if (user) {
        navigate(from, { replace: true });
    }

    if (loading) {
        return (
            <div class="text-center my-5">
                <div className="spinner-border my-5" role="status">
                    <span  className="sr-only my-7"></span>
                </div>
            </div>
        );
    }


    return (
        <div className='container w-25 '>
            <h2 className='my-3'>Please Login!!</h2>
            <form onSubmit={handleLogin} className='mx-auto'>
                <input type="email" className='w-100 mb-3 p-2' name="email" id="" placeholder='Email' required />
                <br />
                <input type="password" className='w-100 mb-3 p-2' name="password" id="" placeholder='Password' required />
                <br />
                <input type="submit" className='w-100 mb-3 p-2' value="Login" />
            </form>
            <p>New create a account ? <Link to="/register">Register</Link> </p>
            <p>Password ? <a href=""> Reast</a> </p>
            <p>{error?.message}</p>
            <SciolLogin></SciolLogin>
        </div>
    );
};

export default Login;
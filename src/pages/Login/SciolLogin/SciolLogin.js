import React from 'react';
import './SciolLogin.css'
import google from '../../../images/google.svg'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';

const SciolLogin = () => {
    
    const navigate = useNavigate();
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    const location = useLocation();
    
    let from = location.state?.from?.pathname || "/";
    console.log(user)

    if (user) {
        navigate(from, { replace: true });
    }

    return (
        <div className='mb-5 container'>
            <div className='or-div'>
                <div></div>
                <p>or</p>
                <div></div>
            </div>

            <button onClick={() => signInWithGoogle()} className='sign-google'>
                <img src={google} alt="" />
                <p >Sign With Google</p>
            </button>
        </div>
    );
};

export default SciolLogin;
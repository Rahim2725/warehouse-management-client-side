import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Register = () => {
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

      const createUser = event => {
          event.preventDefault();
          const name = event.target.name.value ;
          const email = event.target.email.value ;
          const password = event.target.password.value ;

          createUserWithEmailAndPassword(email, password);

      }

      if(user){
          navigate('/home')
      }


    return (
        <div className='container w-25'>
            <h2 className='my-3'>Please Register??</h2>
            <form onSubmit={createUser}>
                <input  type="text" className='w-100 mb-3 p-2' name="name" placeholder='Name' required />
                <br />
                <input type="email" className='w-100 mb-3 p-2' name="email" id="" placeholder='Email' required />
                <br />
                <input type="password" className='w-100 mb-3 p-2' name="password" id="" placeholder='Password' required/>
                <br />
                <input type="submit" className='w-100 mb-3 p-2' value="Register" />
            </form>
            <p>Already Have an account ? Please <Link to="/login">Login</Link></p>
            <p>{error?.message}</p>
        </div>
    );
};

export default Register;
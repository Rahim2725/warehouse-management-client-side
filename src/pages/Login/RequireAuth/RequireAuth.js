import React, { Children } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const RequireAuth = () => {
    const location = useLocation();
    const [user ] = useAuthState(auth);

    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return Children ;
};

export default RequireAuth;
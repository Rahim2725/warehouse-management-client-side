import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='not-found w'>
            <div >
                <h1>Not Found 404 </h1>
            </div>
            <Link to="/home"> Please Back To Home</Link>
        </div>
    );
};

export default NotFound;
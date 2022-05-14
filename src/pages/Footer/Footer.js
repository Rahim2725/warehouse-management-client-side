import React from 'react';

const Footer = () => {
    const newDate = new Date();
    const year = newDate.getFullYear();
    return (
        <footer>
            <div>
                <div>
                    <p><img src="" alt="" /> </p>
                    <p><img src="" alt="" /> </p>
                    <p><img src="" alt="" /> </p>
                </div>

                <div>
                    
                </div>
            </div>
            <h2> copyride &copy; {year}</h2>
        </footer>
    );
};

export default Footer;
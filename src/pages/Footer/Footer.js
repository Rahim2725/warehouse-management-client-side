import React from 'react';
import './Footer.css'
import logo1 from '../../images/logo/logo (1).png'
import logo2 from '../../images/logo/logo (2).png'
import logo3 from '../../images/logo/logo (3).png'
import facebook from '../../images/logo/facebook.png'
import linkedin from '../../images/logo/linkedin.png'
import twitter from '../../images/logo/twitter.png'
import github from '../../images/logo/github.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    const newDate = new Date();
    const year = newDate.getFullYear();
    return (
        <footer>
            <div className='container pt-5 info-container'>
                <div className='adders-area'>
                    <div className='d-flex algn-items-center  mb-3 '>
                        <img height={50} src={logo1} alt="" />
                        <p className='mb-0'>Nithpur <br /> Porsha Naogaon</p>
                    </div>
                    <div className='d-flex align-items-center mb-3 p-1'>
                        <img height={40} src={logo3} alt="" />
                        <p className='mb-0  '>+8801827251661</p>
                    </div>
                    <div className='d-flex algn-items-center mb-3 p-1'>
                        <img height={30} src={logo2} alt="" />
                        <p className='mb-0'>info.abdurrahim@gmail.com</p>
                    </div>
                </div>
                <div className='link-area'>
                    <h3> Smart Phone Shop</h3>
                   <Link to="/home">Home</Link>
                   <Link to="/products">Products</Link>
                   <Link to="/login">Login</Link>
                   <Link to="/register">Register</Link>
                   <Link to="/">About us</Link>
                </div>
                <div className='about-company'>
                    <h3>About Company</h3>
                    <p> Smart Phone Shop aims to be the most useful and trusted mobile phone info website of Bangladesh. The goal is to help the growing number of users and buyers with all the vital info they need about the phone industry and their gadgets. </p>
                     <div className='d-flex'>
                        <a href=""><img  height={45} src={facebook} alt="" /></a>
                        <a href=""><img  height={45} src={linkedin} alt="" /></a>
                        <a href=""><img  height={45} src={twitter} alt="" /></a>
                        <a href=""><img  height={45} src={github} alt="" /></a>
                    </div>
                </div>
            </div>
            <p className='text-center mb-0 py-3'> copyright&copy; {year}</p>
        </footer>
    );
};

export default Footer;
import React from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from '../../../images/banner/banner1.png'
import image2 from '../../../images/banner/banner3.png'
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner-area container my-5'>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image2}
                        alt="Second slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;
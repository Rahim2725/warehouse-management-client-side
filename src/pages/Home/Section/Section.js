import React from 'react';
import './Section.css'
import phone1 from '../../../images/phone1.png'
import phone2 from '../../../images/phone2.png'

const Section = () => {
    return (
        <div className=' container my-5'>
            <section>
                <div>
                    <img width="100%" src={phone1} alt="" />
                </div>
                <div>
                    <h1>Xiaomi Redmi Note 8 </h1>
                    <p>Xiaomi Redmi Note 8 comes with 6.3 inches Full HD+ IPS screen. It has a Full-View waterdrop-notch design. There is Gorilla Glass 5 protection on the front and backside. The back camera is of quad 48+8+2+2 MP with PDAF, ultrawide, depth sensor etc. and 4K video recording with gyro-EIS for 1080p recording....... </p>
                    <button>More Details</button>
                </div>
            </section>
            <section>
                <div className='phone-info-area-2'>
                    <h1>Apple iPhone 13 Pro Max</h1>
                    <p>Apple iPhone 13 Pro Max comes with a 6.7 inches Super Retina XDR OLED Full HD+ screen. It has a Apple iPhone notch design. The back camera is of quad 12+12+12 Megapixel + TOF 3D LiDAR scanner with powerful image processing capability and 4K video recording.......</p>
                    <button>More Details</button>
                </div>
                <div className='phone-img-area-2'>
                    <img width="100%" src={phone2} alt="" />
                </div>
            </section>
        </div>
    );
};

export default Section;
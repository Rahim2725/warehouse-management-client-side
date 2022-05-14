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
                    <p>Back in May, Xiaomi sub-brand Redmi announced it sold over 25 million units of the original Redmi Note 8 globally. And to celebrate the milestone, the company introduced a refreshed version of the Redmi Note 8, dubbed Redmi Note 8 2021, which we have with us today at the office for the full review.</p>
                    <button>More Details</button>
                </div>
            </section>
            <section>
                <div className='phone-info-area-2'>
                    <h1>Apple iPhone 13 Pro Max</h1>
                    <p>Phone 13 Pro was made for low light. The Wide camera adds a wider aperture and our largest sensor yet — and it leverages the LiDAR Scanner for Night mode portraits. Ultra Wide gets a wider aperture, a faster sensor, and all-new autofocus. And Telephoto now has Night mode.</p>
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
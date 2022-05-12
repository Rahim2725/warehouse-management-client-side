import React from 'react';
import phone1 from '../../../images/phone1.png'
import phone2 from '../../../images/phone2.png'

const Section = () => {
    return (
        <div className=' container my-5'>
            <section className='d-lg-flex justify-content-center align-items-center mb-3'>
                <div className='w-50'>
                    <img src={phone1} alt="" />
                </div>
                <div className='w-50'>
                    <h1> this section 1</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto rem commodi labore nesciunt! Id veniam similique fuga vero molestias aperiam nulla officia, maiores ex asperiores quo minima in incidunt blanditiis.</p>
                    <button>Live Demo</button>
                </div>
            </section>
            <section className='d-lg-flex justify-content-center align-items-center mb-3'>
                <div className='w-50'>
                    <h1>this section 2</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, sint! Laudantium, eius eaque nemo temporibus qui delectus amet repudiandae culpa, atque id quia illum quis commodi voluptas molestiae esse excepturi!</p>
                    <button>Live Demo</button>
                </div>
                <div className='w-50'>
                    <img src={phone2} alt="" />
                </div>
            </section>
        </div>
    );
};

export default Section;
import React from 'react';
import jasim from '../../jasim.jpg'
import './About.css';

const About = () => {
    return (
        <div className=' container d-flex justify-content-center align-items-center'>
            <div className='col-6 text-center'>
                <h1>MD JASIM FAQIR</h1>
                <h3>My goal</h3>
                <p>As a Web developer, I want to be able to design Web pages that can effectively display material
                    , provide interactivity,
                    and be artistically pleasing to the user. So I will finish the Web Development course timely.
                    Then I will be working hard and looking for a job. I want to create my carrier in this platform.</p>
            </div>
            <div className='col-6 my-4 img-container text-center'>
                <img className='img' src={jasim} alt="" />
            </div>
        </div>
    );
};

export default About;
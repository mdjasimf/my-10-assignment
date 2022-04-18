import React from 'react';
import gym from '../../gym.webp'

const Checkout = () => {
    return (
        <div>
            <h1 className='text-center'>WELCOME TO HEALTH COUCH</h1>
            <h2 className='text-center'>THANKS FOR BOOKING</h2>
            <div className='container text-center my-2'>
                <img className='img-fluid' src={gym} alt="" />
            </div>
            <div className='container'>
                <p className='text-center'>After a thorough analysis and
                    research of your health and physical condition and also
                    of your needs, I`ll be able to compose a detailed day-to-day programme of exercises
                    with the number of hours to spend on required body areas.
                    With this plan you`ll be able to do your exercises effectively even
                    without personal trainer`s supervision.</p>

            </div>
        </div>
    );
};

export default Checkout;
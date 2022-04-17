import React from 'react';
import './HomePageService.css'

const HomePageservice = ({ service }) => {
    const { name, img, details } = service;
    return (
        <div className='service col-4'>
            <div>
                <h4 className='text-danger'>{name}</h4>
                <img src={img} alt="" />
                <button className='w-100'>check out</button>
            </div>
        </div>
    );
};

export default HomePageservice;
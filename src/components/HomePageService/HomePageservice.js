import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePageService.css'

const HomePageservice = ({ service }) => {
    const navigate = useNavigate();
    const handleCkheckout = () => {
        navigate('/myservices');
    }
    const { name, img, details, price } = service;
    return (
        <div className='service col-4 ms-2'>
            <div>
                <img src={img} alt="" />
                <h4 className='text-danger'>{name}</h4>
                <h4>Price:${price}</h4>
                <p>{details}</p>
                <button onClick={handleCkheckout} className='w-100'>Checkout</button>
            </div>
        </div>
    );
};

export default HomePageservice;
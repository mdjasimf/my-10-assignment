import React, { useEffect, useState } from 'react';
import HomePageservice from '../HomePageService/HomePageservice';

const HomePageServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch(`servicesData.json`)
            .then(response => response.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h1 className='text-center my-4 text-danger'>Services</h1>
            <div className='w-25 mx-auto  my-2'>
                <div className=' border-bottom border-success'></div>
            </div>
            <div className='container mx-auto row my-4 d-flex'>
                {
                    services.map(service => <HomePageservice
                        key={service.id}
                        service={service}
                    ></HomePageservice>)
                }
            </div>
        </div>
    );
};

export default HomePageServices;
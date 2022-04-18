import React from 'react';
import success1 from '../../successphotos1.png';
import success2 from '../../successphotos2.jpg';

const ExtraSection = () => {
    return (
        <div>
            <h1 className='text-center text-danger'>Success Stories</h1>
            <div className='w-25 mx-auto  my-2'>
                <div className=' border-bottom border-success'></div>
            </div>
            <div className='container'>
                <div className='row d-flex justify-content-center'>
                    <div className='img-fluid col-lg-6 col-sm-12'>
                        <h4>Before</h4>
                        <img src={success1} alt="" />
                    </div>
                    <div className='img-fluid col-lg-6 col-sm-12'>
                        <h4> After</h4>
                        <img src={success2} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExtraSection;
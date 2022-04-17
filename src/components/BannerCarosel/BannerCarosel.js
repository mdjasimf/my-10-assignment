import React from 'react';
import { Carousel } from 'react-bootstrap';
import gymtraner1 from '../../images/gym trainer.webp'
import gymtraner2 from '../../images/gym trainer2.webp'
import gymtraner3 from '../../images/gym trainer3.webp'
import './BannerCarosel.css'

const BannerCarosel = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={gymtraner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Hi! I am smith</h3>
                        <p>I am your Health coach</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={gymtraner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Hi! I am smith</h3>
                        <p>I teach how to be healthy</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={gymtraner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Hi! I am smith</h3>
                        <p>You should believe that health is wealth</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default BannerCarosel;
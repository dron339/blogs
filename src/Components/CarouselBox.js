import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img3 from '../assets/3.jpg';
import img20 from '../assets/20.jpg';

class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item style={{ width: '1000px' }}>
                    <img
                        className="d-block w-100"
                        src={ img3 }
                        alt="Img3"
                    />
                    <Carousel.Caption>
                        <h3>Forest Image</h3>
                        <p>Hi, my name is Andrew</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ width: '1000px' }}>
                    <img
                        className="d-block w-100"
                        src={ img20 }
                        alt="Img20"
                    />
                    <Carousel.Caption>
                        <h3>Forest Image</h3>
                        <p>Hi, my name is Andrew</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default CarouselBox;
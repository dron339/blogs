import React, { Component } from 'react';
import CarouselBox from '../Components/CarouselBox.js';
import Carousel from 'react-bootstrap/Carousel';
import { Card, CardDeck, Container, Button } from 'react-bootstrap';


class Home extends Component {
    render() {
        return (
            <>
                <CarouselBox/>
                <Container>
                    <h2 className="text-center m-4">Our Team</h2>
                    <CardDeck>
                        <Card >
                            <Card.Img variant="top" 
                            src="https://images.pexels.com/photos/8290083/pexels-photo-8290083.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=500"
                            />
                            <Card.Body>
                                    <Card.Title>Назва</Card.Title>
                                    <Card.Text>
                                        Описание
                                    </Card.Text>
                                    <Button variant="primary">About</Button>
                            </Card.Body>
                        </Card>

                        <Card >
                            <Card.Img variant="top" 
                            src="https://images.pexels.com/photos/2705313/pexels-photo-2705313.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                            />
                            <Card.Body>
                                    <Card.Title>Назва</Card.Title>
                                    <Card.Text>
                                        Описание
                                    </Card.Text>
                                    <Button variant="primary">About</Button>
                            </Card.Body>
                        </Card>

                        <Card >
                            <Card.Img variant="top" 
                            src="https://images.pexels.com/photos/3773288/pexels-photo-3773288.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                            />
                            <Card.Body>
                                    <Card.Title>Назва</Card.Title>
                                    <Card.Text>
                                        Описание
                                    </Card.Text>
                                    <Button variant="primary">About</Button>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </Container>
            </>
        );
    }
}

export default Home;
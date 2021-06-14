
import React, { Component } from 'react';
import { Media, Container, Row, Col } from 'react-bootstrap';

class Blog extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md="9">
                        <Media className="mg-5">
                            <img 
                                width={150}
                                height={150}
                                className="mr-3"
                                src="https://webformyself.com/javascript/img/icon-js.png"    
                            />
                            <Media.Body>
                                <h5>Blog Post</h5>
                                <p>sfafagvsdhsbafbcsdaghfdsshagdjhgagsdjhagdasdsafgacytabhcfvjahcvjha</p>
                            </Media.Body>
                        </Media>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Blog;
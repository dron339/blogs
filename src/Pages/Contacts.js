import React, { Component } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

class Contacts extends Component {
    render() {
        return (
            <Container style={{ width: '500px' }}>
                <h1 className="text-center">Створення блогу</h1>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Тема блогу</Form.Label>
                        <Form.Control type="text" placeholder="Введіть тему"/>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Email door</Form.Label>
                        <Form.Control as="textarea" rows="3"/>
                    </Form.Group>

                    <Form.Group controlId="ForBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me pls" />
                    </Form.Group>
                    <Button variant="primary" type="submit">Ok</Button>

            </Container>
        );
    }
}

export default Contacts;





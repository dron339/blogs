import React, { Component } from 'react'
import {Form, Button, Container} from "react-bootstrap"

export default class Contacts extends Component {
    render() {
        return (
            <Container style={{ width: "500px"}}>
                <h1 className="text-center mt-3" >Вхід</h1>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Введіть електронну адресу</Form.Label>
                        <Form.Control type="email"/>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword" className="mt-4">
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control type="password"/>
                    </Form.Group>

                    <Button variant="primary" type="Submit" className="d-block mx-auto">Вхід</Button>

                </Form>
            </Container>
        )
    }
}
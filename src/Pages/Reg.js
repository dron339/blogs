import React, { Component } from 'react'
import {Form, Button, Container} from "react-bootstrap"

export default class Reg extends Component {
    render() {
        return (
            <Container style={{ width: "500px"}}>
                <h1 className="text-center mt-2" >Реєстрація</h1>
                <Form>
                    <Form.Group controlId="formBasic">
                        <Form.Label>Ім'я</Form.Label>
                        <Form.Control type="text"/>
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Електронна адреса</Form.Label>
                        <Form.Control type="email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword" className="mt-4">
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control type="password"/>
                    </Form.Group>

                    <Button variant="primary" type="Submit" className="d-block mx-auto">Зареєструватися</Button>

                </Form>
            </Container>
        )
    }
}

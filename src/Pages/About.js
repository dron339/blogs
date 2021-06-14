// import { Tab } from 'bootstrap';
import React, { Component } from 'react';
import { Container, Nav, Row, Tab, Col } from 'react-bootstrap';


class About extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id="ledt-tabs-example" defaultActivekey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-2">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Design</Nav.Link>                    
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Team</Nav.Link>                    
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Programming</Nav.Link>                    
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">Frameworks</Nav.Link>                    
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fifth">Libraries</Nav.Link>                    
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9} >
                            <Tab.Content className="mt-3" >
                                <Tab.Pane eventKey="first" >
                                    <img src="https://habrastorage.org/webt/hb/ax/p2/hbaxp2pydeotn8jtheg3ja1nvly.png"/>
                                    <p>
                                    Мы знаем, что ожидание заказа часто бывает утомительным, 
                                    особенно когда очень хочется кушать. Мы пристально следим за 
                                    пользовательским опытом, но над временем не властны и сократить 
                                    ожидание ниже объективного минимума не можем.
                                    </p>
                                </Tab.Pane>

                                <Tab.Pane eventKey="second">
                                    <img src="https://habrastorage.org/webt/xc/qg/ux/xcqgux8pmwfmk2l1opq0bxmeaym.png"/>
                                    <p>
                                    Мы знаем, что ожидание заказа часто бывает утомительным, 
                                    особенно когда очень хочется кушать. Мы пристально следим за 
                                    пользовательским опытом, но над временем не властны и сократить 
                                    ожидание ниже объективного минимума не можем.
                                    </p>
                                </Tab.Pane>

                                <Tab.Pane eventKey="third">
                                    <img src="https://habrastorage.org/getpro/habr/upload_files/055/80a/6a5/05580a6a5662942b93b5bff687bbcc09.jpg"/>
                                    <p>
                                    Мы знаем, что ожидание заказа часто бывает утомительным, 
                                    особенно когда очень хочется кушать. Мы пристально следим за 
                                    пользовательским опытом, но над временем не властны и сократить 
                                    ожидание ниже объективного минимума не можем.
                                    </p>
                                </Tab.Pane>
                                
                                <Tab.Pane eventKey="fourth">
                                    <img src="https://habrastorage.org/getpro/habr/upload_files/2fc/926/c87/2fc926c87135af005542788c33d65220.png"/>
                                    <p>
                                    Мы знаем, что ожидание заказа часто бывает утомительным, 
                                    особенно когда очень хочется кушать. Мы пристально следим за 
                                    пользовательским опытом, но над временем не властны и сократить 
                                    ожидание ниже объективного минимума не можем.
                                    </p>
                                </Tab.Pane>

                                <Tab.Pane eventKey="fifth">
                                    <img src="https://habrastorage.org/webt/y5/di/k6/y5dik6fciv7bzl6dx7p26tjsqes.jpeg"/>
                                    <p>
                                    Мы знаем, что ожидание заказа часто бывает утомительным, 
                                    особенно когда очень хочется кушать. Мы пристально следим за 
                                    пользовательским опытом, но над временем не властны и сократить 
                                    ожидание ниже объективного минимума не можем.
                                    </p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        );
    }
}

export default About;
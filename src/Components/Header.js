import React, { Component } from 'react';
import { Container, FormControl, Nav, Navbar, Form, Button, Dropdown } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch, Link, } from 'react-router-dom';
import logo from './logo192.png'

// import TextField from '@material-ui/core/TextField';
// import Dialog from 'react-bootstrap';
// import DialogActions from '@material-ui/core/DialogActions';

import Home from '../Pages/Home.js';
import About from '../Pages/About.js';
import Contacts from '../Pages/Contacts.js';
import Blog from '../Pages/Blog.js';
import Exit from '../Pages/Exit.js';
import Reg from '../Pages/Reg.js';


// const [open, setOpen] = React.useState(false);

// const handleClickOpen = () => {
//     setOpen(true);
// }

// const handleClose = () => {
//     setOpen(false);
// }
 


class Header extends Component {
    render() {
        return (
        <>
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            src={logo}
                            height="30"
                            width="30"
                            className="d-inline-block align-top"
                            alt="logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Головна</Nav.Link>
                            <Nav.Link href="/about">About As</Nav.Link>
                            <Nav.Link href="/contacts">Створення блогу</Nav.Link>
                            <Nav.Link href="/blog">Blog</Nav.Link>
                        </Nav>
                        <Form inline>
                            <FormControl
                                type="text"
                                placeholder=""
                                className="mr-sm-2"
                            />
                            <Button variant="outline-info">Пошук</Button>
                        </Form>

                    </Navbar.Collapse>
                </Container>





                <Button variant="success" href="/exit">Вхід</Button>

                {/* <Button variant="success" onClick={handleClickOpen}>Вхід</Button> */}
                    {/* <Dialog open={open} onclose={handleClose} aria-lablledby="form-dailog-title"> 
                        <DialogTitle id="form-dailog-title">Log in</DialogTitle>
                        <DialogConent>
                            <DialogConentText> Log to see </DialogConentText>

                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                lable="Email adress"
                                type="email"
                                fullWidth
                            />

                            <TextField
                                autoFocus
                                margin="dense"
                                id="pass"
                                lable="Password"
                                type="password"
                                fullWidth
                            />
                        </DialogConent>
                        <DialogAction>
                            <Button onClick={handleClose} color="primary">Cansel</Button>
                            <Button onClick={handleClose} color="primary">Log in</Button>
                        </DialogAction>
                    </Dialog> */}



                <Button variant="secondary" href="/reg">Реєстрація</Button>{'  '}


            </Navbar>
            
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/contacts" component={Contacts}/>
                    <Route exact path="/blog" component={Blog}/>
                    <Route exact path="/reg" component={Reg}/>
                    <Route exact path="/exit" component={Exit}/>
                </Switch>
            </Router>
        </>
        );
    }
}

export default Header;
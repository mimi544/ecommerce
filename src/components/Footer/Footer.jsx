import React from 'react';
import './Footer.css'

import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.png'

const Footer = () =>{
    return (
        <footer className='footer'>
            <Container>
                <Row>
                    <Col lg='4'>
                    <div className="logo">
                            <img src={logo} alt='logo'/>
                            <div>
                                <h1>Fast-Ecommerce</h1>
                            </div>
                    </div>
                    <p className='footer_text mt-4'>
                                Have a happy shoping with us.
                    </p>
                    </Col>

                    <Col lg='3'>
                    <div className='footer_quick-link'>
                            <h4 className='quick_links-title'>Top Categories</h4>
                            <ListGroup className='mb-3'>
                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='#'>
                                        Mobile Phones
                                    </Link>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='#'>
                                        Modern Sofa
                                    </Link>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='#'>
                                        Arm Chair
                                    </Link>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='#'>
                                        Smart Watches
                                    </Link>
                                </ListGroupItem>
                            </ListGroup>
                        </div>

                    </Col>

                    <Col lg='2'></Col>
                    <div className='footer_quick-link'>
                            <h4 className='quick_links-title'>Useful Links</h4>
                            <ListGroup className='mb-3'>
                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='#'>
                                        Mobile Phones
                                    </Link>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='#'>
                                        Modern Sofa
                                    </Link>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='#'>
                                        Arm Chair
                                    </Link>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='#'>
                                        Smart Watches
                                    </Link>
                                </ListGroupItem>
                            </ListGroup>
                        </div>

                    <Col lg='3'></Col>
                </Row>
            </Container>
        </footer>
    )
};
export default Footer;
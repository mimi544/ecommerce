import React from 'react';
import './Footer.css'

import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';


const Footer = () =>{


    const year = new Date().getFullYear()
    return (
        <footer className='footer'>
            <Container>
                <Row>
                    <Col lg='4'>
                    <div className="logo">
                            <div>
                                <h1 className='text-white'>Fast-Ecommerce</h1>
                            </div>
                    </div>
                    <p className='footer_text mt-4'>
                                Have a happy shoping with us.
                    </p>
                    </Col>

                    <Col lg='3'>
                    <div className='footer_quick-links'>
                            <h4 className='quick_links-title'>Top Categories</h4>
                            <ListGroup >
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

                    <Col lg='2'>
                    <div className='footer_quick-links'>
                            <h4 className='quick_links-title'>Useful Links</h4>
                            <ListGroup>
                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='/shop'>
                                        Shop
                                    </Link>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='/cart'>
                                        Cart
                                    </Link>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='/login'>
                                        Login
                                    </Link>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='#'>
                                        Privacy Policies
                                    </Link>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>
                    
                    <Col lg='3'>
                    <div className='footer_quick-links'>
                            <h4 className='quick_links-title'>Contact</h4>
                            <ListGroup className='footer_contact'>
                                <ListGroupItem className='ps-0 border-0 d-flex align-item-center gap-2'>
                                    <span><i className="ri-map-pin-user-line"></i></span>
                                    <p>123, Natunpullay , Near Sagar Sethu Club , Howrah - 711113</p>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0 d-flex align-item-center gap-2'>
                                    <span><i className="ri-phone-fill"></i></span>
                                    <p>+918240150887</p>
                                </ListGroupItem>

                                <ListGroupItem className='ps-0 border-0 d-flex align-item-center gap-2'>
                                    <span><i className="ri-mail-open-fill"></i></span>
                                    <p>ssohini50@gmail.com</p>
                                </ListGroupItem>

                            </ListGroup>
                        </div>
                    </Col>
                    <Col lg='12'>
                        <p className='footer_copyright'>Copyright {year} developed by Sohini Sen.All Rights are reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
};
export default Footer;
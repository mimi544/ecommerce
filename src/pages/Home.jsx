import React from 'react';

import Helmet from '../components/Helmet/Helmet';
import '../styles/Home.css'

import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img.png'

const Home = () => {

    const year = new Date ().getFullYear()
    return <Helmet title={"Home"}>
        <section className='hero_section'>
            <Container>
                <Row>
                    <Col lg='6' md='6'>
                        <div className='hero_content'>Trending Products In {year}<p className='hero_subtitle'></p>
                        <h2>
                            Make Your Interior More Minimalistic & Modern
                        </h2>
                        <p>Get your desireable interiors and make your home more beautiful with more fancy items</p>
                        <button className='buy_btn'>SHOP NOW</button>
                        </div>
                    </Col>
                    <Col lg='6' md='6'>
                        <div className='hero_img'>
                            <img src ={heroImg} alt =""/>

                        </div>

                    </Col>
                </Row>
            </Container>
        </section>
    </Helmet>
};

export default Home;

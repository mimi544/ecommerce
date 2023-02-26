import React from 'react';

import Helmet from '../components/Helmet/Helmet';
import '../styles/Home.css'

import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img.png'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Services from '../Services/Services';
import ProductsList from '../components/UI/ProductsList';
import products from '../assets/data/products';
import { useState } from 'react';

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
                        <motion.button whileTap={{scale:1.2}} className='buy_btn'><Link to='/shop'>SHOP NOW</Link></motion.button>
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
        <Services/>
        <section className='trending_products'>
            <Container>
                <Row>
                    <Col lg='12' className='text-center'>
                        <h2 className='section_title'>Trending Products</h2>
                    </Col>
                    <ProductsList/>
                </Row>
            </Container>
        </section>
    </Helmet>
};

export default Home;

import React from 'react';

import Helmet from '../components/Helmet/Helmet';
import '../styles/Home.css'

import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img.png'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Services from '../Services/Services';
import ProductsList from '../components/UI/ProductsList';
import Clock from '../components/UI/Clock';
import counterImg from '../assets/images/counter-timer-img.png'
import products from '../assets/data/products';
import { useState, useEffect } from 'react';

const Home = () => {


    const[trendingProducts,setTrendingProducts] = useState([])
    const[bestSalesProducts,setBestSalesProducts] = useState([])
    const [mobileProducts, setMobileProducts] =useState([])
    const [wirelessProducts, setWirelessProducts] =useState([])
    const [popularProducts, setPopularProducts] =useState([])

    const year = new Date ().getFullYear()

    useEffect(()=>{
        const filteredTrendingProducts = products.filter(item=> item.category ==='chair')

        const filteredBestSalesProducts = products.filter(item=> item.category ==='sofa')

        const filteredMobileProducts = products.filter(item=> item.category ==='mobile')

        const filteredWirelessProducts = products.filter(item=> item.category ==='wireless')

        const filteredPopularProducts = products.filter(item=> item.category ==='watch')


        setTrendingProducts(filteredTrendingProducts )
        setBestSalesProducts(filteredBestSalesProducts)
        setMobileProducts(filteredMobileProducts)
        setWirelessProducts(filteredWirelessProducts)
        setPopularProducts(filteredPopularProducts)
    },[])
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
                    <ProductsList data = {trendingProducts}/>
                </Row>
            </Container>
        </section>
        <section className='best_sales'>
            <Container>
            <Row>
                    <Col lg='12' className='text-center'>
                        <h2 className='section_title'>Best Sales</h2>
                    </Col>
                    <ProductsList data={bestSalesProducts}/>
                </Row>
            </Container>
        </section>
        <section className='timer_count'>
            <Container>
                <Row>
                    <Col lg='6' md='6'>
                    <div className='clock'>
                        <h4 className='text-white fs-6 mb-2'>Limited Offers</h4>
                        <h3 className='text-white fs-5 mb-3'>Quality Armchair</h3>
                    </div>
                        <Clock/>
                        <motion.button whileTap={{scale:1.2}} className='buy_btn store_btn'><Link to='/shop'>Visit Store</Link></motion.button>
                    </Col>
                    <Col lg='6' md='6' className='text-end'>
                        <img src={counterImg} alt=''/>
                    </Col>
                </Row>
            </Container>
        </section>
        <section className='new_arrival'>
            <Container>
                <Row>
                <Col lg='12' className='text-center'>
                        <h2 className='section_title'>New Arrivals</h2>
                    </Col>
                    <ProductsList data={mobileProducts}/>
                    <ProductsList data = {wirelessProducts}/>
                </Row>
            </Container>
        </section>
        <section className='popular_category'>
        <Container>
                <Row>
                <Col lg='12' className='text-center'>
                        <h2 className='section_title'>Popular In Category</h2>
                    </Col>
                    <ProductsList data={popularProducts}/>
                </Row>
            </Container>
        </section>
    </Helmet>
};

export default Home;

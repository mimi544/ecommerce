import React from 'react';

import { NavLink } from 'react-router-dom';
import './header.css'

import {motion} from 'framer-motion'

import logo from '../../assets/images/logo.png'
import userIcon from '../../assets/images/user-icon.png'



import { Container, Row} from 'reactstrap';

const nav_link = [
    
    {
        path:'home',
        display:'Home'
    },
    {
        path:'shop',
        display:'Shop'
    },
    {
        path:'cart',
        display:'Cart'
    },

]

const Header = () =>{
    return <header className="header">
        <Container>
            <Row>
                <div className="nav_wrapper">
                    <div className="logo">
                        <img src={logo} alt='logo'/>
                        <div>
                            <h1>Fast-Ecommerce</h1>
                            <p>Since 2017</p>
                        </div>
                    </div>

                    <div className="navigation">
                        <ul className="menu">
                            {
                                nav_link.map((item,index)=>(
                                    <li className='nav_item' key={index}><NavLink to={item.path} className= {(navClass)=>navClass.isActive ? 'nav_active':''}>{item.display}</NavLink></li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className="nav_icons">
                        <span className='fav_icon'><i className="ri-heart-3-fill"></i><span className='badge'>1</span></span>
                        <span className="cart_icon"><i className="ri-shopping-cart-2-fill"></i>
                        <span className='badge'>1</span>
                        </span>
                        <span><motion.img whileTap ={{scale: 1.1}}src={userIcon} alt=''/></span>
                    </div>
                    <div className="mobile_menu">
                        <span><i className="ri-menu-fill"></i></span>
                    </div>
                </div>

            </Row>
        </Container>
    </header>
    
};
export default Header;
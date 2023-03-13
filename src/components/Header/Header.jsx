import React, {useRef,useEffect} from 'react';

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

    const headerRef = useRef(null)
    const menuRef = useRef(null)
    const stickyHeaderFunc = ()=> {
        window.addEventListener('scroll',()=>{
            if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
                headerRef.current.classList.add('sticky_header')
            } else{
                headerRef.current.classList.remove('sticky_header')
            }
        })
    }

    useEffect(()=>{
            stickyHeaderFunc()

            return () => window.removeEventListener('scroll', stickyHeaderFunc)
    })

    const menuToggle = () => menuRef.current.classList.toggle('active_menu')

    return <header className="header" ref={headerRef}>
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

                    <div className="navigation" ref={menuRef} onClick={menuToggle}>
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
                        <span><motion.img whileTap ={{scale: 1.2}}src={userIcon} alt=''/></span>
                        <div className="mobile_menu">
                        <span onClick={menuToggle}><i className="ri-menu-fill"></i></span>
                    </div>
                    </div>
                    
                </div>

            </Row>
        </Container>
    </header>
    
};
export default Header;
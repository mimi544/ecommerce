import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Row } from 'reactstrap';
import useAuth from '../custom-hooks/useAuth';
import "../styles/admin-nav.css";
const admin_nav = [
  {
  display:'Dashboard',
  path:'/dashboard'
  },
  {
    display:'All-Products',
    path:'/dashboard/all-products'
  },
  {
    display:'Orders',
    path:'/dashboard/orders'
  },
  {
    display:'Users',
    path:'/dashboard/users'
  },

]
const AdminNav = () => {
  const{currentUser} = useAuth()
  return (
  <>
    <header className='admin_header'>
    <div className='admin_nav_top'>
      <Container>
        <div className='admin_nav_wrapper_top'>
          <div className='logo'style={{ padding: '10px' }}>
            <h2>
              Multimart
            </h2>
          </div>
          <div className="search_box">
            <input type='text'placeholder='Search'/>
            <span><i className="ri-search-eye-line"></i></span>
          </div>
          <div className="admin_nav_top_right">
            <span><i className="ri-notification-4-fill"style={{ padding: '10px' }}></i></span>
            <span><i className="ri-settings-6-fill"style={{ padding: '10px' }}></i></span>
            <img src={currentUser.photoURL} alt=''style={{ padding: '10px' }}/>
          </div>
        </div>
      </Container>
    </div>
    </header>
    <section className="admin_menu">
      <Container>
        <Row>
          <div className="admin_navigation">
            <ul className="admin_menu_list">
              {admin_nav.map((item,index) => (
                <li className="admin_menu_item" key={index}>
                  <NavLink to={item.path} className={navClass =>navClass.isActive ?'active_admin_menu':''}>{item.display}</NavLink>
                </li>
              ))}
            </ul>
          </div>
        </Row>
      </Container>
    </section>
  </>
    )
}

export default AdminNav

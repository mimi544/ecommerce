import React, { useRef, useEffect } from "react";

import { NavLink, useNavigate } from "react-router-dom";
import "./header.css";

import { motion } from "framer-motion";

import logo from "../../assets/images/logo.png";
import userIcon from "../../assets/images/user-icon.png";

import { Container, Row } from "reactstrap";
import { useSelector } from "react-redux";
import useAuth from "../../custom-hooks/useAuth"
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase.config";

const nav_link = [
	{
		path: "home",
		display: "Home",
	},
	{
		path: "shop",
		display: "Shop",
	},
	{
		path: "cart",
		display: "Cart",
	},
];

const Header = () => {
	const headerRef = useRef(null);
	const totalQuantity = useSelector((state) => state.cart.totalQuantity);
	const profileActionRef = useRef(null);
	const menuRef = useRef(null);
	const navigate = useNavigate();
	const {currentUser} = useAuth()
	const stickyHeaderFunc = () => {
		window.addEventListener("scroll", () => {
			if (
				document.body.scrollTop > 80 ||
				document.documentElement.scrollTop > 80
			) {
				headerRef.current.classList.add("sticky_header");
			} else {
				headerRef.current.classList.remove("sticky_header");
			}
		});
	};

	useEffect(() => {
		stickyHeaderFunc();

		return () => window.removeEventListener("scroll", stickyHeaderFunc);
	});

	const menuToggle = () => menuRef.current.classList.toggle("active_menu");
	const navigateToCart = () => {
		navigate("/cart");
	};
	const toggleProfileAction = () => profileActionRef.current.classList.toggle("show_profileAction")

	return (
		<header className="header" ref={headerRef}>
			<Container>
				<Row>
					<div className="nav_wrapper">
						<div className="logo">
							<img src={logo} alt="logo" />
							<div>
								<h1> Fast - Ecommerce </h1> <p> Since 2017 </p>{" "}
							</div>{" "}
						</div>{" "}
						<div
							className="navigation"
							ref={menuRef}
							onClick={menuToggle}
						>
							<ul className="menu">
								{" "}
								{nav_link.map((item, index) => (
									<li className="nav_item" key={index}>
										{" "}
										<NavLink
											to={item.path}
											className={(navClass) =>
												navClass.isActive
													? "nav_active"
													: ""
											}
										>
											{" "}
											{item.display}{" "}
										</NavLink>{" "}
									</li>
								))}{" "}
							</ul>{" "}
						</div>{" "}
						<div className="nav_icons">
							<span className="fav_icon">
								{" "}
								<i className="ri-heart-3-fill"> </i>{" "}
								<span className="badge"> 1 </span>{" "}
							</span>{" "}
							<span
								className="cart_icon"
								onClick={navigateToCart}
							>
								{" "}
								<i className="ri-shopping-cart-2-fill">
									{" "}
									{""}{" "}
								</i>{" "}
								<span className="badge"> {totalQuantity} </span>{" "}
							</span>{" "}
							<div className="profile">
								{" "}
								<motion.img
									whileTap={{ scale: 1.2 }}
									src={currentUser ? currentUser.photoURL : userIcon}
									onClick={toggleProfileAction}
								/>{" "}
								<div className="profile_action" ref={profileActionRef} onClick={toggleProfileAction}>
								{/* <span>Logout</span>  */}
									{	
										currentUser ? <span>Logout</span> : <div>
											<Link to ="/signup">Signup</Link>
											<Link to ="/login">Login</Link>
										</div>
									}
								</div>
							</div>{" "}
							<div className="mobile_menu">
								<span onClick={menuToggle}>
									{" "}
									<i className="ri-menu-fill"> </i>{" "}
								</span>{" "}
							</div>{" "}
						</div>{" "}
					</div>{" "}
				</Row>{" "}
			</Container>{" "}
		</header>
	);
};
export default Header;

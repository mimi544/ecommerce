import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Shop from "../pages/Shop";
import ProductDetails from "../pages/ProductDetails";

const Routers = () => {
	return (
		<Routes>
			<Route path="/" element={<Navigate to="home" />} />
			<Route path="home" element={<Home />} />{" "}
			<Route path="shop" element={<Shop />} />{" "}
			<Route path="cart" element={<Cart />} />{" "}
			<Route path="checkout" element={<Checkout />} />{" "}
			<Route path="login" element={<Login />} />{" "}
			<Route path="signup" element={<Signup />} />{" "}
			{/* <Route path="productdetails" element={<ProductDetails />} /> */}{" "}
			<Route path="shop/:id" element={<ProductDetails />} />{" "}
		</Routes>
	);
};
export default Routers;

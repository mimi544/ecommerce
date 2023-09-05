import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import AddProducts from "../admin/AddProducts";
import AllProducts from "../admin/AllProducts";
import Dashboard from "../admin/Dashboard";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ProductDetails from "../pages/ProductDetails";
import Shop from "../pages/Shop";
import Signup from "../pages/Signup";
import ProtectedRoute from "./ProtectedRoute";


const Routers = () => {
	return (
		<Routes>
			<Route path="/" element={<Navigate to="home" />} />
			<Route path="home" element={<Home />} />{" "}
			<Route path="shop" element={<Shop />} />{" "}
			<Route path="cart" element={<Cart />} />{" "}
			<Route path="/*" element={<ProtectedRoute/>}>
			<Route path = "checkout" element={<Checkout/>}/>
			<Route path = "dashboard" element={<Dashboard/>}/>
			<Route path = "dashboard/all-products" element={<AllProducts/>}/>
			<Route path = "dashboard/add-products" element={<AddProducts/>}/>
			</Route>
			{/* <Route path="checkout" element={<ProtectedRoute>
				<Checkout />
			</ProtectedRoute>} />{" "} */}
			<Route path="login" element={<Login />} />{" "}
			<Route path="signup" element={<Signup />} />{" "}
			{/* <Route path="productdetails" element={<ProductDetails />} /> */}{" "}
			<Route path="shop/:id" element={<ProductDetails />} />{" "}
		</Routes>
	);
};
export default Routers;

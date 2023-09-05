import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Col, Container, Form, FormGroup, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import "../styles/checkout.css";
const OrderPlaced = ({ cart }) => {
	const isCartEmpty = cart.length === 0;
  
	return (
	  <div className="order-placed">
		{!isCartEmpty &&  (
		  <div>
			<h2>Order Placed!</h2>
			<p>Your order has been successfully placed.</p>
		  </div>
		)}
	  </div>
	);
  };
  
const Checkout = () => {
	const totalQty = useSelector((state) => state.cart.totalQuantity);
	const totalAmount = useSelector((state) => state.cart.totalAmount);
	const [orderPlaced, setOrderPlaced] = useState(false);
	const [billingInfo, setBillingInfo] = useState({
		name: "",
		email: "",
		phoneNumber: "",
		streetAddress: "",
		city: "",
		postalCode: "",
		country: "",
	  });
	const handlePlaceOrder = () => {
		if (totalQty === 0) {
			alert("No items to order!");
			return;
		  }else if (
			Object.values(billingInfo).some((value) => value.trim() === "")
		  ) {
			alert("Please enter billing information.");
		  }else{
			setOrderPlaced(true);
		  }
	  };
	  const handleBillingInfoChange = (event) => {
		const { name, value } = event.target;
		setBillingInfo({
		  ...billingInfo,
		  [name]: value,
		});
	  };
	
	return (
		<Helmet title="Checkout">
			<CommonSection title="Checkout" />
			<section>
				<Container>
					<Row>
						<Col lg="8">
							<h6> Billing Information </h6> <Form></Form>{" "}
							<Form className="billing_form">
								{" "}
								<FormGroup className="from_group">
									{" "}
									<input
										type="text"
										placeholder="Enter your name"
										name="name"
                    					value={billingInfo.name}
                    					onChange={handleBillingInfoChange}
									/>{" "}
								</FormGroup>{" "}
								<FormGroup className="from_group">
									{" "}
									<input
										type="email"
										placeholder="Enter your email address"
										name="email"
                    					value={billingInfo.email}
                    					onChange={handleBillingInfoChange}
									/>{" "}
								</FormGroup>{" "}
								<FormGroup className="from_group">
									{" "}
									<input
										type="number"
										placeholder="Phone Number"
										name="number"
                    					value={billingInfo.number}
                    					onChange={handleBillingInfoChange}
									/>{" "}
								</FormGroup>{" "}
								<FormGroup className="from_group">
									{" "}
									<input
										type="text"
										placeholder="Street Address"
										name="streetaddress"
                    					value={billingInfo.streetaddress}
                    					onChange={handleBillingInfoChange}
									/>{" "}
								</FormGroup>{" "}
								<FormGroup className="from_group">
									{" "}
									<input
										type="text"
										placeholder="City"
										name="city"
                    					value={billingInfo.city}
                    					onChange={handleBillingInfoChange}
										
									/>{" "}
								</FormGroup>{" "}
								<FormGroup className="from_group">
									{" "}
									<input
										type="text"
										placeholder="Postal Code"
										name="postalcode"
                    					value={billingInfo.postalcode}
                    					onChange={handleBillingInfoChange}
									/>{" "}
								</FormGroup>{" "}
								<FormGroup className="from_group">
									{" "}
									<input
										type="text"
										placeholder="Country"
										name="country"
                    					value={billingInfo.country}
                    					onChange={handleBillingInfoChange}
									/>{" "}
								</FormGroup>{" "}
							</Form>{" "}
						</Col>{" "}
						<Col lg="4">
							{" "}
							<div className="checkout_cart">
								<h6>
									{" "}
									Toatal Qty:
									<span>
										{" "}
										{totalQty}
										items{" "}
									</span>{" "}
								</h6>{" "}
								<h6>
									{" "}
									Subtoatal:
									<span> {totalAmount} </span>{" "}
								</h6>{" "}
								<h6>
									<span>
										Shipping: <br /> free shipping{" "}
									</span>{" "}
									<span> $0 </span>{" "}
								</h6>{" "}
								<h4>
									{" "}
									Total Cost:
									<span> {totalAmount} </span>{" "}
								</h4>{" "}
								<button className="buy_btn auth_btn w-100 btn btn-light" onClick={handlePlaceOrder} disabled={orderPlaced || totalQty === 0}>
									{" "}
									{orderPlaced ? "Order Placed" : "Place an order"}{" "}
									
								</button>{" "}
							</div>{" "}
						</Col>{" "}
					</Row>{" "}
				</Container>{" "}
			</section>{" "}
			{orderPlaced ? <OrderPlaced cart={[]} /> : null}
		</Helmet>
	);
};

export default Checkout;

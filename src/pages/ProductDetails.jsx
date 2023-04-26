import React from "react";
import { Container, Row, Col } from "reactstrap";
import { useParams } from "react-router-dom";
import products from "../assets/data/products";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";

const ProductDetails = () => {
	const { id } = useParams();
	const product = products.find((item) => item.id === id);
	const { imgUrl, productName, price, avgRating, review, description } =
		product;

	return (
		<Helmet>
			<CommonSection />
			<section className="pt-0">
				<Container>
					<Row>
						<Col lg="6">
							{" "}
							<img src={imgUrl} alt="" />{" "}
						</Col>{" "}
						<Col lg="6">
							{" "}
							<div className="product_details">
								{" "}
								<h2> Product Name </h2>{" "}
								<div className="product_rating">
									<div>
										{" "}
										<span>
											{" "}
											<i className="ri-star-s-fill">
												{" "}
											</i>{" "}
										</span>{" "}
										<span>
											{" "}
											<i className="ri-star-s-fill">
												{" "}
											</i>{" "}
										</span>{" "}
										<span>
											{" "}
											<i className="ri-star-s-fill">
												{" "}
											</i>{" "}
										</span>{" "}
										<span>
											{" "}
											<i className="ri-star-s-fill">
												{" "}
											</i>{" "}
										</span>{" "}
										<span>
											{" "}
											<i className="ri-star-half-s-fill">
												{" "}
											</i>{" "}
										</span>{" "}
									</div>{" "}
									<p>
										{" "}
										({avgRating}
										ratings){" "}
									</p>{" "}
								</div>{" "}
							</div>{" "}
						</Col>{" "}
					</Row>{" "}
				</Container>{" "}
			</section>{" "}
		</Helmet>
	);
};

export default ProductDetails;

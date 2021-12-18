import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";
import "../Services.css";
const ExploreServices = () => {
	const [services, setServices] = useState([]);
	useEffect(() => {
		fetch("https://limitless-cliffs-19356.herokuapp.com/allServices")
			.then((res) => res.json())
			.then((data) => setServices(data));
	}, []);
	console.log(services);
	return (
		<>
			<section id="book-ride" className="mt-5 container">
				<h2 className="text-center fw-bolder">
					{" "}
					The best Exclusive{" "}
					<span style={{ color: "#ff4d30" }}> watch brands of 2021</span>
				</h2>
				<p
					style={{ fontSize: "18px", color: "gray", textAlign: "justify" }}
					className="text-center"
				>
					Today, life moves faster than ever. Keeping track of time is essential
					in our fast-paced world—so why not do it in style, with one of the
					world’s best DIG watches on your wrist? Luxury watches are destined
					never to go out of fashion. Even though we now have clocks on our
					phones, nothing beats the exceptional elegance of a beautifully
					crafted timepiece. Suddenly, checking the time becomes a rather
					exciting endeavour.
				</p>
				<br /> <br />
				{services.length === 0 ? (
					<div className="d-flex justify-content-center">
						<div className="spinner-border" role="status">
							<span className="visually-hidden">Loading...</span>
						</div>
					</div>
				) : (
					<div className="row ">
						{services?.map((pd, index) => (
							<div className="mb-5 col-lg-4 col-sm-6  " key={pd._id}>
								<div className="card shadow-lg w-100 h-100 text-center rounded serviceCard card_border">
									<div className="d-flex justify-content-center align-items-center h-75 p-2">
										<img
											src={pd?.image}
											className="card-img-top card_border"
											alt=""
											style={{ height: "86%", width: "75%" }}
										/>
									</div>
									<div className="card-body name">
										{/* <small>{pd?.title}</small> */}
										<h6 className="card-title">{pd?.name}</h6>
										<strong>{pd?.description}</strong>
									</div>

									<div className="card-footer">
										<div className="d-flex align-items-center justify-content-between ">
											<h5 className="text-warning fw-bold"> $ {pd?.price}</h5>
											<Link to={`/services/${pd?._id}`}>
												{" "}
												<button className="btn btn-success">Order Now</button>
											</Link>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				)}
			</section>
			<Footer></Footer>
		</>
	);
};

export default ExploreServices;

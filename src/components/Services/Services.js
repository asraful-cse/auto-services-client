import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Services.css";
const Services = () => {
	const [services, setServices] = useState([]);
	useEffect(() => {
		fetch("https://limitless-cliffs-19356.herokuapp.com/allServices")
			.then((res) => res.json())
			.then((data) => setServices(data));
	}, []);
	console.log(services);
	return (
		<section id="book-ride" className="mt-5 container">
			<div>
				<h2 className="text-center fw-bolder">
					{" "}
					OUR-
					<span style={{ color: "#ff4d30" }}>CAR SERVICES</span>
				</h2>
				<br />
				<p
					style={{ fontSize: "18px", color: "gray", textAlign: "justify" }}
					className="text-center"
				>
					We provide top notch maintenance service for all types of vehicles.{" "}
					<br />
					We are certified to service and repair the following makes:
				</p>
			</div>
			<br /> <br />
			{services.length === 0 ? (
				<div className="d-flex justify-content-center">
					<div className="spinner-border" role="status">
						<span className="visually-hidden">Loading...</span>
					</div>
				</div>
			) : (
				<div className="row">
					{services?.slice(0, 6)?.map((pd, index) => (
						<div class="row g-0 mb-5 col-lg-6 col-sm-6 " key={pd?._id}>
							<div
								class="col-md-4  text-center rounded serviceCard card_border"
								data-aos="flip-left"
								data-aos-easing="ease-out-cubic"
								data-aos-duration="1000"
							>
								<img
									src={pd?.image}
									className="card-img-top card_border"
									alt=""
									style={{ height: "70%", width: "100%" }}
								/>
							</div>
							<div
								class="col-md-8"
								data-aos="fade-up"
								data-aos-easing="ease-out-cubic"
								data-aos-duration="1000"
							>
								<div class="card-body name">
									<h6 className="card-title">{pd?.name}</h6>
									<strong>{pd?.description}</strong>
									<div className=" ">
										<h5 className="text-dark fw-bold"> $ {pd?.price}</h5>
										<Link to={`/services/${pd?._id}`}>
											<button className="btn btn-dark">Book Now</button>
										</Link>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			)}
		</section>
	);
};

export default Services;

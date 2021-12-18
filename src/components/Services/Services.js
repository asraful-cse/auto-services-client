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
					OUR EXCLUSIVE WATCH{" "}
					<span style={{ color: "#ff4d30" }}>OFFERS AND SERVICES</span>
				</h2>
				<p
					style={{ fontSize: "18px", color: "gray", textAlign: "justify" }}
					className="text-center"
				>
					"EXCLUSIVE" Watch was born thanks to a groundbreaking entrepreneurial
					vision shared by Boston’s E. Howard Watch and Clock Company manager,
					Florentine Ariosto Jones. The 27-year-old pioneer, <br />
					who was also a watchmaker and engineer, aspired to meld exquisite
					Swiss watchmaking precision, with America’s cutting edge technology.
					The result was something rather revolutionary. <br />
					IWC watches landed a place at the forefront of innovative watchmaking.
					Not only that, but they remained there. Florentine’s collaboration{" "}
					<br />
					with Heinrich Moser, an industrialist from Schaffhausen, brought some
					of the oldest and most respected clock <br />
					making traditions in line with the entrepreneur’s vision, and as a
					result, IWC <br />
					watches became a trusted wristwatch for generations to come.
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

import React from "react";
import { Link } from "react-router-dom";
import clinicBanner1 from "../../../../images/1.jpg";
import clinicBanner2 from "../../../../images/2.jpg";
import clinicBanner3 from "../../../../images/3.jpg";
import "./HeaderSlider.css";

const HeaderSlider = () => {
	return (
		<div
			id="carouselExampleCaptions"
			className="carousel slide"
			data-bs-ride="carousel"
			data-aos="zoom-in-down"
		>
			<div className="carousel-indicators">
				<button
					type="button"
					data-bs-target="#carouselExampleCaptions"
					data-bs-slide-to="0"
					className="active"
					aria-current="true"
					aria-label="Slide 1"
				></button>
				<button
					type="button"
					data-bs-target="#carouselExampleCaptions"
					data-bs-slide-to="1"
					aria-label="Slide 2"
				></button>
				<button
					type="button"
					data-bs-target="#carouselExampleCaptions"
					data-bs-slide-to="2"
					aria-label="Slide 3"
				></button>
			</div>
			<div className="carousel-inner">
				<div className="carousel-item active" data-aos="zoom-in-down">
					<img
						src={clinicBanner1}
						className="d-block w-100 slider-1 opacity"
						alt="..."
					/>
					<div
						className="carousel-caption d-none d-md-block banner_blur"
						data-aos="zoom-in-down"
					>
						<button className="btn btn bg-dark">
							<Link
								style={{ color: "white", textDecoration: "none" }}
								to="/explore"
							>
								MORE COLLECTIONS{" "}
							</Link>
						</button>
					</div>
				</div>

				<div className="carousel-item">
					<img
						src={clinicBanner2}
						className="d-block w-100 opacity"
						alt="..."
					/>
					<div
						className="carousel-caption d-none d-md-block  banner_blur"
						data-aos="zoom-in-down"
					>
						<button className="btn btn bg-dark">
							<Link
								style={{ color: "white", textDecoration: "none" }}
								to="/login"
							>
								REGISTRATION NOW
							</Link>
						</button>
					</div>
				</div>

				<div className="carousel-item">
					<img
						src={clinicBanner3}
						className="d-block w-100 opacity"
						alt="..."
					/>
					<div className="carousel-caption d-none d-md-block banner_blur ">
						<button className="btn btn bg-dark">
							<Link
								style={{ color: "white", textDecoration: "none" }}
								to="/explore"
							>
								MORE EXPLORE
							</Link>
						</button>
					</div>
				</div>
			</div>
			<button
				className="carousel-control-prev"
				type="button"
				data-bs-target="#carouselExampleCaptions"
				data-bs-slide="prev"
			>
				<span className="carousel-control-prev-icon" aria-hidden="true"></span>
				<span className="visually-hidden text-success">Previous</span>
			</button>
			<button
				className="carousel-control-next"
				type="button"
				data-bs-target="#carouselExampleCaptions"
				data-bs-slide="next"
			>
				<span className="carousel-control-next-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Next</span>
			</button>
		</div>
	);
};

export default HeaderSlider;

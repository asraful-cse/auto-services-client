import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebookSquare,
	faInstagramSquare,
	faTwitterSquare,
	faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
	faPhoneVolume,
	faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";
import watch_logo from "../../images/watch_logo.png";
const Footer = () => {
	return (
		<div>
			<div className="footer-container">
				<div className="container">
					<div className="row">
						<div className="col-md-5">
							<div
								className="left-container text-start"
								data-aos="fade-down"
								data-aos-easing="linear"
								data-aos-duration="1500"
							>
								<img
									className="left-container text-start"
									src={watch_logo}
									style={{
										height: "100px",
										width: "100px",
										marginBottom: "5px",
										borderRadius: "20px",
										// marginLeft: "130px",
									}}
									alt=""
								/>
								<div className="icons-container d-flex text-center ">
									<div className="icon">
										<FontAwesomeIcon icon={faInstagramSquare} />
									</div>
									<div className="icon">
										<FontAwesomeIcon icon={faTwitterSquare} />
									</div>
									<div className="icon">
										<FontAwesomeIcon icon={faYoutube} />
									</div>
									<div className="icon">
										<FontAwesomeIcon icon={faFacebookSquare} />
									</div>
								</div>
								<h6 className="mt-4 text-dark "></h6>
							</div>
						</div>
						<div
							className="col-md-2"
							data-aos="fade-down"
							data-aos-easing="linear"
							data-aos-duration="1500"
						>
							<div className="footer-menu-container">
								<ul>
									<li className="footer-menu">Home</li>
									<li className="footer-menu">Explore</li>
									<li className="footer-menu">About us</li>
									<li className="footer-menu">Contact us</li>
								</ul>
							</div>
						</div>
						<div
							className="col-md-5"
							data-aos="fade-down"
							data-aos-easing="linear"
							data-aos-duration="1500"
						>
							<div className="right-footer-container">
								<h3 className="text-dark">SIGN UP AND CONTACT NOW !</h3>
								<input
									className="footer-input text-dark w-100"
									type="text"
									placeholder="Enter Email"
								/>
								<div className="phone d-flex align-items-center justify-content-center mt-4">
									<div className="footer-phone-icon">
										<FontAwesomeIcon icon={faPhoneVolume} />
									</div>
									<div>
										<strong className="text-dark">+880 1 921 615 651 </strong>
									</div>
								</div>
								<div className="map d-flex align-items-center justify-content-center">
									<div className="footer-phone-icon my-0">
										<FontAwesomeIcon icon={faMapMarkedAlt} />
									</div>
									<div>
										<h6 className="text-dark">
											- 12/12 Dhanmondi, Dhaka-1215, Bangladesh.
										</h6>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="mt-2 text-dark text-center">
						<small>
							<small>Watch © . All rights reserved asraful-2021</small>
						</small>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;

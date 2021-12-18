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

const Footer = () => {
	return (
		<div>
			<div className="footer-container">
				<div className="container">
					<div className="row">
						<div className="col-md-5">
							<div className="left-container text-start">
								<h1>EXCLUSIVE WATCH</h1>
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
								<h6 className="mt-4 text-light ">
									Today, life moves faster than ever. Keeping track of time is
									essential in our fast-paced world—so why not do it in style
								</h6>
							</div>
						</div>
						<div className="col-md-2">
							<div className="footer-menu-container">
								<ul>
									<li className="footer-menu">Home</li>
									<li className="footer-menu">Explore</li>
									<li className="footer-menu">About us</li>
									<li className="footer-menu">Contact us</li>
								</ul>
							</div>
						</div>
						<div className="col-md-5">
							<div className="right-footer-container">
								<h3 className="text-light">SIGN UP AND CONTACT NOW !</h3>
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
										<strong className="text-light">+880 1 921 615 651 </strong>
									</div>
								</div>
								<div className="map d-flex align-items-center justify-content-center">
									<div className="footer-phone-icon my-0">
										<FontAwesomeIcon icon={faMapMarkedAlt} />
									</div>
									<div>
										<h6 className="text-light">
											- 12/12 Dhanmondi, Dhaka-1215, Bangladesh.
										</h6>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="mt-2 text-light text-center">
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

import React from "react";
import Fade from "react-reveal/Fade";
import emailjs from "emailjs-com";
import swal from "sweetalert";
import { Col, Container, Row } from "react-bootstrap";
import "./contact.css";
import contactImg from "../../../images/giphy2.gif";
const Contact = () => {
	const handleSubmit = (e) => {
		console.log(e.target);
		e.preventDefault();
		emailjs
			.sendForm(
				"service_syd44qb",
				"template_fyh8q88",
				e.target,
				"user_lQ3b1knpdR7fex9a5p0zU"
			)
			.then(
				(result) => {
					console.log(result.text);
					swal("Good job!", "Your message  successfully sent", "success");
					e.target.reset();
				},
				(error) => {
					console.log(error.text);
				}
			);
	};
	return (
		<section className="my-5 mx-3">
			<Container>
				<div className="text-center">
					<h1 className="text-center py-5 fw-bold">Contact Us</h1>
				</div>
				<Row className="align-items-center">
					<Col sm={12} md={6} lg={6} className="mb-5 mb-sm-5 mb-md-0">
						<Fade left cascade duration={2500}>
							<img className="w-100 h-200" src={contactImg} alt="" />
						</Fade>
					</Col>
					<Col sm={12} md={6} lg={6}>
						<form onSubmit={handleSubmit}>
							<Fade right cascade duration={2500}>
								<div className="mb-3">
									<input
										name="subject"
										type="name"
										className="form-control form-input"
										placeholder="Enter Your subject"
										required
									/>
								</div>
							</Fade>
							<Fade right cascade duration={2500}>
								<div className="mb-3">
									<input
										name="name"
										type="name"
										className="form-control form-input"
										placeholder="Enter Your name"
										required
									/>
								</div>
							</Fade>
							<Fade right cascade duration={2500}>
								<div className="mb-3">
									<input
										name="subject"
										type="email"
										className="form-control form-input"
										placeholder="Enter Your Email"
										required
									/>
								</div>
							</Fade>
							<Fade right cascade duration={2500}>
								<div className=" mb-3">
									<textarea
										required
										name="message"
										className="form-control form-input w-100"
										placeholder="Enter Your message"
										cols="30"
										rows="10"
									></textarea>
								</div>
							</Fade>
							<Fade right cascade duration={2500}>
								<button
									type="submit"
									className="btn btn-outline-danger form-btn"
								>
									Submit
								</button>
							</Fade>
						</form>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Contact;

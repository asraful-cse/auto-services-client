import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import watch_logo from "../../../images/watch_logo.png";
import "./Navbar.css";
const Navbar = () => {
	const { logOut, user } = useAuth();
	return (
		<div className="container background_img">
			<nav className="navbar navbar-expand-lg navbar-light">
				<div className="container-fluid" style={{ marginTop: "50px" }}>
					<div className="d-flex">
						<img
							src={watch_logo}
							style={{
								height: "40px",
								width: "200px",
								marginTop: "0px",
								borderRadius: "100px",
								marginLeft: "130px",
							}}
							alt=""
						/>
					</div>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNavAltMarkup"
						aria-controls="navbarNavAltMarkup"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className="collapse navbar-collapse fw-bold"
						id="navbarNavAltMarkup"
						style={{ marginTop: "26px" }}
					>
						<div className="navbar-nav ms-auto">
							<Link to="/home" className="nav-link">
								HOME
							</Link>

							<Link to="/explore" className="nav-link">
								EXPLORE
							</Link>
							<Link to="/contact" className="nav-link">
								CONTACT
							</Link>

							{user?.email && (
								<div>
									<Link to="/dashboard" className="nav-link">
										{" "}
										DASHBOARD
									</Link>
									<br />

									<strong
										className="text-success"
										style={{
											border: "2px solid gray",
											padding: "0px 40px 0px 40px",
											borderRadius: "5px",
											backgroundColor: "light",
										}}
									>
										{user?.displayName}
									</strong>
								</div>
							)}

							{user.email ? (
								<Link to="/login" className="nav-link">
									<button onClick={logOut} className="btn btn-danger me-1  ">
										SIGN OUT
									</button>
								</Link>
							) : (
								<Link to="/login">
									<button className="btn btn-success me-1">LOGIN</button>
								</Link>
							)}
							<br />
							<br />
							<br />
							<br />
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;

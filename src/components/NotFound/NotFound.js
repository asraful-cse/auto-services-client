import React from "react";
import { Link } from "react-router-dom";
import notfountImg from "../../images/404page.jpg";
const NotFound = () => {
	return (
		<div class="card bg-dark text-white  ">
			<img src={notfountImg} className="card-img " alt="..." />
			<div class="card-img-overlay text-center ">
				<Link to="/home">
					<button className="btn btn-danger">BACK HOME</button>
				</Link>
			</div>
		</div>
	);
};

export default NotFound;

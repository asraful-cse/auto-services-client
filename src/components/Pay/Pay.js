import React from "react";
import comingSoon from "../../images/commingSoon.png.crdownload";
const Pay = () => {
	return (
		<div
			class="card bg-dark text-white"
			data-aos="flip-left"
			data-aos-easing="ease-out-cubic"
			data-aos-duration="1500"
		>
			<h5 class="card-title text-bold">Payment system coming soon --------</h5>
			<img src={comingSoon} class="card-img" alt="..." />
			<div class="card-img-overlay"></div>
		</div>
	);
};

export default Pay;

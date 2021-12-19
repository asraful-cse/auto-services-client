import React from "react";
import blogImg1 from "../../../images/b0.png";
import blogImg2 from "../../../images/b1.png";
import blogImg3 from "../../../images/b2.png";
const Blog = () => {
	return (
		<div className="container">
			<br /> <br />
			<div>
				<h2 className="text-center fw-bolder">
					{" "}
					WHY CHOOSE-
					<span style={{ color: "#ff4d30" }}>US?</span>
				</h2>
				<br />
				<p
					style={{ fontSize: "18px", color: "gray", textAlign: "justify" }}
					className="text-center"
				>
					We are one of the leading auto repair shops serving customers in
					Tucson. <br /> All mechanic services are performed by highly qualified
					mechanics.
				</p>
			</div>
			<br /> <br />
			<div class="card-group">
				<div
					class="card"
					data-aos="flip-left"
					data-aos-easing="ease-out-cubic"
					data-aos-duration="1500"
				>
					<div className="d-flex justify-content-center align-items-center h-75 p-2">
						<img
							style={{ width: "150px", height: "150px" }}
							src={blogImg1}
							class="card-img-top img-fluid"
							className="card-img-top card_border"
							alt=""
						/>
					</div>

					<div class="card-body name">
						<h5 class="card-title">EVERY JOB IS PERSONAL</h5>
						<small class="card-text">
							If you want the quality you would expect from the dealership, but
							with a more personal and friendly atmosphere, you have found it.
						</small>
					</div>
				</div>
				<div
					class="card"
					data-aos="flip-left"
					data-aos-easing="ease-out-cubic"
					data-aos-duration="1500"
				>
					<div className="d-flex justify-content-center align-items-center h-75 p-2">
						<img
							style={{ width: "150px", height: "150px" }}
							src={blogImg2}
							class="card-img-top img-fluid"
							className="card-img-top card_border"
							alt=""
						/>
					</div>

					<div class="card-body name">
						<h5 class="card-title">BEST MATERIALS</h5>
						<small class="card-text">
							We have invested in all the latest specialist tools and diagnostic
							software that is specifically tailored for the software in your
							vehicle.
						</small>
					</div>
				</div>
				<div
					class="card"
					data-aos="flip-left"
					data-aos-easing="ease-out-cubic"
					data-aos-duration="1500"
				>
					<div className="d-flex justify-content-center align-items-center h-75 p-2">
						<img
							style={{ width: "150px", height: "150px" }}
							src={blogImg3}
							class="card-img-top"
							className="card-img-top card_border"
							alt=""
						/>
					</div>

					<div class="card-body name">
						<h5 class="card-title">PROFESSIONAL STANDARDS</h5>
						<small class="card-text">
							Our auto repair shop is capable of servicing a variety of models.
							We only do the work that is needed to fix your problem. READ MORE
						</small>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Blog;

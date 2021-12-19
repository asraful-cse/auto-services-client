import React, { useEffect, useState } from "react";

const ManageServices = () => {
	const [services, setServices] = useState([]);
	useEffect(() => {
		fetch("https://limitless-cliffs-19356.herokuapp.com/allServices")
			.then((res) => res.json())
			.then((data) => setServices(data));
	}, []);

	// handle delete part of manage services---------------------------------
	const handleDeleteUser = (id) => {
		const proceed = window.confirm("Are you sure, you want to delete?");
		if (proceed) {
			const url = `https://limitless-cliffs-19356.herokuapp.com/allServices/${id}`;
			fetch(url, {
				method: "DELETE",
			})
				.then((res) => res.json())
				.then((data) => {
					if (data.deletedCount > 0) {
						alert("deleted successfully");
						const remainingUsers = services.filter((user) => user._id !== id);
						setServices(remainingUsers);
					}
				});
		}
	};
	return (
		<div
			className="container"
			data-aos="flip-left"
			data-aos-easing="ease-out-cubic"
			data-aos-duration="1500"
		>
			<div>
				<h1 className="text-align-center d-flex justify-content-center text-danger">
					Manage Services
				</h1>
				<strong
					style={{ fontWeight: "900", color: "darkblue" }}
					className="text-align-center d-flex justify-content-center text-success"
				>
					Total Items: {services.length}
				</strong>
			</div>
			<br />
			{services.length === 0 ? (
				<div className="d-flex justify-content-center">
					<div className="spinner-border" role="status">
						<span className="visually-hidden">Loading...</span>
					</div>
				</div>
			) : (
				<div
					className="row "
					data-aos="flip-up"
					data-aos-easing="ease-out-cubic"
					data-aos-duration="1500"
				>
					{services?.map((pd, index) => (
						<div className="mb-5 col-lg-4 col-sm-6  ">
							<div className="card shadow-lg w-100 h-100 text-center rounded serviceCard card_border">
								<div className="d-flex justify-content-center align-items-center h-75 p-2">
									<img
										src={pd?.image}
										className="card-img-top card_border"
										alt=""
										style={{ height: "86%", width: "75%" }}
									/>
								</div>
								<div className="card-body name">
									<h6 className="card-title">{pd?.name}</h6>
								</div>

								<div className="card-footer">
									<div
										className="d-flex align-items-center justify-content-center "
										data-aos="zoom-in-down"
									>
										<button
											className="btn btn-danger w-100"
											onClick={() => handleDeleteUser(pd?._id)}
										>
											Item Delete Now
										</button>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default ManageServices;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import Footer from "../Footer/Footer";

const Details = () => {
	const [service, setService] = useState({});
	const { user } = useAuth();
	const { serviceId } = useParams();
	console.log(serviceId);

	const {
		register,
		handleSubmit,
		reset,
		// watch,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		data.email = user?.email;
		data.status = "pending";
		fetch("https://limitless-cliffs-19356.herokuapp.com/addOrders", {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then(
				(result) => {
					if (result.insertedId) {
						alert("Order Added Successfully");
					}
					reset();
				}
				// console.log(result)
			);
		// console.log(data);
	};

	useEffect(() => {
		fetch(
			`https://limitless-cliffs-19356.herokuapp.com/singleService/${serviceId}`
		)
			.then((res) => res.json())
			.then((data) => setService(data));
	}, []);

	return (
		<div>
			<div className="details-container container">
				<div className="row container">
					<h3
						style={{
							textAlign: "center",
							justifyContent: "center",
							display: "flex",
							padding: "60px",
							color: "gray",
						}}
					>
						Please fill the form and Order now ?
					</h3>

					<div
						className="col-md-6"
						style={{
							textAlign: "center",
							justifyContent: "center",
							border: "1px solid gray",

							padding: "60px",
							maxHeight: "450px",
							marginTop: "9px",
							backgroundColor: "#f0f0f0",
						}}
					>
						<img className="w-50" src={service.image} alt="" />
						<br />
						<h3 style={{ color: "gray" }}>{service?.name}</h3>
						<p style={{ color: "gray" }}>{service?.description}</p>
						<h4 style={{ color: "#414196" }}>$ {service?.price}</h4>
					</div>
					<br />
					<br />
					<div className="col-md-6">
						<strong
							style={{
								textAlign: "center",
								justifyContent: "center",
								display: "flex",
								padding: "0px",
								color: "red",
							}}
						>
							You must be click to email, name, product name, price and others
							field fill then purchase now !!!!
						</strong>
						<form onSubmit={handleSubmit(onSubmit)}>
							<input
								{...register("email", { required: true })}
								placeholder=" Your Delivery Address "
								defaultValue={user?.email}
								className="p-2 m-2 w-100 input-field"
							/>
							<input
								{...register("DisplayName", { required: true })}
								placeholder=" Your Delivery Address "
								defaultValue={user?.displayName}
								className="p-2 m-2 w-100 input-field"
							/>
							<input
								{...register("name")}
								placeholder="Name"
								defaultValue={service?.name}
								className="p-2 m-2 w-100 input-field"
							/>

							<input
								{...register("description")}
								defaultValue={service?.description}
								placeholder="Description"
								className="p-2 m-2 w-100 input-field"
							/>

							<input
								{...register("price")}
								placeholder="Price"
								defaultValue={service?.price}
								type="number"
								className="p-2 m-2 w-100 input-field"
							/>

							<input
								{...register("address", { required: true })}
								placeholder=" Your Delivery Address "
								type="text"
								className="p-2 m-2 w-100 input-field"
							/>
							<input
								{...register("coupon")}
								placeholder="Coupon Code"
								type="number"
								className="p-2 m-2 w-100 input-field"
							/>
							<input
								{...register("phone")}
								placeholder="Your Phone Number"
								type="number"
								className="p-2 m-2 w-100 input-field"
							/>

							<select {...register("model")} className="p-2 m-2 w-100">
								<option value="premium">Premium</option>
								<option value="classic">Classic</option>
								<option value="business">Business</option>
							</select>
							<br />
							<br />

							{errors.exampleRequired && <span>This field is required</span>}

							<input
								type="submit"
								value="Purchase Now"
								className="btn btn-danger w-100"
							/>
						</form>
						<br />
						<br />
						<div></div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Details;

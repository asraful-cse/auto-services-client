import React from "react";
import "./MakeAdmin.css";
import { useForm } from "react-hook-form";
const MakeAdmin = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		fetch("https://limitless-cliffs-19356.herokuapp.com/makeAdmin", {
			method: "PUT",
			headers: { "content-type": "application/json" },
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((result) => {
				if (result.acknowledged) {
					alert("admin make successfully");
				}
			});
	};
	return (
		<div className="container border border bg-light">
			<h2
				className="mt-0 my-3 p-3 text-center text-danger"
				data-aos="fade-down"
				data-aos-easing="linear"
				data-aos-duration="1500"
			>
				- Make Admin Form - <br /> Please Added Person Information ?
			</h2>
			<br />
			<div className="login-box w-75 m-auto mt-6">
				<div className="event-box  d-flex justify-content-center align-items-center">
					<div
						className="login-form"
						data-aos="fade-down"
						data-aos-easing="linear"
						data-aos-duration="1500"
					>
						<form onSubmit={handleSubmit(onSubmit)}>
							<input
								className="input-field"
								name="name"
								placeholder="Admin User Name"
								type="text"
								{...register("name", { required: true })}
							/>
							<br />
							<input
								className="input-field my-3"
								name="email"
								placeholder="Type User Email"
								type="email"
								{...register("email", { required: true })}
							/>
							<br />
							<input
								className="input-field"
								name="password"
								placeholder="User Password"
								type="password"
								{...register("password", { required: true })}
							/>
							<br />
							{errors.exampleRequired && <span>This field is required</span>}
							<input
								className="submit-btn btn btn-danger mt-3"
								type="submit"
								value="Make as Admin"
							/>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MakeAdmin;

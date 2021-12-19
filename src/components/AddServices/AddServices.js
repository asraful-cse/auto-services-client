import React from "react";
import { useForm } from "react-hook-form";
// import useAuth from "../../hooks/useAuth";

const AddServices = () => {
	// const { user } = useAuth();
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		fetch("https://limitless-cliffs-19356.herokuapp.com/addServices", {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((result) => {
				if (result.insertedId) {
					alert("Product Added Successfully");
				}
				reset();
			});
	};
	return (
		<div
			className="container border border bg-light"
			data-aos="flip-left"
			data-aos-easing="ease-out-cubic"
			data-aos-duration="1500"
		>
			<h2 className="mt-0 my-3 p-3 text-center text-danger">
				PLEASE ADD WATCH ITEMS
			</h2>
			<div className="login-box w-75 m-auto mt-6">
				<div className="event-box  d-flex justify-content-center align-items-center">
					<div className="login-form">
						<form onSubmit={handleSubmit(onSubmit)}>
							<input
								{...register("name")}
								placeholder="Name"
								className="p-2 m-2 w-100 input-field"
							/>

							<input
								{...register("description")}
								placeholder="Description"
								className="p-2 m-2 w-100 input-field"
							/>

							<input
								{...register("image", { required: true })}
								placeholder="Image Link"
								className="p-2 m-2 w-100 input-field"
							/>

							<input
								{...register("price", { required: true })}
								placeholder="Price"
								type="number"
								className="p-2 m-2 w-100 input-field"
							/>

							<select {...register("model")} className="p-2 m-2 w-100">
								<option value="premium">premium</option>
								<option value="classic">classic</option>
								<option value="business">business</option>
							</select>
							<br />

							{errors.exampleRequired && <span>This field is required</span>}

							<input
								type="submit"
								value=" Click To Inserting"
								className="btn btn-danger w-100 mt-3 mr-4"
							/>
						</form>
						<br />
					</div>
				</div>
			</div>
		</div>
	);
};

export default AddServices;

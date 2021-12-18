import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";

const Review = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();
	const { user } = useAuth();
	const onSubmit = (data) => {
		fetch("https://limitless-cliffs-19356.herokuapp.com/addReview", {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((result) => {
				if (result.insertedId) {
					alert("Your Review Successfully added");
					reset();
				}
			});
	};
	return (
		<div className="container border border bg-light">
			<h1 className="mt-0 my-3 p-3 text-center text-danger">Review</h1>
			<div className="login-box w-75 m-auto mt-6">
				<div className="event-box  d-flex justify-content-center align-items-center">
					<div className="login-form"></div>
					<form onSubmit={handleSubmit(onSubmit)}>
						<input
							className="input-field"
							name="email"
							value={user?.email}
							type="email"
							{...register("email", { required: true })}
						/>
						<br />

						<input
							className="input-field my-3"
							name="rating"
							type="number"
							placeholder="Rating 0 to 5 Count"
							{...register("rating", { required: true })}
						/>
						<br />

						<input
							className="input-field"
							name="comments"
							placeholder="Comments"
							{...register("comments", { required: true })}
						/>
						<br />

						{errors.exampleRequired && <span>This field is required</span>}
						<input
							className="submit-btn btn btn-danger mt-3"
							type="submit"
							value="Review "
						/>
					</form>
				</div>
			</div>
			<br />
		</div>
	);
};

export default Review;

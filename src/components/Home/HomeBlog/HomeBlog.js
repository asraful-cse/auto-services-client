import React from "react";

const HomeBlog = () => {
	return (
		<>
			{/* extra section part -1 */}
			<section className="contact  py-5">
				<div className="container">
					<div className="section-header text-center text-dark mb-5">
						<h4 className="text-warning">Contact</h4> <br />
						<small className="text-center">
							We've all been there. Some of us are still there. You're new to
							watches, you're excited to learn as much as you can and to buy a
							few nice things, but you don't really know where to start. Or
							maybe you know where to start, but you're not sure where to go
							from there. Or, even worse, you think you know what you're doing,
							but you're woefully mistaken. It's tough. Watch collecting is a
							passion that's all about the details and there's quite a lot of
							misinformation out there. But even beyond studying the minutiae,
							memorizing reference numbers, and knowing your way around a
							complicated movement, there's a lot you can do to raise your
							chances of success and to get even more out of this fun little
							hobby of ours.
						</small>
						<br /> <br />
						<h1>Leave Your Message</h1>
					</div>
					<div className="col-md-9 mx-auto ">
						<form action="">
							<div className="form-group mb-3">
								<input
									type="text"
									className="form-control bg-light text-dark"
									placeholder="Email Address *"
								/>
							</div>
							<div className="form-group mb-3">
								<input
									type="text"
									className="form-control bg-light text-dark"
									placeholder="Subject *"
								/>
							</div>
							<div className="form-group mb-3">
								<textarea
									name=""
									className="form-control bg-light text-dark"
									id=""
									cols="30"
									rows="10"
									placeholder="Message *"
								></textarea>
							</div>
							<div className="form-group text-center">
								<button type="button" className="btn btn-lg btn-danger">
									{" "}
									Submit{" "}
								</button>
							</div>
						</form>
					</div>
				</div>
			</section>
		</>
	);
};

export default HomeBlog;

import {
	Typography,
	Container,
	Grid,
	TextField,
	Button,
	LinearProgress,
	Alert,
} from "@mui/material";
import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";
import login from "../../../../images/fantasy.png";
import Footer from "../../../Footer/Footer";

const Register = () => {
	const [loginData, setLoginData] = useState({});
	const { user, registerUser, isLoading, authError } = useAuth();
	const history = useHistory();
	const handleOnBlur = (e) => {
		const field = e.target.name;
		const value = e.target.value;
		// console.log(field, value);
		const newLoginData = { ...loginData };
		newLoginData[field] = value;
		console.log(newLoginData);
		setLoginData(newLoginData);
	};
	const handleLoginSubmit = (e) => {
		e.preventDefault();
		if (loginData.password !== loginData.password2) {
			alert("Your Password did not match");

			return;
		}
		registerUser(loginData.email, loginData.password, loginData.name, history);
	};
	return (
		<>
			<Container>
				<Grid container spacing={2}>
					<Grid item xs={12} md={6}>
						<Typography
							sx={{ mt: 8, color: "#83ab66" }}
							variant="h4"
							gutterBottom
						>
							Please Register Now !
						</Typography>

						{!isLoading && (
							<form onSubmit={handleLoginSubmit}>
								<TextField
									sx={{ width: "75%", m: 1 }}
									id="standard-basic"
									name="name"
									onBlur={handleOnBlur}
									type="text"
									label="Your Name"
									variant="standard"
								/>
								<TextField
									sx={{ width: "75%", m: 1 }}
									id="standard-basic"
									name="email"
									onBlur={handleOnBlur}
									type="email"
									label="Your Email"
									variant="standard"
								/>
								<TextField
									sx={{ width: "75%", m: 1 }}
									id="standard-basic"
									name="password"
									onBlur={handleOnBlur}
									type="password"
									label="Your Password"
									variant="standard"
								/>
								<TextField
									sx={{ width: "75%", m: 1 }}
									id="standard-basic"
									name="password2"
									onBlur={handleOnBlur}
									type="password"
									label="Re-Type Your Password"
									variant="standard"
								/>
								<br />
								{user?.email && (
									<Alert
										// style={{ width: "50%", margin: "1", marginLeft: "125px" }}
										severity="success"
										color="info"
									>
										Your Account Successfully Created
									</Alert>
								)}
								{authError && (
									<Alert
										// style={{ width: "50%", margin: "1", marginLeft: "125px" }}
										variant="filled"
										severity="error"
									>
										{authError}
									</Alert>
								)}
								<Button
									sx={{ width: "75%", m: 1 }}
									type="submit"
									variant="contained"
								>
									Register
								</Button>

								<NavLink style={{ textDecoration: "none" }} to="/login">
									<Button>Already Register ! Please Login ?</Button>
								</NavLink>
							</form>
						)}
						{isLoading && <LinearProgress color="secondary" />}
					</Grid>

					<Grid item xs={12} md={6}>
						<img style={{ width: "100%" }} src={login} alt="" />
					</Grid>
				</Grid>
			</Container>
			<Footer></Footer>
		</>
	);
};

export default Register;

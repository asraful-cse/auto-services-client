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
import { NavLink, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";
import Footer from "../../../Footer/Footer";
import login from "../../../../images/fantasy.png";
import googleImg from "../../../../images/googleLogin.jpg";
const Login = () => {
	const [loginData, setLoginData] = useState({});
	const { user, loginUser, isLoading, authError, signInWithGoogle } = useAuth();

	// PrivateRoute er jonno------------------------------
	const location = useLocation();
	const history = useHistory();
	const handleOnChange = (e) => {
		const field = e.target.name;
		const value = e.target.value;
		// console.log(field, value);
		const newLoginData = { ...loginData };
		newLoginData[field] = value;
		setLoginData(newLoginData);
	};
	const handleLoginSubmit = (e) => {
		loginUser(loginData.email, loginData.password, location, history);
		e.preventDefault();
	};

	// google sign in er event-------------------------------
	const handleGoogleSignIN = () => {
		signInWithGoogle(location, history);
	};
	return (
		<>
			<Container>
				<Grid container spacing={2}>
					<Grid
						item
						xs={12}
						md={6}
						data-aos="fade-down"
						data-aos-easing="linear"
						data-aos-duration="1500"
					>
						<Typography
							sx={{ mt: 8, color: "#ad2121" }}
							variant="h4"
							gutterBottom
						>
							Please Login Now ?
						</Typography>

						{!isLoading && (
							<form onSubmit={handleLoginSubmit}>
								<TextField
									sx={{ width: "75%", m: 1 }}
									id="standard-basic"
									name="email"
									onChange={handleOnChange}
									type="email"
									label="Your Email"
									variant="standard"
								/>
								<TextField
									sx={{ width: "75%", m: 1 }}
									id="standard-basic"
									name="password"
									onChange={handleOnChange}
									type="password"
									label="Your Password"
									variant="standard"
								/>
								<br />
								{user?.email && (
									<Alert
										// style={{ width: "50%", margin: "1", marginLeft: "125px" }}
										severity="success"
										color="info"
									>
										Your Account Login Successfully
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
									Login
								</Button>

								<NavLink style={{ textDecoration: "none" }} to="/register">
									<Button>New user ! please register ?</Button>
								</NavLink>
							</form>
						)}
						{isLoading && <LinearProgress color="secondary" />}
						<p>--------------------------</p>
						<Button
							onClick={handleGoogleSignIN}
							variant="contained"
							data-aos="zoom-in-down"
						>
							<img
								style={{ width: "100%", height: "30px", borderRadius: "4px" }}
								src={googleImg}
								alt=""
							/>
						</Button>
					</Grid>

					<Grid
						item
						xs={12}
						md={6}
						data-aos="flip-up"
						data-aos-easing="ease-out-cubic"
						data-aos-duration="1500"
					>
						<img style={{ width: "100%" }} src={login} alt="" />
					</Grid>
				</Grid>
			</Container>
			<Footer></Footer>
		</>
	);
};

export default Login;

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import "./App.css";
import Home from "./components/Home/Home";
import Details from "./components/Details/Details";
import NotFound from "./components/NotFound/NotFound";
import AuthProvider from "./Context/AuthProvider";
import ExploreServices from "./components/Services/ExploreServices/ExploreServices";
import Register from "./components/Shared/Login/Register/Register";
import Login from "./components/Shared/Login/Login/Login";
import PrivateRoute from "./components/Shared/Login/PrivateRoute/PrivateRoute";
import Navbar from "./components/Shared/Navigation/Navbar";
import Dashboard from "./components/Dashboard/Dashboard";
import Contact from "./components/From/Contact/Contact";

function App() {
	return (
		<AuthProvider>
			<Router>
				<Navbar></Navbar>
				<Switch>
					<Route exact path="/">
						<Home></Home>
					</Route>
					<Route exact path="/home">
						<Home></Home>
					</Route>
					<Route exact path="/explore">
						<ExploreServices></ExploreServices>
					</Route>
					<PrivateRoute exact path="/services/:serviceId">
						<Details></Details>
					</PrivateRoute>
					<Route path="/dashboard">
						<Dashboard />
					</Route>
					<Route exact path="/login">
						<Login></Login>
					</Route>
					<Route exact path="/register">
						<Register></Register>
					</Route>
					<Route exact path="/contact">
						<Contact></Contact>
					</Route>

					<Route exact path="*">
						<NotFound></NotFound>
					</Route>
				</Switch>
			</Router>
		</AuthProvider>
	);
}

export default App;

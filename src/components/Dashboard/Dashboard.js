// all dashboard MUI import link-------------------------------------------
import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
// nested Route import link---------------------------------------------------
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
// ------------------------------------------------------------------------
// All component and react router dom import link--------------------------
import { useEffect, useState } from "react";
// import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Dashboard.css";
import Pay from "../Pay/Pay";
import MyBookings from "../MyBookings/MyBookings";
import Review from "../Review/Review";
import ManageOrders from "../ManageOrders/ManageOrders";
import AddServices from "../AddServices/AddServices";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ManageServices from "../ManageServices/ManageServices";
import NotFound from "../NotFound/NotFound";

// dashboard drawer width-------------------------------------------------------
const drawerWidth = 152;
const Dashboard = (props) => {
	// let { path, url } = useRouteMatch();
	const { user, logOut } = useAuth();
	const [isAdmin, setIsAdmin] = useState(false);
	const [isUser, setIsUser] = useState(false);
	useEffect(() => {
		fetch(
			`https://limitless-cliffs-19356.herokuapp.com/checkAdmin/${user?.email}`
		)
			.then((res) => res.json())
			.then((data) => {
				if (data[0]?.role === "admin") {
					setIsAdmin(true);
					setIsUser(false);
					// alert("Admin Added Successfully");
				} else {
					setIsAdmin(false);
					setIsUser(true);
				}
			});
	}, [user?.email]);

	// dashboard link and props  ------------------------------------------------
	const { window } = props;
	const [mobileOpen, setMobileOpen] = React.useState(false);
	//Nested route er 	useRouteMatch by doc-------------------------------------
	let { path, url } = useRouteMatch();

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const drawer = (
		<div>
			<Toolbar />

			<Divider />

			<Link to={`${url}`} style={{ textDecoration: "none", color: "red" }}>
				<Button color="inherit">Dashboard</Button>
			</Link>
			{/* -------------------For User Link Added------------------ */}
			{isUser && (
				<div>
					<Link
						to={`${url}/payment`}
						style={{ textDecoration: "none", color: "green" }}
					>
						<Button color="inherit">Payment</Button>
					</Link>

					<Link
						to={`${url}/myOrders`}
						style={{ textDecoration: "none", color: "green" }}
					>
						<Button color="inherit">My Orders</Button>
					</Link>

					<Link
						to={`${url}/review`}
						style={{ textDecoration: "none", color: "green" }}
					>
						<Button color="inherit">Review</Button>
					</Link>
				</div>
			)}

			{/* ---------------------For Admin Link Added------------------ */}
			{isAdmin && (
				<div>
					<Link
						to={`${url}/manageAllOrders`}
						style={{ textDecoration: "none", color: "blue" }}
					>
						<Button style={{ fontSize: "13px" }} color="inherit">
							Manage Orders
						</Button>
					</Link>

					<Link
						to={`${url}/addProduct`}
						style={{ textDecoration: "none", color: "blue" }}
					>
						<Button style={{ fontSize: "13px" }} color="inherit">
							Add a Product
						</Button>
					</Link>
					<Link
						to={`${url}/makeAdmin`}
						style={{ textDecoration: "none", color: "blue" }}
					>
						<Button style={{ fontSize: "13px" }} color="inherit">
							Make Admin
						</Button>
					</Link>
					<Link
						to={`${url}/manageProducts`}
						style={{ textDecoration: "none", color: "blue", fontSize: "12px" }}
					>
						<Button style={{ fontSize: "13px" }} color="inherit">
							Manage Products
						</Button>
					</Link>
				</div>
			)}

			<Link to="/login" className="nav-link">
				<button
					style={{ fontSize: "11px" }}
					onClick={logOut}
					className="btn btn-danger me-1  "
				>
					SIGN OUT
				</button>
			</Link>
		</div>
	);

	const container =
		window !== undefined ? () => window().document.body : undefined;

	// ---------------------------------------------------------------------------------
	// ---------------------------------------------------------------------------------
	return (
		<>
			{/* start all component and link---------------------------------------------------------------- */}
			<Box sx={{ display: "flex" }}>
				<CssBaseline />
				<AppBar
					position="fixed"
					sx={{
						width: { sm: `calc(100% - ${drawerWidth}px)` },
						ml: { sm: `${drawerWidth}px` },
					}}
				>
					<Toolbar>
						<IconButton
							color="inherit"
							aria-label="open drawer"
							edge="start"
							onClick={handleDrawerToggle}
							sx={{ mr: 2, display: { sm: "none" } }}
						>
							<MenuIcon />
						</IconButton>
						<Typography variant="h6" noWrap component="div">
							DASHBOARD
						</Typography>
					</Toolbar>
				</AppBar>
				<Box
					component="nav"
					sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
					aria-label="mailbox folders"
				>
					{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
					<Drawer
						container={container}
						variant="temporary"
						open={mobileOpen}
						onClose={handleDrawerToggle}
						ModalProps={{
							keepMounted: true, // Better open performance on mobile.
						}}
						sx={{
							display: { xs: "block", sm: "none" },
							"& .MuiDrawer-paper": {
								boxSizing: "border-box",
								width: drawerWidth,
							},
						}}
					>
						{drawer}
					</Drawer>
					<Drawer
						variant="permanent"
						sx={{
							display: { xs: "none", sm: "block" },
							"& .MuiDrawer-paper": {
								boxSizing: "border-box",
								width: drawerWidth,
							},
						}}
						open
					>
						{drawer}
					</Drawer>
				</Box>
				<Box
					component="main"
					sx={{
						flexGrow: 1,
						p: 3,
						width: { sm: `calc(100% - ${drawerWidth}px)` },
					}}
				>
					<Toolbar />
					{/* calendar and appointments components using in dashboard */}
					<Switch>
						<Route exact path={path}>
							{/* <DashboardHome></DashboardHome> */}
						</Route>
						{/* -----------------------For User Components---------------------- */}
						<Route path={`${path}/payment`}>
							<Pay />
						</Route>
						<Route path={`${path}/myOrders`}>
							<MyBookings />
						</Route>

						<Route path={`${path}/review`}>
							<Review />
						</Route>
						{/* -----------------------For Admin Components---------------------- */}
						<Route path={`${path}/manageAllOrders`}>
							<ManageOrders />
						</Route>
						<Route path={`${path}/addProduct`}>
							<AddServices />
						</Route>
						<Route path={`${path}/makeAdmin`}>
							<MakeAdmin />
						</Route>
						<Route path={`${path}/manageProducts`}>
							<ManageServices />
						</Route>
						<Route exact path="*">
							<NotFound></NotFound>
						</Route>
					</Switch>
				</Box>
			</Box>
		</>
	);
};
Dashboard.propTypes = {
	window: PropTypes.func,
};

export default Dashboard;

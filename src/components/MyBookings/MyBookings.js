import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
// Table import MUI-------------------------------
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const MyBookings = () => {
	const [bookings, setBooking] = useState([]);
	const { user } = useAuth();

	useEffect(() => {
		fetch(`https://limitless-cliffs-19356.herokuapp.com/myOrder/${user?.email}`)
			.then((res) => res.json())
			.then((data) => setBooking(data));
	}, [user?.email]);
	// ---------------------------delete order-------------------
	const handleDeleteUser = (id) => {
		const proceed = window.confirm("Are you sure, you want to delete?");
		if (proceed) {
			const url = `https://limitless-cliffs-19356.herokuapp.com/myOrder/${id}`;
			fetch(url, {
				method: "DELETE",
			})
				.then((res) => res.json())
				.then((data) => {
					if (data.deletedCount > 0) {
						alert("deleted successfully");
						const remainingUsers = bookings.filter((order) => order._id !== id);
						setBooking(remainingUsers);
					}
				});
		}
	};
	// ----------------------------------------------------------
	return (
		<div className="container">
			<h2>My Total Orders: {bookings.length}</h2>
			<TableContainer component={Paper}>
				<Table sx={{}} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>Watch name</TableCell>

							<TableCell align="right">Email</TableCell>
							<TableCell align="right">Phone</TableCell>
							<TableCell align="right">Status</TableCell>
							<TableCell align="right">Action</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{bookings?.map((pd, index) => (
							<TableRow
								key={pd._id}
								sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
								style={{ fontSize: "11px" }}
							>
								<TableCell
									style={{ fontSize: "15px" }}
									component="th"
									scope="row"
								>
									{pd?.name}
								</TableCell>

								<TableCell style={{ fontSize: "15px" }} align="right">
									{pd?.email}
								</TableCell>
								<TableCell style={{ fontSize: "15px" }} align="right">
									{pd?.phone}
								</TableCell>
								<TableCell style={{ fontSize: "15px" }} align="right">
									{pd?.status}
								</TableCell>
								<TableCell
									style={{ fontSize: "15px", color: "red" }}
									align="right"
								>
									<button
										style={{ color: "red" }}
										onClick={() => handleDeleteUser(pd?._id)}
									>
										Delete
									</button>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
};

export default MyBookings;

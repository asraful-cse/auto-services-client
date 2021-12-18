import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
// Table import MUI-------------------------------
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
const ManageOrders = () => {
	const [orders, setOrders] = useState([]);
	const { register, handleSubmit } = useForm();

	const [status, setStatus] = useState("");
	const [orderId, setOrderId] = useState("");

	console.log(status);
	useEffect(() => {
		fetch("https://limitless-cliffs-19356.herokuapp.com/allOrders")
			.then((res) => res.json())
			.then((data) => setOrders(data));
	}, []);

	const handleOrderId = (id) => {
		setOrderId(id);
		console.log(id);
	};

	const onSubmit = (data) => {
		console.log(data, orderId);
		fetch(
			`https://limitless-cliffs-19356.herokuapp.com/statusUpdate/${orderId}`,
			{
				method: "PUT",
				headers: { "content-type": "application/json" },
				body: JSON.stringify(data),
			}
		)
			.then((res) => res.json())
			.then(
				(result) => {
					if (result?.acknowledged) {
						alert("Your status updated successfully");
					}
				}
				// console.log(result)
			);
	};

	return (
		<div className="container">
			<h2>Total Orders: {orders.length}</h2>
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
						{orders?.map((pd, index) => (
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
									<form onSubmit={handleSubmit(onSubmit)}>
										<select
											onClick={() => handleOrderId(pd?._id)}
											{...register("status")}
										>
											<option value={pd?.status}>{pd?.status}</option>
											<option value="shipped">shipped</option>
											<option value="pending">pending</option>
											<option value="approved">approver</option>
										</select>
										<input type="submit" />
									</form>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
};

export default ManageOrders;

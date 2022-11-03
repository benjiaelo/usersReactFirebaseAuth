import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import ProtectedRoute from "./components/ProtectedRoute";

function Routing() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={
						<ProtectedRoute>
							<Home />
						</ProtectedRoute>
					}
				/>
				<Route path="/register" element={<Register />} />
				<Route path="/signin" element={<Signin />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Routing;

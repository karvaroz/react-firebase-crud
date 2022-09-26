import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import Home from "./components/Home";
import Login from "./components/Login";

import { useEffect, useState } from "react";

import ProtectedRoute from "./routes/ProtectedRoute";
import PublicRoute from "./routes/PublicRoute";

const App = () => {
	const [checking, setChecking] = useState(true);
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		const auth = getAuth();
		onAuthStateChanged(auth, (user) => {
			if (user?.uid) {
				console.log("User is logged in");
				setIsLoggedIn(true);
			} else {
				setIsLoggedIn(false);
			}
			setChecking(false);
		});
	}, [setIsLoggedIn, setChecking, isLoggedIn]);

	if (checking) {
		return <h1>Espere....</h1>;
	}
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/home"
					element={
						// <ProtectedRoute isAuth={isLoggedIn}>
							<Home />
						// </ProtectedRoute>
					}
				/>
				<Route
					path="/"
					element={
						// <PublicRoute isAuth={isLoggedIn}>
							<Login />
						// </PublicRoute>
					}
				/>
				<Route
					path="/*"
					element={<Navigate to="/" />}
				/>
			</Routes>
		</BrowserRouter>
	);
};

export default App;

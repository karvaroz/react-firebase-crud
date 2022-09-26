import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

import Lottie from "react-lottie";
import groovyWalkAnimation from "./assets/groovyWalk.json";

import Home from "./components/Home";
import Login from "./components/Login";

import { Fragment, useEffect, useState } from "react";

import ProtectedRoute from "./routes/ProtectedRoute";
import PublicRoute from "./routes/PublicRoute";

import { auth } from "./firebase/firebaseConfig";

const App = () => {
	const [checking, setChecking] = useState(true);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [userInfo, setUserInfo] = useState("User");

	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: groovyWalkAnimation,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user?.uid) {
				setIsLoggedIn(true);
				setUserInfo(user.email);
			} else {
				setIsLoggedIn(false);
			}
			setChecking(false);
		});
	}, [setIsLoggedIn, setChecking, isLoggedIn]);

	if (checking) {
		return (
			<Fragment>
				<h3 className="text-center">Espere ...</h3>
				<Lottie
					options={defaultOptions}
					height={400}
					width={400}
				/>
			</Fragment>
		);
	}
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/home"
					element={
						<ProtectedRoute isAuth={isLoggedIn}>
							<Home userInfo={userInfo} />
						</ProtectedRoute>
					}
				/>
				<Route
					path="/"
					element={
						<PublicRoute isAuth={isLoggedIn}>
							<Login />
						</PublicRoute>
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

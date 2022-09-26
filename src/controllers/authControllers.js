import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
} from "firebase/auth";

import { auth } from "../firebase/firebaseConfig";

import { Toast } from "../utils/toast";

export const createNewUser = async (email, password) => {
	await createUserWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			const user = userCredential.user;
			Toast.fire({
				icon: "success",
				title: "Usuario creado",
			});
			console.log(user);
		})
		.catch((error) => {
			Toast.fire({
				icon: "error",
				title: "Error ‼ " + error.message,
			});
		});
};

export const loginRequest = async (email, password) => {
	signInWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			const user = userCredential.user;
			Toast.fire({
				icon: "success",
				title: "Bienvenid@ 😄" + user.email,
			});
			console.log(user)
		})
		.catch((error) => {
			Toast.fire({
				icon: "error",
				title: "Error ‼ " + error.message,
			});
		});
};

export const logoutRequest = async () => {
	signOut(auth)
		.then(() => {
			Toast.fire({
				icon: "success",
				title: "Hasta pronto ✌",
			});
		})
		.catch((error) => {
			Toast.fire({
				icon: "error",
				title: "Error ‼ " + error.message,
			});
		});
};

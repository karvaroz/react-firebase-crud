import {

	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from "firebase/auth";

import Swal from "sweetalert2";

import { auth } from "../firebase/firebaseConfig";


const Toast = Swal.mixin({
	toast: true,
	position: "top-end",
	showConfirmButton: false,
	timer: 3000,
	timerProgressBar: true,
	didOpen: (toast) => {
		toast.addEventListener("mouseenter", Swal.stopTimer);
		toast.addEventListener("mouseleave", Swal.resumeTimer);
	},
});

export const createNewUser = async (email, password) => {
	await createUserWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			const user = userCredential.user;
			Toast.fire({
				icon: "success",
				title: "Usuario creado: "
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

export const loginRequest = async (email, password) => {
	signInWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {

			const user = userCredential.user;
			Toast.fire({
				icon: "success",
				title: "Bienvenid@ " + user.username,
			});
		})
		.catch((error) => {
			Toast.fire({
				icon: "error",
				title: "Error ‼ " + error.message,
			});
		});
};

import {
	collection,
	addDoc,
	getDocs,
	doc,
	deleteDoc,
	getDoc,
	setDoc,
	updateDoc,
} from "firebase/firestore";

import { db } from "../firebase/firebaseConfig";

import { Toast } from "../utils/toast";

export const createNewItem = async (item) => {
	try {
		await addDoc(collection(db, "users"), {
			name: item.name,
			age: item.age,
			profession: item.profession,
		});
		Toast.fire({
			icon: "success",
			title: "Registro creado",
		});
	} catch (error) {
		Toast.fire({
			icon: "error",
			title: "Error ‼ " + error.message,
		});
	}
};

export const getUsersList = async (state) => {
	try {
		const querySnapshot = await getDocs(collection(db, "users"));
		const users = [];
		querySnapshot.forEach((user) => {
			users.push({
				data: user.data(),
				id: user.id,
			});
		});
		state(users);
	} catch (error) {
		Toast.fire({
			icon: "error",
			title: "Error ‼ " + error.message,
		});
	}
};

export const deleteDocRequest = async (userId) => {
	try {
		await deleteDoc(doc(db, "users", userId));
		Toast.fire({
			icon: "success",
			title: "Registro Eliminado",
		});
	} catch (error) {
		Toast.fire({
			icon: "error",
			title: "Error ‼ " + error.message,
		});
	}
};

export const updateDocRequest = async (userId) => {
	try {
		const userRef = doc(db, "users", userId);
		await updateDoc(userRef, {
			name: "Nombre",
			age: 10,
			profession: "admin",
		});
		Toast.fire({
			icon: "success",
			title: "Registro Actualizado",
		});
	} catch (error) {
		Toast.fire({
			icon: "error",
			title: "Error ‼ " + error.message,
		});
	}
};

import {
	collection,
	addDoc,
	getDocs,
	doc,
	deleteDoc,
	getDoc,
	setDoc,
} from "firebase/firestore";

import { db } from "../firebase/firebaseConfig";

import { Toast } from "../utils/toast";

export const createNewItem = async (item) => {
	try {
		await addDoc(
			collection(db, "users"), {
				name: item.name,
				age: item.age,
				profession: item.profession,
			}
		);
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

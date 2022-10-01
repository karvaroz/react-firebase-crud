import { useEffect, useState } from "react";
import {
	deleteDocRequest,
	updateDocRequest,
} from "../controllers/crudControllers";

const ListUsers = ({ usersList }) => {
	const [idToEdit, setIdToEdit] = useState("");

	const handleDelete = (userId) => {
		deleteDocRequest(userId);
	};

	useEffect(() => {
		idToEdit !== "" && updateDocRequest(idToEdit);
	}, [idToEdit]);

	return (
		<div className="col-md-8">
			<h3 className="text-center mb-3">Lista de Usuarios</h3>
			<div className="container">
				{usersList.length > 0 &&
					usersList.map((user) => (
						<div
							className="card m-4"
							key={user.id}>
							<div className="card-body">
								<p className="card-title text-black">
									<b>Nombre: </b>
									{user.data.name}
								</p>
								<p className="card-text text-black">
									<b>Edad: </b>
									{user.data.age}
								</p>
								<p className="card-text text-black">
									<b>Profesion: </b> {user.data.profession}
								</p>
								<button
									className="btn btn-success m-1"
									onClick={() => setIdToEdit(user.id)}>
									<ion-icon
										name="create-sharp"
										style={{ color: "white" }}></ion-icon>
								</button>
								<button
									className="btn btn-danger"
									onClick={() => handleDelete(user.id)}>
									<ion-icon
										name="trash-sharp"
										style={{ color: "white" }}></ion-icon>
								</button>
							</div>
						</div>
					))}
			</div>
		</div>
	);
};

export default ListUsers;

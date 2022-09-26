import { useState } from "react";

import { createNewItem } from "../controllers/crudControllers";

const FormUsers = () => {
	const initialValues = {
		name: "",
		age: "",
		profession: "",
	};

	const [user, setUser] = useState(initialValues);

	const getValues = (e) => {
		const { name, value } = e.target;
		setUser({ ...user, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		createNewItem(user);
		setUser(initialValues);
	};

	return (
		<div className="col-md-4">
			<h3 className="mb-3">Ingresa Registro</h3>
			<form onSubmit={handleSubmit}>
				<div className="card card-body">
					<div className="form-group ">
						<input
							type="text"
							placeholder="Nombre del Usuario 😀"
							className="form-control mb-3"
							name="name"
							onChange={getValues}
							value={user.name}
							required
						/>
						<input
							type="number"
							placeholder="Edad del Usuario 🔟"
							className="form-control mb-3"
							name="age"
							onChange={getValues}
							value={user.age}
							required
						/>
						<input
							type="text"
							placeholder="Profesion del Usuario 👩‍⚕️"
							className="form-control mb-3"
							name="profession"
							onChange={getValues}
							value={user.profession}
							required
						/>
					</div>
					<button className="btn btn-primary text-white">Crear Registro</button>
				</div>
			</form>
		</div>
	);
};

export default FormUsers;

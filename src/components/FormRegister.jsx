import { Fragment } from "react";

import { createNewUser } from "../controllers/authControllers";

const FormRegister = ({ registerSection, setRegisterSection }) => {
	const handleFormSubmit = (e) => {
		e.preventDefault();
		const email = e.target.email.value;
		const password = e.target.password.value;
		createNewUser(email, password);
	};

	return (
		<Fragment>
			<h3>Crear una cuenta</h3>
			<form onSubmit={handleFormSubmit}>
				<div className="mb-3">
					<label htmlFor="email">Nombre</label>
					<input
						type="text"
						className="form-control"
						placeholder="Test"
						id="name"
						name="name"
						required
						autoComplete="off"
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="email">Correo Electrónico</label>
					<input
						type="email"
						className="form-control"
						placeholder="test@test.com"
						id="email"
						name="email"
						required
						autoComplete="off"
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="password">Contraseña</label>
					<input
						type="password"
						className="form-control"
						id="password"
						name="password"
						placeholder="**********"
						required
						autoComplete="off"
					/>
				</div>
				<div className="mb-3 d-flex text-center">
					<button
						className="btn btn-warning me-1"
						type="submit">
						Registrarse
					</button>
					<button
						className="btn btn-info"
						type="submit"
						onClick={() => setRegisterSection(!registerSection)}>
						Ya tengo una cuenta? Inicia Sesión
					</button>
				</div>
			</form>
		</Fragment>
	);
};

export default FormRegister;

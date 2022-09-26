import { Fragment } from "react";

import { loginRequest } from "../controllers/authControllers";

const FormLogin = ({ registerSection, setRegisterSection }) => {
	const handleFormSubmit = (e) => {
		e.preventDefault();
		const email = e.target.email
		const password = e.target.password
		loginRequest(email, password);
	};

	return (
		<Fragment>
			<h3>Iniciar Sesión</h3>
			<form onSubmit={handleFormSubmit}>
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
				<div className="mb-3">
					<button
						className="btn btn-info me-1"
						type="submit">
						Iniciar Sesión
					</button>
					<button
						className="btn btn-warning"
						type="submit"
						onClick={() => setRegisterSection(!registerSection)}>
						No tienes una cuenta? Registrate
					</button>
				</div>
			</form>
		</Fragment>
	);
};

export default FormLogin;

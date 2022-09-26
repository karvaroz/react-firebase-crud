import { Fragment } from "react";

const FormLogin = ({ registerSection, setRegisterSection }) => {
	return (
		<Fragment>
			<h3>Iniciar Sesión</h3>
			<form>
				<div className="mb-3">
					<label htmlFor="email">Correo Electrónico</label>
					<input
						type="text"
						className="form-control"
						placeholder="test@test.com"
						id="email"
						name="email"
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
					/>
				</div>
				<div className="mb-3 text-center">
					<button
						className="btn btn-info me-5"
						type="submit">
						Iniciar Sesión
					</button>
					<button
						className="btn btn-warning"
						type="submit"
						onClick={() => setRegisterSection(!registerSection)}>
						Registrarse
					</button>
				</div>
			</form>
		</Fragment>
	);
};

export default FormLogin;

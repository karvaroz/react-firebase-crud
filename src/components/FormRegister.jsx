import { Fragment } from "react";

const FormRegister = ({ registerSection, setRegisterSection }) => {
	return (
		<Fragment>
			<h3>Crear una cuenta</h3>
			<form>
				<div className="mb-3">
					<label htmlFor="email">Nombre</label>
					<input
						type="text"
						className="form-control"
						placeholder="Test"
						id="name"
						name="name"
					/>
				</div>
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
				<div className="mb-3 d-flex text-center">
					<button
						className="btn btn-warning me-5"
						type="submit">
						Registrarse
					</button>
					<button
						className="btn btn-info"
						type="submit"
						onClick={() => setRegisterSection(!registerSection)}>
						Inicio de Sesión
					</button>
				</div>
			</form>
		</Fragment>
	);
};

export default FormRegister;

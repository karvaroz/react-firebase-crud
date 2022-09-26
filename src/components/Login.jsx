import Lottie from "react-lottie";
import animationData from "../assets/home.json";

const Login = () => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};
	return (
		<div className="row container p-4">
			<div className="col-md-8">
				<Lottie
					options={defaultOptions}
					height={400}
					width={400}
				/>
			</div>
			<div className="col-md-4">
				<div className="mt-5 ms-5">
					<h3>Iniciar Sesión</h3>
					<form action="">
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
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;

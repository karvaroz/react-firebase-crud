import { useState } from "react";
import Lottie from "react-lottie";

import animationData from "../assets/home.json";

import FormLogin from "./FormLogin";
import FormRegister from "./FormRegister";

const Login = () => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};
	const [registerSection, setRegisterSection] = useState(false);

	return (
		<div className="row container-fluid p-4">
			<div className="col-md-6">
				<Lottie
					options={defaultOptions}
					height={400}
					width={400}
				/>
			</div>
			<div className="col-md-4">
				<div className="mt-5 ms-5">
					{registerSection ? (
						<FormLogin
							registerSection={registerSection}
							setRegisterSection={setRegisterSection}
						/>
					) : (
						<FormRegister
							registerSection={registerSection}
							setRegisterSection={setRegisterSection}
						/>
					)}
				</div>
			</div>
		</div>
	);
};

export default Login;

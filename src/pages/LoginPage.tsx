import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
	const env = import.meta.env;
	const [formState, setFormState] = useState({
		user: "",
		pass: "",
	});
	const navigate = useNavigate();

	const changeFormState = (
		field: string,
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		setFormState({ ...formState, [field]: e.target.value });
	};

	const formSubmit = (e: React.MouseEvent) => {
		e.preventDefault();
		e.stopPropagation();

		if (env.VITE_API_USER.includes(formState.user) && env.VITE_API_PASS_USER) {
			// !!Loguear y mover a pantalla principal

			navigate("/pedidos");
		} else {
			//!! error, usuario o pass incorrecto
		}
	};

	return (
		<section className="w-full h-full flex justify-center items-center">
			<div className="w-4/12 h-5/6 bg-primary shadow-3xl rounded">
				<div className="h-1/6 flex items-center justify-center">
					<h1 className="text-5xl text-accent font-semibold">Login</h1>
				</div>

				<section className="h-5/6">
					<form className="h-full flex flex-col items-center">
						<div className="flex flex-col h-2/6 w-10/12 ps-3">
							<label
								htmlFor="user"
								className="text-3xl text-accent font-semibold mb-3 mt-4 self-center"
							>
								Usuario
							</label>

							<input
								type="text"
								onChange={(e) => changeFormState("user", e)}
								className="rounded w-10/12 self-center  bg-accent/30 py-1 text-secondary-accent font-semibold text-center  focus:outline focus:outline-accent shadow-3xl"
							/>
						</div>
						<div className="flex flex-col h-2/6 w-10/12 ps-3">
							<label
								htmlFor="user"
								className="text-3xl text-accent font-semibold mb-3 mt-4 self-center"
							>
								Contraseña
							</label>

							<input
								type="password"
								className="rounded w-10/12 self-center  bg-accent/30  py-1 text-secondary-accent font-semibold text-center focus:outline focus:outline-accent shadow-3xl"
								onChange={(e) => changeFormState("pass", e)}
							/>
						</div>

						<div className="h-2/6">
							<button
								type="submit"
								className="bg-accent text-primary rounded font-semibold text-3xl px-6 py-3 shadow-md"
								onClick={(e) => formSubmit(e)}
							>
								Login
							</button>
						</div>
					</form>
				</section>
			</div>
		</section>
	);
};

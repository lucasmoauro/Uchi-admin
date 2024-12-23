import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
	const env = import.meta.env;
	const [formState, setFormState] = useState({
		user: "",
		pass: "",
	});
	const [isUserChecked, setIsUserChecked] = useState(false);
	const navigate = useNavigate();

	const changeFormState = (
		field: string,
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		setFormState({ ...formState, [field]: e.target.value });
	};

	const rememberUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (formState.user.length && e.target.checked) {
			localStorage.setItem("uchiAdminUser", formState.user);
			setIsUserChecked(true);
		}

		if (!e.target.checked) {
			localStorage.removeItem("uchiAdminUser");
			setIsUserChecked(false);
		}
	};

	const formSubmit = (e: React.MouseEvent) => {
		e.preventDefault();
		e.stopPropagation();

		if (
			env.VITE_API_USER.includes(formState.user) &&
			env.VITE_API_PASS_USER.includes(formState.pass)
		) {
			// !!Loguear y mover a pantalla principal

			navigate("/pedidos");
		} else {
			alert("incorrecto");
			//!! error, usuario o pass incorrecto
		}
	};

	useEffect(() => {
		const isUserInLocal = localStorage.getItem("uchiAdminUser");
		if (isUserInLocal?.length) {
			setFormState({ ...formState, user: isUserInLocal });
			setIsUserChecked(true);
		}
	}, []);

	return (
		<section className="w-full h-full flex justify-center items-center">
			<div className="w-4/12 h-5/6 bg-primary shadow-3xl rounded">
				<div className="h-1/6 flex items-center justify-center">
					<h1 className="text-5xl text-accent font-semibold">Login</h1>
				</div>

				<section className="h-5/6 flex justify-center">
					<form className="h-full w-11/12 flex flex-col items-center justify-center">
						<div className="flex flex-col h-2/6 w-10/12 ps-3">
							<label
								htmlFor="user"
								className="text-3xl text-accent font-semibold mb-3 mt-4 self-center"
							>
								Usuario
							</label>

							<input
								type="text"
								value={formState.user}
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

						<div className="h-2/6 w-full flex flex-col items-center justify-evenly">
							<div className=" w-full flex items-center justify-center">
								<input
									type="checkbox"
									id="remember"
									checked={isUserChecked}
									className="cursor-pointer w-4 h-4 mr-2"
									onChange={rememberUsername}
								/>
								<label
									htmlFor="remember"
									className="cursor-pointer text-xl text-accent font-semibold"
								>
									¿Recordar usuario?
								</label>
							</div>
							<div>
								<button
									type="submit"
									className="bg-accent text-primary rounded font-semibold text-3xl px-6 py-3 shadow-md"
									onClick={(e) => formSubmit(e)}
								>
									Login
								</button>
							</div>
						</div>
					</form>
				</section>
			</div>
		</section>
	);
};

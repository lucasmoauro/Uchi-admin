import { Link, useNavigate } from "react-router-dom";

type Links = {
	href: string;
	title: string;
};

const links: Links[] = [
	{
		href: "/pedidos",
		title: "Pedidos",
	},
	{
		href: "/nuevo-pedido",
		title: "Crear Pedido",
	},
	{
		href: "/precios",
		title: "Cambiar Precios",
	},
];

export const Navbar = () => {
	const navigate = useNavigate();

	const closeSession = () => {
		navigate("/login");
	};

	return (
		<aside className="w-2/12 pt-3 h-full bg-primary shadow-3xl z-10 text-accent">
			<h2 className="text-3xl text-center font-bold">Secciones</h2>
			<ul className="h-2/6 text-2xl flex flex-col justify-evenly font-semibold">
				{links.map((link) => (
					<Link
						to={link.href}
						className="cursor-pointer hover:bg-accent/20 pl-6 py-2"
						key={link.title}
					>
						{link.title}
					</Link>
				))}
			</ul>
			<div className="text-center h-96 flex flex-col justify-end">
				<button
					className="text-2xl font-semibold text-center py-2 hover:bg-accent/20"
					onClick={closeSession}
				>
					Cerrar Sesion
				</button>
			</div>
		</aside>
	);
};

import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<aside className="w-2/12 pt-3 h-full">
			<h2 className="text-2xl text-center">Secciones</h2>
			<ul className="h-2/6 text-xl flex flex-col justify-evenly pl-6">
				<li className="cursor-pointer">
					<Link to="/">Pedidos</Link>
				</li>
				<li className="cursor-pointer">
					<Link to="/nuevo-pedido">Crear Pedido</Link>
				</li>
				<li className="cursor-pointer">
					<Link to="/precios">Cambiar Precios</Link>
				</li>
				<li className="cursor-pointer"></li>
			</ul>
		</aside>
	);
};

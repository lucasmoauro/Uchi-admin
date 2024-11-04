import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";

export const Layout = () => {
	return (
		<main className="w-full h-screen flex">
			<Navbar />
			<section className="w-10/12 bg-primary">
				<Outlet />
			</section>
		</main>
	);
};

import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar";

export const Layout = () => {
	const { pathname } = useLocation();

	return (
		<main className="w-full h-screen flex">
			{!pathname.includes("/login") && <Navbar />}
			<section
				className={`${
					pathname.includes("/login") ? "w-full" : "w-10/12"
				} bg-primary`}
			>
				<Outlet />
			</section>
		</main>
	);
};

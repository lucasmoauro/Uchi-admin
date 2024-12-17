import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../Layout";
import { MainPage } from "../pages/MainPage";
import { CreateOrderPage } from "../pages/CreateOrderPage";
import { ChangePricePage } from "../pages/ChangePricePage";
import { LoginPage } from "../pages/LoginPage";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{ path: "/login", element: <LoginPage /> },
			{ path: "pedidos", element: <MainPage /> },
			{ path: "nuevo-pedido", element: <CreateOrderPage /> },
			{ path: "precios", element: <ChangePricePage /> },
		],
	},
]);

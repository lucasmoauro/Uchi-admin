import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../Layout";
import { MainPage } from "../pages/MainPage";
import { CreateOrderPage } from "../pages/CreateOrderPage";
import { ChangePricePage } from "../pages/ChangePricePage";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{ path: "/", element: <MainPage /> },
			{ path: "nuevo-pedido", element: <CreateOrderPage /> },
			{ path: "precios", element: <ChangePricePage /> },
		],
	},
]);

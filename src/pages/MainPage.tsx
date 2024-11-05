import { TableRow } from "../components/table/tableRow";

const thRow = [
	{
		title: "Pedido N°",
	},
	{
		title: "Nombre",
	},
	{
		title: "Telefono",
	},
	{
		title: "Comentarios",
	},
	{
		title: "Fecha",
	},
	{
		title: "Pago?",
	},
];

export const MainPage = () => {
	return (
		<section className="flex justify-center items-center h-screen">
			<div className="w-[90%] h-screen text-accent">
				<h1 className="text-4xl font-semibold text-center mt-6">Pedidos</h1>

				<table className="mt-6 flex flex-col">
					<thead>
						<tr className="text-2xl flex justify-between">
							{thRow.map((th) => (
								<th className="flex-1" key={th.title}>
									{th.title}
								</th>
							))}
						</tr>
					</thead>

					<tbody className="w-">
						<TableRow />
						<TableRow />
						<TableRow />
						<TableRow />
						<TableRow />
					</tbody>
				</table>
			</div>
		</section>
	);
};

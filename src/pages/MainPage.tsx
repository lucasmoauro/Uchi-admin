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
					<tr className="flex w-full odd:bg-secondary-accent/10 text-center py-3">
							<td className="flex-1">11111</td>
							<td className="flex-1">Pedro Gimenez</td>
							<td className="flex-1">099 098 099</td>
							<td className="flex-1 overflow-x-hidden text-ellipsis truncate">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Doloribus, dolor porro placeat culpa ipsum ea aliquid autem
								velit soluta tenetur atque voluptatem necessitatibus sit
								repellat impedit voluptatibus et amet facere.
							</td>
							<td className="flex-1">24/10/24</td>
							<td className="flex-1">
								<input
									type="checkbox"
									name=""
									id=""
									className="cursor-pointer w-4 h-4"
								/>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</section>
	);
};

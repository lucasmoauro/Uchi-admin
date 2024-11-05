export const TableRow = () => {
	return (
		<tr className="flex w-full odd:bg-secondary-accent/10 text-center py-3">
			<td className="flex-1">11111</td>
			<td className="flex-1">Pedro Gimenez</td>
			<td className="flex-1">099 098 099</td>
			<td className="flex-1 overflow-x-hidden text-ellipsis truncate">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus,
				dolor porro placeat culpa ipsum ea aliquid autem velit soluta tenetur
				atque voluptatem necessitatibus sit repellat impedit voluptatibus et
				amet facere.
			</td>
			<td className="flex-1">24/10/24</td>
			<td className="flex-1 items-center justify-center flex">
				<div className="flex justify-evenly w-8/12 items-center">
					<span className="cursor-pointer">
						<img src="/pencilEdit.svg" alt="" className="h-6" />
					</span>

					<span className="cursor-pointer">
						<img src="/trashcan.svg" alt="" className="h-6" />
					</span>
				</div>
			</td>
			<td className="flex-1">
				<input
					type="checkbox"
					name=""
					id=""
					className="cursor-pointer w-4 h-4"
				/>
			</td>
		</tr>
	);
};

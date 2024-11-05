import { FormInput } from "../components/orderFom/FormInput";
import { OrderPaymentMethod } from "../components/orderFom/OrderPaymentMethod";

const inputs = [
	{
		id: "nombre-completo",
		name: "nombre",
		placeholder: "Nombre",
		type: "text",
	},
	{
		id: "telefono",
		name: "telefono",
		placeholder: "099 999 999",
		type: "tel",
	},
];
const paymentMethods = [
	{
		id: "efectivo",
	},
	{
		id: "transferencia",
	},
	{
		id: "telefono",
	},
];

export const CreateOrderPage = () => {
	return (
		<section className="w-full h-full flex flex-col items-center justify-center">
			<div className="flex flex-col items-center  shadow-3xl w-6/12 rounded-lg">
				<h1 className="text-3xl font-semibold text-accent">Nuevo Pedido</h1>
				<form className="px-4 md:px-6 w-11/12 h-5/6">
					<div>
						<div>
							{/* //!! campos de pago */}

							{inputs.map((input) => (
								<FormInput
									id={input.id}
									name={input.name}
									placeholder={input.placeholder}
									type={input.type}
									key={input.id}
								/>
							))}
							<div className="col-span-full mt-5">
								<label
									htmlFor="about"
									className="block text-2xl font-medium leading-6 text-accent"
								>
									Comentarios
								</label>
								<div className="mt-2">
									<textarea
										id="about"
										name="about"
										rows={3}
										placeholder="Dejame algunos comentarios o indicaciones sobre tu pedido."
										// onChange={(e) =>
										// updatePaymentData("comments", e.target.value)
										// }
										className="block w-full resize-none rounded-md overflow-y-auto border-0 py-1.5 pl-3 bg-primary font-medium text-accent shadow-md ring-1 ring-inset ring-accent/45 placeholder:text-accent focus:ring-2 focus:ring-inset focus:ring-accent focus:outline-none sm:text-sm sm:leading-6"
									></textarea>
								</div>
							</div>
						</div>
					</div>

					<div className="pb-12">
						<div className="mt-10">
							<fieldset>
								<legend className="text-2xl font-medium leading-6 text-accent">
									Forma de pago
								</legend>
								{/* //! Forma de pago */}
								<div className="mt-6">
									<div className="w-full flex items-center justify-between md:justify-around">
										{paymentMethods.map((paymentMethod) => (
											<OrderPaymentMethod
												id={paymentMethod.id}
												key={paymentMethod.id}
											/>
										))}
									</div>
								</div>
							</fieldset>
						</div>
					</div>
				</form>
			</div>
		</section>
	);
};

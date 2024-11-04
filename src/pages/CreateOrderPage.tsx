export const CreateOrderPage = () => {
	return (
		<section className=" w-full h-full flex items-center justify-center">
			<form className="px-4 md:px-6 w-1/2 h-5/6">
				<div>
					<div>
						{/* //!! campos de pago */}
						<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 ">
							<div className="sm:col-span-1">
								<label
									// htmlFor={name}
									className="block text-2xl font-medium leading-6 text-accent capitalize"
								>
									{/* {name} */}
								</label>
								<div className="mt-2">
									<div className="flex rounded-md shadow-md ring-1 ring-inset ring-accent/45 focus-within:ring-2 focus-within:ring-inset focus-within:ring-accent">
										<input
											// type={type}
											// name={name}
											// id={name}
											autoComplete="off"
											className="block flex-1 border-0 bg-transparent py-1.5 text-accent text-xl capitalize placeholder:text-accent focus:ring-0 sm:text-sm sm:leading-6 font-semibold focus:outline-none pl-3"
											// placeholder={placeholder}
											// onChange={(e) =>
											// 	updatePaymentData(
											// 		paymentData as keyof PaymentInfo,
											// 		e.target.value
											// 	)
											// }
										/>
									</div>
								</div>
							</div>
						</div>

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
									<div className="flex items-center gap-x-1 md:gap-x-3">
										<input
											// id={label}
											name="payment"
											type="radio"
											// value={label}
											className="h-4 w-4 text-accent focus:ring-accent"
											// onChange={(e) => updatePaymentData("paymentType", e.target.value)}
										/>
										<label
											// htmlFor={label}
											className="text-lg md:text-xl font-medium text-accent capitalize cursor-pointer"
										>
											{/* {label} */}
										</label>
									</div>
								</div>
							</div>
						</fieldset>
					</div>
				</div>
			</form>
		</section>
	);
};

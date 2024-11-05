export interface FormProps {
	name: string;
	id: string;
	placeholder: string;
	type: string;
}

export const FormInput = ({ id, name, placeholder, type }: FormProps) => {
	return (
		<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 ">
			<div className="sm:col-span-1">
				<label
					htmlFor={name}
					className="block text-2xl font-medium leading-6 text-accent capitalize"
				>
					{name}
				</label>
				<div className="mt-2">
					<div className="flex rounded-md shadow-md ring-1 ring-inset ring-accent/45 focus-within:ring-2 focus-within:ring-inset focus-within:ring-accent">
						<input
							type={type}
							name={name}
							id={id}
							autoComplete="off"
							className="block flex-1 border-0 bg-transparent py-1.5 text-accent text-xl capitalize placeholder:text-accent focus:ring-0 sm:text-sm sm:leading-6 font-semibold focus:outline-none pl-3"
							placeholder={placeholder}
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
	);
};

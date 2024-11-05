interface Props {
	id: string;
}

export const OrderPaymentMethod = ({ id }: Props) => {
	return (
	
				<div className="flex items-center gap-x-1 md:gap-x-3">
					<input
						id={id}
						name="payment"
						type="radio"
						value={id}
						className="h-4 w-4 text-accent focus:ring-accent"
						// onChange={(e) => updatePaymentData("paymentType", e.target.value)}
					/>
					<label
						htmlFor={id}
						className="text-lg md:text-xl font-medium text-accent capitalize cursor-pointer"
					>
						{id}
					</label>
				</div>
	);
};

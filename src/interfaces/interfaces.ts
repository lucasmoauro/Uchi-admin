export interface Product {
	id: string;
	price: number;
}

export interface NewOrder {
	name: string;
	phone: string;
	comments: string;
	paymentMethod: string;
	hasPaid?: boolean;
}

export interface User {
    id: number;
    first_name: string;
    last_name: string;
    middle_name: string;
    email: string;
    phone: string;
    country: string;
    zip_code: string;
    city: string;
    street: string;
    house_number: string;
    apartment_number: string;
    orders: Order[];
}

export interface Order {
    id: number;
    date: string;
    status: string;
    totalAmount: number;
    products: Offer[];
}

export interface Offer {
    id: number;
    title: string;
    price: number;
    images: string[];
    description: string;
    sizes: Size[];
}

export interface Size {
    id: number;
    size: string;
    qty: number;
}
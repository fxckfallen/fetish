export interface User {
    id: number;
    first_name: string;
    last_name: string;
    middle_name: string;
    email: string;
    password: string;
    phone: string;
    country: string;
    zip_code: string;
    city: string;
    street: string;
    house_number: string;
    apartment_number: string;
    token: string;
    wishlist: Offer[];
}

export interface Order {
    id: number;
    timestamp: number;
    status: string;
    totalAmount: number;
    invoiceID: string;
    user: User;
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
    size: string;
    qty: number;
}

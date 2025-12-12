import { User } from "@/lib/types";
 
export const API_URL = 'http://localhost:5000/';
// export const API_URL = 'https://hjlmxrqm-5000.euw.devtunnels.ms/';

export const TEST_USER: User = { 
    id: 1, 
    first_name: 'Daniil',
    last_name: 'Pavlov',
    middle_name: 'Vladimirovich', 
    email: 'fxckfallen@icloud.com',
    phone: '+380501234567',
    country: 'Ukraine',
    zip_code: '12345',
    city: 'Киев',
    street: 'Street',
    house_number: 'House',
    apartment_number: 'Apartment',
    orders: [
        { id: 1, date: '2023-01-01', status: 'Pending', totalAmount: 100, products: [
            { id: 1, title: 'Product 1', price: 50, images: [], description: '', sizes: [] },
            { id: 2, title: 'Product 2', price: 50, images: [], description: '', sizes: [] },
        ] },
        { id: 2, date: '2023-02-01', status: 'Delivered', totalAmount: 100, products: [
            { id: 1, title: 'Product 1', price: 50, images: [], description: '', sizes: [] },
            { id: 2, title: 'Product 2', price: 50, images: [], description: '', sizes: [] },
        ]}
    ]
}
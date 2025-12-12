'use server'

import { API_URL } from "@/lib/constants"

export async function getUser(id: number) {
    const res = await fetch(API_URL + '/getUser', {
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            id: id
        })
    }).then(res => res.json());
    return res
}

interface EditUserParams {
    id: number;
    first_name?: string;
    last_name?: string;
    middle_name?: string;
    email?: string;
    phone?: string;
    country?: string;
    zip_code?: string;
    city?: string;
    street?: string;
    house_number?: string;
    apartment_number?: string;
}

export async function editUser(params: EditUserParams) {
    const res = await fetch(API_URL + '/editUser', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(params)
    });

    if (!res.ok) {
        throw new Error(`Error editing user: ${res.statusText}`);
    }

    const data = await res.json();
    return data;
}
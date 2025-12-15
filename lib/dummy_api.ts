import { User, Order, Offer, Size} from "./types"
import { createHash } from 'crypto';

function sha256(input: string): string {
  return createHash('sha256').update(input).digest('hex');
}

//TODO Guest
let users: User[] = []
let offers: Offer[] = []
let orders: Order[] = []

createUser("Анатолий", "Иванов", "Игоревич", "asd@icloud.com", "1960", "", "", "", "", "", "", "")



createOffer("Shuba1", 50, "lorem ipsum")
createOffer("Shuba2", 45, "lorem ipsum")
createOffer("Shuba3", 65, "lorem ipsum")
createOffer("Shuba4", 120, "lorem ipsum")

offerAddSize(1, "S", 10)
offerAddSize(1, "M", 10)
offerAddSize(1, "L", 10)

offerAddSize(2, "S", 10)
offerAddSize(2, "M", 10)
offerAddSize(2, "L", 10)

offerAddSize(3, "S", 10)
offerAddSize(3, "M", 10)
offerAddSize(3, "L", 10)


offerAddImage(1, "https://iamyourfetish.com.ua/static/img_offer/2025-12-05%2013.14.13.jpg")
offerAddImage(2, "https://iamyourfetish.com.ua/static/img_offer/2025-01-30%2022.36.17.jpg")
offerAddImage(3, "https://iamyourfetish.com.ua/static/img_offer/9hw6s0P9XylEcZVZRYKnP202jKi5lh7N.jpg")
offerAddImage(4, "https://iamyourfetish.com.ua/static/img_offer/2024-11-02%2021.54.11Min.jpg")

offerAddImage(1, "https://iamyourfetish.com.ua/static/img_offer/2024-11-02%2022.30.35Min.jpg")
offerAddImage(2, "https://iamyourfetish.com.ua/static/img_offer/2024-11-02%2022.30.35Min.jpg")
offerAddImage(3, "https://iamyourfetish.com.ua/static/img_offer/2024-11-02%2022.30.35Min.jpg")
offerAddImage(4, "https://iamyourfetish.com.ua/static/img_offer/2024-11-02%2022.30.35Min.jpg")

createOrder(users[0], offers)
createOrder(users[0], offers)
createOrder(users[0], offers)
createOrder(users[0], offers)

function generateRandomString(length: number): string {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

//Users
export function createUser(
    first_name: string,
    last_name: string,
    middle_name: string,
    email: string,
    password: string,
    phone: string,
    country: string,
    zip_code: string,
    city: string,
    street: string,
    house_number: string,
    apartment_number: string
) {
    const userID = users.length + 1;
    const token = generateRandomString(32);

    //TODO Database
    users.push({
        id: userID,
        first_name: first_name,
        last_name: last_name,
        middle_name: middle_name,
        email: email,
        password: sha256(password),
        phone: phone,
        country: country,
        zip_code: zip_code,
        city: city,
        street: street,
        house_number: house_number,
        apartment_number: apartment_number,
        token: token,
        wishlist: []
    })

    return token
}

export function getUser(
    token?: string,
    email?: string
) {
    for (const user of users) {
        if (user.token == token || user.email == email) {
            return user
        }
    }
    return users[0]
}

export function editUser(
    token: string,
    first_name?: string,
    last_name?: string,
    middle_name?: string,
    email?: string,
    phone?: string,
    country?: string,
    zip_code?: string,
    city?: string,
    street?: string,
    house_number?: string,
    apartment_number?: string,
) {

    const index = users.findIndex(u => u.token === token)

    if (first_name) users[index].first_name = first_name
    if (last_name) users[index].last_name = last_name
    if (middle_name) users[index].middle_name = middle_name
    if (email) users[index].email = email
    if (phone) users[index].phone = phone
    if (country) users[index].country = country
    if (zip_code) users[index].zip_code = zip_code
    if (city) users[index].city = city
    if (street) users[index].street = street
    if (house_number) users[index].house_number = house_number
    if (apartment_number) users[index].apartment_number = apartment_number

    return users[index]
}

export function authUser(
    email: string,
    password: string
) {
    const user = getUser("", email)

    if (user.password == sha256(password)) return {status: 200, token: user.token}

    return {status: 400, token: null}
}

export function addToWishList(
    token: string,
    offer: Offer
) {
    //get user by token
    const index = users.findIndex(u => u.token === token)
    users[index].wishlist.push(offer)

    return users[index].wishlist
}

export function removeFromWishList(
    token: string,
    offer: Offer
) {
    //get user by token
    const index = users.findIndex(u => u.token === token)
    const wishlistIndex = users[index].wishlist.findIndex(o => o.id === offer.id)

    users[index].wishlist.splice(wishlistIndex, 1)

    return users[index].wishlist
}

export function getWishList(
    token: string
) {
    const current_user = getUser(token) //get user by token

    return current_user.wishlist
}

//Orders

export function createInvoice(
    totalAmount: number,
) {
    //TODO Create Invoice Via monobank
    const invoiceID = generateRandomString(32);

    return invoiceID
}

export function invoicePayed(
    invoiceID: string,
) {
    let order = orders.find(o => o.invoiceID == invoiceID) || orders[0] //get order by invoice
    editOrder(order.id, "payed")
    //send telegram bot notification
    return 200
}

export function createOrder(
    user: User,
    products: Offer[],
    discount?: number //percent
) {
    const orderID = orders.length + 1
    const timestamp = Date.now()

    let totalAmount = 0

    for (const offer of products) {
        totalAmount += offer.price
    }

    if (discount) totalAmount -= totalAmount * discount/100

    const invoiceID = createInvoice(totalAmount);

    let newOrder: Order = {
        id: orderID,
        timestamp: timestamp,
        status: "waitin for payment",
        totalAmount: totalAmount,
        invoiceID: invoiceID,
        user: user,
        products: products
    }

    orders.push(newOrder)

    return newOrder
}

export function editOrder(
    id: number,
    status?: string,
    user?: User
) {
    if (status) orders[id-1].status = status
    if (user) orders[id-1].user = user

    return orders[id-1]
}

export function deleteOrder(
    id: number
) {
    orders.splice(id-1, 1)
    return 200
}

//Offers

export function createOffer(
    title: string,
    price: number,
    description: string
) {
    const offerID = offers.length+1
    const newOffer: Offer = {
        id: offerID,
        title: title,
        price: price,
        images: [],
        description: description,
        sizes: []
    }

    offers.push(newOffer)
    return newOffer
}


export function getOffer(
    id: number
) {
    return offers[id-1]
}

export function searchOffers(
    category?: string,
    query?: string
) {
    let matching: Offer[] = []

    if (!category && !query) {
        matching = offers //all offers
    }
    if (category) {
        if (query) { // by category and query
            matching = offers
        }
        else { // by category only
            matching = offers
        }
    }
    else { // by query only
        matching = offers
    }

    return matching
}

export function deleteOffer(
    id: number
) {
    offers.splice(id-1, 1)
    return 200
}

export function offerAddSize(
    id: number,
    size: string,
    qty: number //if remove qty = -1, -2, ...
) {
    //get offer by id
    offers[id-1].sizes.push({size: size, qty: qty}) //TODO add qty if size exists
    return offers[id-1].sizes
}

export function offerAddImage(
    id: number,
    image_path: string
) {
    offers[id-1].images.push(image_path)
    return offers[id-1].images
}

export function offerRemoveImage(
    id: number,
    image_path: string
) {
    //remove image from offer by path
    return offers[id-1].images
}

export function getUserOrders(token: string): Order[] {
    const user = getUser(token);
    if (!user) return [];
    return orders.filter(order => order.user.id === user.id);
}

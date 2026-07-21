export interface CheckoutData {

    name: string;
    email: string;
    phone: string;
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
}

export const GuestCheckout: CheckoutData = {

    name: "Monisha",
    email: "test@example.com",
    phone: "9876543210",
    street: "21B Baker Street",
    city: "Los Angeles",
    state: "CA",
    zip: "12345",
    country: "USA"

};
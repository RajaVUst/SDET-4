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

    name: "John Smith",

    email: "john.smith@test.com",

    phone: "9876543210",

    street: "221B Baker Street",

    city: "Los Angeles",

    state: "CA",

    zip: "90001",

    country: "USA"

};
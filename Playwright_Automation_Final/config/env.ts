import dotenv from "dotenv";

dotenv.config();

export const Environment = {
    BASE_URL: process.env.BASE_URL!,
    
    USER_EMAIL: process.env.USER_EMAIL!,
    PASSWORD: process.env.PASSWORD!,
    CARD_NUMBER: process.env.CARD_NUMBER!,
    CARD_EXPIRY: process.env.CARD_EXPIRY!,
    CARD_CVV: process.env.CARD_CVV!,

    ADDRESS: process.env.ADDRESS!,
    CITY: process.env.CITY!,
    STATE: process.env.STATE!,
    ZIP: process.env.ZIP!,
    COUNTRY: process.env.COUNTRY!,
};
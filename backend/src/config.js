import dotenv from "dotenv";

dotenv.config({path: "./.env"});

export const MONGODB_URI = process.env.MONGODB_URI

export const PORT = process.env.PORT

export const EMAIL_USER = process.env.EMAIL_USER
export const EMAIL_PASS = process.env.EMAIL_PASS
export const EMAIL_HOST = process.env.EMAIL_HOST
export const EMAIL_PORT = process.env.EMAIL_PORT

export const CLOUDINARY_KEY = process.env.CLOUDINARY_KEY
export const CLOUDINARY_SECRET = process.env.CLOUDINARY_SECRET
export const CLOUDINARY_NAME = process.env.CLOUDINARY_NAME

export const FRONTEND_URL = process.env.FRONTEND_URL

export const JWT_SECRET = process.env.JWT_SECRET

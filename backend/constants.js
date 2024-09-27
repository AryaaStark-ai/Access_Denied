import { configDotenv } from "dotenv";

configDotenv();

const PORT = process.env.PORT;
const MONGODB_URL = process.env.MONGODB_URL;
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES = process.env.JWT_EXPIRES;
const ENV = process.env.ENV;
const DATABASE_NAME = process.env.DATABASE_NAME;

export { PORT, MONGODB_URL, JWT_SECRET, JWT_EXPIRES, ENV, DATABASE_NAME };

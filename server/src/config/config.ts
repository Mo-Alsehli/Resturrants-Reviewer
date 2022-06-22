import dotenv from "dotenv";

dotenv.config();

export const config = {
  port: process.env.PORT,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.POSTGRES_HOST,
  dbPort: process.env.DB_PORT,
  devDB: process.env.POSTGRES_DB,
  testDB: process.env.POSTGRES_DB_TEST,
  environment: process.env.ENV
};

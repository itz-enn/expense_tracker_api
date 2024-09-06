import mysql, { PoolOptions } from "mysql2/promise";

const access: PoolOptions = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DATABASE,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
};

const pool: mysql.Pool = mysql.createPool(access);

export const checkDbConnection = async (pool: mysql.Pool) => {
  pool
    .getConnection()
    .then(() => {
      console.log(
        `Connected to the ${
          process.env.appEnv === "production" ? "production" : "development"
        } database`
      );
    })
    .catch((error) => {
      console.error("Failed to connect to the database", error);
    });
};

export default pool;

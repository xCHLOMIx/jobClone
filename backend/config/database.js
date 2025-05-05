import { Pool } from "pg";
import dotenv from "dotenv"
dotenv.config()

const pool = new Pool({
  user: process.env.DB_USERNAME || "postgres", // Fallback to 'postgres'
  host: process.env.DB_HOST || "localhost",
  database: process.env.DB_NAME || "job_board",
  password: process.env.DB_PASSWORD || "jolie",
  port: process.env.DB_PORT || 5432,
});

pool.connect((err, client, release) => {
  if (err) {
    console.error("Database connection failed:", err.stack);
    process.exit(1);
  } else {
    console.log("Database connected successfully");
    release();
  }
});

export default { pool };

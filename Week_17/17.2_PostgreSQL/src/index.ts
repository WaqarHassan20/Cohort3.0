import express from "express";

const app = express();

import dotenv from "dotenv";

import { Client } from "pg";

dotenv.config();

app.use(express.json());

const pgClient = new Client({
  connectionString: process.env.DATABASE_URL,
});

pgClient.connect();
console.log("Connected to PostgreSQL database");

app.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;

  const { city, country, street, pincode } = req.body;

  try {
    const insertedUserQuery = `INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id`;
    const insertedAddressQuery = `INSERT INTO addresses (city, country, street, pincode, user_Id) VALUES ($1, $2, $3, $4, $5)`;

    // This will wrap the queries in a transaction like scenario
    // If any of the queries fail, the transaction will be rolled back
    // and no changes will be made to the database
    // If all queries succeed, the transaction will be committed
    // and the changes will be made to the database
    // This is useful for ensuring data integrity and consistency
    // when multiple queries are executed that depend on each other
    // For example, if you are inserting a user and their address,
    // you want to make sure that both queries succeed or fail together
    // If the first query succeeds and the second query fails,
    // you don't want to have a user in the database without an address
    // or an address in the database without a user
    // This is where transactions come in handy
    // BEGIN ---------- COMMIT

    await pgClient.query("BEGIN");

    const userValues = [username, email, password];

    const response = await pgClient.query(insertedUserQuery, userValues);

    const user_Id = response.rows[0].id;

    const addressValues = [city, country, street, pincode, user_Id];

    const addressResponse = await pgClient.query(
      insertedAddressQuery,
      addressValues
    );

    await pgClient.query("COMMIT");

    res.json({ message: "User created successfully" });
  } catch (error) {
    console.log("Error is :", error);

    res.status(500).send("Internal Server Error");
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

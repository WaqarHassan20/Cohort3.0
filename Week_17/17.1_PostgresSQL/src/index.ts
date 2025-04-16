import { Client } from "pg";
import dotenv from "dotenv";
import express from "express";

const app = express();

app.use(express.json());

dotenv.config();

const pgClient = new Client({
  connectionString: process.env.DATABASE_URL,
});

pgClient.connect();

app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const insertedQuery = `INSERT INTO users (name, email, password) VALUES ('${name}', '${password}', '${email}')`;
    // We mostly don't use this syntax to avoid the SQL injection attacks.
    await pgClient.query(insertedQuery);

    // SQL injection is a technique where an attacker injects malicious SQL code in a web application to access, modify or manipulate the database.

    // In this case we are directly using the user input in our SQL query which can be harmfull.

    // For example if an attacker passes a string like "SELECT * FROM users" in the username field, it will be injected in the query and the database will return all the rows.

    // To prevent this we should use parameterized queries where the user input is passed as a parameter to the query.

    // Alternative approach

    // const query =
    //   "INSERT INTO users (name, email, password) VALUES ($1, $2, $3)";
    // const values = [name, email, password];
    // await pgClient.query(query, values);

    // Using parameterized variables queries prevents SQL injection by separating SQL code from user input. User inputs are passed as parameters, which the database treats as data only, not executable code.

    res.status(201).send("User created successfully");
  } catch (error) {
    console.error("Error connecting to the database", error);

    res.status(500).send("Internal Server Error");

    return;
  }
});

// async function main() {
//   await pgClient.connect();

//   const response = await pgClient.query("SELECT * FROM users");

//   console.log(response.rows);
//   await pgClient.end(); // Close the database connection after we're done with it
// }

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// main();

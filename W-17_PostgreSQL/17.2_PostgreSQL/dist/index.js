"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const dotenv_1 = __importDefault(require("dotenv"));
const pg_1 = require("pg");
dotenv_1.default.config();
app.use(express_1.default.json());
const pgClient = new pg_1.Client({
    connectionString: process.env.DATABASE_URL,
});
pgClient.connect();
console.log("Connected to PostgreSQL database");
app.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        yield pgClient.query("BEGIN");
        const userValues = [username, email, password];
        const response = yield pgClient.query(insertedUserQuery, userValues);
        const user_Id = response.rows[0].id;
        const addressValues = [city, country, street, pincode, user_Id];
        const addressResponse = yield pgClient.query(insertedAddressQuery, addressValues);
        yield pgClient.query("COMMIT");
        res.json({ message: "User created successfully" });
    }
    catch (error) {
        console.log("Error is :", error);
        res.status(500).send("Internal Server Error");
    }
}));
app.get("/ugly-metadata", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.query.id;
    const query1 = `SELECT username,email,id FROM users WHERE id = $1`;
    const response1 = yield pgClient.query(query1, [id]);
    const query2 = `SELECT * FROM addresses WHERE user_id = $1`;
    const response2 = yield pgClient.query(query2, [id]);
    res.json({
        user: response1.rows,
        address: response2.rows,
    });
}));
app.get("/better-metadata", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.query.id;
    const query = `SELECT users.id, users.username, users.email, addresses.city, addresses.country, addresses.street, addresses.pincode FROM users LEFT JOIN addresses ON users.id = addresses.user_id WHERE users.id = $1`;
    const response = yield pgClient.query(query, [id]);
    res.json({ response: response.rows });
}));
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

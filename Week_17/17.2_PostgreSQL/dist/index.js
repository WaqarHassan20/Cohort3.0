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
        const userValues = [username, email, password];
        const response = yield pgClient.query(insertedUserQuery, userValues);
        const user_Id = response.rows[0].id;
        console.log(user_Id);
        const insertedAddressQuery = `INSERT INTO addresses (city, country, street, pincode, user_Id) VALUES ($1, $2, $3, $4, $5)`;
        const addressValues = [city, country, street, pincode, user_Id];
        const addressResponse = yield pgClient.query(insertedAddressQuery, addressValues);
        res.json({ message: "User created successfully" });
    }
    catch (error) {
        console.log("Error is :", error);
        res.status(500).send("Internal Server Error");
    }
}));
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

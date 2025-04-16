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
const pg_1 = require("pg");
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
dotenv_1.default.config();
const pgClient = new pg_1.Client({
    connectionString: "postgresql://neondb_owner:npg_Mk1SlbrB7nXW@ep-wispy-band-a4blx95g-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require",
});
pgClient.connect();
app.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password } = req.body;
    try {
        // const query =
        //   "INSERT INTO users (name, email, password) VALUES ($1, $2, $3)";
        // const values = [name, email, password];
        // await pgClient.query(query, values);
        const insertedQuery = `INSERT INTO users (name, email, password) VALUES ('${name}', '${password}', '${email}')`;
        yield pgClient.query(insertedQuery);
        res.status(201).send("User created successfully");
    }
    catch (error) {
        console.error("Error connecting to the database", error);
        res.status(500).send("Internal Server Error");
        return;
    }
}));
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

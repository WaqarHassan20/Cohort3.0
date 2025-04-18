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
const prisma_1 = require("../src/generated/prisma");
const client = new prisma_1.PrismaClient({
    log: ["query"],
});
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/users", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield client.user.findMany();
    res.json(users);
}));
app.get("/user/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const user = yield client.user.findFirst({
        where: { id: Number(id) },
        include: { todo: true },
    });
    res.json({ user });
}));
function createUser() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.user.create({
            data: {
                username: "Bappa Stunnin",
                password: "HelloBappa",
                age: 50,
                city: "Karachi",
            },
        });
    });
}
function updateUser() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.user.update({
            where: { id: 1 },
            data: {
                username: "Bappa Stunnin",
                password: "BappaJani",
                age: 50,
                city: "Karachi",
            },
        });
    });
}
function deleteUser() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.user.delete({
            where: { id: 1 },
        });
    });
}
function findUser() {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield client.user.findFirst({
            where: { id: 2 },
            include: { todo: true },
        });
        console.log(user);
    });
}
// createUser();
// updateUser();
// deleteUser();
// findUser();
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

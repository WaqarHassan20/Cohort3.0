"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
app.post("/signup", function (req, res) {
    res.send("Hello World");
});
app.post("/signin", function (req, res) {
    res.send("Hello World");
});
app.get("/chats", function (req, res) {
    res.send("Hello World");
});
app.listen(3001), function () {
    console.log("Server is running on port 3001");
};

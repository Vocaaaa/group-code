require("dotenv").config();
const express = require("express");
const server = express();
const router = require("./config/controller");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

// Server settings
server.use(cookieParser());
server.use(express.urlencoded({extended:false}));
server.use(express.json());
server.use(express.static("public"));
server.use("/", router);

// Mongoose connections
mongoose.connect("mongodb+srv://test:optima123@cluster0.ex0bg.mongodb.net/db?retryWrites=true&w=majority");
const db = mongoose.connection
db.once("open", (err) => {
    if(err) throw err
    console.log("Database Connected");
});


server.listen(3000, (err) => {
    if (err) throw err
    console.log("Connected To web");
});
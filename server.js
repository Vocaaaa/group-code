const express = require("express");
const server = express();
const mongoose = require("mongoose");
server.use(express.static("public"));

mongoose.connect("mongodb+srv://test:optima123@cluster0.ex0bg.mongodb.net/db");
const db = mongoose.connection

db.on("open", (err)=> {
    if(err)throw err
    console.log("Connected to Database");
});
const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String
});
const Users = mongoose.model("usersModel", userSchema, "users");

server.get("/register", (req, res)=> {
    const name = req.body.f_name
    const email = req.body.f_email
    const password = req.f_password
    const data = new Users({
        name: name,
        email: email,
        password: password
    });
})
server.get("/login", (req, res) => {
    
})
server.get("/login", (req, res)=> {
    res.redirect("/public" + "/home.html")
})
server.get("/login", (req, res) => {
    res.sendFile(__dirname + "/public" + "/login.html")
})
server.get("/home", (req, res) => {
    res.sendFile(__dirname + "/public" + "/home.html")
})

server.listen(3000)
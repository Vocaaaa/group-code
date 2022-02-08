const express = require("express");
const server = express();
const mongoose = require("mongoose");
server.use(express.static("public"));
server.use(express.urlencoded({extended:true}));

server.get("/register", (req, res)=>{
    res.sendFile(__dirname + "/public" + "/register.html")
})

server.get("/login", (req, res)=>{
    res.sendFile(__dirname + "/public" + "/login.html")
})

server.get("/home", (req, res)=>{
    res.sendFile(__dirname + "/public" + "/home.html")
})



mongoose.connect("mongodb://localhost:27017/db");
const db = mongoose.connection;

db.on("open", (err)=>{
    if(err)throw err
    console.log("connected to database");
}); 

const personsSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

const quoteSchema = new mongoose.Schema({
    quote: String
})

const Persons = mongoose.model("person", personsSchema, "persons");

const Quote = mongoose.model("quote", quoteSchema, "quotes");

server.post("/register", (req, res) => {
    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;
    let data = new Persons({
        name: name,
        email: email,
        password: password
    })
    data.save((err)=>{
        if(err){
            console.log(err)
        }
        console.log("saved")
    })
    res.redirect("/login")
});

server.post("/login", (req, res)=>{
    const userEmail = req.body.login_email
    const userPassword = req.body.login_password
    const match = Persons.findOne({email:userEmail, password:userPassword}, (err, result)=>{
        console.log(result)
        if(result == null) {
            res.send("login failed")
        } else {
            res.redirect("/home")
        }
    })
})

server.post("/home", (req, res) => {
    let quote = req.body.textarea
    let data = new Quote({
        quote: quote
    })
    data.save((err)=>{
        if(err){
            console.log(err)
        }
        console.log("saved")
    })
    res.redirect("/home")
})

server.listen(4000);
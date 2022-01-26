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
<<<<<<< HEAD
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
=======
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

const Persons = mongoose.model("person", personsSchema, "persons");

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

server.listen(4000);
>>>>>>> 5ecedefbc04d5c2fada8c4f6b5b860d4d764bf84

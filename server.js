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
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password
    const name = req.body.name
    const data = new Users({
        name: name,
        email: email,
        password: password
    });
})
server.get("/login", (req, res)=> {
    res.redirect("/public" + "/home.html")
})

server.get("/login", (req, res) => {
    res.sendFile(__dirname + "/public" + "/login.html")
})
server.get("/update", (req, res) => {
    res.sendFile(__dirname + "/public" + "/updateuser.html")
})
server.get("/home", (req, res) => {
    res.sendFile(__dirname + "/public" + "/home.html")
})
server.get("/deleteuser", (req, res) => {
    res.sendFile(__dirname + "/public" + "/deleteuser.html")
})

server.post("/delete", (req, res)=>{
    const deleteEmail = req.body.delete-email
    const deletePassword = req.body.delete-password
    async function deleteUser() {
        const deletedUser = await Users.findOneAndDelete({email:deleteEmail, password:deletePassword})
        if(deleteUser){
            res.send("User deleted")
        } else {
            res.send("Oops, something went wrong")
        }
    }
    deleteUser();
})
server.post("/update", (req, res) => {
    const oldName = req.body.old_name
    const newName = req.body.new_name
    async function updateUser() {
        const updatedName = await Users.findOneAndUpdate({name:oldName}, {name:newName})
        if(updatedName) {
            res.send("Username updated")
        } else {
            res.send("Oops, something went wrong")
        }
    }
    updateUser();
})

server.listen(3000)
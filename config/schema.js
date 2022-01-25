const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
})

module.exports = new mongoose.model("user", userSchema, "user")
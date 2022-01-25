const express = require("express")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const router = express.Router()
const User = require("./schema")
const verifyToken = require("./auth")
let user;

router.use("/", (req, res, next) => {
    next()
})

router.get("/", (req, res) => {
    const {token} = req.cookies;
    if(verifyToken(token)) {
        res.render("home", {
            user: user
        })
    } else {
        res.render("index")
    }
})
router.get("/home", (req, res) => {
    const {token} = req.cookies;
    if(verifyToken(token)) {
        res.render("home", {
            user: user
        })
    } else {
        res.render("index")
    }
})
router.get("/signup", (req, res) => {
    res.render("register")
})
router.get("/login", (req, res) => {
    res.render("login")
})
router.get("/home", (req, res) => {
    res.render("home")
})
router.post("/login", async (req, res) => {
    let email = req.body.l_email
    let password = req.body.l_password
    user = await User.findOne({email: email})
    const comparedPassword = bcrypt.compareSync(password, user.password)
    if(comparedPassword) {
        token = jwt.sign({id: user._id},process.env.JWT, {expiresIn: "60sec"})
        console.log(token);
        res.cookie("token", token, {maxAge: 60000, httpOnly: true})
    } else {
        res.status(401).json({message: "Failed"})
    }
    res.redirect("/home")
})
router.post("/signup", (req, res) => {
    let {f_name, l_name, password1, password2, email, personID} = req.body
    let error = []
    if(!(f_name, l_name, password1, password2, email, personID)) {
        error.push({message: "Please fill out all fields"})
    }
    if(!(password1 === password2)) {
        error.push({messsage: "Passwords doesn't match"})
    }
    if(error.length > 0) {
        res.render("register", {
            error: error
        })
    }
    const hashedPassword = bcrypt.hashSync(password1, 10)
    const info = new User({
        firstname: f_name,
        lastname: l_name,
        email: email,
        password: hashedPassword
    })
    info.save((err) => {
        if(err)throw err
        console.log("Saved")
    })
    res.redirect("/login")
    res.end()
})


module.exports = router
const jwt = require("jsonwebtoken")

function verifyToken(token) {
    try {
        const verify = jwt.verify(token, process.env.JWT);
        if(verify) {
            return true
        } else {
            return false
        }
    } catch (err) {
        console.log(JSON.stringify(err));
    }
}


module.exports = verifyToken
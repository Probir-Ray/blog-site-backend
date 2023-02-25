const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    const Token = req.headers['token'];
    jwt.verify(Token, "SecretKey@123", (err, decoded) => {
        if(err) res.status(401).json({status: "Unauthorized"})
        else {
            req.headers.UserName = decoded.data.UserName;
            next();
        }
    })
}
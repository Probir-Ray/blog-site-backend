const ProfileModel = require("../models/ProfileModel");
const jwt = require("jsonwebtoken");


exports.CreateProfile = (req, res) => {
    const reqBody = req.body;
    ProfileModel.create(reqBody, (err, data) => {
        if (err) res.status(400).json({ status: "Fail", data: err });
        else res.status(200).json({ status: "Succes", data });
    })
}

exports.UserLogin = (req, res) => {
    const UserName = req.body.UserName;
    const Password = req.body.Password;

    ProfileModel.find({UserName, Password}, "FirstName LastName EmailAddress UserName", (err, data) => {
        if (err) res.status(400).json({ status: "Fail", data: err });
        else {
            if(data.length > 0) {
                const Payload = {
                    exp: Math.floor(Date.now()/1000) + 60 * 60 * 24,
                    data: data[0]
                };
                let token = jwt.sign(Payload, "SecretKey@123")
                res.status(200).json({status: "Success", token, data: data[0]})
            } else {
                res.status(401).json({status: "Unauthorized"})
            }
        }
    })
}


exports.SelectProfile = (req, res) => {
    const UserName = req.headers.UserName;
    ProfileModel.find({UserName}, "FirstName LastName EmailAddress UserName Password", (err, data) => {
        if (err) res.status(400).json({ status: "Fail", data: err });
        else res.status(200).json({ status: "Succes", data: data[0] });
    })
}



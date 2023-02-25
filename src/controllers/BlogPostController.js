const BlogModel = require("../models/BlogPostModel")


exports.CreateBlogPost = (req, res) => {
    const reqBody = req.body;
    reqBody.author = req.headers.UserName
    BlogModel.create(reqBody, (err, data) => {
        if(err) res.status(400).json({status: "Fail", data: err})
        else res.status(200).json({status: "success", data})
    })
}


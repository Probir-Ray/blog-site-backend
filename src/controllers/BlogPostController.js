const BlogModel = require("../models/BlogPostModel")

// Create Blog Post
exports.CreateBlogPost = (req, res) => {
    const reqBody = req.body;
    reqBody.author = req.headers.UserName
    BlogModel.create(reqBody, (err, data) => {
        if(err) res.status(400).json({status: "Fail", data: err})
        else res.status(200).json({status: "success", data})
    })
}


// Read all blog post by Author
exports.ReadBlogPostByAuthor = (req, res) => {
    const UserName = req.headers.UserName;

    BlogModel.find({author: UserName}, "title content", (err, data) => {
        if(err) res.status(400).json({status: "Fail", data: err})
        else res.status(200).json({status: "success", data})
    })
}



// Read single post
exports.ReadSingleBlogPost = (req, res) => {
    const id = req.params.id;
    const UserName = req.headers.UserName;

    BlogModel.find({_id: id, author: UserName}, (err, data) => {
        if(err) res.status(400).json({status: "Fail", data: err})
        else res.status(200).json({status: "success", data: data[0]})
    })
}




// Update post
exports.UpdateBlogPost = (req, res) => {
    const reqBody = req.body;
    BlogModel.updateOne({_id: req.params.id}, reqBody, (err, data) => {
        if (err) res.status(400).json({ status: "Fail", data: err });
        else res.status(200).json({ status: "Ok", data });
    })
}




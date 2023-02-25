const mongoose = require("mongoose");

const DataSchema = mongoose.Schema({
    title: {type: String},
    author: {type: String},
    content: {type: String},
    createdDate: {type: Date, default: Date.now()},
}, {versionKey: false});


const BlogModel = mongoose.model("blogs", DataSchema);
module.exports = BlogModel;
const express = require("express");
const BlogPostController = require("../controllers/BlogPostController");
const ProfileController = require("../controllers/ProfileController");
const AuthVerifyMiddleware = require("../middleware/AuthVerifyMiddleware");
const router = express.Router();

// Profile controller
router.post("/CreateProfile", ProfileController.CreateProfile)
router.post("/UserLogin", ProfileController.UserLogin)
router.get("/SelectProfile", AuthVerifyMiddleware, ProfileController.SelectProfile)

// Blog post controller
router.post("/CreateBlogPost", AuthVerifyMiddleware, BlogPostController.CreateBlogPost)


module.exports = router;

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
router.get("/ReadBlogPostByAuthor", AuthVerifyMiddleware, BlogPostController.ReadBlogPostByAuthor)
router.get("/ReadSingleBlogPost/:id", AuthVerifyMiddleware, BlogPostController.ReadSingleBlogPost)
router.post("/UpdateBlogPost/:id", AuthVerifyMiddleware, BlogPostController.UpdateBlogPost)


module.exports = router;

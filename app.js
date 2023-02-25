// Basic Library Import
const express = require("express");

const app = express();

// Security Middleware Import
const cors = require("cors");
const mongoSanitize = require("express-mongo-sanitize");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const hpp = require("hpp");
const xss = require("xss-clean");

// Database Library Import
const mongoose = require("mongoose");
const router = require("./src/routes/api");

// Security Middleware Implementation
app.use(cors());
app.use(mongoSanitize());
app.use(helmet());
app.use(hpp());
app.use(xss());

// Body parser
app.use(express.json());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 250,
});
app.use(limiter);

// MongoDB Database Connection

const URI = `mongodb+srv://<username>:<password>@cluster0.xrfjl.mongodb.net/Blog?retryWrites=true&w=majority`;
mongoose.set("strictQuery", false);
let OPTION = { user: "dhaka", pass: "Dhaka2023", autoIndex: true };
mongoose.connect(URI, OPTION, (err) => {
  console.log(`Database connection ok`);
  console.log(err);
});

app.use("/api/v2", router);

app.use("*", (req, res) => {
  res.status(404).json({ status: "Fail", data: "not found" });
});

module.exports = app;

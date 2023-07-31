require("dotenv").config();
const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

// console.log("my keyy:", process.env.SECRET_KEY);

router.get("/hello", (req, res) => {
  res.json({
    message: "hello world - from express!",
    key: process.env.SECRET_KEY,
    key_2: "this is key 2",
    key_3: process.env.SECRET_KEY,
    newMessage: "some cryptic message - from express server",
  });
});

app.use(`/.netlify/functions/express-server`, router);

module.exports = app;
module.exports.handler = serverless(app);

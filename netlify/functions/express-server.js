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

router.get("/get-api-key", (req, res) => {
  res.json({
    message: "sending api key - from express!",
    key: `the api key is: ${process.env.SECRET_KEY}`,
    key_2: `the pai key imported from env file is: ${process.env.SECRET_KEY_FROM_ENV_FILE}`,
  });
});

app.use(`/.netlify/functions/express-server`, router);

module.exports = app;
module.exports.handler = serverless(app);

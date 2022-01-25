const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const PORT = 8000;

express()
  .use(morgan("tiny"))
  .use(bodyParser.json())
  .use(express.json())
  .use(express.static("public"))
  // API endpoints
  .get("/hello", (req, res) => {
    res.status(200).json({ hi: "hello" });
  })

  .listen(PORT, () => {
    console.info("🌍 Listening on port " + PORT);
  });

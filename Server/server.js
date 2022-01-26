const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const { getAllQueryType, getSearchQuery } = require("./Handlers/SwApiHandlers");
const PORT = 8000;

express()
  .use(morgan("tiny"))
  .use(bodyParser.json())
  .use(express.json())
  .use(express.static("public"))
  .use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  })
  // API endpoints
  .get("/api/people/", getAllQueryType)
  .get("/api/planets/", getAllQueryType)
  .get("/api/starships/", getAllQueryType)
  .get("/api/search/:Query", getSearchQuery)

  .get("*", (req, res) => {
    res.status(404).json({
      status: 404,
      message: "These aren't the droids you're looking for.",
    });
  })

  .listen(PORT, () => {
    console.info("🌍 Listening on port " + PORT);
  });

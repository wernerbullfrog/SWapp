const request = require("request");

// this handler retrieves all data from SWapi depending on the Req.path

const getAllQueryType = (req, res) => {
  request(`https://swapi.dev${req.path}`, { json: true }, (err, body) => {
    try {
      return res
        .status(200)
        .json({ data: body.body.results, Message: "You found them" });
    } catch (err) {
      return res.status(404).json({
        Error: err,
        Message: "These aren't the droids you're looking for...",
      });
    }
  });
};

const getSearchQuery = (req, res) => {
  request(
    `https://swapi.dev/api/people/?search=${req.body.query}`,
    { json: true },
    (err, body) => {
      try {
        console.log("hello");
        return res
          .status(200)
          .json({ data: body.body.results, Message: "You found them" });
      } catch (err) {
        return res.status(404).json({
          Error: err,
          Message: "These aren't the droids you're looking for...",
        });
      }
    }
  );
};

module.exports = {
  getAllQueryType,
  getSearchQuery,
};

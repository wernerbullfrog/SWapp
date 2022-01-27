const request = require("request");

// this handler retrieves all data from SWapi depending on the Req.path

const getAllQueryType = (req, res) => {
  request(`https://swapi.dev${req.path}`, { json: true }, (err, body) => {
    try {
      return res
        .status(200)
        .json({ data: body.body, Message: "You found them" });
    } catch (err) {
      return res.status(404).json({
        Error: err,
        Message: "these aren't the droids you're looking for",
      });
    }
  });
};
// having issue with slow API request maybe try a timeout
const getSearchQuery = async (req, res) => {
  await request(
    `https://swapi.dev/api/people/?search=${req.params.Query}`,
    { json: true },
    (err, body) => {
      try {
        console.log(req.params.Query);
        return res
          .status(200)
          .json({ data: body.body.results, Message: "You found them" });
      } catch (err) {
        return res.status(404).json({
          Error: err,
          Message: "these aren't the droids you're looking for",
        });
      }
    }
  );
};

module.exports = {
  getAllQueryType,
  getSearchQuery,
};

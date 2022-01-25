const request = require("request");

const getAllQueryType = (req, res) => {
  request(`https://swapi.dev${req.path}`, { json: true }, (err, body) => {
    try {
      return res
        .status(200)
        .json({ data: body.body.results, Message: "You found them" });
    } catch (err) {
      return res.status(404).json({
        Error: err,
        Message: "these aren't the droids you're looking for",
      });
    }
  });
};

module.exports = {
  getAllQueryType,
};

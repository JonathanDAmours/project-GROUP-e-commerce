const items = require("./data/items.json");
const companies = require("./data/companies.json");

const getAllItems = (req, res) => {
  const data = items;

  req.status(200).json({
    status: 200,
    data,
  });
};

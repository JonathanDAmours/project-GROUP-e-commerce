const items = require("./data/items.json");
const companies = require("./data/companies.json");

const getAllItems = (req, res) => {
  const data = items;

  res.status(200).json({
    status: 200,
    data,
  });
};

const getItem = (req, res) => {
  const id = req.params.id;
  const item = items[id];

  if (item) {
    res.status(200).json({ status: 200, item: item });
  } else {
    res.status(404).json({ status: 404, message: `params sent: ${id}` });
  }
};

// ----------------to do
const updateItem = (req, res) => {
  res.status(200);
};

const getAllCompanies = (req, res) => {
  res.status(200).json({ status: 200, companies: companies });
};

const getCompany = (req, res) => {
  const id = req.params.id;
  const company = companies[id];

  if (company) {
    res.status(200).json({ status: 200, company: company });
  } else {
    res.status(404).json({ status: 404, message: `params sent: ${id}` });
  }
};

const getAllCategories = (req, res) => {
  let categories = [];
  items.forEach((item) => {
    if (categories.indexOf(item.category) === -1) {
      categories.push(item.category);
    }
  });

  res.status(200).json({ status: 200, categories: categories });
};

const getItemByCompany = (req, res) => {
  const companyId = req.params.companyId;
  const items = items.filter((item) => item.companyId === companyId);
};

module.exports = {
  getAllItems,
  getItem,
  updateItem,
  getAllCompanies,
  getCompany,
  getAllCategories,
};

const items = require("./data/items.json");
const companies = require("./data/companies.json");

const getAllItems = (req, res) => {
  let data = [];

  // setting a limit of items per page and the amount of items to skip (offset)
  //the limit should be passed as a query in the get method (/items?{limit})
  let limit = parseInt(req.query.limit, 10);
  let offset = parseInt(req.query.skip);
  // console.log(offset);
  // console.log(limit);

  //taking care of some extreme cases
  if (limit > items.length) {
    limit = items.length;
    offset = 0;
  }
  //this doesn't seem to be working
  if (limit + offset > items.length) {
    limit = items.length - offset;
    // console.log(`limit: ${limit}`);
  }

  //iterating through items and pushing them into data according to limit and offset
  for (let i = offset; i < limit + offset; i++) {
    data.push(items[i]);
  }

  res.status(200).json({
    status: 200,
    data: data,
  });
};

const getItem = (req, res) => {
  const _id = Number(req.params.id);
  // console.log(_id);
  // const item = items[_id];
  const item = items.find((results) => {
    // console.log(typeof results._id);
    return _id === results._id;
  });

  // console.log(item);

  if (item) {
    res.status(200).json({ status: 200, item: item });
  } else {
    res.status(404).json({ status: 404, message: `params sent: ${_id}` });
  }
};

// this need some change since we are getting an array maybe not if we map on the front end
const updateItem = (req, res) => {
  let item = items.find((item) => item._id === Number(req.params.id));
  if (item) {
    let bodyValue = req.body;
    item = { ...item, bodyValue };
    res.status(200).json({
      status: 200,
      data: item,
      message: "success",
    });
  } else {
    res.status(400).json({
      status: 400,
      message: `Item ${id} does not exist`,
      data: item,
    });
  }
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

//HERE

const getCategoryByCategoryName = (req, res) => {
  const categoryName = req.params.categoryName;
  const results = items.filter((result) => result.category === categoryName);
  if (results) {
    res.status(200).json({
      status: 200,
      data: results,
    });
  } else {
    res.status(400).json({
      status: 400,
      error: `Invalid category`,
      data: results,
      categoryId,
    });
  }
};

const getItemByCompany = (req, res) => {
  const companyId = Number(req.params.id);
  console.log(req.params);

  console.log(companyId);
  console.log(typeof companyId);

  const newItems = items.filter((item) => item.companyId === companyId);
  if (newItems) {
    res.status(200).json({ status: 200, items: newItems });
  } else {
    res.status(400).json({
      status: 200,
      error: `Item ${items} not found. ${companyId}`,
      data: items,
    });
  }
};

module.exports = {
  getAllItems,
  getItem,
  updateItem,
  getAllCompanies,
  getCompany,
  getAllCategories,
  getItemByCompany,
  getCategoryByCategoryName,
};

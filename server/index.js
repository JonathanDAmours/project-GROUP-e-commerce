"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const PORT = 4000;

const {
  getAllItems,
  getItem,
  updateItem,
  getAllCompanies,
  getCompany,
  getAllCategories,
  getCategory,
} = require("./handlers");

express()
  .use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Methods",
      "OPTIONS, HEAD, GET, PUT, POST, DELETE"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  })
  .use(morgan("tiny"))
  .use(express.static("./server/assets"))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))
  .use("/", express.static(__dirname + "/"))

  // REST endpoints?
  // .get('/bacon', (req, res) => res.status(200).json('🥓'))
  .get("/items", getAllItems)
  .get("/items/:id", getItem)
  .patch("/items/:id", updateItem)
  .get("/companies", getAllCompanies)
  .get("/companies/:id", getCompany)
  .get("/categories", getAllCategories)
  .get("/categories/:id", getCategory)

  //catchall for server errors

  .get("*", (req, res) => {
    res.status(404).json({
      status: 404,
      message: "This is obviously not what you are looking for.",
    });
  })

  .listen(PORT, () => console.info(`Listening on port ${PORT}`));

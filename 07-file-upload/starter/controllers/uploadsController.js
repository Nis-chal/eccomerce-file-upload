const Product = require("../models/Product");
const { StatusCodes } = require("http-status-codes");

const uploadProductImage = async (req, res) => {
  res.send("upload product image");
};
const getAllProducts = async (req, res) => {
  res.send("create product");
};

module.exports = {
  createProduct,
  getAllProducts,
};

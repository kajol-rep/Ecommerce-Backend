const express = require("express");
const router = express.Router();
const {productsData} = require("../Database/data")
const Product = require("../Models/Products.js");


router.route("/")
.get(async(req,res) => {
  const products = await Product.find({});
  try {
    res.json({
      success: true,
      products: products
    })
  }catch(err){
    res.status(500).json({
      success: false,
      error: "Unable to fetch Products",
      message: err.message
    })
  }
})



module.exports = router;